import SectorMasterTemplate, { SectorTemplateContent } from "@/components/sector/SectorMasterTemplate";

const DentistasPage = () => {
  const faqs = [
    { q: "¿Cuándo empieza a llenarse la agenda de nuevos pacientes desde Google?", a: "Los primeros resultados aparecen entre el mes 2 y el mes 4: más visitas al perfil y más llamadas. A partir del mes 6 el flujo de pacientes se consolida." },
    { q: "¿Funciona para clínicas pequeñas o solo para grandes grupos dentales?", a: "El SEO local favorece precisamente a las clínicas pequeñas e independientes. La proximidad y especialización son tu ventaja frente a los grandes grupos." },
    { q: "¿Las reseñas de Google son importantes para una clínica dental?", a: "Son el factor decisivo. El 90% de los pacientes lee las reseñas antes de pedir cita. Gestionamos su obtención y respuesta cada mes." },
    { q: "¿Necesito páginas específicas para cada tratamiento?", a: "Sí. 'Ortodoncia', 'implantes' y 'blanqueamiento' son búsquedas distintas con pacientes distintos. Cada tratamiento necesita su propia página." },
    { q: "¿Qué diferencia hay entre SEO para dentistas y Google Ads?", a: "Google Ads desaparece cuando dejas de pagar. El SEO construye presencia orgánica que genera citas de forma constante sin coste por clic." },
    { q: "¿Basta con tener la ficha de Google creada?", a: "No. Sin fotos recientes, reseñas gestionadas y publicaciones, Google baja tu ranking cada semana." },
    { q: "¿Puedo posicionarme por barrios además de por ciudad?", a: "Sí. Creamos páginas por barrio para búsquedas del tipo 'dentista en Chamberí' o 'clínica dental en Gràcia'." },
  ];

  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
    { "@type": "ListItem", position: 2, name: "SEO para Dentistas", item: "https://slocal.es/seo-para-dentistas" },
  ]};
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "SEO para Dentistas", provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" }, areaServed: "España" };
  const localBusinessSchema = { "@context": "https://schema.org", "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es", description: "SEO local para dentistas en España", areaServed: "España", priceRange: "€€", openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "09:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "09:00", closes: "14:00" },
  ]};

  const content: SectorTemplateContent = {
    seoTitle: "SEO para Dentistas | Agencia SEO Local | slocal.es",
    seoDescription: "Agencia SEO Local para clínicas dentales: Google Business Profile, Google Maps y posicionamiento local para conseguir más pacientes y citas desde Google.",
    canonical: "/seo-para-dentistas",
    sectorLabel: "Dentistas", sectorSlug: "seo-para-dentistas", sectorLower: "dentistas", clientWord: "pacientes",
    heroEyebrow: "Agencia SEO Local · Dentistas",
    heroH1: <h1>SEO para <span className="text-primary">Dentistas</span></h1>,
    heroSubtitle: <>Agencia SEO Local especializada en clínicas dentales. Optimizamos tu ficha de Google Business Profile y tu web para que aparezcas primero cuando alguien busca dentista en tu ciudad.</>,
    heroTrust: ["Google Partner", "Ficha de Google gestionada cada mes", "Auditoría inicial sin coste"],
    manifestoEyebrow: "— El punto de partida",
    manifestoH2: <>¿Cómo conseguir <span className="text-primary">más pacientes</span> para tu clínica dental desde Google?</>,
    manifestoBody: <>En Slocal conseguimos que más pacientes pidan cita en tu clínica optimizando tu ficha de Google Business Profile y posicionando tu web para búsquedas locales de alta intención. Aparecer en el top 3 de Google Maps multiplica las citas: esas tres clínicas se llevan la mayoría de contactos.</>,
    gbpH3: <>Tu ficha de <span className="text-primary">Google Business Profile</span> genera citas</>,
    gbpBody: <>Google Business Profile es donde el paciente decide llamar a tu clínica. Optimizamos tu ficha para aparecer antes que otras clínicas y convertir búsquedas locales en citas reales.</>,
    gbpFeatures: ["Categorías odontológicas optimizadas", "Tratamientos estructurados", "Publicaciones", "Gestión de reseñas", "Geolocalización", "Seguimiento de llamadas"],
    webH3: <>Una web que <span className="text-primary">convierte</span> visitas en pacientes</>,
    webBody: <>Mientras Google Business Profile capta la llamada, tu web convierte visitas en citas confirmadas.</>,
    webFeatures: ["SEO Local", "Landing por tratamiento", "Landing por ciudad y barrio", "Formularios optimizados", "WhatsApp", "Google Analytics"],
    auditoriaFormType: "auditoria_dentistas",
    howH2: <>¿Cómo conseguimos que aparezcas <span className="text-primary">por delante</span> de otras clínicas en Google?</>,
    howIntro: <>En Slocal apareces primero en Google Maps optimizando tu ficha, tratamientos, reseñas y contenido local. Google prioriza fichas activas y coherencia entre ficha, web y citaciones locales.</>,
    howSteps: [
      { h: "Auditoría", d: "Analizamos tu Google Business Profile, tu web y a las clínicas dentales competidoras de tu zona." },
      { h: "Estrategia", d: "Definimos búsquedas de alta intención (tratamiento + ciudad) y diseñamos el plan." },
      { h: "Optimización", d: "Optimizamos ficha y web para que trabajen juntas y mejoren tu posicionamiento local." },
      { h: "Autoridad Local", d: "Potenciamos reseñas, contenido especializado y señales de confianza sanitarias." },
      { h: "Seguimiento", d: "Medimos citas, llamadas y posiciones cada mes." },
    ],
    caseH2: <>¿Cómo consiguió Slocal que una <span className="text-primary">clínica dental</span> pasara de agenda a medias a lista de espera?</>,
    caseIntro: <>Slocal transformó la presencia digital de esta clínica optimizando su Google Business Profile, desarrollando una web SEO Local y creando páginas específicas para cada tratamiento y zona.</>,
    caseStages: [
      { title: "ANTES", text: "Ficha antigua sin optimizar, web genérica y dependencia total del boca a boca.", label: "Situación inicial: agenda irregular y sin visibilidad" },
      { title: "ESTRATEGIA SLOCAL", text: "Optimizamos Google Business Profile, creamos web SEO Local y páginas por cada tratamiento.", label: "Estrategia Slocal: ficha, web y páginas por tratamiento" },
      { title: "RESULTADO", text: "Top 3 en Google Maps, agenda llena y lista de espera para tratamientos de alto valor.", label: "Resultados: top 3 en Maps y agenda completa" },
    ],
    caseKpis: [{ k: "+45", l: "Citas nuevas al mes" }, { k: "TOP 3", l: "Google Maps" }, { k: "x10", l: "Retorno de la inversión" }],
    monthlyH2: <>¿Por qué el SEO Local necesita trabajo <span className="text-primary">mes a mes</span>?</>,
    monthlyBody: <>Porque Google no es una fotografía, es una competición continua. Reforzamos cada mes tu ficha, reseñas y contenido para mantener las primeras posiciones.</>,
    monthlyReasons: [
      { h: "Otras clínicas siguen trabajando", d: "La competencia dental es alta. Si te detienes, otras clínicas avanzan y te superan." },
      { h: "Google cambia constantemente", d: "El algoritmo se actualiza cada mes; especialmente estricto en salud (E-E-A-T)." },
      { h: "Tu ficha necesita actividad", d: "Publicaciones, fotos de la clínica y respuestas a reseñas mantienen tu ficha viva." },
      { h: "Aparecen nuevas búsquedas", d: "Cada mes surgen consultas nuevas por tratamiento o zona. Las capturamos." },
      { h: "Seguimos reforzando tu autoridad", d: "Reseñas y contenido que Google valora especialmente en el sector sanitario." },
    ],
    faqs,
    citiesH2: <>¿En qué <span className="text-primary">ciudades</span> trabaja Slocal con dentistas?</>,
    citiesBody: <>Slocal trabaja con clínicas dentales en toda España, con clientes activos en Madrid, Barcelona, Valencia, Sevilla, Málaga, Zaragoza, Bilbao y Murcia.</>,
    otherSectorsH2: <>¿Slocal solo trabaja con <span className="text-primary">dentistas</span>?</>,
    otherSectorsBody: <>No. Trabajamos también con fontaneros, fisioterapeutas, abogados, psicólogos, gimnasios y empresas de reformas.</>,
    otherSectors: [
      { label: "SEO para fontaneros", slug: "seo-para-fontaneros" },
      { label: "SEO para fisioterapeutas", slug: "seo-para-fisioterapeutas" },
      { label: "SEO para abogados", slug: "seo-para-abogados" },
      { label: "SEO para psicólogos", slug: "seo-para-psicologos" },
      { label: "SEO para gimnasios", slug: "seo-para-gimnasios" },
      { label: "SEO para empresas de reformas", slug: "seo-para-reformas" },
    ],
    finalCtaTitle: "¿Quieres que tu clínica dental llene su agenda gracias a Google?",
    jsonLd: [breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema],
  };

  return <SectorMasterTemplate content={content} />;
};

export default DentistasPage;
