import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import SectorHeroDark from "@/components/sector/SectorHeroDark";
import LogoMarquee from "@/components/LogoMarquee";
import LeadMagnetForm from "@/components/forms/LeadMagnetForm";
import ContactForm from "@/components/forms/ContactForm";
import logoTei from "@/assets/casos/logo-tei.png";
import logoViviane from "@/assets/casos/logo-viviane.png";
import logoMva from "@/assets/casos/logo-mva.png";
import logoFontaneros from "@/assets/casos/logo-fontaneros.png";

const sectionCls = "bg-white py-24 md:py-32 border-t border-warm-fg/10";

const IllustrationPlaceholder = ({
  label,
  aspect = "aspect-[1/1]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) => (
  <div
    className={`w-full ${aspect} rounded-3xl border-2 border-dashed border-warm-fg/20 bg-[hsl(var(--warm-bg))] flex flex-col items-center justify-center gap-3 p-8 text-center ${className}`}
    role="img"
    aria-label={label}
  >
    <span className="font-heading text-[10px] tracking-[0.28em] uppercase text-warm-fg/50">
      Illustration placeholder
    </span>
    <span className="font-body text-[13px] text-warm-fg/45 max-w-[28ch]">{label}</span>
  </div>
);

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

  const casosLogos = [
    { src: logoTei, alt: "Grupo TEI" },
    { src: logoViviane, alt: "Viviane Custodio" },
    { src: logoMva, alt: "MVA Fontanería" },
    { src: logoFontaneros, alt: "Fontaneros Económicos" },
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

      {/* MANIFIESTO */}
      <section className={sectionCls}>
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— El punto de partida</p>
          <h2 className="font-heading font-semibold text-warm-fg leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl max-w-[22ch]">
            ¿Cómo conseguir <span className="text-primary">más llamadas</span> desde Google para tu negocio local?
          </h2>
          <p className="mt-8 max-w-2xl text-base md:text-lg font-body text-warm-fg leading-relaxed">
            En Slocal optimizamos tu ficha de Google Business Profile y posicionamos tu web para búsquedas locales de alta intención. Aparecer en el top 3 de Google Maps multiplica los contactos: esos tres negocios se llevan la mayoría de las llamadas de la zona.
          </p>

          {/* Editorial split — GBP */}
          <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div>
              <p className="font-heading text-[11px] tracking-[0.22em] uppercase text-primary mb-6">Google Business Profile</p>
              <h3 className="font-heading font-semibold text-warm-fg leading-[1.1] tracking-tight text-3xl md:text-4xl lg:text-5xl max-w-[18ch]">
                Tu ficha de <span className="text-primary">Google Business Profile</span> genera llamadas
              </h3>
              <p className="mt-6 max-w-lg text-base md:text-lg font-body font-light text-warm-fg/75 leading-relaxed">
                Google Business Profile es donde el cliente decide llamarte. Optimizamos categorías, servicios, zonas y reseñas para que aparezcas antes que tu competencia y esas búsquedas se conviertan en contactos reales.
              </p>
              <ul className="mt-8 space-y-3 max-w-md">
                {["Categorías optimizadas", "Zonas de servicio", "Publicaciones periódicas", "Gestión de reseñas", "Fotos y vídeos", "Seguimiento de llamadas"].map((f) => (
                  <li key={f} className="flex items-center gap-3 font-body text-warm-fg/85">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="text-primary shrink-0" aria-hidden>
                      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[15px] md:text-base">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-first md:order-last">
              <IllustrationPlaceholder label="Ficha de Google Business Profile optimizada por Slocal" />
            </div>
          </div>

          {/* Editorial split — Web */}
          <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div>
              <IllustrationPlaceholder label="Web optimizada para negocios locales" />
            </div>
            <div>
              <p className="font-heading text-[11px] tracking-[0.22em] uppercase text-primary mb-6">Web optimizada</p>
              <h3 className="font-heading font-semibold text-warm-fg leading-[1.1] tracking-tight text-3xl md:text-4xl lg:text-5xl max-w-[18ch]">
                Una web que <span className="text-primary">convierte</span> visitas en clientes
              </h3>
              <p className="mt-6 max-w-lg text-base md:text-lg font-body font-light text-warm-fg/75 leading-relaxed">
                Mientras tu ficha genera la llamada, tu web convierte las visitas en contactos cualificados. Diseñada para posicionar por servicio y por barrio, y para que el cliente contacte en dos clics.
              </p>
              <ul className="mt-8 space-y-3 max-w-md">
                {["SEO Local", "Landing por servicio", "Landing por ciudad", "Formularios optimizados", "WhatsApp", "Google Analytics"].map((f) => (
                  <li key={f} className="flex items-center gap-3 font-body text-warm-fg/85">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="text-primary shrink-0" aria-hidden>
                      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[15px] md:text-base">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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

      {/* CLIENTES / CASOS LOGOS */}
      <section className={sectionCls}>
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— Clientes que confían en Slocal</p>
          <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-[22ch] mb-14">
            Negocios locales que ya aparecen <span className="text-primary">primero</span> en Google
          </h2>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-8">
            {casosLogos.map((l) => (
              <img key={l.alt} src={l.src} alt={l.alt} className="h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

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
              <div className="w-full rounded-2xl bg-white/10 p-5 md:p-6 backdrop-blur-sm">
                <LeadMagnetForm />
              </div>
            </div>
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
