import type { SeoLocalCity } from "@/data/seoLocalCities";

export const ORG_ID = "https://slocal.es/#organization";
const SITE_ID = "https://slocal.es/#website";
const OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/at352BHsLgQVqWQciJfj2Ilzwdn1/social-images/social-1773311958891-1000001083.webp";

export const organizationNode = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Slocal",
  alternateName: ["slocal.es", "Agencia SEO Local", "Agencia SEO Local | Slocal"],
  url: "https://slocal.es/",
  image: OG_IMAGE,
  logo: { "@type": "ImageObject", url: "https://slocal.es/favicon.png" },
  description: "Agencia de SEO local especializada en Google Business Profile, Google Maps y posicionamiento web local para negocios y profesionales de toda España.",
  email: "info@slocal.es",
  telephone: "+34644147310",
  contactPoint: [{ "@type": "ContactPoint", contactType: "sales", telephone: "+34644147310", email: "info@slocal.es", areaServed: "ES", availableLanguage: ["es"] }],
  areaServed: { "@type": "Country", name: "España" },
  knowsAbout: ["SEO local", "Google Business Profile", "Google Maps", "Posicionamiento web local"],
  sameAs: [
    "https://www.facebook.com/slocal.es",
    "https://www.instagram.com/slocal.es/",
    "https://www.linkedin.com/company/slocal-es/",
    "https://www.google.com/maps?cid=4133474621130610905",
    "https://www.google.com/maps?cid=16970055204824583970",
    "https://www.google.com/maps?cid=13409816473959407671",
  ],
};

export type CitySchemaOptions = {
  province: string;
  municipios: string[];
  dateModified: string;
  gbp?: { name: string; map: string };
};

export const buildCitySchema = (
  city: SeoLocalCity,
  url: string,
  title: string,
  description: string,
  faqs: { q: string; a: string }[],
  opts: CitySchemaOptions,
) => {
  const { name } = city;
  const pageId = `${url}#webpage`;
  const breadcrumbId = `${url}#breadcrumb`;
  const serviceId = `${url}#service`;
  const cityId = `${url}#city`;
  const localBusinessId = `${url}#localbusiness`;

  const services: [string, string][] = [
    ["Auditoría SEO inicial", `Diagnóstico de la ficha, la web y la visibilidad actual por zonas de ${name}.`],
    ["Estudio de palabras clave", "Análisis de búsquedas con intención de contratación agrupadas por servicio y zona."],
    ["Ficha de Google Business Profile", "Configuración de categorías, servicios, descripción, zonas de cobertura, fotografías y publicaciones."],
    ["Web SEO Local", `Páginas específicas para los servicios y zonas prioritarias de ${name}.`],
    ["Citaciones en directorios locales y temáticos", "Corrección y ampliación de las menciones del negocio en directorios locales y temáticos."],
    ["Reporte mensual", "Informe mensual con posiciones, llamadas, formularios y evolución de la ficha."],
  ];

  const areaServed = [
    { "@type": "City", "@id": cityId, name, containedInPlace: { "@type": "AdministrativeArea", name: opts.province } },
    ...city.barriosBusquedas.map(({ barrio }) => ({ "@type": "Place", name: `${barrio} (${name})`, containedInPlace: { "@id": cityId } })),
    ...opts.municipios.map((m) => ({ "@type": "City", name: m, containedInPlace: { "@type": "AdministrativeArea", name: opts.province } })),
  ];

  const graph: object[] = [
    organizationNode,
    { "@type": "WebSite", "@id": SITE_ID, url: "https://slocal.es/", name: "Slocal", alternateName: ["slocal.es"], inLanguage: "es-ES", publisher: { "@id": ORG_ID } },
    { "@type": "WebPage", "@id": pageId, url, name: title, description, inLanguage: "es-ES", isPartOf: { "@id": SITE_ID }, about: { "@id": serviceId }, breadcrumb: { "@id": breadcrumbId }, dateModified: opts.dateModified },
    { "@type": "BreadcrumbList", "@id": breadcrumbId, itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: `SEO Local en ${name}`, item: url },
    ] },
    { "@type": "Service", "@id": serviceId, name: `SEO Local en ${name}`, serviceType: "SEO local", url,
      description: `Servicio de SEO local para negocios y profesionales de ${name}: optimización de Google Business Profile, posicionamiento en Google Maps y web con páginas por servicio y por barrio de ${name}.`,
      provider: { "@id": opts.gbp ? localBusinessId : ORG_ID },
      areaServed,
      audience: { "@type": "Audience", audienceType: `Negocios y profesionales locales de ${name}` },
      hasOfferCatalog: { "@type": "OfferCatalog", name: `Servicios de SEO local en ${name}`,
        itemListElement: services.map(([n, d]) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n, description: d } })) },
    },
  ];

  if (opts.gbp) {
    graph.push({ "@type": "ProfessionalService", "@id": localBusinessId, name: opts.gbp.name, url, hasMap: opts.gbp.map, sameAs: [opts.gbp.map],
      telephone: "+34644147310", email: "info@slocal.es", image: OG_IMAGE,
      description: `Ficha de Google de Slocal en ${name}: SEO local, Google Business Profile y Google Maps para negocios y profesionales de ${name}.`,
      parentOrganization: { "@id": ORG_ID }, areaServed: { "@id": cityId } });
  }

  graph.push({ "@type": "FAQPage", "@id": `${url}#faq`, isPartOf: { "@id": pageId },
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });

  return { "@context": "https://schema.org", "@graph": graph };
};