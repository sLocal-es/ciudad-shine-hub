import logoTei from "@/assets/casos/logo-tei.png";
import logoViviane from "@/assets/casos/logo-viviane.png";
import logoMva from "@/assets/casos/logo-mva.png";
import logoFontaneros from "@/assets/casos/logo-fontaneros.png";

export interface MonthlyMetric {
  month: string;
  calls: number;
  chatClicks: number;
  directionRequests: number;
  websiteClicks: number;
  profileViews: number;
  profileViewsGrowth: string;
}

export interface CaseStudy {
  id: string;
  logo: string;
  name: string;
  category: string;
  city: string;
  before: string;
  actions: string[];
  after: string;
  testimonial: string;
  monthlyMetrics?: MonthlyMetric[];
}

export const cases: CaseStudy[] = [
  {
    id: "viviane",
    logo: logoViviane,
    name: "Viviane Custodio",
    category: "Psicóloga",
    city: "Valencia",
    before:
      "No tenía presencia en Google. Solo aparecía en directorios y dependía del boca a boca. Si alguien la buscaba directamente, casi no la encontraba.",
    actions: [
      "Reactivamos su ficha de Google desde cero",
      "Configuramos sus servicios y horarios",
      "Subimos fotos profesionales y empezamos a publicar",
    ],
    after:
      "En el segundo mes ya empezó a recibir llamadas directas desde Google sin pagar publicidad. Pacientes nuevos que la encontraron buscando psicóloga en su zona.",
    testimonial:
      "La ficha estaba completamente parada y ahora vuelve a generar contactos.",
  },
  {
    id: "tei",
    logo: logoTei,
    name: "Grupo TEI",
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
  },
  {
    id: "fontaneros",
    logo: logoFontaneros,
    name: "Fontaneros Económicos",
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
  },
  {
    id: "mva",
    logo: logoMva,
    name: "MVA Fontanería",
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
  },
  {
    id: "despacho-extranjeria-valencia",
    logo: "/placeholder.svg",
    name: "Despacho de Extranjería en Valencia",
    category: "Abogados",
    city: "Valencia",
    before:
      "La ficha de Google tenía una categoría genérica ('Abogados') en vez de especializarse en extranjería, sin servicios definidos ni categorías secundarias, y con los datos de contacto sin coincidir con la web. Para 'abogado extranjería Valencia' estaban fuera del top 10 de Google, con una posición media de 12-15.",
    actions: [
      "Definimos la categoría principal como especialista en extranjería y añadimos categorías secundarias",
      "Hicimos un estudio de palabras clave para detectar qué servicios buscaba realmente la gente",
      "Corregimos los datos de contacto para que coincidieran ficha y web",
      "Optimizamos la ficha al completo: descripción, servicios y fotos",
    ],
    after:
      "En 3 meses pasaron de estar fuera del top 10 a estar entre las posiciones 2-5 en el centro de Valencia (radio de 5 km). Las llamadas subieron cada mes de forma sostenida y las visitas a la ficha crecieron un 42% de media frente al año anterior — no fue un pico puntual, sino una mejora constante mes a mes.",
    testimonial:
      "Notamos un incremento notable en la demanda de servicios de extranjería.",
    monthlyMetrics: [
      { month: "Junio", calls: 52, chatClicks: 6, directionRequests: 93, websiteClicks: 76, profileViews: 3147, profileViewsGrowth: "+42,3%" },
      { month: "Julio", calls: 56, chatClicks: 6, directionRequests: 73, websiteClicks: 71, profileViews: 3369, profileViewsGrowth: "+44,4%" },
      { month: "Agosto", calls: 59, chatClicks: 22, directionRequests: 96, websiteClicks: 71, profileViews: 3512, profileViewsGrowth: "+42,1%" },
    ],
  },
];

export const getCaseBySlug = (slug: string) => cases.find((c) => c.id === slug);
