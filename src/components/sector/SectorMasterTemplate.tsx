import AnswerCapsule from "@/components/AnswerCapsule";
import { Star } from "lucide-react";
import ElfsightReviews from "@/components/ElfsightReviews";
import { useState, ReactNode } from "react";
import { Link } from "@/lib/router-compat";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import SectorHeroDark from "@/components/sector/SectorHeroDark";
import LogoMarquee from "@/components/LogoMarquee";
import { RevealScope } from "@/components/Reveal";
import { sendForm } from "@/lib/sendForm";
import { toast } from "@/hooks/use-toast";
import GoogleBusinessProfileVisual from "@/components/GoogleBusinessProfileVisual";
import OptimizedWebsiteVisual from "@/components/OptimizedWebsiteVisual";
import CasosExitoSection from "@/components/CasosExitoSection";
import CoberturaMapas from "@/components/CoberturaMapas";
import ConversionBanner from "@/components/ConversionBanner";
import CityConversionBanner, { BannerKey } from "@/components/cityseo/CityConversionBanner";
import { BANNER_COPY } from "@/data/bannerCopy";
import ComplementaryServicesGrid from "@/components/ComplementaryServicesGrid";
import ComoPosicionamosSection, { ComoPosicionamosSectionProps } from "@/components/sector/ComoPosicionamosSection";
import QueIncluyeSection, { QueIncluyeSectionProps } from "@/components/sector/QueIncluyeSection";
import caseBeforeAsset from "@/assets/caso-exito-antes.webp.asset.json";
import caseStrategyAsset from "@/assets/caso-exito-estrategia.webp.asset.json";
import caseResultAsset from "@/assets/caso-exito-resultado.webp.asset.json";

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
  sectorLabel: string;
  breadcrumbLabel?: string;         // "Fontaneros" (used in badges, breadcrumbs, links)
  sectorSlug: string;          // "seo-para-fontaneros"
  sectorLower: string;         // "fontaneros" / "abogados"
  clientWord: string;          // "clientes" | "pacientes" | "alumnos"

  // Hero
  heroEyebrow: string;         // "Agencia SEO Local · Fontaneros"
  heroH1: ReactNode;           // <h1>...</h1>
  heroSubtitle: ReactNode;
  heroTrust: string[];
  heroVisualAlt?: string;

  // Manifesto (H2)
  manifestoEyebrow: string;    // "— El punto de partida"
  manifestoH2: ReactNode;
  manifestoBody: ReactNode;
  geoBody?: ReactNode;
  manifestoSection?: ReactNode;

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

  // Optional page-specific positioning and service content
  comoPosicionamos?: ComoPosicionamosSectionProps;
  queIncluye?: QueIncluyeSectionProps;
  afterHero?: ReactNode;
  afterManifesto?: ReactNode;

  // Auditoria CTA (form) — keep master copy by default
  auditoriaH2?: ReactNode;
  auditoriaBody?: ReactNode;
  auditoriaFormType: string;   // "auditoria_abogados"
  auditoriaSectionId?: string;
  auditoriaScrollMargin?: boolean;
  heroPrimaryCtaTo?: string;
  casesBeforeAudit?: boolean;

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
  hideHow?: boolean;            // omit the "Cómo trabajamos" section
  hideCase?: boolean;           // omit the case-study section when no real data exists

  // Optional editorial block rendered right after "Cómo trabajamos"
  extraSection?: ReactNode;

  // Optional CTA block rendered after the main services section and before the audit form
  servicesCta?: ReactNode;

  // Optional "why us" authority block rendered after "Cómo trabajamos" and before the case study
  whyUsSection?: ReactNode;

  // Monthly reasons block
  monthlyH2: ReactNode;
  monthlyBody: ReactNode;
  monthlyReasons: { h: string; d: string }[];

  // Mapa de presencia local (opcional)
  mapTitle?: ReactNode;
  mapSubtitle?: ReactNode;
  mapQuery?: string;
  mapEmbed?: string;

  // FAQ
  faqs: { q: string; a: string }[];

  // Verified reviews rendered as crawlable HTML before the JS widget
  verifiedReviews?: { author: string; text: string }[];

  // Cities & other sectors
  citiesH2: ReactNode;
  citiesBody: ReactNode;
  otherSectorsH2: ReactNode;
  otherSectorsBody: ReactNode;
  otherSectors: { label: string; slug: string }[];
  otherSectorsSection?: ReactNode;
  otherSectorsAfterAudit?: boolean;

  // Final CTA
  finalCtaTitle: string;
  finalCtaTo?: string;

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
  { name: "Córdoba", slug: "cordoba" },
];

