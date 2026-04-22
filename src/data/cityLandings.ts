import type { CityLandingConfig } from "@/components/CityLandingPage";
import valenciaImg from "@/assets/cities/valencia.webp";
import sevillaImg from "@/assets/cities/sevilla.jpg";
import malagaImg from "@/assets/cities/malaga.webp";
import zaragozaImg from "@/assets/cities/zaragoza.webp";
import bilbaoImg from "@/assets/cities/bilbao.webp";
import murciaImg from "@/assets/cities/murcia.webp";

const standardSteps = (city: string) => [
  {
    n: "01",
    title: `Optimizamos tu ficha de Google Business Profile para ${city}`,
    body: `Configuramos cada campo de tu perfil para las búsquedas de ${city}: categorías correctas, descripción con keywords locales, fotos, horarios y zona de servicio por barrios y distritos. Todo lo que Google necesita para mostrarte en el mapa de la ciudad.`,
  },
  {
    n: "02",
    title: `Creamos contenido que posiciona en búsquedas de ${city}`,
    body: `Artículos de blog y páginas de servicio optimizadas para las búsquedas que hacen tus clientes en ${city}, por barrio y por tipo de servicio.`,
  },
  {
    n: "03",
    title: `Seguimiento mensual de posiciones en ${city}`,
    body: `Cada mes ves exactamente qué posiciones has ganado en Google Maps para las búsquedas más importantes de tu sector en ${city}.`,
  },
];

const sectoresFor = (city: string) => [
  { label: `SEO para fontaneros en ${city}`, href: "/seo-para-fontaneros" },
  { label: `SEO para fisioterapeutas en ${city}`, href: "/seo-para-fisioterapeutas" },
  { label: `SEO para empresas de reformas en ${city}`, href: "/seo-para-reformas" },
  { label: `SEO para pintores en ${city}`, href: "/seo-para-pintores" },
  { label: `SEO para clínicas en ${city}`, href: "/seo-para-clinicas" },
  { label: `SEO para entrenadores personales en ${city}`, href: "/seo-para-entrenadores" },
];

const allCities: { slug: string; label: string; href: string }[] = [
  { slug: "madrid", label: "SEO local en Madrid", href: "/seo-local-madrid" },
  { slug: "barcelona", label: "SEO local en Barcelona", href: "/seo-local-barcelona" },
  { slug: "valencia", label: "SEO local en Valencia", href: "/seo-local-valencia" },
  { slug: "sevilla", label: "SEO local en Sevilla", href: "/seo-local-sevilla" },
  { slug: "malaga", label: "SEO local en Málaga", href: "/seo-local-malaga" },
  { slug: "zaragoza", label: "SEO local en Zaragoza", href: "/seo-local-zaragoza" },
  { slug: "bilbao", label: "SEO local en Bilbao", href: "/seo-local-bilbao" },
  { slug: "murcia", label: "SEO local en Murcia", href: "/seo-local-murcia" },
];

const otherCities = (currentSlug: string) =>
  allCities.filter((c) => c.slug !== currentSlug).map(({ label, href }) => ({ label, href }));

