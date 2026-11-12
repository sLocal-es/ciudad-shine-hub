import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/seo-para-negocios-locales")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
