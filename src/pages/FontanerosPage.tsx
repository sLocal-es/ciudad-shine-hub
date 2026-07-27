import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import SectorHeroDark from "@/components/sector/SectorHeroDark";
import LogoMarquee from "@/components/LogoMarquee";
import { sendForm } from "@/lib/sendForm";
import { toast } from "@/hooks/use-toast";

const AuditoriaLeadForm = () => {
  const [form, setForm] = useState({ name: "", business: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendForm({
        form_type: "auditoria_fontaneros",
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        business: form.business,
        message: form.message,
        sector: "Fontaneros",
      });
      toast({ title: "Solicitud enviada", description: "Te enviaremos tu auditoría en menos de 24 horas." });
      setForm({ name: "", business: "", phone: "", email: "", message: "" });
    } catch {
      toast({ title: "Error al enviar", description: "Inténtalo de nuevo en unos minutos.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full rounded-xl bg-white text-warm-fg placeholder:text-warm-fg/50 px-4 py-3.5 text-[15px] font-body outline-none border border-transparent focus:border-warm-fg/20 focus:ring-2 focus:ring-white/40 transition resize-none";

  return (
    <form onSubmit={onSubmit} className="w-full rounded-2xl bg-white/10 p-5 md:p-6 backdrop-blur-sm">
      <div className="space-y-3">
        <input required type="text" placeholder="Nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
        <input required type="text" placeholder="Nombre de tu empresa" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} className={inputCls} />
        <input required type="tel" placeholder="Teléfono" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
        <input required type="email" placeholder="Correo electrónico" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
        <textarea
          rows={3}
          placeholder="Ej. Conseguir más llamadas, aparecer primero en Google, mejorar mi web..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={inputCls}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-warm-fg text-white px-5 py-3.5 text-[15px] font-heading font-medium hover:bg-warm-fg/90 transition disabled:opacity-60"
        >
          {loading ? "Enviando..." : "Quiero mi auditoría gratuita"}
        </button>
        <p className="pt-1 text-center text-white/80 text-[13px] font-body">
          🔒 Tus datos están seguros. Te responderemos en menos de 24 horas.
        </p>
      </div>
    </form>
  );
};


const GbpSkeletonMockup = () => (
  <div className="w-full aspect-[1/1] rounded-3xl overflow-hidden bg-white border border-warm-fg/10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)]">
    <img
      src="/images/seo-fontaneros/gbp-fontaneros.webp"
      alt="Ficha de Google Business Profile de un fontanero con llamadas, visualizaciones y valoración"
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </div>
);

const WebSkeletonMockup = () => (
  <div className="w-full aspect-[1/1] rounded-3xl overflow-hidden bg-white border border-warm-fg/10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)]">
    <img
      src="/images/seo-fontaneros/web-fontaneros.webp"
      alt="Web optimizada de un fontanero con formulario, servicios y métricas de conversión"
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </div>
);


const FontanerosPage = () => {
  const faqs = [
    {
      q: "¿Vale la pena el SEO para un fontanero autónomo?",
      a: "Sí. La mayoría de nuestros clientes son autónomos o empresas de 2-3 personas. El SEO local es especialmente rentable para fontaneros porque cada trabajo puede valer entre 80€ y varios miles en instalaciones grandes. Una llamada adicional al mes ya amortiza el servicio.",
    },
    {
      q: "¿Necesito web si ya tengo ficha de Google?",
      a: "La ficha sola posiciona en Maps, pero una web refuerza la autoridad y te permite aparecer también en los resultados orgánicos. El servicio incluye ambas desde el inicio.",
    },
    {
      q: "¿Cómo compito con fontaneros que llevan años en Google?",
      a: "El SEO local favorece la proximidad y la relevancia, no el tiempo en el mercado. Un fontanero con ficha bien optimizada y reseñas recientes en su barrio aparece antes que una empresa grande con ficha abandonada.",
    },
    {
      q: "¿Funciona especialmente para urgencias?",
      a: "Especialmente para urgencias. Las búsquedas de urgencia tienen la mayor intención de compra y en muchas zonas hay menos competencia bien posicionada. Configuramos tu ficha y contenido específicamente para 'fontanero urgente', 'avería ahora' y 'fontanero 24h'.",
    },
    {
      q: "¿Cuándo empiezo a recibir más llamadas?",
      a: "Los primeros contactos desde Google suelen aparecer entre el mes 2 y el mes 3. Las urgencias se captan antes porque la intención de búsqueda es inmediata y la competencia bien posicionada es menor en esas queries específicas.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "SEO para Fontaneros", item: "https://slocal.es/seo-para-fontaneros" },
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
    name: "SEO para Fontaneros",
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    areaServed: "España",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "slocal.es",
    url: "https://slocal.es",
    description: "Servicio de SEO local para fontaneros en España",
    areaServed: "España",
    priceRange: "€€",
  };

  const serviceTypes = [
    "Fontanero urgente y averías",
    "Fontanero 24 horas",
    "Instalación y cambio de caldera",
    "Detección y reparación de fugas",
    "Fontanero para comunidades",
    "Instalaciones de fontanería",
    "Desatascos y tuberías",
    "Fontanero para reformas",
  ];

  const cities = [
    { name: "Madrid", slug: "madrid" },
    { name: "Barcelona", slug: "barcelona" },
    { name: "Valencia", slug: "valencia" },
    { name: "Sevilla", slug: "sevilla" },
    { name: "Málaga", slug: "malaga" },
    { name: "Zaragoza", slug: "zaragoza" },
    { name: "Bilbao", slug: "bilbao" },
    { name: "Murcia", slug: "murcia" },
  ];

  const otherSectors = [
    { label: "SEO para fisioterapeutas", slug: "seo-para-fisioterapeutas" },
    { label: "SEO para empresas de reformas", slug: "seo-para-reformas" },
    { label: "SEO para pintores", slug: "seo-para-pintores" },
    { label: "SEO para clínicas", slug: "seo-para-clinicas" },
    { label: "SEO para entrenadores personales", slug: "seo-para-entrenadores" },
    { label: "SEO para yoga y pilates", slug: "seo-para-yoga" },
  ];

  const searchQueries = [
    "Fontanero urgente",
    "Fontanero 24 horas",
    "Reparación de fugas",
    "Instalación de caldera",
    "Desatascos",
    "Fontanero cerca de mí",
  ];

  const processSteps = [
    {
      n: "01",
      h: "Auditoría gratuita",
      d: "Analizamos tu ficha y tu web",
    },
    {
      n: "02",
      h: "Detectamos oportunidades",
      d: "Identificamos las búsquedas con mayor intención en tu zona.",
    },
    {
      n: "03",
      h: "Optimizamos Google Business + Web",
      d: "Reescribimos, estructuramos y activamos tu presencia local.",
    },
    {
      n: "04",
      h: "Seguimiento y crecimiento mensual",
      d: "Reforzamos posiciones, reseñas y contenido cada mes.",
    },
  ];

  const howWeWorkSteps = [
    {
      h: "Auditoría",
      d: "Analizamos tu Google Business Profile, tu web y a tus principales competidores para detectar oportunidades de mejora.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      ),
    },
    {
      h: "Estrategia",
      d: "Definimos las búsquedas con mayor intención de compra y diseñamos una estrategia SEO Local adaptada a tu negocio.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      h: "Optimización",
      d: "Optimizamos tu Google Business Profile y tu web para que trabajen conjuntamente y mejoren tu posicionamiento.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M12 14h6" />
          <path d="M12 8h3" />
          <path d="M3 20h.01" />
          <path d="M3 14h.01" />
          <path d="M3 8h.01" />
          <path d="M3 2h.01" />
        </svg>
      ),
    },
    {
      h: "Autoridad Local",
      d: "Potenciamos reseñas, contenido local y señales de confianza para superar a la competencia.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      h: "Seguimiento",
      d: "Medimos llamadas, formularios y posiciones para seguir optimizando los resultados mes a mes.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="M18 17V9" />
          <path d="M13 17V5" />
          <path d="M8 17v-3" />
        </svg>
      ),
    },
  ];

  const monthlyReasons = [
    { h: "Tus competidores siguen trabajando", d: "Otros fontaneros publican, piden reseñas y mueven su ficha. Si tú te detienes, ellos avanzan." },
    { h: "Google cambia constantemente", d: "El algoritmo se actualiza cada mes. Lo que hoy te posiciona mañana puede necesitar ajustes." },
    { h: "Tu ficha necesita actividad", d: "Fotos nuevas, publicaciones, respuestas a reseñas. Sin actividad, Google interpreta que estás inactivo." },
    { h: "Aparecen nuevas búsquedas", d: "Cada mes surgen consultas nuevas por zona, servicio o urgencia. Las capturamos con contenido específico." },
    { h: "Seguimos reforzando tu presencia", d: "Reseñas, contenido, autoridad. Cuanto más maduro es tu SEO local, más difícil es que te superen." },
  ];

  const tools = [
    { name: "Google Business Profile", src: "/logos/google-business-profile.svg" },
    { name: "Google Maps", src: "/logos/google-maps.svg" },
    { name: "Google Search Console", src: "/logos/google-search-console.svg" },
    { name: "Google Analytics", src: "/logos/google-analytics.svg" },
    { name: "ChatGPT", src: "/logos/chatgpt.svg" },
    { name: "WordPress", src: "/logos/wordpress.svg" },
    { name: "Semrush", src: "/logos/semrush.svg" },
  ];

  // Reusable section wrapper — pure white background per brief
  const sectionCls = "bg-white py-24 md:py-32 border-t border-warm-fg/10";

  return (
    <>
      <SEOHead
        title="SEO para Fontaneros | Agencia SEO Local | slocal.es"
        description="Agencia SEO Local para fontaneros: Google Business Profile, Google Maps y posicionamiento local para conseguir más llamadas de urgencias y averías desde Google."
        canonical="/seo-para-fontaneros"
        jsonLd={[breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema]}
      />

      {/* HERO — H1 orientado a keyword. Badge Google Partner en esquina. */}
      <SectorHeroDark
        breadcrumbLabel="SEO para Fontaneros"
        eyebrow="Agencia SEO Local · Fontaneros"
        h1={<h1>SEO para <span className="text-primary">Fontaneros</span></h1>}
        subtitle={
          <>
            Agencia SEO Local especializada en fontaneros. Optimizamos tu ficha de Google Business Profile y tu web para que aparezcas primero cuando alguien busca fontanero urgente en tu ciudad.
          </>
        }
        primaryCta={{ label: "Solicitar auditoría gratuita", to: "/contacto" }}
        secondaryCta={{ label: "Ver cómo funciona", to: "/como-funciona" }}
        trustItems={[
          "Google Partner",
          "Ficha de Google gestionada cada mes",
          "Auditoría inicial sin coste",
        ]}
        curveClass="bg-white"
      />

      {/* MARQUEE — barra infinita de logos */}
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
            ¿Cómo conseguir más clientes de fontanería desde <span className="text-primary">Google</span>?
          </h2>
          <p className="mt-8 max-w-2xl text-base md:text-lg font-body text-warm-fg leading-relaxed">
            En Slocal conseguimos que más clientes te llamen optimizando tu ficha de Google Business Profile y posicionando tu web para búsquedas locales de alta intención. Aparecer en el top 3 de Google Maps multiplica las llamadas: esos tres negocios se llevan el 40 % de los clics.
          </p>

          {/* Editorial split — GBP */}
          <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
              <p className="font-heading text-[11px] tracking-[0.22em] uppercase text-primary mb-6">Google Business Profile</p>
              <h3 className="font-heading font-semibold text-warm-fg leading-[1.1] tracking-tight text-3xl md:text-4xl lg:text-5xl max-w-[18ch]">
                Tu ficha de <span className="text-primary">Google Business Profile</span> genera llamadas
              </h3>
              <p className="mt-6 max-w-lg text-base md:text-lg font-body font-light text-warm-fg/75 leading-relaxed">
                Google Business Profile es donde el cliente decide llamarte. Nosotros optimizamos tu ficha para aparecer antes que tu competencia y convertir búsquedas locales en llamadas reales.
              </p>
              <ul className="mt-8 space-y-3 max-w-md">
                {[
                  "Categorías optimizadas",
                  "Servicios correctamente estructurados",
                  "Publicaciones",
                  "Gestión de reseñas",
                  "Geolocalización",
                  "Seguimiento de llamadas",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 font-body text-warm-fg/85">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="text-primary shrink-0" aria-hidden>
                      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[15px] md:text-base">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#caso-real" className="mt-10 inline-flex items-center gap-1 font-heading text-sm text-primary hover:gap-2 transition-all">
                Ver caso real →
              </a>
            </div>
            <div className="order-first md:order-last">
              <GbpSkeletonMockup />
            </div>
          </div>

          {/* Editorial split — Web */}
          <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
              <WebSkeletonMockup />
            </div>
            <div>
              <p className="font-heading text-[11px] tracking-[0.22em] uppercase text-primary mb-6">Web optimizada</p>
              <h3 className="font-heading font-semibold text-warm-fg leading-[1.1] tracking-tight text-3xl md:text-4xl lg:text-5xl max-w-[18ch]">
                Una web que <span className="text-primary">convierte</span> visitas en clientes
              </h3>
              <p className="mt-6 max-w-lg text-base md:text-lg font-body font-light text-warm-fg/75 leading-relaxed">
                Mientras Google Business Profile genera las llamadas, tu web se encarga de convertir las visitas en presupuestos y nuevos clientes.
              </p>
              <ul className="mt-8 space-y-3 max-w-md">
                {[
                  "SEO Local",
                  "Landing por servicio",
                  "Landing por ciudad",
                  "Formularios optimizados",
                  "WhatsApp",
                  "Google Analytics",
                ].map((f) => (
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

      {/* CTA AUDITORÍA GRATUITA */}
      <section className="bg-white py-12 md:py-20">
        <div className="container">
          <div className="rounded-3xl bg-primary text-primary-foreground px-6 py-14 md:px-14 md:py-20 lg:px-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-heading tracking-[0.18em] uppercase text-white">
                  Auditoría gratuita
                </span>
                <h2 className="mt-6 font-heading font-semibold leading-[1.1] tracking-tight text-3xl md:text-4xl lg:text-5xl text-white max-w-[20ch]">
                  Descubre por qué tu competencia recibe más llamadas que tú
                </h2>
                <p className="mt-6 max-w-xl text-base md:text-lg font-body font-light text-white/85 leading-relaxed">
                  Analizamos gratis tu ficha de Google Business Profile y tu web. Te mostraremos los principales errores que están impidiendo que aparezcas por delante de tu competencia.
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

              <AuditoriaLeadForm />
            </div>
          </div>
        </div>
      </section>




      {/* CÓMO TRABAJAMOS — timeline */}
      <section className={sectionCls}>
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-[11px] font-heading tracking-[0.18em] uppercase text-primary mb-8">
              Cómo trabajamos
            </span>
            <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
              ¿Cómo conseguimos que aparezcas por delante de tu competencia en Google?
            </h2>
            <p className="text-base md:text-lg font-body text-warm-fg leading-relaxed max-w-3xl">
              En Slocal apareces primero en Google Maps optimizando tu ficha de Google Business Profile, categorías, servicios, reseñas y contenido local. Google prioriza fichas activas, con reseñas recientes y coherencia entre ficha, web y citaciones locales de tu ciudad.
            </p>
          </div>

          {/* Timeline desktop — horizontal */}
          <div className="hidden md:block mt-20 md:mt-24">
            <div className="relative">
              <div className="absolute top-6 left-[10%] right-[10%] h-px bg-primary/25" />
              <div className="grid grid-cols-5 gap-6">
                {howWeWorkSteps.map((step, i) => (
                  <div key={step.h} className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-lg shadow-sm">
                      {i + 1}
                    </div>
                    <div className="mt-8 bg-white border border-warm-fg/10 rounded-2xl p-6 shadow-[0_8px_30px_-15px_rgba(26,26,36,0.08)] w-full">
                      <div className="mb-3 text-primary flex justify-center">
                        {step.icon}
                      </div>
                      <h3 className="font-heading text-lg text-warm-fg mb-2">{step.h}</h3>
                      <p className="text-sm font-body text-warm-fg/70 leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline mobile — vertical */}
          <div className="md:hidden mt-20">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/25" />
              <div className="space-y-8">
                {howWeWorkSteps.map((step, i) => (
                  <div key={step.h} className="relative flex gap-6">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-lg shadow-sm shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1 bg-white border border-warm-fg/10 rounded-2xl p-5 shadow-[0_8px_30px_-15px_rgba(26,26,36,0.08)]">
                      <div className="mb-2 text-primary">{step.icon}</div>
                      <h3 className="font-heading text-lg text-warm-fg mb-2">{step.h}</h3>
                      <p className="text-sm font-body text-warm-fg/70 leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ¿POR QUÉ NO APAREZCO? */}
      <section className={sectionCls}>
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— Visibilidad</p>
          <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-[22ch] mb-8">
            ¿Qué errores impiden que un fontanero aparezca en Google?
          </h2>
          <p className="text-base md:text-lg font-body text-warm-fg leading-relaxed max-w-3xl mb-16">
            En Slocal detectamos dos errores que impiden aparecer: fichas de Google desactualizadas y webs sin páginas específicas por servicio. Los corregimos activando tu ficha, publicando contenido mensual y creando páginas por servicio y por zona para que Google entienda cuándo mostrarte.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl text-warm-fg leading-snug mb-6">
                ¿Basta con tener la ficha de Google creada?
              </h3>
              <p className="text-base md:text-lg font-body font-light text-warm-fg/70 leading-relaxed">
                No basta. El error más común es crear la ficha cuando empiezas y no volver a tocarla. Google interpreta la inactividad como abandono y te baja posiciones cada semana frente a fontaneros que sí la gestionan.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl text-warm-fg leading-snug mb-6">
                ¿Es suficiente una sola página para todos mis servicios?
              </h3>
              <p className="text-base md:text-lg font-body font-light text-warm-fg/70 leading-relaxed">
                "Fontanero urgente", "instalación de caldera" y "detección de fugas" son búsquedas distintas con clientes distintos. Si tienes una sola página genérica, solo apareces para una — y compites con todos por el mismo hueco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO — timeline horizontal */}
      <section className={sectionCls}>
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— Proceso</p>
          <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-[22ch] mb-8">
            ¿Qué necesita una empresa de fontanería para posicionarse en Google?
          </h2>
          <p className="text-base md:text-lg font-body text-warm-fg leading-relaxed max-w-3xl mb-20">
            Necesita una ficha de Google Business Profile optimizada, una web con páginas por servicio y ciudad, reseñas reales y contenido publicado cada mes. En Slocal aplicamos ese proceso en cuatro pasos: auditoría gratuita, plan de crecimiento, optimización de ficha y web, y seguimiento mensual.
          </p>


          {/* Roadmap horizontal */}
          <div className="relative">
            <div className="hidden md:block absolute top-4 left-0 right-0 h-px bg-warm-fg/15" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              {processSteps.map((s) => (
                <div key={s.n} className="relative">
                  <div className="flex items-center gap-3 md:block">
                    <span className="relative z-10 inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-heading text-xs">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-6 font-heading text-xl md:text-2xl text-warm-fg leading-snug">
                    {s.h}
                  </h3>
                  <p className="mt-3 text-sm md:text-base font-body font-light text-warm-fg/70 leading-relaxed max-w-[26ch]">
                    {s.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASO REAL — dashboard mockup */}
      <section className={sectionCls}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="md:col-span-7 order-2 md:order-1">
              <ResultsDashboard />
            </div>
            <div className="md:col-span-5 order-1 md:order-2">
              <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Caso real</p>
              <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
                ¿Cómo ayuda Google Business Profile a un fontanero?
              </h2>
              <p className="text-base md:text-lg font-body text-warm-fg leading-relaxed mb-6">
                Google Business Profile le da visibilidad al fontanero en Google Maps y en el Local Pack: llamadas directas, indicaciones y clics a la web. Con Slocal, MVA Fontanería consiguió 60 interacciones desde Google en 2 meses y Fontaneros Económicos 11 llamadas directas y 4 WhatsApp en mes y medio.
              </p>

            </div>
          </div>

          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8 border-t border-warm-fg/15 pt-12">
            {[
              { k: "60", l: "interacciones desde Google en 2 meses" },
              { k: "11", l: "llamadas directas en mes y medio" },
              { k: "3×", l: "más visibilidad en el Local Pack" },
            ].map((m) => (
              <div key={m.l}>
                <p className="font-heading font-semibold text-warm-fg text-5xl md:text-7xl leading-none tracking-tight">
                  {m.k}
                </p>
                <p className="mt-4 font-body font-light text-sm md:text-base text-warm-fg/60 max-w-[22ch]">
                  {m.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className={sectionCls}>
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— Servicios</p>
          <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-[22ch] mb-6">
            ¿Qué tipos de servicios de fontanería posiciona Slocal?
          </h2>
          <p className="text-base md:text-lg font-body text-warm-fg leading-relaxed max-w-3xl mb-14">
            Slocal posiciona todos los servicios que un fontanero ofrece: urgencias 24 horas, averías, instalación de caldera, detección de fugas, desatascos, comunidades y reformas. Creamos contenido específico para cada servicio para que aparezcas en las búsquedas correctas de tu ciudad.
          </p>
          <ul className="divide-y divide-warm-fg/15 border-y border-warm-fg/15">
            {serviceTypes.map((t, i) => (
              <li key={t} className="py-6 md:py-7 flex items-baseline justify-between gap-6 group">
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="font-body text-xs tracking-widest text-warm-fg/40 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-2xl md:text-3xl lg:text-4xl tracking-tight text-warm-fg group-hover:text-primary transition-colors">
                    {t}
                  </span>
                </div>
                <span className="font-heading text-primary text-2xl shrink-0">↗</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICIOS COMPLEMENTARIOS */}
      <section className={sectionCls}>
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
              ¿Qué otros servicios pueden ayudarte a conseguir más clientes desde Google?
            </h2>
            <p className="text-base md:text-lg font-body font-light text-warm-fg/70 leading-relaxed max-w-3xl">
              Además de optimizar tu web y Google Business Profile, podemos ayudarte con otros servicios para seguir creciendo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Left featured card — orange */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 lg:p-12 shadow-[0_20px_50px_-20px_rgba(232,84,26,0.5)] flex flex-col">
              <Link to="/" className="font-heading text-xl text-primary-foreground mb-10 inline-block">
                s<span className="text-primary-foreground/70">local</span>.es
              </Link>
              <h3 className="font-heading font-semibold text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-6">
                SERVICIOS<br />COMPLEMENTARIOS
              </h3>
              <p className="text-base md:text-lg font-body font-light text-primary-foreground/85 leading-relaxed mb-10">
                Además de optimizar tu Google Business Profile y tu web, puedes potenciar tu crecimiento con servicios especializados.
              </p>
              <ul className="space-y-3 mt-auto">
                {[
                  "Posicionamiento GEO",
                  "Gestión de reseñas",
                  "Google Ads",
                  "SEO Multisede",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body text-primary-foreground">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="shrink-0" aria-hidden>
                      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[15px] md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right service cards */}
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: <img src="/logos/chatgpt.png" alt="ChatGPT" className="h-9 w-auto object-contain group-hover:brightness-0 group-hover:invert transition-[filter] duration-250" />,
                  title: (<>Posicionamiento <span className="text-primary group-hover:text-white transition-colors duration-250">GEO</span></>),
                  desc: "Haz que tu empresa aparezca en ChatGPT, Gemini y otras plataformas de IA cuando los clientes busquen empresas como la tuya.",
                  features: ["Presencia en ChatGPT y Gemini", "Contenido optimizado para IA", "Autoridad y menciones"],
                  link: "/posicionamiento-geo",
                },
                {
                  icon: <img src="/logos/google-business-profile.png" alt="Google Business Profile" className="h-9 w-auto object-contain group-hover:brightness-0 group-hover:invert transition-[filter] duration-250" />,
                  title: (<>Gestión de <span className="text-primary group-hover:text-white transition-colors duration-250">reseñas</span></>),
                  desc: "Consigue más reseñas de calidad, mejora tu reputación online y aumenta la confianza antes de que el cliente te llame.",
                  features: ["Sistema para pedir reseñas", "Respuestas profesionales", "Reputación online sólida"],
                  link: "/gestion-resenas",
                },
                {
                  icon: <img src="/logos/google-search-console.png" alt="Google Ads" className="h-9 w-auto object-contain group-hover:brightness-0 group-hover:invert transition-[filter] duration-250" />,
                  title: (<>Google <span className="text-primary group-hover:text-white transition-colors duration-250">Ads</span></>),
                  desc: "Genera llamadas desde el primer día con campañas optimizadas para búsquedas de alta intención.",
                  features: ["Campañas de alta intención", "Optimización de conversión", "Resultados desde el día 1"],
                  link: "/google-ads",
                },
              ].map((service) => (
                <div
                  key={service.link}
                  className="group bg-white border border-warm-fg/10 rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_-15px_rgba(26,26,36,0.08)] flex flex-col transition-all duration-[250ms] ease-out hover:bg-primary hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(232,84,26,0.5)]"
                >
                  <div className="mb-5">{service.icon}</div>
                  <h3 className="font-heading font-semibold text-warm-fg group-hover:text-white transition-colors duration-[250ms] text-xl md:text-2xl leading-snug tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base font-body font-light text-warm-fg/70 group-hover:text-white/85 transition-colors duration-[250ms] leading-relaxed mb-5">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm font-body text-warm-fg/80 group-hover:text-white/90 transition-colors duration-[250ms]">
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="text-primary group-hover:text-white transition-colors duration-[250ms] shrink-0" aria-hidden>
                          <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="mt-auto inline-flex items-center gap-1 font-heading text-sm text-primary group-hover:text-white hover:gap-2 transition-all duration-[250ms]"
                  >
                    Ver servicio →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ CADA MES */}
      <section className={sectionCls}>
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— Trabajo mensual</p>
            <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              ¿Por qué el SEO Local necesita trabajo mes a mes?
            </h2>
            <p className="text-base md:text-lg font-body text-warm-fg leading-relaxed">
              Porque Google no es una fotografía, es una competición continua. En Slocal reforzamos cada mes tu ficha, reseñas, contenido y autoridad local para que tus competidores no te superen y para capturar nuevas búsquedas conforme aparecen en tu zona.
            </p>
          </div>
          <div className="md:col-span-7">
            <ol className="space-y-10 md:space-y-12">
              {monthlyReasons.map((r, i) => (
                <li key={r.h} className="border-t border-warm-fg/20 pt-6 grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-10">
                  <span className="font-heading text-xs tracking-widest text-warm-fg/40 pt-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl leading-snug text-warm-fg mb-3">{r.h}</h3>
                    <p className="font-body font-light text-base text-warm-fg/70 leading-relaxed">{r.d}</p>
                  </div>
                </li>
              ))}
            </ol>
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
                  <p className="mt-4 text-base font-body font-light text-warm-fg/70 leading-relaxed max-w-2xl">
                    {item.a}
                  </p>
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
            ¿En qué ciudades trabaja Slocal con fontaneros?
          </h2>
          <p className="text-base font-body text-warm-fg leading-relaxed mb-10 max-w-2xl">
            Slocal trabaja con fontaneros en toda España, con clientes activos en Madrid, Barcelona, Valencia, Sevilla, Málaga, Zaragoza, Bilbao y Murcia. Adaptamos la estrategia local a cada ciudad y a cada barrio para captar las búsquedas de máxima intención de tu zona.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {cities.map((city) => (
              <Link
                key={city.slug}
                to={`/seo-local-${city.slug}`}
                className="border border-warm-fg/20 rounded-full px-5 py-2.5 text-sm font-heading text-warm-fg transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-[2px]"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OTROS SECTORES */}
      <section className="bg-white py-16 md:py-20 border-t border-warm-fg/10">
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Otros sectores</p>
          <h2 className="font-heading text-2xl md:text-3xl text-warm-fg mb-4">
            ¿Slocal solo trabaja con fontaneros?
          </h2>
          <p className="text-base font-body text-warm-fg leading-relaxed max-w-3xl mb-8">
            No. Slocal trabaja también con fisioterapeutas, empresas de reformas, pintores, clínicas, entrenadores personales y estudios de yoga. Aplicamos la misma metodología de SEO Local especializado a cada sector para que aparezcan cuando sus clientes buscan en Google.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {otherSectors.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="border border-warm-fg/20 rounded-full px-5 py-2.5 text-sm font-heading text-warm-fg transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-[2px]"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quieres que tu teléfono suene más gracias a Google?"
        buttonText="Solicitar auditoría gratuita →"
      />
    </>
  );
};

/* -------- Inline visuals (SEO-first, no fontanería imagery) -------- */

const SearchMockup = ({ queries }: { queries: string[] }) => (
  <div className="rounded-2xl border border-warm-fg/15 bg-white shadow-[0_20px_60px_-30px_rgba(26,26,36,0.25)] overflow-hidden">
    {/* Browser bar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-warm-fg/10 bg-warm-fg/[0.02]">
      <span className="h-2.5 w-2.5 rounded-full bg-warm-fg/15" />
      <span className="h-2.5 w-2.5 rounded-full bg-warm-fg/15" />
      <span className="h-2.5 w-2.5 rounded-full bg-warm-fg/15" />
      <div className="ml-4 flex-1 rounded-full bg-white border border-warm-fg/15 px-4 py-1.5 text-xs font-body text-warm-fg/60 truncate">
        google.com/search?q=fontanero+urgente
      </div>
    </div>
    <div className="p-6 md:p-8">
      <div className="flex items-center gap-3 border border-warm-fg/15 rounded-full px-4 py-3">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-warm-fg/50">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span className="font-body text-sm text-warm-fg">fontanero urgente cerca de mí</span>
      </div>
      <ul className="mt-6 space-y-3">
        {queries.map((q) => (
          <li key={q} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-warm-fg/[0.03]">
            <span className="h-6 w-6 rounded-full bg-warm-fg/[0.05] flex items-center justify-center text-warm-fg/50">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </span>
            <span className="font-body text-sm text-warm-fg/80">{q}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 grid grid-cols-3 gap-2">
        {[0.9, 0.65, 0.4].map((h, i) => (
          <div key={i} className="rounded-md border border-warm-fg/10 p-3">
            <div className="h-2 w-3/4 rounded-full bg-warm-fg/10 mb-2" />
            <div className="flex items-center gap-1 text-[10px] text-primary">
              <span>★</span><span className="text-warm-fg/60">4,{9 - i}</span>
            </div>
            <div className="mt-2 h-1 rounded-full bg-warm-fg/10 overflow-hidden">
              <div className="h-full bg-primary" style={{ width: `${h * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ResultsDashboard = () => {
  // Fake but realistic monthly growth curve
  const points = [8, 12, 18, 22, 35, 46, 58, 66, 74, 82, 90, 98];
  const max = Math.max(...points);
  const w = 560;
  const h = 220;
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`)
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <div className="rounded-2xl border border-warm-fg/15 bg-white shadow-[0_20px_60px_-30px_rgba(26,26,36,0.25)] overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-warm-fg/10">
        <div className="flex items-center gap-3">
          <img src="/logos/google-business-profile.svg" alt="Google Business Profile" className="h-5 w-auto" />
          <span className="font-heading text-sm text-warm-fg">Rendimiento · últimos 12 meses</span>
        </div>
        <span className="text-xs font-body text-warm-fg/50">Google Business Insights</span>
      </div>

      <div className="grid grid-cols-3 divide-x divide-warm-fg/10 border-b border-warm-fg/10">
        {[
          { k: "Llamadas", v: "+312 %" },
          { k: "Clics a web", v: "+248 %" },
          { k: "Cómo llegar", v: "+189 %" },
        ].map((s) => (
          <div key={s.k} className="px-6 py-5">
            <p className="text-[11px] font-body uppercase tracking-widest text-warm-fg/50">{s.k}</p>
            <p className="mt-1 font-heading text-2xl md:text-3xl text-warm-fg">{s.v}</p>
          </div>
        ))}
      </div>

      <div className="p-6">
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" preserveAspectRatio="none">
          <defs>
            <linearGradient id="fadeOrange" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75].map((r) => (
            <line key={r} x1="0" x2={w} y1={h * r} y2={h * r} stroke="hsl(var(--warm-fg) / 0.08)" strokeDasharray="2 4" />
          ))}
          <path d={area} fill="url(#fadeOrange)" />
          <path d={path} fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {points.map((p, i) => (
            <circle key={i} cx={i * step} cy={h - (p / max) * h} r={i === points.length - 1 ? 5 : 2.5} fill="hsl(var(--primary))" />
          ))}
        </svg>
        <div className="mt-3 flex justify-between text-[10px] font-body text-warm-fg/40 tracking-widest">
          {["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"].map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FontanerosPage;
