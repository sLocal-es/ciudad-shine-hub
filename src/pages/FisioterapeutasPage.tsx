import SectorMasterTemplate, { SectorTemplateContent } from "@/components/sector/SectorMasterTemplate";

const FisioterapeutasPage = () => {
  const faqs = [
    { q: "¿Cómo conseguir más pacientes como fisioterapeuta desde Google?", a: "La forma más estable es aparecer en Google Maps y en búsquedas locales cuando alguien busca 'fisio cerca de mí' en tu ciudad. Se trabajan tres piezas a la vez: ficha de Google Business Profile, web multipágina y posicionamiento local." },
    { q: "¿Cuánto tarda en posicionar una clínica de fisioterapia en Google?", a: "En ciudades pequeñas suelen verse los primeros movimientos en 3-5 semanas. En grandes ciudades, entrar al pack local de las búsquedas más competidas lleva entre 2 y 4 meses." },
    { q: "¿Qué es más importante: la ficha de Google o la web?", a: "Las dos, y funcionan mejor juntas. La ficha genera la mayoría de llamadas directas. La web multipágina refuerza el posicionamiento y capta búsquedas específicas." },
    { q: "¿Se puede aparecer en Google Maps sin hacer anuncios?", a: "Sí. Todo nuestro trabajo es SEO local orgánico. No usamos Google Ads: el trabajo hecho sigue dando frutos aunque dejes de invertir." },
    { q: "¿Funciona para fisios autónomos o solo para clínicas grandes?", a: "Especialmente para fisios autónomos y clínicas pequeñas. La proximidad y especialización son tu ventaja competitiva frente a grandes centros." },
    { q: "¿Basta con tener la ficha de Google creada?", a: "No. Sin fotos recientes, reseñas gestionadas y publicaciones, Google interpreta la ficha como abandonada y te baja del ranking." },
    { q: "¿Puedo posicionar por especialidad (suelo pélvico, deportiva, etc.)?", a: "Sí. Creamos páginas específicas por cada especialidad y zona para captar búsquedas concretas de alta intención." },
  ];

  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
    { "@type": "ListItem", position: 2, name: "SEO para Fisioterapeutas", item: "https://slocal.es/seo-para-fisioterapeutas" },
  ]};
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "SEO para Fisioterapeutas", provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" }, areaServed: "España" };
  const localBusinessSchema = { "@context": "https://schema.org", "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es", description: "SEO local para fisioterapeutas en España", areaServed: "España", priceRange: "€€", openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "09:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "09:00", closes: "14:00" },
  ]};

  const content: SectorTemplateContent = {
    seoTitle: "SEO para Fisioterapeutas | Agencia SEO Local | slocal.es",
    seoDescription: "Agencia SEO Local para fisioterapeutas: Google Business Profile, Google Maps y posicionamiento local para conseguir más pacientes desde Google.",
    canonical: "/seo-para-fisioterapeutas",
    sectorLabel: "Fisioterapeutas", sectorSlug: "seo-para-fisioterapeutas", sectorLower: "fisioterapeutas", clientWord: "pacientes",
    heroEyebrow: "Agencia SEO Local · Fisioterapeutas",
    heroH1: <h1>SEO para <span className="text-primary">Fisioterapeutas</span></h1>,
    heroSubtitle: <>Agencia SEO Local especializada en fisioterapeutas y clínicas de fisioterapia. Optimizamos tu ficha de Google Business Profile y tu web para que aparezcas primero cuando alguien busca fisio cerca de mí en tu ciudad.</>,
    heroTrust: ["Google Partner", "Ficha de Google gestionada cada mes", "Auditoría inicial sin coste"],
    manifestoEyebrow: "— El punto de partida",
    manifestoH2: <>¿Cómo conseguir <span className="text-primary">más pacientes</span> para tu clínica de fisioterapia desde Google?</>,
    manifestoBody: <>En Slocal conseguimos que más pacientes pidan cita optimizando tu ficha de Google Business Profile y posicionando tu web para búsquedas locales de alta intención. Aparecer en el top 3 de Google Maps multiplica las llamadas.</>,
    gbpH3: <>Tu ficha de <span className="text-primary">Google Business Profile</span> genera llamadas</>,
    gbpBody: <>Google Business Profile es donde el paciente decide llamar a tu clínica. Optimizamos tu ficha para aparecer antes que otros fisios y convertir búsquedas locales en citas.</>,
    gbpFeatures: ["Categorías optimizadas", "Servicios estructurados (suelo pélvico, deportiva…)", "Publicaciones", "Gestión de reseñas", "Geolocalización", "Seguimiento de llamadas"],
    webH3: <>Una web que <span className="text-primary">convierte</span> visitas en pacientes</>,
    webBody: <>Mientras la ficha genera la llamada, tu web convierte visitas en citas y refuerza tu posicionamiento local.</>,
    webFeatures: ["SEO Local", "Landing por especialidad", "Landing por ciudad y barrio", "Formularios optimizados", "WhatsApp", "Google Analytics"],
    auditoriaFormType: "auditoria_fisioterapeutas",
    howH2: <>¿Cómo conseguimos que aparezcas <span className="text-primary">por delante</span> de otros fisios en Google?</>,
    howIntro: <>En Slocal apareces primero en Google Maps optimizando tu ficha, especialidades, reseñas y contenido local. Google prioriza fichas activas y coherencia entre ficha, web y directorios.</>,
    howSteps: [
      { h: "Auditoría", d: "Analizamos tu Google Business Profile, tu web y a las clínicas de fisioterapia competidoras." },
      { h: "Estrategia", d: "Definimos búsquedas de alta intención (especialidad + zona) y diseñamos el plan." },
      { h: "Optimización", d: "Optimizamos ficha y web para que trabajen juntas y mejoren tu posicionamiento local." },
      { h: "Autoridad Local", d: "Reforzamos reseñas, contenido especializado y señales de confianza." },
      { h: "Seguimiento", d: "Medimos llamadas, citas y posiciones cada mes." },
    ],
    caseH2: <>¿Cómo consiguió Slocal que una <span className="text-primary">clínica de fisioterapia</span> pasara del boca a boca a agenda completa?</>,
    caseIntro: <>Slocal transformó la presencia digital de esta clínica optimizando su Google Business Profile, desarrollando una web SEO Local multipágina y creando páginas específicas para cada especialidad.</>,
    caseStages: [
      { title: "ANTES", text: "Ficha desatendida, web de una sola página y dependencia total del boca a boca.", label: "Situación inicial: agenda irregular y sin visibilidad" },
      { title: "ESTRATEGIA SLOCAL", text: "Optimizamos Google Business Profile, creamos web SEO Local multipágina y páginas por especialidad.", label: "Estrategia Slocal: ficha, web multipágina y páginas por especialidad" },
      { title: "RESULTADO", text: "Top 3 en Google Maps, agenda llena y lista de espera para tratamientos concretos.", label: "Resultados: top 3 en Maps y agenda completa" },
    ],
    caseKpis: [{ k: "+30", l: "Citas al mes" }, { k: "TOP 3", l: "Google Maps" }, { k: "x7", l: "Retorno de la inversión" }],
    monthlyH2: <>¿Por qué el SEO Local necesita trabajo <span className="text-primary">mes a mes</span>?</>,
    monthlyBody: <>Porque Google no es una fotografía, es una competición continua. Reforzamos cada mes tu ficha, reseñas y contenido para mantener las primeras posiciones.</>,
    monthlyReasons: [
      { h: "Otros fisios siguen trabajando", d: "Otras clínicas publican, piden reseñas y mueven su ficha. Si te detienes, ellas avanzan." },
      { h: "Google cambia constantemente", d: "El algoritmo se actualiza cada mes." },
      { h: "Tu ficha necesita actividad", d: "Publicaciones, fotos y respuestas a reseñas mantienen tu ficha viva." },
      { h: "Aparecen nuevas búsquedas", d: "Cada mes surgen consultas nuevas por especialidad o zona." },
      { h: "Seguimos reforzando tu presencia", d: "Cuanto más maduro es tu SEO local, más difícil es que te superen." },
    ],
    faqs,
    citiesH2: <>¿En qué <span className="text-primary">ciudades</span> trabaja Slocal con fisioterapeutas?</>,
    citiesBody: <>Slocal trabaja con fisioterapeutas y clínicas en toda España, con clientes activos en Madrid, Barcelona, Valencia, Sevilla, Málaga, Zaragoza, Bilbao y Murcia.</>,
    otherSectorsH2: <>¿Slocal solo trabaja con <span className="text-primary">fisioterapeutas</span>?</>,
    otherSectorsBody: <>No. Trabajamos también con fontaneros, abogados, dentistas, psicólogos, gimnasios y empresas de reformas.</>,
    otherSectors: [
      { label: "SEO para fontaneros", slug: "seo-para-fontaneros" },
      { label: "SEO para abogados", slug: "seo-para-abogados" },
      { label: "SEO para dentistas", slug: "seo-para-dentistas" },
      { label: "SEO para psicólogos", slug: "seo-para-psicologos" },
      { label: "SEO para gimnasios", slug: "seo-para-gimnasios" },
      { label: "SEO para empresas de reformas", slug: "seo-para-reformas" },
    ],
    finalCtaTitle: "¿Quieres que tu clínica de fisioterapia llene su agenda gracias a Google?",
    jsonLd: [breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema],
  };

  return <SectorMasterTemplate content={content} />;
};

export default FisioterapeutasPage;
