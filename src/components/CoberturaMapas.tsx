import { Link } from "@/lib/router-compat";

const cities = [
  { name: "Madrid", slug: "madrid" },
  { name: "Sevilla", slug: "sevilla" },
  { name: "Málaga", slug: "malaga" },
  { name: "Córdoba", slug: "cordoba" },
];

const CoberturaMapas = ({ dark = false }: { dark?: boolean }) => (
  <div className="mb-10">
    <p className={`text-sm font-body ${dark ? "text-white/70" : "text-warm-fg/70"} mb-4`}>
      Trabajamos en toda España y tenemos presencia en cuatro ciudades:
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cities.map((city) => (
        <article
          key={city.slug}
          className={dark ? "overflow-hidden rounded-2xl border-2 border-white bg-white group transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 focus-within:-translate-y-1 hover:border-primary focus-within:border-primary hover:shadow-[0_0_0_2px_hsl(var(--primary)/0.35),0_18px_60px_-10px_hsl(var(--primary)/0.65)] has-[:focus-visible]:-translate-y-1 has-[:focus-visible]:border-primary has-[:focus-visible]:shadow-[0_0_0_2px_hsl(var(--primary)/0.35),0_18px_60px_-10px_hsl(var(--primary)/0.65)]" : "overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-[0_8px_30px_-15px_rgba(26,26,36,0.08)] group transition-[transform,color,box-shadow,border-color] duration-300 hover:-translate-y-1 focus-within:-translate-y-1 hover:border-primary hover:shadow-[0_0_0_2px_hsl(var(--primary)/0.35),0_18px_60px_-10px_hsl(var(--primary)/0.65)] focus-within:border-primary focus-within:shadow-[0_0_0_2px_hsl(var(--primary)/0.35),0_18px_60px_-10px_hsl(var(--primary)/0.65)]"}
        >
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(`${city.name}, España`)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa de Slocal en ${city.name}`}
            className="block h-[150px] w-full border-0 md:h-[170px]"
          />
          <div className={dark ? "p-4 transition-colors duration-300 group-hover:bg-primary group-has-[:focus-visible]:bg-primary" : "p-4"}>
            <h3 className={`flex items-center gap-2 font-heading text-base font-semibold text-warm-fg${dark ? " transition-colors duration-300 group-hover:text-white group-has-[:focus-visible]:text-white" : ""}`}>
              <span aria-hidden className={`h-2 w-2 shrink-0 rounded-full bg-primary${dark ? " group-hover:bg-white group-has-[:focus-visible]:bg-white" : ""}`} />
              {city.name}
            </h3>
            <p className={`mt-1.5 text-sm font-body text-warm-fg/70${dark ? " group-hover:text-white/85 group-has-[:focus-visible]:text-white/85" : ""}`}>
              Operamos en {city.name} y provincia
            </p>
            <Link
              to={`/seo-local-${city.slug}`}
              className={`mt-3 inline-flex items-center gap-1 font-heading text-sm text-primary transition-all group-hover:gap-2.5 focus-visible:outline-none${dark ? " group-hover:text-white group-has-[:focus-visible]:text-white" : ""}`}
            >
              Ver SEO local en {city.name}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </article>
      ))}
    </div>

    <p className={`mt-8 mb-4 text-sm font-body ${dark ? "text-white/70" : "text-warm-fg/70"}`}>
      ¿Tu negocio está en otra ciudad? Trabajamos igual. Elige tu ciudad:
    </p>
  </div>
);

export default CoberturaMapas;
