import { useState, useCallback } from "react";
import { X, Quote, ArrowRight, CheckCircle2 } from "lucide-react";

import logoTei from "@/assets/casos/logo-tei.png";
import logoViviane from "@/assets/casos/logo-viviane.png";
import logoMva from "@/assets/casos/logo-mva.png";
import logoFontaneros from "@/assets/casos/logo-fontaneros.png";

const WA_URL =
  "https://wa.me/34684780063?text=Hola%2C%20quiero%20que%20Google%20me%20mande%20clientes";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface CaseStudy {
  id: string;
  logo: string;
  name: string;
  category: string;
  city: string;
  before: string;
  actions: string[];
  after: string;
  testimonial: string;
}

/* ------------------------------------------------------------------ */
/*  Data — historias reales en lenguaje humano                         */
/* ------------------------------------------------------------------ */

const cases: CaseStudy[] = [
  {
    id: "viviane",
    logo: logoViviane,
    name: "Viviane Custodio",
    category: "Psicóloga",
    city: "Valencia",
    before:
      "No tenía presencia en Google. Solo aparecía en directorios y dependía del boca a boca. Si alguien la buscaba directamente, casi no la encontraba.",
    actions: [
      "Reactivamos su ficha de Google desde cero",
      "Configuramos sus servicios y horarios",
      "Subimos fotos profesionales y empezamos a publicar",
    ],
    after:
      "En el segundo mes ya empezó a recibir llamadas directas desde Google sin pagar publicidad. Pacientes nuevos que la encontraron buscando psicóloga en su zona.",
    testimonial:
      "La ficha estaba completamente parada y ahora vuelve a generar contactos.",
  },
  {
    id: "tei",
    logo: logoTei,
    name: "Grupo TEI",
    category: "Reformas",
    city: "Madrid",
    before:
      "Tenían una web antigua que apenas posicionaba y no tenían ficha de Google. Dependían de captar clientes solo por la web vieja.",
    actions: [
      "Creamos y verificamos su ficha de Google",
      "La configuramos para que apareciese en búsquedas de reformas en Madrid",
      "Activamos llamadas directas desde el perfil",
    ],
    after:
      "En 3 meses empezaron a recibir llamadas directas desde Google sin tocar la web vieja. Clientes nuevos que llegan diciendo 'os he visto en Google'.",
    testimonial:
      "En pocos meses empezamos a recibir llamadas sin depender de la web.",
  },
  {
    id: "fontaneros",
    logo: logoFontaneros,
    name: "Fontaneros Económicos",
    category: "Fontanería",
    city: "Madrid",
    before:
      "Su ficha de Google estaba suspendida desde hacía meses. No aparecían en ningún sitio. Todo el negocio dependía de recomendaciones.",
    actions: [
      "Recuperamos la ficha suspendida y la verificamos otra vez",
      "Corregimos toda la información para cumplir las normas de Google",
      "Montamos web optimizada y empezamos a publicar contenido",
    ],
    after:
      "En mes y medio empezaron a recibir llamadas otra vez y mensajes por WhatsApp de clientes nuevos que les encontraron en Google.",
    testimonial:
      "Después de meses bloqueados, por fin volvemos a estar visibles y recibiendo llamadas.",
  },
  {
    id: "mva",
    logo: logoMva,
    name: "MVA Fontanería",
    category: "Fontanería",
    city: "Madrid",
    before:
      "No tenían absolutamente nada en Google. Ni ficha, ni web. Solo boca a boca y eso limitaba muchísimo el crecimiento del negocio.",
    actions: [
      "Creamos la ficha de Google desde cero",
      "Configuramos servicios, zonas y categorías",
      "Activamos chat y llamadas directas",
    ],
    after:
      "En 2 meses empezaron a recibir contactos nuevos solo desde la ficha de Google, sin tener todavía página web. Clientes que antes no sabían que existían.",
    testimonial:
      "No esperábamos movimiento sin tener ni web.",
  },
];

