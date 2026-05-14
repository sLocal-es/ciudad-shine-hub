import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import CityHeroAuditForm from "@/components/cityseo/CityHeroAuditForm";
import { SeoLocalCity } from "@/data/seoLocalCities";

interface Props {
  city: SeoLocalCity;
}

const CityTemplate = ({ city }: Props) => {
  const { name, slug, population, competition, plazo, mapQuery, barriosBusquedas, oportunidad } = city;

  const url = `https://slocal.es/seo-local-${slug}`;
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;

  const faqs = [
    {
      q: `¿Cuánto tarda mi negocio en aparecer primero en Google en ${name}?`,
      a: `En ${name}, con una competencia digital ${competition.toLowerCase()}, los primeros resultados visibles llegan en ${plazo}. A partir de ahí las posiciones se consolidan mes a mes y la dependencia de publicidad de pago baja de forma significativa.`,
    },
    {
      q: `¿Necesito una web para hacer SEO local en ${name}?`,
      a: `No es imprescindible para empezar — la ficha de Google Business Profile sola ya genera contactos. Pero una web bien estructurada por servicios y barrios de ${name} multiplica los resultados. El plan de slocal.es incluye web desde el primer mes.`,
    },
    {
      q: `¿Cuánto cuesta posicionar un negocio en ${name}?`,
      a: `El plan de slocal.es es 147€/mes + IVA, sin permanencia. Incluye ficha de Google optimizada, web, contenido mensual y seguimiento de posiciones en ${name}.`,
    },
    {
      q: `¿Funciona el SEO local en ${name} para mi sector?`,
      a: `Sí. Trabajamos con clínicas, fontaneros, fisioterapeutas, abogados, reformas, dentistas, psicólogos, gimnasios, autónomos y cualquier negocio que tenga clientes locales en ${name}.`,
    },
    {
      q: `¿Tengo que firmar contrato de permanencia?`,
      a: `No. El servicio es mes a mes. Cancelas cuando quieras.`,
    },
    {
      q: `¿Qué pasa con las reseñas de Google en ${name}?`,
      a: `Las reseñas son uno de los factores que más influyen en aparecer en el Local Pack de ${name}. Te ayudamos a pedirlas de forma sistemática a clientes reales y a responderlas para mejorar tu posicionamiento.`,
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: `SEO Local en ${name}`, item: url },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "slocal.es",
    url,
    description: `SEO local para negocios en ${name}`,
    areaServed: `${name}, España`,
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "09:00",
        closes: "14:00",
      },
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

  return (
    <>
      <SEOHead
        title={`SEO Local en ${name} para Negocios | Aparecer en Google Maps | slocal.es`}
        description={`Posicionamos tu negocio en ${name} para que aparezca primero en Google cuando tus clientes te buscan. Sin anuncios, sin permanencia. Desde 147€/mes + IVA.`}
        canonical={`/seo-local-${slug}`}
        jsonLd={[breadcrumbSchema, localBusinessSchema, faqSchema]}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <BreadcrumbNav
              items={[
                { label: "Inicio", href: "/" },
                { label: `SEO Local en ${name}` },
              ]}
            />
            <span className="inline-block border border-primary text-primary text-xs font-heading rounded-full px-4 py-1.5 mb-6">
              SEO Local en {name}
            </span>
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              SEO Local en {name}: Que tus Clientes te Encuentren en Google
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-6 font-body font-light">
              Aparece cuando te buscan en {name}. Sin pagar anuncios. Sin permanencia.
            </p>
            <ul className="space-y-2.5">
              {[
                `Tu ficha de Google optimizada para ${name} desde el primer mes`,
                "Más contactos sin depender de publicidad de pago",
                "Informe mensual con resultados reales",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm md:text-base font-body text-dark-fg/85">
                  <span className="text-primary mt-0.5">→</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary/95 rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="font-heading text-xl md:text-2xl text-primary-foreground mb-2">
              ¿Apareces en Google Maps en {name}?
            </h2>
            <p className="text-primary-foreground/85 text-sm font-body font-light mb-5">
              Analizamos gratis cómo te ve Google ahora mismo
            </p>
            <CityHeroAuditForm ciudad={name} />
          </div>
        </div>
      </section>

      {/* TABLA PUNTOS CLAVE */}
      <section id="puntos-clave" className="py-12">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-xl md:text-2xl mb-6">
            SEO local en {name}: puntos clave
          </h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm md:text-base">
              <tbody>
                <tr className="border-b border-border">
                  <td className="bg-warm-bg font-heading p-4 w-1/2 md:w-1/3">Población</td>
                  <td className="p-4 text-muted-foreground">{population}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="bg-warm-bg font-heading p-4">Competencia digital</td>
                  <td className="p-4 text-muted-foreground">{competition}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="bg-warm-bg font-heading p-4">Plazo estimado de resultados</td>
                  <td className="p-4 text-muted-foreground">{plazo}</td>
                </tr>
                <tr>
                  <td className="bg-warm-bg font-heading p-4">Servicio</td>
                  <td className="p-4 text-muted-foreground">147€/mes + IVA, sin permanencia</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tabla de contenidos */}
          <nav className="mt-10 border-l-2 border-primary pl-5">
            <p className="font-heading text-sm uppercase tracking-wider text-muted-foreground mb-3">En esta página</p>
            <ul className="space-y-1.5 text-sm">
              {[
                ["#oportunidad", `La oportunidad real de ${name}`],
                ["#barrios", "Barrios y búsquedas típicas"],
                ["#mapa", `Mapa de ${name}`],
                ["#resenas", "Reseñas: el factor decisivo"],
                ["#errores", "Errores más comunes"],
                ["#ayuda", "Cómo te ayudamos desde slocal.es"],
                ["#resumen", "Resumen"],
                ["#faq", "Preguntas frecuentes"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-foreground hover:text-primary transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* OPORTUNIDAD */}
      <section id="oportunidad" className="bg-warm-bg py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            La oportunidad real de aparecer primero en Google en {name}
          </h2>
          <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground">
            {oportunidad.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>
              Si quieres profundizar en cómo funciona el sistema, puedes leer la guía completa de{" "}
              <Link to="/seo-para-negocios-locales" className="text-primary underline underline-offset-2">
                SEO para negocios locales
              </Link>{" "}
              o consultar el{" "}
              <Link to="/blog" className="text-primary underline underline-offset-2">
                blog de slocal.es
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* BARRIOS */}
      <section id="barrios" className="py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            Barrios principales de {name} y sus búsquedas típicas
          </h2>
          <p className="text-base text-muted-foreground mb-8 font-body font-light">
            Las búsquedas locales en {name} no se hacen por ciudad — se hacen por barrio. Estos son ejemplos reales del tipo de consulta que tus clientes están escribiendo en Google.
          </p>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-warm-bg">
                  <th className="font-heading text-left p-4 w-1/3">Barrio o zona</th>
                  <th className="font-heading text-left p-4">Ejemplo de búsqueda</th>
                </tr>
              </thead>
              <tbody>
                {barriosBusquedas.map((b, i) => (
                  <tr key={b.barrio} className={i !== barriosBusquedas.length - 1 ? "border-b border-border" : ""}>
                    <td className="p-4 font-heading">{b.barrio}</td>
                    <td className="p-4 text-muted-foreground italic">"{b.busqueda}"</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section id="mapa" className="bg-warm-bg py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            {name} en Google Maps
          </h2>
          <p className="text-base text-muted-foreground mb-6 font-body font-light">
            Cuando alguien busca un servicio local en {name}, Google muestra tres negocios en el mapa. Los que están ahí reciben la mayoría de los clics y llamadas.
          </p>
          <iframe
            title={`Mapa de ${name}`}
            src={mapEmbed}
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* RESEÑAS */}
      <section id="resenas" className="py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            Reseñas en Google: el factor decisivo en {name}
          </h2>
          <p className="text-base text-muted-foreground mb-8 font-body font-light">
            En un mercado como {name}, las reseñas son el factor más decisivo a la hora de elegir un negocio. Estos son los datos que importan.
          </p>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm md:text-base">
              <tbody>
                {[
                  ["Reseñas mínimas para entrar en el Local Pack", "20-30 reseñas reales"],
                  ["Puntuación media recomendada", "4,5 estrellas o más"],
                  ["Frecuencia de nuevas reseñas", "2-4 al mes"],
                  ["Respuesta a reseñas", "100% de las reseñas (positivas y negativas)"],
                  ["Impacto en posicionamiento local", "Factor top 3 según los principales estudios"],
                ].map(([k, v], i) => (
                  <tr key={k} className={i !== 4 ? "border-b border-border" : ""}>
                    <td className="bg-warm-bg font-heading p-4 w-1/2">{k}</td>
                    <td className="p-4 text-muted-foreground">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ERRORES */}
      <section id="errores" className="bg-warm-bg py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            Errores más comunes en SEO local en {name}
          </h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm md:text-base bg-card">
              <thead>
                <tr className="bg-warm-bg">
                  <th className="font-heading text-left p-4 w-1/2">Error</th>
                  <th className="font-heading text-left p-4">Consecuencia</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Crear la ficha de Google y abandonarla", "Google interpreta inactividad y baja posiciones"],
                  ["Usar categoría genérica en lugar de la específica", "No apareces en las búsquedas que importan"],
                  ["No tener web o tener una web sin SEO local", "El Local Pack se reduce y la conversión baja"],
                  ["Olvidar las reseñas", "Pierdes el factor más decisivo del Local Pack"],
                  ["Una sola página para toda la ciudad", "No compites con quien tiene página por barrio o servicio"],
                  ["Pagar solo Google Ads sin trabajar SEO", "Cuando paras los anuncios, desapareces"],
                ].map(([e, c], i) => (
                  <tr key={e} className={i !== 5 ? "border-b border-border" : ""}>
                    <td className="p-4 font-heading">{e}</td>
                    <td className="p-4 text-muted-foreground">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AYUDA */}
      <section id="ayuda" className="py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            Cómo te ayudamos desde slocal.es en {name}
          </h2>
          <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground mb-8">
            <p>
              Optimizamos tu ficha de Google Business Profile para las búsquedas reales de {name}, creamos o mejoramos tu web con páginas específicas por servicio y por barrio, generamos contenido mensual orientado a las consultas de tu sector en la ciudad y te enviamos un informe claro cada mes con posiciones, llamadas y contactos generados.
            </p>
            <p>
              Sin agencias intermediarias, sin permanencia y con trato directo con la persona que trabaja tu posicionamiento.
            </p>
          </div>
          <Link
            to="/contacto"
            className="inline-block bg-primary text-primary-foreground font-heading text-sm rounded-lg px-8 py-3 hover:bg-primary/90 transition-colors"
          >
            Quiero analizar mi negocio en {name} →
          </Link>
        </div>
      </section>

      {/* RESUMEN */}
      <section id="resumen" className="bg-warm-bg py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            Resumen: SEO local en {name}
          </h2>
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <ul className="space-y-3 text-sm md:text-base">
              {[
                `${name} cuenta con ${population} y una competencia digital ${competition.toLowerCase()}.`,
                `Los primeros resultados visibles llegan en ${plazo}.`,
                `Las búsquedas locales se hacen por barrio: cada zona de ${name} es un mercado en sí mismo.`,
                `Las reseñas y la ficha de Google optimizada son los factores más decisivos para entrar al Local Pack.`,
                `Empezar a trabajar el SEO local en ${name} ahora es la forma más rentable de no depender de Google Ads.`,
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary font-heading shrink-0">{(i + 1).toString().padStart(2, "0")}</span>
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div id="faq">
        <FAQSection title={`Preguntas frecuentes sobre SEO local en ${name}`} items={faqs} />
      </div>

      {/* FINAL CTA */}
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-6">
            ¿Quieres que tu negocio aparezca primero en Google?
          </h2>
          <Link
            to="/contacto"
            className="inline-block bg-card text-primary font-heading text-sm rounded-lg px-8 py-3 hover:bg-card/90 transition-colors"
          >
            Hablemos →
          </Link>
        </div>
      </section>
    </>
  );
};

export default CityTemplate;
