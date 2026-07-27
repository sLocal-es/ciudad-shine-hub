import SectorMasterTemplate, { SectorTemplateContent } from "@/components/sector/SectorMasterTemplate";

const GimnasiosPage = () => {
  const faqs = [
    { q: "¿Cuándo empiezo a recibir más inscripciones desde Google?", a: "Los primeros resultados visibles aparecen entre el mes 2 y el mes 4: más visitas al perfil de Google, más llamadas y mejora de posiciones en Maps. Las inscripciones orgánicas crecen de forma notable a partir del tercer mes, con picos en enero y septiembre." },
    { q: "¿Puede un gimnasio pequeño competir con Basic-Fit o McFit en Google?", a: "Sí, en búsquedas locales. Las grandes cadenas dominan búsquedas genéricas nacionales, pero en búsquedas de barrio y ciudad el gimnasio local bien posicionado aparece antes." },
    { q: "¿Funcionan las reseñas de Google para atraer socios a un gimnasio?", a: "Son el factor más decisivo. Antes de inscribirse, el 90% de las personas lee las reseñas del gimnasio. Gestionamos la obtención y respuesta estratégica de reseñas cada mes." },
    { q: "¿Necesito web para hacer SEO local si ya tengo Instagram?", a: "Instagram mantiene a tus socios actuales pero no posiciona en Google. Una web con páginas por actividad y zona es lo que permite aparecer en resultados orgánicos y en Maps." },
    { q: "¿Funciona para estudios boutique pequeños o solo para grandes gimnasios?", a: "El SEO local favorece precisamente a los estudios pequeños y especializados. La especialización es tu ventaja competitiva real." },
    { q: "¿Basta con tener la ficha de Google creada?", a: "No. Google interpreta la inactividad como abandono. Sin fotos recientes, publicaciones y reseñas gestionadas, tu gimnasio baja posiciones cada semana." },
    { q: "¿Es suficiente una sola página para todas las actividades?", a: "No. 'CrossFit', 'pilates', 'sala de musculación' son búsquedas distintas con socios distintos. Cada actividad necesita su propia página." },
  ];

  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
    { "@type": "ListItem", position: 2, name: "SEO para Gimnasios", item: "https://slocal.es/seo-para-gimnasios" },
  ]};
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "SEO para Gimnasios", provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" }, areaServed: "España" };
  const localBusinessSchema = { "@context": "https://schema.org", "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es", description: "SEO local para gimnasios en España", areaServed: "España", priceRange: "€€", openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "09:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "09:00", closes: "14:00" },
  ]};

  const content: SectorTemplateContent = {
    seoTitle: "SEO para Gimnasios | Agencia SEO Local | slocal.es",
    seoDescription: "Agencia SEO Local para gimnasios: Google Business Profile, Google Maps y posicionamiento local para conseguir más socios desde Google.",
    canonical: "/seo-para-gimnasios",
    sectorLabel: "Gimnasios", sectorSlug: "seo-para-gimnasios", sectorLower: "gimnasios", clientWord: "socios",
    heroEyebrow: "Agencia SEO Local · Gimnasios",
    heroH1: <h1>SEO para <span className="text-primary">Gimnasios</span></h1>,
    heroSubtitle: <>Agencia SEO Local especializada en gimnasios y centros deportivos. Optimizamos tu ficha de Google Business Profile y tu web para que aparezcas primero cuando alguien busca gimnasio cerca de mí en tu ciudad.</>,
    heroTrust: ["Google Partner", "Ficha de Google gestionada cada mes", "Auditoría inicial sin coste"],
    manifestoEyebrow: "— El punto de partida",
    manifestoH2: <>¿Cómo conseguir <span className="text-primary">más socios</span> para tu gimnasio desde Google?</>,
    manifestoBody: <>En Slocal conseguimos que más socios se inscriban optimizando tu ficha de Google Business Profile y posicionando tu web para búsquedas locales de alta intención. Aparecer en el top 3 de Google Maps multiplica las inscripciones: esos tres negocios se llevan la mayoría de los contactos.</>,
    gbpH3: <>Tu ficha de <span className="text-primary">Google Business Profile</span> genera inscripciones</>,
    gbpBody: <>Google Business Profile es donde el socio potencial decide llamarte o venir a probar. Optimizamos tu ficha para aparecer antes que tu competencia y convertir búsquedas locales en visitas reales.</>,
    gbpFeatures: ["Categorías optimizadas", "Servicios y actividades estructurados", "Publicaciones semanales", "Gestión de reseñas", "Geolocalización por barrio", "Seguimiento de llamadas"],
    webH3: <>Una web que <span className="text-primary">convierte</span> visitas en socios</>,
    webBody: <>Mientras Google Business Profile capta la llamada, tu web se encarga de convertir visitas en inscripciones y pruebas gratuitas.</>,
    webFeatures: ["SEO Local", "Landing por actividad", "Landing por ciudad", "Formularios optimizados", "WhatsApp", "Google Analytics"],
    auditoriaFormType: "auditoria_gimnasios",
    howH2: <>¿Cómo conseguimos que aparezcas <span className="text-primary">por delante</span> de otros gimnasios en Google?</>,
    howIntro: <>En Slocal apareces primero en Google Maps optimizando tu ficha, categorías, servicios, reseñas y contenido local. Google prioriza fichas activas, con reseñas recientes y coherencia entre ficha, web y citaciones locales de tu ciudad.</>,
    howSteps: [
      { h: "Auditoría", d: "Analizamos tu Google Business Profile, tu web y a las cadenas y estudios competidores de tu zona." },
      { h: "Estrategia", d: "Definimos las búsquedas con mayor intención (gimnasio en tu barrio, clases concretas) y diseñamos el plan." },
      { h: "Optimización", d: "Optimizamos ficha y web para que trabajen juntas y mejoren tu posicionamiento local." },
      { h: "Autoridad Local", d: "Potenciamos reseñas, fotos de instalaciones y señales de confianza para superar a la competencia." },
      { h: "Seguimiento", d: "Medimos llamadas, visitas al perfil y posiciones para seguir optimizando cada mes." },
    ],
    caseH2: <>¿Cómo consiguió Slocal que un <span className="text-primary">gimnasio de barrio</span> pasara de invisible a llenar sus clases?</>,
    caseIntro: <>Slocal transformó la presencia digital de este gimnasio optimizando su Google Business Profile, desarrollando una web SEO Local y creando páginas específicas por actividad. Empezó a aparecer entre los primeros resultados de Google Maps, superó las inscripciones mensuales objetivo y consiguió un retorno muy superior a la inversión.</>,
    caseStages: [
      { title: "ANTES", text: "Ficha desatendida, sin fotos recientes, dependiendo del boca a boca y de Instagram.", label: "Situación inicial: ficha desatendida y sin visibilidad en Google" },
      { title: "ESTRATEGIA SLOCAL", text: "Optimizamos Google Business Profile, creamos web SEO Local y páginas por cada actividad y barrio.", label: "Estrategia Slocal: ficha, web y páginas por actividad" },
      { title: "RESULTADO", text: "Top 3 en Google Maps para búsquedas de gimnasio en su barrio y aumento constante de inscripciones.", label: "Resultados: top 3 en Maps y agenda de pruebas gratuitas llena" },
    ],
    caseKpis: [{ k: "+35", l: "Contactos al mes" }, { k: "TOP 3", l: "Google Maps" }, { k: "x6", l: "Retorno de la inversión" }],
    monthlyH2: <>¿Por qué el SEO Local necesita trabajo <span className="text-primary">mes a mes</span>?</>,
    monthlyBody: <>Porque Google no es una fotografía, es una competición continua. Reforzamos cada mes tu ficha, reseñas y contenido para que ningún competidor te supere.</>,
    monthlyReasons: [
      { h: "Tus competidores siguen trabajando", d: "Otros gimnasios publican, piden reseñas y mueven su ficha. Si tú te detienes, ellos avanzan." },
      { h: "Google cambia constantemente", d: "El algoritmo se actualiza cada mes. Lo que hoy te posiciona mañana puede necesitar ajustes." },
      { h: "Tu ficha necesita actividad", d: "Fotos nuevas de clases, publicaciones y respuestas a reseñas. Sin actividad, Google te baja." },
      { h: "Aparecen nuevas búsquedas", d: "Cada mes surgen consultas nuevas por zona o actividad. Las capturamos con contenido específico." },
      { h: "Seguimos reforzando tu presencia", d: "Cuanto más maduro es tu SEO local, más difícil es que otro gimnasio te supere." },
    ],
    faqs,
    citiesH2: <>¿En qué <span className="text-primary">ciudades</span> trabaja Slocal con gimnasios?</>,
    citiesBody: <>Slocal trabaja con gimnasios y estudios boutique en toda España, con clientes activos en Madrid, Barcelona, Valencia, Sevilla, Málaga, Zaragoza, Bilbao y Murcia.</>,
    otherSectorsH2: <>¿Slocal solo trabaja con <span className="text-primary">gimnasios</span>?</>,
    otherSectorsBody: <>No. Slocal trabaja también con fontaneros, fisioterapeutas, abogados, dentistas, psicólogos y empresas de reformas. Aplicamos la misma metodología de SEO Local a cada sector.</>,
    otherSectors: [
      { label: "SEO para fontaneros", slug: "seo-para-fontaneros" },
      { label: "SEO para fisioterapeutas", slug: "seo-para-fisioterapeutas" },
      { label: "SEO para abogados", slug: "seo-para-abogados" },
      { label: "SEO para dentistas", slug: "seo-para-dentistas" },
      { label: "SEO para psicólogos", slug: "seo-para-psicologos" },
      { label: "SEO para empresas de reformas", slug: "seo-para-reformas" },
    ],
    finalCtaTitle: "¿Quieres que tu gimnasio se llene gracias a Google?",
    jsonLd: [breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema],
  };

  return <SectorMasterTemplate content={content} />;
};

export default GimnasiosPage;
