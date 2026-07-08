import { ReactNode } from "react";
import { Link } from "react-router-dom";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SectorPhoneMockup, { GbpResult } from "./SectorPhoneMockup";

interface SectorHeroDarkProps {
  breadcrumbLabel: string;
  eyebrow: string;
  /** Rendered <h1>. Passed as children to preserve exact SEO wording per page. */
  h1: ReactNode;
  subtitle: ReactNode;
  phoneQuery: string;
  phoneResults: GbpResult[];
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  /** Optional override of the small trust chips shown under the CTAs. */
  trustItems?: string[];
  /** Tailwind bg-* class used for the curved bottom transition (should match the next section's background). */
  curveClass?: string;
}

/**
 * Dark hero used on every sector page. The rest of each page stays warm/light —
 * the curved bottom edge blends the dark section into the next white block.
 * H1 and headings are injected by the parent page so SEO wording is untouched.
 */
const SectorHeroDark = ({
  breadcrumbLabel,
  eyebrow,
  h1,
  subtitle,
  phoneQuery,
  phoneResults,
  primaryCta = { label: "Empezar →", to: "/contacto" },
  secondaryCta = { label: "Ver cómo funciona", to: "/como-funciona" },
  trustItems = [
    "Ficha de Google gestionada cada mes",
    "Sin permanencia",
    "Trabajo local especializado",
  ],
}: SectorHeroDarkProps) => {
  return (
    <section className="relative overflow-hidden bg-dark-bg text-dark-fg">
      {/* Ambient background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(600px 400px at 15% 20%, hsl(var(--primary) / 0.12), transparent 60%), radial-gradient(500px 400px at 90% 80%, hsl(var(--primary) / 0.08), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--dark-fg) / 0.04) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--dark-fg) / 0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="container relative pt-10 md:pt-14 pb-28 md:pb-40">
        <BreadcrumbNav
          items={[
            { label: "Inicio", href: "/" },
            { label: breadcrumbLabel },
          ]}
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 items-center">
          <div className="md:col-span-6 lg:col-span-7">
            <p className="font-heading text-xs tracking-[0.22em] uppercase text-primary mb-6">
              — {eyebrow}
            </p>

            {/* h1 slot — parent supplies element to preserve SEO */}
            <div className="[&_h1]:font-heading [&_h1]:font-semibold [&_h1]:text-dark-fg [&_h1]:leading-[1.05] [&_h1]:tracking-tight [&_h1]:text-4xl [&_h1]:md:text-5xl [&_h1]:lg:text-6xl [&_h1]:max-w-[18ch]">
              {h1}
            </div>

            <div className="mt-6 max-w-xl text-base md:text-lg font-body font-light leading-relaxed text-dark-fg/75">
              {subtitle}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to={primaryCta.to}
                className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-heading text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {primaryCta.label}
              </Link>
              <Link
                to={secondaryCta.to}
                className="inline-flex items-center rounded-full border border-dark-fg/25 px-7 py-3.5 text-sm font-heading text-dark-fg transition-colors hover:border-dark-fg hover:bg-dark-fg hover:text-dark-bg"
              >
                {secondaryCta.label}
              </Link>
            </div>

            {/* Trust row */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-body text-dark-fg/55">
              {trustItems.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-5">
            <SectorPhoneMockup query={phoneQuery} results={phoneResults} />
          </div>
        </div>
      </div>

      {/* Curved transition to next (light) section */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-background"
        style={{
          clipPath: "ellipse(120% 100% at 50% 100%)",
        }}
      />
    </section>
  );
};

export default SectorHeroDark;
