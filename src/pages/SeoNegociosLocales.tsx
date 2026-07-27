import { Link } from "react-router-dom";
import { cities } from "@/data/cities";
import SEOHead from "@/components/SEOHead";
import { LocalPackCard } from "@/components/visuals/SeoVisuals";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";

const WA_URL =
  "https://wa.me/34684780063?text=Hola%2C%20quiero%20SEO%20local%20para%20mi%20negocio";

const TITLE = "SEO para Negocios Locales";
const PATH = "/seo-para-negocios-locales";

const howSteps = [
  {
    n: "01",
    title: "Analizamos tu mercado local y tu competencia en Google",
    body: "Identificamos qué buscan tus clientes potenciales, quién aparece ahora en las primeras posiciones y qué oportunidades reales tienes de superarlos en tu ciudad.",
  },
  {
    n: "02",
    title: "Optimizamos tu ficha de Google Business Profile y tu web",
    body: "Categorías, descripciones, fotos, NAP, estructura web y páginas de servicio. Cada detalle alineado para que Google entienda exactamente qué ofreces y dónde.",
  },
  {
    n: "03",
    title: "Creamos el contenido que posiciona en búsquedas locales",
    body: "Artículos y páginas pensadas para las búsquedas reales que hacen tus clientes. Contenido útil, optimizado y publicado de forma constante mes a mes.",
  },
  {
    n: "04",
    title: "Cada mes ves exactamente qué posiciones has ganado",
    body: "Informe claro y sin tecnicismos: qué búsquedas han subido, qué llamadas han entrado y qué hacemos el mes siguiente. Trato directo, sin intermediarios.",
  },
];

const sectores = [
  { label: "SEO para fontaneros", href: "/seo-para-fontaneros" },
  { label: "SEO para fisioterapeutas", href: "/seo-para-fisioterapeutas" },
  { label: "SEO para empresas de reformas", href: "/seo-para-reformas" },
  { label: "SEO para pintores", href: "/seo-para-pintores" },
  { label: "SEO para clínicas", href: "/seo-para-clinicas" },
  { label: "SEO para entrenadores personales", href: "/seo-para-entrenadores" },
  { label: "SEO para yoga y pilates", href: "/seo-para-yoga" },
];

const faqs = [
  {
    q: "¿Qué es el SEO local y para qué sirve a mi negocio?",
    a: "El SEO local es el proceso de optimización que hace que tu negocio aparezca en Google Maps y en los resultados de búsqueda cuando alguien busca tu servicio en tu ciudad. Sirve para conseguir clientes nuevos de forma constante sin pagar por publicidad cada mes.",
  },
  {
    q: "¿Cuánto tarda en dar resultados el SEO local?",
    a: "Los primeros resultados visibles suelen aparecer entre el mes 2 y el mes 4: más visitas al perfil de Google, más llamadas directas y mejora de posiciones. A partir del mes 6 la curva se acelera. El SEO local es una inversión a medio plazo, no una solución inmediata.",
  },
  {
    q: "¿Puede una pequeña empresa posicionarse en Google?",
    a: "Sí. El SEO local favorece a los negocios pequeños porque Google prioriza la relevancia y la proximidad sobre el tamaño del negocio. Un fontanero bien posicionado en su ciudad puede aparecer antes que grandes empresas nacionales para búsquedas locales.",
  },
  {
    q: "¿Necesito una web para hacer SEO local?",
    a: "No es imprescindible para posicionarte en Google Maps, pero sí mejora significativamente los resultados. Una web optimizada refuerza la autoridad de tu ficha de Google y te permite aparecer también en los resultados orgánicos, no solo en el mapa.",
  },
  {
    q: "¿En qué se diferencia el SEO local del SEO normal?",
    a: "El SEO normal busca posicionar una web para búsquedas genéricas a nivel nacional o global. El SEO local se centra en búsquedas con intención geográfica: tu servicio + tu ciudad. Compites solo contra los negocios de tu zona, no contra toda España.",
  },
];

