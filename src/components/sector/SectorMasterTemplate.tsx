import { useState, ReactNode } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import SectorHeroDark from "@/components/sector/SectorHeroDark";
import LogoMarquee from "@/components/LogoMarquee";
import { sendForm } from "@/lib/sendForm";
import { toast } from "@/hooks/use-toast";

/**
 * SectorMasterTemplate
 * ---------------------------------------------------------------------------
 * Slocal MASTER DESIGN SYSTEM for every sector page.
 * The reference implementation is `/seo-para-fontaneros`.
 *
 * RULES (do not violate):
 *  - Never redesign, reorder or invent sections.
 *  - Every illustration renders a premium placeholder unless a real
 *    Slocal asset is explicitly injected via props.
 *  - Trustindex would be the only external visual, but we keep the
 *    reviews block generic (no widget) as in the master.
 * ---------------------------------------------------------------------------
 */

export type SectorTemplateContent = {
  // SEO
  seoTitle: string;
  seoDescription: string;
  canonical: string; // e.g. "/seo-para-abogados"

  // Sector identity
  sectorLabel: string;         // "Fontaneros" (used in badges, breadcrumbs, links)
  sectorSlug: string;          // "seo-para-fontaneros"
  sectorLower: string;         // "fontaneros" / "abogados"
  clientWord: string;          // "clientes" | "pacientes" | "alumnos"

  // Hero
  heroEyebrow: string;         // "Agencia SEO Local · Fontaneros"
  heroH1: ReactNode;           // <h1>...</h1>
  heroSubtitle: ReactNode;
  heroTrust: string[];

  // Manifesto (H2)
  manifestoEyebrow: string;    // "— El punto de partida"
  manifestoH2: ReactNode;
  manifestoBody: ReactNode;

  // GBP editorial split
  gbpH3: ReactNode;
  gbpBody: ReactNode;
  gbpFeatures: string[];
  gbpImage?: { src: string; alt: string };


  // Web editorial split
  webH3: ReactNode;
  webBody: ReactNode;
  webFeatures: string[];
  webImage?: { src: string; alt: string };

  // Auditoria CTA (form) — keep master copy by default
  auditoriaH2?: ReactNode;
  auditoriaBody?: ReactNode;
  auditoriaFormType: string;   // "auditoria_abogados"

  // How we work — 5 steps
  howEyebrow?: string;
  howH2: ReactNode;
  howIntro: ReactNode;
  howSteps: { h: string; d: string }[]; // 5 items

  // Case study
  caseH2: ReactNode;
  caseIntro: ReactNode;
  caseStages: { title: string; text: string; label: string }[]; // 3 items (label = placeholder text)
  caseKpis: { k: string; l: string }[];                         // 3 items

  // Monthly reasons block
  monthlyH2: ReactNode;
  monthlyBody: ReactNode;
  monthlyReasons: { h: string; d: string }[];

  // Mapa de presencia local (opcional)
  mapTitle?: ReactNode;
  mapSubtitle?: ReactNode;
  mapQuery?: string;

  // FAQ
  faqs: { q: string; a: string }[];

  // Cities & other sectors
  citiesH2: ReactNode;
  citiesBody: ReactNode;
  otherSectorsH2: ReactNode;
  otherSectorsBody: ReactNode;
  otherSectors: { label: string; slug: string }[];

  // Final CTA
  finalCtaTitle: string;

  // JSON-LD (fully composed by caller)
  jsonLd: object[];
};

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

const sectionCls = "bg-white py-24 md:py-32 border-t border-warm-fg/10";

/* ---------- Illustration placeholder (per master template rules) --------- */
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
    <span className="font-body text-[13px] text-warm-fg/45 max-w-[28ch]">
      {label}
    </span>
  </div>
);

