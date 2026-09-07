import SectorMasterTemplate, { SectorTemplateContent } from "@/components/sector/SectorMasterTemplate";

const TITLE = "Ficha de Google Mi Negocio";
const PATH = "/ficha-google-mi-negocio";
const URL = `https://slocal.es${PATH}`;

const faqs = [
  {
    q: "¿Qué es la ficha de Google Mi Negocio y por qué es importante?",
    a: "La ficha de Google Mi Negocio (hoy Google Business Profile) es el perfil gratuito que controla cómo aparece tu negocio en Google Maps y en las búsquedas locales: nombre, fotos, reseñas, horario, servicios y forma de contacto. Es lo primero que ve un cliente cuando te busca, y en muchos casos decide la llamada antes de entrar en tu web.",
  },
  {
    q: "¿Cómo aparecer en Google Maps con mi negocio?",
    a: "Para aparecer en Google Maps necesitas una ficha verificada, con la categoría principal correcta, los servicios detallados, la zona de servicio bien definida, fotos actualizadas, reseñas recientes respondidas y coherencia entre la información de la ficha, tu web y los directorios donde apareces. Google decide qué fichas muestra según relevancia, proximidad y notoriedad: cuando esos tres factores se trabajan de forma continua, la ficha empieza a entrar en el Local Pack de las búsquedas de tu zona.",
  },
  {
    q: "¿Por qué mi ficha no aparece cuando busco mi servicio?",
    a: "Las causas más habituales son: ficha sin verificar o duplicada, categoría principal equivocada, servicios y zona de servicio sin definir, ausencia de reseñas recientes, información distinta entre la ficha y la web, o simplemente que otros negocios de tu zona trabajan su perfil cada mes y tú no. Google no oculta tu ficha: la coloca por detrás de las que interpreta como más relevantes.",
  },
  {
    q: "¿Qué es el Local Pack y por qué importa tanto?",
    a: "El Local Pack es el bloque de tres fichas con mapa que Google muestra arriba en las búsquedas con intención local. Esos tres resultados concentran la mayoría de los clics, las llamadas y las solicitudes de ruta. Entrar ahí es el objetivo principal de optimizar una ficha de Google Business Profile.",
  },
  {
    q: "¿Con qué frecuencia hay que actualizar la ficha de Google?",
    a: "Google premia la actividad continua. Lo razonable es publicar de forma periódica cada mes, renovar fotos cada pocos meses, responder todas las reseñas en las primeras horas y revisar horarios y servicios cuando cambian. Una ficha parada transmite a Google que el negocio ha perdido actividad, y eso se refleja en la posición.",
  },
  {
    q: "¿Las reseñas afectan a mi posición en Google Maps?",
    a: "Sí. El volumen, la frecuencia, la puntuación y las respuestas del propietario son señales que Google usa para ordenar las fichas. Además influyen en la decisión del cliente: entre dos negocios cercanos, casi siempre llama al que tiene reseñas mejores y más recientes.",
  },
  {
    q: "¿Puedo gestionar la ficha de Google yo solo?",
    a: "Técnicamente sí. En la práctica requiere constancia: publicar, pedir y responder reseñas, mantener fotos y servicios al día, revisar estadísticas y corregir lo que Google cambia por su cuenta. La mayoría de negocios locales no tiene tiempo para ese seguimiento mensual, y ahí es donde tiene sentido delegarlo.",
  },
  {
    q: "¿Necesito web además de la ficha de Google?",
    a: "La ficha genera la llamada, pero la web sostiene la confianza y capta las búsquedas orgánicas que no pasan por Maps. Cuando ficha y web comparten información, servicios y zonas, se refuerzan entre sí y el posicionamiento local es mucho más estable.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
    { "@type": "ListItem", position: 2, name: TITLE, item: URL },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Optimización de ficha de Google Business Profile",
  provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
  areaServed: "España",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "slocal.es",
  url: URL,
  description:
    "Optimización y gestión de la ficha de Google Mi Negocio (Google Business Profile) para negocios locales en España.",
  areaServed: "España",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "09:00", closes: "14:00" },
  ],
};

const mapsReasons = [
  {
    h: "La ficha no está verificada o está duplicada",
    d: "Sin verificación, Google no confía en la información. Y si existen dos fichas del mismo negocio, las señales se reparten y ninguna llega a competir.",
  },
  {
    h: "La categoría principal no coincide con la búsqueda",
    d: "La categoría principal es la señal más fuerte de relevancia. Si no corresponde con el servicio que buscan tus clientes, Google muestra otras fichas antes que la tuya.",
  },
  {
    h: "Faltan servicios, zona de servicio y fotos actuales",
    d: "Una ficha incompleta da a Google menos motivos para mostrarla y al cliente menos motivos para llamar. Los campos vacíos son posiciones regaladas.",
  },
  {
    h: "No hay reseñas recientes ni respuestas",
    d: "Las reseñas nuevas y respondidas son una señal de negocio activo. Sin ellas, la ficha se queda por detrás de competidores que sí las trabajan.",
  },
  {
    h: "La información no coincide con la web y los directorios",
    d: "Cuando el nombre, la dirección o el teléfono varían entre ficha, web y directorios, Google resta confianza y baja la ficha en el Local Pack.",
  },
];

