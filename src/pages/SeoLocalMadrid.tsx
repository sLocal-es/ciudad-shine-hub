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
    title: "Analizamos tu ficha y la competencia real en tu barrio",
    body: "Antes de tocar nada analizamos cómo estás posicionado en Google Maps para las búsquedas de tu sector en tu zona concreta de Madrid. No es lo mismo posicionar en Retiro que en Vallecas, ni en Malasaña que en Moratalaz. Cada barrio tiene su propia competencia y sus propias búsquedas. Ese análisis define el plan de trabajo desde el primer día.",
  },
  {
    n: "02",
    title: "Optimizamos tu Google Business Profile y tu web para Madrid",
    body: "Configuramos cada campo de tu ficha con las keywords correctas para Madrid: categorías principales y secundarias, descripción optimizada para búsquedas locales, fotos actualizadas, horarios precisos y zona de servicio definida por barrios y distritos. Sincronizamos tu ficha con tu web para que Google reciba señales coherentes y consistentes de los dos. Esto refuerza directamente tu relevancia y tu prominencia — los dos factores que puedes controlar.",
  },
  {
    n: "03",
    title: "Gestionamos tu ficha mes a mes y te informamos de resultados",
    body: "El SEO local no es algo que se hace una vez — es una gestión continua. Cada mes publicamos en tu ficha, respondemos reseñas de forma estratégica, creamos contenido optimizado para las búsquedas de tu sector en Madrid y ajustamos la estrategia según los datos. Al final del mes recibes un informe claro: posiciones ganadas, visitas al perfil, llamadas recibidas y qué búsquedas te están trayendo clientes. Sin tecnicismos, con datos reales.",
  },
];

const planFeatures = [
  "Tu negocio aparece cuando alguien te busca en Google en tu ciudad",
  "Más llamadas y contactos directos — sin pagar por cada uno",
  "Contenido mensual que posiciona para nuevas búsquedas en tu zona",
  "Tu ficha de Google activa — Google te muestra antes que a la competencia",
  "Cada mes sabes exactamente cuántos contactos ha generado Google",
  "Hablas siempre con la misma persona — sin intermediarios",
];

const faqs = [
  {
    q: "¿Cuánto tarda en posicionarse un negocio en Madrid?",
    a: "En Madrid, por la alta competencia, los primeros resultados visibles aparecen entre el mes 2 y el mes 4: más visitas al perfil, más llamadas y mejora de posiciones en Google Maps. A partir del mes 6 los resultados son sostenibles. El SEO local es una inversión a medio plazo — no desaparece cuando dejas de pagar como la publicidad.",
  },
  {
    q: "¿Por qué no aparezco en Google Maps si ya tengo ficha de Google?",
    a: "Tener la ficha creada no es suficiente. Google valora relevancia, prominencia y distancia. Una ficha sin actualizaciones, sin reseñas recientes, con información incompleta o inconsistente con la web pierde posiciones progresivamente frente a competidores que sí la gestionan.",
  },
  {
    q: "¿Necesito web para hacer SEO local en Madrid?",
    a: "No es imprescindible para empezar, pero una web optimizada mejora significativamente los resultados. Google cruza la información de tu ficha con tu web — si coinciden y se refuerzan, la visibilidad aumenta. El servicio incluye la web desde el inicio.",
  },
  {
    q: "¿Funciona para cualquier tipo de negocio en Madrid?",
    a: "Sí. Fontaneros, fisioterapeutas, reformas, pintores, clínicas, entrenadores y cualquier negocio local en Madrid. Si tus clientes te buscan en Google por servicio y ciudad, el SEO local funciona para ti.",
  },
  {
    q: "¿Qué diferencia hay entre SEO local y Google Ads en Madrid?",
    a: "Google Ads te da visibilidad mientras pagas — cuando paras el presupuesto, desapareces. El SEO local construye una presencia orgánica que crece mes a mes. En Madrid, donde el coste por clic en Google Ads es elevado para servicios locales, el SEO local tiene un retorno mucho más rentable a medio plazo.",
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
    email: "info@slocal.es",
    areaServed: "Madrid, España",
    serviceArea: "Madrid",
  };

  return (
    <>
      <SEOHead
        title="SEO Local en Madrid para Negocios | Más Clientes desde Google | slocal.es"
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
              SEO Local en Madrid: Más Clientes desde Google
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
            Madrid es la ciudad más competida de España en búsquedas locales. Más de 3 millones de personas buscan servicios locales en Google cada mes en la capital. Para un fontanero en Carabanchel, una clínica en Hortaleza o un entrenador personal en Arganzuela, aparecer en Google Maps no es opcional — es la diferencia entre el teléfono que suena y el silencio.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            Google decide qué tres negocios mostrar en el mapa basándose en tres factores concretos. El primero es la relevancia: qué tan bien encaja tu ficha con lo que el cliente está buscando en ese momento. El segundo es la distancia: qué tan cerca estás de quien busca. El tercero es la prominencia: qué tan activo, conocido y valorado es tu negocio en internet. La distancia no la puedes controlar. La relevancia y la prominencia sí — y son exactamente en las que trabajamos.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            El error más común en Madrid: crear la ficha de Google una vez y abandonarla. Google interpreta la inactividad como falta de relevancia y baja posiciones progresivamente. Un negocio con ficha desactualizada, sin fotos recientes, sin respuestas a reseñas y sin publicaciones periódicas compite en desventaja frente a uno que sí la gestiona activamente. En Madrid, donde la competencia por barrio es máxima, esa diferencia puede traducirse en 15 o 20 llamadas al mes que van a otro.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            Otro factor crítico es la coherencia entre la ficha de Google y la web. Si los datos no coinciden — nombre, teléfono, servicios — Google desconfía y reduce la visibilidad. Muchos negocios en Madrid pierden posiciones por inconsistencias que ni saben que tienen.
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

      {/* BARRIOS */}
      <section className="py-16 bg-warm-bg">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            SEO local en Madrid: cada barrio tiene su propia competencia
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            Madrid no es una ciudad uniforme. Las búsquedas en Chamberí tienen patrones distintos a las de Vallecas. Un fontanero en Carabanchel compite con negocios diferentes a uno en el barrio de Salamanca. Un fisioterapeuta en Tetuán tiene una competencia distinta a uno en Arganzuela.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            Por eso el SEO local en Madrid requiere una estrategia específica por zona, no una solución genérica para toda la ciudad. Configuramos tu ficha y tu contenido para las búsquedas reales que hacen los clientes en tu barrio: con el nombre del distrito, con los monumentos y referencias cercanas, con el lenguaje que usan tus clientes cuando buscan desde el móvil.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            Trabajamos con negocios en toda la ciudad: Centro, Arganzuela, Retiro, Salamanca, Chamartín, Tetuán, Chamberí, Fuencarral, Moncloa, Latina, Carabanchel, Usera, Puente de Vallecas, Moratalaz, Ciudad Lineal, Hortaleza, Villaverde, Villa de Vallecas, Vicálvaro, San Blas y Barajas.
          </p>
        </div>
      </section>

      {/* SECTORES */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-3">
            SEO local para negocios en Madrid por sector
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Madrid tiene sectores muy competidos en Google Maps. Conocemos las búsquedas específicas de cada uno y trabajamos de forma diferente en cada nicho.
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
