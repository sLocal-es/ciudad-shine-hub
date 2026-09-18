import { ArrowRight, Wrench, Hammer, Scale, HeartPulse, Brain, type LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { cases, type CaseStudy } from "@/data/casosExito";

/* ------------------------------------------------------------------ */
/*  Icono por sector — mismo patrón que la sección de sectores de Home */
/* ------------------------------------------------------------------ */

const sectorIcon: Record<string, LucideIcon> = {
  "Psicóloga": Brain,
  "Reformas": Hammer,
  "Fontanería": Wrench,
  "Abogados": Scale,
};

export function SectorIcon({ category, size = "lg" }: { category: string; size?: "lg" | "sm" }) {
  const Icon = sectorIcon[category] ?? HeartPulse;
  return (
    <Icon
      className={size === "lg" ? "w-16 h-16 md:w-20 md:h-20 text-primary" : "w-8 h-8 text-primary"}
      strokeWidth={1.25}
      aria-hidden
    />
  );
}

/* ------------------------------------------------------------------ */
/*  CaseCard — compacta y densa: eyebrow naranja, título, hook, stats  */
/* ------------------------------------------------------------------ */

export function CaseCard({ study, position }: { study: CaseStudy; position: number }) {
  const stats =
    study.quickStats && study.quickStats.length > 0
      ? study.quickStats.slice(0, 3)
      : [
          { label: "Sector", value: study.category },
          { label: "Ciudad", value: study.city },
        ];

  return (
    <article className="group transition-transform duration-300 hover:-translate-y-1 focus-within:-translate-y-1 flex flex-col">
      <Link
        to="/casos-de-exito/$slug"
        params={{ slug: study.slug }}
        className="flex flex-col flex-1 rounded-2xl border border-foreground/10 bg-white p-5 transition-[color,box-shadow,border-color] duration-300 hover:border-primary/40 hover:shadow-[0_0_32px_hsl(var(--primary)/0.28)] focus-visible:border-primary/40 focus-visible:shadow-[0_0_32px_hsl(var(--primary)/0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label={`Ver el caso de éxito de ${study.name}`}
      >
        {/* Fila superior: eyebrow + icono pequeño */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-primary pt-1">
            Caso {position} · {study.category}
          </p>
          <SectorIcon category={study.category} size="sm" />
        </div>

        <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground leading-snug mb-2">
          {study.name}
        </h3>

        <p className="text-[15px] leading-snug text-foreground/60 mb-5">
          {study.cardHook}
        </p>

        {/* Mini-cards de estadísticas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-foreground/10 bg-primary/5 px-3 py-2"
            >
              <p className="text-[10px] font-medium uppercase tracking-wide text-foreground/50">
                {stat.label}
              </p>
              <p className="mt-0.5 text-sm font-bold text-foreground leading-tight">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5 mt-5">
          Ver caso <ArrowRight className="w-4 h-4" />
        </span>
      </Link>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Section                                                       */
/* ------------------------------------------------------------------ */

export default function ResultadosSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest bg-primary/10 text-primary mb-7">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
          Casos reales
        </div>

        <h2 className="font-heading text-2xl md:text-4xl font-extrabold leading-tight text-foreground mb-3 max-w-xl">
          Negocios reales,{" "}
          <span className="text-primary">resultados reales.</span>
        </h2>
        <p className="text-sm md:text-base max-w-lg leading-relaxed text-foreground/60 mb-14">
          Entra en cada caso para ver cómo pasaron de no aparecer en Google a recibir llamadas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {cases.map((c, i) => (
            <CaseCard key={c.id} study={c} position={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
