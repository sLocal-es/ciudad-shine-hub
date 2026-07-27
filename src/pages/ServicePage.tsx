import { useLocation, Link } from "react-router-dom";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import SEOHead from "@/components/SEOHead";
import { ServiceHeroVisual } from "@/components/visuals/SeoVisuals";
import BreadcrumbNav from "@/components/BreadcrumbNav";

import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

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

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <BreadcrumbNav items={[
              { label: "Inicio", href: "/" },
              { label: "Posicionamiento Local", href: "/posicionamiento-local" },
              { label: service.title },
            ]} />
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">{service.h1}</h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              {service.subtitle}
            </p>
            <Link to="/contacto" className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors inline-block">
              Hablemos →
            </Link>
          </div>
          <ServiceHeroVisual slug={service.slug} />
        </div>
      </section>

      {/* EXPLAINER */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">{service.explainerH2}</h2>
          {service.explainerText.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">{p}</p>
          ))}
        </div>
      </section>

      {/* HOW WE SOLVE IT */}
      <section className="bg-warm-bg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">Cómo lo resuelve slocal.es</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.howCards.map((card) => (
              <div key={card.title} className="bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:border-primary hover:-translate-y-[3px]">
                <h3 className="font-heading text-base mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ */}
      <FAQSection title={`Preguntas frecuentes`} items={service.faqs} />

      {/* CITY LINKS */}
      <section className="bg-warm-bg py-12">
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
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection title="¿Listo para que tu negocio aparezca primero en Google?" buttonText="Empezar ahora →" />
    </>
  );
};

export default ServicePage;
