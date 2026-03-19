export interface SearchBehaviorContent {
  searchBehavior: string;
  competitionContext: Record<string, string>;
  gbpImportance: string;
  slocalDifference: string;
}

export const sectorSearchContent: Record<string, SearchBehaviorContent> = {
  "seo-para-fontaneros": {
    searchBehavior: "Cuando alguien tiene una avería en casa, lo primero que hace es coger el móvil y buscar 'fontanero urgencias [ciudad]' o 'fontanero 24 horas [ciudad]'. Son búsquedas con altísima intención de compra — esa persona va a llamar al primer resultado que le transmita confianza. Google prioriza la proximidad y la relevancia para estas búsquedas locales, lo que significa que un fontanero con su ficha bien optimizada en [ciudad] puede aparecer antes que grandes empresas con más recursos pero peor posicionamiento local.",
    competitionContext: {
      madrid: "En Madrid, la competencia entre fontaneros en Google es alta pero mal ejecutada. La mayoría de fontaneros tienen fichas incompletas, sin fotos de trabajos ni horario actualizado. Esto significa que una ficha profesional y una web optimizada pueden marcar una diferencia enorme en visibilidad. Las búsquedas como 'fontanero en Chamberí' o 'fontanero urgencias Vallecas' tienen mucho menos competencia que 'fontanero Madrid', y es ahí donde el sistema genera resultados reales.",
      barcelona: "Barcelona tiene un mercado activo para fontanería con búsquedas por barrio muy frecuentes. Los usuarios buscan 'fontanero en Eixample', 'fontanero urgencias Gràcia' o 'reparación tuberías Sant Martí'. La mayoría de competidores no trabajan estas búsquedas específicas por zona, dejando oportunidades claras para quien sí lo haga con un sistema bien ejecutado.",
      valencia: "El mercado de fontanería en Valencia está creciendo digitalmente. Las búsquedas como 'fontanero urgencias Valencia' o 'fontanero Ruzafa' aumentan cada mes. La competencia digital es más accesible que en Madrid o Barcelona, lo que permite posicionarse más rápido y con resultados más sostenibles.",
      sevilla: "En Sevilla, la demanda de fontaneros en Google es fuerte pero muchos profesionales aún no han trabajado su presencia digital. Búsquedas como 'fontanero urgencias Sevilla' o 'fontanero Triana' tienen demanda real con poca competencia digital organizada.",
      malaga: "Málaga genera demanda constante de fontanería tanto de residentes como del sector turístico. Las búsquedas como 'fontanero urgencias Málaga' o 'fontanero Teatinos' se mantienen estables durante todo el año, no solo en temporada alta.",
      zaragoza: "En Zaragoza, el mercado de fontanería tiene competencia digital moderada. Búsquedas como 'fontanero urgencias Zaragoza' o 'fontanero Delicias' ofrecen oportunidades reales para posicionarse rápido con el sistema adecuado.",
      bilbao: "Bilbao tiene un sector de fontanería activo donde los clientes buscan en Google antes de llamar. Términos como 'fontanero urgencias Bilbao' o 'fontanero Deusto' tienen demanda constante y la competencia digital es menor que en otras capitales.",
      murcia: "Murcia es un mercado con menos competencia digital para fontanería. Búsquedas como 'fontanero urgencias Murcia' o 'fontanero La Flota' tienen demanda real y poca competencia, lo que permite resultados más rápidos.",
    },
    gbpImportance: "El Pack de 3 de Google Maps es el espacio más valioso para un fontanero en [ciudad]. Cuando alguien busca 'fontanero cerca de mí' o 'fontanero urgencias [ciudad]', Google muestra solo 3 resultados en el mapa antes de los resultados orgánicos. El 80% de las personas que buscan servicios de urgencia llaman a uno de esos tres primeros resultados. Aparecer en Google Maps como fontanero en [ciudad] es literalmente la diferencia entre recibir llamadas a diario o depender del boca a boca.",
    slocalDifference: "El sistema de slocal.es para fontaneros en [ciudad] no es una agencia de publicidad. Es un sistema que trabaja mes a mes optimizando tu ficha de Google, posicionando tu web para búsquedas específicas de fontanería en cada zona de [ciudad] y midiendo los resultados con datos reales. Sin contratos eternos, sin tecnicismos — un sistema que se paga solo con los clientes que genera.",
  },
  "seo-para-reformas": {
    searchBehavior: "El cliente que busca 'empresa de reformas en [ciudad]' o 'reforma de cocina [ciudad]' ya tiene intención de contratar. No está navegando por curiosidad — quiere pedir presupuesto. Google muestra primero a las empresas con ficha optimizada y web relevante. Si tu empresa de reformas no aparece en esas búsquedas en [ciudad], esos presupuestos se los lleva la competencia que sí ha trabajado su visibilidad.",
    competitionContext: {
      madrid: "Madrid es el mercado más grande de reformas en España. Hay miles de empresas pero la mayoría depende del boca a boca o de publicidad. Las búsquedas como 'reforma cocina Madrid' o 'empresa reformas Chamberí' tienen volumen alto y competencia digital menor de lo esperado. Las empresas que posicionan por zona y tipo de reforma capturan presupuestos que la competencia ni sabe que existen.",
      barcelona: "Barcelona tiene un mercado de reformas muy activo, especialmente en renovación de pisos. Búsquedas como 'reforma integral Barcelona' o 'reforma baño Eixample' tienen demanda constante. La clave está en posicionar por barrio y tipo de reforma — donde la competencia es mucho menor.",
      valencia: "Valencia vive un crecimiento importante en reformas. Las búsquedas como 'empresa reformas Valencia' o 'reforma cocina Ruzafa' aumentan cada mes. La competencia digital es menor, lo que significa posicionamiento más rápido.",
      sevilla: "En Sevilla, las reformas son un sector con alta demanda local. Búsquedas como 'empresa reformas Sevilla' o 'reforma integral Nervión' tienen volumen real. Muchas empresas no tienen web ni ficha actualizada — oportunidad directa.",
      malaga: "Málaga tiene demanda constante de reformas por el sector turístico y residencial. Búsquedas como 'reforma piso Málaga' o 'empresa reformas Teatinos' se mantienen estables todo el año.",
      zaragoza: "En Zaragoza, el mercado de reformas tiene competencia digital baja. Búsquedas como 'reformas integrales Zaragoza' o 'reforma cocina Delicias' ofrecen posicionamiento rápido.",
      bilbao: "Bilbao tiene un mercado de reformas estable con demanda constante. Búsquedas como 'empresa reformas Bilbao' o 'reforma baño Indautxu' tienen poca competencia digital organizada.",
      murcia: "Murcia ofrece oportunidades claras para empresas de reformas. Competencia digital baja y demanda creciente — el escenario ideal para posicionarse rápido.",
    },
    gbpImportance: "Para una empresa de reformas en [ciudad], aparecer en el Pack de 3 de Google Maps es clave. Cuando alguien busca 'empresa de reformas cerca' o 'reformas [ciudad]', los 3 primeros resultados del mapa se llevan la mayoría de solicitudes de presupuesto. Una ficha con fotos de proyectos terminados, reseñas reales y categorías bien configuradas transmite confianza antes de que el cliente contacte.",
    slocalDifference: "Para empresas de reformas en [ciudad], el sistema de slocal.es crea páginas específicas por tipo de reforma y por zona. Eso significa que cuando alguien busca 'reforma de cocina en [ciudad]', llega directamente a una página relevante — no a una web genérica. Cada página posiciona de forma independiente, multiplicando las oportunidades de captar presupuestos.",
  },
  "seo-para-pintores": {
    searchBehavior: "El cliente que busca 'pintor en [ciudad]' o 'pintor de pisos [ciudad]' está listo para contratar. No busca información — busca un profesional. Google prioriza a los pintores con ficha actualizada, fotos de trabajos y web relevante. Si no apareces cuando buscan en [ciudad], esos clientes se van a tu competencia sin saber que existes.",
    competitionContext: {
      madrid: "En Madrid hay muchos pintores pero pocos con presencia digital profesional. Búsquedas como 'pintor pisos Madrid' o 'pintor Carabanchel' tienen demanda real con poca competencia digital. Las fotos de trabajos terminados y las reseñas marcan la diferencia entre recibir contactos o ser invisible.",
      barcelona: "Barcelona tiene búsquedas activas de pintores por barrio. 'Pintor Eixample', 'pintor pisos Gràcia' o 'pintor económico Barcelona' son búsquedas con demanda real y competencia digital moderada.",
      valencia: "En Valencia, los pintores que trabajan su posicionamiento local captan clientes que la competencia deja escapar. Búsquedas como 'pintor pisos Valencia' o 'pintor Benimaclet' tienen competencia baja.",
      sevilla: "Sevilla tiene demanda constante de pintores. Búsquedas como 'pintor Sevilla' o 'pintor Triana' ofrecen oportunidad directa para quien trabaje su visibilidad digital.",
      malaga: "Málaga genera demanda estable de pintores. La combinación de turismo y residentes mantiene las búsquedas activas todo el año.",
      zaragoza: "En Zaragoza la competencia entre pintores en Google es baja. Posicionarse es rápido y los resultados son sostenibles.",
      bilbao: "Bilbao ofrece un mercado estable para pintores con competencia digital muy baja. Es uno de los mercados donde más rápido se ven resultados.",
      murcia: "Murcia tiene la competencia digital más baja para pintores entre las ciudades donde trabajamos. Resultados rápidos garantizados.",
    },
    gbpImportance: "Para un pintor en [ciudad], la ficha de Google es tu carta de presentación. El Pack de 3 de Google Maps muestra fotos, reseñas y calificación antes de que el cliente haga clic. Un pintor con fotos de trabajos terminados y reseñas positivas aparece como profesional de confianza. Sin ficha optimizada, ni siquiera existes para los clientes que buscan pintor en [ciudad].",
    slocalDifference: "El sistema de slocal.es para pintores en [ciudad] crea páginas por tipo de trabajo y zona. 'Pintor de pisos en [barrio]', 'pintura de fachadas en [ciudad]' — cada página captura su propia demanda. Además, optimizamos tu ficha con fotos de trabajos reales y gestionamos que tus reseñas trabajen a tu favor.",
  },
  "seo-para-clinicas": {
    searchBehavior: "Un paciente que busca 'clínica dental en [ciudad]' o 'dentista cerca de mí' está listo para reservar cita. Google muestra clínicas con reseñas, horarios y fotos — el paciente decide en segundos. Si tu clínica en [ciudad] no tiene una ficha profesional y una web clara, esa cita la agenda tu competencia.",
    competitionContext: {
      madrid: "Madrid tiene alta competencia en clínicas dentales pero muchas cadenas no trabajan bien el posicionamiento local por barrio. Búsquedas como 'dentista Chamberí' o 'clínica dental Vallecas' tienen demanda real con competencia menor de lo esperado. Una clínica pequeña con buenas reseñas puede superar a grandes cadenas en búsquedas de proximidad.",
      barcelona: "Barcelona tiene un mercado de clínicas muy competitivo pero con oportunidades por barrio. 'Dentista Eixample', 'clínica dental Gràcia' o 'ortodoncia Sant Martí' son búsquedas donde una clínica bien posicionada puede destacar frente a grandes cadenas.",
      valencia: "En Valencia, el mercado de clínicas dentales está creciendo. Las búsquedas por barrio y especialidad ofrecen oportunidades claras para clínicas que trabajen su posicionamiento local.",
      sevilla: "Sevilla tiene demanda fuerte de servicios dentales. Las búsquedas como 'dentista Nervión' o 'clínica dental Triana' tienen volumen real y competencia digital moderada.",
      malaga: "Málaga genera demanda constante de clínicas por la combinación de residentes y turistas. Las búsquedas de urgencia dental y especialidades tienen volumen sostenido.",
      zaragoza: "En Zaragoza, las clínicas que trabajan su posicionamiento local tienen ventaja clara. La competencia digital es menor y los resultados llegan más rápido.",
      bilbao: "Bilbao ofrece oportunidades para clínicas que optimicen su presencia digital. La competencia es menor que en otras capitales y la demanda es estable.",
      murcia: "Murcia tiene la menor competencia digital para clínicas entre las ciudades donde trabajamos. Es el mejor mercado para posicionarse rápido.",
    },
    gbpImportance: "Para una clínica en [ciudad], el Pack de 3 de Google Maps es donde se toman las decisiones. El paciente ve reseñas, fotos del centro, horarios y distancia — todo en un vistazo. Una clínica con 4.8 estrellas y 50+ reseñas transmite confianza inmediata. Las clínicas que no cuidan su ficha pierden pacientes ante competidores que sí lo hacen, aunque estén más lejos.",
    slocalDifference: "El sistema de slocal.es para clínicas en [ciudad] va más allá de la ficha. Creamos páginas por especialidad — ortodoncia, implantes, blanqueamiento — y por zona de [ciudad]. Cada especialidad posiciona de forma independiente. Además, implementamos una estrategia de reseñas que refuerza tu posición en Google Maps mes a mes.",
  },
  "seo-para-fisioterapeutas": {
    searchBehavior: "Las búsquedas como 'fisioterapeuta en [ciudad]' o 'fisio deportivo [ciudad]' crecen cada año. El paciente que busca en Google ya ha decidido ir — solo necesita elegir a quién. Google prioriza la proximidad y las reseñas, lo que significa que un fisioterapeuta en [ciudad] con ficha optimizada puede aparecer antes que grandes clínicas que no cuidan su presencia local.",
    competitionContext: {
      madrid: "Madrid tiene alta demanda de fisioterapia pero la mayoría de profesionales no trabajan su posicionamiento digital. Búsquedas como 'fisio deportivo Madrid' o 'fisioterapeuta Chamberí' tienen volumen real con competencia digital menor de lo esperado.",
      barcelona: "Barcelona tiene un mercado activo de fisioterapia con búsquedas frecuentes por barrio y especialidad. 'Fisioterapeuta Eixample' o 'fisio suelo pélvico Barcelona' son búsquedas con demanda y poca competencia organizada.",
      valencia: "El mercado de fisioterapia en Valencia ofrece oportunidades claras. Búsquedas como 'fisioterapeuta Valencia' o 'fisio Ruzafa' tienen competencia baja y demanda creciente.",
      sevilla: "En Sevilla, la fisioterapia tiene demanda constante. Los profesionales que trabajen su visibilidad en Google captan pacientes que la competencia deja escapar.",
      malaga: "Málaga combina demanda de residentes y deportistas. Las búsquedas de fisioterapia se mantienen estables todo el año con competencia digital moderada.",
      zaragoza: "Zaragoza ofrece un mercado ideal para fisioterapeutas que quieran posicionarse rápido. Competencia digital baja y demanda estable.",
      bilbao: "Bilbao tiene un sector de fisioterapia activo con competencia digital baja. Es uno de los mejores mercados para resultados rápidos.",
      murcia: "Murcia tiene la menor competencia para fisioterapia digital. Los resultados llegan más rápido que en cualquier otra ciudad donde trabajamos.",
    },
    gbpImportance: "Para un fisioterapeuta en [ciudad], Google Maps es donde los pacientes eligen. Las reseñas, la especialidad visible y las fotos de la clínica son decisivos. Un fisioterapeuta que aparece en el Pack de 3 con buenas reseñas y especialidades claras recibe contactos constantes — sin pagar publicidad.",
    slocalDifference: "El sistema de slocal.es para fisioterapeutas en [ciudad] crea páginas por especialidad: deportiva, suelo pélvico, neurológica, rehabilitación. Cada página captura pacientes que buscan exactamente ese servicio. Además, optimizamos tu ficha para que refleje todas tus especialidades y tu zona de cobertura en [ciudad].",
  },
  "seo-para-entrenadores": {
    searchBehavior: "Las búsquedas como 'entrenador personal en [ciudad]' o 'entrenador personal a domicilio [ciudad]' tienen intención de compra directa. El cliente quiere empezar — solo necesita encontrar al profesional adecuado. Google favorece a los entrenadores con ficha optimizada, web propia y reseñas positivas.",
    competitionContext: {
      madrid: "Madrid tiene demanda alta de entrenadores personales pero la mayoría depende de redes sociales, no de Google. Búsquedas como 'entrenador personal Madrid' o 'personal trainer Chamberí' tienen competencia digital moderada — la oportunidad está en ser el primero en trabajar Google.",
      barcelona: "Barcelona tiene un mercado fitness muy activo. Búsquedas como 'entrenador personal Barcelona' o 'entrenamiento personal Eixample' tienen demanda real y competencia moderada en Google.",
      valencia: "En Valencia, los entrenadores personales que trabajan su posicionamiento en Google tienen ventaja clara. La mayoría depende de redes — Google es un canal sin explotar.",
      sevilla: "Sevilla tiene demanda creciente de entrenadores personales. La competencia digital es baja — oportunidad directa para quien posicione primero.",
      malaga: "Málaga combina residentes y expatriados con alta demanda de fitness. Las búsquedas de entrenadores personales son constantes todo el año.",
      zaragoza: "En Zaragoza, la competencia entre entrenadores en Google es mínima. Posicionarse es rápido y efectivo.",
      bilbao: "Bilbao ofrece un mercado fitness estable con muy poca competencia digital para entrenadores personales.",
      murcia: "Murcia tiene la menor competencia para entrenadores en Google. Es el mejor mercado para resultados inmediatos.",
    },
    gbpImportance: "Para un entrenador personal en [ciudad], Google Maps muestra tu ubicación, reseñas y modalidad de entrenamiento. El cliente ve en segundos si ofreces lo que busca — domicilio, gimnasio, parque o online. Una ficha con fotos de sesiones y reseñas reales genera confianza inmediata y contactos constantes.",
    slocalDifference: "El sistema de slocal.es para entrenadores en [ciudad] crea páginas por modalidad: a domicilio, en parque, online, en gimnasio. Cada modalidad posiciona de forma independiente. Además, tu ficha refleja tu método y zona de trabajo para que el cliente ideal te encuentre directamente.",
  },
  "seo-para-yoga": {
    searchBehavior: "Las personas que buscan 'clases de yoga en [ciudad]' o 'yoga para principiantes [ciudad]' quieren empezar — están listas para inscribirse. Google prioriza estudios con ficha actualizada, estilos de yoga definidos y reseñas de alumnos. Si tu estudio no aparece en esas búsquedas, esos alumnos se apuntan a otro sitio o a un gimnasio genérico.",
    competitionContext: {
      madrid: "Madrid tiene un mercado de yoga competitivo pero dominado por gimnasios que no se especializan. Las búsquedas como 'yoga vinyasa Madrid' o 'clases yoga Chamberí' tienen menos competencia que 'yoga Madrid' genérico — y es ahí donde un estudio especializado puede ganar.",
      barcelona: "Barcelona es una ciudad con alta afinidad al yoga. Búsquedas como 'yoga Eixample' o 'yoga prenatal Barcelona' tienen demanda real y oportunidad para estudios que se posicionen por estilo y barrio.",
      valencia: "Valencia tiene un mercado de yoga en crecimiento. Las búsquedas como 'clases yoga Valencia' o 'yoga Ruzafa' ofrecen oportunidades claras con competencia baja.",
      sevilla: "Sevilla tiene demanda creciente de yoga. El mercado es accesible y las búsquedas específicas por estilo tienen poca competencia.",
      malaga: "Málaga tiene demanda constante de yoga por la comunidad de expatriados y el estilo de vida de la costa. Las búsquedas se mantienen activas todo el año.",
      zaragoza: "En Zaragoza, la competencia para estudios de yoga en Google es muy baja. Posicionarse como referente es rápido y efectivo.",
      bilbao: "Bilbao tiene un mercado de yoga estable con muy poca competencia digital. Oportunidad directa para estudios especializados.",
      murcia: "Murcia ofrece el mercado menos competido para yoga entre las ciudades donde trabajamos. Resultados rápidos garantizados.",
    },
    gbpImportance: "Para un estudio de yoga en [ciudad], la ficha de Google muestra estilos, horarios, fotos del espacio y reseñas de alumnos. El alumno potencial decide en segundos si tu estudio le encaja. Un estudio con buenas reseñas y estilos claros aparece como referente frente a gimnasios genéricos que también ofrecen yoga.",
    slocalDifference: "El sistema de slocal.es para estudios de yoga en [ciudad] crea páginas por estilo: hatha, vinyasa, prenatal, restaurativo. Cada página captura alumnos que buscan exactamente ese tipo de yoga. La ficha refleja tu especialización y horarios actualizados para que Google te muestre a las personas adecuadas.",
  },
};
