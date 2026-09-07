/// <reference types="vite/client" />
import { useEffect } from "react";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
} from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { reportLovableError } from "@/lib/lovable-error-reporting";

import "@fontsource-variable/dm-sans/index.css";
import "@fontsource-variable/plus-jakarta-sans/index.css";
import "@fontsource/dm-serif-display/400.css";
import appCss from "@/styles.css?url";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "slocal.es",
  url: "https://slocal.es",
  email: "info@slocal.es",
  logo: "https://slocal.es/favicon.png",
  description: "Visibilidad y captación en Google para negocios locales españoles",
  areaServed: "ES",
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  // Sitewide defaults ONLY. No title / description / og:* fallbacks here —
  // every page emits its own via <SEOHead>, so nothing is duplicated.
  head: () => ({
    meta: [
      { charSet: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { property: "og:site_name", content: "slocal.es" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "shortcut icon", href: "/favicon.ico" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema),
      },
      {
        id: "cookieyes",
        src: "https://cdn-cookieyes.com/client_data/a29533ddc2a32e0fbfde7eb0a4ce2620/script.js",
        async: true,
      },
    ],
  }),
  errorComponent: RootErrorComponent,
  component: RootComponent,
  shellComponent: RootDocument,
});

function AnalyticsScripts() {
  useEffect(() => {
    if (!document.getElementById("ga-script")) {
      const gaScript = document.createElement("script");
      gaScript.async = true;
      gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-FM0CL24HP8";
      gaScript.id = "ga-script";
      document.head.appendChild(gaScript);

      const gaConfig = document.createElement("script");
      gaConfig.id = "ga-config";
      gaConfig.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FM0CL24HP8');
      `;
      document.head.appendChild(gaConfig);
    }

    if (!document.getElementById("clarity-script")) {
      const clarityScript = document.createElement("script");
      clarityScript.id = "clarity-script";
      clarityScript.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "vv3etdqmge");
      `;
      document.head.appendChild(clarityScript);
    }
  }, []);

  return null;
}

function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        const el = document.getElementById(hash.replace(/^#/, ""));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);

  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AnalyticsScripts />
        <ScrollToTop />
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function RootErrorComponent({ error }: { error: Error }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="font-heading text-3xl font-bold">Algo ha ido mal</h1>
      <p className="max-w-md text-muted-foreground">
        No hemos podido cargar esta página. Puedes intentarlo de nuevo o volver al inicio.
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => void router.invalidate()}
          className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
        >
          Intentar de nuevo
        </button>
        <a
          href="/"
          className="rounded-full border border-border px-6 py-3 font-semibold text-foreground"
        >
          Ir al inicio
        </a>
      </div>
    </div>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
