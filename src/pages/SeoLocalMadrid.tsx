import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";

import madridImg from "@/assets/cities/madrid.webp";

const WHATSAPP_URL =
  "https://wa.me/34684780063?text=Hola%2C%20quiero%20posicionar%20mi%20negocio%20en%20Madrid";

const sectores = [
  { label: "SEO para fontaneros", href: "/seo-para-fontaneros" },
  { label: "SEO para fisioterapeutas", href: "/seo-para-fisioterapeutas" },
  { label: "SEO para empresas de reformas", href: "/seo-para-reformas" },
  { label: "SEO para pintores", href: "/seo-para-pintores" },
  { label: "SEO para clínicas", href: "/seo-para-clinicas" },
  { label: "SEO para entrenadores personales", href: "/seo-para-entrenadores" },
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
    title: "Analizamos tu ficha y tu competencia real en Madrid",
    body: "Antes de tocar nada miramos cómo estás posicionado en Google Maps para las búsquedas de tu sector en tu zona de Madrid. Quién te supera, por qué, y qué hace diferente. Ese análisis define el plan de trabajo desde el primer día.",
  },
  {
    n: "02",
    title: "Optimizamos tu Google Business Profile y tu web",
    body: "Configuramos cada campo de tu ficha con las keywords correctas para Madrid: categorías, descripción, fotos, horarios y zona de servicio por barrios y distritos. Sincronizamos ficha y web para que Google reciba señales coherentes de los dos.",
  },
  {
    n: "03",
    title: "Publicamos contenido mensual y te informamos de resultados",
    body: "Cada mes publicamos en tu ficha, gestionamos las reseñas y te enviamos un informe claro: posiciones ganadas en Madrid, visitas al perfil y llamadas recibidas. Sin tecnicismos, con datos reales.",
  },
];

const planFeatures = [
  "Google Business Profile — configuración y gestión mensual",
  "Web local optimizada para búsquedas en Madrid",
  "2 artículos de blog mensuales posicionados para tu sector",
  "Posts mensuales en tu ficha de Google",
  "Informe mensual de posiciones y resultados",
  "Gestor directo — hablas con quien gestiona tu cuenta",
];

const faqs = [
  {
    q: "¿Cuánto tarda en posicionarse un negocio en Madrid?",
    a: "En Madrid, por la alta competencia, los primeros resultados visibles aparecen entre el mes 2 y el mes 4: más visitas al perfil, más llamadas y mejora de posiciones en Google Maps. A partir del mes 6 los resultados son sostenibles y difíciles de superar por la competencia.",
  },
  {
    q: "¿Por qué no aparezco en Google Maps si ya tengo ficha de Google?",
    a: "Tener la ficha creada no es suficiente. Google valora relevancia, prominencia y distancia. Una ficha sin actualizaciones, sin reseñas recientes o con información incompleta pierde posiciones frente a competidores que sí la gestionan activamente.",
  },
  {
    q: "¿Necesito web para hacer SEO local en Madrid?",
    a: "No es imprescindible para empezar, pero mejora significativamente los resultados. El servicio incluye la web desde el inicio — no necesitas nada previo para arrancar.",
  },
  {
    q: "¿Funciona para cualquier tipo de negocio en Madrid?",
    a: "Sí. Fontaneros, fisioterapeutas, reformas, pintores, clínicas, entrenadores y cualquier negocio local en Madrid en cualquier barrio o distrito.",
  },
  {
    q: "¿Hay permanencia mínima?",
    a: "No. El servicio es mes a mes, sin permanencia mínima.",
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
        title="SEO Local Madrid para Negocios | Aparecer en Google Maps | slocal.es"
        description="Haz que tu negocio en Madrid aparezca cuando tus clientes te buscan en Google. Más llamadas, más clientes locales. Desde 147€/mes + IVA."
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
              SEO Local en Madrid: Aparece cuando tus clientes te buscan
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              Cuando alguien busca "fontanero en Chamberí" o "fisioterapeuta en Salamanca", Google muestra tres negocios en el mapa. Esos tres se llevan el 40% de los clics. El resto no existe para ese cliente. Lo gestionamos para que el tuyo sea uno de ellos.
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

      {/* WHY YOU DON'T APPEAR */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            Por qué tu negocio en Madrid no aparece en Google Maps
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            Google decide en décimas de segundo qué tres negocios mostrar basándose en tres factores: relevancia (qué tan bien encaja tu ficha con lo que buscan), distancia (lo cerca que estás) y prominencia (qué tan activo y reconocido es tu negocio online). La distancia no la puedes controlar. La relevancia y la prominencia sí — y son en las que trabajamos.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            El error más común en Madrid: crear la ficha de Google y abandonarla. Google interpreta la inactividad como falta de relevancia y te baja posiciones. En un mercado tan competido como Madrid, donde cada barrio tiene decenas de negocios del mismo sector, esa diferencia puede ser de 20 llamadas al mes.
          </p>
        </div>
      </section>

      {/* HOW WE DO IT */}
      <section className="bg-warm-bg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Cómo posicionamos tu negocio en Madrid
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

      {/* SECTORES */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-3">
            SEO local para negocios en Madrid por sector
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Madrid tiene sectores muy competidos en Google Maps. Conocemos las búsquedas específicas de cada uno.
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
          <h2 className="font-heading text-2xl md:text-3xl mb-3 text-center">
            Servicio de posicionamiento local en Madrid
          </h2>
          <p className="text-sm md:text-base text-muted-foreground text-center mb-8 max-w-lg mx-auto">
            Todo lo que necesita tu negocio para aparecer primero en Google Maps cuando tus clientes te buscan en Madrid.
          </p>
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <div className="text-[10px] uppercase tracking-wider font-heading text-muted-foreground mb-4">
              Plan slocal.es
            </div>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-heading text-4xl md:text-5xl">147€</span>
              <span className="text-sm text-muted-foreground">/mes + IVA</span>
            </div>
            <ul className="space-y-3 mb-6 text-sm">
              {planFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mb-6">
              Sin permanencia mínima · Pago mensual
            </p>
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
