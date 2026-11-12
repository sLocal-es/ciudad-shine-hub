import { useLocation, Link } from "@/lib/router-compat";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import SEOHead from "@/components/SEOHead";
import { ServiceHeroVisual } from "@/components/visuals/SeoVisuals";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import HeroReviewsRow from "@/components/sector/HeroReviewsRow";
import AuditoriaCtaSection from "@/components/sector/AuditoriaCtaSection";
import CityConversionBanner, { BannerKey } from "@/components/cityseo/CityConversionBanner";
import { RevealScope } from "@/components/Reveal";
import CTASection from "@/components/CTASection";

const wrap = "mx-auto w-full max-w-[1200px] px-6";
const sec = "py-14 md:py-16";
const h2Cls = "font-heading font-semibold text-3xl md:text-4xl lg:text-[42px] leading-[1.05] tracking-tight";

const ServicePage = () => {
  const location = useLocation();
  const currentSlug = location.pathname.replace("/", "");
  const service = services.find((s) => s.slug === currentSlug);

  if (!service) return <div className="container py-20 text-center">Servicio no encontrado</div>;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "Posicionamiento Local", item: "https://slocal.es/posicionamiento-local" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://slocal.es/${service.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    areaServed: "España",
  };

  return (
    <>
      <SEOHead
        title={service.metaTitle}
        description={service.metaDesc}
        canonical={`/${service.slug}`}
        jsonLd={[breadcrumbSchema, faqSchema, serviceSchema]}
      />

      {/* HERO (negro) */}
      <section className="bg-dark-bg text-white py-14 md:py-16">
        <div className={`${wrap} grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}>
          <div className="min-w-0">
            <div className="[&_nav]:text-white/60 [&_.text-foreground]:text-white">
              <BreadcrumbNav items={[
                { label: "Inicio", href: "/" },
                { label: "Posicionamiento Local", href: "/posicionamiento-local" },
                { label: service.title },
              ]} />
            </div>
            <h1 className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-tight text-white mb-5">{service.h1}</h1>
            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              {service.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contacto" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-heading font-medium transition-transform duration-200 hover:scale-[1.03]">
                Solicitar auditoría gratuita
              </Link>
              <a href="#como-lo-resuelve" className="inline-flex items-center justify-center rounded-full border border-white/40 text-white px-7 py-3.5 text-sm font-heading font-medium transition-colors duration-200 hover:border-primary hover:text-primary">
                Ver cómo lo resolvemos
              </a>
            </div>
            <HeroReviewsRow onDark />
            <p className="mt-3 text-xs font-body text-white/70">Auditoría gratuita · Sin compromiso</p>
          </div>
          <div className="min-w-0">
            <ServiceHeroVisual slug={service.slug} />
          </div>
        </div>
      </section>

      <RevealScope />

      {/* EXPLAINER (blanco) */}
      <section className={`bg-white ${sec}`}>
        <div className={`${wrap} grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14`}>
          <div className="lg:col-span-5">
            <h2 className={`${h2Cls} text-warm-fg`}>{service.explainerH2}</h2>
          </div>
          <div className="lg:col-span-7">
            {service.explainerText.map((p, i) => (
              <p key={i} className="text-warm-fg/75 leading-relaxed mb-4 text-base font-body">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER (naranja) */}
      <CityConversionBanner
        variant="orange"
        eyebrow="AUDITORÍA GRATUITA"
        title={<>¿Tu negocio sale primero en Google? <BannerKey variant="orange">Compruébalo gratis</BannerKey></>}
        sub="Te decimos en menos de 24 horas dónde estás frente a tu competencia."
      />

      {/* CÓMO LO RESUELVE (negro) */}
      <section id="como-lo-resuelve" className={`bg-dark-bg ${sec} scroll-mt-24`}>
        <div className={wrap}>
          <h2 className={`${h2Cls} text-white mb-10`}>Cómo lo resuelve slocal.es</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {service.howCards.map((card, i) => (
              <div key={card.title} className="rounded-2xl border-t-4 border-primary bg-white p-6 md:p-7 transition-transform duration-200 hover:-translate-y-[3px]">
                <span className="font-heading font-semibold text-3xl text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-heading font-semibold text-lg text-warm-fg mb-3">{card.title}</h3>
                <p className="text-[15px] font-body text-warm-fg/75 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDITORÍA GRATUITA (blanco) */}
      <AuditoriaCtaSection
        formType={`auditoria_${service.slug.replace(/-/g, "_")}`}
        paddingClassName="py-14 md:py-16"
      />

      {/* FAQ (naranja) */}
      <section data-no-reveal="" className={`bg-primary ${sec}`}>
        <div className={`${wrap} grid grid-cols-1 md:grid-cols-12 gap-12`}>
          <div className="md:col-span-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent text-white px-4 py-1.5 text-[11px] font-heading uppercase tracking-[0.18em] mb-6"><span className="h-2 w-2 rounded-full bg-white" />FAQ</p>
            <h2 className={`${h2Cls} text-white`}>Preguntas frecuentes</h2>
          </div>
          <div className="md:col-span-8 space-y-3">
            {service.faqs.map((item, i) => (
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

      {/* CIUDADES (negro) */}
      <section className={`bg-dark-bg ${sec}`}>
        <div className={wrap}>
          <h2 className={`${h2Cls} text-white mb-8`}>Disponible en toda España</h2>
          <div className="flex flex-wrap gap-2.5">
            {cities.map((c) => (
              <Link
                key={c.slug}
                to={`/seo-local-${c.slug}`}
                className="border border-white bg-white rounded-full px-5 py-2.5 text-sm font-heading text-warm-fg transition-all duration-200 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-[2px]"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL (naranja) */}
      <CTASection title="¿Listo para que tu negocio aparezca primero en Google?" buttonText="Solicitar auditoría gratuita →" gradient />
    </>
  );
};

export default ServicePage;