export const valenciaConfig: CityLandingConfig = {
  citySlug: "valencia",
  cityName: "Valencia",
  title: "SEO Local en Valencia para Negocios | Aparecer en Google Maps | slocal.es",
  description:
    "¿Tu negocio en Valencia no aparece en Google Maps? Posicionamos tu ficha y web para que tus clientes te encuentren primero. Desde 147€/mes + IVA.",
  heroImage: valenciaImg,
  heroSubtitle:
    "Si tienes un negocio en Valencia y no apareces en Google Maps cuando te buscan, estás perdiendo clientes cada día. Gestionamos tu posicionamiento local para que eso cambie — desde 147€/mes, sin contratos.",
  whyTitle: "Por qué los negocios en Valencia necesitan SEO local",
  whyParagraphs: [
    'Valencia es una ciudad con alta competencia digital y el factor del bilingüismo castellano-valenciano. En barrios como Ruzafa, Ciutat Vella, Benimaclet, El Carmen o Campanar, cada sector tiene negocios compitiendo por los mismos clientes. Cuando alguien busca "fontanero en Ruzafa", "fisioterapeuta en Benimaclet" o "empresa de reformes a Campanar" — en castellano o en valenciano — Google muestra tres negocios en el mapa. Los que están ahí reciben el 40% de todos los clics.',
    "Los consultores y agencias de SEO local en Valencia cobran entre 500€ y 1.250€/mes. En slocal.es hacemos lo mismo desde 147€/mes, sin intermediarios, con trato directo y sin permanencia. Ya trabajamos con negocios en Valencia — como la psicóloga Viviane Custodio, que recibió 4 llamadas en su segundo mes.",
  ],
  howSteps: standardSteps("Valencia"),
  sectoresIntro: "Trabajamos con todo tipo de negocios locales en Valencia.",
  sectores: sectoresFor("Valencia"),
  faqs: [
    {
      q: "¿Cuánto tarda en posicionarse un negocio en Google en Valencia?",
      a: "Los primeros resultados visibles aparecen entre el mes 2 y el mes 4. A partir del mes 6 el crecimiento se acelera.",
    },
    {
      q: "¿Hay que trabajar el SEO en castellano y en valenciano?",
      a: "El servicio se centra en castellano, donde están la mayoría de las búsquedas de servicios locales en Valencia. Si tu negocio necesita posicionarse en valenciano lo valoramos caso a caso.",
    },
    {
      q: "¿Cuánto cuesta el SEO local en Valencia?",
      a: "Los consultores y agencias de Valencia cobran entre 500€ y 1.250€/mes. En slocal.es el servicio completo cuesta 147€/mes + IVA, sin permanencia.",
    },
    {
      q: "¿Funciona para cualquier tipo de negocio local en Valencia?",
      a: "Sí. Fontaneros, fisioterapeutas, reformas, pintores, clínicas, entrenadores y cualquier negocio local en Valencia.",
    },
    {
      q: "¿Tengo que firmar un contrato largo?",
      a: "No. Sin contratos de permanencia. Cancelas cuando quieras.",
    },
  ],
  otrasCiudades: otherCities("valencia"),
  ctaFinal: "¿Tu negocio en Valencia no aparece cuando tus clientes te buscan en Google?",
  ctaButton: "Empezar en Valencia →",
  whatsappMessage: "Hola, quiero posicionar mi negocio en Valencia",
  localBusinessAreaServed: "Valencia, España",
  localBusinessServiceArea: "Valencia",
};

export const sevillaConfig: CityLandingConfig = {
  citySlug: "sevilla",
  cityName: "Sevilla",
  title: "SEO Local en Sevilla para Negocios | Aparecer en Google Maps | slocal.es",
  description:
    "¿Tu negocio en Sevilla no aparece en Google Maps? Posicionamos tu ficha y web para que tus clientes te encuentren primero. Desde 147€/mes + IVA.",
  heroImage: sevillaImg,
  heroSubtitle:
    "Si tienes un negocio en Sevilla y no apareces en Google Maps cuando te buscan, estás perdiendo clientes cada día. Gestionamos tu posicionamiento local para que eso cambie — desde 147€/mes, sin contratos.",
  whyTitle: "Por qué los negocios en Sevilla necesitan SEO local",
  whyParagraphs: [
    'Sevilla combina una economía local activa con un alto volumen de turismo, lo que genera búsquedas locales constantes durante todo el año. En barrios como Triana, Los Remedios, Nervión, Macarena o el Casco Antiguo, la competencia entre negocios del mismo sector es alta. Cuando alguien busca "fontanero en Triana", "fisioterapeuta en Nervión" o "empresa de reformas en Los Remedios", Google muestra tres negocios en el mapa. Los que están ahí reciben el 40% de todos los clics. Los que no están no existen para esa persona.',
    "En slocal.es gestionamos tu posicionamiento local en Sevilla desde 147€/mes — sin contratos, sin permanencia y con trato directo.",
  ],
  howSteps: [
    {
      n: "01",
      title: "Optimizamos tu ficha de Google Business Profile para Sevilla",
      body: "Configuramos categorías, descripción con keywords locales, fotos, horarios y zona de servicio por barrios y distritos de Sevilla.",
    },
    {
      n: "02",
      title: "Creamos contenido que posiciona en búsquedas de Sevilla",
      body: "Artículos y páginas optimizadas para las búsquedas que hacen tus clientes en Sevilla.",
    },
    {
      n: "03",
      title: "Seguimiento mensual de posiciones en Sevilla",
      body: "Cada mes ves exactamente qué posiciones has ganado en Google Maps en Sevilla.",
    },
  ],
  sectoresIntro: "Trabajamos con todo tipo de negocios locales en Sevilla.",
  sectores: sectoresFor("Sevilla"),
  faqs: [
    {
      q: "¿Cuánto tarda en posicionarse un negocio en Google en Sevilla?",
      a: "Entre el mes 2 y el mes 4 los primeros resultados son visibles. A partir del mes 6 el crecimiento se acelera.",
    },
    {
      q: "¿Funciona para cualquier tipo de negocio local en Sevilla?",
      a: "Sí. Fontaneros, fisioterapeutas, reformas, pintores, clínicas, entrenadores y cualquier negocio local en Sevilla.",
    },
    {
      q: "¿Qué diferencia hay entre SEO local y publicidad en Google?",
      a: "La publicidad te da visibilidad mientras pagas. El SEO local construye presencia orgánica que crece mes a mes sin coste por clic.",
    },
    {
      q: "¿Tengo que firmar un contrato largo?",
      a: "No. Sin contratos de permanencia. Cancelas cuando quieras.",
    },
  ],
  otrasCiudades: otherCities("sevilla"),
  ctaFinal: "¿Tu negocio en Sevilla no aparece cuando tus clientes te buscan en Google?",
  ctaButton: "Empezar en Sevilla →",
  whatsappMessage: "Hola, quiero posicionar mi negocio en Sevilla",
  localBusinessAreaServed: "Sevilla, España",
  localBusinessServiceArea: "Sevilla",
};

