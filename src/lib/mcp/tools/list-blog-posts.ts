import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { posts } from "@/data/posts";

export default defineTool({
  name: "list_blog_posts",
  title: "List blog posts",
  description:
    "List the published slocal.es blog articles with title, category, date, excerpt and URL. Optionally filter by category.",
  inputSchema: {
    category: z
      .string()
      .optional()
      .describe("Optional category filter: Google Maps, SEO Local, Por sector or Casos prácticos"),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const wanted = category?.trim().toLowerCase();
    const items = posts
      .filter((p) => !wanted || p.category.toLowerCase() === wanted)
      .map((p) => ({
        slug: p.slug,
        title: p.title,
        category: p.category,
        date: p.date,
        excerpt: p.excerpt,
        url: `https://slocal.es/blog/${p.slug}`,
      }));
    return {
      content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }],
      structuredContent: { count: items.length, items },
    };
  },
});
