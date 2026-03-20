export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  category: "Google Maps" | "SEO Local" | "Por sector" | "Casos prácticos";
  date: string; // ISO date
  featuredImage: string;
  altText: string;
  excerpt: string;
  content: string; // HTML content
  faqs?: { q: string; a: string }[];
  relatedSectorSlug?: string;
  relatedCitySlug?: string;
}

export const posts: BlogPost[] = [
  {
  slug: "como-aparecer-primero-en-google-maps",
  title: "Cómo Aparecer Primero en Google Maps en 2026 — Guía Práctica",
  metaDescription: "Guía práctica para aparecer primero en Google Maps en 2026. Optimiza tu ficha, consigue reseñas y domina el Pack de 3 local. Sin agencias, sin humo.",
  category: "Google Maps",
  date: "2026-03-20",
  featuredImage: "/placeholder.svg",
  altText: "Autónomo español comprobando su posición en Google Maps desde el móvil",
  excerpt: "El 80% de los clics en búsquedas locales van a los 3 primeros resultados de Google Maps. Aprende exactamente cómo llegar a esos puestos con acciones concretas que puedes implementar esta semana.",
  relatedSectorSlug: "seo-para-fontaneros",
  content: `
    <p>La mayoría de negocios locales en España pierden clientes cada día por una razón simple: no aparecen cuando alguien los busca en Google Maps. Un fontanero en Valencia, una fisioterapeuta en Bilbao o una empresa de reformas en Madrid compiten por los mismos tres puestos que Google muestra antes que cualquier resultado orgánico. Esta guía te explica exactamente cómo llegar a esos tres primeros puestos — el llamado Pack de 3 — con acciones concretas que puedes implementar esta semana.</p>

    <h2>Qué es el Pack de 3 y por qué importa tanto</h2>
    <p>Cuando alguien busca "fontanero urgencias Madrid" o "fisioterapeuta cerca de mí" en Google, lo primero que aparece no son páginas web — son tres fichas de negocios locales con mapa, estrellas y botón de llamada. Ese bloque se llama el <strong>Pack de 3</strong> o Local Pack, y concentra el 80% de los clics en búsquedas locales según datos de BrightLocal 2025.</p>
    <p>Si no estás en esos tres resultados, prácticamente no existes para ese cliente. La cuarta posición en Google Maps recibe menos del 7% de los clics. No es un problema de calidad de tu servicio — es un problema de visibilidad digital.</p>
    <p>Según un estudio de Whitespark 2025, el <strong>42% de los negocios locales en España</strong> no tienen su ficha de Google Business Profile completamente optimizada, lo que significa que la competencia directa por esos tres puestos es menor de lo que parece.</p>

    <h2>Los 3 factores que decide Google para posicionarte</h2>
    <p>Google es transparente sobre cómo decide quién aparece primero en Maps. Son tres factores oficiales:</p>
    <p><strong>1. Relevancia</strong> — ¿Tu ficha describe exactamente lo que el cliente está buscando? Si alguien busca "electricista urgente Barcelona" y tu ficha dice solo "servicios eléctricos", Google no te considera tan relevante como un competidor que tiene "electricista urgencias Barcelona" en su descripción y categorías.</p>
    <p><strong>2. Distancia</strong> — ¿Qué tan cerca estás del usuario que busca? Para negocios sin local físico (fontaneros, reformistas, entrenadores personales), el área de servicio configurada en tu ficha determina en qué búsquedas apareces geográficamente.</p>
    <p><strong>3. Prominencia</strong> — ¿Qué tan conocido y activo es tu negocio en internet? Google mide esto con el número de reseñas, la puntuación media, la frecuencia de publicaciones, los enlaces a tu web y la actividad general del perfil.</p>
    <blockquote><em>"La prominencia es el factor más trabajable para un negocio local nuevo. La relevancia se configura en horas. La distancia no se puede cambiar. Pero la prominencia crece mes a mes con trabajo constante."</em><br/>— Fuente: Google Business Profile Help, guía oficial de posicionamiento local</blockquote>

    <h2>Pasos para optimizar tu ficha y aparecer primero</h2>

    <h3>Paso 1 — Reclama y verifica tu ficha</h3>
    <p>Antes de optimizar nada, asegúrate de que la ficha está verificada en business.google.com. Sin verificación, Google limita tus funcionalidades y reduce la confianza en tu perfil. La verificación por vídeo, cada vez más común, tarda entre 3 y 5 días.</p>
    <p>Si tu negocio ya aparece en Google Maps pero tú no lo creaste, reclámalo como propietario antes de que lo haga un competidor o un gestor externo que no conoces.</p>

    <h3>Paso 2 — Completa el 100% de la información</h3>
    <p>Google premia los perfiles completos. Cada campo vacío es una señal negativa. Completa obligatoriamente:</p>
    <ul>
      <li>Nombre exacto del negocio (sin añadir keywords artificiales)</li>
      <li>Categoría principal y hasta 9 secundarias relevantes</li>
      <li>Descripción de 750 caracteres con keywords naturales de tu servicio y ciudad</li>
      <li>Horario de apertura actualizado incluyendo festivos</li>
      <li>Número de teléfono local (no 900 ni números de centralita)</li>
      <li>URL de tu web</li>
      <li>Área de servicio si eres un negocio sin local físico</li>
    </ul>

    <h3>Paso 3 — Publica fotos reales cada semana</h3>
    <p>Los negocios con más de 100 fotos en su ficha reciben un <strong>42% más de solicitudes de ruta</strong> y un <strong>35% más de clics hacia su web</strong> que los perfiles sin imágenes, según datos de Google 2024.</p>
    <p>No necesitas un fotógrafo profesional. Fotos reales de trabajos terminados, del equipo en acción o del local transmiten más confianza que imágenes de stock. Para un fontanero: antes y después de una instalación. Para una fisioterapeuta: la sala de tratamiento y el equipo disponible.</p>

    <h3>Paso 4 — Consigue reseñas de forma sistemática</h3>
    <p>Las reseñas son el factor de prominencia que más peso tiene en el ranking local. No se trata solo de la puntuación media — la <strong>cantidad y la frecuencia</strong> de reseñas recientes es lo que Google valora.</p>
    <p>La forma más efectiva es enviar un enlace directo al formulario de reseña de tu ficha justo después de completar un trabajo. Un mensaje simple de WhatsApp con el enlace funciona mejor que cualquier solicitud verbal.</p>
    <p>Responde cada reseña en menos de 24 horas. En las positivas, agradece mencionando el servicio concreto. En las negativas, responde con empatía y ofrece solución. Google valora la interacción.</p>
    <p>Para <a href="/seo-para-fontaneros">fontaneros</a>, <a href="/seo-para-reformas">empresas de reformas</a> y otros negocios de servicios urgentes, las reseñas que mencionan el tiempo de respuesta y la urgencia resuelta tienen especial impacto porque refuerzan las keywords más buscadas.</p>

    <h3>Paso 5 — Publica actualizaciones semanales</h3>
    <p>Las publicaciones de Google Business Profile funcionan como mini posts que mantienen tu perfil activo en el algoritmo. Un negocio que publica cada semana señaliza a Google que está activo y relevante.</p>
    <p>No necesita ser contenido elaborado. Una oferta puntual, un aviso de disponibilidad, una foto de un trabajo reciente o un consejo útil para tu sector bastan. Lo importante es la constancia.</p>

    <h3>Paso 6 — Consigue coherencia NAP en toda la web</h3>
    <p>NAP (Name, Address, Phone) debe ser <strong>idéntico</strong> en tu ficha de Google, tu web, directorios locales y redes sociales. Una sola inconsistencia — abreviando la dirección, usando un teléfono diferente — confunde a Google y penaliza tu posicionamiento.</p>
    <p>Crea un documento maestro con tu NAP exacto y úsalo como referencia en cada plataforma donde registres tu negocio.</p>

    <h2>Errores que te hunden en Google Maps sin saberlo</h2>
    <p><strong>Añadir keywords al nombre del negocio.</strong> Si te llamas "Reformas García" no pongas "Reformas García | Empresa de reformas Madrid". Google lo detecta como spam y puede suspender la ficha.</p>
    <p><strong>Usar una oficina virtual como dirección.</strong> Google tiene bases de datos de coworkings y oficinas virtuales. Si tu dirección aparece en esas listas, el perfil puede ser suspendido.</p>
    <p><strong>Ignorar las reseñas negativas.</strong> No responder a una reseña negativa le dice a Google y a los usuarios que no te importa la experiencia del cliente.</p>
    <p><strong>Cambiar datos NAP mientras esperas verificación.</strong> Cualquier cambio durante el proceso de verificación lo reinicia desde cero.</p>
    <p><strong>Tener múltiples perfiles para el mismo negocio.</strong> Google los fusiona o elimina, perdiendo toda la autoridad acumulada.</p>

    <h2>Cuánto tiempo tarda en funcionar</h2>
    <table>
      <thead><tr><th>Situación</th><th>Tiempo estimado para entrar en Pack de 3</th></tr></thead>
      <tbody>
        <tr><td>Ficha nueva, ciudad pequeña, poca competencia</td><td>4–8 semanas</td></tr>
        <tr><td>Ficha nueva, ciudad mediana, competencia media</td><td>8–16 semanas</td></tr>
        <tr><td>Ficha existente sin optimizar, cualquier ciudad</td><td>4–6 semanas tras optimización</td></tr>
        <tr><td>Ciudad grande (Madrid, Barcelona), alta competencia</td><td>3–6 meses con trabajo constante</td></tr>
      </tbody>
    </table>
    <p>El SEO local es acumulativo. Cada semana de trabajo constante — fotos, posts, reseñas, actualizaciones — suma posiciones que no desaparecen cuando paras, al contrario que la publicidad de pago.</p>

    <h2>Potencia tu visibilidad en Google Maps con slocal.es</h2>
    <p>Llevar a cabo todas estas acciones de forma constante mientras gestionas tu negocio es difícil. <a href="/">slocal.es</a> es un sistema de visibilidad local — no una agencia — que gestiona tu ficha de Google Business Profile, publica contenido semanal y monitoriza tus posiciones cada mes.</p>
    <p>Trabajamos con <a href="/seo-para-fontaneros">fontaneros</a>, <a href="/seo-para-fisioterapeutas">fisioterapeutas</a>, <a href="/seo-para-reformas">empresas de reformas</a> y <a href="/seo-para-pintores">pintores</a> en toda España. Sin contratos de permanencia. Sin letra pequeña. <a href="/planes">Ver planes →</a></p>
  `,
  faqs: [
    {
      q: "¿Es gratis aparecer en Google Maps?",
      a: "Sí, crear y mantener tu ficha de Google Business Profile es completamente gratuito. Lo que marca la diferencia es la optimización — que requiere trabajo y conocimiento, pero no pagas a Google por aparecer."
    },
    {
      q: "¿Cuántas reseñas necesito para posicionar bien?",
      a: "No hay un número mágico. Lo importante es la frecuencia y la calidad. 5 reseñas nuevas al mes durante 6 meses es mejor que 100 reseñas de hace 3 años. La meta práctica para ciudades medianas es llegar a 20 reseñas con media superior a 4.3 estrellas."
    },
    {
      q: "¿Puedo aparecer en Google Maps sin tener local físico?",
      a: "Sí. Si ofreces servicios a domicilio puedes configurar tu ficha como negocio en área de servicio sin mostrar dirección física. Fontaneros, electricistas y reformistas trabajan exactamente así."
    },
    {
      q: "¿Funciona igual en todas las ciudades?",
      a: "El sistema es el mismo, pero la competencia varía. En ciudades más pequeñas es más fácil posicionarse rápido. En ciudades grandes como Madrid o Barcelona, la estrategia por barrio y zona es clave."
    },
    {
      q: "¿Qué pasa si suspenden mi ficha?",
      a: "Una suspensión significa que Google ha detectado algo que viola sus políticas — dirección no verificable, keywords en el nombre, múltiples perfiles. Puedes solicitar la revisión a través del formulario oficial de Google Business Profile. El proceso puede tardar 2-4 semanas."
    }
  ]
},