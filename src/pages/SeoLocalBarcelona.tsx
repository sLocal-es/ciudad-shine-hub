import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import barcelonaImg from "@/assets/cities/barcelona.webp";

const WHATSAPP_URL =
  "https://wa.me/34684780063?text=Hola%2C%20quiero%20posicionar%20mi%20negocio%20en%20Barcelona";

const sectores = [
  { label: "SEO para fontaneros en Barcelona", href: "/seo-para-fontaneros" },
  { label: "SEO para fisioterapeutas en Barcelona", href: "/seo-para-fisioterapeutas" },
  { label: "SEO para empresas de reformas en Barcelona", href: "/seo-para-reformas" },
  { label: "SEO para pintores en Barcelona", href: "/seo-para-pintores" },
  { label: "SEO para clínicas en Barcelona", href: "/seo-para-clinicas" },
  { label: "SEO para entrenadores personales en Barcelona", href: "/seo-para-entrenadores" },
];

const otrasCiudades = [
  { label: "SEO local en Madrid", href: "/seo-local-madrid" },
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
    title: "Optimizamos tu ficha de Google Business Profile para Barcelona",
    body: "Configuramos cada campo de tu perfil para las búsquedas de Barcelona: categorías correctas, descripción en castellano con keywords locales, fotos, horarios y zona de servicio por barrios y distritos. Todo lo que Google necesita para mostrarte en el mapa de la ciudad.",
  },
  {
    n: "02",
    title: "Creamos contenido que posiciona en Barcelona",
    body: "Artículos de blog y páginas de servicio optimizadas para las búsquedas que hacen tus clientes en Barcelona — por barrio, por tipo de servicio y por intención de compra.",
  },
  {
    n: "03",
    title: "Seguimiento mensual de posiciones en Barcelona",
    body: "Cada mes ves exactamente qué posiciones has ganado en Google Maps para las búsquedas más importantes de tu sector en Barcelona. Sin tecnicismos, con datos claros.",
  },
];

const faqs = [
  {
    q: "¿Cuánto tarda en posicionarse un negocio en Google en Barcelona?",
    a: "En Barcelona, por la alta competencia, los primeros resultados visibles aparecen entre el mes 2 y el mes 4. A partir del mes 6 el crecimiento se acelera. Cuanto antes empieces, antes ganarás posiciones frente a tu competencia en la ciudad.",
  },
  {
    q: "¿Necesito tener web para hacer SEO local en Barcelona?",
    a: "No es imprescindible para empezar, pero mejora significativamente los resultados. El servicio incluye la web desde el inicio, por lo que no necesitas nada previo para arrancar.",
  },
  {
    q: "¿Funciona para cualquier tipo de negocio local en Barcelona?",
    a: "Sí. Trabajamos con fontaneros, fisioterapeutas, empresas de reformas, pintores, clínicas, entrenadores y cualquier negocio local que quiera conseguir clientes desde Google en Barcelona, en cualquier barrio o distrito.",
  },
  {
    q: "¿Hay que posicionar en castellano y en catalán?",
    a: "El servicio se centra en castellano, que es donde están la mayoría de las búsquedas de servicios locales en Barcelona. Si tu negocio tiene clientes que buscan específicamente en catalán, lo valoramos caso a caso.",
  },
  {
    q: "¿Qué diferencia hay entre SEO local y publicidad en Google?",
    a: "La publicidad (Google Ads) te da visibilidad mientras pagas. El SEO local construye una presencia orgánica que crece mes a mes sin coste por clic. En Barcelona, donde el coste por clic es elevado, el SEO local tiene mejor retorno a medio plazo.",
  },
  {
    q: "¿Tengo que firmar un contrato largo?",
    a: "No. Sin contratos de permanencia. Cancelas cuando quieras con un aviso previo.",
  },
];

