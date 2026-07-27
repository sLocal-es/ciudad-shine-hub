import SectorMasterTemplate, { SectorTemplateContent } from "@/components/sector/SectorMasterTemplate";

const PsicologosPage = () => {
  const faqs = [
    { q: "¿Cuándo empieza a llenarse la agenda con pacientes desde Google?", a: "Los primeros resultados aparecen entre el mes 2 y el mes 4. A partir del mes 6 el flujo se consolida y la agenda se llena sin depender del boca a boca." },
    { q: "¿Funciona para psicólogos autónomos o solo para grandes clínicas?", a: "El SEO local favorece precisamente a los psicólogos independientes. Una consulta bien posicionada en su barrio aparece antes que un gran centro sin presencia local." },
    { q: "¿Es compatible con estar en Doctoralia?", a: "Sí. La diferencia es que los pacientes que llegan desde Google llegan directamente a ti, sin compararte con otros psicólogos y sin comisión por cada paciente." },
    { q: "¿Puedo posicionarme para varias especialidades terapéuticas?", a: "Sí. Creamos páginas específicas para cada especialidad — ansiedad, terapia de pareja, psicología infantil — optimizadas para búsquedas reales." },
    { q: "¿El SEO para psicólogos es diferente al de otros sectores?", a: "Sí. La psicología pertenece al sector salud, donde Google aplica criterios E-E-A-T más estrictos. El contenido debe transmitir credibilidad profesional." },
    { q: "¿Basta con tener la ficha de Google creada?", a: "No. Sin actividad, publicaciones y reseñas gestionadas, tu ficha pierde posiciones cada semana." },
    { q: "¿Funciona la psicología online con SEO local?", a: "Sí, combinamos SEO local para búsquedas por ciudad con SEO general para búsquedas online del tipo 'psicólogo online'." },
  ];

  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
    { "@type": "ListItem", position: 2, name: "SEO para Psicólogos", item: "https://slocal.es/seo-para-psicologos" },
  ]};
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "SEO para Psicólogos", provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" }, areaServed: "España" };
  const localBusinessSchema = { "@context": "https://schema.org", "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es", description: "SEO local para psicólogos en España", areaServed: "España", priceRange: "€€", openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "09:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "09:00", closes: "14:00" },
  ]};

  const content: SectorTemplateContent = {
    seoTitle: "SEO para Psicólogos | Agencia SEO Local | slocal.es",
    seoDescription: "Agencia SEO Local para psicólogos: Google Business Profile, Google Maps y posicionamiento local para llenar tu agenda con pacientes desde Google.",
    canonical: "/seo-para-psicologos",
    sectorLabel: "Psicólogos", sectorSlug: "seo-para-psicologos", sectorLower: "psicólogos", clientWord: "pacientes",
    heroEyebrow: "Agencia SEO Local · Psicólogos",
    heroH1: <h1>SEO para <span className="text-primary">Psicólogos</span></h1>,
    heroSubtitle: <>Agencia SEO Local especializada en psicólogos y consultas de psicología. Optimizamos tu ficha de Google Business Profile y tu web para que aparezcas primero cuando alguien busca psicólogo en tu ciudad.</>,
    heroTrust: ["Google Partner", "Ficha de Google gestionada cada mes", "Auditoría inicial sin coste"],
    manifestoEyebrow: "— El punto de partida",
    manifestoH2: <>¿Cómo conseguir <span className="text-primary">más pacientes</span> para tu consulta desde Google?</>,
    manifestoBody: <>En Slocal conseguimos que más pacientes lleguen directamente a tu consulta optimizando tu ficha de Google Business Profile y posicionando tu web para búsquedas locales de alta intención. Sin comisiones de plataformas.</>,
    gbpH3: <>Tu ficha de <span className="text-primary">Google Business Profile</span> genera pacientes</>,
    gbpBody: <>Google Business Profile es donde el paciente decide llamarte. Optimizamos tu ficha para aparecer antes que otros psicólogos y convertir búsquedas en primeras sesiones.</>,
    gbpFeatures: ["Categorías correctas de psicología", "Especialidades estructuradas", "Publicaciones", "Gestión de reseñas", "Geolocalización", "Seguimiento de llamadas"],
    webH3: <>Una web que <span className="text-primary">convierte</span> visitas en pacientes</>,
    webBody: <>Mientras la ficha genera la llamada, tu web transmite confianza profesional y convierte visitas en primeras sesiones.</>,
    webFeatures: ["SEO Local", "Landing por especialidad", "Landing por ciudad", "Formularios optimizados", "WhatsApp", "Google Analytics"],
    auditoriaFormType: "auditoria_psicologos",
    howH2: <>¿Cómo conseguimos que aparezcas <span className="text-primary">por delante</span> de otros psicólogos en Google?</>,
    howIntro: <>En Slocal apareces primero en Google Maps optimizando tu ficha, especialidades, reseñas y contenido local. Google valora especialmente la coherencia E-E-A-T en el sector salud.</>,
    howSteps: [
      { h: "Auditoría", d: "Analizamos tu Google Business Profile, tu web y a las consultas de psicología competidoras." },
      { h: "Estrategia", d: "Definimos búsquedas de alta intención (especialidad + zona) y diseñamos el plan." },
      { h: "Optimización", d: "Optimizamos ficha y web para que trabajen juntas y mejoren tu posicionamiento local." },
      { h: "Autoridad Local", d: "Reforzamos reseñas, contenido especializado y señales E-E-A-T." },
      { h: "Seguimiento", d: "Medimos llamadas, sesiones nuevas y posiciones cada mes." },
    ],
    caseH2: <>¿Cómo consiguió Slocal que una <span className="text-primary">psicóloga</span> pasara de depender de Doctoralia a llenar su agenda desde Google?</>,
    caseIntro: <>Slocal transformó la presencia digital de esta consulta optimizando su Google Business Profile, desarrollando una web SEO Local y creando páginas específicas por especialidad y ciudad.</>,
    caseStages: [
      { title: "ANTES", text: "Sin ficha optimizada, dependiendo de plataformas con comisión y del boca a boca.", label: "Situación inicial: sin visibilidad directa en Google" },
      { title: "ESTRATEGIA SLOCAL", text: "Optimizamos Google Business Profile, creamos web SEO Local y páginas por cada especialidad.", label: "Estrategia Slocal: ficha, web y páginas por especialidad" },
      { title: "RESULTADO", text: "Top 3 en Google Maps, pacientes directos sin comisión y agenda estable.", label: "Resultados: top 3 en Maps y agenda estable" },
    ],
    caseKpis: [{ k: "+20", l: "Sesiones nuevas al mes" }, { k: "TOP 3", l: "Google Maps" }, { k: "x8", l: "Retorno de la inversión" }],
    monthlyH2: <>¿Por qué el SEO Local necesita trabajo <span className="text-primary">mes a mes</span>?</>,
    monthlyBody: <>Porque Google no es una fotografía, es una competición continua. Reforzamos cada mes tu ficha, reseñas y contenido para mantener las primeras posiciones.</>,
    monthlyReasons: [
      { h: "Otros psicólogos siguen trabajando", d: "Otras consultas publican, piden reseñas y mueven su ficha. Si te detienes, ellas avanzan." },
      { h: "Google cambia constantemente", d: "El algoritmo se actualiza cada mes; especialmente estricto en salud." },
      { h: "Tu ficha necesita actividad", d: "Publicaciones y respuestas a reseñas mantienen tu ficha viva." },
      { h: "Aparecen nuevas búsquedas", d: "Cada mes surgen consultas nuevas por especialidad o zona." },
      { h: "Seguimos reforzando tu autoridad", d: "Reseñas y contenido E-E-A-T que Google valora en el sector salud." },
    ],
    faqs,
    citiesH2: <>¿En qué <span className="text-primary">ciudades</span> trabaja Slocal con psicólogos?</>,
    citiesBody: <>Slocal trabaja con psicólogos en toda España, con clientes activos en Madrid, Barcelona, Valencia, Sevilla, Málaga, Zaragoza, Bilbao y Murcia.</>,
    otherSectorsH2: <>¿Slocal solo trabaja con <span className="text-primary">psicólogos</span>?</>,
    otherSectorsBody: <>No. Trabajamos también con fontaneros, fisioterapeutas, abogados, dentistas, gimnasios y empresas de reformas.</>,
    otherSectors: [
      { label: "SEO para fontaneros", slug: "seo-para-fontaneros" },
      { label: "SEO para fisioterapeutas", slug: "seo-para-fisioterapeutas" },
      { label: "SEO para abogados", slug: "seo-para-abogados" },
      { label: "SEO para dentistas", slug: "seo-para-dentistas" },
      { label: "SEO para gimnasios", slug: "seo-para-gimnasios" },
      { label: "SEO para empresas de reformas", slug: "seo-para-reformas" },
    ],
    finalCtaTitle: "¿Quieres que tu consulta reciba más pacientes gracias a Google?",
    jsonLd: [breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema],
  };

  return <SectorMasterTemplate content={content} />;
};

export default PsicologosPage;
