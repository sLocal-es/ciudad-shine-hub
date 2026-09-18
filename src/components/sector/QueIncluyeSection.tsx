import auditoriaSeoImage from "@/assets/home/auditoria-seo.webp";
import palabrasClaveImage from "@/assets/home/estudio-palabras-clave.webp";
import fichaGoogleImage from "@/assets/home/ficha-google-business.webp";
import webSeoLocalImage from "@/assets/home/web-seo-local.webp";
import citacionesImage from "@/assets/home/citaciones-directorios.webp";
import reporteMensualImage from "@/assets/home/reporte-mensual.webp";

/**
 * QueIncluyeSection
 * ---------------------------------------------------------------------------
 * Replica exacta de la sección "Qué incluye nuestro servicio de SEO Local" de
 * la Home. Diseño fijo; por página cambian el sufijo del H2 y el texto de las
 * 6 tarjetas.
 * ---------------------------------------------------------------------------
 */

const cardMeta = [
  {
    eyebrow: "Diagnóstico",
    title: "Auditoría SEO",
    highlight: "inicial",
    highlightFirst: true,
    image: auditoriaSeoImage,
    alt: "Ilustración de una auditoría SEO de una web y una ficha de negocio local",
  },
  {
    eyebrow: "Investigación",
    title: "Estudio de",
    highlight: "palabras clave",
    image: palabrasClaveImage,
    alt: "Ilustración de un estudio de palabras clave con lupa, búsquedas locales y gráficos",
  },
  {
    eyebrow: "Presencia en Maps",
    title: "Ficha de",
    highlight: "Google Business Profile",
    image: fichaGoogleImage,
    alt: "Ilustración de una ficha de Google Business Profile completa y optimizada",
  },
  {
    eyebrow: "Captación local",
    title: "Web",
    highlight: "SEO Local",
    image: webSeoLocalImage,
    alt: "Ilustración de una web SEO local conectada con páginas de servicios y zonas",
  },
  {
    eyebrow: "Señales de confianza",
    title: "Citaciones",
    highlight: "en directorios locales y temáticos",
    image: citacionesImage,
    alt: "Ilustración de un negocio conectado con varios directorios locales y temáticos",
  },
  {
    eyebrow: "Seguimiento",
    title: "Reporte mensual",
    highlight: "",
    image: reporteMensualImage,
    alt: "Ilustración de un informe mensual con llamadas, posiciones locales y evolución",
  },
];

export interface QueIncluyeSectionProps {
  /** Sufijo del H2: "en Madrid" / "para fontaneros" */
  titleSuffix: string;
  /** Texto único de las 6 tarjetas */
  texts: string[];
}

const QueIncluyeSection = ({ titleSuffix, texts }: QueIncluyeSectionProps) => (
  <section className="bg-white py-24 md:py-32 border-t border-warm-fg/10">
    <div className="container">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Servicio base</p>
        <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
          Qué incluye nuestro servicio de <span className="text-primary">SEO Local</span> {titleSuffix}
        </h2>
      </div>
      <div className="mt-16 space-y-8 md:space-y-10">
        {cardMeta.map((card, index) => (
          <article key={card.eyebrow} className="overflow-hidden rounded-3xl border border-warm-fg/10 bg-white shadow-[0_20px_60px_-38px_rgba(0,0,0,0.18)]">
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
              <div className={`flex flex-col justify-center p-7 md:p-10 lg:p-12 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-primary">— {card.eyebrow}</p>
                <h3 className="mt-5 font-heading font-semibold text-3xl md:text-4xl text-warm-fg leading-[1.12]">
                  {card.highlightFirst || !card.highlight ? (
                    <>
                      <span className="text-primary">{card.title}</span>
                      {card.highlight ? <> {card.highlight}</> : null}
                    </>
                  ) : (
                    <>
                      {card.title} <span className="text-primary">{card.highlight}</span>
                    </>
                  )}
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
      <p className="mt-8 mx-auto max-w-4xl text-center text-sm md:text-[15px] font-body text-warm-fg/60 leading-relaxed">
        Todo el contenido que redactamos para tu ficha y tu web está además estructurado para poder ser citado por ChatGPT, Gemini y otros buscadores con IA — no es un extra que factures aparte, va incluido en el servicio base.
      </p>
    </div>
  </section>
);

export default QueIncluyeSection;
