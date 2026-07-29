import SectorMasterTemplate, { SectorTemplateContent } from "@/components/sector/SectorMasterTemplate";
import { SeoLocalCity } from "@/data/seoLocalCities";
import gbpSevilla from "@/assets/gbp_sevilla.webp.asset.json";
import webSevilla from "@/assets/web_sevilla.webp.asset.json";

const cityImages: Record<string, { gbp?: { src: string; alt: string }; web?: { src: string; alt: string } }> = {
  sevilla: {
    gbp: { src: gbpSevilla.url, alt: "Ficha de Google Business Profile posicionada en Sevilla" },
    web: { src: webSevilla.url, alt: "Web optimizada para negocios locales en Sevilla" },
  },
};

/**
 * CityMasterTemplate
 * ---------------------------------------------------------------------------
 * Wraps SectorMasterTemplate (the Slocal master design system) with city-focused
 * content. Same layout, same visual hierarchy — only the copy changes.
 * ---------------------------------------------------------------------------
 */

const sectorChips = [
  { label: "SEO para fontaneros", slug: "seo-para-fontaneros" },
  { label: "SEO para abogados", slug: "seo-para-abogados" },
  { label: "SEO para dentistas", slug: "seo-para-dentistas" },
  { label: "SEO para fisioterapeutas", slug: "seo-para-fisioterapeutas" },
  { label: "SEO para psicólogos", slug: "seo-para-psicologos" },
  { label: "SEO para empresas de reformas", slug: "seo-para-reformas" },
];

