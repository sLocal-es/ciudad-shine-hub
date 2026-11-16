import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { oauthReturnPath } from "@/lib/oauth-return-path";

export const Route = createFileRoute("/login")({
  staticData: { sitemap: false },
  validateSearch: (s: Record<string, unknown>) => ({
    next: oauthReturnPath(s["next"]),
  }),
  head: () => ({
    meta: [
      { title: "Acceso para asistentes de IA | slocal.es" },
      { name: "description", content: "Inicia sesión para autorizar a un asistente de IA a consultar el contenido de slocal.es." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Acceso para asistentes de IA | slocal.es" },
      { property: "og:description", content: "Inicia sesión para autorizar a un asistente de IA a consultar el contenido de slocal.es." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const { next } = Route.useSearch();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setInfo(null);
    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setBusy(false);
        setError("No hemos podido iniciar sesión. Revisa el email y la contraseña.");
        return;
      }
      navigate({ href: next });
      return;
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: new URL(next, window.location.origin).href },
    });
    setBusy(false);
    if (error) {
      setError("No hemos podido crear la cuenta. Inténtalo de nuevo.");
      return;
    }
    if (data.session) {
      navigate({ href: next });
      return;
    }
    setInfo("Te hemos enviado un email. Confírmalo para continuar.");
  }

  return (
    <main className="min-h-screen bg-dark-bg flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-2xl bg-background p-8 shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">slocal.es</p>
        <h1 className="mt-2 text-3xl font-bold text-foreground">
          {mode === "signin" ? "Inicia sesión" : "Crea tu cuenta"}
        </h1>
        <p className="mt-2 text-muted-foreground">
          Necesitas una cuenta para autorizar a un asistente de IA a consultar el contenido de la web.
        </p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-foreground">Email</span>
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-foreground">Contraseña</span>
            <input
              type="password"
              required
              minLength={8}
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </label>
          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          {info && <p role="status" className="text-sm text-foreground">{info}</p>}
          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
          >
            {busy ? "Un momento…" : mode === "signin" ? "Entrar" : "Crear cuenta"}
          </button>
        </form>
        <button
          type="button"
          onClick={() => {
            setMode(mode === "signin" ? "signup" : "signin");
            setError(null);
            setInfo(null);
          }}
          className="mt-4 w-full text-sm font-medium text-primary hover:underline"
        >
          {mode === "signin" ? "¿No tienes cuenta? Créala" : "¿Ya tienes cuenta? Inicia sesión"}
        </button>
      </div>
    </main>
  );
}
