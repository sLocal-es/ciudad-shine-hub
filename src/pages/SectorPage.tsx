import AnswerCapsule from "@/components/AnswerCapsule";
import { useLocation, Link } from "@/lib/router-compat";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";

import CTASection from "@/components/CTASection";
import ConversionBanner from "@/components/ConversionBanner";
import { BANNER_COPY } from "@/data/bannerCopy";
import { RevealScope } from "@/components/Reveal";
import CasosExitoSection from "@/components/CasosExitoSection";
import CoberturaMapas from "@/components/CoberturaMapas";
import { SectorCardsGrid } from "@/components/home/SectorsGridSection";
import { sectors } from "@/data/sectors";
import { cities } from "@/data/cities";

const sectorGeoCopy: Record<string, string> = {
  "seo-para-pintores": "El SEO Local también estructura los tipos de pintura, trabajos y zonas para que ChatGPT, Gemini y AI Overviews entiendan cuándo recomendar al profesional; este enfoque GEO no es un servicio separado.",
  "seo-para-clinicas": "El SEO Local también ordena especialidades, tratamientos y señales profesionales para que ChatGPT, Gemini y AI Overviews comprendan la clínica; el posicionamiento GEO va integrado en el trabajo.",
  "seo-para-entrenadores": "El SEO Local también organiza modalidades, objetivos y zonas de entrenamiento para que ChatGPT, Gemini y AI Overviews puedan interpretar y recomendar al profesional; GEO forma parte del mismo servicio.",
  "seo-para-yoga": "El SEO Local también estructura estilos, clases y ubicación para que ChatGPT, Gemini y AI Overviews entiendan la propuesta del estudio; este posicionamiento GEO está integrado en la estrategia.",
};

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
      { "@type": "ListItem", position: 2, name: sector.metaTitle.split("|")[0].trim(), item: `https://slocal.es/${sector.slug}` },
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

  // Breadcrumb & H1: "SEO para Fontaneros", "SEO para Estudios de Yoga", etc.
  const breadcrumbLabel = "SEO " + sector.pillBadge.split(" ").map((w, i) =>
    i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1)
  ).join(" ");
  const ctaWordCapitalized = sector.ctaWord.charAt(0).toUpperCase() + sector.ctaWord.slice(1);

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
              { label: breadcrumbLabel },
            ]} />
            <span className="inline-block border border-primary text-primary text-xs font-heading rounded-full px-4 py-1.5 mb-6">
              {breadcrumbLabel}
            </span>
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              {breadcrumbLabel} — Consigue {ctaWordCapitalized} en Google
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              {sector.painSubtitle} {sectorGeoCopy[sector.slug]}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contacto" className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors">
                Empezar →
              </Link>
            </div>
          </div>

          {/* MOCKUP B — Google Search Results */}
          <div className="bg-card text-card-foreground rounded-xl border border-border p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/40" />
              <div className="w-3 h-3 rounded-full bg-primary/40" />
              <div className="w-3 h-3 rounded-full bg-green-400/40" />
              <div className="flex-1 bg-muted rounded-full h-6 ml-2 flex items-center px-3">
                <span className="text-[11px] text-muted-foreground truncate">{sector.mockupResult.toLowerCase()}</span>
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

      <RevealScope />
      <AnswerCapsule kind="sector" sectorLower={sectorLabel} clientWord={sector.ctaWord} />

      {/* SECTION 3 — PROBLEM */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <h2 className="font-heading font-semibold text-warm-fg text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-tight text-center mb-10 max-w-[26ch] mx-auto">
            Por qué muchos {sectorLabel} son invisibles en Google
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sector.painCards.map((card) => (
              <div key={card.text} className="bg-white border border-primary/15 rounded-2xl p-6 shadow-[0_10px_30px_-18px_hsl(var(--primary)/0.35)]">
                <span className="text-2xl mb-3 block">{card.icon}</span>
                <p className="text-sm leading-relaxed text-warm-fg">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <ConversionBanner
        title={BANNER_COPY.masClientes(sector.ctaWord).title}
        sub="Analizamos gratis tu ficha, tu web y a tu competencia, y te decimos qué te está frenando."
        cta={BANNER_COPY.masClientes(sector.ctaWord).cta}
        to="/contacto"
        variant="gradient"
      />

      {/* SECTION 4 — HOW IT WORKS */}
      <section className="bg-dark-bg py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <h2 className="font-heading font-semibold text-white text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-tight mb-8">
            Qué activamos para {sectorLabel}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-transparent rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-lg text-warm-fg mb-3">{sector.gbpCard.title}</h3>
              <p className="text-sm text-warm-fg/75 leading-relaxed">{sector.gbpCard.body}</p>
            </div>
            <div className="bg-white border border-transparent rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-lg text-warm-fg mb-3">{sector.webCard.title}</h3>
              <p className="text-sm text-warm-fg/75 leading-relaxed">{sector.webCard.body}</p>
            </div>
            <div className="bg-white border border-transparent rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-lg text-warm-fg mb-3">Informe mensual de posiciones y contactos</h3>
              <p className="text-sm text-warm-fg/75 leading-relaxed">
                Cada mes un informe claro: qué posiciones has ganado, cuántas visitas ha tenido tu web y cuántos {sector.reportCard} han contactado desde Google. Sin tecnicismos.
              </p>
            </div>
          </div>
        </div>
      </section>


      <ConversionBanner
        title={BANNER_COPY.frena.title}
        sub="Auditoría gratuita de tu ficha de Google, tu web y los negocios que hoy aparecen por delante de ti."
        cta={BANNER_COPY.frena.cta}
        to="/contacto"
        variant="gradient"
      />

      {/* SECTION 5 — VISUAL PROOF */}
      <section className="bg-dark-bg text-dark-fg py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <h2 className="font-heading font-semibold text-white text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-tight mb-8 text-center">
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



      <ConversionBanner
        title={BANNER_COPY.proximoCaso.title}
        sub="Cuéntanos tu situación y te decimos qué haría Slocal en tu caso."
        cta={BANNER_COPY.proximoCaso.cta}
        to="/contacto"
        variant="gradient"
      />

      {/* SECTION 7 — FAQ */}
      <section data-no-reveal="" className="bg-primary py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1200px] px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent text-white px-4 py-1.5 text-[11px] font-heading uppercase tracking-[0.18em] mb-6"><span className="h-2 w-2 rounded-full bg-white" />FAQ</p>
            <h2 className="font-heading font-semibold text-white text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-tight">Preguntas frecuentes</h2>
          </div>
          <div className="md:col-span-8 space-y-3">
            {sector.faqs.map((item, i) => (
              <details key={i} className="group py-6 rounded-2xl border border-white/10 bg-dark-bg px-6">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6 font-heading text-lg md:text-xl text-white">
                  <span>{item.q}</span>
                  <span className="text-primary shrink-0 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-base font-body font-light text-white/75 leading-relaxed max-w-2xl">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>



      {/* SECTION 8 — CITIES (Nivel 2 internal linking) */}
      <section className="bg-dark-bg py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1200px] px-6 text-center">
          <h2 className="font-heading font-semibold text-white text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-tight mb-4">
            Trabajamos con negocios en toda España
          </h2>
          <p className="text-sm md:text-base text-white/70 mb-8 font-body font-light max-w-3xl mx-auto">
            Gestionamos el posicionamiento local de negocios en toda España. Estas son algunas de las ciudades donde trabajamos actualmente:
          </p>
          <div className="text-left"><CoberturaMapas dark /></div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              { name: "Madrid", slug: "madrid" },
              { name: "Barcelona", slug: "barcelona" },
              { name: "Valencia", slug: "valencia" },
              { name: "Sevilla", slug: "sevilla" },
              { name: "Málaga", slug: "malaga" },
              { name: "Zaragoza", slug: "zaragoza" },
              { name: "Bilbao", slug: "bilbao" },
              { name: "Murcia", slug: "murcia" },
            ].map((city) => (
              <Link
                key={city.slug}
                to={`/seo-local-${city.slug}`}
                className="border border-white bg-white rounded-full px-5 py-2.5 text-sm font-heading text-warm-fg transition-all duration-200 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-[2px]"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — RELATED SECTORS */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <h2 className="font-heading font-semibold text-warm-fg text-2xl md:text-3xl mb-6">También trabajamos con otros sectores</h2>
          <SectorCardsGrid exclude={`/${sector.slug}`} className="" />
        </div>
      </section>

      <CasosExitoSection dark />

      {/* SECTION 10 — FINAL CTA */}
      <CTASection title={`¿Listo para que Google te traiga ${sector.ctaWord}?`} buttonText="Empezar →" gradient />
    </>
  );
};

export default SectorPage;