export const malagaConfig: CityLandingConfig = {
  citySlug: "malaga",
  cityName: "Málaga",
  title: "SEO Local en Málaga para Negocios | Aparecer en Google Maps | slocal.es",
  description:
    "¿Tu negocio en Málaga no aparece en Google Maps? Posicionamos tu ficha y web para que tus clientes te encuentren primero. Desde 147€/mes + IVA.",
  heroImage: malagaImg,
  heroSubtitle:
    "Si tienes un negocio en Málaga y no apareces en Google Maps cuando te buscan, estás perdiendo clientes cada día. Gestionamos tu posicionamiento local desde 147€/mes, sin contratos.",
  whyTitle: "Por qué los negocios en Málaga necesitan SEO local",
  whyParagraphs: [
    'Málaga es una ciudad en crecimiento constante, con uno de los mercados locales más activos del sur de España. El turismo y la llegada de nuevos residentes generan una demanda de servicios locales que se busca directamente en Google. En barrios como El Centro, La Malagueta, Pedregalejo, Huelin o Teatinos, los negocios compiten por aparecer en el mapa cuando alguien busca "fontanero en Málaga centro", "fisioterapeuta en Teatinos" o "reformas en Pedregalejo".',
    "En slocal.es gestionamos tu posicionamiento local en Málaga desde 147€/mes — sin contratos y con trato directo.",
  ],
  howSteps: standardSteps("Málaga"),
  sectoresIntro: "Trabajamos con todo tipo de negocios locales en Málaga.",
  sectores: sectoresFor("Málaga"),
  faqs: [
    {
      q: "¿Cuánto tarda en posicionarse un negocio en Málaga?",
      a: "Entre el mes 2 y el mes 4 los primeros resultados son visibles.",
    },
    {
      q: "¿Funciona para cualquier tipo de negocio en Málaga?",
      a: "Sí. Fontaneros, fisioterapeutas, reformas, pintores, clínicas, entrenadores y cualquier negocio local en Málaga.",
    },
    {
      q: "¿Tengo que firmar un contrato?",
      a: "No. Sin permanencia. Cancelas cuando quieras.",
    },
  ],
  otrasCiudades: otherCities("malaga"),
  ctaFinal: "¿Tu negocio en Málaga no aparece cuando tus clientes te buscan?",
  ctaButton: "Empezar en Málaga →",
  whatsappMessage: "Hola, quiero posicionar mi negocio en Málaga",
  localBusinessAreaServed: "Málaga, España",
  localBusinessServiceArea: "Málaga",
};

