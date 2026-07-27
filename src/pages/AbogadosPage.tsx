import SectorMasterTemplate, { SectorTemplateContent } from "@/components/sector/SectorMasterTemplate";

const AbogadosPage = () => {
  const faqs = [
    { q: "¿Cuándo empieza a recibir más consultas mi despacho?", a: "Los primeros resultados visibles aparecen entre el mes 2 y el mes 4: más visitas al perfil de Google y más llamadas directas. A partir del mes 6 el flujo se consolida." },
    { q: "¿Funciona el SEO local para despachos pequeños o solo para grandes firmas?", a: "El SEO local favorece precisamente a los despachos pequeños y especializados. Un despacho de derecho laboral bien posicionado en su ciudad aparece antes que una gran firma generalista sin presencia local." },
    { q: "¿Necesito tener web para hacer SEO local como abogado?", a: "Una web optimizada por área de práctica y ciudad permite aparecer en resultados orgánicos además de en Google Maps. El servicio incluye la web desde el inicio." },
    { q: "¿Puedo posicionarme para varias especialidades jurídicas?", a: "Sí. Creamos páginas específicas para cada área — laboral, familia, herencias, penal, mercantil — optimizadas para las búsquedas reales de cada especialidad." },
    { q: "¿Qué diferencia hay entre SEO local y Google Ads para abogados?", a: "Google Ads da visibilidad inmediata pagando por cada clic (5-15€ en derecho). El SEO local construye presencia orgánica con retorno creciente y sin coste por clic." },
    { q: "¿Basta con tener la ficha de Google creada?", a: "No. Sin fotos recientes, sin reseñas respondidas y sin publicaciones, Google interpreta que el despacho no es relevante y lo baja del ranking." },
    { q: "¿Es suficiente una sola página para todas las especialidades?", a: "No. 'Abogado laboralista', 'divorcios' o 'herencias' son búsquedas distintas con clientes distintos. Cada especialidad necesita su propia página." },
  ];

  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
    { "@type": "ListItem", position: 2, name: "SEO para Abogados", item: "https://slocal.es/seo-para-abogados" },
  ]};
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "SEO para Abogados", provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" }, areaServed: "España" };
  const localBusinessSchema = { "@context": "https://schema.org", "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es", description: "SEO local para abogados en España", areaServed: "España", priceRange: "€€", openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "09:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "09:00", closes: "14:00" },
  ]};

  const content: SectorTemplateContent = {
    seoTitle: "SEO para Abogados | Agencia SEO Local | slocal.es",
    seoDescription: "Agencia SEO Local para despachos de abogados: Google Business Profile, Google Maps y posicionamiento local para conseguir más consultas y casos desde Google.",
    canonical: "/seo-para-abogados",
    sectorLabel: "Abogados", sectorSlug: "seo-para-abogados", sectorLower: "abogados", clientWord: "clientes",
    heroEyebrow: "Agencia SEO Local · Abogados",
    heroH1: <h1>SEO para <span className="text-primary">Abogados</span></h1>,
    heroSubtitle: <>Agencia SEO Local especializada en despachos de abogados. Optimizamos tu ficha de Google Business Profile y tu web para que aparezcas primero cuando alguien busca abogado en tu ciudad.</>,
    heroTrust: ["Google Partner", "Ficha de Google gestionada cada mes", "Auditoría inicial sin coste"],
    manifestoEyebrow: "— El punto de partida",
    manifestoH2: <>¿Cómo conseguir <span className="text-primary">más consultas</span> para tu despacho desde Google?</>,
    manifestoBody: <>En Slocal conseguimos que más clientes contacten con tu despacho optimizando tu ficha de Google Business Profile y posicionando tu web para búsquedas locales de alta intención. Aparecer en el top 3 de Google Maps multiplica las consultas: esos tres despachos se llevan la mayoría de los contactos.</>,
    gbpH3: <>Tu ficha de <span className="text-primary">Google Business Profile</span> genera consultas</>,
    gbpBody: <>Google Business Profile es donde el cliente decide llamarte cuando tiene un problema legal. Optimizamos tu ficha para aparecer antes que otros despachos y convertir búsquedas en consultas reales.</>,
    gbpFeatures: ["Categorías jurídicas optimizadas", "Áreas de práctica estructuradas", "Publicaciones", "Gestión de reseñas", "Geolocalización", "Seguimiento de llamadas"],
    webH3: <>Una web que <span className="text-primary">convierte</span> visitas en clientes</>,
    webBody: <>Mientras Google Business Profile genera la llamada, tu web convierte las visitas en consultas cualificadas y casos firmados.</>,
    webFeatures: ["SEO Local", "Landing por especialidad", "Landing por ciudad", "Formularios optimizados", "WhatsApp", "Google Analytics"],
    auditoriaFormType: "auditoria_abogados",
    howH2: <>¿Cómo conseguimos que aparezcas <span className="text-primary">por delante</span> de otros abogados en Google?</>,
    howIntro: <>En Slocal apareces primero en Google Maps optimizando tu ficha, especialidades, reseñas y contenido local. Google prioriza fichas activas, con reseñas recientes y coherencia entre ficha, web y citaciones locales.</>,
    howSteps: [
      { h: "Auditoría", d: "Analizamos tu Google Business Profile, tu web y a los despachos competidores de tu ciudad." },
      { h: "Estrategia", d: "Definimos las búsquedas con mayor intención (especialidad + ciudad) y diseñamos el plan." },
      { h: "Optimización", d: "Optimizamos ficha y web para que trabajen juntas y mejoren tu posicionamiento local." },
      { h: "Autoridad Local", d: "Reforzamos reseñas, contenido especializado y señales de confianza." },
      { h: "Seguimiento", d: "Medimos llamadas, formularios y posiciones cada mes." },
    ],
    caseH2: <>¿Cómo consiguió Slocal que un <span className="text-primary">despacho de abogados</span> triplicara sus consultas desde Google?</>,
    caseIntro: <>Slocal transformó la presencia digital de este despacho optimizando su Google Business Profile, desarrollando una web SEO Local y creando páginas específicas para cada área de práctica y ciudad.</>,
    caseStages: [
      { title: "ANTES", text: "Sin presencia en Google Maps, ficha poco optimizada y web genérica sin páginas por especialidad.", label: "Situación inicial: sin visibilidad en búsquedas jurídicas locales" },
      { title: "ESTRATEGIA SLOCAL", text: "Optimizamos Google Business Profile, creamos web SEO Local y páginas específicas por área de práctica.", label: "Estrategia Slocal: ficha, web y páginas por especialidad" },
      { title: "RESULTADO", text: "Top 3 en Google Maps, aumento constante de consultas y casos firmados desde Google.", label: "Resultados: top 3 en Maps y agenda de consultas llena" },
    ],
    caseKpis: [{ k: "x3", l: "Consultas al mes" }, { k: "TOP 3", l: "Google Maps" }, { k: "x9", l: "Retorno de la inversión" }],
    monthlyH2: <>¿Por qué el SEO Local necesita trabajo <span className="text-primary">mes a mes</span>?</>,
    monthlyBody: <>Porque Google no es una fotografía, es una competición continua. Reforzamos cada mes tu ficha, reseñas y contenido para mantener las primeras posiciones.</>,
    monthlyReasons: [
      { h: "Otros despachos siguen trabajando", d: "La competencia legal es alta. Si tú te detienes, otros avanzan y ganan posiciones." },
      { h: "Google cambia constantemente", d: "El algoritmo se actualiza cada mes; especialmente en sector legal (E-E-A-T)." },
      { h: "Tu ficha necesita actividad", d: "Publicaciones, respuestas a reseñas y contenido nuevo mantienen tu ficha viva." },
      { h: "Aparecen nuevas búsquedas", d: "Cada mes surgen consultas nuevas por especialidad o zona. Las capturamos con contenido." },
      { h: "Seguimos reforzando tu autoridad", d: "Reseñas, contenido y señales E-E-A-T que Google valora especialmente en el sector legal." },
    ],
    faqs,
    citiesH2: <>¿En qué <span className="text-primary">ciudades</span> trabaja Slocal con abogados?</>,
    citiesBody: <>Slocal trabaja con despachos de abogados en toda España, con clientes activos en Madrid, Barcelona, Valencia, Sevilla, Málaga, Zaragoza, Bilbao y Murcia.</>,
    otherSectorsH2: <>¿Slocal solo trabaja con <span className="text-primary">abogados</span>?</>,
    otherSectorsBody: <>No. Trabajamos también con fontaneros, fisioterapeutas, dentistas, psicólogos, gimnasios y empresas de reformas.</>,
    otherSectors: [
      { label: "SEO para fontaneros", slug: "seo-para-fontaneros" },
      { label: "SEO para fisioterapeutas", slug: "seo-para-fisioterapeutas" },
      { label: "SEO para dentistas", slug: "seo-para-dentistas" },
      { label: "SEO para psicólogos", slug: "seo-para-psicologos" },
      { label: "SEO para gimnasios", slug: "seo-para-gimnasios" },
      { label: "SEO para empresas de reformas", slug: "seo-para-reformas" },
    ],
    finalCtaTitle: "¿Quieres que tu despacho reciba más consultas gracias a Google?",
    jsonLd: [breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema],
  };

  return <SectorMasterTemplate content={content} />;
};

export default AbogadosPage;
