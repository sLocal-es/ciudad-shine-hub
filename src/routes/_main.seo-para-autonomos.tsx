import { createFileRoute } from "@tanstack/react-router";
import AutonomosPage from "@/pages/AutonomosPage";

export const Route = createFileRoute("/_main/seo-para-autonomos")({
  component: AutonomosPage,
});
