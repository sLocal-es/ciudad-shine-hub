import { CheckCircle2, Euro, Quote } from "lucide-react";

import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CTASection from "@/components/CTASection";
import { SectorIcon } from "@/components/ResultadosSection";
import type { CaseStudy } from "@/data/casosExito";

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

          {/* Prueba visual: geogrid antes / después */}
          {showGeogrid && (
            <div className="mb-12">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-5">
                Antes / Después en el mapa de Google — "abogado extranjería Valencia"
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <figure>
                  <img
                    src={study.geogridBefore}
                    alt="Mapa de posiciones antes de la optimización para 'abogado extranjería Valencia': posición media 13,2 en un radio de 5 km"
                    className="w-full rounded-2xl border border-foreground/10"
                    loading="lazy"
                  />
                  <figcaption className="mt-3 text-xs text-foreground/50">
                    Estimación a partir de la posición media histórica (12-15). No se conservó
                    una captura exacta de la fecha de inicio.
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={study.geogridAfter}
                    alt="Mapa de posiciones después de la optimización para 'abogado extranjería Valencia': posición media 4,9 y mejor posición 3 en un radio de 5 km"
                    className="w-full rounded-2xl border border-foreground/10"
                    loading="lazy"
                  />
                  <figcaption className="mt-3 text-xs text-foreground/50">
                    Captura real, septiembre 2026.
                  </figcaption>
                </figure>
              </div>
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

      <CTASection
        title="¿Quieres ser el próximo caso de éxito?"
        buttonText="Solicitar análisis gratuito →"
        buttonTo="/contacto"
      />
    </>
  );
};

export default CasoExitoDetailPage;
