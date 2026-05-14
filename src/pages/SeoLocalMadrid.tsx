import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import CityHeroAuditForm from "@/components/cityseo/CityHeroAuditForm";

const CITY = "Madrid";
const SLUG = "madrid";
const URL = `https://slocal.es/seo-local-${SLUG}`;

// Datos reales obtenidos de Semrush (database: es) durante la investigación
const KEYWORDS_REALES: { kw: string; vol: string; kd?: string; nota?: string }[] = [
  { kw: "agencia seo madrid", vol: "3.600", kd: "41/100", nota: "la consulta comercial con más volumen" },
  { kw: "posicionamiento web madrid", vol: "1.300", kd: "36/100" },
  { kw: "posicionamiento seo madrid", vol: "1.300", kd: "—" },
  { kw: "seo madrid", vol: "1.000", kd: "—" },
  { kw: "consultor seo madrid", vol: "880", kd: "—" },
  { kw: "seo local madrid", vol: "480", kd: "8/100", nota: "muy accesible para entrar al top" },
  { kw: "agencia posicionamiento seo madrid", vol: "390", kd: "—" },
  { kw: "agencia seo local madrid", vol: "320", kd: "—" },
  { kw: "consultor seo local madrid", vol: "170", kd: "—" },
  { kw: "experto seo local madrid", vol: "140", kd: "—" },
  { kw: "posicionamiento web fuenlabrada", vol: "110", kd: "—", nota: "ejemplo de búsqueda por municipio del área metropolitana" },
  { kw: "posicionamiento seo local madrid", vol: "50", kd: "—" },
];

const BARRIOS = [
  { barrio: "Chamberí", busqueda: "fisioterapeuta en Chamberí" },
  { barrio: "Salamanca", busqueda: "clínica dental Salamanca Madrid" },
  { barrio: "Centro / Sol", busqueda: "abogado en el centro de Madrid" },
  { barrio: "Vallecas", busqueda: "fontanero en Vallecas" },
  { barrio: "Carabanchel", busqueda: "reformas en Carabanchel" },
  { barrio: "Tetuán", busqueda: "psicólogo en Tetuán" },
  { barrio: "Hortaleza", busqueda: "academia inglés Hortaleza" },
  { barrio: "Móstoles (área metropolitana)", busqueda: "consultor seo local Móstoles" },
  { barrio: "Fuenlabrada (área metropolitana)", busqueda: "posicionamiento web Fuenlabrada" },
];