const SeoNegociosLocales = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: TITLE, item: `https://slocal.es${PATH}` },
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: TITLE,
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    areaServed: "España",
  };

  return (
    <>
      <SEOHead
        title="SEO para Negocios Locales | Posicionamiento Local en Google | slocal.es"
        description="Aparece en Google Maps y búsquedas locales cuando tus clientes te buscan. Ficha optimizada, web y contenido mensual."
        canonical={PATH}
        jsonLd={[breadcrumbSchema, faqSchema, serviceSchema]}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <BreadcrumbNav
              items={[
                { label: "Inicio", href: "/" },
                { label: TITLE },
              ]}
            />
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              SEO para Negocios Locales: Aparece en Google Cuando te Buscan
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              El SEO local es la forma más rentable de conseguir clientes nuevos. Gestionamos todo el proceso para que tu negocio aparezca en Google Maps y búsquedas locales cada vez que alguien busca tu servicio en tu ciudad.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors inline-block"
            >
              Hablemos por WhatsApp →
            </a>
          </div>
          <LocalPackCard query="servicio + ciudad" city="tu ciudad" />
        </div>
      </section>

      {/* EXPLAINER */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            Qué es el SEO local y cómo funciona para tu negocio
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            El SEO local es el conjunto de técnicas que hacen que tu negocio aparezca en Google cuando alguien busca tu servicio en tu ciudad o zona. No se trata de estar en internet por estar — se trata de aparecer exactamente cuando un cliente potencial te necesita. "Fontanero en Valencia", "clínica dental cerca de mí", "taller mecánico Sevilla" — esas son las búsquedas que generan clientes reales y llamadas directas.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            Cuando alguien hace una búsqueda local, Google muestra tres negocios destacados en el mapa — el Local Pack. Aparecer ahí puede multiplicar las llamadas a tu negocio. A diferencia de la publicidad, el SEO local no desaparece cuando dejas de pagar: es un activo que crece mes a mes. Cada artículo publicado, cada página optimizada y cada reseña obtenida suma autoridad en Google.
          </p>
        </div>
      </section>

      {/* HOW WE SOLVE IT */}
      <section className="bg-warm-bg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Cómo gestionamos el posicionamiento local de tu negocio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {howSteps.map((step) => (
              <div
                key={step.n}
                className="bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:border-primary hover:-translate-y-[3px]"
              >
                <div className="font-heading text-primary text-sm mb-2">{step.n}</div>
                <h3 className="font-heading text-base mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            SEO local para cada tipo de negocio
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mb-8">
            Cada sector tiene sus propias búsquedas y competencia local. Trabajamos con sectores específicos para maximizar resultados.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sectores.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="border border-border bg-card rounded-xl px-5 py-4 text-sm font-heading hover:border-primary hover:text-primary transition-colors"
              >
                {s.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIO */}
      <section className="bg-warm-bg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8 text-center">
            Un plan, precio claro
          </h2>
          <div className="max-w-md mx-auto bg-card border border-border rounded-xl p-8 hover:border-primary transition-colors">
            <p className="font-heading text-4xl text-primary">—</p>
            <p className="text-sm text-muted-foreground mt-1">/mes + IVA</p>
            <p className="text-sm text-foreground/80 mt-5 leading-relaxed">
              Web optimizada + ficha de Google Business Profile + contenido mensual + seguimiento directo.
            </p>
            <ul className="mt-5 space-y-2">
              <li className="text-sm flex items-start gap-2 text-foreground/80">
                <span className="text-primary mt-0.5">✓</span> Sin contratos largos
              </li>
              <li className="text-sm flex items-start gap-2 text-foreground/80">
                <span className="text-primary mt-0.5">✓</span> Cancelas cuando quieras
              </li>
            </ul>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-center bg-primary text-primary-foreground rounded-lg py-3 font-heading text-sm hover:bg-primary/90 transition-colors"
            >
              Quiero empezar →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Preguntas frecuentes sobre SEO local" items={faqs} />

      {/* CITY LINKS */}
      <section className="bg-warm-bg py-12">
        <div className="container">
          <h2 className="font-heading text-xl mb-3">Posicionamiento local en toda España</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
            Trabajamos con negocios en las principales ciudades españolas. Conocemos la competencia local de cada mercado.
          </p>
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
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-6">
            ¿Listo para que tus clientes te encuentren en Google?
          </h2>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-card text-primary font-heading text-sm rounded-lg px-8 py-3 hover:bg-card/90 transition-colors"
          >
            Hablemos por WhatsApp →
          </a>
        </div>
      </section>
    </>
  );
};

export default SeoNegociosLocales;
