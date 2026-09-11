import { Link } from "@/lib/router-compat";

interface ServicesCTABlockProps {
  headline: string;
  ctaText: string;
  buttonText: string;
  buttonTo: string;
}

/**
 * ServicesCTABlock
 * ---------------------------------------------------------------------------
 * Standout mid-page call-to-action placed after the main service blocks.
 * Uses the Slocal brand palette: dark background, white text, orange accent.
 * ---------------------------------------------------------------------------
 */
const ServicesCTABlock = ({
  headline,
  ctaText,
  buttonText,
  buttonTo,
}: ServicesCTABlockProps) => (
  <section className="bg-dark-bg py-16 md:py-24 border-y-4 border-primary">
    <div className="container max-w-4xl text-center">
      <h2 className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl text-dark-fg leading-[1.15] tracking-tight mb-8">
        {headline}
      </h2>
      <p className="text-lg md:text-xl text-dark-fg/80 font-body leading-relaxed mb-10 max-w-3xl mx-auto">
        {ctaText}
      </p>
      <Link
        to={buttonTo}
        className="inline-flex items-center justify-center bg-primary text-primary-foreground font-heading text-base md:text-lg font-medium rounded-xl px-8 py-4 hover:bg-primary/90 transition-colors"
      >
        {buttonText}
      </Link>
    </div>
  </section>
);

export default ServicesCTABlock;
