import { Link } from "@/lib/router-compat";

interface CTASectionProps {
  title: string;
  buttonText?: string;
  buttonTo?: string;
  id?: string;
  gradient?: boolean;
}

const ORANGE_GRADIENT = "linear-gradient(135deg, hsl(18 82% 54%) 0%, hsl(12 80% 42%) 100%)";

const CTASection = ({ title, buttonText = "Hablemos →", buttonTo = "/contacto", id, gradient = false }: CTASectionProps) => (
  <section
    id={id}
    className={gradient ? "py-14 md:py-16" : "bg-primary py-16"}
    style={gradient ? { backgroundImage: ORANGE_GRADIENT } : undefined}
  >
    <div className="container text-center">
      <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-6">{title}</h2>
      {buttonTo.startsWith("#") ? (
        <a href={buttonTo} className="inline-block bg-card text-primary font-heading text-sm rounded-lg px-8 py-3 hover:bg-card/90 transition-colors">
          {buttonText}
        </a>
      ) : (
        <Link to={buttonTo} className="inline-block bg-card text-primary font-heading text-sm rounded-lg px-8 py-3 hover:bg-card/90 transition-colors">
          {buttonText}
        </Link>
      )}
    </div>
  </section>
);

export default CTASection;
