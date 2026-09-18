import relevanciaOnPageImage from "@/assets/home/relevancia-on-page.webp";
import consistenciaNapImage from "@/assets/home/consistencia-nap.webp";
import resenasAutoridadImage from "@/assets/home/resenas-autoridad-local.webp";

/**
 * ComoPosicionamosSection
 * ---------------------------------------------------------------------------
 * Replica exacta de la sección "¿Cómo posicionamos tu negocio...?" de la Home.
 * El diseño es fijo (mismas imágenes, mismo orden alterno). Lo único que cambia
 * por página es el sufijo del H2, la entradilla y el texto de las 3 tarjetas.
 * ---------------------------------------------------------------------------
 */

const cardMeta = [
  {
    eyebrow: "Relevancia",
    title: "Optimización",
    highlight: "on-page",
    image: relevanciaOnPageImage,
    alt: "Ilustración de una ficha de negocio y una web optimizadas con categorías y palabras clave locales",
  },
  {
    eyebrow: "Notoriedad y confianza",
    title: "Consistencia",
    highlight: "NAP",
    image: consistenciaNapImage,
    alt: "Ilustración de datos de nombre, dirección y teléfono coincidentes en varias fichas de directorios",
  },
  {
    eyebrow: "Notoriedad",
    title: "Reseñas y",
    highlight: "autoridad local",
    image: resenasAutoridadImage,
    alt: "Ilustración de una ficha local con reseñas, estrellas y respuestas del negocio",
  },
];

export interface ComoPosicionamosSectionProps {
  /** Sufijo del H2: "en Madrid" / "para fontaneros" */
  titleSuffix: string;
  /** Entradilla única de la página */
  intro: string;
  /** Texto único de las 3 tarjetas (relevancia, NAP, reseñas) */
  texts: string[];
  /** Frase de cierre única de la página */
  closing: string;
}

const ComoPosicionamosSection = ({ titleSuffix, intro, texts, closing }: ComoPosicionamosSectionProps) => (
  <section className="bg-white py-24 md:py-32 border-t border-warm-fg/10">
    <div className="container">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Nuestro método</p>
        <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
          ¿Cómo posicionamos tu negocio en los <span className="text-primary">primeros puestos de Google</span> {titleSuffix}?
        </h2>
        <p className="mt-8 text-base md:text-lg font-body font-light text-warm-fg/75 leading-relaxed">{intro}</p>
      </div>
      <div className="mt-16 space-y-8 md:space-y-10">
        {cardMeta.map((card, index) => (
          <article key={card.eyebrow} className="overflow-hidden rounded-3xl border border-warm-fg/10 bg-white shadow-[0_20px_60px_-38px_rgba(0,0,0,0.18)]">
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
              <div className={`flex flex-col justify-center p-7 md:p-10 lg:p-12 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-primary">— {card.eyebrow}</p>
                <h3 className="mt-5 font-heading font-semibold text-3xl md:text-4xl text-warm-fg leading-[1.12]">
                  {card.title} <span className="text-primary">{card.highlight}</span>
                </h3>
                <p className="mt-5 font-body font-light text-base md:text-lg text-warm-fg/70 leading-relaxed">{texts[index]}</p>
              </div>
              <div className={`min-h-[260px] bg-warm-fg/[0.03] ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <img src={card.image} alt={card.alt} className="h-full w-full object-cover" loading="lazy" width={1200} height={800} decoding="async" />
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-12 mx-auto max-w-4xl text-center font-heading text-lg md:text-xl text-warm-fg leading-relaxed">{closing}</p>
    </div>
  </section>
);

export default ComoPosicionamosSection;
