import { createFileRoute } from "@tanstack/react-router";
import AparecerEnGoogleMaps from "@/pages/AparecerEnGoogleMaps";

export const Route = createFileRoute("/_main/aparecer-en-google-maps")({
  component: AparecerEnGoogleMaps,
});
