import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export const IllustrationPlaceholder = ({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) => (
  <div
    className={`w-full ${aspect} rounded-3xl border-2 border-dashed border-warm-fg/20 bg-white flex flex-col items-center justify-center gap-3 p-6 text-center ${className}`}
    role="img"
    aria-label={label}
  >
    <span className="font-heading text-[10px] tracking-[0.28em] uppercase text-warm-fg/50">
      Illustration placeholder
    </span>
    <span className="font-body text-[13px] text-warm-fg/45 max-w-[28ch]">{label}</span>
  </div>
);

export const Check = ({ className = "" }: { className?: string }) => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className={`shrink-0 ${className}`} aria-hidden>
    <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="font-heading text-[11px] tracking-[0.22em] uppercase text-primary">{children}</p>
);

export interface ExtraService {
  id: string;
  title: ReactNode;
  illustration: string;
  icon: ReactNode;
  description: string;
  features: string[];
  to: string;
}

export const ServiceCard = ({ service }: { service: ExtraService }) => (
  <article className="group h-full flex flex-col rounded-3xl border border-warm-fg/10 bg-white p-6 md:p-7 shadow-[0_18px_50px_-38px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-40px_rgba(0,0,0,0.35)] hover:border-primary/40">
    <IllustrationPlaceholder label={service.illustration} aspect="aspect-[16/10]" />
    <div className="mt-6 flex items-center gap-3">
      <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        {service.icon}
      </span>
    </div>
    <h3 className="mt-4 font-heading font-semibold text-warm-fg text-2xl md:text-[26px] leading-[1.2] tracking-tight">
      {service.title}
    </h3>
    <p className="mt-3 font-body font-light text-warm-fg/70 leading-relaxed text-[15px]">{service.description}</p>
    <ul className="mt-5 space-y-2">
      {service.features.map((f) => (
        <li key={f} className="flex items-center gap-2.5 font-body text-[14px] text-warm-fg/80">
          <Check className="text-primary" />
          {f}
        </li>
      ))}
    </ul>
    <Link
      to={service.to}
      className="mt-7 pt-5 border-t border-warm-fg/10 font-heading text-sm text-primary inline-flex items-center gap-2 mt-auto"
    >
      Más información
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Link>
  </article>
);

export const NeedRow = ({
  icon,
  need,
  answer,
  to,
}: {
  icon: ReactNode;
  need: string;
  answer: string;
  to: string;
}) => (
  <Link
    to={to}
    className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 rounded-2xl border border-warm-fg/10 bg-white px-5 py-5 md:px-7 md:py-6 shadow-[0_14px_40px_-38px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_60px_-42px_rgba(0,0,0,0.35)]"
  >
    <span className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
      {icon}
    </span>
    <span className="font-body text-warm-fg text-[15px] md:text-base sm:flex-1">{need}</span>
    <span className="hidden sm:block text-primary" aria-hidden>
      →
    </span>
    <span className="font-heading font-semibold text-warm-fg text-[15px] md:text-base sm:text-right sm:w-[38%]">
      {answer}
    </span>
  </Link>
);
