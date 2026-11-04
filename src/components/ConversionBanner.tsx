import { Link } from "@/lib/router-compat";

const ConversionBanner = ({ title, sub, cta, to, variant }: { title: string; sub: string; cta: string; to: string; variant: "gradient" | "dark" }) => (
  <div className="bg-white py-8 md:py-10">
    <div className="mx-auto w-full max-w-[1200px] px-6">
      <div
        className={`rounded-2xl px-6 py-8 md:px-10 md:py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6${variant === "dark" ? " bg-dark-bg" : " bg-primary"}`}
      >
        <div>
          <p className="font-heading text-xl md:text-2xl font-semibold text-white">{title}</p>
          <p className={`mt-1 text-sm ${variant === "dark" ? "text-white/70" : "text-white/85"}`}>{sub}</p>
        </div>
        <Link
          to={to}
          className={`inline-flex items-center rounded-full px-7 py-3.5 text-sm font-heading font-medium transition-colors shrink-0 ${variant === "dark" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-white text-primary hover:bg-white/90"}`}
        >
          {cta}
        </Link>
      </div>
    </div>
  </div>
);

export default ConversionBanner;
