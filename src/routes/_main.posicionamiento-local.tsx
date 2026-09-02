import { createFileRoute } from "@tanstack/react-router";
import PosicionamientoLocal from "@/pages/PosicionamientoLocal";

export const Route = createFileRoute("/_main/posicionamiento-local")({
  component: PosicionamientoLocal,
});
