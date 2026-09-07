import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/aparecer-en-google-maps")({
  beforeLoad: () => {
    throw redirect({ to: "/ficha-google-mi-negocio", statusCode: 301 });
  },
});
