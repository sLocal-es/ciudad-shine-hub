import { CheckCircle2, Quote } from "lucide-react";

import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CTASection from "@/components/CTASection";
import { SectorIcon } from "@/components/ResultadosSection";
import type { CaseStudy } from "@/data/casosExito";
import geogridExtranjeria from "@/assets/casos/geogrid-antes-despues-extranjeria.png";

const CasoExitoDetailPage = ({ study }: { study: CaseStudy }) => {
  const showGeogrid = study.id === "despacho-extranjeria-valencia";

  return (
    <>
      <SEOHead
        title={`Caso de éxito: ${study.name} | slocal.es`}
        description={`Cómo ${study.name} (${study.category} en ${study.city}) mejoró su visibilidad en Google Maps y su ficha de Google Business Profile: qué hicimos y qué resultados reales obtuvo.`}
        canonical={`/casos-de-exito/${study.id}`}
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

          {/* Métricas mes a mes */}
          {study.monthlyMetrics && (
            <div className="mb-12">
              <h3 className="font-heading text-lg font-bold text-foreground mb-5">
                Evolución mes a mes de la ficha de Google
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {study.monthlyMetrics.map((m) => (
                  <div
                    key={m.month}
                    className="rounded-2xl border border-foreground/10 bg-white p-5"
                  >
                    <span className="block font-heading text-[11px] font-semibold uppercase tracking-widest text-primary mb-4">
                      {m.month}
                    </span>
                    <dl className="space-y-2.5 text-sm">
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="text-foreground/60">Llamadas</dt>
                        <dd className="font-heading font-bold text-foreground">{m.calls}</dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="text-foreground/60">Clics en chat</dt>
                        <dd className="font-heading font-bold text-foreground">{m.chatClicks}</dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="text-foreground/60">Solicitudes de ruta</dt>
                        <dd className="font-heading font-bold text-foreground">{m.directionRequests}</dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="text-foreground/60">Clics a la web</dt>
                        <dd className="font-heading font-bold text-foreground">{m.websiteClicks}</dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3 pt-2.5 border-t border-foreground/10">
                        <dt className="text-foreground/60">Visitas a la ficha</dt>
                        <dd className="text-right">
                          <span className="block font-heading font-bold text-foreground">
                            {m.profileViews.toLocaleString("es-ES")}
                          </span>
                          <span className="block text-xs font-medium text-primary">
                            {m.profileViewsGrowth}
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Geogrid antes / después */}
          {showGeogrid && (
            <figure className="mb-12">
              <img
                src={geogridExtranjeria}
                alt="Comparativa de geogrid antes y después para la búsqueda 'abogado extranjería Valencia': de una posición media de 13 en mayo a una media de 4,9 en septiembre en un radio de 5 km alrededor del despacho"
                className="w-full rounded-2xl border border-foreground/10"
                loading="lazy"
              />
              <figcaption className="mt-3 text-xs text-foreground/50">
                Posicionamiento en Google Maps en un radio de ~5 km: antes (mayo) frente a después (septiembre).
              </figcaption>
            </figure>
          )}

          {/* Testimonio */}
          <blockquote className="rounded-2xl p-6 bg-primary/5 border-l-[3px] border-primary">
            <Quote className="w-5 h-5 mb-3 text-primary/60" />
            <p className="text-base leading-relaxed italic text-foreground/80">
              "{study.testimonial}"
            </p>
            <footer className="block mt-3 text-xs font-medium text-foreground/50">
              — {study.name}
            </footer>
          </blockquote>
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
