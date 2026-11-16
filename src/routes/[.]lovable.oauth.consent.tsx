import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/.lovable/oauth/consent")({
  // SSR has no localStorage session and would redirect signed-in users.
  ssr: false,
  staticData: { sitemap: false },
  validateSearch: (s: Record<string, unknown>) => ({
    authorization_id: typeof s["authorization_id"] === "string" ? s["authorization_id"] : "",
  }),
  head: () => ({
    meta: [
      { title: "Autorizar asistente de IA | slocal.es" },
      { name: "description", content: "Autoriza o rechaza el acceso de un asistente de IA al contenido de slocal.es." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Autorizar asistente de IA | slocal.es" },
      { property: "og:description", content: "Autoriza o rechaza el acceso de un asistente de IA al contenido de slocal.es." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  beforeLoad: async ({ search, location }) => {
    if (!search.authorization_id) throw new Error("Falta el identificador de autorización.");
    const { data } = await supabase.auth.getSession();
    const next = location.pathname + location.searchStr;
    if (!data.session) throw redirect({ to: "/login", search: { next } });
  },
  loader: async ({ location }) => {
    const authorizationId = new URLSearchParams(location.search).get("authorization_id")!;
    const { data, error } = await supabase.auth.oauth.getAuthorizationDetails(authorizationId);
    if (error) throw error;
    const immediate = (data as { redirect_url?: string; redirect_to?: string } | null)?.redirect_url ??
      (data as { redirect_to?: string } | null)?.redirect_to;
    if (immediate && !(data as { client?: unknown } | null)?.client) throw redirect({ href: immediate });
    return data as { client?: { name?: string } } | null;
  },
  component: Consent,
  errorComponent: ({ error }) => (
    <main className="min-h-screen bg-dark-bg flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl bg-background p-8">
        <h1 className="text-2xl font-bold text-foreground">No se pudo cargar la autorización</h1>
        <p className="mt-2 text-muted-foreground">
          {error instanceof Error ? error.message : "La solicitud no es válida o ha caducado."} Vuelve a iniciar la conexión desde tu asistente.
        </p>
      </div>
    </main>
  ),
});

function Consent() {
  const details = Route.useLoaderData();
  const { authorization_id } = Route.useSearch();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const clientName = details?.client?.name ?? "Un asistente de IA";

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const { data, error } = approve
      ? await supabase.auth.oauth.approveAuthorization(authorization_id)
      : await supabase.auth.oauth.denyAuthorization(authorization_id);
    if (error) {
      setBusy(false);
      setError("No se pudo completar la acción. Inténtalo de nuevo.");
      return;
    }
    const d = data as { redirect_url?: string; redirect_to?: string } | null;
    const target = d?.redirect_url ?? d?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("El servidor de autorización no devolvió una dirección de retorno.");
      return;
    }
    window.location.href = target;
  }

  return (
    <main className="min-h-screen bg-dark-bg flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-2xl bg-background p-8 shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">slocal.es</p>
        <h1 className="mt-2 text-3xl font-bold text-foreground">Conectar {clientName}</h1>
        <p className="mt-2 text-muted-foreground">
          {clientName} podrá consultar, solo en modo lectura, el contenido publicado de slocal.es en tu nombre.
        </p>
        {error && <p role="alert" className="mt-4 text-sm text-destructive">{error}</p>}
        <div className="mt-6 flex gap-3">
          <button
            type="button"
            disabled={busy}
            onClick={() => decide(true)}
            className="flex-1 rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
          >
            Autorizar
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={() => decide(false)}
            className="flex-1 rounded-lg border border-border px-4 py-3 font-semibold text-foreground transition hover:border-primary disabled:opacity-60"
          >
            Rechazar
          </button>
        </div>
      </div>
    </main>
  );
}
