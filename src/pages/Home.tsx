import { Link } from "@/lib/router-compat";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import SectorHeroDark from "@/components/sector/SectorHeroDark";
import LogoMarquee from "@/components/LogoMarquee";
import LeadMagnetForm from "@/components/forms/LeadMagnetForm";
import ContactForm from "@/components/forms/ContactForm";
import ElfsightReviews from "@/components/ElfsightReviews";
import { ServiceCard, type ExtraService } from "@/components/servicios/ServiciosUI";
import queEsSeoLocalAsset from "@/assets/que-es-seo-local.webp.asset.json";
import relevanciaOnPageImage from "@/assets/home/relevancia-on-page.webp";
import consistenciaNapImage from "@/assets/home/consistencia-nap.webp";
import resenasAutoridadImage from "@/assets/home/resenas-autoridad-local.webp";
import auditoriaSeoImage from "@/assets/home/auditoria-seo.webp";
import palabrasClaveImage from "@/assets/home/estudio-palabras-clave.webp";
import fichaGoogleImage from "@/assets/home/ficha-google-business.webp";
import webSeoLocalImage from "@/assets/home/web-seo-local.webp";
import citacionesImage from "@/assets/home/citaciones-directorios.webp";
import reporteMensualImage from "@/assets/home/reporte-mensual.webp";

const sectionCls = "bg-white py-24 md:py-32 border-t border-warm-fg/10";

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconSpark = () => (
  <svg {...iconProps} aria-hidden>
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
    <path d="M18.5 16.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z" />
  </svg>
);

const IconStar = () => (
  <svg {...iconProps} aria-hidden>
    <path d="M12 4l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 9.7l5.4-.8L12 4z" />
  </svg>
);

const IconTarget = () => (
  <svg {...iconProps} aria-hidden>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
  </svg>
);

const complementaryServices: ExtraService[] = [
  {
    id: "ads",
    title: <><span className="text-primary">Google</span> Ads</>,
    illustration: "Ilustración isométrica: anuncio de búsqueda de Google generando llamadas",
    icon: <IconTarget />,
    description: "Empieza a recibir llamadas desde el primer día mientras el SEO Local sigue creciendo.",
    features: ["Campañas de búsqueda", "Optimización mensual", "Seguimiento de conversiones", "Mejora continua"],
    to: "/contacto",
  },
  {
    id: "resenas",
    title: <>Gestión de <span className="text-primary">reseñas PRO</span></>,
    illustration: "Ilustración isométrica: tarjeta NFC y código QR generando reseñas de 5 estrellas",
    icon: <IconStar />,
    description: "Automatiza la captación de reseñas reales y mejora la confianza de tus futuros clientes.",
    features: ["Tarjetas NFC", "Código QR", "Solicitudes automáticas", "Respuesta profesional", "Incremento de reputación"],
    to: "/contacto",
  },
  {
    id: "geo",
    title: <>Posicionamiento <span className="text-primary">GEO</span></>,
    illustration: "Ilustración isométrica: buscadores con IA (ChatGPT, Gemini) recomendando un negocio local",
    icon: <IconSpark />,
    description: "Haz que tu empresa aparezca cuando los clientes preguntan a ChatGPT, Gemini, Claude, Copilot o Google AI Overviews.",
    features: ["Optimización para IA", "ChatGPT", "Gemini", "Claude", "Google AI Overviews"],
    to: "/contacto",
  },
];

