import { createFileRoute } from "@tanstack/react-router";
import DentistasPage from "@/pages/DentistasPage";

export const Route = createFileRoute("/_main/seo-para-dentistas")({
  component: DentistasPage,
});
