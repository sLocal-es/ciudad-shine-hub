import { createFileRoute } from "@tanstack/react-router";
import Sistema from "@/pages/Sistema";

export const Route = createFileRoute("/sistema")({
  component: Sistema,
});
