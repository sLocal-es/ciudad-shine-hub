import { createFileRoute } from "@tanstack/react-router";
import PsicologosPage from "@/pages/PsicologosPage";

export const Route = createFileRoute("/_main/seo-para-psicologos")({
  component: PsicologosPage,
});
