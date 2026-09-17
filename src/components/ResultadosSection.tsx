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
/*  CaseCard — visual grande arriba, pills de sector y ciudad, nombre  */
/* ------------------------------------------------------------------ */

function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <article className="group transition-transform duration-300 hover:-translate-y-1 flex flex-col">
      <Link
        to="/casos-de-exito/$slug"
        params={{ slug: study.slug }}
        className="flex flex-col flex-1"
        aria-label={`Ver el caso de éxito de ${study.name}`}
      >
        {/* Visual: panel tint naranja con icono del sector */}
        <div
          className="relative flex items-center justify-center rounded-2xl overflow-hidden bg-primary/10 aspect-[4/3] transition-colors duration-300 group-hover:bg-primary/15"
          aria-hidden
        >
          <SectorIcon category={study.category} />
        </div>

        <div className="pt-5 px-1 pb-2 flex flex-col flex-1">
          <h3 className="font-heading text-lg font-bold text-foreground leading-snug mb-2">
            {study.name}
          </h3>

          <p className="text-[15px] font-semibold leading-snug text-primary mb-3">
            {study.cardHook}
          </p>

          {/* Pills: sector + ciudad */}
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="inline-flex items-center text-[11px] font-medium rounded-full px-2.5 py-0.5 bg-primary/10 text-primary">
              {study.category}
            </span>
            <span className="inline-flex items-center text-[11px] font-medium rounded-full px-2.5 py-0.5 bg-primary/10 text-primary">
              {study.city}
            </span>
          </div>
        </div>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {cases.map((c) => (
            <CaseCard key={c.id} study={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
