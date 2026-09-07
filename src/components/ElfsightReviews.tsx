import { useEffect } from "react";

/**
 * Sección de reseñas reales de Google (widget Elfsight).
 * El script de la plataforma se carga UNA sola vez en src/routes/__root.tsx.
 */
const ElfsightReviews = ({ className = "" }: { className?: string }) => {
  useEffect(() => {
    if (document.getElementById("elfsight-platform")) return;

    const script = document.createElement("script");
    script.id = "elfsight-platform";
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <section className={className}>
    <div className="container">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— Reseñas</p>
        <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
          Reseñas reales de <span className="text-primary">Google</span>
        </h2>
        <p className="text-base md:text-lg font-body font-light text-warm-fg/70 leading-relaxed max-w-3xl mx-auto mb-14">
          Reseñas verificadas directamente desde Google Business Profile
        </p>

        <div
          className="elfsight-app-88d6019a-b34b-4cd2-b610-75a84de97f02"
          data-elfsight-app-lazy
        />

        <button
          onClick={() => {
            const el = document.getElementById("contacto");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-14 inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground font-heading text-sm px-8 py-4 hover:bg-primary/90 transition-colors"
        >
          Solicita tu auditoría gratuita
        </button>
      </div>
    </div>
  </section>;
};

export default ElfsightReviews;