const positioningFactors = [
  {
    eyebrow: "Relevancia",
    title: <>Optimización <span className="text-primary">on-page</span></>,
    text: "Optimizamos tu ficha de Google Business Profile y tu web con las mismas categorías, servicios y zonas que usa la gente cuando busca — para que Google entienda exactamente qué ofreces y dónde.",
    image: relevanciaOnPageImage,
    alt: "Ilustración de una ficha de negocio y una web optimizadas con categorías y palabras clave locales",
  },
  {
    eyebrow: "Notoriedad y confianza",
    title: <>Consistencia <span className="text-primary">NAP</span></>,
    text: "Tu nombre, dirección y teléfono deben aparecer exactamente igual en tu ficha, tu web y los directorios donde apareces. Cuando no coincide, Google pierde confianza en tu negocio y te baja posiciones.",
    image: consistenciaNapImage,
    alt: "Ilustración de datos de nombre, dirección y teléfono coincidentes en varias fichas de directorios",
  },
  {
    eyebrow: "Notoriedad",
    title: <>Reseñas y <span className="text-primary">autoridad local</span></>,
    text: "El volumen, la frecuencia y cómo respondes a tus reseñas son una de las señales que más pesan a la hora de decidir qué negocio aparece primero.",
    image: resenasAutoridadImage,
    alt: "Ilustración de una ficha local con reseñas, estrellas y respuestas del negocio",
  },
];

const includedServices = [
  {
    eyebrow: "Diagnóstico",
    title: <><span className="text-primary">Auditoría SEO</span> inicial</>,
    text: "Analizamos tu ficha de Google Business Profile, tu web y a tu competencia directa antes de tocar nada. Así detectamos qué frena tu visibilidad y qué acciones deben tener prioridad.",
    image: auditoriaSeoImage,
    alt: "Ilustración de una auditoría SEO de una web y una ficha de negocio local",
  },
  {
    eyebrow: "Investigación",
    title: <>Estudio de <span className="text-primary">palabras clave</span></>,
    text: "Identificamos las búsquedas reales de tu servicio y tu zona, especialmente las que muestran una intención clara de llamar, reservar o visitar el negocio.",
    image: palabrasClaveImage,
    alt: "Ilustración de un estudio de palabras clave con lupa, búsquedas locales y gráficos",
  },
  {
    eyebrow: "Presencia en Maps",
    title: <>Ficha de <span className="text-primary">Google Business Profile</span></>,
    text: "Realizamos una optimización completa de categorías, atributos, servicios, fotos, zona de servicio y publicaciones para que Google entienda y muestre mejor tu negocio.",
    image: fichaGoogleImage,
    alt: "Ilustración de una ficha de Google Business Profile completa y optimizada",
  },
  {
    eyebrow: "Captación local",
    title: <>Web <span className="text-primary">SEO Local</span></>,
    text: "Creamos páginas por servicio y por zona o barrio, pensadas para posicionar cada combinación relevante y convertir las búsquedas locales en contactos.",
    image: webSeoLocalImage,
    alt: "Ilustración de una web SEO local conectada con páginas de servicios y zonas",
  },
  {
    eyebrow: "Señales de confianza",
    title: <><span className="text-primary">Citaciones</span> en directorios locales y temáticos</>,
    text: "Construimos una presencia consistente en los directorios que Google utiliza como señal de confianza, manteniendo los datos esenciales del negocio alineados.",
    image: citacionesImage,
    alt: "Ilustración de un negocio conectado con varios directorios locales y temáticos",
  },
  {
    eyebrow: "Seguimiento",
    title: <span className="text-primary">Reporte mensual</span>,
    text: "Recibes la evolución de llamadas, posiciones y visibilidad en un informe claro y comprensible, con el trabajo realizado y los siguientes pasos, sin jerga innecesaria.",
    image: reporteMensualImage,
    alt: "Ilustración de un informe mensual con llamadas, posiciones locales y evolución",
  },
];

const whySlocal = [
  ["Equipo especializado en SEO local", "No somos una agencia generalista que también hace SEO: es lo único que hacemos, y lo conocemos a fondo."],
  ["Optimización para buscadores de IA incluida", "Trabajamos para que aparezcas también en ChatGPT, Gemini y AI Overviews, no solo en Google tradicional — algo que la mayoría de agencias de SEO local todavía no ofrece."],
  ["Sin permanencia", "Te quedas con nosotros porque el servicio funciona, no porque haya un contrato que te obligue."],
  ["Precio fijo mensual", "Sin tramos ocultos ni sorpresas en la factura."],
];

