import { ReactNode } from "react";
import { Link } from "react-router-dom";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import HeroVisual from "./HeroVisual";
import { HeroTrustBar } from "./herotrustbar";

interface SectorHeroDarkProps {
  breadcrumbLabel: string;
  eyebrow: string;
  /** Rendered <h1>. Passed as children to preserve exact SEO wording per page. */
  h1: ReactNode;
  subtitle: ReactNode;
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
  primaryCta = { label: "Empezar →", to: "/contacto" },
  secondaryCta = { label: "Ver cómo funciona", to: "/como-funciona" },
  curveClass = "bg-background",
}: SectorHeroDarkProps) => {
  return (
    <section className="relative overflow-hidden bg-white text-foreground">
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
          <div className="relative z-20 md:col-span-6 lg:col-span-7">
            <p className="font-heading text-xs tracking-[0.22em] uppercase text-primary mb-6">
              — {eyebrow}
            </p>

            {/* h1 slot — parent supplies element to preserve SEO */}
            <div className="[&_h1]:font-heading [&_h1]:font-semibold [&_h1]:leading-[1.05] [&_h1]:tracking-tight [&_h1]:text-4xl [&_h1]:md:text-5xl [&_h1]:lg:text-6xl [&_h1]:max-w-[18ch]">
              {h1}
            </div>

            <div className="mt-6 max-w-xl text-base md:text-lg font-body font-light leading-relaxed text-black">
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
                className="inline-flex items-center rounded-full bg-slate-100 px-7 py-3.5 text-sm font-heading font-medium text-slate-800 transition-all duration-200 hover:bg-slate-200"
              >
                {secondaryCta.label}
              </Link>
            </div>

            {/* Trust row */}
            <div  className="mt-10">
                <HeroTrustBar />
            </div>
          </div>
                    <div className="relative z-10 md:col-span-6 lg:col-span-5 flex justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Curved transition to next (light) section */}
      <div
        aria-hidden
        className={`absolute bottom-0 left-0 right-0 h-16 md:h-24 ${curveClass}`}
        style={{
          clipPath: "ellipse(120% 100% at 50% 100%)",
        }}
      />
    </section>
  );
};

export default SectorHeroDark;
