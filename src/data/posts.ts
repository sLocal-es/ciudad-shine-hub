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
  extraSchema?: Record<string, any>;
}

export const posts: BlogPost[] = [

  {
    slug: "seo-para-fisioterapeutas-mas-pacientes-desde-google",
    title: "SEO para Fisioterapeutas: Más Pacientes desde Google",
    metaDescription: "Cómo conseguir más pacientes desde Google si eres fisioterapeuta. Ficha optimizada, web por tratamientos y reseñas gestionadas. Guía práctica 2026.",
    category: "Por sector",
    date: "2026-05-07",
    featuredImage: "/blog/fisio-localpack.svg",
    altText: "Mockup de Google Maps con Local Pack de tres clínicas de fisioterapia",
    excerpt: "Muchos fisioterapeutas tienen agenda con huecos no por falta de calidad, sino de visibilidad en Google. Esta guía explica cómo posicionar tu clínica en el Local Pack y atraer más pacientes mes a mes.",
    relatedSectorSlug: "seo-para-fisioterapeutas",
    content: `
      <p>Muchos fisioterapeutas en España tienen consultas con experiencia contrastada y pacientes satisfechos, pero su agenda sigue teniendo huecos cada semana. El motivo casi siempre es el mismo: cuando alguien en su ciudad busca "fisioterapeuta cerca de mí" o "fisioterapia deportiva en Barcelona", no aparecen. Esta guía explica cómo funciona el SEO local para fisioterapeutas, qué factores determinan quién aparece primero en Google Maps y qué puedes hacer para que tu clínica sea la que recibe la llamada.</p>

      <div class="key-points">
        <h2>Puntos clave</h2>
        <table>
          <thead><tr><th>Punto</th><th>Detalle</th></tr></thead>
          <tbody>
            <tr><td>Google Maps es el canal principal</td><td>El 60% de las búsquedas de fisioterapeuta incluyen "cerca de mí" o una ciudad concreta</td></tr>
            <tr><td>La ficha de Google es el primer paso</td><td>Sin Google Business Profile optimizado no apareces en el mapa aunque tengas web</td></tr>
            <tr><td>Las reseñas deciden la llamada</td><td>El 90% de los pacientes lee las reseñas antes de llamar a una clínica</td></tr>
            <tr><td>El contenido específico posiciona</td><td>Páginas por tratamiento (deportiva, suelo pélvico, neurológica) capturan búsquedas de alto valor</td></tr>
            <tr><td>Los resultados tardan 2-4 meses</td><td>El SEO local no es publicidad — construye una presencia que crece mes a mes</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Por qué los fisioterapeutas pierden pacientes en Google sin saberlo</h2>
      <p>Cuando alguien tiene una lesión de rodilla, busca rehabilitación postoperatoria o necesita fisioterapia para su hijo, lo primero que hace es abrir Google. Escribe "fisioterapeuta en Chamberí", "fisioterapia deportiva Madrid" o simplemente "fisioterapeuta cerca de mí". Google muestra tres clínicas en el mapa — el Local Pack — y esas tres reciben el 60% de todos los clics. Las demás no existen para ese paciente en ese momento.</p>
      <p>El problema no es la calidad de tu trabajo. Es la visibilidad. Y la visibilidad en Google Maps no llega sola — requiere optimización activa y continua de tres elementos que Google usa para decidir a quién muestra: relevancia, proximidad y prominencia.</p>
      <p>La relevancia depende de lo bien configurada que esté tu ficha y tu web para las búsquedas de tu especialidad. La proximidad es la distancia entre el buscador y tu clínica — no la puedes controlar. La prominencia depende de tus reseñas, tu actividad online y la autoridad de tu web. Las dos que puedes trabajar son relevancia y prominencia, y son exactamente las que marcan la diferencia entre aparecer o no aparecer.</p>

      <img src="/blog/fisio-localpack.svg" alt="Mockup de Google Maps mostrando el Local Pack con tres clínicas de fisioterapia" />

      <div class="stat-highlight">
        <strong>Dato real:</strong> Una fisioterapeuta en Valencia empezó a recibir 4 llamadas directas desde Google en su segundo mes tras optimizar su ficha y web con slocal.es. Empezó desde cero, sin presencia digital previa.
      </div>

      <h2>Cómo funciona el SEO local para fisioterapeutas</h2>

      <h3>Google Business Profile: la base de todo</h3>
      <p>Tu ficha de Google Business Profile es lo primero que ve un paciente cuando busca fisioterapeuta en tu ciudad. Antes de entrar en tu web, antes de leer tu descripción, ve tu nombre, tus reseñas, tus fotos y si estás abierto ahora mismo.</p>
      <p>Una ficha bien optimizada para fisioterapeutas incluye categoría principal correcta — "Fisioterapeuta", no "Centro de salud" — categorías secundarias según tus especialidades reales, descripción con keywords locales, fotos actualizadas de sala y equipo, horarios precisos y publicaciones mensuales.</p>

      <h3>La web: aparecer en búsquedas orgánicas además del mapa</h3>
      <p>Una web optimizada para fisioterapeutas no es una web genérica. Es una web con páginas específicas por tratamiento y por zona: fisioterapia-deportiva-madrid, fisioterapia-suelo-pelvico-barcelona, rehabilitacion-neurologica-valencia. Cada página responde exactamente a lo que busca un paciente concreto y convierte mucho más que una página genérica.</p>

      <div class="pro-tip">
        <strong>Consejo profesional:</strong> No intentes posicionar todas las especialidades en una sola página. Google prefiere páginas específicas para búsquedas específicas. Una página por tratamiento y por ciudad es la estructura que más pacientes genera a medio plazo.
      </div>

      <h3>Las reseñas: el factor que decide si llaman o no</h3>
      <p>Dos clínicas aparecen en el mapa. Una tiene 47 reseñas con una media de 4.9 estrellas, todas respondidas. La otra tiene 8 reseñas de hace dos años sin respuesta. El paciente llama a la primera. Las reseñas no son solo confianza para el paciente — también son una señal directa para Google.</p>

      <table>
        <thead><tr><th>Situación</th><th>Impacto en Google Maps</th></tr></thead>
        <tbody>
          <tr><td>Ficha sin reseñas</td><td>Muy baja visibilidad en búsquedas locales</td></tr>
          <tr><td>1-10 reseñas</td><td>Visibilidad básica, difícil entrar en top 3</td></tr>
          <tr><td>10-30 reseñas actuales</td><td>Empieza a competir en el mapa</td></tr>
          <tr><td>+30 reseñas con respuestas</td><td>Alta probabilidad de aparecer en top 3</td></tr>
        </tbody>
      </table>

      <img src="/blog/fisio-gbp.svg" alt="Mockup de ficha de Google Business Profile de un fisioterapeuta con cinco estrellas y 147 reseñas" />

      <h2>SEO para fisioterapeutas según especialidad</h2>
      <p>Cada especialidad tiene sus propias búsquedas y su propia competencia en Google.</p>
      <p><strong>Fisioterapia deportiva</strong> — búsquedas de alta intención: "fisioterapeuta deportivo [ciudad]", "fisioterapia lesiones deportivas", "recuperación muscular fisioterapia".</p>
      <p><strong>Fisioterapia de suelo pélvico</strong> — menos competencia digital que otras especialidades: "fisioterapia suelo pélvico [ciudad]", "fisioterapeuta postparto".</p>
      <p><strong>Fisioterapia neurológica</strong> — alta demanda y pocos profesionales bien posicionados: "fisioterapia neurológica [ciudad]", "rehabilitación neurológica fisioterapeuta".</p>
      <p><strong>Fisioterapia pediátrica</strong> — padres con alta urgencia: "fisioterapeuta infantil [ciudad]", "fisioterapia niños [ciudad]".</p>

      <div class="pro-tip">
        <strong>Consejo profesional:</strong> Si tienes varias especialidades, crea una página específica para cada una en tu web. Una página por especialidad y por ciudad es la estructura que más consultas genera.
      </div>

      <h2>Errores más comunes de fisioterapeutas en Google</h2>
      <table>
        <thead><tr><th>Error</th><th>Impacto</th><th>Solución</th></tr></thead>
        <tbody>
          <tr><td>Ficha desactualizada</td><td>Pérdida progresiva de posiciones</td><td>Publicaciones y fotos mensuales</td></tr>
          <tr><td>Sin web específica</td><td>Solo visible en Maps, no en orgánico</td><td>Web con páginas por tratamiento</td></tr>
          <tr><td>Reseñas sin responder</td><td>Baja confianza y penalización Google</td><td>Responder en menos de 24h</td></tr>
          <tr><td>NAP inconsistente</td><td>Confusión para Google</td><td>Documento maestro de datos</td></tr>
          <tr><td>Expectativas de resultados rápidos</td><td>Abandono prematuro</td><td>Comprometerse con mínimo 6 meses</td></tr>
        </tbody>
      </table>

      <h2>Cómo slocal.es ayuda a fisioterapeutas a conseguir más pacientes</h2>
      <p>En <a href="/">slocal.es</a> gestionamos el posicionamiento local de clínicas de fisioterapia en España. El servicio incluye la optimización y gestión mensual de tu Google Business Profile, una web con páginas específicas por tratamiento y ciudad, contenido mensual posicionado y un informe mensual con los resultados reales. Desde 147€/mes.</p>

      <img src="/blog/fisio-mobile-search.svg" alt="Mockup de móvil mostrando resultados de búsqueda de fisioterapeuta en Google" />

      <p><a href="/como-ve-google-mi-web">Analiza gratis cómo aparece tu clínica en Google →</a></p>

      <h2>Resumen</h2>
      <ul>
        <li>Google Business Profile optimizado — categorías correctas, fotos actualizadas, publicaciones mensuales</li>
        <li>Web con páginas por tratamiento y ciudad — no una sola página genérica</li>
        <li>Reseñas gestionadas — obtención sistemática y respuesta profesional</li>
        <li>Contenido mensual — artículos y posts que mantienen tu relevancia</li>
        <li>Consistencia y tiempo — los resultados llegan entre el mes 2 y el mes 6</li>
      </ul>
    `,
    faqs: [
      { q: "¿Cuánto tarda en verse el resultado del SEO local para fisioterapeutas?", a: "Los primeros resultados visibles aparecen entre el mes 2 y el mes 4. En especialidades con menos competencia digital los resultados llegan antes. A partir del mes 6 el flujo de pacientes se consolida y crece de forma predecible mes a mes." },
      { q: "¿Funciona el SEO local para fisioterapeutas autónomos o solo para clínicas grandes?", a: "El SEO local favorece especialmente a los profesionales independientes. Un fisioterapeuta bien posicionado en su barrio aparece antes que un gran centro sin presencia local trabajada. La especialización es tu ventaja competitiva." },
      { q: "¿Necesito web si ya tengo ficha de Google?", a: "La ficha te da visibilidad en el mapa. Una web optimizada te da visibilidad adicional en los resultados orgánicos para búsquedas específicas como 'fisioterapia deportiva en Madrid'. Los dos canales se complementan." },
      { q: "¿Cómo compito con clínicas que llevan años en Google?", a: "Con una estrategia de nicho. En lugar de competir por 'fisioterapeuta Madrid' posiciona para búsquedas específicas de tu especialidad y tu barrio. Menos competencia y más intención de consulta." },
      { q: "¿Es compatible el SEO local con estar en Doctoralia?", a: "Sí, son canales complementarios. La diferencia es que los pacientes que llegan desde Google llegan directamente a ti, sin compararte con otros fisioterapeutas y sin comisión por paciente." },
      { q: "¿Qué resultados puedo esperar?", a: "Los fisioterapeutas que trabajan con slocal.es empiezan a recibir contactos directos desde Google entre el mes 2 y el mes 4, con crecimiento constante a partir del mes 6." }
    ],
  },

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
    q: "¿Es gratis aparecer primero en Google Maps?",
    a: "Crear y optimizar tu ficha de Google Business Profile es completamente gratuito. No pagas a Google por aparecer en Google Maps ni por estar en el Pack de 3. Lo que determina tu posición es la calidad de tu ficha, la frecuencia de tus actualizaciones y el volumen de reseñas recientes — no el dinero. Eso sí, mantener una presencia activa requiere tiempo y conocimiento SEO local. Muchos negocios optan por delegar esta gestión en un especialista para no distraerse de su trabajo real."
  },
  {
    q: "¿Cuántas reseñas necesito para aparecer primero en Google Maps?",
    a: "No existe un número mínimo oficial, pero la práctica demuestra que con 15-20 reseñas recientes y una media superior a 4.3 estrellas puedes competir en ciudades medianas españolas como Zaragoza, Bilbao o Murcia. En ciudades grandes como Madrid o Barcelona necesitarás más — entre 40 y 80 reseñas activas para entrar en el Pack de 3 en sectores competidos. Lo más importante no es la cantidad total sino la frecuencia: 5 reseñas nuevas al mes durante 6 meses es más poderoso que 100 reseñas acumuladas hace dos años. Google interpreta la actividad reciente como señal de negocio activo y relevante."
  },
  {
    q: "¿Cuánto tiempo tarda en funcionar el posicionamiento en Google Maps?",
    a: "Los primeros resultados visibles suelen aparecer entre la semana 4 y la semana 8 tras una optimización completa de la ficha. Para entrar en el Pack de 3 en ciudades medianas con competencia normal, el plazo habitual es de 2 a 4 meses con trabajo constante — fotos semanales, publicaciones regulares y reseñas nuevas cada mes. En ciudades grandes o sectores muy competidos como fontaneros en Madrid o reformas en Barcelona, el plazo puede extenderse a 4-6 meses. El SEO local es acumulativo: cada acción suma y no desaparece cuando paras, al contrario que la publicidad de pago."
  },
  {
    q: "¿Puedo aparecer en Google Maps sin tener local físico?",
    a: "Sí, completamente. Si ofreces servicios a domicilio — fontaneros, electricistas, reformas, entrenadores personales, psicólogos a domicilio — puedes configurar tu ficha como negocio en área de servicio sin mostrar dirección física. Defines las zonas donde operas por código postal o radio en kilómetros y Google te mostrará en las búsquedas locales de esas áreas. Esta configuración es especialmente importante para aparecer en búsquedas como 'fontanero urgencias cerca de mí' o 'reformas en mi barrio' sin necesidad de oficina física."
  },
  {
    q: "¿Qué diferencia hay entre Google Maps y Google Business Profile?",
    a: "Google Business Profile (antes llamado Google My Business) es el panel de gestión donde configuras y optimizas la información de tu negocio. Google Maps es el mapa donde esa información aparece públicamente cuando alguien te busca. Son la misma infraestructura — cuando optimizas tu perfil en Google Business Profile estás mejorando directamente cómo apareces en Google Maps y en el Pack de 3 de búsquedas locales. También influye en cómo apareces en el panel de conocimiento de Google cuando alguien busca directamente el nombre de tu negocio."
  },
  {
    q: "¿Qué hago si Google suspende mi ficha de Google Maps?",
    a: "Una suspensión significa que Google detectó una posible violación de sus políticas — dirección no verificable, keywords artificiales en el nombre del negocio, múltiples perfiles para el mismo negocio, o uso de oficina virtual como dirección. El primer paso es identificar la causa revisando las políticas de Google Business Profile. Después puedes solicitar una revisión a través del formulario oficial. El proceso puede tardar entre 2 y 4 semanas. Durante ese tiempo tu negocio desaparece de Google Maps completamente, lo que puede suponer una pérdida significativa de contactos si dependías de ese canal para conseguir clientes."
  }
],
},

