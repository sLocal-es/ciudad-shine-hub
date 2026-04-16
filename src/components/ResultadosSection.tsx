import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { X, Phone, Eye, Smartphone, Search, MapPin, CheckCircle2, Quote, ArrowRight, Shield } from "lucide-react";

import logoTei from "@/assets/casos/logo-tei.webp";
import logoViviane from "@/assets/casos/logo-viviane.png";
import logoMva from "@/assets/casos/logo-mva.png";
import logoFontaneros from "@/assets/casos/logo-fontaneros.png";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface MetricCard {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface CaseStudy {
  id: string;
  logo: string;
  logoScale?: string;
  name: string;
  category: string;
  city: string;
  status: string;
  headlineStat: string;
  headlineLabel: string;
  problem: string;
  actions: string[];
  metrics: MetricCard[];
  testimonial: string;
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const cases: CaseStudy[] = [
  {
    id: "tei",
    logo: logoTei,
    logoScale: "90px",
    name: "Grupo TEI",
    category: "Reformas",
    city: "Madrid",
    status: "MES 3 · ACTIVO",
    headlineStat: "8 llamadas",
    headlineLabel: "directas desde Google en 3 meses",
    problem: "Web antigua sin optimizar y sin ficha de Google. Dependían exclusivamente de su página web obsoleta para captar clientes.",
    actions: [
      "Creación y verificación de ficha de Google Business Profile",
      "Optimización de servicios y categorías",
      "Configuración completa de SEO local",
      "Activación y seguimiento inicial",
    ],
    metrics: [
      { icon: <Eye className="w-4 h-4" />, value: "546", label: "Visualizaciones del perfil" },
      { icon: <Phone className="w-4 h-4" />, value: "8", label: "Llamadas directas" },
      { icon: <Smartphone className="w-4 h-4" />, value: "77%", label: "Tráfico móvil" },
      { icon: <Search className="w-4 h-4" />, value: "Google", label: "Origen principal" },
    ],
    testimonial: "En pocos meses empezamos a recibir llamadas sin depender de la web.",
  },
  {
    id: "viviane",
    logo: logoViviane,
    logoScale: "110px",
    name: "Viviane Custodio",
    category: "Psicóloga",
    city: "Valencia",
    status: "MES 2 · ACTIVO",
    headlineStat: "4 llamadas",
    headlineLabel: "en el segundo mes tras reactivar la ficha",
    problem: "Ficha de Google abandonada durante 3 años sin ninguna gestión activa ni página web asociada.",
    actions: [
      "Reactivación completa de la ficha de Google",
      "Optimización de servicios y categorías",
      "Configuración de horarios y área de servicio",
      "Publicación de contenido y fotos profesionales",
    ],
    metrics: [
      { icon: <Eye className="w-4 h-4" />, value: "325", label: "Visualizaciones del perfil" },
      { icon: <Phone className="w-4 h-4" />, value: "4", label: "Llamadas directas" },
      { icon: <MapPin className="w-4 h-4" />, value: "Maps", label: "Origen principal" },
    ],
    testimonial: "La ficha estaba completamente parada y ahora vuelve a generar contactos.",
  },
  {
    id: "mva",
    logo: logoMva,
    logoScale: "80px",
    name: "MVA Fontanería",
    category: "Fontanería",
    city: "Madrid",
    status: "MES 2 · ACTIVO",
    headlineStat: "60 interacciones",
    headlineLabel: "en solo 2 meses · sin web",
    problem: "Sin ficha de Google y sin página web. Zero presencia digital. Dependían exclusivamente del boca a boca.",
    actions: [
      "Creación de ficha de Google desde cero",
      "Configuración básica de servicios y categorías",
      "Optimización para búsquedas locales",
      "Activación de chat y llamadas directas",
    ],
    metrics: [
      { icon: <Eye className="w-4 h-4" />, value: "567", label: "Visualizaciones del perfil" },
      { icon: <Phone className="w-4 h-4" />, value: "60", label: "Interacciones totales" },
      { icon: <Smartphone className="w-4 h-4" />, value: "73%", label: "Tráfico móvil" },
      { icon: <Search className="w-4 h-4" />, value: "Google", label: "Origen principal" },
    ],
    testimonial: "No esperábamos movimiento sin tener ni web.",
  },
  {
    id: "fontaneros",
    logo: logoFontaneros,
    logoScale: "60px",
    name: "Fontaneros Económicos",
    category: "Fontanería",
    city: "Madrid",
    status: "RECUPERADO",
    headlineStat: "Ficha activa",
    headlineLabel: "recuperada tras meses de suspensión",
    problem: "Ficha de Google suspendida durante meses, bloqueando toda visibilidad online del negocio.",
    actions: [
      "Recuperación y verificación de la ficha suspendida",
      "Corrección de información y cumplimiento de directrices",
      "Reactivación del perfil para posicionamiento",
    ],
    metrics: [
      { icon: <Shield className="w-4 h-4" />, value: "Activo", label: "Estado actual" },
      { icon: <CheckCircle2 className="w-4 h-4" />, value: "100%", label: "Verificado" },
      { icon: <MapPin className="w-4 h-4" />, value: "Listo", label: "Listo para posicionar" },
    ],
    testimonial: "Después de meses bloqueados, por fin volvemos a estar visibles.",
  },
];

/* ------------------------------------------------------------------ */
/*  CaseStudyModal                                                     */
/* ------------------------------------------------------------------ */

function CaseStudyModal({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl animate-in fade-in zoom-in-95 duration-300"
        style={{ background: "#12152A", border: "1px solid rgba(249,115,22,0.15)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full p-2 transition-colors"
          style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="p-8 pb-0">
          <div className="flex items-center gap-5 mb-6">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <img src={study.logo} alt={study.name} className="w-12 h-12 object-contain" loading="lazy" />
            </div>
            <div>
              <h3 className="text-xl font-bold" style={{ color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {study.name}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-[10px] font-medium uppercase tracking-widest rounded-full px-3 py-1"
                  style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)", color: "#F97316" }}>
                  {study.category} · {study.city}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest rounded-full px-3 py-1"
                  style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)", color: "#F97316" }}>
                  {study.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-8" style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

        {/* Problem */}
        <div className="p-8 pb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#ef4444" }} />
            <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "#ef4444" }}>
              Problema
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            {study.problem}
          </p>
        </div>

        {/* Action */}
        <div className="px-8 pb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#F97316" }} />
            <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "#F97316" }}>
              Acción
            </span>
          </div>
          <div className="space-y-2.5">
            {study.actions.map((action, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#F97316" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="px-8 pb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
            <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "#22c55e" }}>
              Resultado
            </span>
          </div>

          {/* Big stat */}
          <div
            className="rounded-xl p-6 mb-4 text-center"
            style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)" }}
          >
            <span className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'DM Serif Display', serif", color: "#F97316" }}>
              {study.headlineStat}
            </span>
            <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
              {study.headlineLabel}
            </p>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-2 gap-3">
            {study.metrics.map((m, i) => (
              <div
                key={i}
                className="rounded-xl p-4 flex flex-col gap-1"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span style={{ color: "#F97316" }}>{m.icon}</span>
                  <span className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {m.label}
                  </span>
                </div>
                <span className="text-xl font-bold" style={{ fontFamily: "'DM Serif Display', serif", color: "#fff" }}>
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="px-8 pb-8">
          <div
            className="rounded-xl p-6 relative"
            style={{ background: "rgba(249,115,22,0.05)", borderLeft: "3px solid #F97316" }}
          >
            <Quote className="w-5 h-5 mb-2" style={{ color: "rgba(249,115,22,0.4)" }} />
            <p
              className="text-sm leading-relaxed italic"
              style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'DM Serif Display', serif" }}
            >
              "{study.testimonial}"
            </p>
            <span className="block mt-3 text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
              — {study.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CaseCard (grid preview)                                            */
/* ------------------------------------------------------------------ */

function CaseCard({ study, onClick }: { study: CaseStudy; onClick: () => void }) {
  return (
    <div
      className="group rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden"
      style={{
        background: "#1A1D2E",
        border: "1px solid rgba(249,115,22,0.12)",
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(249,115,22,0.35)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px -12px rgba(249,115,22,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(249,115,22,0.12)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Logo hero area — unified container */}
      <div
        className="flex items-center justify-center px-8 rounded-t-2xl"
        style={{ background: "#1F2337", minHeight: "180px" }}
      >
        <img
          src={study.logo}
          alt={study.name}
          className="w-auto max-w-[75%] object-contain"
          style={{ height: study.logoScale || "80px" }}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-1">
        {/* Name */}
        <h3 className="text-base font-bold mb-2" style={{ color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {study.name}
        </h3>

        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span
            className="text-[9px] font-medium uppercase tracking-widest rounded-full px-2.5 py-0.5"
            style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)", color: "#F97316" }}
          >
            {study.category} · {study.city}
          </span>
          <span
            className="text-[9px] font-medium uppercase tracking-widest rounded-full px-2.5 py-0.5"
            style={{ background: "rgba(249,115,22,0.06)", border: "1px solid rgba(249,115,22,0.15)", color: "#F97316" }}
          >
            {study.status}
          </span>
        </div>

        {/* Subtle metric line */}
        <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
          <span className="font-semibold" style={{ color: "#F97316" }}>{study.headlineStat}</span>
          {" "}{study.headlineLabel}
        </p>

        {/* CTA at bottom */}
        <span
          className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all group-hover:gap-2.5 mt-auto"
          style={{ color: "#F97316" }}
        >
          Ver resultados <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Section                                                       */
/* ------------------------------------------------------------------ */

export default function ResultadosSection() {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  const handleOpen = useCallback((study: CaseStudy) => setActiveStudy(study), []);
  const handleClose = useCallback(() => setActiveStudy(null), []);

  return (
    <>
      {activeStudy && <CaseStudyModal study={activeStudy} onClose={handleClose} />}

      <section
        className="py-20 md:py-28"
        style={{ background: "#0B1120", fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="container">
          {/* Label */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest mb-7"
            style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)", color: "#F97316" }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "#F97316" }} />
            Casos de éxito
          </div>

          {/* Heading */}
          <h2
            className="text-2xl md:text-4xl font-heading font-extrabold leading-tight mb-3 max-w-xl"
            style={{ color: "#fff" }}
          >
            Negocios reales,{" "}
            <span style={{ color: "#F97316" }}>resultados reales.</span>
          </h2>
          <p
            className="text-sm md:text-base max-w-lg leading-relaxed mb-14"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Cada caso es una historia de transformación. Haz clic para descubrir cómo pasaron de la invisibilidad a recibir llamadas.
          </p>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cases.map((c) => (
              <CaseCard key={c.id} study={c} onClick={() => handleOpen(c)} />
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-14 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)" }}
          >
            <div>
              <h3 className="font-heading text-lg md:text-xl font-extrabold mb-1" style={{ color: "#fff" }}>
                ¿Quieres estos resultados para tu negocio?
              </h3>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                Empezamos por la ficha de Google — sin contrato, sin permanencia.
              </p>
            </div>
            <Link
              to="/contacto"
              className="inline-block rounded-full px-7 py-3.5 text-sm font-heading font-bold whitespace-nowrap"
              style={{ background: "linear-gradient(135deg,#D96A28,#F97316)", color: "#fff" }}
            >
              Quiero empezar →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
