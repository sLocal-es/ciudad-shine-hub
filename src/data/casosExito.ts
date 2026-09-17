import logoTei from "@/assets/casos/logo-tei.png";
import logoMva from "@/assets/casos/logo-mva.png";
import logoFontaneros from "@/assets/casos/logo-fontaneros.png";
import geogridRealAntes from "@/assets/casos/geogrid-real-antes.png.asset.json";
import geogridRealDespues from "@/assets/casos/geogrid-real-despues.png.asset.json";

export interface CaseStudy {
  id: string;
  slug: string;
  logo: string;
  name: string;
  cardHook: string;
  category: string;
  city: string;
  before: string;
  actions: string[];
  after: string;
  testimonial: string;
  geogridBefore?: string;
  geogridAfter?: string;
  geogridBeforeAlt?: string;
  geogridAfterAlt?: string;
  impactoPendiente?: boolean;
  impactoTexto?: string;
  quickStats?: { label: string; value: string }[];
}

export const cases: CaseStudy[] = [
  {
    id: "tei",
    slug: "tei",
    logo: logoTei,
    name: "Grupo TEI",
    cardHook: "Llamadas nuevas cada mes desde Google, sin tocar su web antigua",
    category: "Reformas",
    city: "Madrid",
    before:
      "Tenían una web antigua que apenas posicionaba y no tenían ficha de Google. Dependían de captar clientes solo por la web vieja.",
    actions: [
      "Creamos y verificamos su ficha de Google",
      "La configuramos para que apareciese en búsquedas de reformas en Madrid",
      "Activamos llamadas directas desde el perfil",
    ],
    after:
      "En 3 meses empezaron a recibir llamadas directas desde Google sin tocar la web vieja. Clientes nuevos que llegan diciendo 'os he visto en Google'.",
    testimonial:
      "En pocos meses empezamos a recibir llamadas sin depender de la web.",
    impactoPendiente: true,
  },
  {
    id: "fontaneros",
    slug: "fontaneros",
    logo: logoFontaneros,
    name: "Fontaneros Económicos",
    cardHook: "De ficha suspendida a llamadas y WhatsApp en mes y medio",
    category: "Fontanería",
    city: "Madrid",
    before:
      "Su ficha de Google estaba suspendida desde hacía meses. No aparecían en ningún sitio. Todo el negocio dependía de recomendaciones.",
    actions: [
      "Recuperamos la ficha suspendida y la verificamos otra vez",
      "Corregimos toda la información para cumplir las normas de Google",
      "Montamos web optimizada y empezamos a publicar contenido",
    ],
    after:
      "En mes y medio empezaron a recibir llamadas otra vez y mensajes por WhatsApp de clientes nuevos que les encontraron en Google.",
    testimonial:
      "Después de meses bloqueados, por fin volvemos a estar visibles y recibiendo llamadas.",
    impactoPendiente: true,
  },
  {
    id: "mva",
    slug: "mva",
    logo: logoMva,
    name: "MVA Fontanería",
    cardHook: "Clientes nuevos en 2 meses, sin tener aún página web",
    category: "Fontanería",
    city: "Madrid",
    before:
      "No tenían absolutamente nada en Google. Ni ficha, ni web. Solo boca a boca y eso limitaba muchísimo el crecimiento del negocio.",
    actions: [
      "Creamos la ficha de Google desde cero",
      "Configuramos servicios, zonas y categorías",
      "Activamos chat y llamadas directas",
    ],
    after:
      "En 2 meses empezaron a recibir contactos nuevos solo desde la ficha de Google, sin tener todavía página web. Clientes que antes no sabían que existían.",
    testimonial:
      "No esperábamos movimiento sin tener ni web.",
    impactoPendiente: true,
  },
  {
    id: "despacho-extranjeria-valencia",
    slug: "despacho-extranjeria-valencia",
    logo: "/placeholder.svg",
    name: "Despacho de Extranjería en Valencia",
    cardHook: "Más de 2.500€ al mes en negocio nuevo, sin publicidad",
    category: "Abogados",
    city: "Valencia",
    before:
      "La ficha de Google tenía una categoría genérica ('Abogados') en vez de especializarse en extranjería, sin servicios definidos ni categorías secundarias, y con los datos de contacto sin coincidir con la web. Para 'abogado extranjería Valencia' ni siquiera aparecían en la primera página de Google.",
    actions: [
      "Definimos la categoría principal como especialista en extranjería y añadimos categorías secundarias",
      "Hicimos un estudio de palabras clave para detectar qué servicios buscaba realmente la gente",
      "Corregimos los datos de contacto para que coincidieran ficha y web",
      "Optimizamos la ficha al completo: descripción, servicios y fotos",
    ],
    after:
      "En 3 meses pasaron de estar fuera del top 10 a estar entre los 2 y 5 primeros resultados en el centro de Valencia. Las vistas de su ficha crecieron un 42% de media cada mes frente al año anterior — no fue un pico puntual, fue una mejora sostenida — y las llamadas no han dejado de subir desde entonces.",
    testimonial:
      "Notamos un incremento notable en la demanda de servicios de extranjería.",
    geogridBefore: geogridRealAntes.url,
    geogridAfter: geogridRealDespues.url,
    geogridBeforeAlt:
      "Mapa de calor de posicionamiento en Google Maps para 'abogado extranjería Valencia' antes de la optimización SEO, con posiciones mayoritariamente entre 11 y 15 en la zona metropolitana",
    geogridAfterAlt:
      "Mapa de calor de posicionamiento en Google Maps para 'abogado extranjería Valencia' después de la optimización SEO, con posiciones mayoritariamente entre 3 y 10 en la zona metropolitana",
    quickStats: [
      { label: "Posición media", value: "13,2 → 4,9" },
      { label: "Vistas de ficha", value: "+42% al mes" },
      { label: "Tiempo", value: "3 meses" },
    ],
    impactoTexto:
      "Sin invertir un euro en publicidad, este despacho está generando más de 2.500€ al mes en negocio nuevo desde que le optimizamos la ficha — y es la cifra más baja, porque muchos de sus servicios superan los 1.300€ por caso.",
  },
  {
    id: "fontaneros-24-horas-valencia",
    slug: "fontaneros-24-horas-valencia",
    logo: "/placeholder.svg",
    name: "Fontaneros 24 Horas Valencia",
    cardHook: "Hasta 3.150€ facturados en 6 semanas, sin publicidad",
    category: "Fontanería",
    city: "Valencia",
    before:
      "No tenían ninguna presencia digital — ni ficha de Google ni página web. Todo el negocio dependía del boca a boca.",
    actions: [
      "Creamos su página web desde cero",
      "Configuramos y optimizamos su ficha de Google Business Profile",
      "Activamos llamadas, chat y clics a la web directamente desde el perfil",
    ],
    after:
      "En el primer mes completo, partiendo de cero, 753 personas vieron su ficha, recibieron 19 llamadas, 10 conversaciones por chat y 20 clics a la web. Su web ya empezó a posicionar en paralelo: en las primeras semanas acumula más de 4.200 impresiones y 32 clics orgánicos en Google Search Console.",
    testimonial: "",
    impactoTexto:
      "Sin invertir un euro en publicidad, en sus primeras 6 semanas ha facturado hasta 3.150€ gracias a las 28 llamadas que le trajo su ficha de Google.",
  },
];

export const getCaseBySlug = (slug: string) => cases.find((c) => c.slug === slug);
