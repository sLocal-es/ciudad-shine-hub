import { createFileRoute } from "@tanstack/react-router";
import Contacto from "@/pages/Contacto";

export const Route = createFileRoute("/_main/contacto")({
  component: Contacto,
});
