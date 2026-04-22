import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import cityImg from "@/assets/cities/valencia.webp";

const WHATSAPP_URL =
  "https://wa.me/34684780063?text=" + encodeURIComponent("Hola, quiero posicionar mi negocio en Valencia");

const sectores = [
  { label: "SEO para fontaneros en Valencia", href: "/seo-para-fontaneros" },
  { label: "SEO para fisioterapeutas en Valencia", href: "/seo-para-fisioterapeutas" },
  { label: "SEO para empresas de reformas en Valencia", href: "/seo-para-reformas" },
  { label: "SEO para pintores en Valencia", href: "/seo-para-pintores" },
  { label: "SEO para clínicas en Valencia", href: "/seo-para-clinicas" },
  { label: "SEO para entrenadores personales en Valencia", href: "/seo-para-entrenadores" },
];

const otrasCiudades = [
  { label: "SEO local en Madrid", href: "/seo-local-madrid" },
  { label: "SEO local en Barcelona", href: "/seo-local-barcelona" },
  { label: "SEO local en Sevilla", href: "/seo-local-sevilla" },
  { label: "SEO local en Málaga", href: "/seo-local-malaga" },
  { label: "SEO local en Zaragoza", href: "/seo-local-zaragoza" },
  { label: "SEO local en Bilbao", href: "/seo-local-bilbao" },
  { label: "SEO local en Murcia", href: "/seo-local-murcia" },
];

const pasos = [
  {
    n: "01",
    title: "Optimizamos tu ficha de Google Business Profile para Valencia",
    body:
      "Configuramos cada campo de tu perfil para las búsquedas de Valencia: categorías correctas, descripción con keywords locales en castellano, fotos actualizadas, horarios y zona de servicio por barrios. Todo lo que Google necesita para mostrarte en el mapa cuando tus clientes te buscan.",
  },
  {
    n: "02",
    title: "Creamos contenido que posiciona en búsquedas de Valencia",
    body:
      "Artículos de blog y páginas de servicio optimizadas para las búsquedas que hacen tus clientes en Valencia, por barrio y por tipo de servicio. Contenido que responde exactamente lo que busca tu cliente potencial.",
  },
  {
    n: "03",
    title: "Seguimiento mensual de posiciones en Valencia",
    body:
      "Cada mes ves exactamente qué posiciones has ganado en Google Maps para las búsquedas más importantes de tu sector en Valencia. Sin tecnicismos, con datos claros.",
  },
];

const faqs = [
  {
    q: "¿Cuánto tarda en posicionarse un negocio en Google en Valencia?",
    a: "Los primeros resultados visibles aparecen entre el mes 2 y el mes 4: más visitas al perfil de Google, más llamadas y mejora de posiciones en Maps. A partir del mes 6 el crecimiento se acelera.",
  },
  {
    q: "¿Hay que trabajar el SEO en castellano y en valenciano?",
    a: "El servicio se centra en castellano, donde están la mayoría de búsquedas de servicios locales en Valencia. Si tu negocio necesita posicionarse también en valenciano lo valoramos caso a caso.",
  },
  {
    q: "¿Cuánto cuesta el SEO local en Valencia?",
    a: "Los consultores y agencias en Valencia cobran entre 500€ y 1.250€/mes. En slocal.es el servicio completo cuesta 147€/mes + IVA, sin permanencia y sin contratos.",
  },
  {
    q: "¿Funciona para cualquier tipo de negocio local en Valencia?",
    a: "Sí. Fontaneros, fisioterapeutas, reformas, pintores, clínicas, entrenadores y cualquier negocio local en Valencia, en cualquier barrio o distrito.",
  },
  {
    q: "¿Tengo que firmar un contrato largo?",
    a: "No. Sin contratos de permanencia. Cancelas cuando quieras con un aviso previo.",
  },
];

const SeoLocalValencia = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "Localidades", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 3, name: "SEO Local Valencia", item: "https://slocal.es/seo-local-valencia" },
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
    url: "https://slocal.es/seo-local-valencia",
    email: "hola@slocal.es",
    areaServed: "Valencia, España",
    serviceArea: "Valencia",
  };

  return (
    <>
      <SEOHead
        title="SEO Local en Valencia para Negocios | Aparecer en Google Maps | slocal.es"
        description="¿Tu negocio en Valencia no aparece en Google Maps? Posicionamos tu ficha y web para que tus clientes te encuentren primero en castellano y valenciano. Desde 147€/mes + IVA."
        canonical="/seo-local-valencia"
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
                { label: "SEO Local Valencia" },
              ]}
            />
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              SEO Local en Valencia: Que tus Clientes te Encuentren en Google
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              Si tienes un negocio en Valencia y no apareces en Google Maps cuando te buscan, estás perdiendo clientes cada día. Gestionamos tu posicionamiento local desde 147€/mes, sin contratos y con trato directo.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors inline-block"
            >
              Empezar en Valencia →
            </a>
          </div>
          <img
            src={cityImg}
            alt="Vista de Valencia"
            className="rounded-xl w-full h-[340px] object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* WHY */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            Por qué los negocios en Valencia necesitan SEO local
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            {"Valencia es una ciudad con alta competencia digital y el factor diferencial del bilingüismo castellano-valenciano. En barrios como Ruzafa, Ciutat Vella, Benimaclet, El Carmen, Campanar o La Malva-rosa, cada sector tiene negocios compitiendo por los mismos clientes. Cuando alguien busca \"fontanero en Ruzafa\", \"fisioterapeuta en Benimaclet\" o \"empresa de reformes a Campanar\" — en castellano o en valenciano — Google muestra tres negocios en el mapa. Los que están ahí reciben el 40% de todos los clics. Los que no están no existen para esa persona."}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            Los consultores y agencias de SEO local en Valencia cobran entre 500€ y 1.250€/mes. En slocal.es gestionamos todo desde 147€/mes sin intermediarios. Ya trabajamos con negocios en Valencia — como Viviane Custodio, psicóloga que recibió 4 llamadas en su segundo mes tras optimizar su ficha de Google.
          </p>
        </div>
      </section>

      {/* HOW */}
      <section className="bg-warm-bg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Cómo posicionamos tu negocio en Valencia
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
            SEO local para negocios en Valencia por sector
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Cada sector tiene sus propias búsquedas y su propia competencia en Valencia. Trabajamos de forma específica en cada uno.
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
              Empezar en Valencia →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Preguntas frecuentes sobre SEO local en Valencia" items={faqs} />

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
            ¿Tu negocio en Valencia no aparece cuando tus clientes te buscan en Google?
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

export default SeoLocalValencia;
