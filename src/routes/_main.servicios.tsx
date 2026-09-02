import { createFileRoute } from "@tanstack/react-router";
import Servicios from "@/pages/Servicios";

export const Route = createFileRoute("/_main/servicios")({
  component: Servicios,
});
