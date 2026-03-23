import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import gbpViviane from "@/assets/casos/gbp-viviane.png";
import waViviane from "@/assets/casos/wa-viviane-social.webp";
import waJuanCarlos from "@/assets/casos/wa-juancarlos.webp";
import gbpLlamadasTei from "@/assets/casos/gbp-llamadas-tei.webp";
import gscObrasMadrid from "@/assets/casos/gsc-obras-madrid.webp";
import gscViviane from "@/assets/casos/gsc-viviane.webp";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface FlipCard {
  front: string;        // stat number
  frontLabel: string;   // stat label
  backImage: string;    // screenshot src (or empty)
  backPlaceholder: string;
}

interface CaseCard {
  id: string;
  name: string;
  badge: string;
  badgeDetail?: string; // e.g. "MES 3 · ACTIVO"
  headlineStat: string;
  headlineLabel: string;
  flipCards: FlipCard[];
  whatsapp?: {
    quote: string;
    thumb: string;       // thumbnail (same image)
    full: string;        // full-size image
    placeholder: string;
  };
  isContrast?: boolean;
  contrastText?: string;
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const cases: CaseCard[] = [
  {
    id: "juancarlos",
    name: "Juan Carlos",
    badge: "Reformas · Madrid",
    badgeDetail: "MES 3 · ACTIVO",
    headlineStat: "8 llamadas",
    headlineLabel: "directas desde Google este mes",
    flipCards: [
      { front: "8", frontLabel: "Llamadas", backImage: gbpLlamadasTei, backPlaceholder: "GBP 8 llamadas Juan Carlos" },
      { front: "2.465", frontLabel: "Impresiones", backImage: gscObrasMadrid, backPlaceholder: "Search Console Juan Carlos" },
      { front: "134", frontLabel: "Clics", backImage: gscObrasMadrid, backPlaceholder: "Search Console Juan Carlos" },
    ],
    whatsapp: {
      quote: "Confío en ti.",
      thumb: waJuanCarlos,
      full: waJuanCarlos,
      placeholder: "WhatsApp Juan Carlos",
    },
  },
  {
    id: "viviane",
    name: "Viviane",
    badge: "Psicóloga · Valencia",
    badgeDetail: "MES 2 · ACTIVO",
    headlineStat: "6 llamadas",
    headlineLabel: "directas desde Google este mes",
    flipCards: [
      { front: "6", frontLabel: "Llamadas", backImage: gbpViviane, backPlaceholder: "GBP Viviane" },
      { front: "500", frontLabel: "Impresiones", backImage: gscViviane, backPlaceholder: "Search Console Viviane" },
      { front: "26", frontLabel: "Clics", backImage: gscViviane, backPlaceholder: "Search Console Viviane" },
    ],
    whatsapp: {
      quote: "Se va notando los post de la ficha, me han entrado 6 llamadas este mes.",
      thumb: waViviane,
      full: waViviane,
      placeholder: "WhatsApp Viviane",
    },
  },
  {
    id: "fontanero",
    name: "MVA Fontanería",
    badge: "Fontanería · Madrid",
    badgeDetail: "SOLO FICHA",
    headlineStat: "3 interacciones",
    headlineLabel: "en 2 meses · sin clics · sin llamadas",
    flipCards: [
      { front: "3", frontLabel: "Interacciones", backImage: "", backPlaceholder: "GBP sin gestión" },
      { front: "0", frontLabel: "Clics", backImage: "", backPlaceholder: "Sin datos" },
      { front: "0", frontLabel: "Llamadas", backImage: "", backPlaceholder: "Sin datos" },
    ],
    isContrast: false,
    contrastText: "Sin gestión activa, Google no posiciona el negocio. Los resultados hablan solos.",
  },
];

/* ------------------------------------------------------------------ */
/*  Lightbox                                                           */
/* ------------------------------------------------------------------ */

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
      tabIndex={0}
      role="dialog"
    >
      <img
        src={src}
        alt="WhatsApp screenshot"
        className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  FlipCardComponent                                                  */
/* ------------------------------------------------------------------ */

function FlipCardComponent({ card, isContrast }: { card: FlipCard; isContrast?: boolean }) {
  const [flipped, setFlipped] = useState(false);

  const hasBack = card.backImage !== "";

  return (
    <div
      className="cursor-pointer select-none"
      style={{ perspective: "600px" }}
      onClick={() => hasBack && setFlipped(!flipped)}
    >
      <div
        className="relative w-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: "110px",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-xl flex flex-col items-center justify-center p-4 backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            background: isContrast ? "rgba(255,255,255,0.03)" : "rgba(249,115,22,0.08)",
            border: `1px solid ${isContrast ? "rgba(255,255,255,0.06)" : "rgba(249,115,22,0.2)"}`,
          }}
        >
          <span
            className="text-3xl md:text-4xl font-bold leading-none"
            style={{
              fontFamily: "'DM Serif Display', serif",
              color: isContrast ? "rgba(255,255,255,0.3)" : "#F97316",
            }}
          >
            {card.front}
          </span>
          <span className="text-[10px] mt-2 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>
            {card.frontLabel}
          </span>
          {hasBack && (
            <span className="text-[9px] mt-1" style={{ color: "rgba(255,255,255,0.2)" }}>
              Clic para ver →
            </span>
          )}
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            border: "1px solid rgba(249,115,22,0.2)",
          }}
        >
          {hasBack ? (
            <img
              src={card.backImage}
              alt={card.frontLabel}
              className="w-full h-full object-cover object-top rounded-xl"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center rounded-xl text-[11px]"
              style={{
                background: "rgba(255,255,255,0.02)",
                color: "rgba(255,255,255,0.2)",
                border: "1px dashed rgba(255,255,255,0.1)",
              }}
            >
              {card.backPlaceholder}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CaseStudyCard                                                      */
/* ------------------------------------------------------------------ */

function CaseStudyCard({
  card,
  isOpen,
  onToggle,
}: {
  card: CaseCard;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const isContrast = card.isContrast;

  return (
    <>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}

      <div
        className="rounded-2xl transition-all duration-300"
        style={{
          background: "#1A1D2E",
          border: `1px solid ${isContrast ? "rgba(255,255,255,0.08)" : "rgba(249,115,22,0.15)"}`,
          opacity: isContrast ? 0.85 : 1,
          filter: isContrast ? "saturate(0.5)" : "none",
        }}
      >
        {/* Closed state — always visible */}
        <button
          className="w-full text-left p-6 md:p-8 cursor-pointer focus:outline-none"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          {/* Badge */}
          <span
            className="inline-block text-[10px] font-medium uppercase tracking-widest rounded-full px-3 py-1 mb-4"
            style={{
              background: isContrast ? "rgba(255,255,255,0.05)" : "rgba(249,115,22,0.1)",
              border: `1px solid ${isContrast ? "rgba(255,255,255,0.1)" : "rgba(249,115,22,0.3)"}`,
              color: isContrast ? "rgba(255,255,255,0.35)" : "#F97316",
            }}
          >
            {isContrast ? "Sin gestión mensual" : card.badge}
          </span>

          {card.badgeDetail && !isContrast && (
            <span
              className="inline-block ml-2 text-[10px] uppercase tracking-widest rounded-full px-3 py-1 mb-4"
              style={{
                background: "rgba(249,115,22,0.1)",
                border: "1px solid rgba(249,115,22,0.2)",
                color: "#F97316",
              }}
            >
              {card.badgeDetail}
            </span>
          )}

          {isContrast && card.badgeDetail && (
            <span
              className="inline-block ml-2 text-[10px] uppercase tracking-widest rounded-full px-3 py-1 mb-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              {card.badgeDetail}
            </span>
          )}

          {/* Headline stat */}
          <h3
            className="text-2xl md:text-3xl leading-tight mb-1"
            style={{
              fontFamily: "'DM Serif Display', serif",
              color: isContrast ? "rgba(255,255,255,0.3)" : "#F97316",
            }}
          >
            {card.headlineStat}
          </h3>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            {card.headlineLabel}
          </p>

          {/* Toggle hint */}
          <span
            className="inline-block mt-4 text-xs font-medium transition-colors"
            style={{ color: isContrast ? "rgba(255,255,255,0.25)" : "#F97316" }}
          >
            {isOpen ? "Cerrar ↑" : "Ver resultados →"}
          </span>
        </button>

        {/* Expanded state */}
        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            maxHeight: isOpen ? "800px" : "0",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-5">
            {/* Flip cards */}
            <div className="grid grid-cols-3 gap-3">
              {card.flipCards.map((fc, i) => (
                <FlipCardComponent key={i} card={fc} isContrast={isContrast} />
              ))}
            </div>

            {/* WhatsApp strip OR contrast text */}
            {isContrast && card.contrastText ? (
              <div
                className="rounded-xl p-5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderLeft: "2px solid rgba(255,255,255,0.1)",
                }}
              >
                <p
                  className="text-sm leading-relaxed italic"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {card.contrastText}
                </p>
              </div>
            ) : card.whatsapp ? (
              <div
                className="rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all hover:border-orange-500/30"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onClick={() => {
                  const src = card.whatsapp!.full || card.whatsapp!.thumb;
                  if (src) setLightboxSrc(src);
                }}
              >
                {/* Thumbnail */}
                {card.whatsapp.thumb ? (
                  <img
                    src={card.whatsapp.thumb}
                    alt="WhatsApp"
                    className="w-12 h-12 rounded-lg object-cover object-top flex-shrink-0"
                  />
                ) : (
                  <div
                    className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center text-lg"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    💬
                  </div>
                )}

                {/* Quote */}
                <p
                  className="text-xs leading-relaxed italic flex-1"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  "{card.whatsapp.quote}"
                </p>

                <span className="text-[10px] flex-shrink-0" style={{ color: "#F97316" }}>
                  Ver →
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Section                                                       */
/* ------------------------------------------------------------------ */

export default function ResultadosSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = useCallback(
    (id: string) => setOpenId((prev) => (prev === id ? null : id)),
    []
  );

  return (
    <section
      className="py-20 md:py-28"
      style={{ background: "#0B1120", fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="container">
        {/* Label */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest mb-7"
          style={{
            background: "rgba(249,115,22,0.1)",
            border: "1px solid rgba(249,115,22,0.3)",
            color: "#F97316",
          }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: "#F97316" }}
          />
          Casos reales
        </div>

        {/* Heading */}
        <h2
          className="text-2xl md:text-4xl font-heading font-extrabold leading-tight mb-3 max-w-xl"
          style={{ color: "#fff" }}
        >
          Algunos de los negocios{" "}
          <span style={{ color: "#F97316" }}>que gestiono.</span>
        </h2>
        <p
          className="text-sm md:text-base max-w-lg leading-relaxed mb-14"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          No son capturas inventadas ni promesas. Son los datos reales de
          negocios que llevan en el sistema.
        </p>

        {/* Cards grid — 2 cols desktop, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.map((c) => (
            <CaseStudyCard
              key={c.id}
              card={c}
              isOpen={openId === c.id}
              onToggle={() => handleToggle(c.id)}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-14 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          style={{
            background: "rgba(249,115,22,0.08)",
            border: "1px solid rgba(249,115,22,0.2)",
          }}
        >
          <div>
            <h3
              className="font-heading text-lg md:text-xl font-extrabold mb-1"
              style={{ color: "#fff" }}
            >
              ¿Quieres estos resultados para tu negocio?
            </h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              Empezamos por la ficha de Google — sin contrato, sin permanencia.
            </p>
          </div>
          <Link
            to="/contacto"
            className="inline-block rounded-full px-7 py-3.5 text-sm font-heading font-bold whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg,#D96A28,#F97316)",
              color: "#fff",
            }}
          >
            Quiero empezar →
          </Link>
        </div>
      </div>
    </section>
  );
}
