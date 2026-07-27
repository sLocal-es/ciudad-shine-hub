import SectorMasterTemplate, { SectorTemplateContent } from "@/components/sector/SectorMasterTemplate";

const ReformasPage = () => {
  const faqs = [
    { q: "¿Cuándo empieza a llegar el primer presupuesto desde Google?", a: "En reformas el proceso es más largo. Los primeros contactos cualificados suelen aparecer entre el mes 3 y el mes 5. A partir del mes 6 el flujo se consolida." },
    { q: "¿Funciona para autónomos de reformas o solo para empresas grandes?", a: "Especialmente para autónomos y empresas pequeñas. La proximidad y especialización son tu ventaja frente a grandes empresas sin ficha optimizada." },
    { q: "¿Necesito fotos de mis proyectos para empezar?", a: "Ayudan mucho. Las fotos de antes y después son el factor que más aumenta los clics. Si no tienes, te decimos qué fotografiar." },
    { q: "¿Cómo me diferencio de otras empresas de reformas en Google?", a: "Con páginas específicas por tipo de reforma y zona, reseñas gestionadas y contenido que muestra tu experiencia real." },
    { q: "¿El SEO funciona mejor que Google Ads para reformas?", a: "Para reformas, donde el ticket es alto, el retorno del SEO local a 6-12 meses es muy superior. Ads da visibilidad inmediata pero desaparece cuando dejas de pagar." },
    { q: "¿Basta con tener la ficha de Google creada?", a: "No. Sin fotos de proyectos recientes, reseñas y publicaciones, Google interpreta la ficha como abandonada." },
    { q: "¿Puedo posicionar por tipo de reforma (cocina, baño, integral)?", a: "Sí. Creamos páginas específicas por tipo de reforma y ciudad para captar cada búsqueda de alta intención." },
  ];

  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
    { "@type": "ListItem", position: 2, name: "SEO para Empresas de Reformas", item: "https://slocal.es/seo-para-reformas" },
  ]};
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "SEO para Empresas de Reformas", provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" }, areaServed: "España" };
  const localBusinessSchema = { "@context": "https://schema.org", "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es", description: "SEO local para empresas de reformas en España", areaServed: "España", priceRange: "€€", openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "09:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "09:00", closes: "14:00" },
  ]};

  const content: SectorTemplateContent = {
    seoTitle: "SEO para Empresas de Reformas | Agencia SEO Local | slocal.es",
    seoDescription: "Agencia SEO Local para empresas de reformas: Google Business Profile, Google Maps y posicionamiento local para conseguir más presupuestos desde Google.",
    canonical: "/seo-para-reformas",
    sectorLabel: "Empresas de Reformas", sectorSlug: "seo-para-reformas", sectorLower: "empresas de reformas", clientWord: "clientes",
    heroEyebrow: "Agencia SEO Local · Reformas",
    heroH1: <h1>SEO para <span className="text-primary">Empresas de Reformas</span></h1>,
    heroSubtitle: <>Agencia SEO Local especializada en empresas de reformas. Optimizamos tu ficha de Google Business Profile y tu web para que aparezcas primero cuando alguien busca reforma integral, de cocina o de baño en tu ciudad.</>,
    heroTrust: ["Google Partner", "Ficha de Google gestionada cada mes", "Auditoría inicial sin coste"],
    manifestoEyebrow: "— El punto de partida",
    manifestoH2: <>¿Cómo conseguir <span className="text-primary">más presupuestos</span> de reforma desde Google?</>,
    manifestoBody: <>En Slocal conseguimos que más clientes te pidan presupuesto optimizando tu ficha de Google Business Profile y posicionando tu web para búsquedas locales de alta intención. Aparecer en el top 3 de Google Maps multiplica los contactos cualificados.</>,
    gbpH3: <>Tu ficha de <span className="text-primary">Google Business Profile</span> genera presupuestos</>,
    gbpBody: <>Google Business Profile es donde el cliente decide llamarte para pedir presupuesto. Optimizamos tu ficha para aparecer antes que otras empresas y convertir búsquedas en solicitudes reales.</>,
    gbpFeatures: ["Categorías de reformas y construcción", "Servicios estructurados por tipo", "Publicaciones con proyectos", "Gestión de reseñas", "Geolocalización", "Seguimiento de llamadas"],
    webH3: <>Una web que <span className="text-primary">convierte</span> visitas en presupuestos</>,
    webBody: <>Mientras la ficha genera la llamada, tu web transmite confianza con proyectos reales y convierte visitas en solicitudes de presupuesto.</>,
    webFeatures: ["SEO Local", "Landing por tipo de reforma", "Landing por ciudad", "Formularios optimizados", "WhatsApp", "Google Analytics"],
    auditoriaFormType: "auditoria_reformas",
    howH2: <>¿Cómo conseguimos que aparezcas <span className="text-primary">por delante</span> de otras empresas de reformas en Google?</>,
    howIntro: <>En Slocal apareces primero en Google Maps optimizando tu ficha, servicios, reseñas y contenido local. Google prioriza fichas activas y coherencia entre ficha, web y citaciones.</>,
    howSteps: [
      { h: "Auditoría", d: "Analizamos tu Google Business Profile, tu web y a las empresas de reformas competidoras." },
      { h: "Estrategia", d: "Definimos búsquedas de alta intención (tipo de reforma + ciudad) y diseñamos el plan." },
      { h: "Optimización", d: "Optimizamos ficha y web para que trabajen juntas y mejoren tu posicionamiento local." },
      { h: "Autoridad Local", d: "Reforzamos reseñas, fotos de proyectos y señales de confianza." },
      { h: "Seguimiento", d: "Medimos presupuestos, llamadas y posiciones cada mes." },
    ],
    caseH2: <>¿Cómo consiguió Slocal que una <span className="text-primary">empresa de reformas</span> pasara del boca a boca a presupuestos constantes desde Google?</>,
    caseIntro: <>Slocal transformó la presencia digital de esta empresa optimizando su Google Business Profile, desarrollando una web SEO Local y creando páginas específicas por tipo de reforma y ciudad.</>,
    caseStages: [
      { title: "ANTES", text: "Ficha sin gestionar, sin fotos de proyectos y dependiendo exclusivamente del boca a boca.", label: "Situación inicial: sin visibilidad para búsquedas de reforma local" },
      { title: "ESTRATEGIA SLOCAL", text: "Optimizamos Google Business Profile, creamos web SEO Local y páginas por cada tipo de reforma.", label: "Estrategia Slocal: ficha, web y páginas por tipo de reforma" },
      { title: "RESULTADO", text: "Top 3 en Google Maps y flujo constante de presupuestos cualificados cada semana.", label: "Resultados: top 3 en Maps y presupuestos constantes" },
    ],
    caseKpis: [{ k: "+15", l: "Presupuestos al mes" }, { k: "TOP 3", l: "Google Maps" }, { k: "x12", l: "Retorno de la inversión" }],
    monthlyH2: <>¿Por qué el SEO Local necesita trabajo <span className="text-primary">mes a mes</span>?</>,
    monthlyBody: <>Porque Google no es una fotografía, es una competición continua. Reforzamos cada mes tu ficha, reseñas y contenido para mantener las primeras posiciones.</>,
    monthlyReasons: [
      { h: "Otras empresas siguen trabajando", d: "Otras reformistas publican proyectos y piden reseñas. Si te detienes, ellas avanzan." },
      { h: "Google cambia constantemente", d: "El algoritmo se actualiza cada mes." },
      { h: "Tu ficha necesita actividad", d: "Fotos de proyectos nuevos y respuestas a reseñas mantienen tu ficha viva." },
      { h: "Aparecen nuevas búsquedas", d: "Cada mes surgen consultas nuevas por tipo de reforma o zona." },
      { h: "Seguimos reforzando tu autoridad", d: "Cuanto más maduro es tu SEO local, más difícil es que te superen." },
    ],
    faqs,
    citiesH2: <>¿En qué <span className="text-primary">ciudades</span> trabaja Slocal con empresas de reformas?</>,
    citiesBody: <>Slocal trabaja con empresas de reformas en toda España, con clientes activos en Madrid, Barcelona, Valencia, Sevilla, Málaga, Zaragoza, Bilbao y Murcia.</>,
    otherSectorsH2: <>¿Slocal solo trabaja con <span className="text-primary">empresas de reformas</span>?</>,
    otherSectorsBody: <>No. Trabajamos también con fontaneros, fisioterapeutas, abogados, dentistas, psicólogos y gimnasios.</>,
    otherSectors: [
      { label: "SEO para fontaneros", slug: "seo-para-fontaneros" },
      { label: "SEO para fisioterapeutas", slug: "seo-para-fisioterapeutas" },
      { label: "SEO para abogados", slug: "seo-para-abogados" },
      { label: "SEO para dentistas", slug: "seo-para-dentistas" },
      { label: "SEO para psicólogos", slug: "seo-para-psicologos" },
      { label: "SEO para gimnasios", slug: "seo-para-gimnasios" },
    ],
    finalCtaTitle: "¿Quieres que tu empresa de reformas reciba más presupuestos gracias a Google?",
    jsonLd: [breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema],
  };

  return <SectorMasterTemplate content={content} />;
};

export default ReformasPage;
