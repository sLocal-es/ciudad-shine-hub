import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listPages from "./tools/list-pages";
import getSectorPage from "./tools/get-sector-page";
import getCityPage from "./tools/get-city-page";
import listBlogPosts from "./tools/list-blog-posts";
import getBlogPost from "./tools/get-blog-post";
import getService from "./tools/get-service";

// Vite inlines the stable ref; the published SUPABASE_URL may be a proxy.
const projectRef = import.meta.env["VITE_SUPABASE_PROJECT_ID"] ?? "project-ref-unset";

export default defineMcp({
  name: "slocal",
  title: "Slocal",
  version: "0.1.0",
  instructions:
    "Read-only access to the published content of slocal.es, a Spanish local-SEO agency. Use list_pages to discover pages, get_sector_page / get_city_page / get_service for landing-page content, and list_blog_posts / get_blog_post for articles. All data is already public on the website; never invent prices, guarantees or statistics that these tools do not return.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
    requireOAuthClientClaim: true,
  }),
  tools: [listPages, getSectorPage, getCityPage, listBlogPosts, getBlogPost, getService],
});
