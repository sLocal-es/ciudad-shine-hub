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
    title: "Cómo aparecer primero en Google Maps: guía para negocios locales",
    metaDescription: "Aprende paso a paso cómo posicionar tu negocio en Google Maps y aparecer en los primeros resultados cuando tus clientes te buscan cerca.",
    category: "Google Maps",
    date: "2026-03-19",
    featuredImage: "/placeholder.svg",
    altText: "Captura de pantalla de Google Maps mostrando negocios locales posicionados",
    excerpt: "Google Maps es el escaparate más importante para negocios locales. Aprende cómo optimizar tu ficha y aparecer cuando tus clientes buscan cerca.",
    content: `
      <p>Si tienes un negocio local — una clínica, un taller, una tienda — Google Maps es probablemente la herramienta más importante para conseguir clientes nuevos. Cuando alguien busca un servicio cerca, Google muestra primero el mapa con 3 resultados. Si no estás ahí, no existes para esa persona.</p>

      <h2>¿Por qué Google Maps es tan importante para negocios locales?</h2>
      <p>El 80% de las búsquedas locales terminan en una acción: una llamada, una visita o una compra. Y la mayoría de esas búsquedas pasan por Google Maps. El usuario busca "fontanero cerca de mí" o "clínica dental en mi barrio" y Google le muestra los 3 negocios más relevantes en el mapa.</p>
      <p>Esos 3 resultados — el llamado "Pack de 3" — reciben la gran mayoría de clics y llamadas. Si tu negocio no está en ese top 3, la probabilidad de que te encuentren cae drásticamente.</p>

      <h2>Paso 1: Reclama y verifica tu ficha de Google Business Profile</h2>
      <p>Lo primero es asegurarte de que tu negocio tiene una ficha en Google Business Profile (antes Google My Business) y de que tú eres el propietario verificado. Sin verificación, no puedes optimizar nada.</p>
      <p>El proceso de verificación suele ser por correo postal, teléfono o email. Una vez verificado, tienes control total sobre la información que Google muestra de tu negocio.</p>

      <h2>Paso 2: Completa toda la información de tu ficha</h2>
      <p>Google favorece las fichas completas. Asegúrate de rellenar:</p>
      <ul>
        <li><strong>Nombre del negocio</strong> — exactamente como aparece en tu fachada</li>
        <li><strong>Categoría principal y secundarias</strong> — elige la más específica posible</li>
        <li><strong>Dirección y zona de servicio</strong> — si vas al cliente, define tu radio de acción</li>
        <li><strong>Horario</strong> — incluyendo festivos y horarios especiales</li>
        <li><strong>Teléfono y web</strong> — el teléfono debe ser local, no un 900</li>
        <li><strong>Descripción</strong> — usa palabras clave naturales que describan lo que haces y dónde</li>
      </ul>

      <h2>Paso 3: Consigue reseñas reales y recientes</h2>
      <p>Las reseñas son uno de los factores más importantes para el posicionamiento en Google Maps. No solo importa la cantidad — importa la frecuencia. Un negocio con 5 reseñas nuevas este mes puede superar a otro con 200 reseñas antiguas.</p>
      <p>Pide reseñas a tus clientes de forma natural después de un buen servicio. Google premia la actividad constante.</p>

      <h2>Paso 4: Sube fotos regularmente</h2>
      <p>Los negocios con fotos recientes reciben un 42% más de solicitudes de direcciones y un 35% más de clics a su web. Sube fotos de tu local, tus trabajos, tu equipo — lo que transmita confianza y profesionalidad.</p>

      <h2>Paso 5: Tu web refuerza tu posición en Maps</h2>
      <p>Google no solo mira tu ficha — también mira tu web. Una web con páginas específicas por servicio y zona refuerza las señales que Google necesita para posicionarte. Si tu web dice "fontanero en Chamberí" y tu ficha tiene esa zona de servicio, Google conecta ambas señales.</p>

      <h2>¿Cuánto tarda en funcionar?</h2>
      <p>Los primeros resultados suelen verse entre el mes 2 y el mes 4. El posicionamiento en Google Maps es progresivo — cada mes ganas posiciones si mantienes la actividad. No es publicidad instantánea, es una inversión que se acumula.</p>

      <h2>Conclusión</h2>
      <p>Aparecer primero en Google Maps no es cuestión de suerte. Es un sistema: ficha completa, reseñas constantes, fotos actualizadas y una web que refuerce todo. Los negocios que trabajan esto de forma consistente son los que se llevan los clientes que otros dejan escapar.</p>
    `,
    faqs: [
      { q: "¿Es gratis aparecer en Google Maps?", a: "Sí, crear y mantener tu ficha de Google Business Profile es completamente gratuito. Lo que marca la diferencia es la optimización — que requiere trabajo y conocimiento, pero no pagas a Google por aparecer." },
      { q: "¿Cuántas reseñas necesito para posicionar bien?", a: "No hay un número mágico. Lo importante es la frecuencia y la calidad. 5 reseñas nuevas al mes durante 6 meses es mejor que 100 reseñas de hace 3 años." },
      { q: "¿Puedo aparecer en Google Maps sin tener local físico?", a: "Sí. Si ofreces servicios a domicilio puedes configurar tu ficha como 'negocio en área de servicio' sin mostrar dirección física." },
      { q: "¿Funciona igual en todas las ciudades?", a: "El sistema es el mismo, pero la competencia varía. En ciudades más pequeñas es más fácil posicionarse rápido. En ciudades grandes, la estrategia por barrio y zona es clave." },
    ],
    relatedSectorSlug: "seo-para-fontaneros",
  },
];