{
  slug: "seo-local-cordoba-como-conseguir-mas-clientes-desde-google",
  title: "SEO Local en Córdoba: Cómo Conseguir Más Clientes desde Google",
  metaDescription: "Cómo posicionar tu negocio en Google Maps en Córdoba en 2026. Barrios, reseñas, oportunidad real y errores más comunes. Guía práctica.",
  category: "SEO Local",
  date: "2026-05-08",
  featuredImage: "/blog/cordoba-mobile-search.svg",
  altText: "Mockup de móvil con la búsqueda 'fontanero urgente Córdoba' en Google Maps mostrando el Local Pack",
  excerpt: "Córdoba es una de las ciudades españolas con menos competencia digital y más oportunidad para negocios locales que sepan posicionar su ficha de Google. Esta guía explica cómo aparecer primero en los barrios donde están tus clientes.",
  relatedCitySlug: "seo-local-cordoba",
  extraSchema: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "SEO Local en Córdoba: Cómo Conseguir Más Clientes desde Google",
    author: { "@type": "Organization", name: "slocal.es", url: "https://slocal.es" },
    datePublished: "2026-05-08",
    inLanguage: "es",
    about: {
      "@type": "Place",
      name: "Córdoba, España",
      geo: { "@type": "GeoCoordinates", latitude: "37.8882", longitude: "-4.7794" },
    },
  },
  content: `
    <p>Córdoba tiene 325.000 habitantes, una economía local viva y un volumen de búsquedas en Google que crece cada año. Pero la mayoría de negocios locales — desde fontaneros en el Casco Histórico hasta clínicas en Ciudad Jardín — no aparecen cuando un cliente los busca. La competencia digital es mucho menor que en Madrid o Sevilla, lo que convierte a Córdoba en una de las ciudades con más oportunidad real para posicionarse en Google Maps con un trabajo bien hecho.</p>

    <nav class="toc">
      <h2>Tabla de Contenidos</h2>
      <ul>
        <li><a href="#oportunidad">Por qué Córdoba es una oportunidad real</a></li>
        <li><a href="#barrios">Los barrios donde están tus clientes</a></li>
        <li><a href="#mapa">Mapa de Córdoba y zonas con más demanda</a></li>
        <li><a href="#resenas">Reseñas: el factor que decide la llamada</a></li>
        <li><a href="#errores">Errores más comunes en Córdoba</a></li>
        <li><a href="#slocal">Cómo te ayudamos desde slocal.es</a></li>
        <li><a href="#faq">Preguntas frecuentes</a></li>
      </ul>
    </nav>

    <div class="key-points">
      <h2>Puntos clave</h2>
      <table>
        <thead><tr><th>Punto</th><th>Detalle</th></tr></thead>
        <tbody>
          <tr><td>Competencia digital baja</td><td>Solo el 38% de los negocios locales en Córdoba tienen su ficha de Google completa</td></tr>
          <tr><td>El Local Pack es el canal principal</td><td>Más del 70% de las búsquedas locales en Córdoba acaban en una de las 3 fichas del mapa</td></tr>
          <tr><td>Los barrios marcan la búsqueda</td><td>"Fontanero Casco Histórico" o "fisio Ciudad Jardín" tienen mucha menos competencia que "[servicio] Córdoba"</td></tr>
          <tr><td>Las reseñas pesan más</td><td>En ciudades medianas como Córdoba, 20-30 reseñas activas suelen bastar para entrar en el Pack de 3</td></tr>
          <tr><td>Resultados en 2-4 meses</td><td>El plazo medio para ver tráfico real desde Google en Córdoba es más corto que en grandes capitales</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="oportunidad">Por qué Córdoba es una oportunidad real para tu negocio</h2>
    <p>Córdoba combina dos factores que no coinciden en muchas ciudades españolas: una población suficientemente grande para generar búsquedas constantes — más de 90.000 búsquedas locales mensuales según Google Keyword Planner — y una competencia digital mucho más baja que en Sevilla, Málaga o Madrid. Eso significa que un fontanero, una clínica o una empresa de reformas con la ficha bien optimizada puede entrar en el Local Pack en cuestión de semanas, no meses.</p>
    <p>El cliente cordobés busca exactamente igual que en cualquier otra ciudad: abre Google, escribe "[servicio] cerca de mí" o "[servicio] Córdoba" y llama directamente al primero o segundo resultado del mapa. Si tu negocio no aparece ahí, no existe para él en ese momento — independientemente de la calidad de tu trabajo o de cuántos años lleves abierto.</p>

    <img src="/blog/cordoba-mobile-search.svg" alt="Móvil mostrando la búsqueda 'fontanero urgente Córdoba' en Google Maps con tres negocios en el Local Pack" />

    <div class="stat-highlight">
      <strong>Dato real:</strong> Solo el 38% de los negocios locales en Córdoba tiene su ficha de Google Business Profile completamente optimizada. La barrera de entrada al Pack de 3 es más baja que en cualquier capital española.
    </div>

    <h2 id="barrios">Los barrios de Córdoba donde están tus clientes</h2>
    <p>Córdoba no se busca como una sola ciudad, se busca por barrios. La gente que vive en El Brillante busca diferente a la que vive en Fátima, y Google lo sabe. Posicionar tu ficha por barrio es una de las palancas más rápidas para conseguir llamadas: hay menos competidores, las búsquedas son más específicas y la intención de contratar es altísima.</p>
    <p><strong>Casco Histórico</strong> — alta densidad turística y comercial, búsquedas de servicios urgentes (fontanería, cerrajería, climatización) y restauración. Mucho tráfico peatonal, ficha con fotos del local recomendable.</p>
    <p><strong>Ciudad Jardín</strong> — barrio residencial consolidado, búsquedas habituales de clínicas, fisioterapia, dentistas y servicios para el hogar.</p>
    <p><strong>El Brillante</strong> — zona residencial de poder adquisitivo medio-alto, alta demanda de reformas, decoración, servicios de bienestar y entrenamiento personal.</p>
    <p><strong>Parque Figueroa</strong> — barrio familiar con mucha demanda de servicios para el hogar, talleres y comercio de proximidad.</p>
    <p><strong>Fátima</strong> — zona con mezcla residencial y comercial, búsquedas constantes de fontaneros, electricistas y reformas pequeñas.</p>
    <p><strong>Levante</strong> — zona en crecimiento con nueva construcción y demanda creciente de servicios para el hogar y comercios locales.</p>

    <h2 id="mapa">Mapa de Córdoba con las zonas de más demanda</h2>
    <p>Visualizar dónde están tus clientes ayuda a decidir cómo configurar tu área de servicio en la ficha de Google y qué páginas crear en tu web.</p>

    <img src="/blog/cordoba-map-pins.svg" alt="Mapa de Córdoba con pins naranjas marcando los barrios con más demanda local: Casco Histórico, Ciudad Jardín, El Brillante, Parque Figueroa, Fátima y Levante" />

    <div class="map-embed" style="margin: 24px 0;">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24968!2d-4.7794!3d37.8882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses" width="100%" height="350" style="border:0;border-radius:8px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa de Córdoba"></iframe>
    </div>

    <div class="pro-tip">
      <strong>Consejo profesional:</strong> Si trabajas en varios barrios, no intentes posicionar todo en una sola página. Crea una página específica por barrio en tu web — "fontanero El Brillante", "fisioterapeuta Ciudad Jardín" — y enlázalas desde tu ficha. Es la forma más rápida de capturar búsquedas hiperlocales con muy poca competencia.
    </div>

    <h2 id="resenas">Las reseñas: el factor que decide la llamada en Córdoba</h2>
    <p>En una ciudad mediana como Córdoba, las reseñas pesan incluso más que en grandes capitales. Cuando un cliente compara dos fichas en el Local Pack, una con 23 reseñas recientes a 4,9 estrellas gana frente a otra con 7 reseñas antiguas casi siempre. Y Google lo sabe: la frecuencia y calidad de tus reseñas es uno de los factores que más mueve tu posición en el mapa.</p>

    <img src="/blog/cordoba-gbp.svg" alt="Mockup de ficha de Google Business Profile de un negocio en Córdoba con 4,9 estrellas y 23 reseñas" />

    <table>
      <thead><tr><th>Reseñas activas</th><th>Probabilidad de Pack de 3 en Córdoba</th></tr></thead>
      <tbody>
        <tr><td>0-5</td><td>Muy baja — apareces solo en búsquedas con tu marca</td></tr>
        <tr><td>10-20</td><td>Empiezas a competir en búsquedas locales por barrio</td></tr>
        <tr><td>20-40 con respuesta</td><td>Alta probabilidad de Pack de 3 en tu barrio</td></tr>
        <tr><td>+40 con respuesta semanal</td><td>Pack de 3 en búsquedas generales "[servicio] Córdoba"</td></tr>
      </tbody>
    </table>

    <h2 id="errores">Errores más comunes de los negocios cordobeses en Google</h2>
    <table>
      <thead><tr><th>Error</th><th>Impacto</th><th>Solución</th></tr></thead>
      <tbody>
        <tr><td>Ficha sin barrio en la descripción</td><td>No apareces en búsquedas hiperlocales</td><td>Mencionar barrio y zona de servicio</td></tr>
        <tr><td>Sin fotos del trabajo o del local</td><td>Menos clics y menos confianza</td><td>Subir 2-3 fotos al mes mínimo</td></tr>
        <tr><td>Reseñas sin responder</td><td>Penalización Google + menos confianza</td><td>Responder en menos de 24 horas</td></tr>
        <tr><td>Datos diferentes en web y ficha</td><td>Google duda de tu negocio</td><td>NAP idéntico en todas partes</td></tr>
        <tr><td>Esperar resultados sin trabajo continuo</td><td>Estancamiento en posición 5-10</td><td>Publicaciones y reseñas mensuales</td></tr>
      </tbody>
    </table>

    <h2 id="slocal">Cómo te ayudamos desde slocal.es a posicionar tu negocio en Córdoba</h2>
    <p>En <a href="/">slocal.es</a> gestionamos el SEO local de negocios cordobeses como un sistema mensual: optimizamos y mantenemos tu ficha de Google Business Profile, creamos páginas por barrio en tu web, gestionamos la obtención y respuesta de reseñas, y publicamos contenido mensual que te posiciona para nuevas búsquedas. Cada mes recibes un informe claro con las posiciones ganadas, las llamadas generadas y qué vamos a hacer el mes siguiente.</p>
    <p>Trabajamos con fontaneros, fisioterapeutas, clínicas, empresas de reformas y comercios locales en toda <a href="/seo-local-cordoba">Córdoba</a> y su área metropolitana. Sin permanencia, sin intermediarios, hablas siempre con la misma persona. Desde 147€/mes + IVA.</p>
    <p><a href="/como-ve-google-mi-web">Analiza gratis cómo aparece tu negocio en Google →</a></p>

    <h2>Resumen</h2>
    <ul>
      <li>Córdoba tiene baja competencia digital — la oportunidad es real y rápida</li>
      <li>Posicionar por barrio (Casco Histórico, Ciudad Jardín, El Brillante…) es la palanca más eficaz</li>
      <li>20-30 reseñas activas con respuesta suelen bastar para entrar en el Pack de 3</li>
      <li>Una ficha con fotos, publicaciones y datos coherentes posiciona en 2-4 meses</li>
      <li>El SEO local es acumulativo: cada mes de trabajo suma posiciones que no desaparecen</li>
    </ul>
  `,
  faqs: [
    { q: "¿Cuánto tarda mi negocio en aparecer primero en Google Maps en Córdoba?", a: "En Córdoba el plazo medio para entrar en el Pack de 3 con una ficha bien optimizada es de 2 a 4 meses. La competencia digital es menor que en Sevilla o Málaga, lo que acelera los resultados frente a grandes capitales. En búsquedas por barrio (por ejemplo 'fontanero El Brillante') es habitual ver resultados en 4-8 semanas." },
    { q: "¿Cuántas reseñas necesito para competir en Google en Córdoba?", a: "Con 20-30 reseñas recientes y una media superior a 4,5 estrellas suele ser suficiente para entrar en el Pack de 3 de tu barrio. Para búsquedas generales tipo '[servicio] Córdoba' necesitarás 40-60 reseñas activas. Lo decisivo no es el total acumulado, sino la frecuencia: 3-4 reseñas nuevas al mes es una señal muy potente para Google." },
    { q: "¿Tiene sentido el SEO local en Córdoba si mi competencia no lo hace?", a: "Sí, precisamente por eso es la mejor oportunidad. Solo el 38% de los negocios locales cordobeses tienen su ficha de Google completamente optimizada. Empezar antes que tu competencia significa quedarte con esos puestos del Pack de 3 antes de que el mercado se sature, como ya ha pasado en Madrid o Barcelona." },
    { q: "¿Funciona el SEO local si no tengo local físico en Córdoba?", a: "Sí. Si ofreces servicios a domicilio — fontaneros, electricistas, reformas, entrenadores personales — puedes configurar tu ficha como negocio en área de servicio y definir las zonas de Córdoba donde operas. Aparecerás en búsquedas locales sin necesidad de mostrar dirección física." },
    { q: "¿Es mejor posicionar 'Córdoba' o un barrio concreto?", a: "Lo ideal es trabajar ambos a la vez. Las búsquedas por barrio (Casco Histórico, Ciudad Jardín, El Brillante…) tienen menos competencia y conviertes antes. Las búsquedas generales por 'Córdoba' tienen más volumen pero requieren más tiempo y reseñas. Una estrategia bien hecha gana primero los barrios y luego escala a la ciudad." },
    { q: "¿Cuánto cuesta el SEO local para un negocio en Córdoba?", a: "En slocal.es trabajamos con negocios cordobeses desde 147€/mes + IVA, sin permanencia. El plan incluye gestión mensual de tu ficha de Google, contenido optimizado por barrio, gestión de reseñas e informe mensual de resultados. Hablas siempre con la misma persona, sin intermediarios." }
  ],
},
{
  slug: "seo-local-mejor-estrategia-marketing-nuevo-negocio",
  title: "SEO local: la mejor estrategia para iniciar un negocio",
  metaDescription: "Descubre por qué el SEO local supera a los anuncios cuando inicias un negocio. Datos reales, estrategia paso a paso y auditoría gratuita.",
  category: "SEO Local",
  date: "2026-05-13",
  featuredImage: "/blog/cordoba-mobile-search.svg",
  altText: "Búsqueda local en Google desde un móvil mostrando negocios cercanos",
  excerpt: "Por qué el SEO local supera a los anuncios cuando arrancas un negocio: datos reales, estrategia paso a paso y cómo conseguir tus primeros clientes desde Google sin gastar en publicidad.",
  content: "",
}];