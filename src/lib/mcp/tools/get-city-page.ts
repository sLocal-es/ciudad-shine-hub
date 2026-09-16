import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { seoLocalCities } from "@/data/seoLocalCities";

export default defineTool({
  name: "get_city_page",
  title: "Get city page",
  description:
    "Return the published local-SEO information slocal.es has for one Spanish city (population, competition level, expected timeframe, neighbourhood searches and opportunity notes).",
  inputSchema: {
    city: z.string().describe("City name or slug, e.g. madrid or Barcelona"),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ city }) => {
    const key = city
      .trim()
      .toLowerCase()
      .replace(/^\/?(seo-local-)?/, "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const found = seoLocalCities[key];
    if (!found) {
      throw new ToolError(
        `No city page for "${city}". Available cities: ${Object.keys(seoLocalCities).join(", ")}.`,
      );
    }
    const data = {
      url: `https://slocal.es/seo-local-${found.slug}`,
      name: found.name,
      population: found.population,
      competition: found.competition,
      timeframe: found.plazo,
      neighbourhoodSearches: found.barriosBusquedas,
      opportunity: found.oportunidad,
    };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