const CityMasterTemplate = ({ city }: { city: SeoLocalCity }) => {
  const { name, slug, population, competition, plazo } = city;
  const url = `https://slocal.es/seo-local-${slug}`;

  const faqs = [
    { q: `¿Cuándo empezaré a ver resultados de SEO local en ${name}?`, a: `En ${name}, con una competencia digital ${competition.toLowerCase()}, los primeros resultados visibles llegan en ${plazo}: más visitas al perfil de Google Business Profile, más llamadas y mejora de posiciones en Google Maps. A partir del mes 6 el flujo se consolida.` },
    { q: `¿Funciona el SEO local en ${name} para negocios pequeños?`, a: `Sí. El SEO local favorece precisamente a los negocios de barrio frente a franquicias generalistas. En ${name}, cada zona funciona como un mercado propio y un negocio bien posicionado en su barrio compite en igualdad de condiciones.` },
    { q: `¿Necesito web para hacer SEO local en ${name}?`, a: `Una web optimizada por servicio y por barrio de ${name} es lo que permite aparecer en resultados orgánicos además de en Google Maps. El servicio incluye la web desde el inicio.` },
    { q: `¿Puedo posicionarme por barrios concretos de ${name}?`, a: `Sí. Creamos páginas específicas para las principales zonas y servicios de ${name}, optimizadas para las búsquedas reales que hace la gente en cada barrio.` },
    { q: `¿Qué diferencia hay entre SEO local y Google Ads en ${name}?`, a: `Google Ads da visibilidad inmediata pagando por cada clic. El SEO local construye presencia orgánica en ${name} con retorno creciente y sin coste por clic. En un mercado como éste, la combinación bien planteada es lo que da estabilidad al negocio.` },
    { q: `¿Basta con tener la ficha de Google creada en ${name}?`, a: `No. Sin fotos recientes, sin reseñas respondidas y sin publicaciones, Google interpreta que el negocio no es relevante en ${name} y lo baja del ranking. La ficha necesita actividad continua.` },
    { q: `¿Es suficiente una sola página para toda la ciudad de ${name}?`, a: `No. Las búsquedas locales en ${name} se hacen por barrio y por servicio. Cada combinación necesita su propia página para competir con quien ya la tiene.` },
  ];

  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
    { "@type": "ListItem", position: 2, name: `SEO Local en ${name}`, item: url },
  ]};
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: `SEO Local en ${name}`, provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" }, areaServed: `${name}, España` };
  const localBusinessSchema = { "@context": "https://schema.org", "@type": "LocalBusiness", name: "slocal.es", url, description: `SEO local para negocios en ${name}`, areaServed: `${name}, España`, priceRange: "€€", openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "09:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "09:00", closes: "14:00" },
  ]};

  const content: SectorTemplateContent = {
    seoTitle: `SEO Local en ${name} | Agencia SEO Local | slocal.es`,
    seoDescription: `Agencia SEO Local en ${name}: Google Business Profile, Google Maps y posicionamiento local para que tus clientes te encuentren primero en Google.`,
    canonical: `/seo-local-${slug}`,
    sectorLabel: name,
    sectorSlug: `seo-local-${slug}`,
    sectorLower: name.toLowerCase(),
    clientWord: "clientes",
    heroEyebrow: `Agencia SEO Local · ${name}`,
    heroH1: <h1>SEO Local en <span className="text-primary">{name}</span></h1>,
    heroSubtitle: <>Agencia SEO Local en {name}. Optimizamos tu ficha de Google Business Profile y tu web para que aparezcas primero cuando alguien busca tu servicio en {name}.</>,
    heroTrust: ["Google Partner", "Ficha de Google gestionada cada mes", "Auditoría inicial sin coste"],
    manifestoEyebrow: "— El punto de partida",
    manifestoH2: <>¿Cómo conseguir <span className="text-primary">más clientes</span> desde Google en {name}?</>,
    manifestoBody: <>En Slocal conseguimos que más clientes contacten con tu negocio en {name} optimizando tu ficha de Google Business Profile y posicionando tu web para búsquedas locales de alta intención. {name} tiene {population} y una competencia digital {competition.toLowerCase()}: aparecer en el top 3 de Google Maps multiplica los contactos porque esos tres negocios se llevan la mayoría de las llamadas.</>,
    gbpH3: <>Tu ficha de <span className="text-primary">Google Business Profile</span> genera llamadas en {name}</>,
    gbpBody: <>Google Business Profile es donde el cliente de {name} decide llamarte. Optimizamos tu ficha para aparecer antes que otros negocios de tu zona y convertir búsquedas en contactos reales.</>,
    gbpFeatures: ["Categorías optimizadas", "Zona de servicio por barrios", "Publicaciones semanales", "Gestión de reseñas", "Geolocalización", "Seguimiento de llamadas"],
    gbpImage: cityImages[slug]?.gbp,
    webH3: <>Una web que <span className="text-primary">convierte</span> visitas en clientes</>,
    webBody: <>Mientras Google Business Profile genera la llamada, tu web convierte las visitas en contactos cualificados. Trabajamos páginas específicas por servicio y por barrio de {name}.</>,
    webFeatures: ["SEO Local", "Landing por servicio", "Landing por barrio", "Formularios optimizados", "WhatsApp", "Google Analytics"],
    webImage: cityImages[slug]?.web,
    auditoriaFormType: `auditoria_${slug}`,
    howH2: <>¿Cómo conseguimos que aparezcas <span className="text-primary">por delante</span> de tu competencia en {name}?</>,
    howIntro: <>En Slocal apareces primero en Google Maps en {name} optimizando tu ficha, servicios, reseñas y contenido local. Google prioriza fichas activas, con reseñas recientes y coherencia entre ficha, web y citaciones locales de la ciudad.</>,
    howSteps: [
      { h: "Auditoría", d: `Analizamos tu Google Business Profile, tu web y a los negocios competidores en tu zona de ${name}.` },
      { h: "Estrategia", d: `Definimos las búsquedas con mayor intención (servicio + barrio de ${name}) y diseñamos el plan.` },
      { h: "Optimización", d: "Optimizamos ficha y web para que trabajen juntas y mejoren tu posicionamiento local." },
      { h: "Autoridad Local", d: `Reforzamos reseñas, contenido por zona de ${name} y señales de confianza.` },
      { h: "Seguimiento", d: "Medimos llamadas, formularios y posiciones cada mes." },
    ],
    caseH2: <>¿Cómo consiguió Slocal que un <span className="text-primary">negocio local en {name}</span> triplicara sus contactos desde Google?</>,
    caseIntro: <>Slocal transformó la presencia digital de este negocio en {name} optimizando su Google Business Profile, desarrollando una web SEO Local y creando páginas específicas por servicio y barrio.</>,
    caseStages: [
      { title: "ANTES", text: `Sin presencia en Google Maps de ${name}, ficha poco optimizada y web genérica sin páginas por barrio.`, label: `Situación inicial: sin visibilidad en búsquedas locales de ${name}` },
      { title: "ESTRATEGIA SLOCAL", text: `Optimizamos Google Business Profile, creamos web SEO Local y páginas específicas para las principales zonas de ${name}.`, label: `Estrategia Slocal: ficha, web y páginas por barrio de ${name}` },
      { title: "RESULTADO", text: `Top 3 en Google Maps de ${name}, aumento constante de llamadas y menos dependencia de publicidad de pago.`, label: `Resultados: top 3 en Google Maps de ${name} y agenda llena` },
    ],
    caseKpis: [{ k: "x3", l: "Contactos al mes" }, { k: "TOP 3", l: "Google Maps" }, { k: "x9", l: "Retorno de la inversión" }],
    monthlyH2: <>¿Por qué el SEO Local en {name} necesita trabajo <span className="text-primary">mes a mes</span>?</>,
    monthlyBody: <>Porque Google no es una fotografía, es una competición continua. En {name} reforzamos cada mes tu ficha, reseñas y contenido para mantener las primeras posiciones.</>,
    monthlyReasons: [
      { h: "Otros negocios siguen trabajando", d: `La competencia en ${name} no se detiene. Si tú te paras, otros avanzan y ganan posiciones.` },
      { h: "Google cambia constantemente", d: "El algoritmo se actualiza cada mes y afecta directamente a las búsquedas locales." },
      { h: "Tu ficha necesita actividad", d: "Publicaciones, respuestas a reseñas y contenido nuevo mantienen tu ficha viva." },
      { h: "Aparecen nuevas búsquedas", d: `Cada mes surgen búsquedas nuevas por servicio o zona de ${name}. Las capturamos con contenido.` },
      { h: "Seguimos reforzando tu autoridad", d: "Reseñas, contenido y señales locales que Google valora especialmente." },
    ],
    faqs,
    citiesH2: <>¿En qué otras <span className="text-primary">ciudades</span> trabaja Slocal?</>,
    citiesBody: <>Slocal trabaja con negocios locales en toda España, con clientes activos en Madrid, Barcelona, Valencia, Sevilla, Málaga, Zaragoza, Bilbao y Murcia.</>,
    otherSectorsH2: <>¿Con qué <span className="text-primary">sectores</span> trabaja Slocal en {name}?</>,
    otherSectorsBody: <>Trabajamos con fontaneros, abogados, dentistas, fisioterapeutas, psicólogos, gimnasios, inmobiliarias y empresas de reformas en {name}.</>,
    otherSectors: sectorChips,
    finalCtaTitle: `¿Quieres que tu negocio en ${name} reciba más contactos gracias a Google?`,
    jsonLd: [breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema],
  };

  return <SectorMasterTemplate content={content} />;
};

export default CityMasterTemplate;