/* ------------------------------------------------------------------ */
/*  CaseStudyModal — Antes → Acción → Después                          */
/* ------------------------------------------------------------------ */

function CaseStudyModal({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl animate-in fade-in zoom-in-95 duration-300"
        style={{ background: "#12152A", border: "1px solid rgba(249,115,22,0.15)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full p-2 transition-colors"
          style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="p-8 pb-6">
          <div className="flex items-center gap-5 mb-5">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0 bg-white"
            >
              <img src={study.logo} alt={study.name} className="w-12 h-12 object-contain" loading="lazy" />
            </div>
            <div>
              <h3 className="text-xl font-bold" style={{ color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {study.name}
              </h3>
              <span
                className="inline-block mt-1 text-[10px] font-medium uppercase tracking-widest rounded-full px-3 py-1"
                style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)", color: "#F97316" }}
              >
                {study.category} · {study.city}
              </span>
            </div>
          </div>
        </div>

        <div className="mx-8" style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

        {/* Antes */}
        <div className="p-8 pb-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#ef4444" }} />
            <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "#ef4444" }}>
              Antes
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            {study.before}
          </p>
        </div>

        {/* Qué se hizo */}
        <div className="px-8 pb-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#F97316" }} />
            <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "#F97316" }}>
              Qué hicimos
            </span>
          </div>
          <div className="space-y-2.5">
            {study.actions.map((action, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#F97316" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Después */}
        <div className="px-8 pb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
            <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "#22c55e" }}>
              Después
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
            {study.after}
          </p>
        </div>

        {/* Testimonio */}
        <div className="px-8 pb-6">
          <div
            className="rounded-xl p-5 relative"
            style={{ background: "rgba(249,115,22,0.05)", borderLeft: "3px solid #F97316" }}
          >
            <Quote className="w-4 h-4 mb-2" style={{ color: "rgba(249,115,22,0.5)" }} />
            <p
              className="text-sm leading-relaxed italic"
              style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'DM Serif Display', serif" }}
            >
              "{study.testimonial}"
            </p>
            <span className="block mt-2 text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>
              — {study.name}
            </span>
          </div>
        </div>

        {/* CTA WhatsApp */}
        <div className="px-8 pb-8">
          <a
            href={WA_URL}
            className="block w-full text-center rounded-lg py-3.5 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#D96A28,#F97316)", color: "#fff" }}
          >
            💬 Quiero algo así para mi negocio
          </a>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CaseCard — sin texto extra, solo logo + nombre                     */
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
      <div
        className="flex items-center justify-center rounded-t-2xl"
        style={{ background: "#FFFFFF", height: "180px", padding: "16px" }}
      >
        <img
          src={study.logo}
          alt={study.name}
          className="object-contain"
          style={{ maxWidth: "80%", maxHeight: "80%" }}
          loading="lazy"
        />
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-1">
        <h3 className="text-base font-bold mb-3" style={{ color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {study.name}
        </h3>
        <span
          className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all group-hover:gap-2.5 mt-auto"
          style={{ color: "#F97316" }}
        >
          Ver caso <ArrowRight className="w-3.5 h-3.5" />
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
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest mb-7"
            style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)", color: "#F97316" }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "#F97316" }} />
            Casos reales
          </div>

          <h2
            className="text-2xl md:text-4xl font-heading font-extrabold leading-tight mb-3 max-w-xl"
            style={{ color: "#fff" }}
          >
            Negocios reales,{" "}
            <span style={{ color: "#F97316" }}>resultados reales.</span>
          </h2>
          <p
            className="text-sm md:text-base max-w-lg leading-relaxed mb-14"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Haz clic en cada caso para ver cómo pasaron de no aparecer en Google a recibir llamadas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cases.map((c) => (
              <CaseCard key={c.id} study={c} onClick={() => handleOpen(c)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
