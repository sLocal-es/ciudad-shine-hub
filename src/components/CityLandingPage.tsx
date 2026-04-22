import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";

const WHATSAPP_BASE = "https://wa.me/34684780063?text=";

export interface CityLandingConfig {
  citySlug: string;
  cityName: string;
  cityNameInPhrase?: string;
  title: string;
  description: string;
  heroImage: string;
  heroSubtitle: string;
  whyTitle: string;
  whyParagraphs: string[];
  howSteps: { n: string; title: string; body: string }[];
  sectores: { label: string; href: string }[];
  sectoresIntro: string;
  faqs: { q: string; a: string }[];
  otrasCiudades: { label: string; href: string }[];
  ctaFinal: string;
  ctaButton: string;
  whatsappMessage: string;
  localBusinessAreaServed: string;
  localBusinessServiceArea: string;
}

const CityLandingPage = ({ config }: { config: CityLandingConfig }) => {
  const {
    citySlug,
    cityName,
    title,
    description,
    heroImage,
    heroSubtitle,
    whyTitle,
    whyParagraphs,
    howSteps,
    sectores,
    sectoresIntro,
    faqs,
    otrasCiudades,
    ctaFinal,
    ctaButton,
    whatsappMessage,
    localBusinessAreaServed,
    localBusinessServiceArea,
  } = config;

  const whatsappUrl = `${WHATSAPP_BASE}${encodeURIComponent(whatsappMessage)}`;
  const canonical = `/seo-local-${citySlug}`;
  const fullUrl = `https://slocal.es${canonical}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "Localidades", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 3, name: `SEO Local ${cityName}`, item: fullUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "slocal.es",
    url: fullUrl,
    email: "hola@slocal.es",
    areaServed: localBusinessAreaServed,
    serviceArea: localBusinessServiceArea,
  };

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        canonical={canonical}
        jsonLd={[breadcrumbSchema, faqSchema, localBusinessSchema]}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <BreadcrumbNav
              items={[
                { label: "Inicio", href: "/" },
                { label: "Localidades" },
                { label: `SEO Local ${cityName}` },
              ]}
            />
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              SEO Local en {cityName}: Que tus Clientes te Encuentren en Google
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              {heroSubtitle}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors inline-block"
            >
              {ctaButton}
            </a>
          </div>
          <img
            src={heroImage}
            alt={`Vista de ${cityName}`}
            className="rounded-xl w-full h-[340px] object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* WHY */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">{whyTitle}</h2>
          {whyParagraphs.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* HOW */}
      <section className="bg-warm-bg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Cómo posicionamos tu negocio en {cityName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howSteps.map((p) => (
              <div
                key={p.n}
                className="bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:border-primary hover:-translate-y-[3px]"
              >
                <div className="text-primary font-heading text-sm mb-2">{p.n}</div>
                <h3 className="font-heading text-base mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-3">
            SEO local para negocios en {cityName} por sector
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">{sectoresIntro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {sectores.map((s) => (
              <Link
                key={s.label}
                to={s.href}
                className="border border-border bg-card rounded-xl px-5 py-4 text-sm font-heading hover:border-primary hover:text-primary transition-colors"
              >
                {s.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-8 text-center">Un plan, precio claro</h2>
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <div className="text-center mb-6">
              <div className="font-heading text-4xl mb-1">
                147€<span className="text-base text-muted-foreground">/mes</span>
              </div>
              <div className="text-xs text-muted-foreground">+ IVA</div>
            </div>
            <p className="text-sm text-muted-foreground text-center mb-6">
              Ficha de Google Business Profile + web + contenido mensual + seguimiento directo.
            </p>
            <ul className="space-y-2 mb-8 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span> Sin contratos largos
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span> Cancelas cuando quieras
              </li>
            </ul>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors"
            >
              {ctaButton}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title={`Preguntas frecuentes sobre SEO local en ${cityName}`} items={faqs} />

      {/* OTHER CITIES */}
      <section className="bg-warm-bg py-12">
        <div className="container">
          <h2 className="font-heading text-xl md:text-2xl mb-6">
            También posicionamos en otras ciudades de España
          </h2>
          <div className="flex flex-wrap gap-3">
            {otrasCiudades.map((c) => (
              <Link
                key={c.href}
                to={c.href}
                className="border border-border bg-card rounded-full px-5 py-2 text-sm font-heading hover:border-primary hover:text-primary transition-colors"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-6">
            {ctaFinal}
          </h2>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-card text-primary font-heading text-sm rounded-lg px-8 py-3 hover:bg-card/90 transition-colors"
          >
            Hablemos →
          </a>
        </div>
      </section>
    </>
  );
};

export default CityLandingPage;
