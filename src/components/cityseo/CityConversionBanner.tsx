import type { ReactNode } from "react";
import { Link } from "@/lib/router-compat";

type Props = {
  eyebrow: string;
  title: ReactNode;
  sub: string;
  variant: "orange" | "dark";
  primaryCta?: string;
  primaryTo?: string;
  secondaryCta?: string;
  secondaryHref?: string;
};

/** Banner de conversión a ancho completo, exclusivo de las páginas de ciudad. */
export const BannerKey = ({ children, variant }: { children: ReactNode; variant: "orange" | "dark" }) => (
  <span className={variant === "orange" ? "text-[hsl(var(--dark-bg))]" : "text-primary"}>{children}</span>
);

const CityConversionBanner = ({
  eyebrow,
  title,
  sub,
  variant,
  primaryCta = "Solicitar auditoría gratuita →",
  primaryTo = "/contacto",
  secondaryCta = "Ver cómo funciona",
  secondaryHref = "/#como-posicionamos",
}: Props) => {
  const orange = variant === "orange";
  return (
    <section data-conversion-banner className={`${orange ? "bg-primary" : "bg-dark-bg"} py-14 md:py-16 text-white`}>
      <div className="mx-auto w-full max-w-[1200px] px-6 text-center">
        <p className="font-heading text-[12px] uppercase tracking-[0.22em] text-white">{eyebrow}</p>
        <h2 className="mx-auto mt-5 max-w-[24ch] font-heading font-semibold text-3xl md:text-5xl leading-[1.05] tracking-tight text-white">{title}</h2>
        <p className={`mx-auto mt-5 max-w-2xl text-base md:text-lg font-body ${orange ? "text-white/85" : "text-white/80"}`}>{sub}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to={primaryTo}
            className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-heading font-medium transition-transform duration-200 hover:scale-[1.03] ${orange ? "bg-white text-primary" : "bg-primary text-primary-foreground"}`}
          >
            {primaryCta}
          </Link>
          <a
            href={secondaryHref}
            className={`inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-sm font-heading font-medium text-white transition-colors duration-200 hover:bg-white/10 ${orange ? "border-white" : "border-white/40"}`}
          >
            {secondaryCta}
          </a>
        </div>
        <p className="mt-4 text-xs font-body text-white/85">Auditoría gratuita · Sin compromiso</p>
      </div>
    </section>
  );
};

export default CityConversionBanner;
