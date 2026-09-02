import { createFileRoute } from "@tanstack/react-router";
import ComoFunciona from "@/pages/ComoFunciona";

export const Route = createFileRoute("/_main/como-funciona")({
  component: ComoFunciona,
});