const SeoLocalBarcelona = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "Localidades", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 3, name: "SEO Local Barcelona", item: "https://slocal.es/seo-local-barcelona" },
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
    url: "https://slocal.es/seo-local-barcelona",
    email: "info@slocal.es",
    areaServed: "Barcelona, España",
    serviceArea: "Barcelona",
  };

  return (
    <>
      <SEOHead
        title="SEO Local en Barcelona para Negocios | Aparecer en Google Maps | slocal.es"
        description="¿Tu negocio en Barcelona no aparece en Google Maps? Posicionamos tu ficha y web para que tus clientes te encuentren primero. Sin agencia, desde 147€/mes + IVA."
        canonical="/seo-local-barcelona"
        jsonLd={[breadcrumbSchema, faqSchema, localBusinessSchema]}
      />

      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <BreadcrumbNav
              items={[
                { label: "Inicio", href: "/" },
                { label: "Localidades" },
                { label: "SEO Local Barcelona" },
              ]}
            />
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              SEO Local en Barcelona: Que tus Clientes te Encuentren en Google
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              Si tienes un negocio en Barcelona y no apareces en Google Maps cuando te buscan, estás perdiendo clientes cada día. Gestionamos tu posicionamiento local para que eso cambie.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors inline-block"
            >
              Empezar en Barcelona →
            </a>
          </div>
          <img
            src={barcelonaImg}
            alt="Skyline de Barcelona"
            className="rounded-xl w-full h-[340px] object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            Por qué los negocios en Barcelona necesitan SEO local
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            Barcelona es la ciudad más competida de España después de Madrid. En barrios como el Eixample, Gràcia, Poblenou, Sarrià o Sants, cada sector tiene decenas de negocios compitiendo por los mismos clientes. La diferencia entre el que recibe llamadas y el que no suele ser una sola cosa: quién aparece primero en Google Maps.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            Cuando alguien busca "fontanero en el Eixample", "fisioterapeuta a Gràcia" o "empresa de reformes a Poblenou" — en castellano o en catalán — Google muestra tres negocios en el mapa. Los que están ahí reciben el 40% de todos los clics. Los que no están, no existen para esa persona.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            Posicionar tu negocio en Google Maps en Barcelona requiere optimización continua: ficha activa, web coherente y contenido relevante. Nosotros lo gestionamos todo para que tú te centres en tu negocio.
          </p>
        </div>
      </section>

      <section className="bg-warm-bg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Cómo posicionamos tu negocio en Barcelona
          </h2>
          <div className="flex flex-col">
            {pasos.map((p, i) => (
              <div
                key={p.n}
                className={`flex flex-col md:flex-row gap-6 md:gap-10 py-8 ${i !== pasos.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="text-primary font-heading font-light text-5xl md:text-6xl leading-none md:w-32 shrink-0">
                  {p.n}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-lg md:text-xl mb-3">{p.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-3">
            SEO local para negocios en Barcelona por sector
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Trabajamos con todo tipo de negocios locales en Barcelona. Cada sector tiene su propia competencia y sus propias búsquedas en la ciudad.
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
              <li className="flex items-start gap-2"><span className="text-primary">✓</span><span>Tu negocio aparece cuando alguien te busca en Google en tu ciudad</span></li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span><span>Más llamadas y contactos directos — sin pagar por cada uno</span></li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span><span>Contenido mensual que posiciona para nuevas búsquedas en tu zona</span></li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span><span>Tu ficha de Google activa — Google te muestra antes que a la competencia</span></li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span><span>Cada mes sabes exactamente cuántos contactos ha generado Google</span></li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span><span>Hablas siempre con la misma persona — sin intermediarios</span></li>
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors"
            >
              Empezar en Barcelona →
            </a>
          </div>
        </div>
      </section>

      <FAQSection title="Preguntas frecuentes sobre SEO local en Barcelona" items={faqs} />

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

      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-6">
            ¿Tu negocio en Barcelona no aparece cuando tus clientes te buscan en Google?
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

export default SeoLocalBarcelona;
