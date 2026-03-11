import { useParams, useLocation, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import PlanCards from "@/components/PlanCards";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { sectors } from "@/data/sectors";
import { cities } from "@/data/cities";
import { cityContext } from "@/data/cityContext";
import { getLongtailKeywords } from "@/data/longtailKeywords";
import { sectorSearchContent } from "@/data/searchBehaviorContent";
import { getCompetitionAnswer, getNeighborhoodAnswer } from "@/data/competitionData";

const SectorCityPage = () => {
  const { sector: sectorParam, ciudad } = useParams<{ sector: string; ciudad: string }>();
  const location = useLocation();

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const parentSlug = pathSegments.length >= 2 ? pathSegments.slice(0, -1).join("/") : "";

  const sector = sectors.find((s) => s.slug === parentSlug);
  const city = cities.find((c) => c.slug === ciudad);

  if (!sector || !city) {
    return <div className="container py-20 text-center">Página no encontrada</div>;
  }

  const sectorLabel = sector.pillBadge.replace("Para ", "").toLowerCase();
  const ctxData = cityContext[city.slug] || { contextLine1: "", contextLine2: "" };
  const ctaWordCap = sector.ctaWord.charAt(0).toUpperCase() + sector.ctaWord.slice(1);
  const ctaWordSingular = sector.ctaWord === "alumnos" ? "alumno" : sector.ctaWord === "pacientes" ? "paciente" : "cliente";

  // Anti-cannibalism H1 formula
  const h1Text = `Más ${ctaWordCap} para tu ${sector.relatedLabel.endsWith("s") ? `Negocio de ${sector.relatedLabel}` : sector.relatedLabel} en ${city.name}: Cómo Aparecer en Google cuando Te Buscan`;

  const metaTitle = `Más ${ctaWordCap} para ${sector.relatedLabel} en ${city.name} | slocal.es`;
  const metaDesc = `¿Eres ${sectorLabel} en ${city.name} y quieres más ${sector.ctaWord}? Te ponemos en Google Maps y en los primeros resultados de ${city.name}. Sin agencias. Desde €150/mes.`;
  const canonical = `/${sector.slug}/${city.slug}`;

  // JSON-LD schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: sector.pillBadge, item: `https://slocal.es/${sector.slug}` },
      { "@type": "ListItem", position: 3, name: city.name, item: `https://slocal.es${canonical}` },
    ],
  };

  const selectedFaqs = sector.faqs.slice(0, 4).map((f) => ({
    q: f.q.replace(/\?$/, ` en ${city.name}?`),
    a: f.a + ` En ${city.name}, esto aplica especialmente por las características del mercado local.`,
  }));

  // Add Q5 and Q6 (sector+city specific)
  selectedFaqs.push({
    q: `¿Cuánta competencia hay para ${sectorLabel} en ${city.name}?`,
    a: getCompetitionAnswer(sector.slug, city.slug),
  });
  selectedFaqs.push({
    q: `¿En qué barrios o zonas de ${city.name} posiciona el sistema?`,
    a: getNeighborhoodAnswer(sector.slug, city.slug, city.name, sectorLabel),
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: selectedFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Visibilidad en Google para ${sectorLabel} en ${city.name}`,
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    areaServed: { "@type": "City", name: city.name },
    serviceType: `Posicionamiento local en Google para ${sectorLabel}`,
    description: `Sistema de visibilidad en Google para ${sectorLabel} en ${city.name}: ficha de Google Business Profile, web local y posicionamiento orgánico.`,
  };

  const otherCities = cities.filter((c) => c.slug !== city.slug);
  const otherSectors = sectors.filter((s) => s.slug !== sector.slug);
  const mockupText = sector.mockupResult.replace("[Ciudad]", city.name);

  // Search behavior content
  const searchContent = sectorSearchContent[sector.slug];
  const searchBehavior = searchContent?.searchBehavior.replace(/\[ciudad\]/g, city.name).replace(/\[sectorLabel\]/g, sectorLabel) || "";
  const competitionParagraph = searchContent?.competitionContext[city.slug] || "";
  const gbpParagraph = searchContent?.gbpImportance.replace(/\[ciudad\]/g, city.name) || "";
  const slocalParagraph = searchContent?.slocalDifference.replace(/\[ciudad\]/g, city.name).replace(/\[barrio\]/g, "tu zona") || "";

  // Longtail keywords
  const longtails = getLongtailKeywords(sector.slug, city.slug, city.name);

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDesc}
        canonical={canonical}
        jsonLd={[breadcrumbSchema, faqSchema, serviceSchema]}
      />

      {/* SECTION 1+2 — HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <BreadcrumbNav items={[
              { label: "Inicio", href: "/" },
              { label: sector.pillBadge, href: `/${sector.slug}` },
              { label: city.name },
            ]} />
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block border border-primary text-primary text-xs font-heading rounded-full px-4 py-1.5">
                {sector.pillBadge}
              </span>
              <span className="inline-block border border-dark-fg/30 text-dark-fg text-xs font-heading rounded-full px-4 py-1.5">
                {city.name}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              {h1Text}
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              El sistema que posiciona tu negocio en {city.name} cuando alguien busca {sectorLabel} cerca. Sin agencias, con resultados visibles cada mes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contacto" className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors">
                Empezar en {city.name} →
              </Link>
            </div>
          </div>

          {/* MOCKUP B */}
          <div className="bg-card text-card-foreground rounded-xl border border-border p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/40" />
              <div className="w-3 h-3 rounded-full bg-primary/40" />
              <div className="w-3 h-3 rounded-full bg-green-400/40" />
              <div className="flex-1 bg-muted rounded-full h-6 ml-2 flex items-center px-3">
                <span className="text-[11px] text-muted-foreground truncate">{mockupText.toLowerCase()}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border border-primary/30 bg-primary/5 rounded-lg p-4">
                <p className="text-primary text-xs mb-1">slocal.es</p>
                <p className="font-heading text-sm text-foreground mb-1">{mockupText}</p>
                <p className="text-xs text-muted-foreground">Sistema de visibilidad local en {city.name} — Ficha optimizada, web y posicionamiento.</p>
              </div>
              {[1, 2].map((i) => (
                <div key={i} className="rounded-lg p-4 opacity-40">
                  <div className="w-24 h-2 bg-muted rounded mb-2" />
                  <div className="w-full h-2.5 bg-muted rounded mb-1.5" />
                  <div className="w-3/4 h-2 bg-muted rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — LOCAL CONTEXT (expanded, ~300 words) */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            ¿Cómo buscan {sectorLabel} los clientes en {city.name}?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{searchBehavior}</p>
          <p className="text-muted-foreground leading-relaxed mb-4">{competitionParagraph}</p>
          <p className="text-muted-foreground leading-relaxed mb-4">{gbpParagraph}</p>
          <p className="text-muted-foreground leading-relaxed">
            {slocalParagraph}{" "}
            <Link to={`/${sector.slug}`} className="text-primary hover:underline font-heading text-sm">
              Ver más sobre el sistema para {sectorLabel} →
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 4 — LONGTAIL KEYWORDS */}
      <section className="bg-warm-bg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Qué búsquedas capturamos para tu {sector.relatedLabel.toLowerCase().endsWith("s") ? `negocio de ${sectorLabel}` : sectorLabel} en {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {longtails.map((kw) => (
              <div key={kw} className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3">
                <span className="text-primary text-sm shrink-0">✓</span>
                <span className="text-sm text-foreground">{kw}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            Estas son las búsquedas reales que posiciona el sistema para tu negocio. Cada una es una oportunidad de que un {ctaWordSingular} potencial en {city.name} te encuentre.
          </p>
        </div>
      </section>

      {/* SECTION 5 — WHAT WE DO (expanded cards) */}
      <section className="bg-warm-bg py-16 border-t border-border">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            El sistema para {sectorLabel} en {city.name}: paso a paso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:border-primary hover:-translate-y-[3px]">
              <h3 className="font-heading text-base mb-3">{sector.gbpCard.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{sector.gbpCard.body} En {city.name}, esto te posiciona frente a la competencia local directa.</p>
              <p className="text-xs text-primary font-heading">Resultado: Apareces en el mapa cuando buscan {sectorLabel} en {city.name}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:border-primary hover:-translate-y-[3px]">
              <h3 className="font-heading text-base mb-3">{sector.webCard.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{sector.webCard.body} Adaptado al mercado de {city.name} y sus zonas.</p>
              <p className="text-xs text-primary font-heading">Resultado: Cada servicio y zona tiene su propia página posicionando</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:border-primary hover:-translate-y-[3px]">
              <h3 className="font-heading text-base mb-3">Informe mensual de posiciones y contactos</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Cada mes un informe claro: qué posiciones has ganado en {city.name}, cuántas visitas ha tenido tu web y cuántos {sector.reportCard} han contactado desde Google. Sin tecnicismos.
              </p>
              <p className="text-xs text-primary font-heading">Resultado: Cada mes sabes exactamente cuántos {sector.ctaWord} llegaron desde Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — LOCAL TRUST BLOCK */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Por qué funciona para {sectorLabel} en {city.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left: stat cards */}
            <div className="space-y-4">
              {[
                { number: "8 de cada 10", text: "personas buscan servicios locales en Google antes de llamar" },
                { number: "3 resultados", text: "es todo lo que ve el cliente en Google Maps antes de elegir" },
                { number: "Mes 4-6", text: "cuando empiezan a consolidarse las posiciones en Google" },
              ].map((stat) => (
                <div key={stat.number} className="bg-dark-bg rounded-xl p-5 flex items-start gap-4">
                  <span className="text-primary font-heading text-2xl shrink-0">{stat.number}</span>
                  <p className="text-dark-fg/80 text-sm leading-relaxed">{stat.text}</p>
                </div>
              ))}
            </div>
            {/* Right: paragraph */}
            <div>
              <p className="text-muted-foreground leading-relaxed">
                En {city.name}, la mayoría de {sectorLabel} no tienen su presencia digital bien trabajada.
                Eso es una oportunidad real. El sistema de slocal.es está diseñado para
                que tu negocio ocupe ese espacio — con una ficha de Google optimizada,
                una web que Google puede leer correctamente y contenido que responde
                exactamente a lo que buscan tus {sector.ctaWord} en {city.name}.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                {ctxData.contextLine1}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                {ctxData.contextLine2} Para un negocio de {sectorLabel}, esto significa que cada búsqueda sin respuesta es un {ctaWordSingular} que se va a la competencia.{" "}
                <Link to={`/seo-local-${city.slug}`} className="text-primary hover:underline font-heading text-sm">
                  Más sobre SEO local en {city.name} →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — PLANS */}
      <section className="py-16 bg-warm-bg">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">Planes para {sectorLabel} en {city.name}</h2>
          <PlanCards />
          <p className="text-center text-sm text-muted-foreground mt-6">
            Trabajamos con {sectorLabel} de {city.name} y de toda España de forma remota.
          </p>
        </div>
      </section>

      {/* SECTION 8 — FAQ (6 questions) */}
      <FAQSection title={`Preguntas frecuentes sobre ${sectorLabel} en ${city.name}`} items={selectedFaqs} />

      {/* SECTION 9 — RELATED PAGES (3-column) */}
      <section className="py-12">
        <div className="container">
          <h2 className="font-heading text-xl md:text-2xl mb-8">Explora más opciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-heading text-lg mb-4">Mismo sector, otras ciudades</h3>
              <div className="flex flex-wrap gap-2">
                {otherCities.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/${sector.slug}/${c.slug}`}
                    className="border border-border bg-card rounded-full px-4 py-2 text-sm font-heading hover:border-primary hover:text-primary transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading text-lg mb-4">Misma ciudad, otros sectores</h3>
              <div className="flex flex-wrap gap-2">
                {otherSectors.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}/${city.slug}`}
                    className="border border-border bg-card rounded-full px-4 py-2 text-sm font-heading hover:border-primary hover:text-primary transition-colors"
                  >
                    {s.relatedLabel}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading text-lg mb-4">También puede interesarte</h3>
              <div className="flex flex-col gap-2">
                <Link
                  to={`/${sector.slug}`}
                  className="border border-border bg-card rounded-lg px-4 py-3 text-sm font-heading hover:border-primary hover:text-primary transition-colors"
                >
                  {sector.pillBadge} — Página principal →
                </Link>
                <Link
                  to={`/seo-local-${city.slug}`}
                  className="border border-border bg-card rounded-lg px-4 py-3 text-sm font-heading hover:border-primary hover:text-primary transition-colors"
                >
                  SEO Local en {city.name} →
                </Link>
                <Link
                  to="/planes"
                  className="border border-border bg-card rounded-lg px-4 py-3 text-sm font-heading hover:border-primary hover:text-primary transition-colors"
                >
                  Ver todos los planes →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <CTASection
        title={`¿Empezamos a posicionar tu negocio de ${sectorLabel} en ${city.name}?`}
        buttonText="Hablemos →"
      />
    </>
  );
};

export default SectorCityPage;
