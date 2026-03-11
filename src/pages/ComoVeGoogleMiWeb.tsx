import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";

const SLOCAL_SCORES = {
  desktop: { performance: 99, accessibility: 94, bestPractices: 100, seo: 100 },
  mobile: { performance: 91, accessibility: 94, bestPractices: 100, seo: 100 },
};

const CATEGORIES = [
  { key: "performance" as const, label: "Rendimiento" },
  { key: "accessibility" as const, label: "Accesibilidad" },
  { key: "bestPractices" as const, label: "Buenas Prácticas" },
  { key: "seo" as const, label: "SEO" },
];

const ScoreCircle = ({ score, label }: { score: number; label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-20 h-20 rounded-full border-4 border-green-500 bg-green-50 flex items-center justify-center text-2xl font-bold text-green-600">
      {score}
    </div>
    <span className="text-sm text-muted-foreground font-medium text-center">{label}</span>
  </div>
);

const ComoVeGoogleMiWeb = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cómo Ve Google Tu Web — slocal.es",
    url: "https://slocal.es/como-ve-google-mi-web",
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
        description="Descubre cómo ve Google tu web. Analiza rendimiento, accesibilidad, buenas prácticas y SEO con Google PageSpeed Insights. Gratis."
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
            tu web directamente en Google PageSpeed Insights.
          </p>

          <a
            href="https://pagespeed.web.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="h-12 px-8 text-base font-heading">
              Ir a Google PageSpeed Insights →
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Introduce tu URL en la herramienta oficial de Google y obtén tu puntuación real.
          </p>
        </div>
      </section>

      {/* SLOCAL SCORES */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
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
      </section>

      <CTASection title="¿Tu web no puntúa bien? Podemos ayudarte" />
    </>
  );
};

export default ComoVeGoogleMiWeb;
