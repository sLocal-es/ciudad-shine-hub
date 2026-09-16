import { defineTool } from "@lovable.dev/mcp-js";
import { sectors } from "@/data/sectors";
import { seoLocalCities } from "@/data/seoLocalCities";
import { services } from "@/data/services";
import { posts } from "@/data/posts";

const SITE = "https://slocal.es";

export default defineTool({
  name: "list_pages",
  title: "List pages",
  description:
    "List every published page of slocal.es (sector pages, city pages, service pages and blog articles) with its title and URL.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = [
      ...sectors.map((s) => ({ type: "sector", slug: s.slug, title: s.h1, url: `${SITE}/${s.slug}` })),
      ...Object.values(seoLocalCities).map((c) => ({
        type: "city",
        slug: `seo-local-${c.slug}`,
        title: `SEO Local en ${c.name}`,
        url: `${SITE}/seo-local-${c.slug}`,
      })),
      ...services.map((s) => ({ type: "service", slug: s.slug, title: s.title, url: `${SITE}/${s.slug}` })),
      ...posts.map((p) => ({ type: "blog", slug: p.slug, title: p.title, url: `${SITE}/blog/${p.slug}` })),
    ];
    return {
      content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }],
      structuredContent: { count: items.length, items },
    };
  },
});
