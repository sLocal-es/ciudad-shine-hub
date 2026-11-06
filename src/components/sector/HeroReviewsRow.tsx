import { Star } from "lucide-react";

/** Línea de confianza bajo los botones del hero (ciudades y sectores). */
const HeroReviewsRow = () => (
  <div className="mt-8">
    <div className="flex items-center gap-2">
      <span className="flex gap-0.5 text-primary" aria-hidden>
        {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />)}
      </span>
      <span className="font-heading text-sm font-semibold text-warm-fg">Reseñas de 5 estrellas en Google</span>
    </div>
    <p className="mt-1 text-sm font-body text-warm-fg/60">Respuesta en menos de 24 h</p>
  </div>
);

export default HeroReviewsRow;