export const zaragozaConfig: CityLandingConfig = {
  citySlug: "zaragoza",
  cityName: "Zaragoza",
  title: "SEO Local en Zaragoza para Negocios | Aparecer en Google Maps | slocal.es",
  description:
    "¿Tu negocio en Zaragoza no aparece en Google Maps? Posicionamos tu ficha y web para que tus clientes te encuentren primero. Desde 147€/mes + IVA.",
  heroImage: zaragozaImg,
  heroSubtitle:
    "Si tienes un negocio en Zaragoza y no apareces en Google Maps, estás perdiendo clientes frente a tu competencia. Lo gestionamos por ti desde 147€/mes, sin contratos.",
  whyTitle: "Por qué los negocios en Zaragoza necesitan SEO local",
  whyParagraphs: [
    'Zaragoza es el quinto municipio más poblado de España con un mercado local activo y una competencia digital creciente. En barrios como el Casco Histórico, Actur, Las Fuentes, Delicias o El Rabal, los negocios que trabajan su posicionamiento en Google Maps reciben llamadas constantes. Cuando alguien busca "fontanero en Delicias", "fisioterapeuta en Actur" o "empresa de reformas en Zaragoza", Google muestra los tres primeros negocios en el mapa. Estar ahí marca la diferencia.',
    "En slocal.es gestionamos tu posicionamiento local en Zaragoza desde 147€/mes — sin intermediarios, sin contratos.",
  ],
  howSteps: standardSteps("Zaragoza"),
  sectoresIntro: "Trabajamos con todo tipo de negocios locales en Zaragoza.",
  sectores: sectoresFor("Zaragoza"),
  faqs: [
    {
      q: "¿Cuánto tarda en posicionarse un negocio en Zaragoza?",
      a: "Entre el mes 2 y el mes 4 los primeros resultados son visibles. En mercados menos competidos como Zaragoza los resultados suelen llegar antes que en Madrid o Barcelona.",
    },
    {
      q: "¿Funciona para cualquier negocio en Zaragoza?",
      a: "Sí. Fontaneros, fisioterapeutas, reformas, pintores, clínicas, entrenadores y cualquier negocio local.",
    },
    {
      q: "¿Tengo que firmar un contrato?",
      a: "No. Sin permanencia. Cancelas cuando quieras.",
    },
  ],
  otrasCiudades: otherCities("zaragoza"),
  ctaFinal: "¿Tu negocio en Zaragoza no aparece cuando tus clientes te buscan?",
  ctaButton: "Empezar en Zaragoza →",
  whatsappMessage: "Hola, quiero posicionar mi negocio en Zaragoza",
  localBusinessAreaServed: "Zaragoza, España",
  localBusinessServiceArea: "Zaragoza",
};

