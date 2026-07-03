import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CTASection from "@/components/CTASection";
import heroFontanero from "@/assets/fontaneros/hero-fontanero.jpg";
import movilBusqueda from "@/assets/fontaneros/movil-busqueda.jpg";
import furgoneta from "@/assets/fontaneros/furgoneta.jpg";
import herramientas from "@/assets/fontaneros/herramientas.jpg";

const FontanerosPage = () => {
  const faqs = [
    {
      q: "¿Vale la pena el SEO para un fontanero autónomo?",
      a: "Sí. La mayoría de nuestros clientes son autónomos o empresas de 2-3 personas. El SEO local es especialmente rentable para fontaneros porque cada trabajo puede valer entre 80€ y varios miles en instalaciones grandes. Una llamada adicional al mes ya amortiza el servicio.",
    },
    {
      q: "¿Necesito web si ya tengo ficha de Google?",
      a: "La ficha sola posiciona en Maps, pero una web refuerza la autoridad y te permite aparecer también en los resultados orgánicos. El servicio incluye ambas desde el inicio.",
    },
    {
      q: "¿Cómo compito con fontaneros que llevan años en Google?",
      a: "El SEO local favorece la proximidad y la relevancia, no el tiempo en el mercado. Un fontanero con ficha bien optimizada y reseñas recientes en su barrio aparece antes que una empresa grande con ficha abandonada.",
    },
    {
      q: "¿Funciona especialmente para urgencias?",
      a: "Especialmente para urgencias. Las búsquedas de urgencia tienen la mayor intención de compra y en muchas zonas hay menos competencia bien posicionada. Configuramos tu ficha y contenido específicamente para 'fontanero urgente', 'avería ahora' y 'fontanero 24h'.",
    },
    {
      q: "¿Cuándo empiezo a recibir más llamadas?",
      a: "Los primeros contactos desde Google suelen aparecer entre el mes 2 y el mes 3. Las urgencias se captan antes porque la intención de búsqueda es inmediata y la competencia bien posicionada es menor en esas queries específicas.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "SEO para Fontaneros", item: "https://slocal.es/seo-para-fontaneros" },
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
    name: "SEO para Fontaneros",
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    areaServed: "España",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "slocal.es",
    url: "https://slocal.es",
    description: "Servicio de SEO local para fontaneros en España",
    areaServed: "España",
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

  const serviceTypes = [
    "Fontanero urgente y averías",
    "Fontanero 24 horas",
    "Instalación y cambio de caldera",
    "Detección y reparación de fugas",
    "Fontanero para comunidades",
    "Instalaciones de fontanería",
    "Desatascos y tuberías",
    "Fontanero para reformas",
  ];

  const cities = [
    { name: "Madrid", slug: "madrid" },
    { name: "Barcelona", slug: "barcelona" },
    { name: "Valencia", slug: "valencia" },
    { name: "Sevilla", slug: "sevilla" },
    { name: "Málaga", slug: "malaga" },
    { name: "Zaragoza", slug: "zaragoza" },
    { name: "Bilbao", slug: "bilbao" },
    { name: "Murcia", slug: "murcia" },
  ];

  const otherSectors = [
    { label: "SEO para fisioterapeutas", slug: "seo-para-fisioterapeutas" },
    { label: "SEO para empresas de reformas", slug: "seo-para-reformas" },
    { label: "SEO para pintores", slug: "seo-para-pintores" },
    { label: "SEO para clínicas", slug: "seo-para-clinicas" },
    { label: "SEO para entrenadores personales", slug: "seo-para-entrenadores" },
    { label: "SEO para yoga y pilates", slug: "seo-para-yoga" },
  ];

  const searchQueries = [
    "Fontanero urgente",
    "Fontanero 24 horas",
    "Reparación de fugas",
    "Instalación de caldera",
    "Desatascos",
    "Fontanero cerca de mí",
  ];

  const processSteps = [
    { n: "Uno", h: "Descubrimos qué servicios tienen más demanda", d: "Analizamos qué buscan realmente tus clientes potenciales en tu zona: averías, calderas, urgencias, comunidades." },
    { n: "Dos", h: "Analizamos cómo entiende Google tu empresa", d: "Auditamos tu ficha, tu web y la competencia bien posicionada en tu barrio y en toda la ciudad." },
    { n: "Tres", h: "Optimizamos tu web y tu ficha para esas búsquedas", d: "Reescribimos categorías, servicios, textos y estructuras para que Google entienda para qué debe mostrarte." },
    { n: "Cuatro", h: "Empiezas a aparecer cuando te buscan", d: "Tu negocio se cuela en el Local Pack para las búsquedas de mayor intención, sin pagar por cada clic." },
  ];

  const monthlyReasons = [
    { h: "Tus competidores siguen trabajando", d: "Otros fontaneros publican, piden reseñas y mueven su ficha. Si tú te detienes, ellos avanzan." },
    { h: "Google cambia constantemente", d: "El algoritmo se actualiza cada mes. Lo que hoy te posiciona mañana puede necesitar ajustes." },
    { h: "Tu ficha necesita actividad", d: "Fotos nuevas, publicaciones, respuestas a reseñas. Sin actividad, Google interpreta que estás inactivo." },
    { h: "Aparecen nuevas búsquedas", d: "Cada mes surgen consultas nuevas por zona, servicio o urgencia. Las capturamos con contenido específico." },
    { h: "Seguimos reforzando tu presencia", d: "Reseñas, contenido, autoridad. Cuanto más maduro es tu SEO local, más difícil es que te superen." },
  ];

  return (
    <>
      <SEOHead
        title="SEO para Fontaneros | Consigue Más Llamadas desde Google | slocal.es"
        description="Haz que tu negocio de fontanería aparezca cuando alguien busca fontanero urgente en tu ciudad. Más llamadas, más trabajos. Desde 147€/mes + IVA."
        canonical="/seo-para-fontaneros"
        jsonLd={[breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema]}
      />

      {/* HERO EDITORIAL */}
      <section className="bg-warm-bg pt-10 md:pt-14 pb-20 md:pb-28">
        <div className="container">
          <BreadcrumbNav
            items={[
              { label: "Inicio", href: "/" },
              { label: "SEO para Fontaneros" },
            ]}
          />
          <p className="mt-4 mb-8 md:mb-10 font-heading text-xs tracking-[0.2em] uppercase text-primary">
            — SEO para Fontaneros
          </p>

          <h1 className="font-heading font-semibold text-warm-fg leading-[0.95] tracking-tight text-[13vw] md:text-[8.5vw] lg:text-[7.5rem] max-w-[16ch]">
            Que te llamen cuando <span className="text-primary">haya una avería</span>.
          </h1>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-5 md:col-start-1">
              <p className="text-lg md:text-xl leading-relaxed font-body font-light text-warm-fg/80">
                Cuando una tubería revienta o hay una fuga, el cliente busca en Google y llama al primero que aparece. Si no eres tú, ese trabajo se lo lleva otro.
              </p>
              <p className="mt-6 text-lg md:text-xl leading-relaxed font-body font-light text-warm-fg/80">
                Lo gestionamos para que seas el primero. Desde 147&nbsp;€/mes.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/contacto"
                  className="bg-warm-fg text-warm-bg font-heading text-sm rounded-full px-7 py-3.5 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Hablemos →
                </Link>
                <Link
                  to="/como-funciona"
                  className="border border-warm-fg/25 text-warm-fg font-heading text-sm rounded-full px-7 py-3.5 hover:border-warm-fg hover:bg-warm-fg hover:text-warm-bg transition-colors"
                >
                  Ver cómo funciona
                </Link>
              </div>
            </div>
            <div className="md:col-span-7">
              <img
                src={heroFontanero}
                alt="Fontanero profesional reparando el grifo de una cocina con una llave inglesa"
                width={1600}
                height={1200}
                className="w-full h-auto rounded-sm object-cover aspect-[4/3] md:aspect-[16/11]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MANIFIESTO GIGANTE */}
      <section className="bg-warm-bg py-24 md:py-36 border-t border-warm-fg/10">
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— El punto de partida</p>
          <p className="font-heading font-semibold text-warm-fg leading-[1.02] tracking-tight text-[9vw] md:text-[5.5vw] lg:text-[5rem] max-w-[18ch]">
            Google Maps solo muestra tres negocios. Esos tres se llevan el <span className="text-primary">40 % de los clics</span>.
          </p>
          <p className="mt-10 md:mt-14 max-w-2xl text-lg md:text-xl font-body font-light text-warm-fg/70 leading-relaxed">
            El cuarto y el quinto apenas existen para ese cliente. La diferencia entre estar en el top 3 y estar fuera puede ser de 15 a 25 llamadas al mes.
          </p>
        </div>
      </section>

      {/* ASÍ BUSCAN — imagen + listado */}
      <section className="bg-warm-bg py-24 md:py-32 border-t border-warm-fg/10">
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="md:col-span-6">
            <img
              src={movilBusqueda}
              alt="Persona buscando un fontanero local en Google Maps desde su móvil"
              width={1400}
              height={1600}
              loading="lazy"
              className="w-full h-auto rounded-sm object-cover aspect-[4/5]"
            />
          </div>
          <div className="md:col-span-6">
            <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Así te buscan</p>
            <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-10">
              Así buscan tus clientes.<br />Así te encuentran.
            </h2>
            <ul className="divide-y divide-warm-fg/15 border-y border-warm-fg/15">
              {searchQueries.map((q) => (
                <li key={q} className="py-4 md:py-5 flex items-baseline justify-between gap-6">
                  <span className="font-heading text-xl md:text-2xl text-warm-fg">{q}</span>
                  <span className="font-body text-xs tracking-widest text-warm-fg/40">GOOGLE</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-heading text-xl md:text-2xl leading-snug text-warm-fg max-w-md">
              La pregunta es: <span className="text-primary">¿apareces tú o tu competencia?</span>
            </p>
          </div>
        </div>
      </section>

      {/* POR QUÉ SON INVISIBLES — dos columnas grandes */}
      <section className="bg-warm-bg py-24 md:py-32 border-t border-warm-fg/10">
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— El problema</p>
          <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-[18ch] mb-16 md:mb-24">
            Por qué muchos fontaneros son invisibles en Google.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="font-heading text-2xl md:text-3xl text-warm-fg leading-snug mb-6">
                Fichas creadas y nunca más tocadas.
              </p>
              <p className="text-base md:text-lg font-body font-light text-warm-fg/70 leading-relaxed">
                El error más común: crear la ficha de Google cuando empiezas y no volver a tocarla. Google interpreta eso como inactividad y te baja posiciones progresivamente. Un fontanero con ficha desactualizada, sin fotos recientes y sin reseñas pierde visibilidad cada semana frente a competidores que sí la gestionan.
              </p>
            </div>
            <div>
              <p className="font-heading text-2xl md:text-3xl text-warm-fg leading-snug mb-6">
                Una sola página para todo.
              </p>
              <p className="text-base md:text-lg font-body font-light text-warm-fg/70 leading-relaxed">
                "Fontanero urgente", "instalación de caldera", "detección de fugas" y "fontanero 24 h" son búsquedas distintas con clientes distintos. Si tienes una sola página genérica, solo apareces para una de ellas — y compites con todos por el mismo hueco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO — grid numerado editorial */}
      <section className="bg-warm-bg py-24 md:py-32 border-t border-warm-fg/10">
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— El proceso</p>
          <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-[16ch] mb-16 md:mb-20">
            Cómo conseguimos que te llamen más desde Google.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-y-20 gap-x-16 md:gap-x-24">
            {processSteps.map((s) => (
              <div key={s.n} className="border-t border-warm-fg/20 pt-6">
                <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-4">— {s.n}</p>
                <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-warm-fg mb-4">
                  {s.h}
                </h3>
                <p className="text-base md:text-lg font-body font-light text-warm-fg/70 leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASO REAL — imagen full + cita */}
      <section className="bg-warm-bg py-24 md:py-32 border-t border-warm-fg/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-end">
            <div className="md:col-span-7">
              <img
                src={furgoneta}
                alt="Furgoneta de fontanería aparcada en una calle de España al atardecer"
                width={1600}
                height={1100}
                loading="lazy"
                className="w-full h-auto rounded-sm object-cover aspect-[16/11]"
              />
            </div>
            <div className="md:col-span-5">
              <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Caso real</p>
              <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl leading-[1.05] tracking-tight mb-8">
                De invisible a top 3 en Google Maps.
              </h2>
              <p className="text-base md:text-lg font-body font-light text-warm-fg/70 leading-relaxed">
                MVA Fontanería en Madrid consiguió <span className="text-warm-fg font-body">60 interacciones</span> desde Google en sus primeros 2 meses. Fontaneros Económicos, también en Madrid, recibió <span className="text-warm-fg font-body">11 llamadas directas y 4 WhatsApp</span> en mes y medio. Ambos empezaron desde cero, sin web ni ficha optimizada.
              </p>
            </div>
          </div>

          {/* Números destacados */}
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8 border-t border-warm-fg/15 pt-12">
            {[
              { k: "60", l: "interacciones desde Google en 2 meses" },
              { k: "11", l: "llamadas directas en mes y medio" },
              { k: "3×", l: "más visibilidad en el Local Pack" },
            ].map((m) => (
              <div key={m.l}>
                <p className="font-heading font-semibold text-warm-fg text-5xl md:text-7xl leading-none tracking-tight">
                  {m.k}
                </p>
                <p className="mt-4 font-body font-light text-sm md:text-base text-warm-fg/60 max-w-[22ch]">
                  {m.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS QUE POSICIONAMOS — tipografía gigante */}
      <section className="bg-warm-bg py-24 md:py-32 border-t border-warm-fg/10">
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— Servicios</p>
          <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-[20ch] mb-4">
            Tipos de fontanería que posicionamos.
          </h2>
          <p className="text-base md:text-lg font-body font-light text-warm-fg/70 max-w-2xl mb-14">
            Cada tipo de servicio tiene sus propias búsquedas en Google. Creamos contenido específico para cada uno.
          </p>
          <ul className="divide-y divide-warm-fg/15 border-y border-warm-fg/15">
            {serviceTypes.map((t, i) => (
              <li
                key={t}
                className="py-6 md:py-7 flex items-baseline justify-between gap-6 group"
              >
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="font-body text-xs tracking-widest text-warm-fg/40 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-2xl md:text-3xl lg:text-4xl tracking-tight text-warm-fg group-hover:text-primary transition-colors">
                    {t}
                  </span>
                </div>
                <span className="font-heading text-primary text-2xl shrink-0">↗</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* POR QUÉ CADA MES */}
      <section className="bg-warm-bg py-24 md:py-32 border-t border-warm-fg/10">
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— Por qué cada mes</p>
            <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl leading-[1.05] tracking-tight mb-10">
              Google no es una fotografía. Es una <span className="text-primary">competición continua</span>.
            </h2>
            <img
              src={herramientas}
              alt="Herramientas de fontanería sobre una superficie clara"
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full h-auto rounded-sm object-cover aspect-[4/3] hidden md:block"
            />
          </div>
          <div className="md:col-span-7">
            <ol className="space-y-10 md:space-y-12">
              {monthlyReasons.map((r, i) => (
                <li key={r.h} className="border-t border-warm-fg/20 pt-6 grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-10">
                  <span className="font-heading text-xs tracking-widest text-warm-fg/40 pt-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl leading-snug text-warm-fg mb-3">{r.h}</h3>
                    <p className="font-body font-light text-base text-warm-fg/70 leading-relaxed">{r.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PLAN — editorial, no card oscura */}
      <section className="bg-warm-bg py-24 md:py-32 border-t border-warm-fg/10">
        <div className="container max-w-4xl">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— Plan slocal.es</p>
          <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-4">
            Servicio de SEO para fontaneros.
          </h2>
          <p className="text-base md:text-lg font-body font-light text-warm-fg/70 mb-12 max-w-2xl">
            Todo lo que necesita tu negocio de fontanería para aparecer cuando te buscan en Google.
          </p>

          <p className="font-heading font-semibold text-warm-fg text-7xl md:text-9xl leading-none tracking-tight mb-2">
            147&nbsp;€
          </p>
          <p className="font-body text-warm-fg/60 mb-12">al mes, + IVA</p>

          <ul className="divide-y divide-warm-fg/15 border-y border-warm-fg/15 mb-12">
            {[
              "Tu negocio aparece cuando alguien busca fontanero urgente en tu ciudad",
              "Más llamadas directas desde Google — sin pagar por cada una",
              "Contenido mensual que posiciona para nuevas búsquedas de averías y servicios",
              "Tu ficha de Google activa — Google te muestra antes que a la competencia",
              "Cada mes sabes exactamente cuántas llamadas ha generado Google",
              "Hablas siempre con la misma persona — sin intermediarios",
            ].map((f) => (
              <li key={f} className="py-5 flex items-start gap-6">
                <span className="font-heading text-primary text-sm pt-1.5">✓</span>
                <span className="font-body text-base md:text-lg text-warm-fg/85 leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/contacto"
            className="inline-block bg-warm-fg text-warm-bg font-heading text-sm rounded-full px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Empezar →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-warm-bg py-24 md:py-32 border-t border-warm-fg/10">
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— FAQ</p>
            <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl leading-[1.05] tracking-tight">
              Preguntas frecuentes.
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="divide-y divide-warm-fg/15 border-y border-warm-fg/15">
              {faqs.map((item, i) => (
                <details key={i} className="group py-6">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-6 font-heading text-lg md:text-xl text-warm-fg">
                    <span>{item.q}</span>
                    <span className="text-primary shrink-0 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-base font-body font-light text-warm-fg/70 leading-relaxed max-w-2xl">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CIUDADES */}
      <section className="bg-warm-bg py-20 md:py-24 border-t border-warm-fg/10">
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Cobertura</p>
          <h2 className="font-heading font-semibold text-warm-fg text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight mb-4 max-w-[18ch]">
            Trabajamos con fontaneros en toda España.
          </h2>
          <p className="text-base font-body font-light text-warm-fg/70 mb-10 max-w-2xl">
            Gestionamos el posicionamiento local de fontaneros en toda España.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {cities.map((city) => (
              <Link
                key={city.slug}
                to={`/seo-local-${city.slug}`}
                className="border border-warm-fg/20 rounded-full px-5 py-2.5 text-sm font-heading text-warm-fg transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-[2px]"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OTROS SECTORES */}
      <section className="bg-warm-bg py-16 md:py-20 border-t border-warm-fg/10">
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Otros sectores</p>
          <h2 className="font-heading font-semibold text-warm-fg text-2xl md:text-3xl mb-8">
            También trabajamos con otros sectores.
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {otherSectors.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="border border-warm-fg/20 rounded-full px-5 py-2.5 text-sm font-heading text-warm-fg transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-[2px]"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quieres que tu teléfono suene más gracias a Google?"
        buttonText="Hablemos →"
      />
    </>
  );
};

export default FontanerosPage;
