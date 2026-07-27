import { Link } from "react-router-dom";

interface CTASectionProps {
  title: string;
  buttonText?: string;
  buttonTo?: string;
  id?: string;
}

const CTASection = ({ title, buttonText = "Hablemos →", buttonTo = "/contacto", id }: CTASectionProps) => (
  <section id={id} className="bg-primary py-16">
    <div className="container text-center">
      <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-6">{title}</h2>
      <Link
        to={buttonTo}
        className="inline-block bg-card text-primary font-heading text-sm rounded-lg px-8 py-3 hover:bg-card/90 transition-colors"
      >
        {buttonText}
      </Link>
    </div>
  </section>
);

export default CTASection;