const MapsBlock = () => (
  <section className="bg-white py-24 md:py-32 border-t border-warm-fg/10">
    <div className="container grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
      <div className="md:col-span-5">
        <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— Google Maps</p>
        <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
          ¿Cómo <span className="text-primary">aparecer en Google Maps</span> si tu ficha hoy no se ve?
        </h2>
        <p className="text-base md:text-lg font-body text-warm-fg leading-relaxed mb-5">
          Cuando alguien busca un servicio cerca de él, Google muestra arriba el Local Pack: tres
          fichas con mapa que se llevan la mayor parte de las llamadas y las solicitudes de ruta.
          Todo lo que quede por debajo de ese bloque recibe una fracción mínima de los contactos.
        </p>
        <p className="text-base md:text-lg font-body text-warm-fg leading-relaxed">
          Google decide qué fichas entran ahí valorando relevancia, proximidad y notoriedad. No es
          un sorteo: es el resultado de cómo está configurada, completada y mantenida cada ficha.
          Por eso aparecer en Google Maps no se resuelve creando el perfil, sino optimizándolo y
          manteniéndolo activo mes a mes.
        </p>
      </div>
      <div className="md:col-span-7">
        <ol className="space-y-10 md:space-y-12">
          {mapsReasons.map((r, i) => (
            <li key={r.h} className="flex gap-6">
              <span className="font-heading text-primary text-sm pt-1 shrink-0 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-heading font-semibold text-warm-fg text-xl md:text-2xl leading-tight mb-3">
                  {r.h}
                </h3>
                <p className="text-base font-body font-light text-warm-fg/70 leading-relaxed max-w-2xl">
                  {r.d}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

const FichaGoogleMiNegocio = () => {
  const content: SectorTemplateContent = {
    seoTitle: "Ficha de Google Mi Negocio: optimización de Google Business Profile | slocal.es",
    seoDescription:
      "Agencia SEO Local: optimizamos y gestionamos tu ficha de Google Mi Negocio (Google Business Profile) para que aparezcas en Google Maps cuando tus clientes te buscan.",
    canonical: PATH,
    sectorLabel: TITLE,
    sectorSlug: "ficha-google-mi-negocio",
    sectorLower: "tu negocio local",
    clientWord: "clientes",

    heroEyebrow: "Agencia SEO Local · Google Business Profile",
    heroH1: (
      <h1>
        Ficha de <span className="text-primary">Google Mi Negocio</span>
      </h1>
    ),
    heroSubtitle: (
      <>
        Optimizamos y gestionamos tu ficha de Google Business Profile para que tu negocio aparezca
        en Google Maps y en las búsquedas locales cuando alguien necesita tu servicio.
      </>
    ),
    heroTrust: ["Ficha gestionada cada mes", "Reseñas y publicaciones", "Auditoría inicial sin coste"],

    manifestoEyebrow: "— El punto de partida",
    manifestoH2: (
      <>
        ¿Por qué tu ficha de Google no te está trayendo <span className="text-primary">clientes</span>?
      </>
    ),
    manifestoBody: (
      <>
        Google Mi Negocio — hoy Google Business Profile — es tu escaparate en Google Maps y en las
        búsquedas locales. El problema es que la mayoría de fichas están creadas, pero no
        optimizadas: sin categoría correcta, sin servicios detallados, sin fotos recientes, sin
        reseñas nuevas y sin publicaciones. Eso le dice a Google que el negocio no está activo, y
        Google muestra antes a quien sí lo está. Optimizar la ficha no es rellenar campos: es
        trabajar cada señal que decide tu posición.
      </>
    ),

    gbpH3: (
      <>
        Tu ficha de <span className="text-primary">Google Business Profile</span>, optimizada y activa
      </>
    ),
    gbpBody: (
      <>
        Revisamos o creamos tu ficha desde cero y la mantenemos viva: categorías, atributos,
        descripción, servicios, zona de servicio, fotos, reseñas y publicaciones. Cada campo
        trabajado para que Google te muestre antes y el cliente te llame.
      </>
    ),
    gbpFeatures: [
      "Categoría principal y secundarias",
      "Servicios y zona de servicio",
      "Publicaciones periódicas",
      "Gestión y respuesta de reseñas",
      "Fotos y atributos actualizados",
      "Seguimiento de llamadas y rutas",
    ],

    webH3: (
      <>
        Una web <span className="text-primary">coherente</span> con tu ficha
      </>
    ),
    webBody: (
      <>
        Google cruza la información de tu ficha con tu web y con los directorios donde apareces. Si
        no coincide, resta confianza. Alineamos nombre, dirección, teléfono, servicios y zonas para
        que ficha y web se refuercen entre sí.
      </>
    ),
    webFeatures: [
      "Coherencia NAP completa",
      "Páginas por servicio",
      "Páginas por zona",
      "Datos estructurados",
      "Formularios y WhatsApp",
      "Medición de contactos",
    ],

    auditoriaFormType: "auditoria_ficha_google",
    auditoriaH2: "Descubre qué está frenando tu ficha de Google",
    auditoriaBody:
      "Analizamos gratis tu ficha de Google Business Profile y tu web, y te enseñamos los errores concretos que impiden que aparezcas por delante de tu competencia en Google Maps.",

    howH2: (
      <>
        ¿Cómo optimizamos tu ficha para que <span className="text-primary">te llamen</span>?
      </>
    ),
    howIntro: (
      <>
        Trabajamos la ficha como un activo que se mantiene, no como una tarea que se hace una vez.
        Estas son las cinco fases del proceso.
      </>
    ),
    howSteps: [
      { h: "Auditoría", d: "Revisamos tu ficha, tu web y las fichas de los negocios que hoy aparecen por delante de ti." },
      { h: "Configuración", d: "Categorías, atributos, descripción, servicios, productos, horarios y zona de servicio bien definidos." },
      { h: "Optimización continua", d: "Publicaciones periódicas, fotos nuevas y contenido alineado con las búsquedas de tu zona." },
      { h: "Reseñas y autoridad local", d: "Estrategia para conseguir reseñas, respuesta a todas ellas y coherencia con directorios locales." },
      { h: "Seguimiento", d: "Cada mes revisamos búsquedas, llamadas, rutas y posiciones, y ajustamos lo que haga falta." },
    ],

    hideCase: true,
    caseH2: <></>,
    caseIntro: <></>,
    caseStages: [],
    caseKpis: [],

    extraSection: <MapsBlock />,

    monthlyH2: (
      <>
        ¿Por qué la ficha necesita trabajo <span className="text-primary">mes a mes</span>?
      </>
    ),
    monthlyBody: (
      <>
        Porque Google Maps no es una foto fija, es una competición continua entre las fichas de tu
        zona. Mantener la actividad es lo que sostiene la posición.
      </>
    ),
    monthlyReasons: [
      { h: "Tus competidores siguen trabajando", d: "Publican, consiguen reseñas y completan su ficha. Si tú te paras, ellos avanzan y ocupan tu sitio." },
      { h: "Google cambia sus criterios", d: "El algoritmo local se actualiza con frecuencia y lo que ayer sostenía tu posición hoy puede no ser suficiente." },
      { h: "Las reseñas envejecen", d: "Google valora las reseñas recientes. Un buen historial antiguo pierde fuerza si no llegan nuevas opiniones." },
      { h: "La información se queda desactualizada", d: "Horarios, servicios y datos cambian. Cada dato erróneo es una llamada perdida y una señal negativa para Google." },
    ],

    faqs,

    citiesH2: <>Optimización de ficha de Google en toda España</>,
    citiesBody: (
      <>
        Trabajamos con negocios locales de todo el país. Elige tu ciudad para ver cómo planteamos el
        posicionamiento local en tu mercado.
      </>
    ),
    otherSectorsH2: <>Optimización de ficha de Google por sector</>,
    otherSectorsBody: (
      <>
        Cada sector compite por búsquedas distintas y necesita una ficha configurada de forma
        distinta. Estas son algunas de las especialidades con las que trabajamos.
      </>
    ),
    otherSectors: [
      { label: "SEO para fontaneros", slug: "seo-para-fontaneros" },
      { label: "SEO para abogados", slug: "seo-para-abogados" },
      { label: "SEO para dentistas", slug: "seo-para-dentistas" },
      { label: "SEO para fisioterapeutas", slug: "seo-para-fisioterapeutas" },
      { label: "SEO para psicólogos", slug: "seo-para-psicologos" },
      { label: "SEO para empresas de reformas", slug: "seo-para-reformas" },
    ],

    finalCtaTitle: "Tu ficha de Google puede traerte clientes cada día. Solo necesita estar optimizada.",

    jsonLd: [breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema],
  };

  return <SectorMasterTemplate content={content} />;
};

export default FichaGoogleMiNegocio;
