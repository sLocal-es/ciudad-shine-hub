import { useLocation, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import PlanCards from "@/components/PlanCards";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { sectors } from "@/data/sectors";
import { cities } from "@/data/cities";

const SectorPage = () => {
  const location = useLocation();
  const currentSlug = location.pathname.replace("/", "");
  const sector = sectors.find((s) => s.slug === currentSlug);

  if (!sector) return <div className="container py-20 text-center">Sector no encontrado</div>;

  const otherSectors = sectors.filter((s) => s.slug !== currentSlug).slice(0, 4);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "Sectores", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 3, name: sector.pillBadge, item: `https://slocal.es/${sector.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sector.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: sector.h1,
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    areaServed: "España",
  };

  // Derive a sector label for H2s
  const sectorLabel = sector.pillBadge.replace("Para ", "").toLowerCase();

  return (
    <>
      <SEOHead
        title={sector.metaTitle}
        description={sector.metaDesc}
        canonical={`/${sector.slug}`}
        jsonLd={[breadcrumbSchema, faqSchema, serviceSchema]}
      />

      {/* SECTION 1+2 — HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <BreadcrumbNav items={[
              { label: "Inicio", href: "/" },
              { label: "Sectores" },
              { label: sector.pillBadge },
            ]} />
            <span className="inline-block border border-primary text-primary text-xs font-heading rounded-full px-4 py-1.5 mb-6">
              {sector.pillBadge}
            </span>
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              {sector.h1}
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              {sector.painSubtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contacto" className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors">
                Empezar →
              </Link>
              <Link to="/planes" className="border border-dark-fg/20 text-dark-fg font-heading text-sm rounded-lg px-6 py-3 hover:border-primary hover:text-primary transition-colors">
                Ver planes
              </Link>
            </div>
          </div>

          {/* MOCKUP B — Google Search Results */}
          <div className="bg-card text-card-foreground rounded-xl border border-border p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/40" />
              <div className="w-3 h-3 rounded-full bg-primary/40" />
              <div className="w-3 h-3 rounded-full bg-green-400/40" />
              <div className="flex-1 bg-muted rounded-full h-6 ml-2 flex items-center px-3">
                <span className="text-[11px] text-muted-foreground truncate">{sector.mockupResult.toLowerCase().replace("[ciudad]", "tu ciudad")}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border border-primary/30 bg-primary/5 rounded-lg p-4">
                <p className="text-primary text-xs mb-1">slocal.es</p>
                <p className="font-heading text-sm text-foreground mb-1">{sector.mockupResult}</p>
                <p className="text-xs text-muted-foreground">Sistema de visibilidad local — Ficha optimizada, web y posicionamiento.</p>
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

      {/* SECTION 3 — PROBLEM */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl text-center mb-10">
            Por qué muchos {sectorLabel} son invisibles en Google
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sector.painCards.map((card) => (
              <div key={card.text} className="bg-warm-bg border border-border rounded-xl p-6 transition-all duration-200 hover:border-primary hover:-translate-y-[3px]">
                <span className="text-2xl mb-3 block">{card.icon}</span>
                <p className="text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
      <section className="bg-warm-bg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Qué activamos para {sectorLabel}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:border-primary hover:-translate-y-[3px]">
              <h3 className="font-heading text-base mb-3">{sector.gbpCard.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{sector.gbpCard.body}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:border-primary hover:-translate-y-[3px]">
              <h3 className="font-heading text-base mb-3">{sector.webCard.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{sector.webCard.body}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:border-primary hover:-translate-y-[3px]">
              <h3 className="font-heading text-base mb-3">Informe mensual de posiciones y contactos</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cada mes un informe claro: qué posiciones has ganado, cuántas visitas ha tenido tu web y cuántos {sector.reportCard} han contactado desde Google. Sin tecnicismos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — VISUAL PROOF */}
      <section className="bg-dark-bg text-dark-fg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8 text-center">
            Así se ve cuando el sistema está funcionando
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* MOCKUP D — Analytics Dashboard */}
            <div className="bg-card text-card-foreground rounded-xl border border-border p-6">
              <p className="text-xs text-muted-foreground mb-4 font-heading">Panel de resultados</p>
              <div className="space-y-4">
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-sm font-heading text-foreground">{sector.analyticsLine1}</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-sm font-heading text-foreground">{sector.analyticsLine2}</p>
                </div>
                <div className="flex gap-2">
                  {[40, 55, 35, 70, 60, 80, 75].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full bg-primary/20 rounded-sm" style={{ height: `${h}px` }}>
                        <div className="w-full bg-primary rounded-sm" style={{ height: `${h * 0.7}px` }} />
                      </div>
                      <span className="text-[9px] text-muted-foreground">
                        {["L", "M", "X", "J", "V", "S", "D"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* MOCKUP A — GBP Card */}
            <div className="bg-card text-card-foreground rounded-xl border border-border p-6">
              <p className="text-xs text-muted-foreground mb-4 font-heading">Google Business Profile</p>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-2xl shrink-0">📍</div>
                <div className="flex-1">
                  <p className="font-heading text-sm text-foreground mb-1">{sector.mockupResult.replace(" | ", " · ")}</p>
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-primary text-xs">★★★★★</span>
                    <span className="text-xs text-muted-foreground">4.9 (47 reseñas)</span>
                  </div>
                  <p className="text-xs text-muted-foreground">📍 Tu Ciudad · Abierto ahora</p>
                  <p className="text-xs text-muted-foreground mt-1">📞 Llamar · 🗺 Cómo llegar · 🌐 Web</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — PLANS */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">Elige tu nivel</h2>
          <PlanCards />
          <p className="text-center text-sm text-muted-foreground mt-6">{sector.sectorNote}</p>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <FAQSection title="Preguntas frecuentes" items={sector.faqs} />

      {/* SECTION 8 — CITY LINKS */}
      <section className="py-12">
        <div className="container">
          <h2 className="font-heading text-xl mb-6">Disponible en toda España</h2>
          <div className="flex flex-wrap gap-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                to={`/seo-local-${c.slug}`}
                className="border border-border bg-card rounded-full px-5 py-2 text-sm font-heading hover:border-primary hover:text-primary transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">¿Tu ciudad no está en la lista? Trabajamos en toda España.</p>
        </div>
      </section>

      {/* SECTION 9 — RELATED SECTORS */}
      <section className="bg-warm-bg py-12">
        <div className="container">
          <h2 className="font-heading text-xl mb-6">También trabajamos con otros sectores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {otherSectors.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="bg-card border border-border rounded-xl p-5 transition-all duration-200 hover:border-primary hover:-translate-y-[3px] group"
              >
                <h3 className="font-heading text-sm group-hover:text-primary transition-colors mb-1">{s.relatedLabel}</h3>
                <p className="text-xs text-muted-foreground">{s.relatedDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <CTASection title={`¿Listo para que Google te traiga ${sector.ctaWord}?`} buttonText="Empezar →" />
    </>
  );
};

export default SectorPage;
