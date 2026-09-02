import { createFileRoute } from "@tanstack/react-router";
import BlogPostPage from "@/pages/BlogPost";

export const Route = createFileRoute("/_main/blog/$slug")({
  component: BlogPostPage,
});
