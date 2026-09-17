import { createFileRoute } from "@tanstack/react-router";
import CasosExitoPage from "@/pages/CasosExitoPage";

export const Route = createFileRoute("/_main/casos-de-exito/")({
  component: CasosExitoPage,
});
