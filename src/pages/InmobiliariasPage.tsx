import SectorMasterTemplate, { SectorTemplateContent } from "@/components/sector/SectorMasterTemplate";

const InmobiliariasPage = () => {
  const faqs = [
    { q: "¿Cuándo empieza mi inmobiliaria a recibir más contactos desde Google?", a: "Los primeros resultados visibles aparecen entre el mes 2 y el mes 4: más visitas al perfil de Google, más llamadas y más formularios desde la web. A partir del mes 6 el flujo se consolida." },
    { q: "¿Funciona el SEO local para inmobiliarias pequeñas?", a: "Sí. El SEO local favorece a las inmobiliarias de barrio frente a los grandes portales. Trabajando bien tu zona, apareces antes que franquicias generalistas sin presencia local cuidada." },
    { q: "¿Necesito tener web para hacer SEO local como inmobiliaria?", a: "Una web optimizada por zona y tipo de operación es lo que permite aparecer en los resultados orgánicos además de en Google Maps. El servicio incluye la web desde el inicio." },
    { q: "¿Puedo posicionarme para varias zonas o tipos de inmueble?", a: "Sí. Creamos páginas específicas para cada zona y tipo de operación — pisos en venta, alquiler, locales comerciales, obra nueva — optimizadas para las búsquedas reales de cada barrio." },
    { q: "¿Qué diferencia hay entre SEO local y portales como Idealista?", a: "Los portales te cobran por anuncio y compites con cientos de inmobiliarias. El SEO local construye tu propia presencia en Google: contactos directos, sin intermediarios y sin coste por lead." },
    { q: "¿Basta con tener la ficha de Google creada?", a: "No. Sin fotos recientes de inmuebles, sin reseñas respondidas y sin publicaciones, Google interpreta que la inmobiliaria no es relevante y la baja del ranking." },
    { q: "¿Es suficiente una sola página para todas las zonas?", a: "No. 'Pisos en venta en Chamberí' y 'alquiler en Salamanca' son búsquedas distintas con clientes distintos. Cada zona necesita su propia página." },
  ];

  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
    { "@type": "ListItem", position: 2, name: "SEO para Inmobiliarias", item: "https://slocal.es/seo-para-inmobiliarias" },
  ]};
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "SEO para Inmobiliarias", provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" }, areaServed: "España" };
  const localBusinessSchema = { "@context": "https://schema.org", "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es", description: "SEO local para inmobiliarias en España", areaServed: "España", priceRange: "€€", openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "09:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "09:00", closes: "14:00" },
  ]};

  const content: SectorTemplateContent = {
    seoTitle: "SEO para Inmobiliarias | Agencia SEO Local | slocal.es",
    seoDescription: "Agencia SEO Local para inmobiliarias: Google Business Profile, Google Maps y posicionamiento local para conseguir más contactos y visitas desde Google.",
    canonical: "/seo-para-inmobiliarias",
    sectorLabel: "Inmobiliarias", sectorSlug: "seo-para-inmobiliarias", sectorLower: "inmobiliarias", clientWord: "clientes",
    heroEyebrow: "Agencia SEO Local · Inmobiliarias",
    heroH1: <h1>SEO para <span className="text-primary">Inmobiliarias</span></h1>,
    heroSubtitle: <>Agencia SEO Local especializada en inmobiliarias. Optimizamos tu ficha de Google Business Profile y tu web para que aparezcas primero cuando alguien busca piso o inmobiliaria en tu zona.</>,
    heroTrust: ["Google Partner", "Ficha de Google gestionada cada mes", "Auditoría inicial sin coste"],
    manifestoEyebrow: "— El punto de partida",
    manifestoH2: <>¿Cómo conseguir <span className="text-primary">más contactos</span> para tu inmobiliaria desde Google?</>,
    manifestoBody: <>En Slocal conseguimos que más clientes contacten con tu inmobiliaria optimizando tu ficha de Google Business Profile y posicionando tu web para búsquedas locales de alta intención. Aparecer en el top 3 de Google Maps multiplica los contactos: esas tres inmobiliarias se llevan la mayoría de las llamadas y formularios.</>,
    gbpH3: <>Tu ficha de <span className="text-primary">Google Business Profile</span> genera contactos</>,
    gbpBody: <>Google Business Profile es donde el cliente decide llamarte cuando busca comprar o alquilar. Optimizamos tu ficha para aparecer antes que otras inmobiliarias y convertir búsquedas en contactos reales.</>,
    gbpFeatures: ["Categorías inmobiliarias optimizadas", "Zonas de servicio por barrios", "Publicaciones de inmuebles", "Gestión de reseñas", "Geolocalización", "Seguimiento de llamadas"],
    webH3: <>Una web que <span className="text-primary">convierte</span> visitas en clientes</>,
    webBody: <>Mientras Google Business Profile genera la llamada, tu web convierte las visitas en contactos cualificados y visitas a inmuebles.</>,
    webFeatures: ["SEO Local", "Landing por zona", "Landing por tipo de operación", "Formularios optimizados", "WhatsApp", "Google Analytics"],
    auditoriaFormType: "auditoria_inmobiliarias",
    howH2: <>¿Cómo conseguimos que aparezcas <span className="text-primary">por delante</span> de otras inmobiliarias en Google?</>,
    howIntro: <>En Slocal apareces primero en Google Maps optimizando tu ficha, zonas, reseñas y contenido local. Google prioriza fichas activas, con reseñas recientes y coherencia entre ficha, web y citaciones locales.</>,
    howSteps: [
      { h: "Auditoría", d: "Analizamos tu Google Business Profile, tu web y a las inmobiliarias competidoras de tu zona." },
      { h: "Estrategia", d: "Definimos las búsquedas con mayor intención (zona + tipo de operación) y diseñamos el plan." },
      { h: "Optimización", d: "Optimizamos ficha y web para que trabajen juntas y mejoren tu posicionamiento local." },
      { h: "Autoridad Local", d: "Reforzamos reseñas, contenido por barrio y señales de confianza." },
      { h: "Seguimiento", d: "Medimos llamadas, formularios y posiciones cada mes." },
    ],
    caseH2: <>¿Cómo consiguió Slocal que una <span className="text-primary">inmobiliaria de barrio</span> triplicara sus contactos desde Google?</>,
    caseIntro: <>Slocal transformó la presencia digital de esta inmobiliaria optimizando su Google Business Profile, desarrollando una web SEO Local y creando páginas específicas para cada zona y tipo de operación.</>,
    caseStages: [
      { title: "ANTES", text: "Sin presencia en Google Maps, ficha poco optimizada y dependencia total de Idealista y Fotocasa.", label: "Situación inicial: sin visibilidad en búsquedas inmobiliarias locales" },
      { title: "ESTRATEGIA SLOCAL", text: "Optimizamos Google Business Profile, creamos web SEO Local y páginas específicas por zona y operación.", label: "Estrategia Slocal: ficha, web y páginas por barrio" },
      { title: "RESULTADO", text: "Top 3 en Google Maps, aumento constante de contactos directos y menos dependencia de portales.", label: "Resultados: top 3 en Maps y contactos directos sin intermediarios" },
    ],
    caseKpis: [{ k: "x3", l: "Contactos al mes" }, { k: "TOP 3", l: "Google Maps" }, { k: "x9", l: "Retorno de la inversión" }],
    monthlyH2: <>¿Por qué el SEO Local necesita trabajo <span className="text-primary">mes a mes</span>?</>,
    monthlyBody: <>Porque Google no es una fotografía, es una competición continua. Reforzamos cada mes tu ficha, reseñas y contenido para mantener las primeras posiciones.</>,
    monthlyReasons: [
      { h: "Otras inmobiliarias siguen trabajando", d: "La competencia inmobiliaria es alta. Si tú te detienes, otras avanzan y ganan posiciones." },
      { h: "Google cambia constantemente", d: "El algoritmo se actualiza cada mes y afecta directamente a las búsquedas locales." },
      { h: "Tu ficha necesita actividad", d: "Publicaciones de inmuebles, respuestas a reseñas y contenido nuevo mantienen tu ficha viva." },
      { h: "Aparecen nuevas búsquedas", d: "Cada mes surgen consultas nuevas por zona o tipo de inmueble. Las capturamos con contenido." },
      { h: "Seguimos reforzando tu autoridad", d: "Reseñas, contenido y señales locales que Google valora en el sector inmobiliario." },
    ],
    faqs,
    citiesH2: <>¿En qué <span className="text-primary">ciudades</span> trabaja Slocal con inmobiliarias?</>,
    citiesBody: <>Slocal trabaja con inmobiliarias en toda España, con clientes activos en Madrid, Barcelona, Valencia, Sevilla, Málaga, Zaragoza, Bilbao y Murcia.</>,
    otherSectorsH2: <>¿Slocal solo trabaja con <span className="text-primary">inmobiliarias</span>?</>,
    otherSectorsBody: <>No. Trabajamos también con fontaneros, abogados, dentistas, fisioterapeutas, psicólogos, gimnasios y empresas de reformas.</>,
    otherSectors: [
      { label: "SEO para fontaneros", slug: "seo-para-fontaneros" },
      { label: "SEO para abogados", slug: "seo-para-abogados" },
      { label: "SEO para dentistas", slug: "seo-para-dentistas" },
      { label: "SEO para fisioterapeutas", slug: "seo-para-fisioterapeutas" },
      { label: "SEO para psicólogos", slug: "seo-para-psicologos" },
      { label: "SEO para empresas de reformas", slug: "seo-para-reformas" },
    ],
    finalCtaTitle: "¿Quieres que tu inmobiliaria reciba más contactos gracias a Google?",
    jsonLd: [breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema],
  };

  return <SectorMasterTemplate content={content} />;
};

export default InmobiliariasPage;