const FAQS = [
  {
    q: "¿Cuánto tarda mi negocio en aparecer primero en Google en Madrid?",
    a: "Madrid tiene una competencia digital alta: la keyword 'agencia seo madrid' tiene una dificultad de 41/100 en Semrush y 'posicionamiento web madrid' está en 36/100. En cambio, búsquedas más concretas tipo 'fisioterapeuta en Chamberí' o 'abogado en Vallecas' tienen una competencia muy inferior. Por eso, en Madrid los primeros resultados visibles para tu barrio llegan habitualmente en 3-6 meses, y la posición se consolida a partir del mes 4-5.",
  },
  {
    q: "¿Cómo posiciona Google a los negocios locales en Madrid?",
    a: "Google combina tres factores principales: relevancia (que tu ficha y tu web coincidan con lo que se busca), distancia (a qué distancia está tu negocio de quien busca) y prominencia (autoridad y reseñas). En Madrid la distancia es decisiva — una ficha bien optimizada en Tetuán no compite con una en Vallecas, compite con las de su propia zona. Por eso trabajar el SEO local por barrio funciona muchísimo mejor que intentar 'posicionarse en toda la ciudad'.",
  },
  {
    q: "¿Por qué mi negocio no aparece en Google Maps en Madrid?",
    a: "Las causas más frecuentes que se repiten en foros y blogs especializados: ficha sin verificar o duplicada, categoría principal mal elegida, nombre del negocio incoherente entre la ficha y la web, dirección que no coincide con el área servida, falta de reseñas recientes y ausencia total de publicaciones en la ficha. En una ciudad como Madrid, donde compites con miles de negocios por categoría, cualquiera de estos errores te saca del Local Pack.",
  },
  {
    q: "¿Necesito agencia o puedo hacerlo yo mismo en Madrid?",
    a: "Puedes empezar tú mismo verificando tu ficha, eligiendo bien la categoría, subiendo fotos reales y pidiendo reseñas a tus clientes. Pero competir con quienes ya están posicionados en Madrid requiere también una web optimizada por servicio y barrio, contenido mensual y monitorización de posiciones. Ese es el trabajo que hacemos en slocal.es por 147€/mes + IVA, sin permanencia.",
  },
  {
    q: "¿Cuántas reseñas necesito para entrar al Local Pack en Madrid?",
    a: "No hay un número oficial, pero observando los negocios que ya están en el top 3 de Maps en Madrid, lo habitual es tener al menos 20-40 reseñas con una media superior a 4,3 estrellas. En sectores muy competitivos del centro (clínicas dentales, abogados, restaurantes) los líderes suelen superar las 100-300 reseñas. La frecuencia importa tanto como el total: 2-4 reseñas nuevas al mes mantienen la ficha 'viva' a ojos de Google.",
  },
  {
    q: "¿Funciona el SEO local en Madrid si mi negocio está en un municipio del área metropolitana?",
    a: "Sí, y de hecho es donde más rentable resulta. La competencia digital en Móstoles, Fuenlabrada, Alcalá de Henares o Getafe es bastante menor que en el centro de Madrid. Búsquedas como 'posicionamiento web Fuenlabrada' (110 búsquedas/mes según Semrush) o 'consultor seo local Móstoles' tienen demanda real y muchos menos competidores que las equivalentes de Madrid capital.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
    { "@type": "ListItem", position: 2, name: `SEO Local en ${CITY}`, item: URL },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "slocal.es",
  url: URL,
  description: `SEO local para negocios en ${CITY}`,
  areaServed: `${CITY}, España`,
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
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const SeoLocalMadrid = () => {
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent("Madrid, España")}&output=embed`;

  return (
    <>
      <SEOHead
        title="SEO Local en Madrid: Aparece Primero en Google Maps | slocal.es"
        description="SEO local para negocios en Madrid. Datos reales de búsqueda por barrio, plan mes a mes desde 147€ + IVA y sin permanencia. Empieza a recibir contactos directos desde Google."
        canonical={`/seo-local-${SLUG}`}
        jsonLd={[breadcrumbSchema, localBusinessSchema, faqSchema]}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <BreadcrumbNav
              items={[
                { label: "Inicio", href: "/" },
                { label: `SEO Local en ${CITY}` },
              ]}
            />
            <span className="inline-block border border-primary text-primary text-xs font-heading rounded-full px-4 py-1.5 mb-6">
              SEO Local en {CITY}
            </span>
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              SEO Local en Madrid: que tus clientes te encuentren en Google
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-6 font-body font-light">
              Aparece cuando te buscan en Madrid. Sin pagar anuncios. Sin permanencia.
            </p>
            <ul className="space-y-2.5">
              {[
                "Tu ficha de Google optimizada para Madrid desde el primer mes",
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
              ¿Apareces en Google Maps en Madrid?
            </h2>
            <p className="text-primary-foreground/85 text-sm font-body font-light mb-5">
              Analizamos gratis cómo te ve Google ahora mismo
            </p>
            <CityHeroAuditForm ciudad={CITY} />
          </div>
        </div>
      </section>

      {/* TABLA PUNTOS CLAVE */}
      <section id="puntos-clave" className="py-12">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-xl md:text-2xl mb-6">
            SEO local en Madrid: puntos clave
          </h2>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm md:text-base">
              <tbody>
                {[
                  ["Población", "3,4 millones (6,7 millones en el área metropolitana)"],
                  ["Volumen de búsqueda 'agencia seo madrid'", "3.600 búsquedas/mes (Semrush, base ES)"],
                  ["Volumen de búsqueda 'seo local madrid'", "480 búsquedas/mes (Semrush, base ES)"],
                  ["Dificultad SEO 'seo local madrid'", "8/100 — muy accesible para nuevos sitios"],
                  ["Dificultad SEO 'agencia seo madrid'", "41/100 — competencia media-alta"],
                  ["Plazo estimado de resultados", "3-6 meses según barrio y sector"],
                  ["Servicio slocal.es", "147€/mes + IVA, sin permanencia"],
                ].map(([k, v], i, arr) => (
                  <tr key={k} className={i !== arr.length - 1 ? "border-b border-border" : ""}>
                    <td className="bg-warm-bg font-heading p-4 w-1/2 md:w-1/3">{k}</td>
                    <td className="p-4 text-muted-foreground">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <nav className="mt-10 border-l-2 border-primary pl-5">
            <p className="font-heading text-sm uppercase tracking-wider text-muted-foreground mb-3">En esta página</p>
            <ul className="space-y-1.5 text-sm">
              {[
                ["#oportunidad", "La oportunidad real de Madrid"],
                ["#keywords", "Búsquedas reales en Madrid"],
                ["#barrios", "Barrios y búsquedas típicas"],
                ["#mapa", "Mapa de Madrid"],
                ["#competencia", "El estado de la competencia"],
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
            La oportunidad real de aparecer primero en Google en Madrid
          </h2>
          <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground">
            <p>
              Madrid concentra 3,4 millones de habitantes en la ciudad y cerca de 6,7 millones en el área metropolitana, lo que la convierte en el mercado con más volumen de búsquedas locales por minuto de toda España. Solo la consulta <em>"agencia seo madrid"</em> recibe 3.600 búsquedas mensuales según Semrush; <em>"posicionamiento web madrid"</em> y <em>"posicionamiento seo madrid"</em> suman 1.300 cada una.
            </p>
            <p>
              La parte interesante es que ese volumen no se concentra en una sola consulta. Se reparte entre cientos de variantes locales — por barrio, por servicio, por urgencia — que individualmente reciben entre 50 y 500 búsquedas mensuales y que tienen una competencia digital mucho menor. Es ahí donde un negocio bien posicionado se diferencia.
            </p>
            <p>
              Cada barrio funciona casi como una ciudad propia. Las búsquedas se hacen por zona, no por ciudad: nadie escribe "fisioterapeuta en Madrid", escribe "fisio en Chamberí" o "fisioterapeuta cerca de mí" desde una ubicación concreta. Aparecer en el Local Pack de tu barrio te pone delante de personas que ya están listas para llamar.
            </p>
            <p>
              Aunque la competencia digital en Madrid es alta, el volumen también lo es. Eso significa que un negocio bien posicionado en su barrio puede generar más contactos en un mes que muchos negocios de capitales pequeñas en un año.
            </p>
          </div>
        </div>
      </section>

      {/* KEYWORDS REALES */}
      <section id="keywords" className="py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            Búsquedas reales en Madrid (datos de Semrush)
          </h2>
          <p className="text-base text-muted-foreground mb-8 font-body font-light">
            Estas son las consultas que la gente escribe en Google cuando busca a alguien que les ayude con su SEO o cuando un negocio quiere aparecer en Madrid. Los datos vienen de Semrush para la base de España.
          </p>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-warm-bg">
                  <th className="font-heading text-left p-4">Búsqueda</th>
                  <th className="font-heading text-left p-4 w-32">Volumen / mes</th>
                  <th className="font-heading text-left p-4 w-32">Dificultad</th>
                </tr>
              </thead>
              <tbody>
                {KEYWORDS_REALES.map((k, i) => (
                  <tr key={k.kw} className={i !== KEYWORDS_REALES.length - 1 ? "border-b border-border" : ""}>
                    <td className="p-4">
                      <span className="italic">"{k.kw}"</span>
                      {k.nota && <span className="block text-xs text-muted-foreground mt-1">{k.nota}</span>}
                    </td>
                    <td className="p-4 font-heading">{k.vol}</td>
                    <td className="p-4 text-muted-foreground">{k.kd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4 font-body">
            Fuente: Semrush (database ES). La dificultad se mide de 0 a 100; cuanto más baja, más fácil entrar al top 10.
          </p>
        </div>
      </section>

      {/* BARRIOS */}
      <section id="barrios" className="bg-warm-bg py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            Barrios y municipios principales de Madrid
          </h2>
          <p className="text-base text-muted-foreground mb-8 font-body font-light">
            Las búsquedas locales en Madrid no se hacen por ciudad — se hacen por barrio o por municipio del área metropolitana. Estos son ejemplos reales del tipo de consulta que tus clientes están escribiendo en Google.
          </p>
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-warm-bg">
                  <th className="font-heading text-left p-4 w-1/2">Barrio o zona</th>
                  <th className="font-heading text-left p-4">Ejemplo de búsqueda</th>
                </tr>
              </thead>
              <tbody>
                {BARRIOS.map((b, i) => (
                  <tr key={b.barrio} className={i !== BARRIOS.length - 1 ? "border-b border-border" : ""}>
                    <td className="p-4 font-heading">{b.barrio}</td>
                    <td className="p-4 text-muted-foreground italic">"{b.busqueda}"</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 font-body">
            Las búsquedas por municipio del área metropolitana (Móstoles, Fuenlabrada, Getafe, Alcalá de Henares) suelen tener menos competencia que las equivalentes de Madrid capital, lo que las convierte en una vía rápida de entrada al Local Pack.
          </p>
        </div>
      </section>

      {/* MAPA */}
      <section id="mapa" className="py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            Madrid en Google Maps
          </h2>
          <p className="text-base text-muted-foreground mb-6 font-body font-light">
            Cuando alguien busca un servicio local en Madrid, Google muestra tres negocios en el mapa. Los que están ahí reciben la mayoría de los clics, llamadas y rutas pedidas.
          </p>
          <iframe
            title="Mapa de Madrid"
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

      {/* COMPETENCIA */}
      <section id="competencia" className="bg-warm-bg py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            El estado real de la competencia en Madrid
          </h2>
          <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground">
            <p>
              Cuando se busca <em>"seo local madrid"</em> en Google, los diez primeros resultados están ocupados por una mezcla de agencias generalistas, consultores independientes y marketplaces tipo directorio. Hay tres dominios que concentran la mayor parte de la visibilidad para las consultas comerciales relacionadas con SEO en Madrid.
            </p>
            <p>
              Lo curioso es que ninguno de ellos es enorme: el líder estimado por Semrush para esa familia de búsquedas mueve unas 960 visitas orgánicas al mes y trabaja con 904 keywords totales en España. Otro de los tres principales aparece bien posicionado pero solo por un puñado de keywords, casi todas alrededor de "consultor SEO local". El tercero rankea con apenas 44 keywords y un tráfico muy bajo.
            </p>
            <p>
              ¿Qué significa esto en la práctica? Que la primera página de Google para "seo local madrid" no está dominada por marcas inexpugnables — está dominada por sitios que han trabajado bien una keyword pero que dejan huecos enormes en variantes long-tail (por barrio, por sector, por área metropolitana). Lo que les falta a casi todos: páginas específicas por barrio, contenido mensual sostenido, transparencia de precios y casos reales con datos. Es exactamente la oportunidad de un negocio local bien trabajado.
            </p>
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section id="resenas" className="py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            Reseñas en Google: el factor decisivo en Madrid
          </h2>
          <p className="text-base text-muted-foreground mb-8 font-body font-light">
            En un mercado como Madrid, donde un usuario tiene a 30 negocios en 2 km, las reseñas son el factor más decisivo a la hora de elegir. Estos son los datos que importan.
          </p>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm md:text-base">
              <tbody>
                {[
                  ["Reseñas mínimas para entrar al Local Pack en Madrid", "20-40 reseñas reales"],
                  ["Reseñas habituales del top 3 en sectores competitivos del centro", "100-300 reseñas"],
                  ["Puntuación media recomendada", "4,3 estrellas o más"],
                  ["Frecuencia de nuevas reseñas", "2-4 al mes (más en sectores de alta rotación)"],
                  ["Respuesta a reseñas", "100% de las reseñas — positivas y negativas"],
                  ["Impacto en posicionamiento local", "Factor top 3 según los principales estudios"],
                ].map(([k, v], i, arr) => (
                  <tr key={k} className={i !== arr.length - 1 ? "border-b border-border" : ""}>
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
            Errores más comunes en SEO local en Madrid
          </h2>
          <p className="text-base text-muted-foreground mb-6 font-body font-light">
            Estos son los errores que se repiten en los foros, blogs y soporte de Google Business y que explican por qué muchos negocios de Madrid no aparecen en el Local Pack:
          </p>
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
                  ["Categoría principal mal elegida o demasiado genérica", "Google no sabe en qué búsquedas mostrarte"],
                  ["Nombre del negocio diferente entre la ficha y la web", "Pérdida de coherencia NAP, baja confianza algorítmica"],
                  ["Una sola página para 'toda Madrid'", "Imposible competir por búsquedas de barrio o municipio"],
                  ["Ficha sin publicaciones ni fotos nuevas", "Google interpreta inactividad y baja posiciones"],
                  ["No pedir reseñas de forma sistemática", "Pierdes el factor más decisivo del Local Pack"],
                  ["Pagar solo Google Ads sin trabajar SEO", "Cuando paras los anuncios, desapareces de Madrid"],
                  ["No tener web o web sin SEO local", "El Local Pack se reduce y la conversión baja"],
                ].map(([e, c], i, arr) => (
                  <tr key={e} className={i !== arr.length - 1 ? "border-b border-border" : ""}>
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
            Cómo te ayudamos desde slocal.es en Madrid
          </h2>
          <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground mb-8">
            <p>
              Optimizamos tu ficha de Google Business Profile para las búsquedas reales de tu barrio en Madrid, creamos o mejoramos tu web con páginas específicas por servicio y por zona, generamos contenido mensual orientado a las consultas que ya hemos identificado en Semrush para tu sector y te enviamos un informe claro cada mes con posiciones, llamadas y contactos generados.
            </p>
            <p>
              Sin agencias intermediarias, sin permanencia y con trato directo con la persona que trabaja tu posicionamiento. Si quieres profundizar, puedes leer la guía completa de{" "}
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
          <Link
            to="/contacto"
            className="inline-block bg-primary text-primary-foreground font-heading text-sm rounded-lg px-8 py-3 hover:bg-primary/90 transition-colors"
          >
            Quiero analizar mi negocio en Madrid →
          </Link>
        </div>
      </section>

      {/* RESUMEN */}
      <section id="resumen" className="bg-warm-bg py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            Resumen: SEO local en Madrid
          </h2>
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <ul className="space-y-3 text-sm md:text-base">
              {[
                "Madrid tiene 3,4 millones de habitantes y 6,7 millones en el área metropolitana — el mercado local más grande de España.",
                "La búsqueda 'agencia seo madrid' mueve 3.600 consultas mensuales con dificultad 41/100; 'seo local madrid' mueve 480 con dificultad 8/100.",
                "Las búsquedas se reparten en cientos de variantes long-tail por barrio y por municipio del área metropolitana.",
                "Los primeros resultados visibles llegan en 3-6 meses según barrio y sector.",
                "Las reseñas y la ficha optimizada son los factores más decisivos para entrar al Local Pack.",
                "La competencia en la primera página deja huecos claros en barrios y sectores: el sitio que cubre esos huecos gana las llamadas.",
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
        <FAQSection title="Preguntas frecuentes sobre SEO local en Madrid" items={FAQS} />
      </div>

      {/* FINAL CTA */}
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-6">
            ¿Quieres que tu negocio aparezca primero en Google en Madrid?
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

export default SeoLocalMadrid;
