import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { sectors } from "@/data/sectors";

export default defineTool({
  name: "get_sector_page",
  title: "Get sector page",
  description:
    "Return the published content of one slocal.es sector page (title, meta description, H1, pain points and FAQs) by its slug, e.g. seo-para-fontaneros.",
  inputSchema: {
    slug: z.string().describe("Sector page slug, e.g. seo-para-fontaneros"),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const normalized = slug.trim().replace(/^\/+|\/+$/g, "");
    const sector = sectors.find((s) => s.slug === normalized);
    if (!sector) {
      throw new ToolError(
        `No sector page with slug "${normalized}". Use list_pages to see the available slugs.`,
      );
    }
    const data = {
      url: `https://slocal.es/${sector.slug}`,
      metaTitle: sector.metaTitle,
      metaDescription: sector.metaDesc,
      h1: sector.h1,
      badge: sector.pillBadge,
      intro: sector.painSubtitle,
      painPoints: sector.painCards.map((c) => c.text),
      googleBusinessProfile: sector.gbpCard,
      website: sector.webCard,
      faqs: sector.faqs,
    };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
