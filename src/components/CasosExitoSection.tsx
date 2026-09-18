import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Link } from "@/lib/router-compat";
import { CaseCard } from "@/components/ResultadosSection";
import { cases } from "@/data/casosExito";

const CasosExitoSection = () => {
  const stripRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white py-24 md:py-32 border-t border-warm-fg/10">
      <div className="container">
        <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Casos de éxito</p>
        <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-[22ch] mb-6">
          ¿Qué <span className="text-primary">resultados reales</span> da el SEO Local?
        </h2>
        <p className="font-body font-light text-warm-fg/75 text-base md:text-lg leading-relaxed max-w-2xl mb-14">
          Negocios reales que pasaron de no aparecer en Google a recibir llamadas. Entra en cada caso para ver qué hicimos y qué consiguió.
        </p>

        <div className="flex items-center justify-between gap-4 mb-8">
          <span className="sr-only">Casos de éxito</span>
          <div className="hidden md:flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={() => stripRef.current?.scrollBy({ left: -320, behavior: "smooth" })}
              aria-label="Ver casos anteriores"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary transition-colors hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => stripRef.current?.scrollBy({ left: 320, behavior: "smooth" })}
              aria-label="Ver casos siguientes"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary transition-colors hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={stripRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 -mx-5 px-5 md:mx-0 md:px-0"
        >
          {cases.map((study, index) => (
            <div key={study.slug} className="snap-start flex-shrink-0 w-[320px] sm:w-[360px]">
              <CaseCard study={study} position={index + 1} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/casos-de-exito"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
          >
            Ver todos los casos de éxito →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CasosExitoSection;