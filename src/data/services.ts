export interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  subtitle: string;
  imagePlaceholder: string;
  explainerH2: string;
  explainerText: string[];
  howCards: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "aparecer-en-google-maps",
    title: "Aparecer en Google Maps",
    metaTitle: "Cómo Aparecer en Google Maps con Tu Negocio | slocal.es",
    metaDesc: "Haz que tu negocio aparezca en Google Maps cuando tus clientes te buscan. Sistema de visibilidad local sin agencias. Desde €150/mes.",
    h1: "Cómo Aparecer en Google Maps con Tu Negocio Local",
    subtitle: "Si alguien busca tu servicio en Google Maps y no te encuentra, estás perdiendo clientes cada día. Nosotros lo solucionamos.",
    imagePlaceholder: "FOTO: pantalla móvil con Google Maps y negocio destacado",
    explainerH2: "¿Por qué tu negocio no aparece en Google Maps?",
    explainerText: [
      "Google Maps muestra los negocios que considera más relevantes para cada búsqueda. Si tu negocio no aparece, no es porque Google no sepa que existes — es porque tu ficha no está optimizada para competir. Categorías incorrectas, descripciones vacías, fotos antiguas o inexistentes, horarios sin actualizar… cada detalle cuenta.",
      "El algoritmo de Google Maps prioriza tres factores: relevancia, distancia y prominencia. La distancia no la puedes controlar, pero la relevancia y la prominencia sí. Una ficha completa, con reseñas recientes y una web que la respalde, es lo que necesitas para aparecer en las primeras posiciones del mapa.",
      "Muchos negocios crean su ficha de Google y la abandonan. Eso es peor que no tenerla, porque Google interpreta la inactividad como falta de relevancia. Un negocio que actualiza su ficha regularmente, responde reseñas y mantiene información coherente entre su web y su perfil tiene muchas más probabilidades de aparecer en el pack local de Google Maps."
    ],
    howCards: [
      { title: "Optimizamos tu ficha de Google completa", body: "Revisamos y configuramos cada campo de tu Google Business Profile: categorías, atributos, descripción, fotos, horarios, zona de servicio. Todo lo que Google necesita para mostrarte en el mapa." },
      { title: "Creamos coherencia web-ficha", body: "Google cruza la información de tu ficha con tu web. Si hay inconsistencias, te penaliza. Nos aseguramos de que tu nombre, dirección, teléfono y servicios coincidan en todas partes." },
      { title: "Seguimiento mensual de posiciones en Maps", body: "Cada mes te mostramos en qué posición apareces en Google Maps para las búsquedas más importantes de tu negocio. Sin tecnicismos, con datos claros." },
    ],
    faqs: [
      { q: "¿Cómo puedo aparecer en Google Maps con mi negocio?", a: "Necesitas crear y verificar tu ficha de Google Business Profile, optimizarla con toda la información relevante y mantenerla activa. Nosotros nos encargamos de todo el proceso para que tú no tengas que preocuparte." },
      { q: "¿Cuánto tarda en aparecer mi negocio en Google Maps?", a: "La verificación de la ficha puede tardar entre 1 y 3 semanas. Una vez verificada, las mejoras de posición empiezan a notarse entre el mes 2 y el mes 4, dependiendo de la competencia en tu zona." },
      { q: "¿Por qué mi negocio no aparece en Google Maps aunque esté registrado?", a: "Tener una ficha creada no garantiza visibilidad. Si está incompleta, sin reseñas o con información desactualizada, Google la considera irrelevante. La optimización continua es lo que marca la diferencia." },
      { q: "¿Qué información necesita mi ficha para aparecer bien posicionado?", a: "Categorías correctas, descripción con palabras clave, fotos reales y recientes, horarios actualizados, zona de servicio definida y reseñas con respuestas. Todo esto influye en tu posición." },
      { q: "¿Las reseñas de Google Maps afectan al posicionamiento?", a: "Sí, son uno de los factores más importantes. La cantidad, la frecuencia y la calidad de las reseñas influyen directamente en tu posición en el mapa. Responder a cada reseña también cuenta." },
    ],
  },
  {
    slug: "seo-para-negocios-locales",
    title: "SEO para Negocios Locales",
    metaTitle: "SEO para Negocios Locales en España | slocal.es",
    metaDesc: "Posiciona tu negocio local en Google con un sistema de SEO que funciona mes a mes. Sin agencias, sin humo. Desde €150/mes.",
    h1: "SEO para Negocios Locales: Cómo Posicionarse en Google",
    subtitle: "El SEO local es la forma más rentable de atraer clientes a tu negocio. Nosotros lo convertimos en un sistema que funciona solo.",
    imagePlaceholder: "FOTO: resultados de búsqueda Google en pantalla",
    explainerH2: "¿Qué es el SEO local y por qué tu negocio lo necesita?",
    explainerText: [
      "El SEO local es el conjunto de técnicas que hacen que tu negocio aparezca en Google cuando alguien busca un servicio en tu ciudad o zona. No se trata de estar en internet por estar — se trata de aparecer exactamente cuando un cliente potencial te necesita. 'Fontanero en Valencia', 'clínica dental cerca de mí', 'taller mecánico Sevilla' — esas son las búsquedas que generan clientes reales.",
      "A diferencia de la publicidad, el SEO local no desaparece cuando dejas de pagar. Es un activo que se construye mes a mes: cada artículo publicado, cada página optimizada y cada reseña obtenida suma a tu autoridad en Google. Al principio los resultados son graduales, pero a partir del mes 4-6 la curva de crecimiento se acelera.",
      "El problema es que la mayoría de negocios locales no tienen ni el tiempo ni el conocimiento para hacer SEO. Por eso creamos slocal.es: un sistema que se encarga de todo — desde la ficha de Google hasta la web y el contenido — para que tú puedas centrarte en tu negocio mientras Google trabaja para ti."
    ],
    howCards: [
      { title: "Analizamos tu mercado local", body: "Identificamos las búsquedas que hacen tus clientes potenciales, quién es tu competencia en Google y qué oportunidades tienes de posicionarte rápido en tu ciudad." },
      { title: "Creamos el contenido que posiciona", body: "Páginas de servicio, artículos de blog y contenido optimizado para las búsquedas que importan. Todo pensado para que Google te considere la mejor respuesta local." },
      { title: "Medimos y optimizamos cada mes", body: "No publicamos y olvidamos. Cada mes revisamos posiciones, ajustamos estrategia y te informamos de los avances con datos claros y comprensibles." },
    ],
    faqs: [
      { q: "¿Qué es el SEO local y para qué sirve a mi negocio?", a: "El SEO local optimiza tu presencia en Google para que aparezcas cuando alguien busca servicios como los tuyos en tu ciudad. Sirve para atraer clientes que ya están buscando lo que ofreces." },
      { q: "¿Cuánto tarda en dar resultados el SEO local?", a: "Los primeros resultados se ven entre el mes 2 y el 4. A partir del mes 6, las posiciones se consolidan y el tráfico crece de forma sostenida. Es una inversión a medio plazo, no un gasto puntual." },
      { q: "¿Puede una pequeña empresa posicionarse en Google?", a: "Sí. De hecho, Google favorece a los negocios locales en las búsquedas con intención geográfica. Un negocio pequeño bien optimizado puede superar a grandes cadenas en búsquedas locales." },
      { q: "¿Necesito una web para hacer SEO local?", a: "Sí, es fundamental. La ficha de Google te da visibilidad en Maps, pero una web optimizada es lo que te posiciona en los resultados orgánicos. Con el setup inicial ya incluimos la creación de la web." },
      { q: "¿En qué se diferencia el SEO local del SEO normal?", a: "El SEO local se centra en posicionarte para búsquedas con intención geográfica: 'servicio + ciudad'. Incluye la optimización de Google Business Profile, contenido local y señales de relevancia geográfica." },
    ],
  },
  {
    slug: "ficha-google-mi-negocio",
    title: "Ficha de Google Mi Negocio",
    metaTitle: "Ficha de Google Mi Negocio | Optimización Google Business Profile | slocal.es",
    metaDesc: "Optimiza tu ficha de Google Mi Negocio para atraer más clientes. Configuración profesional de tu Google Business Profile. Desde €150/mes.",
    h1: "Ficha de Google Mi Negocio: Cómo Atraer Más Clientes con ella",
    subtitle: "Tu ficha de Google es tu escaparate digital. Si no está optimizada, estás perdiendo clientes que te buscan cada día.",
    imagePlaceholder: "FOTO: ficha de negocio en Google, pantalla ordenador",
    explainerH2: "¿Por qué tu ficha de Google no te está trayendo clientes?",
    explainerText: [
      "Google Mi Negocio — ahora llamado Google Business Profile — es la herramienta gratuita de Google que permite a los negocios locales aparecer en Google Maps y en los resultados de búsqueda local. Es tu tarjeta de visita digital: lo primero que ven tus clientes potenciales cuando te buscan.",
      "El problema es que la mayoría de fichas están incompletas o desactualizadas. Una ficha sin fotos recientes, sin descripción optimizada o sin respuestas a reseñas le dice a Google que tu negocio no es relevante. Y si Google no te considera relevante, no te muestra. Así de simple.",
      "Optimizar tu ficha de Google no es solo rellenar campos — es una estrategia. Las categorías que eliges, las palabras que usas en la descripción, la frecuencia con la que publicas actualizaciones y cómo gestionas las reseñas determinan tu posición en el mapa. Nosotros nos encargamos de todo esto de forma sistemática."
    ],
    howCards: [
      { title: "Configuración profesional completa", body: "Revisamos o creamos tu ficha desde cero: categorías, atributos, descripción SEO, fotos, horarios, zona de servicio, productos y servicios. Cada campo optimizado al máximo." },
      { title: "Gestión de reseñas y actualizaciones", body: "Te ayudamos a generar más reseñas y a responderlas correctamente. Publicamos actualizaciones periódicas en tu ficha para mantenerla activa a los ojos de Google." },
      { title: "Coherencia NAP en toda la web", body: "Nos aseguramos de que tu nombre, dirección y teléfono sean idénticos en tu ficha, tu web y cualquier directorio. La coherencia es clave para el posicionamiento local." },
    ],
    faqs: [
      { q: "¿Qué es Google Mi Negocio y por qué es importante?", a: "Es la herramienta de Google que te permite aparecer en Google Maps y en los resultados locales. Es gratuita pero necesita optimización para ser efectiva. Sin ella, tu negocio es prácticamente invisible en búsquedas locales." },
      { q: "¿Cómo optimizo mi ficha de Google para aparecer primero?", a: "Necesitas categorías correctas, descripción con palabras clave, fotos reales y recientes, horarios actualizados, reseñas con respuestas y publicaciones periódicas. Nosotros nos encargamos de todo esto." },
      { q: "¿Con qué frecuencia debo actualizar mi ficha de Google?", a: "Lo ideal es publicar actualizaciones al menos una vez por semana y mantener la información siempre al día. Google premia la actividad constante con mejor posicionamiento." },
      { q: "¿Las reseñas afectan a mi posición en Google?", a: "Sí, mucho. La cantidad, la frecuencia, la puntuación media y tus respuestas son factores directos de posicionamiento. Un negocio con reseñas recientes y bien gestionadas aparece antes." },
      { q: "¿Puedo gestionar mi ficha de Google yo solo?", a: "Técnicamente sí, pero la optimización profesional requiere conocimientos de SEO local. La diferencia entre una ficha 'rellenada' y una ficha 'optimizada' es enorme en términos de visibilidad." },
    ],
  },
  {
    slug: "como-salir-primero-en-google",
    title: "Cómo Salir Primero en Google",
    metaTitle: "Cómo Salir Primero en Google | Negocios Locales | slocal.es",
    metaDesc: "Descubre cómo hacer que tu negocio local aparezca primero en Google. Sistema de posicionamiento orgánico sin publicidad. Desde 197€.",
    h1: "Cómo Salir Primero en Google con Tu Negocio Local",
    subtitle: "Salir primero en Google no es cuestión de suerte. Es cuestión de sistema. Te mostramos cómo funciona.",
    imagePlaceholder: "FOTO: posición número 1 en resultados de Google",
    explainerH2: "¿Por qué tu competencia sale antes que tú en Google?",
    explainerText: [
      "Si buscas tu servicio en Google y no apareces en los primeros resultados, no es porque tu negocio sea peor — es porque tu competencia ha trabajado su presencia digital y tú no. Google posiciona primero a los negocios que le dan las señales correctas: una web optimizada, una ficha de Google activa y contenido relevante.",
      "El primer resultado de Google recibe más del 30% de los clics. El segundo, menos del 15%. A partir de la quinta posición, casi nadie hace clic. Y si no estás en la primera página, directamente no existes para el 95% de las personas que buscan tu servicio. La diferencia entre estar primero y estar quinto puede ser de decenas de clientes al mes.",
      "Salir primero en Google requiere un trabajo constante y bien estructurado. No hay atajos ni trucos — hay un sistema que funciona: contenido optimizado, estructura web correcta, ficha de Google impecable y seguimiento mensual de posiciones. Eso es exactamente lo que hacemos en slocal.es."
    ],
    howCards: [
      { title: "Estructura web optimizada para Google", body: "Creamos o reestructuramos tu web con páginas específicas para cada servicio y zona. La arquitectura correcta es lo que permite a Google entender qué ofreces y dónde." },
      { title: "Contenido que posiciona", body: "Publicamos artículos y páginas con las palabras clave que tus clientes buscan. Contenido útil, bien escrito y optimizado técnicamente para que Google lo posicione." },
      { title: "Seguimiento de posiciones real", body: "Cada mes sabes exactamente en qué posición estás para cada búsqueda importante. Sin tecnicismos, con datos claros que puedes entender y valorar." },
    ],
    faqs: [
      { q: "¿Cuánto tiempo tarda en salir primero en Google?", a: "Depende de la competencia en tu sector y ciudad. En mercados con competencia moderada, puedes ver resultados en los primeros 3-4 meses. En mercados muy competidos puede llevar 6-9 meses. Los resultados son acumulativos y sostenibles." },
      { q: "¿Es posible aparecer en Google sin pagar publicidad?", a: "Sí. El SEO orgánico posiciona tu web en los resultados naturales de Google, sin pagar por cada clic. Es más lento que la publicidad al principio, pero mucho más rentable a largo plazo porque los resultados se mantienen." },
      { q: "¿Por qué mi competencia sale antes que yo en Google?", a: "Porque ha trabajado su posicionamiento: tiene una web optimizada, contenido relevante, ficha de Google activa y probablemente más reseñas. Todo eso se puede superar con un sistema bien ejecutado." },
      { q: "¿Qué necesita Google para posicionar un negocio local primero?", a: "Tres cosas principales: relevancia (que tu contenido coincida con lo que buscan), autoridad (que tu web tenga credibilidad) y experiencia de usuario (que tu web sea rápida y fácil de usar)." },
      { q: "¿Cómo sé en qué posición está mi negocio en Google?", a: "Cada mes te enviamos un informe con tus posiciones para las búsquedas más importantes. También puedes buscar en modo incógnito, aunque nuestras herramientas de seguimiento son más precisas." },
    ],
  },
];
