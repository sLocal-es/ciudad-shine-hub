import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CTASection from "@/components/CTASection";

interface CategoryScore {
  label: string;
  score: number | null;
}

interface DeviceResults {
  performance: number | null;
  accessibility: number | null;
  bestPractices: number | null;
  seo: number | null;
}

const SLOCAL_SCORES = {
  desktop: { performance: 99, accessibility: 94, bestPractices: 100, seo: 100 },
  mobile: { performance: 91, accessibility: 94, bestPractices: 100, seo: 100 },
};

const CATEGORIES: { key: keyof DeviceResults; label: string }[] = [
  { key: "performance", label: "Rendimiento" },
  { key: "accessibility", label: "Accesibilidad" },
  { key: "bestPractices", label: "Buenas Prácticas" },
  { key: "seo", label: "SEO" },
];

const getScoreColor = (score: number) => {
  if (score >= 90) return "text-green-600 border-green-500";
  if (score >= 50) return "text-orange-500 border-orange-400";
  return "text-red-500 border-red-500";
};

const getScoreBg = (score: number) => {
  if (score >= 90) return "bg-green-50";
  if (score >= 50) return "bg-orange-50";
  return "bg-red-50";
};

const ScoreCircle = ({ score, label }: { score: number | null; label: string }) => {
  if (score === null) return null;
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`w-20 h-20 rounded-full border-4 flex items-center justify-center text-2xl font-bold ${getScoreColor(score)} ${getScoreBg(score)}`}
      >
        {score}
      </div>
      <span className="text-sm text-muted-foreground font-medium text-center">{label}</span>
    </div>
  );
};

const parseResults = (data: any): DeviceResults => ({
  performance: Math.round((data.lighthouseResult?.categories?.performance?.score ?? 0) * 100),
  accessibility: Math.round((data.lighthouseResult?.categories?.accessibility?.score ?? 0) * 100),
  bestPractices: Math.round((data.lighthouseResult?.categories?.["best-practices"]?.score ?? 0) * 100),
  seo: Math.round((data.lighthouseResult?.categories?.seo?.score ?? 0) * 100),
});

const ComoVeGoogleMiWeb = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [desktopResults, setDesktopResults] = useState<DeviceResults | null>(null);
  const [mobileResults, setMobileResults] = useState<DeviceResults | null>(null);

  const handleAnalyze = async () => {
    const trimmed = url.trim();
    if (!trimmed) {
      setError("Introduce una URL válida");
      return;
    }

    let finalUrl = trimmed;
    if (!/^https?:\/\//i.test(finalUrl)) {
      finalUrl = "https://" + finalUrl;
    }

    setLoading(true);
    setError("");
    setDesktopResults(null);
    setMobileResults(null);

    try {
      const base = "https://www.googleapis.com/pagespeed/v5/runPagespeed";
      const cats = "&category=performance&category=accessibility&category=best-practices&category=seo";
      const [desktopRes, mobileRes] = await Promise.all([
        fetch(`${base}?url=${encodeURIComponent(finalUrl)}&strategy=desktop${cats}`),
        fetch(`${base}?url=${encodeURIComponent(finalUrl)}&strategy=mobile${cats}`),
      ]);

      if (!desktopRes.ok || !mobileRes.ok) {
        throw new Error("No se pudo analizar esa URL. Verifica que es accesible.");
      }

      const [desktopData, mobileData] = await Promise.all([desktopRes.json(), mobileRes.json()]);
      setDesktopResults(parseResults(desktopData));
      setMobileResults(parseResults(mobileData));
    } catch (e: any) {
      setError(e.message || "Error al analizar la web");
    } finally {
      setLoading(false);
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Cómo Ve Google Tu Web — slocal.es",
    url: "https://slocal.es/como-ve-google-mi-web",
    applicationCategory: "SEO Tool",
    operatingSystem: "Web",
    provider: {
      "@type": "Organization",
      name: "slocal.es",
      url: "https://slocal.es",
    },
  };

  return (
    <>
      <SEOHead
        title="Cómo Ve Google Tu Web | Analiza tu web gratis — slocal.es"
        description="Descubre cómo ve Google tu web. Analiza rendimiento, accesibilidad, buenas prácticas y SEO con datos reales de PageSpeed Insights. Gratis."
        canonical="/como-ve-google-mi-web"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container max-w-3xl text-center">
          <h1 className="font-heading text-3xl md:text-5xl mb-6">Cómo Ve Google Tu Web</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Google utiliza la velocidad de carga como factor de posicionamiento. Una web lenta pierde
            posiciones en los resultados de búsqueda, recibe menos visitas y convierte peor. Analiza
            tu web y descubre qué ve Google cuando la rastrea.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <Input
              type="url"
              placeholder="https://tuweb.es"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
              className="flex-1 h-12 text-base bg-card text-foreground"
            />
            <Button
              onClick={handleAnalyze}
              disabled={loading}
              className="h-12 px-8 text-base font-heading"
            >
              {loading ? "Analizando…" : "Analizar gratis"}
            </Button>
          </div>

          {error && <p className="text-destructive mt-4 text-sm">{error}</p>}
        </div>
      </section>

      {/* RESULTS */}
      {(desktopResults || mobileResults) && (
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <h2 className="font-heading text-2xl md:text-3xl text-center mb-10">
              Resultados de tu web
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Desktop */}
              {desktopResults && (
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                  <h3 className="font-heading text-lg mb-6 text-center">🖥️ Escritorio</h3>
                  <div className="grid grid-cols-2 gap-6 justify-items-center">
                    {CATEGORIES.map((c) => (
                      <ScoreCircle key={c.key} score={desktopResults[c.key]} label={c.label} />
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile */}
              {mobileResults && (
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                  <h3 className="font-heading text-lg mb-6 text-center">📱 Móvil</h3>
                  <div className="grid grid-cols-2 gap-6 justify-items-center">
                    {CATEGORIES.map((c) => (
                      <ScoreCircle key={c.key} score={mobileResults[c.key]} label={c.label} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* COMPARISON */}
            <div className="mt-16">
              <h2 className="font-heading text-2xl md:text-3xl text-center mb-10">
                Así puntúa slocal.es
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card rounded-xl p-6 shadow-sm border-2 border-primary">
                  <h3 className="font-heading text-lg mb-6 text-center">🖥️ Escritorio</h3>
                  <div className="grid grid-cols-2 gap-6 justify-items-center">
                    {CATEGORIES.map((c) => (
                      <ScoreCircle key={c.key} score={SLOCAL_SCORES.desktop[c.key]} label={c.label} />
                    ))}
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-sm border-2 border-primary">
                  <h3 className="font-heading text-lg mb-6 text-center">📱 Móvil</h3>
                  <div className="grid grid-cols-2 gap-6 justify-items-center">
                    {CATEGORIES.map((c) => (
                      <ScoreCircle key={c.key} score={SLOCAL_SCORES.mobile[c.key]} label={c.label} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center mt-10">
                <Link to="/contacto">
                  <Button size="lg" className="text-base font-heading px-10">
                    Quiero estos resultados para mi web
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <CTASection title="¿Tu web no puntúa bien? Podemos ayudarte" />
    </>
  );
};

export default ComoVeGoogleMiWeb;