const fitFor = [
  "una clínica, centro médico o de estética con atención presencial",
  "un negocio físico a pie de calle",
  "una empresa de reformas, abogados, fisioterapia o servicios de proximidad",
  "una tienda, academia, despacho o centro que depende de clientes locales",
  "varias sedes o ubicaciones y necesitas gestionar varias fichas de Google a la vez",
  "una ficha de Google Business Profile que no te está generando llamadas",
  "un negocio que quiere dominar su zona en Google Maps",
];

const notFitFor = [
  "un eCommerce nacional sin componente local",
  "un SaaS 100% online",
  "infoproductos sin ubicación física",
  "un negocio que no atiende clientes en una zona concreta",
  "un proyecto que busca resultados mágicos en dos semanas",
];

const Home = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "slocal.es",
    url: "https://slocal.es",
    email: "info@slocal.es",
    areaServed: "España",
    description: "Agencia SEO Local para negocios españoles.",
  };

  const sectores = [
    { to: "/seo-para-fontaneros", label: "SEO para fontaneros" },
    { to: "/seo-para-fisioterapeutas", label: "SEO para fisioterapeutas" },
    { to: "/seo-para-abogados", label: "SEO para abogados" },
    { to: "/seo-para-dentistas", label: "SEO para dentistas" },
    { to: "/seo-para-psicologos", label: "SEO para psicólogos" },
    { to: "/seo-para-gimnasios", label: "SEO para gimnasios" },
    { to: "/seo-para-reformas", label: "SEO para empresas de reformas" },
    { to: "/seo-para-inmobiliarias", label: "SEO para inmobiliarias" },
    { to: "/seo-para-autonomos", label: "SEO para autónomos" },
  ];

  const ciudades = [
    { to: "/seo-local-madrid", label: "Madrid" },
    { to: "/seo-local-barcelona", label: "Barcelona" },
    { to: "/seo-local-valencia", label: "Valencia" },
    { to: "/seo-local-sevilla", label: "Sevilla" },
    { to: "/seo-local-malaga", label: "Málaga" },
    { to: "/seo-local-zaragoza", label: "Zaragoza" },
    { to: "/seo-local-bilbao", label: "Bilbao" },
    { to: "/seo-local-murcia", label: "Murcia" },
    { to: "/seo-local-cordoba", label: "Córdoba" },
  ];



  const dolores = [
    { n: "01", h: "Tu ficha lleva meses sin tocarse", d: "Google interpreta la inactividad como irrelevancia y va bajando tu posición cada semana." },
    { n: "02", h: "Has pagado a una agencia sin resultados", d: "Cuotas altas, informes vacíos y ningún cambio real en las llamadas que recibe tu negocio." },
    { n: "03", h: "Tus clientes te buscan ahora mismo", d: "Y encuentran a tu competencia porque nadie está trabajando tu presencia local en Google." },
  ];

  const faqs = [
    { q: "¿Qué es el SEO Local?", a: "Es el conjunto de técnicas que hacen que tu negocio aparezca cuando alguien busca un servicio en Google Maps o en Google en tu ciudad. Aparecer en el top 3 del mapa (el Local Pack) multiplica las llamadas directas." },
    { q: "¿Cuánto tarda en verse resultados?", a: "Entre 6 y 12 semanas para las primeras posiciones en búsquedas locales de baja competencia. En ciudades grandes o sectores muy competidos, entre 3 y 6 meses para posiciones estables." },
    { q: "¿Necesito una web para hacer SEO Local?", a: "La ficha de Google Business Profile es imprescindible; la web es el multiplicador. Sin una web coherente con la ficha, Google no tiene señales suficientes para posicionarte por delante de la competencia." },
    { q: "¿Trabajáis con negocios pequeños?", a: "Sí. La mayoría de nuestros clientes son autónomos, clínicas, gremios y pymes locales. Es donde el SEO Local tiene el mayor retorno." },
    { q: "¿En qué se diferencia el SEO Local de Google Ads?", a: "Con Google Ads pagas por cada clic y cuando dejas de pagar desapareces. El SEO Local construye una presencia orgánica: cuando entras en el top, te mantienes ahí aunque pares la inversión." },
  ];

  return (
    <>
      <SEOHead
        title="Agencia SEO Local | slocal.es"
        description="Agencia SEO Local especializada en Google Business Profile, Google Maps y posicionamiento local para negocios que quieren más llamadas y clientes desde Google."
        canonical="/"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <SectorHeroDark
        breadcrumbLabel="Inicio"
        eyebrow="Agencia SEO Local"
        h1={<h1>Agencia SEO Local</h1>}
        subtitle={
          <>Google Business Profile, Google Maps y posicionamiento local. Gestionamos tu presencia para que cada mes más clientes de tu ciudad te encuentren antes que a tu competencia.</>
        }
        primaryCta={{ label: "Solicitar auditoría gratuita", to: "/contacto" }}
        secondaryCta={{ label: "Ver cómo funciona", to: "/como-funciona" }}
        trustItems={["Google Partner", "Ficha gestionada cada mes", "Auditoría inicial sin coste"]}
        curveClass="bg-white"
      />


      {/* MARQUEE */}
      <section className="bg-white border-t border-warm-fg/10">
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary py-6 text-center">
            — Herramientas con las que trabajamos
          </p>
        </div>
        <LogoMarquee />
      </section>

      {/* ¿QUÉ ES EL SEO LOCAL? */}
      <section className={sectionCls}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 lg:gap-20 items-center">
            <div className="md:col-span-7">
              <div className="w-full rounded-3xl overflow-hidden border border-warm-fg/10 bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)]">
                <img
                  src={queEsSeoLocalAsset.url}
                  alt="Mockup de una ficha de Google Business Profile optimizada"
                  className="block w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-5">— Concepto clave</p>
              <h2 className="font-heading font-semibold text-warm-fg text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-6">
                ¿Qué es el SEO local?
              </h2>
              <p className="text-base md:text-lg font-body font-light text-warm-fg/75 leading-relaxed">
                El SEO local es la estrategia de posicionamiento orgánico que hace que un negocio aparezca en resultados geolocalizados de Google: el Mapa, el Local Pack y las búsquedas con intención de "cerca de mí".
              </p>
              <p className="mt-4 text-base md:text-lg font-body font-light text-warm-fg/75 leading-relaxed">
                Se compone de cuatro pilares principales:
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  { title: "Ficha de Google Business Profile", desc: "completa, activa y optimizada por categorías y servicios" },
                  { title: "Reseñas reales y respondidas", desc: "la prueba social que decide la llamada" },
                  { title: "Citaciones NAP consistentes", desc: "nombre, dirección y teléfono idénticos en directorios relevantes" },
                  { title: "Contenido geolocalizado", desc: "páginas por ciudad, barrio y servicio" },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="text-primary shrink-0 mt-1.5" aria-hidden>
                      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-body text-[15px] md:text-base text-warm-fg/85 leading-snug">
                      <strong className="font-semibold text-warm-fg">{item.title}</strong>: {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-base md:text-lg font-body font-light text-warm-fg/75 leading-relaxed">
                A diferencia del SEO tradicional, que persigue posicionar términos nacionales o genéricos sin ubicación, el SEO local vincula cada búsqueda a una dirección física y a un área de servicio concreta: quien busca recibe una respuesta local y puede contactar o visitar el negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO POSICIONAMOS */}
      <section className={sectionCls}>
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Nuestro método</p>
            <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              ¿Cómo posicionamos tu negocio en los primeros puestos de Google?
            </h2>
            <p className="mt-8 text-base md:text-lg font-body font-light text-warm-fg/75 leading-relaxed">
              No es magia ni es cuestión de suerte: Google decide qué negocio muestra primero según tres cosas — que tu ficha y tu web coincidan con lo que la persona está buscando, que estés cerca de quien busca, y la confianza que Google tiene en tu negocio según reseñas y consistencia de tus datos. Sobre la distancia no podemos hacer nada, pero sobre las otras dos trabajamos a fondo:
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              ["01", "¿Cómo hacemos que tu negocio encaje con la búsqueda?", "Optimizamos tu ficha de Google Business Profile y tu web con las mismas categorías, servicios y zonas que usa la gente cuando busca — para que Google entienda exactamente qué ofreces y dónde."],
              ["02", "¿Por qué deben coincidir tus datos en todas partes?", "Tu nombre, dirección y teléfono deben aparecer exactamente igual en tu ficha, tu web y los directorios donde apareces. Cuando no coincide, Google pierde confianza en tu negocio y te baja posiciones."],
              ["03", "¿Cómo influyen las reseñas en tu posición?", "El volumen, la frecuencia y cómo respondes a tus reseñas son una de las señales que más pesan a la hora de decidir qué negocio aparece primero."],
            ].map(([number, title, text]) => (
              <article key={number} className="border-t-2 border-primary pt-7">
                <span className="font-heading text-xs tracking-[0.22em] text-primary">{number}</span>
                <h3 className="mt-5 font-heading font-semibold text-xl md:text-2xl text-warm-fg leading-snug">{title}</h3>
                <p className="mt-4 font-body font-light text-warm-fg/70 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-12 mx-auto max-w-4xl text-center font-heading text-lg md:text-xl text-warm-fg leading-relaxed">
            Trabajamos estos tres frentes a la vez porque Google no premia a quien hace uno bien, sino a quien no falla en ninguno.
          </p>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className={sectionCls}>
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Servicio base</p>
            <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Qué incluye nuestro servicio de SEO Local
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-warm-fg/10 bg-warm-fg/10">
            {includedServices.map(([title, text], index) => (
              <article key={title} className="bg-white p-7 md:p-8">
                <span className="font-heading text-xs tracking-[0.2em] text-primary">0{index + 1}</span>
                <h3 className="mt-5 font-heading font-semibold text-xl text-warm-fg leading-snug">{title}</h3>
                <p className="mt-3 font-body font-light text-warm-fg/70 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 mx-auto max-w-4xl text-center text-sm md:text-[15px] font-body text-warm-fg/60 leading-relaxed">
            Todo el contenido que redactamos para tu ficha y tu web está además estructurado para poder ser citado por ChatGPT, Gemini y otros buscadores con IA — no es un extra que factures aparte, va incluido en el servicio base.
          </p>
        </div>
      </section>

      {/* SERVICIOS COMPLEMENTARIOS */}
      <section className={sectionCls}>
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Servicios complementarios</p>
            <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Cómo acelerarlo o complementarlo
            </h2>
            <p className="mt-7 text-base md:text-lg font-body font-light text-warm-fg/75 leading-relaxed">
              Con tu ficha y tu web optimizadas, el SEO local sigue trabajando cada mes de forma orgánica. Si quieres acelerar el resultado o ampliar dónde apareces, estos servicios se suman al servicio base:
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
            {complementaryServices.map((service) => <ServiceCard key={service.id} service={service} />)}
          </div>
        </div>
      </section>

      {/* POR QUÉ SLOCAL */}
      <section className={sectionCls}>
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Una agencia especializada</p>
            <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">Por qué Slocal</h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {whySlocal.map(([title, text], index) => (
              <article key={title} className="bg-white border border-warm-fg/10 rounded-2xl p-7 md:p-9">
                <div className="flex items-start gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading text-sm">{index + 1}</span>
                  <div>
                    <h3 className="font-heading font-semibold text-xl md:text-2xl text-warm-fg leading-snug">{title}</h3>
                    <p className="mt-3 font-body font-light text-warm-fg/70 leading-relaxed">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ENCAJE */}
      <section className={sectionCls}>
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Antes de empezar</p>
            <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              ¿Es Slocal la agencia adecuada para tu negocio?
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <article className="rounded-2xl border border-success/25 bg-success/5 p-7 md:p-10">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-success text-primary-foreground text-xl" aria-hidden>✓</span>
                <h3 className="font-heading font-semibold text-2xl text-warm-fg">¿Para quién sí es este servicio?</h3>
              </div>
              <p className="mt-6 font-body text-warm-fg/75">Este servicio es para ti si tienes:</p>
              <ul className="mt-5 space-y-3">
                {fitFor.map((item) => <li key={item} className="flex items-start gap-3 font-body text-warm-fg/75 leading-relaxed"><span className="mt-1 text-success" aria-hidden>✓</span><span>{item}</span></li>)}
              </ul>
            </article>
            <article className="rounded-2xl border border-destructive/25 bg-destructive/5 p-7 md:p-10">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-destructive text-destructive-foreground text-xl" aria-hidden>×</span>
                <h3 className="font-heading font-semibold text-2xl text-warm-fg">¿Para quién no es?</h3>
              </div>
              <p className="mt-6 font-body text-warm-fg/75">Este servicio no es para ti si tienes:</p>
              <ul className="mt-5 space-y-3">
                {notFitFor.map((item) => <li key={item} className="flex items-start gap-3 font-body text-warm-fg/75 leading-relaxed"><span className="mt-1 text-destructive" aria-hidden>×</span><span>{item}</span></li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* COMPARATIVA */}
      <section className={sectionCls}>
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Diferencias clave</p>
            <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">SEO tradicional vs SEO Local</h2>
          </div>
          <div className="mt-14 overflow-hidden rounded-2xl border border-warm-fg/10">
            <table className="w-full table-fixed border-collapse text-left">
              <thead className="bg-dark-bg text-dark-fg">
                <tr>
                  <th scope="col" className="w-[28%] p-3 md:p-6 font-heading text-[11px] md:text-sm">Comparativa</th>
                  <th scope="col" className="w-[31%] p-3 md:p-6 font-heading text-[11px] md:text-sm">SEO tradicional</th>
                  <th scope="col" className="w-[41%] p-3 md:p-6 font-heading text-[11px] md:text-sm text-primary">SEO Local</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ["Objetivo de búsqueda", "Términos nacionales o genéricos", "Servicio + ciudad o barrio"],
                  ["Dónde compites", "Resultados orgánicos nacionales", "Mapa de Google, ficha y orgánico local"],
                  ["Factor decisivo", "Autoridad de dominio y backlinks", "Ficha de Google, reseñas, consistencia de datos, proximidad"],
                  ["Resultado que persigue", "Tráfico", "Llamadas y visitas al negocio"],
                  ["A quién le sirve", "Ecommerce, medios, marcas nacionales", "Negocios con ubicación física o zona de servicio"],
                ].map(([label, traditional, local]) => (
                  <tr key={label} className="border-t border-warm-fg/10 align-top">
                    <th scope="row" className="p-3 md:p-6 font-heading text-[11px] md:text-sm text-warm-fg break-words">{label}</th>
                    <td className="p-3 md:p-6 font-body text-[11px] md:text-base text-warm-fg/65 break-words">{traditional}</td>
                    <td className="p-3 md:p-6 font-body text-[11px] md:text-base font-medium text-warm-fg break-words">{local}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-center font-heading text-lg md:text-xl text-warm-fg leading-relaxed">
            Si tu negocio depende de clientes de tu zona, el SEO local no es un complemento del SEO tradicional: es la estrategia que de verdad te trae llamadas.
          </p>
        </div>
      </section>

      {/* DOLOR */}
      <section className={sectionCls}>
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— El problema</p>
          <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-14 max-w-[22ch]">
            ¿Por qué tu negocio local <span className="text-primary">no aparece</span> en Google?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {dolores.map((d) => (
              <div key={d.n} className="bg-white rounded-3xl border border-warm-fg/10 p-8 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)] transition-all">
                <span className="font-heading text-[11px] tracking-[0.22em] uppercase text-primary">{d.n}</span>
                <h3 className="mt-6 font-heading text-xl md:text-2xl text-warm-fg leading-snug">{d.h}</h3>
                <p className="mt-4 font-body font-light text-warm-fg/70 leading-relaxed">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* LEAD MAGNET */}
      <section className="bg-white py-12 md:py-20">
        <div className="container">
          <div className="rounded-3xl bg-primary text-primary-foreground px-6 py-14 md:px-14 md:py-20 lg:px-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-heading tracking-[0.18em] uppercase text-white">
                  Análisis gratuito
                </span>
                <h2 className="mt-6 font-heading font-semibold leading-[1.1] tracking-tight text-3xl md:text-4xl lg:text-5xl text-white max-w-[20ch]">
                  Descubre cómo te ve Google ahora mismo
                </h2>
                <p className="mt-6 max-w-xl text-base md:text-lg font-body font-light text-white/85 leading-relaxed">
                  Analizamos gratis tu ficha de Google Business Profile y tu web. Te mostramos los principales errores que impiden que aparezcas por delante de tu competencia.
                </p>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base font-body text-white/90">
                  {["Sin compromiso", "Vídeo personalizado", "En menos de 24 horas"].map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden>
                        <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full rounded-2xl bg-white/10 p-5 md:p-6 backdrop-blur-xs">
                <LeadMagnetForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <ElfsightReviews className="bg-white py-24 md:py-32 border-t border-warm-fg/10" />

      {/* SECTORES */}
      <section className={sectionCls}>
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Sectores</p>
          <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-[22ch] mb-6">
            SEO Local para <span className="text-primary">cada tipo</span> de negocio
          </h2>
          <p className="text-base md:text-lg font-body text-warm-fg leading-relaxed mb-12 max-w-3xl">
            Cada sector tiene sus propias búsquedas y su propia competencia local. Por eso trabajamos de forma específica en cada uno.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {sectores.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="border border-warm-fg/20 rounded-full px-5 py-2.5 text-sm font-heading text-warm-fg transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-[2px]"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className={sectionCls}>
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— FAQ</p>
            <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl leading-[1.05] tracking-tight">
              Preguntas frecuentes.
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="divide-y divide-warm-fg/15 border-y border-warm-fg/15">
              {faqs.map((item, i) => (
                <details key={i} className="group py-6">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-6 font-heading text-lg md:text-xl text-warm-fg">
                    <span>{item.q}</span>
                    <span className="text-primary shrink-0 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-base font-body font-light text-warm-fg/70 leading-relaxed max-w-2xl">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CIUDADES */}
      <section className="bg-white py-20 md:py-24 border-t border-warm-fg/10">
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Cobertura</p>
          <h2 className="font-heading font-semibold text-warm-fg text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight max-w-[22ch] mb-4">
            Posicionamiento local en <span className="text-primary">toda España</span>
          </h2>
          <p className="text-base font-body text-warm-fg leading-relaxed mb-10 max-w-2xl">
            Trabajamos con negocios en las principales ciudades españolas. Cada ciudad tiene su propia competencia y sus propias búsquedas.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {ciudades.map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="border border-warm-fg/20 rounded-full px-5 py-2.5 text-sm font-heading text-warm-fg transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-[2px]"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className={sectionCls}>
        <div className="container max-w-2xl">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6 text-center">— Contacto</p>
          <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl leading-[1.05] tracking-tight text-center mb-4">
            ¿Tienes dudas? <span className="text-primary">Escríbenos</span>
          </h2>
          <p className="text-center text-warm-fg/70 font-body leading-relaxed mb-10">
            Si prefieres que te contactemos nosotros, déjanos tus datos y te respondemos en menos de 24 horas.
          </p>
          <div className="bg-white rounded-2xl border border-warm-fg/10 p-6 md:p-8 shadow-[0_10px_40px_-30px_rgba(0,0,0,0.08)]">
            <ContactForm />
          </div>
        </div>
      </section>

      <CTASection title="Tu negocio debería aparecer cuando tus clientes te buscan en Google." buttonText="Solicitar auditoría gratuita →" />
    </>
  );
};

export default Home;
