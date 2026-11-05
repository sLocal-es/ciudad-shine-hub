import { Link } from "@/lib/router-compat";

const ConversionBanner = ({ title, sub, cta, to = "/contacto", variant }: { title: string; sub: string; cta: string; to?: string; variant: "gradient" | "dark" }) => (
  <div className="bg-white py-8 md:py-10">
    <div className="mx-auto w-full max-w-[1200px] px-6">
      <div
        data-conversion-banner
        className={`rounded-2xl px-6 py-8 md:px-10 md:py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6${variant === "dark" ? " bg-dark-bg" : " bg-primary"}`}
      >
        <div>
          <p className="font-heading text-xl md:text-2xl font-semibold text-white">{title}</p>
          <p className={`mt-1 text-sm ${variant === "dark" ? "text-white/70" : "text-white/85"}`}>{sub}</p>
        </div>
        <div className="flex flex-col items-start md:items-center gap-2 shrink-0">
        <Link
          to={to}
          className={`group/cta inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-heading font-medium transition-[transform,background-color] duration-200 hover:scale-[1.03] shrink-0 ${variant === "dark" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-white text-primary hover:bg-white/90"}`}
        >
          {cta}
          <span aria-hidden className="transition-transform duration-200 group-hover/cta:translate-x-1">→</span>
        </Link>
          <p className={`text-xs font-body ${variant === "dark" ? "text-white/60" : "text-white/85"}`}>Auditoría gratuita · Sin compromiso</p>
        </div>
      </div>
    </div>
  </div>
);

export default ConversionBanner;
