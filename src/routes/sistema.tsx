import { createFileRoute } from "@tanstack/react-router";
import Sistema from "@/pages/Sistema";

export const Route = createFileRoute("/sistema")({
  staticData: { sitemap: false },
  component: Sistema,
});
