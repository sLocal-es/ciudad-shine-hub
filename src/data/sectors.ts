export interface SectorData {
  slug: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  pillBadge: string;
  painSubtitle: string;
  painCards: { icon: string; text: string }[];
  mockupResult: string;
  analyticsLine1: string;
  analyticsLine2: string;
  sectorNote: string;
  ctaWord: string; // clientes / pacientes / alumnos
  gbpCard: {
    title: string;
    body: string;
  };
  webCard: {
    title: string;
    body: string;
  };
  reportCard: string; // "clientes" / "pacientes" / "alumnos" word for report card
  faqs: { q: string; a: string }[];
  relatedLabel: string; // short label for related sector cards
  relatedDesc: string; // one-line desc for related cards
}

export const sectors: SectorData[] = [
  {
    slug: "mas-clientes-para-fontaneros",
    metaTitle: "Más Clientes para Fontaneros | Aparece en Google en tu Zona | slocal.es",
    metaDesc: "¿Eres fontanero y quieres más llamadas? Te ponemos en Google Maps y en los primeros resultados de tu ciudad. Sin agencias. Desde 197€.",
    h1: "Más Clientes para tu Negocio de Fontanería desde Google",
    pillBadge: "Para fontaneros",
    painSubtitle: "Cuando una tubería revienta, el cliente busca en Google y llama al primero que aparece. Si no eres tú, es dinero perdido.",
    painCards: [
      { icon: "🔍", text: "Tu ficha de Google lleva meses sin tocar y sin fotos recientes" },
      { icon: "📍", text: "Apareces en Google Maps pero en la posición 8 — nadie llega tan abajo" },
      { icon: "📞", text: "Tu competencia recibe llamadas de Google cada día. Tú no sabes cuántas pierdes." },
    ],
    mockupResult: "Fontanero Urgencias [Ciudad] | Disponible 24h",
    analyticsLine1: "Llamadas desde Google: 28/mes ↑+43%",
    analyticsLine2: "Posición 'fontanero urgencias': #2",
    sectorNote: "Ideal para fontaneros autónomos y pequeñas empresas de fontanería.",
    ctaWord: "clientes",
    gbpCard: {
      title: "Tu ficha de Google optimizada para fontanería",
      body: "Configuramos categorías de urgencias, zona de servicio y horario 24h para que aparezcas cuando alguien necesita fontanero ahora mismo.",
    },
    webCard: {
      title: "Una web con página por servicio y zona",
      body: "Página para averías, otra para instalaciones, otra para urgencias — y una por cada zona donde trabajas. Cada página posiciona para su propia búsqueda.",
    },
    reportCard: "clientes",
    faqs: [
      { q: "¿Vale la pena para un fontanero autónomo?", a: "Especialmente para autónomos. Una llamada diaria extra desde Google puede suponer varios miles de euros al mes. El sistema se recupera con dos o tres trabajos." },
      { q: "¿Necesito web si ya tengo ficha de Google?", a: "La ficha es el primer paso pero tiene límites. Una web con páginas por servicio y zona multiplica los términos por los que puedes aparecer." },
      { q: "¿Cómo compito con fontaneros grandes que llevan años en Google?", a: "Con posicionamiento local, el tamaño importa menos que la relevancia. Una ficha bien optimizada con reseñas recientes puede superar a empresas grandes que no cuidan su presencia digital." },
      { q: "¿Funciona para urgencias de fontanería?", a: "Sí, y es especialmente valioso. Las búsquedas de urgencia tienen alta intención de compra — el cliente llama al primero que aparece. Optimizamos tu ficha para esas búsquedas." },
      { q: "¿Cuándo empieza a sonar el teléfono?", a: "Los primeros contactos desde Google suelen llegar entre el mes 2 y el mes 3. En ciudades medianas con menos competencia puede ser antes." },
    ],
    relatedLabel: "Fontaneros",
    relatedDesc: "Más llamadas de urgencias y reparaciones desde Google.",
  },
  {
    slug: "mas-clientes-para-reformas",
    metaTitle: "Más Clientes para Empresas de Reformas | Aparece en Google | slocal.es",
    metaDesc: "Consigue más solicitudes de presupuesto para tu empresa de reformas desde Google. Ficha, web y posicionamiento local. Sin permanencia en el Nivel 1.",
    h1: "Más Presupuestos para tu Empresa de Reformas desde Google",
    pillBadge: "Para reformas",
    painSubtitle: "El cliente que busca 'empresa de reformas en [ciudad]' ya tiene intención de contratar. Si no apareces, ese presupuesto se lo lleva otro.",
    painCards: [
      { icon: "🔍", text: "Tu empresa no aparece cuando buscan 'reformas en [ciudad]'" },
      { icon: "🏢", text: "Dependes del boca a boca — irregular e incontrolable" },
      { icon: "📋", text: "Tu competencia tiene web y ficha actualizadas. Tú no." },
    ],
    mockupResult: "Empresa de Reformas en [Ciudad] | Presupuesto Gratis",
    analyticsLine1: "Solicitudes de presupuesto: 14/mes ↑+38%",
    analyticsLine2: "Posición 'reformas [ciudad]': #3",
    sectorNote: "Para empresas de reformas integrales, cocinas, baños y fachadas.",
    ctaWord: "clientes",
    gbpCard: {
      title: "Tu ficha de Google optimizada para reformas",
      body: "Categorías por tipo de reforma, zona de trabajo, fotos de proyectos terminados y descripción que transmite confianza antes de pedir presupuesto.",
    },
    webCard: {
      title: "Una web con página por servicio y zona",
      body: "Página por tipo de reforma (cocinas, baños, integrales) y por zona. El cliente que busca 'reforma de baño en [barrio]' llega directamente.",
    },
    reportCard: "clientes",
    faqs: [
      { q: "¿Puede una empresa de reformas pequeña aparecer antes que las grandes?", a: "Sí. Las búsquedas de reformas tienen mucho volumen local y muchas empresas grandes no trabajan bien el posicionamiento local. Es un mercado con oportunidad real." },
      { q: "¿Cómo consigo más solicitudes de presupuesto desde Google?", a: "Con páginas específicas para cada tipo de reforma y cada zona donde trabajas. Cuando alguien busca 'reforma de cocina en [barrio]', tu página aparece directamente." },
      { q: "¿Funciona si solo hago reformas en una zona concreta?", a: "Es perfecto para eso. Cuanto más acotada la zona, más fácil posicionar con relevancia." },
      { q: "¿Necesito muchas reseñas para aparecer bien posicionado?", a: "Las reseñas ayudan pero no son el único factor. Una ficha bien configurada puede posicionar bien aunque estés empezando. Las reseñas aceleran y consolidan." },
      { q: "¿Cuántos presupuestos extra puedo esperar?", a: "Clientes similares en reformas ven entre 8 y 20 solicitudes de presupuesto mensuales adicionales a partir del mes 4-6." },
    ],
    relatedLabel: "Reformas",
    relatedDesc: "Más solicitudes de presupuesto para tu empresa de reformas.",
  },
  {
    slug: "mas-clientes-para-pintores",
    metaTitle: "Más Clientes para Pintores | Aparece en Google en tu Ciudad | slocal.es",
    metaDesc: "¿Eres pintor y quieres llenar tu agenda desde Google? Ficha optimizada, web y posicionamiento local. Sin agencias, sin humo.",
    h1: "Más Clientes para tu Negocio de Pintura desde Google",
    pillBadge: "Para pintores",
    painSubtitle: "La mayoría de pintores vive del boca a boca. El SEO local añade una segunda fuente constante: clientes que buscan pintor en Google cada día en tu ciudad.",
    painCards: [
      { icon: "🔍", text: "Cuando buscan 'pintor en [ciudad]' no apareces entre los primeros" },
      { icon: "📅", text: "Tu agenda tiene huecos que podrían llenarse con clientes de Google" },
      { icon: "🖼", text: "Tu ficha de Google no tiene fotos de trabajos terminados" },
    ],
    mockupResult: "Pintor en [Ciudad] | Pisos, Locales y Fachadas",
    analyticsLine1: "Contactos nuevos/mes: 19 ↑+52%",
    analyticsLine2: "Posición 'pintor piso [ciudad]': #2",
    sectorNote: "Para pintores autónomos que trabajan en viviendas, locales y exteriores.",
    ctaWord: "clientes",
    gbpCard: {
      title: "Tu ficha de Google optimizada para pintores",
      body: "Fotos de trabajos reales, categoría correcta, zona de servicio y descripción con los tipos de pintura que haces.",
    },
    webCard: {
      title: "Una web con página por servicio y zona",
      body: "Página por tipo de trabajo (pisos, locales, fachadas) y por municipio. Más páginas, más búsquedas capturadas.",
    },
    reportCard: "clientes",
    faqs: [
      { q: "¿Tiene sentido para un pintor autónomo?", a: "Mucho. La mayoría de pintores dependen del boca a boca. El posicionamiento local añade una fuente constante de contactos nuevos cada mes." },
      { q: "¿Puedo posicionar para varios tipos de pintura?", a: "Sí. Creamos una página por cada servicio: pisos, fachadas, locales, pintura decorativa. Cada página posiciona para sus propias búsquedas." },
      { q: "¿Funciona si trabajo en varios municipios?", a: "Perfectamente. Creamos páginas para cada zona. Un pintor que trabaja en tres municipios puede tener tres páginas posicionando de forma independiente." },
      { q: "¿Cuándo llega el primer contacto desde Google?", a: "Los primeros contactos suelen aparecer entre el mes 2 y el mes 3." },
      { q: "¿Necesito tener muchas fotos de trabajos?", a: "Cuantas más fotos de trabajos terminados, mejor. Si no tienes, empezamos con lo que hay y vamos añadiendo. No es un bloqueante para empezar." },
    ],
    relatedLabel: "Pintores",
    relatedDesc: "Llena tu agenda de pintura con clientes de Google.",
  },
  {
    slug: "mas-pacientes-para-clinicas",
    metaTitle: "Más Pacientes para Clínicas | Aparecer en Google Maps | slocal.es",
    metaDesc: "Consigue más pacientes para tu clínica dental, médica o veterinaria desde Google. Ficha, web y posicionamiento local. Sin agencias.",
    h1: "Más Pacientes para tu Clínica desde Google",
    pillBadge: "Para clínicas",
    painSubtitle: "Un paciente que busca 'clínica dental en [ciudad]' ya está listo para reservar cita. Si tu clínica no aparece, esa cita la agenda tu competencia.",
    painCards: [
      { icon: "🔍", text: "Grandes cadenas de clínicas te superan en Google Maps aunque estés más cerca" },
      { icon: "⭐", text: "Tu ficha tiene pocas reseñas y Google te penaliza en visibilidad" },
      { icon: "📱", text: "Tu web no está adaptada para que el paciente reserve cita fácilmente" },
    ],
    mockupResult: "Clínica Dental en [Ciudad] | Primeras Visitas Sin Espera",
    analyticsLine1: "Citas reservadas nuevas: 34/mes ↑+61%",
    analyticsLine2: "Posición 'clínica dental [ciudad]': #1",
    sectorNote: "Para clínicas dentales, médicas, veterinarias y centros de salud privados.",
    ctaWord: "pacientes",
    gbpCard: {
      title: "Tu ficha de Google optimizada para clínicas",
      body: "Especialidades como categorías, horario de citas, fotos del centro y descripción por tipo de tratamiento.",
    },
    webCard: {
      title: "Una web con página por servicio y zona",
      body: "Página por especialidad y por zona. La clínica dental que tiene página para 'ortodoncia en [barrio]' aparece donde otros no están.",
    },
    reportCard: "pacientes",
    faqs: [
      { q: "¿Cómo puede una clínica pequeña aparecer antes que las grandes cadenas?", a: "Google Maps valora la relevancia y proximidad sobre el tamaño. Una clínica pequeña con ficha optimizada y reseñas recientes puede superar a grandes cadenas en búsquedas locales concretas." },
      { q: "¿Las reseñas son importantes para el posicionamiento de una clínica?", a: "Son uno de los factores más importantes. Los pacientes confían en reseñas antes de elegir clínica. Más reseñas recientes y positivas equivale a mejor posición en Google Maps." },
      { q: "¿Funciona igual para clínicas dentales, médicas y veterinarias?", a: "Sí, con adaptaciones. Cada especialidad tiene sus propias búsquedas. Adaptamos la estrategia según el tipo de clínica." },
      { q: "¿Puedo posicionar mi clínica en varios barrios?", a: "Sí. Con páginas por especialidad y zona tu clínica puede aparecer tanto en el barrio donde está como en zonas cercanas con demanda." },
      { q: "¿Cómo afecta al número de citas?", a: "Clientes en el sector salud ven incrementos del 30-50% en contactos nuevos en 6 meses." },
    ],
    relatedLabel: "Clínicas",
    relatedDesc: "Más pacientes para tu clínica dental, médica o veterinaria.",
  },
  {
    slug: "mas-pacientes-para-fisioterapeutas",
    metaTitle: "Más Pacientes para Fisioterapeutas | Google Maps y Web Local | slocal.es",
    metaDesc: "¿Eres fisioterapeuta y quieres más pacientes? Te posicionamos en Google cuando alguien busca fisio en tu ciudad. Ficha + web + posicionamiento.",
    h1: "Más Pacientes para tu Clínica de Fisioterapia desde Google",
    pillBadge: "Para fisioterapeutas",
    painSubtitle: "Cada día hay personas en tu ciudad buscando 'fisioterapeuta cerca'. ¿Apareces tú o aparece otro?",
    painCards: [
      { icon: "🔍", text: "Buscas 'fisioterapeuta en [ciudad]' y no apareces entre los primeros" },
      { icon: "🏥", text: "Dependes de médicos que te deriven pacientes — sin control propio" },
      { icon: "📍", text: "Tu ficha de Google no refleja todas las especialidades que tratas" },
    ],
    mockupResult: "Fisioterapeuta en [Ciudad] | Cita Disponible Esta Semana",
    analyticsLine1: "Nuevos pacientes/mes: 22 ↑+48%",
    analyticsLine2: "Posición 'fisioterapeuta [ciudad]': #3",
    sectorNote: "Para fisioterapeutas autónomos y clínicas de fisioterapia con uno o varios profesionales.",
    ctaWord: "pacientes",
    gbpCard: {
      title: "Tu ficha de Google optimizada para fisioterapia",
      body: "Especialidades de fisioterapia, sistema de cita, fotos de la clínica y zona de cobertura bien definida.",
    },
    webCard: {
      title: "Una web con página por servicio y zona",
      body: "Página por especialidad (deportiva, suelo pélvico, neurológica) y por zona de la ciudad.",
    },
    reportCard: "pacientes",
    faqs: [
      { q: "¿Es rentable para una clínica de fisio pequeña?", a: "Especialmente rentable. Una consulta nueva puede valer 200-400€ en sesiones. El sistema se amortiza con pocos pacientes nuevos al mes." },
      { q: "¿Cómo posiciono para distintas especialidades?", a: "Con páginas específicas por especialidad: deportiva, suelo pélvico, neurológica. Cada página posiciona para su propia demanda." },
      { q: "¿Necesito web si ya estoy en directorios médicos?", a: "Los directorios tienen su valor pero no puedes controlarlos ni optimizarlos. Tu propia web posiciona de forma independiente y te da control total." },
      { q: "¿Puedo empezar si acabo de abrir la clínica?", a: "Es el mejor momento. Empezar desde el principio significa que al mes 6 ya tienes posiciones consolidadas. Esperar cuesta visibilidad." },
      { q: "¿Los pacientes buscan fisioterapeuta en Google?", a: "Sí, cada vez más. Búsquedas como 'fisioterapeuta cerca' o 'fisio para cervicales en [ciudad]' tienen miles de búsquedas mensuales en ciudades medianas." },
    ],
    relatedLabel: "Fisioterapeutas",
    relatedDesc: "Más pacientes para tu clínica de fisioterapia.",
  },
  {
    slug: "mas-clientes-entrenador-personal",
    metaTitle: "Más Clientes para Entrenadores Personales | Google y Web Local | slocal.es",
    metaDesc: "Llena tu agenda como entrenador personal sin depender del boca a boca. Ficha de Google, web y posicionamiento local. Desde 197€.",
    h1: "Más Clientes para tu Negocio como Entrenador Personal",
    pillBadge: "Para entrenadores personales",
    painSubtitle: "El entrenador personal que aparece primero en Google en su ciudad no tiene problema de clientes. El que no aparece, sobrevive del boca a boca — que es inestable.",
    painCards: [
      { icon: "🔍", text: "No apareces cuando buscan 'entrenador personal en [ciudad]'" },
      { icon: "📲", text: "Dependes de redes sociales para conseguir clientes — irregular y agotador" },
      { icon: "🎯", text: "No tienes web propia donde el cliente pueda conocerte y contactarte" },
    ],
    mockupResult: "Entrenador Personal en [Ciudad] | Primera Sesión Gratis",
    analyticsLine1: "Consultas nuevas/mes: 17 ↑+44%",
    analyticsLine2: "Posición 'entrenador personal [ciudad]': #2",
    sectorNote: "Para entrenadores personales a domicilio, en gimnasio o al aire libre.",
    ctaWord: "clientes",
    gbpCard: {
      title: "Tu ficha de Google optimizada para entrenadores",
      body: "Modalidad de entrenamiento, zona de trabajo, fotos de sesiones y descripción que transmite tu método.",
    },
    webCard: {
      title: "Una web con página por servicio y zona",
      body: "Página por modalidad (domicilio, parque, online) y por zona. Capta clientes según cómo prefieren entrenar.",
    },
    reportCard: "clientes",
    faqs: [
      { q: "¿Funciona para entrenadores que trabajan a domicilio o al aire libre?", a: "Sí. Posicionamos para 'entrenador personal a domicilio [ciudad]' o 'entrenamiento en parque [ciudad]'. La modalidad se refleja en la estrategia." },
      { q: "¿Necesito muchos seguidores en redes para que funcione?", a: "No. El posicionamiento en Google es completamente independiente de redes sociales. No necesitas seguidores ni publicaciones." },
      { q: "¿Y si doy clases online además de presenciales?", a: "Creamos páginas diferenciadas para cada modalidad capturando búsquedas distintas." },
      { q: "¿Cuántos clientes nuevos puedo esperar de Google?", a: "Entrenadores con el sistema activo ven entre 5 y 15 consultas nuevas mensuales desde Google a partir del mes 4." },
      { q: "¿Tiene sentido si ya tengo la agenda llena?", a: "Si la tienes llena por boca a boca, el día que eso flojee no tendrás red. El posicionamiento en Google es esa red — mejor tenerla antes de necesitarla." },
    ],
    relatedLabel: "Entrenadores",
    relatedDesc: "Llena tu agenda como entrenador personal desde Google.",
  },
  {
    slug: "mas-alumnos-para-yoga",
    metaTitle: "Más Alumnos para tu Estudio de Yoga | Aparecer en Google | slocal.es",
    metaDesc: "Consigue nuevos alumnos para tu estudio o clases de yoga desde Google. Ficha optimizada, web y posicionamiento local. Sin agencias.",
    h1: "Más Alumnos para tu Estudio de Yoga desde Google",
    pillBadge: "Para estudios de yoga",
    painSubtitle: "Hay personas en tu ciudad buscando 'clases de yoga en [ciudad]' ahora mismo. Si tu estudio no aparece entre los primeros, esos alumnos se apuntan a otro sitio.",
    painCards: [
      { icon: "🔍", text: "Grandes gimnasios con yoga te tapan en Google aunque seas más especializado" },
      { icon: "📍", text: "Tu ficha no refleja los estilos de yoga ni los horarios actualizados" },
      { icon: "🌐", text: "No tienes web propia — dependes de directorios que no controlas" },
    ],
    mockupResult: "Clases de Yoga en [Ciudad] | Todos los Niveles",
    analyticsLine1: "Alumnos nuevos/mes: 11 ↑+37%",
    analyticsLine2: "Posición 'clases yoga [ciudad]': #1",
    sectorNote: "Para profesores de yoga independientes y estudios con clases presenciales.",
    ctaWord: "alumnos",
    gbpCard: {
      title: "Tu ficha de Google optimizada para yoga",
      body: "Estilos de yoga, horarios de clases, fotos del espacio y descripción por tipo de alumno al que te diriges.",
    },
    webCard: {
      title: "Una web con página por servicio y zona",
      body: "Página por estilo (hatha, vinyasa, prenatal) y por zona. Captura búsquedas específicas que los grandes no trabajan.",
    },
    reportCard: "alumnos",
    faqs: [
      { q: "¿Funciona para profesores sin estudio propio?", a: "Sí. Posicionamos para 'clases de yoga a domicilio [ciudad]' o el espacio donde impartes. No necesitas local propio." },
      { q: "¿Cómo compito con gimnasios que tienen yoga?", a: "El posicionamiento local favorece la especialización. Un estudio de yoga específico con buenas reseñas puede aparecer antes que un gimnasio genérico para búsquedas como 'yoga restaurativo [ciudad]'." },
      { q: "¿Puedo posicionar para distintos estilos de yoga?", a: "Sí. Creamos páginas para cada estilo: hatha, vinyasa, yoga prenatal, yoga para mayores. Cada página captura su propia demanda." },
      { q: "¿Cuándo empiezo a ver alumnos nuevos desde Google?", a: "Los primeros contactos suelen llegar entre el mes 2 y el mes 3. La base de alumnos estable se construye en 4-6 meses." },
      { q: "¿Sirve si mis clases son estacionales o temporales?", a: "Sí, aunque el SEO es más efectivo con actividad continua. Si tienes temporadas, podemos preparar la visibilidad con antelación para que cuando abras ya estés posicionado." },
    ],
    relatedLabel: "Yoga",
    relatedDesc: "Consigue nuevos alumnos para tu estudio de yoga.",
  },
];
