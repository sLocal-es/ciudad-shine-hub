import { useRef } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, Euro, Quote } from "lucide-react";
import { Link } from "@tanstack/react-router";

import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CTASection from "@/components/CTASection";
import { SectorIcon } from "@/components/ResultadosSection";
import { cases, type CaseStudy } from "@/data/casosExito";

const CasoExitoDetailPage = ({ study }: { study: CaseStudy }) => {
  const showQuickStats = Boolean(study.quickStats?.length);

  return (
    <>
      <SEOHead
        title={`Caso de éxito: ${study.name} | slocal.es`}
        description={`Cómo ${study.name} (${study.category} en ${study.city}) mejoró su visibilidad en Google Maps y su ficha de Google Business Profile: qué hicimos y qué resultados reales obtuvo.`}
        canonical={`/casos-de-exito/${study.slug}`}
      />

      {/* HEADER */}
      <section className="bg-white text-foreground">
        <div className="container pt-10 md:pt-14 pb-12 md:pb-16">
          <BreadcrumbNav
            items={[
              { label: "Inicio", href: "/" },
              { label: "Casos de éxito", href: "/casos-de-exito" },
              { label: study.name },
            ]}
          />

          <div className="mt-8 flex items-start gap-5">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary/10">
              <SectorIcon category={study.category} size="sm" />
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center text-xs font-medium rounded-full px-3 py-1 bg-primary/10 text-primary">
                  {study.category}
                </span>
                <span className="inline-flex items-center text-xs font-medium rounded-full px-3 py-1 bg-primary/10 text-primary">
                  {study.city}
                </span>
              </div>
              <h1 className="font-heading font-extrabold leading-[1.08] tracking-tight text-3xl md:text-5xl max-w-[24ch]">
                {study.name}
              </h1>
              {showQuickStats && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {study.quickStats!.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-foreground/10 bg-primary/5 px-4 py-3"
                    >
                      <p className="text-xs font-medium text-foreground/50">{stat.label}</p>
                      <p className="mt-1 font-heading text-lg md:text-xl font-bold text-foreground">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="container max-w-3xl">
          {/* El reto */}
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">
            ¿Cuál era el reto?
          </h2>
          <p className="text-base leading-relaxed text-foreground/70 mb-12">
            {study.before}
          </p>

          {/* Qué hicimos */}
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-5">
            ¿Qué hicimos?
          </h2>
          <ul className="space-y-3 mb-12">
            {study.actions.map((action, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-base text-foreground/75">{action}</span>
              </li>
            ))}
          </ul>

          {/* El resultado */}
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">
            ¿Cuál fue el resultado?
          </h2>
          <p className="text-base leading-relaxed text-foreground font-medium mb-12">
            {study.after}
          </p>

          {/* Impacto */}
          {(study.impactoTexto || study.impactoPendiente) && (
            <div className="mb-12 rounded-2xl border border-primary/40 bg-primary/5 p-6 flex items-start gap-4">
              <Euro className="w-6 h-6 flex-shrink-0 text-primary" />
              <div>
                {study.impactoTexto ? (
                  <>
                    <p className="text-base leading-relaxed text-foreground/80">
                      {study.impactoTexto}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-foreground/50">
                      Estimación ilustrativa a partir de datos reales de llamadas y ticket medio
                      aproximado del negocio; no son cifras de facturación auditadas.
                    </p>
                  </>
                ) : (
                  <p className="text-base leading-relaxed text-foreground/80">
                    💰 Cada posición ganada en el mapa son más llamadas — y cada llamada es un
                    cliente potencial. Pronto añadimos aquí cuánto ha supuesto esto en
                    facturación real para el despacho.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Prueba visual: comparativa geogrid antes / después */}
          {study.geogridComparison && (
            <div className="mb-12">
              <img
                src={study.geogridComparison}
                alt={`Comparativa antes/después del posicionamiento en el mapa de Google para ${study.name}`}
                className="w-full max-w-2xl mx-auto rounded-2xl"
                loading="lazy"
              />
            </div>
          )}

          {/* Testimonio */}
          {study.testimonial && (
            <blockquote className="rounded-2xl p-6 bg-primary/5 border-l-[3px] border-primary">
              <Quote className="w-5 h-5 mb-3 text-primary/60" />
              <p className="text-base leading-relaxed italic text-foreground/80">
                "{study.testimonial}"
              </p>
              <footer className="block mt-3 text-xs font-medium text-foreground/50">
                — {study.name}
              </footer>
            </blockquote>
          )}
        </div>
      </section>

      {/* Otros casos — tira horizontal scrollable */}
      {otherCases.length > 0 && (
        <section className="bg-white pb-20 md:pb-28">
          <div className="container">
            <div className="flex items-end justify-between gap-4 mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold leading-tight text-foreground">
                Otros casos
              </h2>
              <div className="hidden md:flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => stripRef.current?.scrollBy({ left: -320, behavior: "smooth" })}
                  aria-label="Ver casos anteriores"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => stripRef.current?.scrollBy({ left: 320, behavior: "smooth" })}
                  aria-label="Ver casos siguientes"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div
              ref={stripRef}
              className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 -mx-5 px-5 md:mx-0 md:px-0"
            >
              {otherCases.map((other) => (
                <Link
                  key={other.slug}
                  to="/casos-de-exito/$slug"
                  params={{ slug: other.slug }}
                  className="group snap-start flex-shrink-0 w-[260px] rounded-2xl border border-foreground/10 bg-white p-5 flex flex-col gap-3 transition-colors duration-300 hover:border-primary/40"
                >
                  <SectorIcon category={other.category} size="sm" />
                  <p className="font-heading text-base font-bold text-foreground leading-snug">
                    {other.name}
                  </p>
                  <p className="text-sm leading-snug text-foreground/60 line-clamp-1">
                    {other.cardHook}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="¿Quieres ser el próximo caso de éxito?"
        buttonText="Solicitar análisis gratuito →"
        buttonTo="/contacto"
      />
    </>
  );
};

export default CasoExitoDetailPage;
