import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { posts } from "@/data/posts";

function toPlainText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<\/(p|h1|h2|h3|h4|li|tr|div)>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export default defineTool({
  name: "get_blog_post",
  title: "Get blog post",
  description:
    "Return the full published text of one slocal.es blog article by slug, including its FAQs.",
  inputSchema: {
    slug: z.string().describe("Blog article slug, without /blog/"),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const normalized = slug.trim().replace(/^\/?(blog\/)?/, "").replace(/\/+$/, "");
    const post = posts.find((p) => p.slug === normalized);
    if (!post) {
      throw new ToolError(
        `No blog article with slug "${normalized}". Use list_blog_posts to see the available slugs.`,
      );
    }
    const data = {
      url: `https://slocal.es/blog/${post.slug}`,
      title: post.title,
      metaDescription: post.metaDescription,
      category: post.category,
      date: post.date,
      excerpt: post.excerpt,
      content: toPlainText(post.content),
      faqs: post.faqs ?? [],
    };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
