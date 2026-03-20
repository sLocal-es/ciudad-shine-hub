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
  featuredImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
  altText: "Autónomo español comprobando su posición en Google Maps desde el móvil",
  excerpt: "El 80% de los clics en búsquedas locales van a los 3 primeros resultados de Google Maps. Aprende exactamente cómo llegar a esos puestos con acciones concretas que puedes implementar esta semana.",
  relatedSectorSlug: "seo-para-fontaneros",
  content: `
    <p>La mayoría de negocios locales en España pierden clientes cada día por una razón simple: no aparecen cuando alguien los busca en Google Maps. Un fontanero en Valencia, una fisioterapeuta en Bilbao o una empresa de reformas en Madrid compiten por los mismos tres puestos que Google muestra antes que cualquier resultado orgánico. Esta guía te explica exactamente cómo llegar a esos tres primeros puestos con acciones concretas que puedes implementar esta semana.</p>

    <nav class="toc">
      <h2>Tabla de Contenidos</h2>
      <ul>
        <li><a href="#pack-de-3">Qué es el Pack de 3 y por qué importa tanto</a></li>
        <li><a href="#factores">Los 3 factores que decide Google para posicionarte</a></li>
        <li><a href="#pasos">Pasos para optimizar tu ficha y aparecer primero</a></li>
        <li><a href="#errores">Errores que te hunden en Google Maps sin saberlo</a></li>
        <li><a href="#tiempo">Cuánto tiempo tarda en funcionar</a></li>
        <li><a href="#slocal">Potencia tu visibilidad con slocal.es</a></li>
        <li><a href="#faq">Preguntas frecuentes</a></li>
      </ul>
    </nav>

    <div class="key-points">
      <h2>Puntos clave</h2>
      <table>
        <thead><tr><th>Punto</th><th>Detalles</th></tr></thead>
        <tbody>
          <tr><td>El Pack de 3 lo es todo</td><td>El 80% de los clics en búsquedas locales van a los 3 primeros resultados de Google Maps</td></tr>
          <tr><td>Relevancia, distancia y prominencia</td><td>Los 3 factores oficiales de Google para decidir quién aparece primero</td></tr>
          <tr><td>Ficha completa y activa</td><td>Un perfil con fotos, horarios, posts y respuestas posiciona hasta 3 veces mejor</td></tr>
          <tr><td>Las reseñas mueven el ranking</td><td>Más reseñas recientes con respuesta = más visibilidad en búsquedas locales</td></tr>
          <tr><td>Consistencia NAP obligatoria</td><td>Nombre, dirección y teléfono deben ser idénticos en todos los sitios donde apareces</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="pack-de-3">Qué es el Pack de 3 y por qué importa tanto</h2>
    <p>Cuando alguien busca "fontanero urgencias Madrid" o "fisioterapeuta cerca de mí" en Google, lo primero que aparece no son páginas web — son tres fichas de negocios locales con mapa, estrellas y botón de llamada. Ese bloque se llama el <strong>Pack de 3</strong> o Local Pack, y concentra el 80% de los clics en búsquedas locales según datos de BrightLocal 2025.</p>
    <p>Si no estás en esos tres resultados, prácticamente no existes para ese cliente. La cuarta posición en Google Maps recibe menos del 7% de los clics. No es un problema de calidad de tu servicio — es un problema de visibilidad digital.</p>

    <div class="stat-highlight">
      <strong>42%</strong> de los negocios locales en España no tienen su ficha completamente optimizada — la competencia por esos tres puestos es menor de lo que parece.
      <br/><span class="source">Fuente: Whitespark Local Search Ranking Factors 2025</span>
    </div>

    <img src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80" alt="Pack de 3 de Google Maps mostrando negocios locales en búsqueda" />

    <h2 id="factores">Los 3 factores que decide Google para posicionarte</h2>

    <div class="infographic-grid">
      <div class="infographic-card">
        <div class="infographic-icon">🎯</div>
        <h3>Relevancia</h3>
        <p>¿Tu ficha describe exactamente lo que el cliente busca? Categorías, descripción y keywords determinan en qué búsquedas apareces.</p>
      </div>
      <div class="infographic-card">
        <div class="infographic-icon">📍</div>
        <h3>Distancia</h3>
        <p>¿Qué tan cerca estás del usuario? Para negocios móviles, el área de servicio configurada determina tu cobertura geográfica.</p>
      </div>
      <div class="infographic-card">
        <div class="infographic-icon">⭐</div>
        <h3>Prominencia</h3>
        <p>¿Qué tan conocido y activo es tu negocio? Reseñas, publicaciones, fotos y enlaces suman prominencia mes a mes.</p>
      </div>
    </div>

    <blockquote>
      <em>"La prominencia es el factor más trabajable para un negocio local nuevo. La relevancia se configura en horas. La distancia no se puede cambiar. Pero la prominencia crece mes a mes con trabajo constante."</em>
      <br/>— Fuente: Google Business Profile Help, guía oficial de posicionamiento local
    </blockquote>

    <h2 id="pasos">Pasos para optimizar tu ficha y aparecer primero</h2>
    <p>Mejorar tu posición en Google Maps requiere un enfoque sistemático. Sigue estos pasos en orden:</p>

    <ol>
      <li>Verifica y reclama tu perfil en business.google.com para obtener control total</li>
      <li>Completa cada campo disponible — nombre, categoría, descripción, horario, teléfono, web, área de servicio</li>
      <li>Sube fotos reales de trabajos, local o equipo cada semana</li>
      <li>Pide reseñas a clientes satisfechos con enlace directo al formulario</li>
      <li>Publica actualizaciones semanales — ofertas, novedades, consejos</li>
      <li>Responde todas las reseñas en menos de 24 horas</li>
      <li>Asegura consistencia NAP en todos los sitios donde apareces</li>
    </ol>

    <div class="pro-tip">
      <strong>Consejo profesional:</strong> La forma más efectiva de conseguir reseñas es enviar un mensaje de WhatsApp con el enlace directo al formulario justo después de terminar un trabajo. Un mensaje simple y personal convierte mucho mejor que cualquier solicitud genérica por email.
    </div>

    <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" alt="Propietario de negocio local gestionando su ficha de Google Business Profile desde el ordenador" />

    <h3>Qué información completa cada campo y por qué importa</h3>
    <table>
      <thead>
        <tr><th>Campo</th><th>Qué incluir</th><th>Por qué importa</th></tr>
      </thead>
      <tbody>
        <tr><td>Nombre</td><td>Nombre legal exacto, sin keywords</td><td>Keywords artificiales pueden causar suspensión</td></tr>
        <tr><td>Categoría principal</td><td>La más específica posible</td><td>Determina el 70% de tu relevancia en búsquedas</td></tr>
        <tr><td>Descripción</td><td>750 caracteres con keywords naturales y ciudad</td><td>Google la indexa y la usa para relevancia</td></tr>
        <tr><td>Horario</td><td>Actualizado incluyendo festivos</td><td>Perfiles con horario correcto reciben más clics</td></tr>
        <tr><td>Área de servicio</td><td>Zonas reales donde operas</td><td>Define en qué búsquedas geográficas apareces</td></tr>
        <tr><td>Fotos</td><td>Trabajos reales, equipo, local</td><td>+42% solicitudes de ruta con más de 100 fotos</td></tr>
      </tbody>
    </table>

    <p>Para <a href="/seo-para-fontaneros">fontaneros</a> y <a href="/seo-para-reformas">empresas de reformas</a>, configurar correctamente el área de servicio es especialmente crítico — sin local físico, esta es la única señal geográfica que Google tiene para posicionarte en búsquedas locales.</p>

    <h2 id="errores">Errores que te hunden en Google Maps sin saberlo</h2>

    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" alt="Errores comunes en Google Business Profile que penalizan el posicionamiento local" />

    <div class="infographic-grid">
      <div class="infographic-card error">
        <div class="infographic-icon">🚫</div>
        <h3>Keywords en el nombre</h3>
        <p>"Reformas García | Empresa reformas Madrid" — Google lo detecta como spam y puede suspender la ficha.</p>
      </div>
      <div class="infographic-card error">
        <div class="infographic-icon">🚫</div>
        <h3>Oficina virtual como dirección</h3>
        <p>Google tiene bases de datos de coworkings. Si tu dirección aparece ahí, el perfil puede ser suspendido.</p>
      </div>
      <div class="infographic-card error">
        <div class="infographic-icon">🚫</div>
        <h3>Ignorar reseñas negativas</h3>
        <p>No responder dice a Google y usuarios que no te importa la experiencia del cliente.</p>
      </div>
      <div class="infographic-card error">
        <div class="infographic-icon">🚫</div>
        <h3>Perfiles duplicados</h3>
        <p>Crear múltiples perfiles para el mismo negocio. Google los fusiona o elimina, perdiendo toda la autoridad.</p>
      </div>
    </div>

    <h2 id="tiempo">Cuánto tiempo tarda en funcionar</h2>
    <p>No existe una respuesta universal, pero hay patrones claros según el punto de partida:</p>

    <table>
      <thead>
        <tr><th>Situación</th><th>Tiempo estimado para Pack de 3</th></tr>
      </thead>
      <tbody>
        <tr><td>Ficha nueva, ciudad pequeña, poca competencia</td><td>4–8 semanas</td></tr>
        <tr><td>Ficha nueva, ciudad mediana, competencia media</td><td>8–16 semanas</td></tr>
        <tr><td>Ficha existente sin optimizar, cualquier ciudad</td><td>4–6 semanas tras optimización</td></tr>
        <tr><td>Ciudad grande (Madrid, Barcelona), alta competencia</td><td>3–6 meses con trabajo constante</td></tr>
      </tbody>
    </table>

    <div class="stat-highlight">
      El SEO local es acumulativo. Cada semana de trabajo constante — fotos, posts, reseñas — suma posiciones que <strong>no desaparecen cuando paras</strong>, al contrario que la publicidad de pago.
    </div>

    <h2 id="slocal">Potencia tu visibilidad en Google Maps con slocal.es</h2>
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
      a: "Una suspensión significa que Google detectó algo que viola sus políticas — dirección no verificable, keywords en el nombre, múltiples perfiles. Puedes solicitar revisión a través del formulario oficial de Google Business Profile. El proceso puede tardar 2-4 semanas."
    }
  ]
}
];