import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { services } from "@/data/services";

export default defineTool({
  name: "get_service",
  title: "Get service page",
  description:
    "Return the published description of one slocal.es service page (what it is, how it works and its FAQs) by slug.",
  inputSchema: {
    slug: z.string().describe("Service page slug, e.g. seo-para-negocios-locales"),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const normalized = slug.trim().replace(/^\/+|\/+$/g, "");
    const service = services.find((s) => s.slug === normalized);
    if (!service) {
      throw new ToolError(
        `No service page with slug "${normalized}". Available: ${services.map((s) => s.slug).join(", ")}.`,
      );
    }
    const data = {
      url: `https://slocal.es/${service.slug}`,
      title: service.title,
      metaTitle: service.metaTitle,
      metaDescription: service.metaDesc,
      h1: service.h1,
      subtitle: service.subtitle,
      explainerHeading: service.explainerH2,
      explainer: service.explainerText,
      how: service.howCards,
      faqs: service.faqs,
    };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