export const bilbaoConfig: CityLandingConfig = {
  citySlug: "bilbao",
  cityName: "Bilbao",
  title: "SEO Local en Bilbao para Negocios | Aparecer en Google Maps | slocal.es",
  description:
    "¿Tu negocio en Bilbao no aparece en Google Maps? Posicionamos tu ficha y web para que tus clientes te encuentren primero. Desde 147€/mes + IVA.",
  heroImage: bilbaoImg,
  heroSubtitle:
    "Si tienes un negocio en Bilbao y no apareces en Google Maps cuando te buscan, estás dejando clientes en manos de tu competencia. Lo resolvemos desde 147€/mes, sin contratos.",
  whyTitle: "Por qué los negocios en Bilbao necesitan SEO local",
  whyParagraphs: [
    "Bilbao tiene uno de los niveles de renta más altos de España y un mercado local con alta capacidad de gasto. En barrios como el Casco Viejo, Abando, Indautxu, Deusto o Begoña, los negocios de servicios compiten por aparecer en Google Maps cuando sus clientes los buscan. El bilingüismo castellano-euskera añade una capa adicional a las búsquedas locales del País Vasco.",
    'Cuando alguien busca "fontanero en Indautxu", "fisioterapeuta en Deusto" o "reformas en el Casco Viejo", Google muestra tres negocios en el mapa. En slocal.es gestionamos tu posicionamiento local en Bilbao desde 147€/mes, sin contratos y con trato directo.',
  ],
  howSteps: standardSteps("Bilbao"),
  sectoresIntro: "Trabajamos con todo tipo de negocios locales en Bilbao.",
  sectores: sectoresFor("Bilbao"),
  faqs: [
    {
      q: "¿Cuánto tarda en posicionarse un negocio en Bilbao?",
      a: "Entre el mes 2 y el mes 4. En mercados medianos como Bilbao los resultados suelen consolidarse más rápido que en las grandes capitales.",
    },
    {
      q: "¿Se trabaja el SEO en euskera?",
      a: "El servicio se centra en castellano. Si tu negocio necesita posicionarse también en euskera lo valoramos caso a caso.",
    },
    {
      q: "¿Funciona para cualquier negocio en Bilbao?",
      a: "Sí. Fontaneros, fisioterapeutas, reformas, pintores, clínicas, entrenadores y cualquier negocio local.",
    },
    {
      q: "¿Tengo que firmar un contrato?",
      a: "No. Sin permanencia. Cancelas cuando quieras.",
    },
  ],
  otrasCiudades: otherCities("bilbao"),
  ctaFinal: "¿Tu negocio en Bilbao no aparece cuando tus clientes te buscan?",
  ctaButton: "Empezar en Bilbao →",
  whatsappMessage: "Hola, quiero posicionar mi negocio en Bilbao",
  localBusinessAreaServed: "Bilbao, España",
  localBusinessServiceArea: "Bilbao",
};

export const murciaConfig: CityLandingConfig = {
  citySlug: "murcia",
  cityName: "Murcia",
  title: "SEO Local en Murcia para Negocios | Aparecer en Google Maps | slocal.es",
  description:
    "¿Tu negocio en Murcia no aparece en Google Maps? Posicionamos tu ficha y web para que tus clientes te encuentren primero. Desde 147€/mes + IVA.",
  heroImage: murciaImg,
  heroSubtitle:
    "Si tienes un negocio en Murcia y no apareces en Google Maps cuando te buscan, estás perdiendo clientes. Lo gestionamos por ti desde 147€/mes, sin contratos y con trato directo.",
  whyTitle: "Por qué los negocios en Murcia necesitan SEO local",
  whyParagraphs: [
    "Murcia es una ciudad en crecimiento con un mercado local activo y una competencia digital todavía menor que en las grandes capitales. Eso significa que los negocios que trabajen su posicionamiento en Google Maps ahora tienen una ventaja real sobre los que esperan. En barrios como el Centro, La Flota, El Carmen, Santa María de Gracia o El Infante, los clientes buscan servicios locales en Google a diario.",
    'Cuando alguien busca "fontanero en Murcia centro", "fisioterapeuta en La Flota" o "empresa de reformas en Murcia", Google muestra los tres primeros negocios en el mapa. En slocal.es te posicionamos ahí desde 147€/mes — antes de que tu competencia lo haga.',
  ],
  howSteps: standardSteps("Murcia"),
  sectoresIntro: "Trabajamos con todo tipo de negocios locales en Murcia.",
  sectores: sectoresFor("Murcia"),
  faqs: [
    {
      q: "¿Cuánto tarda en posicionarse un negocio en Murcia?",
      a: "En Murcia, con una competencia digital menor que en las grandes capitales, los primeros resultados visibles suelen aparecer antes — entre el mes 1 y el mes 3.",
    },
    {
      q: "¿Funciona para cualquier negocio en Murcia?",
      a: "Sí. Fontaneros, fisioterapeutas, reformas, pintores, clínicas, entrenadores y cualquier negocio local en Murcia.",
    },
    {
      q: "¿Tengo que firmar un contrato?",
      a: "No. Sin permanencia. Cancelas cuando quieras.",
    },
  ],
  otrasCiudades: otherCities("murcia"),
  ctaFinal: "¿Tu negocio en Murcia no aparece cuando tus clientes te buscan?",
  ctaButton: "Empezar en Murcia →",
  whatsappMessage: "Hola, quiero posicionar mi negocio en Murcia",
  localBusinessAreaServed: "Murcia, España",
  localBusinessServiceArea: "Murcia",
};
