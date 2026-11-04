import { Link } from "@/lib/router-compat";

const cities = [
  { name: "Madrid", slug: "madrid" },
  { name: "Sevilla", slug: "sevilla" },
  { name: "Málaga", slug: "malaga" },
  { name: "Córdoba", slug: "cordoba" },
];

const CoberturaMapas = () => (
  <div className="mb-10">
    <p className="text-sm font-body text-warm-fg/70 mb-4">
      Trabajamos en toda España y tenemos presencia en cuatro ciudades:
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cities.map((city) => (
        <article
          key={city.slug}
          className="overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-[0_8px_30px_-15px_rgba(26,26,36,0.08)]"
        >
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(`${city.name}, España`)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa de Slocal en ${city.name}`}
            className="block h-[150px] w-full border-0 md:h-[170px]"
          />
          <div className="p-4">
            <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-warm-fg">
              <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-primary" />
              {city.name}
            </h3>
            <p className="mt-1.5 text-sm font-body text-warm-fg/70">
              Operamos en {city.name} y provincia
            </p>
            <Link
              to={`/seo-local-${city.slug}`}
              className="mt-3 inline-flex items-center gap-1 font-heading text-sm text-primary transition-all duration-[250ms] hover:gap-2"
            >
              Ver SEO local en {city.name}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </article>
      ))}
    </div>

    <p className="mt-8 mb-4 text-sm font-body text-warm-fg/70">
      ¿Tu negocio está en otra ciudad? Trabajamos igual. Elige tu ciudad:
    </p>
  </div>
);

export default CoberturaMapas;
