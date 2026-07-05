import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SectorHeroDark from "@/components/sector/SectorHeroDark";

const GimnasiosPage = () => {
  const faqs = [
    {
      q: "¿Cuándo empiezo a recibir más inscripciones desde Google?",
      a: "Los primeros resultados visibles aparecen entre el mes 2 y el mes 4: más visitas al perfil de Google, más llamadas y mejora de posiciones en Maps. Las inscripciones orgánicas crecen de forma notable a partir del tercer mes, con picos en enero y septiembre que son los meses de mayor búsqueda de gimnasios.",
    },
    {
      q: "¿Puede un gimnasio pequeño competir con Basic-Fit o McFit en Google?",
      a: "Sí, en búsquedas locales. Las grandes cadenas dominan las búsquedas genéricas nacionales, pero en búsquedas de barrio y ciudad el gimnasio local bien posicionado aparece antes. \"Gimnasio en Chamberí\" o \"clases de pilates en Gràcia\" son búsquedas donde la proximidad y la relevancia local son más importantes que el tamaño de la cadena.",
    },
    {
      q: "¿Funcionan las reseñas de Google para atraer socios a un gimnasio?",
      a: "Son el factor más decisivo. Antes de inscribirse, el 90% de las personas lee las reseñas del gimnasio. Un centro con 80 reseñas recientes y bien respondidas convierte mucho más que uno con 15 reseñas antiguas. Gestionamos la obtención y respuesta estratégica de reseñas cada mes.",
    },
    {
      q: "¿Necesito web para hacer SEO local si ya tengo Instagram?",
      a: "Instagram mantiene a tus socios actuales pero no posiciona en Google. Una web con páginas específicas por actividad y zona es lo que permite aparecer en los resultados orgánicos además de en Google Maps. El servicio incluye la web desde el inicio.",
    },
    {
      q: "¿Funciona para estudios boutique pequeños o solo para grandes gimnasios?",
      a: "El SEO local favorece precisamente a los estudios pequeños y especializados. Un estudio de pilates bien posicionado en su barrio aparece antes que un gran gimnasio sin presencia local trabajada. La especialización es tu ventaja competitiva real.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "SEO para Gimnasios", item: "https://slocal.es/seo-para-gimnasios" },
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
    name: "SEO para Gimnasios",
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    areaServed: "España",
    description: "Servicio de SEO local para gimnasios y centros deportivos en España",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "slocal.es",
    url: "https://slocal.es",
    description: "SEO local para gimnasios en España",
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

  const types = [
    "Gimnasios con sala de musculación",
    "Box de CrossFit",
    "Estudios de pilates y yoga",
    "Centros de entrenamiento funcional",
    "Gimnasios con piscina",
    "Centros de artes marciales",
    "Estudios boutique de fitness",
    "Gimnasios 24 horas",
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
    { label: "SEO para fontaneros", slug: "seo-para-fontaneros" },
    { label: "SEO para fisioterapeutas", slug: "seo-para-fisioterapeutas" },
    { label: "SEO para abogados", slug: "seo-para-abogados" },
    { label: "SEO para inmobiliarias", slug: "seo-para-inmobiliarias" },
    { label: "SEO para dentistas", slug: "seo-para-dentistas" },
    { label: "SEO para psicólogos", slug: "seo-para-psicologos" },
  ];

  const steps = [
    {
      n: "01",
      h: "Optimización de Google Business Profile para gimnasios",
      p: 'Configuramos tu ficha con las categorías correctas para centros deportivos, descripción con keywords de alta intención ("gimnasio cerca de mí", "clases de fitness", "CrossFit en tu ciudad"), fotos profesionales de instalaciones y clases en acción, horarios y zona de servicio. Las reseñas son el factor que más influye en que alguien elija tu gimnasio — gestionamos su obtención y respuesta estratégica cada mes.',
    },
    {
      n: "02",
      h: "Páginas SEO por tipo de actividad y ciudad",
      p: 'Creamos páginas específicas para cada servicio y zona: "gimnasio con clases de pilates en Valencia", "box de CrossFit en Barcelona", "sala de musculación en Sevilla". Cada búsqueda con intención de inscribirse tiene su propia página. El potencial socio que llega ya sabe exactamente qué busca y tu gimnasio es la opción más relevante.',
    },
    {
      n: "03",
      h: "Seguimiento mensual de nuevos socios desde Google",
      p: "Informe mensual con posiciones en Google Maps para las búsquedas más importantes de tu gimnasio, visitas al perfil, llamadas recibidas y clics a tu web. Sabes exactamente cuántas inscripciones está generando Google cada mes. Sin tecnicismos, con datos reales.",
    },
  ];

  return (
    <>
      <SEOHead
        title="SEO para Gimnasios | Más Socios desde Google | slocal.es"
        description="Haz que tu gimnasio aparezca cuando alguien busca gimnasio cerca de mí. Más socios sin depender de las grandes cadenas. Desde 147€/mes + IVA."
        canonical="/seo-para-gimnasios"
        jsonLd={[breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema]}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <BreadcrumbNav items={[
              { label: "Inicio", href: "/" },
              { label: "SEO para Gimnasios" },
            ]} />
            <span className="inline-block border border-primary text-primary text-xs font-heading rounded-full px-4 py-1.5 mb-6">
              SEO para Gimnasios
            </span>
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              SEO para Gimnasios: Más Socios desde Google
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              El 75% de las inscripciones a gimnasios empiezan con una búsqueda en Google. Cuando alguien busca "gimnasio cerca de mí" o "gimnasio en tu barrio", Google muestra tres centros en el mapa. Los que están ahí consiguen el socio. Los que no están pierden esa inscripción sin saberlo. Lo gestionamos para que tu gimnasio sea uno de los tres — desde 147€/mes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contacto" className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors">
                Empezar →
              </Link>
              <Link to="/como-funciona" className="border border-dark-fg/20 text-dark-fg font-heading text-sm rounded-lg px-6 py-3 hover:border-primary hover:text-primary transition-colors">
                Ver cómo funciona
              </Link>
            </div>
          </div>

          <div className="border-2 border-dashed border-border bg-warm-bg rounded-xl aspect-[4/3] flex items-center justify-center p-6 text-center">
            <p className="text-sm text-muted-foreground font-body">
              [IMAGEN: Pantalla de móvil mostrando búsqueda "gimnasio cerca de mí" en Google Maps con 3 centros deportivos destacados en el Local Pack]
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            SEO local para gimnasios: por qué pierdes socios sin saberlo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground">
              <p>
                Las grandes cadenas de gimnasios — Basic-Fit, McFit, Altafit — invierten miles de euros al mes en SEO y publicidad. Cuando alguien busca "gimnasio en Madrid" o "gimnasio barato cerca de mí", ellas aparecen primero. El gimnasio independiente o boutique queda invisible para ese potencial socio, aunque esté a 200 metros de su casa.
              </p>
              <p>
                El 60% de las búsquedas fitness son de proximidad — "cerca de mí", "en mi barrio", "en mi calle". Ahí es donde el gimnasio local puede ganarle a cualquier cadena. Google favorece la relevancia y la proximidad, no el tamaño ni el presupuesto. Un gimnasio bien posicionado en su barrio aparece antes que una gran cadena sin ficha local optimizada.
              </p>
            </div>
            <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground">
              <p>
                El error más común: depender del boca a boca y las redes sociales. Las redes sociales mantienen a los socios actuales, pero no captan a quien está buscando gimnasio ahora mismo en Google y no te conoce todavía. Esa persona está eligiendo entre los tres que aparecen en el mapa — y si tú no estás, se apunta al de al lado.
              </p>
              <p>
                El segundo error: ficha de Google desactualizada. Sin fotos recientes de las instalaciones, sin horarios correctos, sin reseñas respondidas, Google interpreta que el gimnasio no es relevante y lo baja en el ranking. Cada semana que pasa sin gestionar la ficha es una semana perdiendo posiciones frente a la competencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            Cómo posicionamos tu gimnasio en Google Maps
          </h2>
          <div>
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`grid grid-cols-[auto_1fr] gap-6 md:gap-10 py-8 ${i < steps.length - 1 ? "border-b border-border" : ""}`}
              >
                <span className="font-heading text-4xl md:text-5xl text-primary leading-none">{s.n}</span>
                <div>
                  <h3 className="font-heading text-lg md:text-xl mb-3">{s.h}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-body font-light">
                    {s.p}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            SEO para gimnasios independientes: tu ventaja frente a las grandes cadenas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-heading text-lg md:text-xl mb-4">Las grandes cadenas</h3>
              <p className="text-base leading-relaxed font-body font-light text-foreground">
                Tienen presupuesto enorme para SEO nacional pero gestionan cientos de centros a la vez. Su ficha local suele estar desatendida, las reseñas sin responder y el contenido local inexistente. Están en todas partes pero no están en ningún sitio de forma relevante.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg md:text-xl mb-4 text-primary">Tu gimnasio con slocal.es</h3>
              <p className="text-base leading-relaxed font-body font-light text-foreground">
                Optimizamos tu presencia específicamente para tu barrio y tu ciudad. Cuando alguien busca "gimnasio en Chamberí" o "clases de pilates en Gràcia", tu centro aparece antes que cualquier cadena. La proximidad y la relevancia local son tu ventaja — y nosotros las gestionamos para ti.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* MID CTA */}
      <section className="py-14">
        <div className="container max-w-3xl text-center">
          <p className="font-heading text-xl md:text-2xl mb-6 leading-snug">
            Tu gimnasio ya tiene lo que buscan tus futuros socios. Solo necesitan encontrarte en Google.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-primary text-primary-foreground font-heading text-sm rounded-lg px-8 py-3.5 hover:bg-primary/90 transition-colors"
          >
            Hablemos →
          </Link>
        </div>
      </section>

      {/* TYPES */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            Tipos de gimnasios y actividades que posicionamos en Google
          </h2>
          <p className="text-base text-muted-foreground font-body font-light mb-10 max-w-2xl">
            Cada tipo de centro deportivo tiene sus propias búsquedas. Creamos páginas específicas para cada actividad y zona.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {types.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm font-body">
                  <span className="text-primary mt-0.5">→</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="border-2 border-dashed border-border bg-card rounded-xl aspect-[4/3] flex items-center justify-center p-6 text-center">
              <p className="text-sm text-muted-foreground font-body">
                [IMAGEN: Interior de gimnasio moderno — sala de musculación con buena iluminación]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Preguntas frecuentes sobre SEO para gimnasios" items={faqs} />

      {/* CIUDADES */}
      <section className="py-12">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            SEO local para gimnasios en toda España
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 font-body font-light">
            Posicionamos gimnasios y centros deportivos en toda España.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {cities.map((city) => (
              <Link
                key={city.slug}
                to={`/seo-local-${city.slug}`}
                className="bg-card border border-border rounded-full px-4 py-2 text-sm font-heading text-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-[2px]"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OTROS SECTORES */}
      <section className="bg-warm-bg py-12">
        <div className="container max-w-4xl text-center">
          <h2 className="font-heading text-xl md:text-2xl mb-8">SEO local para otros negocios</h2>
          <div className="flex flex-wrap justify-center gap-2.5">
            {otherSectors.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="bg-card border border-border rounded-full px-4 py-2 text-sm font-heading text-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-[2px]"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Tu gimnasio no aparece cuando alguien busca centro deportivo en tu ciudad?"
        buttonText="Hablemos →"
      />
    </>
  );
};

export default GimnasiosPage;
