import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/servicios/$")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
