import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { services } from "@/data/services";
import { cities } from "@/data/cities";

const PosicionamientoLocal = () => (
  <>
    <SEOHead
      title="Posicionamiento Local en Google | slocal.es"
      description="Todo lo que necesitas para posicionar tu negocio local en Google. Ficha de Google, SEO local, web optimizada. Desde €150/mes + setup."
      canonical="/posicionamiento-local"
    />

    <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
      <div className="container text-center max-w-3xl">
        <h1 className="font-heading text-3xl md:text-5xl leading-tight mb-5">
          Posicionamiento Local en Google
        </h1>
        <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed">
          Todo lo que tu negocio necesita para aparecer en Google cuando tus clientes te buscan. Un sistema, no una agencia.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <h2 className="font-heading text-2xl md:text-3xl mb-8">Nuestros servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/${s.slug}`}
              className="bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:border-primary hover:-translate-y-[3px] group"
            >
              <h3 className="font-heading text-lg group-hover:text-primary transition-colors mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-warm-bg py-12">
      <div className="container">
        <h2 className="font-heading text-xl mb-6">Disponible en toda España</h2>
        <div className="flex flex-wrap gap-3">
          {cities.map((c) => (
            <Link
              key={c.slug}
              to={`/seo-local-${c.slug}`}
              className="border border-border bg-card rounded-full px-5 py-2 text-sm font-heading hover:border-primary hover:text-primary transition-colors"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default PosicionamientoLocal;