const sectionCls = "bg-white py-24 md:py-32 border-t border-warm-fg/10";

const caseStageImages = [
  { src: caseBeforeAsset.url, alt: "Situación inicial de un negocio sin visibilidad local en Google" },
  { src: caseStrategyAsset.url, alt: "Estrategia que conecta Google Business Profile, la página web y el posicionamiento local" },
  { src: caseResultAsset.url, alt: "Resultado del posicionamiento local con mayor presencia y actividad constante" },
];

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
export const AuditoriaLeadForm = ({ formType, compact = false, inline = false }: { formType: string; compact?: boolean; inline?: boolean }) => {
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
    "w-full rounded-xl bg-white text-warm-fg placeholder:text-warm-fg/50 px-4 py-3.5 text-[15px] font-body outline-hidden border border-transparent focus:border-warm-fg/20 focus:ring-2 focus:ring-white/40 transition resize-none";

  if (inline) {
    const inlineInputCls =
      "h-11 w-full min-w-0 rounded-xl border border-transparent bg-white px-3 text-sm font-body text-warm-fg outline-hidden placeholder:text-warm-fg/60 focus:border-warm-fg/20 focus:ring-2 focus:ring-white/40 transition";

    return (
      <form onSubmit={onSubmit} className="w-full lg:max-w-4xl">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_minmax(11rem,1.5fr)]">
          <input required type="text" placeholder="Nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inlineInputCls} />
          <input required type="text" placeholder="Nombre de tu empresa" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} className={inlineInputCls} />
          <input required type="tel" placeholder="Teléfono" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inlineInputCls} />
          <input required type="email" placeholder="Correo electrónico" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inlineInputCls} />
          <button
            type="submit"
            disabled={loading}
            className="col-span-2 h-11 w-full whitespace-nowrap rounded-xl bg-warm-fg px-4 text-sm font-heading font-medium text-white transition hover:bg-warm-fg/90 disabled:opacity-60 lg:col-span-1"
          >
            {loading ? "Enviando..." : "Quiero mi auditoría gratuita"}
          </button>
        </div>
        <p className="pt-2 text-center text-sm font-body text-white/90 lg:text-right">
          🔒 Tus datos están seguros. Te responderemos en menos de 24 horas.
        </p>
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full rounded-2xl bg-white/10 p-5 md:p-6 backdrop-blur-xs">
      <div className="space-y-3">
        <input required type="text" placeholder="Nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
        <input required type="text" placeholder="Nombre de tu empresa" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} className={inputCls} />
        <input required type="tel" placeholder="Teléfono" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
        <input required type="email" placeholder="Correo electrónico" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
        {!compact && (
          <textarea
            rows={3}
            placeholder="Ej. Conseguir más llamadas, aparecer primero en Google, mejorar mi web..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={inputCls}
          />
        )}
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

/* ---------- Step icons (same set as master) ---------- */
const stepIcons = [
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>,
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></svg>,
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M12 14h6" /><path d="M12 8h3" /><path d="M3 20h.01" /><path d="M3 14h.01" /><path d="M3 8h.01" /><path d="M3 2h.01" /></svg>,
  <svg key="4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
  <svg key="5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg>,
];

