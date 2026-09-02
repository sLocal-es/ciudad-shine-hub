import { createFileRoute } from "@tanstack/react-router";
import SeoCordoba from "@/pages/SeoCordoba";

export const Route = createFileRoute("/_main/seo-local-cordoba")({
  component: SeoCordoba,
});
