import { createFileRoute } from "@tanstack/react-router";
import InmobiliariasPage from "@/pages/InmobiliariasPage";

export const Route = createFileRoute("/_main/seo-para-inmobiliarias")({
  component: InmobiliariasPage,
});
