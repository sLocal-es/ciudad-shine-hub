import { createFileRoute } from "@tanstack/react-router";

import CasoExitoDetailPage from "@/pages/CasoExitoDetailPage";
import NotFound from "@/pages/NotFound";
import { getCaseBySlug } from "@/data/casosExito";

export const Route = createFileRoute("/_main/casos-de-exito/$slug")({
  component: CasoExitoDetail,
  notFoundComponent: NotFound,
});

function CasoExitoDetail() {
  const { slug } = Route.useParams();
  const study = getCaseBySlug(slug);

  if (!study) return <NotFound />;

  return <CasoExitoDetailPage study={study} />;
}
