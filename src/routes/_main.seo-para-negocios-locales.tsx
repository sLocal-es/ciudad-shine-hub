import { createFileRoute } from "@tanstack/react-router";
import SeoNegociosLocales from "@/pages/SeoNegociosLocales";

export const Route = createFileRoute("/_main/seo-para-negocios-locales")({
  component: SeoNegociosLocales,
});
