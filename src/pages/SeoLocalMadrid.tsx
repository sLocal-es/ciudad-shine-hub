import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";

import madridImg from "@/assets/cities/madrid.webp";

const WHATSAPP_URL =
  "https://wa.me/34684780063?text=Hola%2C%20quiero%20posicionar%20mi%20negocio%20en%20Madrid";

const sectores = [
  { label: "SEO para fontaneros en Madrid", href: "/seo-para-fontaneros" },
  { label: "SEO para fisioterapeutas en Madrid", href: "/seo-para-fisioterapeutas" },
  { label: "SEO para empresas de reformas en Madrid", href: "/seo-para-reformas" },
  { label: "SEO para pintores en Madrid", href: "/seo-para-pintores" },
  { label: "SEO para clínicas en Madrid", href: "/seo-para-clinicas" },
  { label: "SEO para entrenadores personales en Madrid", href: "/seo-para-entrenadores" },
];

const otrasCiudades = [
  { label: "SEO local en Barcelona", href: "/seo-local-barcelona" },
  { label: "SEO local en Valencia", href: "/seo-local-valencia" },
  { label: "SEO local en Sevilla", href: "/seo-local-sevilla" },
  { label: "SEO local en Málaga", href: "/seo-local-malaga" },
  { label: "SEO local en Zaragoza", href: "/seo-local-zaragoza" },
  { label: "SEO local en Bilbao", href: "/seo-local-bilbao" },
  { label: "SEO local en Murcia", href: "/seo-local-murcia" },
];

const pasos = [
  {
    n: "01",
    title: "Optimizamos tu ficha de Google Business Profile en Madrid",
    body: "Configuramos cada campo de tu perfil para las búsquedas de Madrid: categorías correctas, descripción con keywords locales, fotos, horarios, zona de servicio por barrios y distritos. Todo lo que Google necesita para mostrarte en el mapa de la capital.",
  },
  {
    n: "02",
    title: "Creamos contenido que posiciona en búsquedas de Madrid",
    body: "Artículos de blog y páginas de servicio optimizadas para las búsquedas que hacen tus clientes en Madrid. Contenido específico por barrio y distrito cuando tiene sentido para tu negocio.",
  },
  {
    n: "03",
    title: "Seguimiento mensual de posiciones en Madrid",
    body: "Cada mes un informe claro con las posiciones ganadas en Google Maps y búsquedas orgánicas en Madrid, las visitas recibidas y qué está funcionando. Sin tecnicismos.",
  },
];

const faqs = [
  {
    q: "¿Cuánto tarda en posicionarse un negocio en Google en Madrid?",
    a: "En Madrid, por la alta competencia, los primeros resultados visibles aparecen entre el mes 2 y el mes 4. A partir del mes 6 el crecimiento se acelera. Cuanto antes empieces, antes ganarás posiciones frente a tu competencia en la ciudad.",
  },
  {
    q: "¿Necesito tener web para hacer SEO local en Madrid?",
    a: "No es imprescindible para empezar, pero mejora significativamente los resultados. El servicio incluye la web desde el inicio, por lo que no necesitas nada previo para arrancar.",
  },
  {
    q: "¿Funciona para cualquier tipo de negocio local en Madrid?",
    a: "Sí. Trabajamos con fontaneros, fisioterapeutas, empresas de reformas, pintores, clínicas, entrenadores y cualquier negocio local que quiera conseguir clientes desde Google en Madrid, en cualquier barrio o distrito.",
  },
  {
    q: "¿Cuánto cuesta el SEO local en Madrid?",
    a: "Las agencias de SEO local en Madrid cobran habitualmente entre 300€ y 1.000€/mes. En slocal.es el servicio completo cuesta 147€/mes + IVA, sin permanencia y sin contratos largos.",
  },
  {
    q: "¿Qué diferencia hay entre SEO local y publicidad en Google?",
    a: "La publicidad (Google Ads) te da visibilidad mientras pagas. El SEO local construye una presencia orgánica que crece mes a mes sin coste por clic. En Madrid, donde el coste por clic es elevado, el SEO local tiene mejor retorno a medio plazo.",
  },
  {
    q: "¿Tengo que firmar un contrato largo?",
    a: "No. Sin contratos de permanencia. Cancelas cuando quieras con un aviso previo.",
  },
];

const SeoLocalMadrid = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "Localidades", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 3, name: "SEO Local Madrid", item: "https://slocal.es/seo-local-madrid" },
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
    url: "https://slocal.es/seo-local-madrid",
    email: "hola@slocal.es",
    areaServed: "Madrid, España",
    serviceArea: "Madrid",
  };

  return (
    <>
      <SEOHead
        title="SEO Local en Madrid para Negocios | Aparecer en Google Maps | slocal.es"
        description="¿Tu negocio en Madrid no aparece en Google Maps? Posicionamos tu ficha y web para que tus clientes te encuentren primero. Sin agencia, desde 147€/mes + IVA."
        canonical="/seo-local-madrid"
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
                { label: "SEO Local Madrid" },
              ]}
            />
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              SEO Local en Madrid: Que tus Clientes te Encuentren en Google
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              Si tienes un negocio en Madrid y no apareces en Google Maps cuando te buscan, estás perdiendo clientes cada día. Gestionamos tu posicionamiento local para que eso cambie — sin agencias, desde 147€/mes.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors inline-block"
            >
              Empezar en Madrid →
            </a>
          </div>
          <img
            src={madridImg}
            alt="Skyline de Madrid"
            className="rounded-xl w-full h-[340px] object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* WHY MADRID */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            Por qué los negocios en Madrid necesitan SEO local
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            Madrid es el mercado más competido de España. En barrios como Salamanca, Chamberí, Vallecas, Carabanchel, Retiro o Malasaña, cada sector tiene decenas de negocios compitiendo por los mismos clientes. La diferencia entre el que recibe llamadas y el que no suele ser una sola cosa: quién aparece primero en Google Maps.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            Cuando alguien busca "fontanero en Chamberí", "fisioterapeuta en Salamanca" o "empresa de reformas en Vallecas", Google muestra tres negocios en el mapa. Los que están ahí reciben el 40% de todos los clics. Los que no están, no existen para esa persona.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            La mayoría de agencias de SEO local en Madrid cobran entre 300€ y 1.000€/mes. En slocal.es hacemos lo mismo desde 147€/mes, sin intermediarios y con trato directo. Sin contratos, sin permanencia.
          </p>
        </div>
      </section>

      {/* HOW WE DO IT */}
      <section className="bg-warm-bg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Cómo posicionamos tu negocio en Madrid
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pasos.map((p) => (
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
            SEO local para negocios en Madrid por sector
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Trabajamos con todo tipo de negocios locales en Madrid. Cada sector tiene su propia competencia y sus propias búsquedas en la capital.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
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

      {/* PRICING */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-8 text-center">Un plan, precio claro</h2>
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <div className="text-center mb-6">
              <div className="font-heading text-4xl mb-1">147€<span className="text-base text-muted-foreground">/mes</span></div>
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
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors"
            >
              Empezar en Madrid →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Preguntas frecuentes sobre SEO local en Madrid" items={faqs} />

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
            ¿Tu negocio en Madrid no aparece cuando tus clientes te buscan en Google?
          </h2>
          <a
            href={WHATSAPP_URL}
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

export default SeoLocalMadrid;
