import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CTASection from "@/components/CTASection";
import ResultadosSection from "@/components/ResultadosSection";

const CasosExitoPage = () => {
  return (
    <>
      <SEOHead
        title="Casos de éxito | slocal.es"
        description="Resultados reales de clientes de SEO local: más llamadas, más solicitudes y más visibilidad en Google Maps y en la búsqueda local."
        canonical="/casos-de-exito"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white text-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(600px 400px at 15% 20%, hsl(var(--primary) / 0.12), transparent 60%), radial-gradient(500px 400px at 90% 80%, hsl(var(--primary) / 0.08), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--dark-fg) / 0.04) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--dark-fg) / 0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />

        <div className="container relative pt-10 md:pt-14 pb-20 md:pb-28">
          <BreadcrumbNav items={[{ label: "Inicio", href: "/" }, { label: "Casos de éxito" }]} />

          <div className="mt-10 max-w-4xl">
            <p className="font-heading text-xs tracking-[0.22em] uppercase text-primary mb-6">
              — Casos de éxito
            </p>
            <h1 className="font-heading font-semibold leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl max-w-[26ch]">
              Casos de éxito reales de negocios que consiguieron{" "}
              <span className="text-primary">más clientes desde Google</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg font-body font-light leading-relaxed text-black">
              Negocios locales de distintos sectores que mejoraron su ficha de Google Business Profile y su
              presencia en la búsqueda local, con resultados reales en llamadas, visitas y solicitudes de
              presupuesto.
            </p>
          </div>
        </div>
      </section>

      {/* CASOS */}
      <ResultadosSection />

      {/* CTA */}
      <CTASection
        title="¿Quieres ser el próximo caso de éxito?"
        buttonText="Solicitar análisis gratuito →"
        buttonTo="/contacto"
      />
    </>
  );
};

export default CasosExitoPage;