const SectorMasterTemplate = ({ content: c }: { content: SectorTemplateContent }) => {
  // Visual redesign applies to sector pages (/seo-para-*) and city pages (/seo-local-*).
  const isSector = c.canonical.startsWith("/seo-para-");
  const isCity = c.canonical.startsWith("/seo-local-");
  const R = isSector || isCity;
  const cityBanner = (k: "cityAparece" | "cityCompetencia") => {
    const b = BANNER_COPY[k](c.sectorLabel);
    return <CityConversionBanner eyebrow={b.eyebrow} title={<>{b.title} <BannerKey variant="orange">{b.key}</BannerKey></>} sub={b.sub} variant="orange" />;
  };
  const cityBanner2 = isCity && cityBanner("cityCompetencia");
  const wrap = R ? "mx-auto w-full max-w-[1200px] px-6" : "container";
  const sec = (bg: string) => (R ? `${bg} py-16 md:py-20` : sectionCls);
  const h2Size = R ? "text-3xl md:text-4xl lg:text-[42px]" : "text-4xl md:text-5xl lg:text-6xl";
  const h2Size2 = R ? "text-3xl md:text-4xl lg:text-[42px]" : "text-4xl md:text-5xl";
  const h3Split = R ? "text-2xl md:text-3xl lg:text-4xl" : "text-3xl md:text-4xl lg:text-5xl";
  const splitCls = R ? "grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center" : "mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center";
  const h2Max = R ? "max-w-[26ch]" : "max-w-[22ch]";
  const stepCard = R ? "border-primary/15 shadow-[0_10px_30px_-18px_hsl(var(--primary)/0.35)]" : "border-warm-fg/10 shadow-[0_8px_30px_-15px_rgba(26,26,36,0.08)]";
  const chip = R ? "border-primary/25 bg-white" : "border-warm-fg/20";
  const pill = (label: ReactNode, mb: string, dark = false) => (
    <p className={`inline-flex items-center gap-2 rounded-full border ${dark ? "border-white/25 bg-transparent text-white" : "border-primary/30 bg-white/70 text-warm-fg"} px-4 py-1.5 text-[11px] font-heading uppercase tracking-[0.18em] ${mb}`}>
      <span className="h-2 w-2 rounded-full bg-primary" />{label}
    </p>
  );
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
        breadcrumbLabel={c.breadcrumbLabel ?? `SEO para ${c.sectorLabel}`}
        eyebrow={c.heroEyebrow}
        h1={c.heroH1}
        subtitle={c.heroSubtitle}
        primaryCta={{ label: "Solicitar auditoría gratuita", to: c.heroPrimaryCtaTo ?? "/contacto" }}
        secondaryCta={{ label: "Ver cómo funciona", to: "/#como-posicionamos" }}
        trustItems={c.heroTrust}
        visualAlt={c.heroVisualAlt}
        trustRow={isCity ? (
          <div className="mt-8">
            <div className="flex items-center gap-2">
              <span className="flex gap-0.5 text-primary" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />)}
              </span>
              <span className="font-heading text-sm font-semibold text-warm-fg">Reseñas de 5 estrellas en Google</span>
            </div>
            <p className="mt-1 text-sm font-body text-warm-fg/60">Respuesta en menos de 24 h</p>
          </div>
        ) : undefined}
        curveClass="bg-white"
      />

      {c.afterHero}

      {/* MARQUEE */}
      <div className="bg-white border-t border-warm-fg/10">
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary py-6 text-center">
            — Herramientas con las que trabajamos
          </p>
        </div>
        <LogoMarquee />
      </div>
      {R && <RevealScope />}
      {isSector && <AnswerCapsule kind="sector" sectorLower={c.sectorLower} clientWord={c.clientWord} />}
      {isCity && <AnswerCapsule kind="city" city={c.sectorLabel} />}

      {/* MANIFIESTO */}
      {c.manifestoSection ?? (R ? (
        <>
          <section className="bg-white py-16 md:py-20">
            <div className={wrap}>
              {pill(c.manifestoEyebrow.replace(/^—\s*/, ""), "mb-8")}
              <div className="md:grid md:grid-cols-12 gap-10 items-start">
                <h2 className={`md:col-span-6 font-heading font-semibold text-warm-fg leading-[1.05] tracking-tight ${h2Size} ${h2Max}`}>
                  {c.manifestoH2}
                </h2>
                <p className="md:col-span-6 mt-6 md:mt-0 text-base md:text-lg font-body text-warm-fg leading-relaxed">
                  {c.manifestoBody}{c.geoBody && <> {c.geoBody}</>}
                </p>
              </div>
            </div>
          </section>
          <section className="bg-white py-6 md:py-8">
            <div className={wrap}>
          {/* Editorial split — GBP */}
          <div className="rounded-[2rem] bg-white border border-primary/30 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)] p-8 md:p-12 lg:p-14">
          <div className={splitCls}>
            <div>
              <p className="font-heading text-[11px] tracking-[0.22em] uppercase text-primary mb-6">Google Business Profile</p>
              <h3 className={`font-heading font-semibold text-warm-fg leading-[1.1] tracking-tight ${h3Split} max-w-[18ch]`}>
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
              {!c.hideCase && <a href="#caso-real" className="mt-10 inline-flex items-center gap-1 font-heading text-sm text-primary hover:gap-2 transition-all">
                Ver caso real →
              </a>}
            </div>
            <div className="order-first md:order-last">
              <GoogleBusinessProfileVisual
                alt={`Ilustración de una ficha de Google Business Profile para ${c.sectorLower}`}
              />
            </div>

          </div>
          </div>

            </div>
          </section>
          <section className="bg-white py-16 md:py-20">
            <div className={wrap}>
          {/* Editorial split — Web */}
          <div className={splitCls}>
            <div>
              <OptimizedWebsiteVisual
                alt={`Ilustración de una página web optimizada para ${c.sectorLower}`}
              />
            </div>
            <div>
              <p className="font-heading text-[11px] tracking-[0.22em] uppercase text-primary mb-6">Web optimizada</p>
              <h3 className={`font-heading font-semibold text-warm-fg leading-[1.1] tracking-tight ${h3Split} max-w-[18ch]`}>
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
        </>
      ) : <section className={sectionCls}>
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">{c.manifestoEyebrow}</p>
          <h2 className="font-heading font-semibold text-warm-fg leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl max-w-[22ch]">
            {c.manifestoH2}
          </h2>
          <p className="mt-8 max-w-2xl text-base md:text-lg font-body text-warm-fg leading-relaxed">
            {c.manifestoBody}{c.geoBody && <> {c.geoBody}</>}
          </p>

          {/* Editorial split — GBP */}
          <div className={splitCls}>
            <div>
              <p className="font-heading text-[11px] tracking-[0.22em] uppercase text-primary mb-6">Google Business Profile</p>
              <h3 className={`font-heading font-semibold text-warm-fg leading-[1.1] tracking-tight ${h3Split} max-w-[18ch]`}>
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
              {!c.hideCase && <a href="#caso-real" className="mt-10 inline-flex items-center gap-1 font-heading text-sm text-primary hover:gap-2 transition-all">
                Ver caso real →
              </a>}
            </div>
            <div className="order-first md:order-last">
              <GoogleBusinessProfileVisual
                alt={`Ilustración de una ficha de Google Business Profile para ${c.sectorLower}`}
              />
            </div>

          </div>

          {/* Editorial split — Web */}
          <div className={splitCls}>
            <div>
              <OptimizedWebsiteVisual
                alt={`Ilustración de una página web optimizada para ${c.sectorLower}`}
              />
            </div>
            <div>
              <p className="font-heading text-[11px] tracking-[0.22em] uppercase text-primary mb-6">Web optimizada</p>
              <h3 className={`font-heading font-semibold text-warm-fg leading-[1.1] tracking-tight ${h3Split} max-w-[18ch]`}>
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
      </section>)}

      {isSector && (
        <ConversionBanner
          title={BANNER_COPY.masClientes(c.clientWord).title}
          sub="Analizamos gratis tu ficha, tu web y a tu competencia, y te decimos qué te está frenando."
          cta={BANNER_COPY.masClientes(c.clientWord).cta}
          to="/contacto"
          variant={c.comoPosicionamos || c.queIncluye || c.afterManifesto || c.servicesCta || c.casesBeforeAudit ? "gradient" : "dark"}
        />
      )}

      {isCity && cityBanner("cityAparece")}

      {c.afterManifesto}

      {c.comoPosicionamos && (R ? <ComoPosicionamosSection {...c.comoPosicionamos} compact /> : <ComoPosicionamosSection {...c.comoPosicionamos} />)}

      {c.queIncluye && (R ? <QueIncluyeSection {...c.queIncluye} compact /> : <QueIncluyeSection {...c.queIncluye} />)}
      {c.queIncluye && cityBanner2}

      {c.servicesCta}

      {c.casesBeforeAudit && <CasosExitoSection dark={isCity} />}

      {/* CTA AUDITORÍA GRATUITA */}
      <section id={c.auditoriaSectionId} className={`${R ? "bg-white py-10 md:py-14" : "bg-white py-12 md:py-20"}${c.auditoriaScrollMargin ? " scroll-mt-24" : ""}`}>
        <div className={wrap}>
          <div className={R ? "relative overflow-hidden rounded-3xl bg-primary text-primary-foreground px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16" : "rounded-3xl bg-primary text-primary-foreground px-6 py-14 md:px-14 md:py-20 lg:px-20 lg:py-24"}>
            {R && <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(500px 300px at 85% 10%, rgba(255,255,255,0.18), transparent 60%)" }} />}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center${R ? " relative z-10" : ""}`}>
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
                  {["En menos de 24 horas", "Sin compromiso"].map((b) => (
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

      {c.otherSectorsAfterAudit && c.otherSectorsSection}

      {/* CÓMO TRABAJAMOS */}
      {!c.hideHow && (
      <section className={sec("bg-dark-bg")}>
        <div className={wrap}>
          <div className="max-w-3xl">
            {R ? pill(c.howEyebrow ?? "Cómo trabajamos", "mb-8", true) : <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-[11px] font-heading tracking-[0.18em] uppercase text-primary mb-8">
              {c.howEyebrow ?? "Cómo trabajamos"}
            </span>}
            <h2 className={`font-heading font-semibold ${R ? "text-white" : "text-warm-fg"} ${h2Size} leading-[1.05] tracking-tight mb-6`}>
              {c.howH2}
            </h2>
            <p className={`text-base md:text-lg font-body ${R ? "text-white/70" : "text-warm-fg"} leading-relaxed max-w-3xl`}>
              {c.howIntro}
            </p>
          </div>

          {/* Desktop timeline */}
          <div className="hidden md:block mt-20 md:mt-24">
            <div className="relative">
              <div className={`absolute top-6 left-[10%] right-[10%] h-px ${R ? "bg-white/25" : "bg-primary/25"}`} />
              <div className="grid grid-cols-5 gap-6">
                {c.howSteps.map((step, i) => (
                  <div key={step.h} className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-lg shadow-xs">
                      {i + 1}
                    </div>
                    <div className={`mt-8 bg-white border rounded-2xl p-6 w-full ${stepCard}`}>
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
              <div className={`absolute left-6 top-0 bottom-0 w-px ${R ? "bg-white/25" : "bg-primary/25"}`} />
              <div className="space-y-8">
                {c.howSteps.map((step, i) => (
                  <div key={step.h} className="relative flex gap-6">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-lg shadow-xs shrink-0">
                      {i + 1}
                    </div>
                    <div className={`flex-1 bg-white border rounded-2xl p-5 ${stepCard}`}>
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
      )}

      {!c.queIncluye && !c.hideHow && cityBanner2}

      {isSector && !c.hideHow && (
        <ConversionBanner
          title={BANNER_COPY.frena.title}
          sub="Auditoría gratuita de tu ficha de Google, tu web y los negocios que hoy aparecen por delante de ti."
          cta={BANNER_COPY.frena.cta}
          to="/contacto"
          variant="gradient"
        />
      )}

      {c.extraSection}

      {c.whyUsSection}

      {/* CASO REAL */}
      {!c.hideCase && (
      <section id="caso-real" className={sec("bg-white")}>
        <div className={R ? wrap : `${wrap} max-w-6xl`}>
          {R ? pill("Caso real", "mb-6") : <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-[11px] font-heading tracking-[0.18em] uppercase text-primary mb-6">
            Caso real
          </span>}
          <h2 className={`font-heading font-semibold text-warm-fg ${h2Size} leading-[1.05] tracking-tight mb-6 ${h2Max}`}>
            {c.caseH2}
          </h2>
          <p className="text-base md:text-lg font-body font-light text-warm-fg/70 leading-relaxed mb-20 max-w-3xl">
            {c.caseIntro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-20">
            {c.caseStages.map((card, index) => (
              <div
                key={card.title}
                className={`group flex flex-col bg-white rounded-3xl border ${R ? "border-primary/15" : "border-warm-fg/10"} p-6 lg:p-8 transition-all duration-300 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)] hover:border-warm-fg/20`}
              >
                <p className="font-heading text-[11px] tracking-[0.22em] uppercase text-primary mb-6">{card.title}</p>
                <div className="mb-6 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-warm-fg/10 bg-white">
                  <img
                    src={caseStageImages[index]?.src}
                    alt={caseStageImages[index]?.alt ?? card.label}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-base font-body font-light text-warm-fg/80 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>

          {R ? (
          <div className="rounded-3xl bg-dark-bg px-6 py-10 md:px-12 md:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x divide-y sm:divide-y-0 divide-white/15">
              {c.caseKpis.map((m) => (
                <div key={m.l} className="py-6 sm:py-2 text-center">
                  <p data-count className="font-heading font-semibold text-4xl md:text-5xl lg:text-6xl leading-none tracking-tight text-primary tabular-nums">{m.k}</p>
                  <p className="mt-4 font-body text-sm text-white/70">{m.l}</p>
                </div>
              ))}
            </div>
          </div>
          ) : (
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
          )}
        </div>
      </section>
      )}

      {isSector && !c.hideCase && (
        <ConversionBanner
          title={BANNER_COPY.proximoCaso.title}
          sub="Cuéntanos tu situación y te decimos qué haría Slocal en tu caso."
          cta={BANNER_COPY.proximoCaso.cta}
          to="/contacto"
          variant="gradient"
        />
      )}

      <ElfsightReviews className={R ? "bg-white py-16 md:py-20" : sectionCls} verifiedReviews={c.verifiedReviews} />

      {/* SERVICIOS COMPLEMENTARIOS */}
      <section className={sec(R ? "bg-dark-bg" : "bg-white")}>
        <div className={wrap}>
          <div className="max-w-3xl mb-16">
            <h2 className={`font-heading font-semibold ${R ? "text-white" : "text-warm-fg"} ${h2Size} leading-[1.05] tracking-tight mb-6`}>
              ¿Qué otros servicios pueden ayudarte a conseguir <span className="text-primary">más clientes</span> desde Google?
            </h2>
            <p className={`text-base md:text-lg font-body font-light ${R ? "text-white/70" : "text-warm-fg/70"} leading-relaxed max-w-3xl`}>
              Además de optimizar tu web y Google Business Profile, podemos ayudarte con servicios especializados para aumentar tu visibilidad, generar más confianza y acelerar el crecimiento de tu negocio.
            </p>
          </div>

          <ComplementaryServicesGrid className="mt-0" />
          <p className="mt-8 text-center text-sm md:text-base font-body text-white/70">
            ¿Quieres combinarlas con tu SEO local?{" "}
            <Link to="/contacto" className="font-medium text-primary underline-offset-4 hover:underline">Cuéntanos tu caso</Link>
          </p>
        </div>
      </section>

      {/* POR QUÉ CADA MES */}
      {isCity ? (
      <section className="bg-white py-14 md:py-16">
        <div className={wrap}>
          {pill("Trabajo mensual", "mb-6")}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 lg:items-end">
            <h2 className={`lg:col-span-7 font-heading font-semibold text-warm-fg ${h2Size2} leading-[1.05] tracking-tight`}>
              {c.monthlyH2}
            </h2>
            <p className="lg:col-span-5 text-base md:text-lg font-body text-warm-fg/80 leading-relaxed">{c.monthlyBody}</p>
          </div>
          <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {c.monthlyReasons.map((r, i) => (
              <li key={r.h} data-reveal className="rounded-2xl border-t-4 border-primary bg-dark-bg p-5">
                <span className="block font-heading text-3xl font-semibold text-primary leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-heading font-semibold text-base lg:text-lg leading-snug text-white">{r.h}</h3>
                <p className="mt-2 font-body text-sm text-white/70 leading-relaxed">{r.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      ) : (
      <section className={sec("bg-white")}>
        <div className={`${wrap} grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16`}>
          <div className="md:col-span-5">
            {R ? pill("Trabajo mensual", "mb-8") : <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— Trabajo mensual</p>}
            <h2 className={`font-heading font-semibold text-warm-fg ${h2Size2} leading-[1.05] tracking-tight mb-6`}>
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
      )}

      {/* PRESENCIA LOCAL — MAPA */}
      {(c.mapEmbed || c.mapQuery) && (
        <section className={isCity ? "bg-dark-bg py-14 md:py-16" : sec("bg-white")}>
          <div className={wrap}>
            <div className="max-w-3xl mb-12">
              <h2 className={`font-heading font-semibold ${isCity ? "text-white" : "text-warm-fg"} ${h2Size2} leading-[1.05] tracking-tight mb-6`}>
                {c.mapTitle}
              </h2>
              <p className={`text-base md:text-lg font-body font-light ${isCity ? "text-white/70" : "text-warm-fg/70"} leading-relaxed`}>
                {c.mapSubtitle}
              </p>
            </div>
            <div className={isCity ? "w-full rounded-3xl overflow-hidden border border-white/15" : "w-full rounded-2xl overflow-hidden border border-warm-fg/10 shadow-[0_10px_40px_-30px_rgba(0,0,0,0.12)]"}>
              <iframe
                title={`Mapa de ${c.mapEmbed ? "Slocal" : c.mapQuery}`}
                src={c.mapEmbed || `https://www.google.com/maps?q=${encodeURIComponent(c.mapQuery ?? "")}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[320px] md:h-[440px] border-0 block"
              />
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section data-no-reveal={isCity ? "" : undefined} className={isCity ? "bg-primary py-14 md:py-16" : sec(R ? "bg-dark-bg" : "bg-white")}>
        <div className={`${wrap} grid grid-cols-1 md:grid-cols-12 gap-12`}>
          <div className="md:col-span-4">
            {isCity ? <p className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent text-white px-4 py-1.5 text-[11px] font-heading uppercase tracking-[0.18em] mb-6"><span className="h-2 w-2 rounded-full bg-white" />FAQ</p> : R ? pill("FAQ", "mb-6", true) : <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— FAQ</p>}
            <h2 className={`font-heading font-semibold ${R ? "text-white" : "text-warm-fg"} ${h2Size2} leading-[1.05] tracking-tight`}>
              Preguntas frecuentes.
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className={R ? "space-y-3" : "divide-y divide-warm-fg/15 border-y border-warm-fg/15"}>
              {c.faqs.map((item, i) => (
                <details key={i} className={isCity ? "group py-6 rounded-2xl border border-white/10 bg-dark-bg px-6" : R ? "group py-6 rounded-2xl border border-primary/15 bg-white px-6" : "group py-6"}>
                  <summary className={`cursor-pointer list-none flex items-start justify-between gap-6 font-heading text-lg md:text-xl ${isCity ? "text-white" : "text-warm-fg"}`}>
                    <span>{item.q}</span>
                    <span className="text-primary shrink-0 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className={`mt-4 text-base font-body font-light ${isCity ? "text-white/75" : "text-warm-fg/70"} leading-relaxed max-w-2xl`}>
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {isSector && (
        <ConversionBanner
          title={BANNER_COPY.competencia.title}
          sub="Pide tu auditoría gratuita y descubre dónde estás ahora mismo."
          cta={BANNER_COPY.competencia.cta}
          to="/contacto"
          variant="gradient"
        />
      )}

      {/* CIUDADES */}
      <section className={isCity ? "bg-dark-bg py-14 md:py-16" : R ? "bg-white py-14 md:py-16" : "bg-white py-20 md:py-24 border-t border-warm-fg/10"}>
        <div className={wrap}>
          {R ? pill("Cobertura", "mb-6", isCity) : <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Cobertura</p>}
          <h2 className={`font-heading font-semibold ${isCity ? "text-white" : "text-warm-fg"} ${R ? h2Size : "text-3xl md:text-4xl lg:text-5xl"} leading-[1.05] tracking-tight ${h2Max} mb-4`}>
            {c.citiesH2}
          </h2>
          <p className={`text-base font-body ${isCity ? "text-white/70" : "text-warm-fg"} leading-relaxed mb-6 max-w-2xl`}>{c.citiesBody}</p>
          {isCity ? <CoberturaMapas dark /> : <CoberturaMapas />}
          <div className="flex flex-wrap gap-2.5">
            {cities.map((city) => (
              <Link
                key={city.slug}
                to={`/seo-local-${city.slug}`}
                className={isCity ? "border border-white bg-white rounded-full px-5 py-2.5 text-sm font-heading text-warm-fg transition-all duration-200 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-[2px]" : `border ${R ? "bg-white border-primary/25" : "border-warm-fg/20"} rounded-full px-5 py-2.5 text-sm font-heading text-warm-fg transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-[2px]`}
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OTROS SECTORES */}
      {!c.otherSectorsAfterAudit && (c.otherSectorsSection ?? (
        <section className={R ? "bg-white py-12 md:py-14" : "bg-white py-16 md:py-20 border-t border-warm-fg/10"}>
          <div className={wrap}>
            {R ? pill("Otros sectores", "mb-6") : <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Otros sectores</p>}
            <h2 className="font-heading text-2xl md:text-3xl text-warm-fg mb-4">{c.otherSectorsH2}</h2>
            <p className="text-base font-body text-warm-fg leading-relaxed max-w-3xl mb-8">{c.otherSectorsBody}</p>
            <div className="flex flex-wrap gap-2.5">
              {c.otherSectors.map((s) => (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className={`border ${chip} rounded-full px-5 py-2.5 text-sm font-heading text-warm-fg transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-[2px]`}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {!c.casesBeforeAudit && <CasosExitoSection />}

      <CTASection id="contacto" title={c.finalCtaTitle} buttonText="Solicitar auditoría gratuita →" buttonTo={c.finalCtaTo} gradient={R} />
    </>
  );
};

export default SectorMasterTemplate;