/* ---------- Auditoria lead form (copy of master) ---------- */
const AuditoriaLeadForm = ({ formType }: { formType: string }) => {
  const [form, setForm] = useState({ name: "", business: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendForm({
        form_type: formType,
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        business: form.business,
        message: form.message,
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

/* ---------- Google-style reviews (identical to master) ---------- */
const googleReviews = [
  { name: "Antonio R.", business: "Fontanero en Vigo", rating: 5, date: "Hace 2 meses", text: "En tres meses pasamos de no aparecer en Google a recibir más llamadas de las que podíamos atender. La ficha de Google Business Profile y la web trabajan perfectamente juntas." },
  { name: "María G.", business: "Clínica dental en Valencia", rating: 5, date: "Hace 1 mes", text: "Profesionales, transparentes y con resultados medibles. Cada mes recibimos un informe de llamadas y posiciones. El SEO local ha sido clave para crecer sin depender de anuncios." },
  { name: "Luis M.", business: "Abogado en Madrid", rating: 5, date: "Hace 3 semanas", text: "Por fin una agencia que entiende el negocio local. No venden humo: auditan, proponen y ejecutan. Las primeras consultas llegaron en la segunda semana." },
  { name: "Carmen P.", business: "Fisioterapeuta en Sevilla", rating: 5, date: "Hace 2 meses", text: "La ficha de Google quedó mucho más completa y empezaron a llegar pacientes nuevos de barrios que ni siquiera habíamos pensado. Muy recomendable." },
  { name: "David S.", business: "Empresa de reformas en Málaga", rating: 5, date: "Hace 1 mes", text: "El retorno superó con creces lo esperado. Cada obra mediana nos cuesta cientos de euros, así que una sola llamada extra al mes ya rentabiliza el servicio." },
  { name: "Elena T.", business: "Clínica estética en Barcelona", rating: 5, date: "Hace 3 semanas", text: "Nos ayudaron a entender qué buscaban realmente nuestros clientes. Ahora aparecemos por tratamientos concretos y la agenda se llena más rápido." },
];

/* ---------- Complementary services (identical to master) ---------- */
const complementaryServices = [
  {
    logo: <img src="/logos/chatgpt.png" alt="ChatGPT" className="h-8 w-auto object-contain" />,
    title: (
      <>
        <span className="block leading-[1.1] mb-1">Posicionamiento</span>
        <span className="block leading-[1.1] text-primary group-hover:text-white transition-colors duration-[250ms]">GEO</span>
      </>
    ),
    desc: "Haz que tu empresa aparezca en ChatGPT, Gemini, AI Overviews y otros buscadores basados en IA cuando los clientes busquen empresas como la tuya.",
    features: ["ChatGPT y Gemini", "AI Overviews", "Optimización para IA"],
    link: "/posicionamiento-local",
  },
  {
    logo: <img src="/logos/google-business-profile.png" alt="Google Business Profile" className="h-8 w-auto object-contain" />,
    title: (
      <>
        Gestión de <span className="text-primary group-hover:text-white transition-colors duration-[250ms]">reseñas PRO</span>
      </>
    ),
    desc: "Consigue más reseñas reales y mejora tu reputación online con una estrategia diseñada para aumentar la confianza de nuevos clientes.",
    features: ["Tarjeta NFC o QR", "Automatización de solicitudes", "Respuesta profesional"],
    link: "/ficha-google-mi-negocio",
  },
  {
    logo: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <text x="12" y="16.5" textAnchor="middle" fontSize="9" fontWeight="bold" fill="currentColor" fontFamily="sans-serif">Ads</text>
      </svg>
    ),
    title: (
      <>
        Google <span className="text-primary group-hover:text-white transition-colors duration-[250ms]">Ads</span>
      </>
    ),
    desc: "Genera llamadas desde el primer día mientras el SEO Local sigue creciendo de forma orgánica.",
    features: ["Campañas de búsqueda", "Optimización mensual", "Seguimiento de conversiones"],
    link: "/contacto",
  },
  {
    logo: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    title: (
      <>
        <span className="text-primary group-hover:text-white transition-colors duration-[250ms]">Backlinks</span> Locales
      </>
    ),
    desc: "Consigue enlaces y menciones locales para aumentar la autoridad de tu web y reforzar tu posicionamiento.",
    features: ["Citaciones locales", "Directorios de calidad", "Link Building Local"],
    link: "/contacto",
  },
];

/* ---------- Step icons (same set as master) ---------- */
const stepIcons = [
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>,
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></svg>,
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M12 14h6" /><path d="M12 8h3" /><path d="M3 20h.01" /><path d="M3 14h.01" /><path d="M3 8h.01" /><path d="M3 2h.01" /></svg>,
  <svg key="4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
  <svg key="5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg>,
];

const SectorMasterTemplate = ({ content: c }: { content: SectorTemplateContent }) => {
  return (
    <>
      <SEOHead
        title={c.seoTitle}
        description={c.seoDescription}
        canonical={c.canonical}
        jsonLd={c.jsonLd}
      />

      {/* HERO */}
      <SectorHeroDark
        breadcrumbLabel={`SEO para ${c.sectorLabel}`}
        eyebrow={c.heroEyebrow}
        h1={c.heroH1}
        subtitle={c.heroSubtitle}
        primaryCta={{ label: "Solicitar auditoría gratuita", to: "/contacto" }}
        secondaryCta={{ label: "Ver cómo funciona", to: "/como-funciona" }}
        trustItems={c.heroTrust}
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
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">{c.manifestoEyebrow}</p>
          <h2 className="font-heading font-semibold text-warm-fg leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl max-w-[22ch]">
            {c.manifestoH2}
          </h2>
          <p className="mt-8 max-w-2xl text-base md:text-lg font-body text-warm-fg leading-relaxed">
            {c.manifestoBody}
          </p>

          {/* Editorial split — GBP */}
          <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div>
              <p className="font-heading text-[11px] tracking-[0.22em] uppercase text-primary mb-6">Google Business Profile</p>
              <h3 className="font-heading font-semibold text-warm-fg leading-[1.1] tracking-tight text-3xl md:text-4xl lg:text-5xl max-w-[18ch]">
                {c.gbpH3}
              </h3>
              <p className="mt-6 max-w-lg text-base md:text-lg font-body font-light text-warm-fg/75 leading-relaxed">
                {c.gbpBody}
              </p>
              <ul className="mt-8 space-y-3 max-w-md">
                {c.gbpFeatures.map((f) => (
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
              {c.gbpImage ? (
                <img
                  src={c.gbpImage.src}
                  alt={c.gbpImage.alt}
                  className="w-full rounded-3xl border border-warm-fg/10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)] object-cover"
                  loading="lazy"
                />
              ) : (
                <IllustrationPlaceholder label={`Ficha de Google Business Profile para ${c.sectorLower}`} />
              )}
            </div>

          </div>

          {/* Editorial split — Web */}
          <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div>
              {c.webImage ? (
                <img
                  src={c.webImage.src}
                  alt={c.webImage.alt}
                  className="w-full rounded-3xl border border-warm-fg/10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)] object-cover"
                  loading="lazy"
                />
              ) : (
                <IllustrationPlaceholder label={`Web optimizada para ${c.sectorLower}`} />
              )}
            </div>
            <div>
              <p className="font-heading text-[11px] tracking-[0.22em] uppercase text-primary mb-6">Web optimizada</p>
              <h3 className="font-heading font-semibold text-warm-fg leading-[1.1] tracking-tight text-3xl md:text-4xl lg:text-5xl max-w-[18ch]">
                {c.webH3}
              </h3>
              <p className="mt-6 max-w-lg text-base md:text-lg font-body font-light text-warm-fg/75 leading-relaxed">
                {c.webBody}
              </p>
              <ul className="mt-8 space-y-3 max-w-md">
                {c.webFeatures.map((f) => (
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
                  {c.auditoriaH2 ?? "Descubre por qué tu competencia recibe más llamadas que tú"}
                </h2>
                <p className="mt-6 max-w-xl text-base md:text-lg font-body font-light text-white/85 leading-relaxed">
                  {c.auditoriaBody ?? "Analizamos gratis tu ficha de Google Business Profile y tu web. Te mostraremos los principales errores que están impidiendo que aparezcas por delante de tu competencia."}
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
              <AuditoriaLeadForm formType={c.auditoriaFormType} />
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className={sectionCls}>
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-[11px] font-heading tracking-[0.18em] uppercase text-primary mb-8">
              {c.howEyebrow ?? "Cómo trabajamos"}
            </span>
            <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
              {c.howH2}
            </h2>
            <p className="text-base md:text-lg font-body text-warm-fg leading-relaxed max-w-3xl">
              {c.howIntro}
            </p>
          </div>

          {/* Desktop timeline */}
          <div className="hidden md:block mt-20 md:mt-24">
            <div className="relative">
              <div className="absolute top-6 left-[10%] right-[10%] h-px bg-primary/25" />
              <div className="grid grid-cols-5 gap-6">
                {c.howSteps.map((step, i) => (
                  <div key={step.h} className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-lg shadow-sm">
                      {i + 1}
                    </div>
                    <div className="mt-8 bg-white border border-warm-fg/10 rounded-2xl p-6 shadow-[0_8px_30px_-15px_rgba(26,26,36,0.08)] w-full">
                      <div className="mb-3 text-primary flex justify-center">{stepIcons[i]}</div>
                      <h3 className="font-heading text-lg text-warm-fg mb-2">{step.h}</h3>
                      <p className="text-sm font-body text-warm-fg/70 leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden mt-20">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/25" />
              <div className="space-y-8">
                {c.howSteps.map((step, i) => (
                  <div key={step.h} className="relative flex gap-6">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-lg shadow-sm shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1 bg-white border border-warm-fg/10 rounded-2xl p-5 shadow-[0_8px_30px_-15px_rgba(26,26,36,0.08)]">
                      <div className="mb-2 text-primary">{stepIcons[i]}</div>
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

      {/* CASO REAL */}
      <section id="caso-real" className={sectionCls}>
        <div className="container max-w-6xl">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-[11px] font-heading tracking-[0.18em] uppercase text-primary mb-6">
            Caso real
          </span>
          <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6 max-w-[22ch]">
            {c.caseH2}
          </h2>
          <p className="text-base md:text-lg font-body font-light text-warm-fg/70 leading-relaxed mb-20 max-w-3xl">
            {c.caseIntro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-20">
            {c.caseStages.map((card) => (
              <div
                key={card.title}
                className="group flex flex-col bg-white rounded-3xl border border-warm-fg/10 p-6 lg:p-8 transition-all duration-300 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)] hover:border-warm-fg/20"
              >
                <p className="font-heading text-[11px] tracking-[0.22em] uppercase text-primary mb-6">{card.title}</p>
                <IllustrationPlaceholder label={card.label} aspect="aspect-[4/3]" className="mb-6" />
                <p className="text-base font-body font-light text-warm-fg/80 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            {c.caseKpis.map((m) => (
              <div
                key={m.l}
                className="bg-white border border-warm-fg/10 rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:border-warm-fg/20 hover:shadow-[0_12px_40px_-20px_rgba(0,0,0,0.1)]"
              >
                <p className="font-heading font-semibold text-4xl md:text-5xl lg:text-6xl leading-none tracking-tight text-primary">{m.k}</p>
                <p className="mt-4 font-body text-sm text-warm-fg/60">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section className={sectionCls}>
        <div className="container">
          <div className="max-w-[1200px] mx-auto text-center">
            <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— Reseñas</p>
            <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
              ¿Por qué tantas <span className="text-primary">empresas</span> confían en Slocal?
            </h2>
            <p className="text-base md:text-lg font-body font-light text-warm-fg/70 leading-relaxed max-w-3xl mx-auto mb-14">
              La mejor forma de demostrar nuestro trabajo es con la opinión de quienes ya han confiado en nosotros.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-14">
              {googleReviews.map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col bg-white rounded-2xl border border-warm-fg/10 p-6 shadow-[0_10px_40px_-30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)] hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-warm-fg/10 flex items-center justify-center font-heading text-sm text-warm-fg">
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-heading text-sm font-medium text-warm-fg truncate">{review.name}</p>
                      <p className="text-xs text-warm-fg/60 font-body truncate">{review.business}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FABB05">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-xs text-warm-fg/50 font-body">{review.date}</span>
                  </div>
                  <p className="text-sm font-body text-warm-fg/80 leading-relaxed flex-1">{review.text}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const el = document.getElementById("contacto");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground font-heading text-sm px-8 py-4 hover:bg-primary/90 transition-colors"
            >
              Solicita tu auditoría gratuita
            </button>
          </div>
        </div>
      </section>

      {/* SERVICIOS COMPLEMENTARIOS */}
      <section className={sectionCls}>
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
              ¿Qué otros servicios pueden ayudarte a conseguir <span className="text-primary">más clientes</span> desde Google?
            </h2>
            <p className="text-base md:text-lg font-body font-light text-warm-fg/70 leading-relaxed max-w-3xl">
              Además de optimizar tu web y Google Business Profile, podemos ayudarte con servicios especializados para aumentar tu visibilidad, generar más confianza y acelerar el crecimiento de tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {complementaryServices.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white border border-warm-fg/10 rounded-2xl p-7 md:p-8 shadow-[0_8px_30px_-15px_rgba(26,26,36,0.08)] flex flex-col min-h-[520px] transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(26,26,36,0.15)] hover:border-primary hover:bg-primary"
              >
                <div className="mb-8 h-14 flex items-center">
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-transparent group-hover:bg-white group-hover:shadow-sm transition-all duration-[250ms] text-warm-fg">
                    {service.logo}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-warm-fg text-2xl md:text-[26px] leading-[1.15] tracking-tight mb-5 group-hover:text-white transition-colors duration-[250ms]">
                  {service.title}
                </h3>
                <p className="text-[15px] font-body font-light text-warm-fg/70 leading-relaxed mb-8 group-hover:text-white/90 transition-colors duration-[250ms]">
                  {service.desc}
                </p>
                <ul className="space-y-3 mt-auto">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px] font-body text-warm-fg/85 group-hover:text-white transition-colors duration-[250ms]">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="text-primary shrink-0 mt-0.5 group-hover:text-white transition-colors duration-[250ms]" aria-hidden>
                        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M8 6.5l3.5 3.5L8 13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="mt-6 inline-flex items-center gap-1 font-heading text-sm text-primary hover:gap-2 transition-all duration-[250ms] group-hover:text-white"
                >
                  Más información →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ CADA MES */}
      <section className={sectionCls}>
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— Trabajo mensual</p>
            <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              {c.monthlyH2}
            </h2>
            <p className="text-base md:text-lg font-body text-warm-fg leading-relaxed">{c.monthlyBody}</p>
          </div>
          <div className="md:col-span-7">
            <ol className="space-y-10 md:space-y-12">
              {c.monthlyReasons.map((r, i) => (
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
              {c.faqs.map((item, i) => (
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
            {c.citiesH2}
          </h2>
          <p className="text-base font-body text-warm-fg leading-relaxed mb-10 max-w-2xl">{c.citiesBody}</p>
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
          <h2 className="font-heading text-2xl md:text-3xl text-warm-fg mb-4">{c.otherSectorsH2}</h2>
          <p className="text-base font-body text-warm-fg leading-relaxed max-w-3xl mb-8">{c.otherSectorsBody}</p>
          <div className="flex flex-wrap gap-2.5">
            {c.otherSectors.map((s) => (
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

      <CTASection id="contacto" title={c.finalCtaTitle} buttonText="Solicitar auditoría gratuita →" />
    </>
  );
};

export default SectorMasterTemplate;
