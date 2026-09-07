import { Link } from "@/lib/router-compat";
import SEOHead from "@/components/SEOHead";
import Reveal from "@/components/Reveal";
import {
  Check,
  Eyebrow,
  IllustrationPlaceholder,
  NeedRow,
  ServiceCard,
  type ExtraService,
} from "@/components/servicios/ServiciosUI";
import GoogleBusinessProfileVisual from "@/components/GoogleBusinessProfileVisual";
import OptimizedWebsiteVisual from "@/components/OptimizedWebsiteVisual";

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

const IconLink = () => (
  <svg {...iconProps} aria-hidden>
    <path d="M10 13.5a4 4 0 005.7 0l2.3-2.3a4 4 0 10-5.7-5.7L11 6.8" />
    <path d="M14 10.5a4 4 0 00-5.7 0L6 12.8a4 4 0 005.7 5.7l1.3-1.3" />
  </svg>
);

const IconRocket = () => (
  <svg {...iconProps} aria-hidden>
    <path d="M5 15c-1 2-1 4-1 4s2 0 4-1" />
    <path d="M9 17l-2-2c0-4 3-9 9-11 2 6-2 11-5 12l-2-1z" />
    <circle cx="14.5" cy="9.5" r="1.5" />
  </svg>
);

const IconPin = () => (
  <svg {...iconProps} aria-hidden>
    <path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const IconChart = () => (
  <svg {...iconProps} aria-hidden>
    <path d="M4 19h16" />
    <path d="M7 19V11M12 19V6M17 19v-5" />
  </svg>
);

const packIncludes = [
  "Diseño web profesional",
  "Optimización SEO Local",
  "Google Business Profile optimizado",
  "Formularios de contacto",
  "Botón de WhatsApp",
  "Adaptada a móviles",
  "Velocidad optimizada",
  "Seguridad",
  "Indexación en Google",
  "Configuración inicial",
];

const idealPara = [
  "Negocios locales",
  "Autónomos",
  "Clínicas",
  "Abogados",
  "Fontaneros",
  "Electricistas",
  "Empresas de servicios",
];

const extraServices: ExtraService[] = [
  {
    id: "geo",
    title: <>Posicionamiento <span className="text-primary">GEO</span></>,
    illustration: "Ilustración isométrica: buscadores con IA (ChatGPT, Gemini) recomendando un negocio local",
    icon: <IconSpark />,
    description:
      "Haz que tu empresa aparezca cuando los clientes preguntan a ChatGPT, Gemini, Claude, Copilot o Google AI Overviews.",
    features: ["Optimización para IA", "ChatGPT", "Gemini", "Claude", "Google AI Overviews"],
    to: "/contacto",
  },
  {
    id: "resenas",
    title: <>Gestión de <span className="text-primary">reseñas PRO</span></>,
    illustration: "Ilustración isométrica: tarjeta NFC y código QR generando reseñas de 5 estrellas",
    icon: <IconStar />,
    description:
      "Automatiza la captación de reseñas reales y mejora la confianza de tus futuros clientes.",
    features: [
      "Tarjetas NFC",
      "Código QR",
      "Solicitudes automáticas",
      "Respuesta profesional",
      "Incremento de reputación",
    ],
    to: "/contacto",
  },
  {
    id: "ads",
    title: <><span className="text-primary">Google</span> Ads</>,
    illustration: "Ilustración isométrica: anuncio de búsqueda de Google generando llamadas",
    icon: <IconTarget />,
    description:
      "Empieza a recibir llamadas desde el primer día mientras el SEO Local sigue creciendo.",
    features: [
      "Campañas de búsqueda",
      "Optimización mensual",
      "Seguimiento de conversiones",
      "Mejora continua",
    ],
    to: "/contacto",
  },
  {
    id: "backlinks",
    title: <>Backlinks <span className="text-primary">Locales</span></>,
    illustration: "Ilustración isométrica: red de enlaces y menciones locales conectando con una web",
    icon: <IconLink />,
    description:
      "Aumenta la autoridad de tu página web mediante enlaces y menciones desde sitios relevantes.",
    features: ["Citaciones locales", "Directorios", "Link Building Local", "Autoridad SEO"],
    to: "/contacto",
  },
];

const needs = [
  { icon: <IconRocket />, need: "Cliente que empieza desde cero", answer: "Pack Web + Google Business Profile", to: "#pack" },
  { icon: <IconSpark />, need: "Quiere salir en ChatGPT", answer: "Posicionamiento GEO", to: "#servicios-extra" },
  { icon: <IconStar />, need: "Quiere conseguir más reseñas", answer: "Gestión de reseñas PRO", to: "#servicios-extra" },
  { icon: <IconTarget />, need: "Necesita clientes desde el primer día", answer: "Google Ads", to: "#servicios-extra" },
  { icon: <IconLink />, need: "Quiere mejorar el posicionamiento SEO", answer: "Backlinks Locales", to: "#servicios-extra" },
];

const baseCards = [
  {
    icon: <IconChart />,
    title: "Página web optimizada",
    text: "Una web rápida, profesional y diseñada para convertir visitas en clientes.",
  },
  {
    icon: <IconPin />,
    title: "Google Business Profile",
    text: "Optimización completa para aparecer en Google Maps cuando tus clientes te buscan.",
  },
  {
    icon: <IconRocket />,
    title: "SEO Local",
    text: "La combinación perfecta para aumentar la visibilidad de forma constante.",
  },
];

const Servicios = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Pack Web + Google Business Profile",
      serviceType: "SEO Local",
      provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
      areaServed: "España",
      description:
        "Página web profesional optimizada para SEO Local y ficha de Google Business Profile completamente optimizada para captar clientes desde Google.",
      url: "https://slocal.es/servicios",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Servicios de Slocal",
      itemListElement: [
        "Pack Web + Google Business Profile",
        "Posicionamiento GEO",
        "Gestión de reseñas PRO",
        "Google Ads",
        "Backlinks Locales",
      ].map((name, i) => ({ "@type": "ListItem", position: i + 1, name })),
    },
  ];

  return (
    <>
      <SEOHead
        title="Servicios de Agencia SEO Local | slocal.es"
        description="Servicios de Agencia SEO Local: Pack Web + Google Business Profile, Posicionamiento GEO, gestión de reseñas, Google Ads y backlinks locales para conseguir más clientes desde Google."
        canonical="/servicios"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="bg-white pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal>
            <Eyebrow>— Servicios</Eyebrow>
            <h1 className="mt-6 font-heading font-semibold text-warm-fg leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl max-w-[20ch]">
              Servicios para conseguir <span className="text-primary">más clientes</span> desde Google
            </h1>
            <p className="mt-7 max-w-xl font-body font-light text-warm-fg/75 text-base md:text-lg leading-relaxed">
              Todo empieza con una base sólida: una página web profesional junto con una ficha de Google Business Profile
              optimizada para atraer clientes desde Google. Después, puedes potenciar aún más tus resultados con
              servicios especializados.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-heading text-sm font-medium rounded-xl px-7 py-3.5 shadow-[0_14px_36px_-16px_hsl(var(--primary))] hover:bg-primary/90 transition-colors"
              >
                Solicitar análisis gratuito
              </Link>
              <a
                href="#pack"
                className="inline-flex items-center justify-center border border-warm-fg/15 text-warm-fg font-heading text-sm font-medium rounded-xl px-7 py-3.5 hover:border-primary hover:text-primary transition-colors"
              >
                Ver servicios
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <GoogleBusinessProfileVisual
              alt="Ilustración de Google Business Profile con ubicación, reseñas y versión móvil"
            />
          </Reveal>
        </div>
      </section>

      {/* SERVICIO PRINCIPAL */}
      <section id="pack" className={sectionCls}>
        <div className="container">
          <Reveal>
            <Eyebrow>— El punto de partida</Eyebrow>
            <h2 className="mt-6 font-heading font-semibold text-warm-fg leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl max-w-[18ch]">
              Empieza por la <span className="text-primary">base</span>
            </h2>
            <p className="mt-7 max-w-2xl font-body font-light text-warm-fg/75 text-base md:text-lg leading-relaxed">
              En Slocal no vendemos servicios aislados. Creemos que todo negocio necesita primero una presencia sólida en
              Google. Por eso todos nuestros clientes comienzan con un mismo punto de partida: una página web optimizada
              para convertir visitas en clientes y una ficha de Google Business Profile completamente optimizada.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-14 md:mt-20">
            <article className="rounded-[2rem] border-2 border-primary/25 bg-white p-7 md:p-12 lg:p-14 shadow-[0_40px_100px_-60px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_50px_120px_-60px_rgba(0,0,0,0.45)]">
              <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.85fr] gap-10 lg:gap-14">
                <div>
                  <span className="inline-flex items-center rounded-full bg-primary text-primary-foreground font-heading text-[10px] tracking-[0.22em] uppercase px-4 py-2">
                    Servicio principal
                  </span>
                  <h3 className="mt-7 font-heading font-semibold text-warm-fg leading-[1.08] tracking-tight text-3xl md:text-4xl lg:text-[44px] max-w-[20ch]">
                    Pack <span className="text-primary">Web + Google Business Profile</span>
                  </h3>
                  <p className="mt-5 font-heading text-warm-fg/85 text-lg md:text-xl max-w-[36ch]">
                    La base sobre la que construiremos toda tu captación de clientes.
                  </p>
                  <p className="mt-6 max-w-xl font-body font-light text-warm-fg/75 text-base md:text-lg leading-relaxed">
                    Creamos una página web profesional optimizada para SEO Local y optimizamos completamente tu ficha de
                    Google Business Profile para que aparezcas cuando los clientes buscan negocios como el tuyo.
                  </p>

                  <p className="mt-10 font-heading text-[11px] tracking-[0.22em] uppercase text-warm-fg/50">Incluye</p>
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {packIncludes.map((f) => (
                      <li key={f} className="flex items-center gap-3 font-body text-[15px] text-warm-fg/85">
                        <Check className="text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contacto"
                    className="mt-11 inline-flex items-center justify-center bg-primary text-primary-foreground font-heading text-sm font-medium rounded-xl px-8 py-4 shadow-[0_14px_36px_-16px_hsl(var(--primary))] hover:bg-primary/90 transition-colors"
                  >
                    Quiero empezar
                  </Link>
                </div>

                <aside className="rounded-3xl border border-warm-fg/10 bg-white p-7 md:p-8 shadow-[0_18px_50px_-40px_rgba(0,0,0,0.35)] h-fit">
                  <p className="font-heading font-semibold text-warm-fg text-lg">Ideal para:</p>
                  <ul className="mt-5 space-y-3">
                    {idealPara.map((i) => (
                      <li key={i} className="flex items-center gap-3 font-body text-[15px] text-warm-fg/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden />
                        {i}
                      </li>
                    ))}
                  </ul>
                </aside>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* SERVICIOS COMPLEMENTARIOS */}
      <section id="servicios-extra" className={sectionCls}>
        <div className="container">
          <Reveal>
            <Eyebrow>— Servicios complementarios</Eyebrow>
            <h2 className="mt-6 font-heading font-semibold text-warm-fg leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl max-w-[22ch]">
              Potencia todavía más <span className="text-primary">tus resultados</span>
            </h2>
            <p className="mt-7 max-w-2xl font-body font-light text-warm-fg/75 text-base md:text-lg leading-relaxed">
              Una vez tengas una base sólida, puedes añadir servicios especializados para generar todavía más
              visibilidad, autoridad y clientes.
            </p>
          </Reveal>

          <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-7">
            {extraServices.map((s, i) => (
              <Reveal key={s.id} delay={i * 90} className="h-full">
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ SERVICIO NECESITAS */}
      <section className={sectionCls}>
        <div className="container">
          <Reveal>
            <Eyebrow>— Comparativa</Eyebrow>
            <h2 className="mt-6 font-heading font-semibold text-warm-fg leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl max-w-[18ch]">
              ¿Qué <span className="text-primary">servicio</span> necesitas?
            </h2>
          </Reveal>

          <div className="mt-12 md:mt-16 space-y-4">
            {needs.map((n, i) => (
              <Reveal key={n.need} delay={i * 70}>
                <NeedRow icon={n.icon} need={n.need} answer={n.answer} to={n.to} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ EMPEZAR POR EL PACK */}
      <section className={sectionCls}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal>
              <OptimizedWebsiteVisual alt="Ilustración de una página web conectada con la ficha de Google Maps del negocio" />
            </Reveal>
            <Reveal delay={110}>
              <Eyebrow>— Nuestro método</Eyebrow>
              <h2 className="mt-6 font-heading font-semibold text-warm-fg leading-[1.08] tracking-tight text-3xl md:text-4xl lg:text-5xl max-w-[22ch]">
                ¿Por qué empezar siempre por el <span className="text-primary">Pack Web + Google</span>?
              </h2>
              <div className="mt-7 space-y-5 max-w-xl font-body font-light text-warm-fg/75 text-base md:text-lg leading-relaxed">
                <p>
                  Muchos negocios invierten dinero en publicidad, redes sociales o campañas antes de tener una buena
                  presencia en Google.
                </p>
                <p>En Slocal hacemos justo lo contrario.</p>
                <p>
                  Primero construimos una base sólida con una web optimizada y una ficha de Google Business Profile
                  preparada para captar clientes.
                </p>
                <p>
                  Después añadimos únicamente los servicios que realmente aportarán más resultados a tu negocio.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {baseCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 90} className="h-full">
                <div className="group h-full rounded-2xl border border-warm-fg/10 bg-white p-7 shadow-[0_16px_44px_-40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_26px_64px_-42px_rgba(0,0,0,0.35)]">
                  <span className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    {c.icon}
                  </span>
                  <h3 className="mt-5 font-heading font-semibold text-warm-fg text-xl leading-snug">{c.title}</h3>
                  <p className="mt-3 font-body font-light text-warm-fg/70 text-[15px] leading-relaxed">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[hsl(var(--warm-bg))] py-24 md:py-32 border-t border-warm-fg/10">
        <div className="container text-center">
          <Reveal>
            <h2 className="font-heading font-semibold text-warm-fg leading-[1.08] tracking-tight text-3xl md:text-4xl lg:text-5xl max-w-[24ch] mx-auto">
              Empieza hoy a captar <span className="text-primary">más clientes</span> desde Google.
            </h2>
            <p className="mt-6 max-w-2xl mx-auto font-body font-light text-warm-fg/75 text-base md:text-lg leading-relaxed">
              Solicita un análisis gratuito y descubre qué necesita tu negocio para destacar frente a tu competencia.
            </p>
            <Link
              to="/contacto"
              className="mt-10 inline-flex items-center justify-center bg-primary text-primary-foreground font-heading text-base font-medium rounded-xl px-10 py-5 shadow-[0_18px_44px_-18px_hsl(var(--primary))] hover:bg-primary/90 transition-colors"
            >
              Solicitar análisis gratuito
            </Link>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              {["Sin compromiso", "Análisis personalizado", "Estrategia adaptada a tu negocio"].map((t) => (
                <li key={t} className="flex items-center gap-2 font-body text-sm text-warm-fg/70">
                  <Check className="text-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Servicios;
