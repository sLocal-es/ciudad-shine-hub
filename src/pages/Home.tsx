import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PlanCards from "@/components/PlanCards";
import CTASection from "@/components/CTASection";
import ResultadosSection from "@/components/ResultadosSection";
import { cities } from "@/data/cities";
import heroImg from "@/assets/hero-home.webp";

const Home = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "slocal.es",
    url: "https://slocal.es",
    email: "hola@slocal.es",
    areaServed: "España",
    description: "Sistema de posicionamiento local en Google para negocios españoles.",
  };

  return (
    <>
      <SEOHead
        title="slocal.es | Visibilidad en Google para Negocios Locales"
        description="Sistema de posicionamiento local en Google para negocios españoles. Aparece cuando tus clientes te buscan. Sin agencias, sin humo. Desde €150/mes."
        canonical="/"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block border border-primary text-primary text-xs font-heading rounded-full px-4 py-1.5 mb-6">
              Para negocios locales
            </span>
            <h1 className="font-heading text-3xl md:text-5xl leading-tight mb-5">
              Que tu negocio aparezca cuando alguien te busca en Google
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              slocal.es es un sistema — no una agencia — que hace que cada mes más clientes en tu ciudad te encuentren antes que a tu competencia.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/planes" className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors">
                Ver planes →
              </Link>
              <Link to="/como-funciona" className="border border-dark-fg/20 text-dark-fg font-heading text-sm rounded-lg px-6 py-3 hover:border-primary hover:text-primary transition-colors">
                Cómo funciona
              </Link>
            </div>
          </div>
          <img src={heroImg} alt="Negocio local en España, calle comercial" className="rounded-xl w-full h-[360px] object-cover" loading="lazy" />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl text-center mb-10 max-w-2xl mx-auto">
            Tienes un buen negocio. En internet parece que no existes.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🔍", text: "Tu ficha de Google lleva meses sin tocarse y Google te ignora" },
              { icon: "🏢", text: "Has pagado a una agencia sin saber qué hicieron ni si sirvió" },
              { icon: "📉", text: "Tienes clientes en tu ciudad que ni saben que existes" },
            ].map((card) => (
              <div key={card.text} className="bg-warm-bg border border-border rounded-xl p-6 transition-all duration-200 hover:border-primary hover:-translate-y-[3px]">
                <span className="text-2xl mb-3 block">{card.icon}</span>
                <p className="text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-warm-bg py-16 md:py-20">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl text-center mb-12">
            No es un servicio. Es un sistema.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: "01", title: "Eliges tu nivel", desc: "Desde una presencia básica hasta el sistema completo. Tú decides hasta dónde llegar." },
              { n: "02", title: "Nos encargamos de todo", desc: "Tu web, tu ficha de Google, los artículos que posicionan. Tú sigues con tu negocio." },
              { n: "03", title: "Cada mes sabes qué mejoró", desc: "Informe mensual claro: posiciones ganadas, visitas, qué está funcionando." },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <span className="text-primary font-heading text-4xl">{step.n}</span>
                <h3 className="font-heading text-lg mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS PREVIEW */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl text-center mb-10">
            Dos planes, precios claros
          </h2>
          <PlanCards />
          <div className="text-center mt-8">
            <Link to="/planes" className="text-sm text-primary font-heading hover:underline">
              Ver todos los detalles →
            </Link>
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="bg-warm-bg py-16 md:py-20">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl text-center mb-3">
            ¿Dónde trabajamos?
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-10">
            En toda España. Estos son los mercados donde más activos estamos ahora.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {cities.map((city) => (
              <Link
                key={city.slug}
                to={`/seo-local-${city.slug}`}
                className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-200 hover:border-primary hover:-translate-y-[3px] group"
              >
                <img src={city.image} alt={`SEO Local en ${city.name}`} className="w-full h-[140px] object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="font-heading text-base group-hover:text-primary transition-colors">{city.name}</h3>
                  <span className="text-primary text-xs font-heading">SEO Local</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <ResultadosSection />

      {/* TRUST */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-20">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl text-center mb-10">
            Por qué no somos una agencia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "📊", title: "Precios visibles", desc: "Sin 'llámanos para presupuesto'. Sabes lo que pagas antes de hablar." },
              { icon: "🔄", title: "Resultados acumulativos", desc: "El SEO crece mes a mes. Al contrario que la publicidad, no desaparece cuando paras." },
              { icon: "📋", title: "Informe mensual sin tecnicismos", desc: "Cada mes te contamos qué posiciones has ganado y cuántas visitas has tenido." },
            ].map((card) => (
              <div key={card.title} className="border border-dark-fg/10 rounded-xl p-6 transition-all duration-200 hover:border-primary hover:-translate-y-[3px]">
                <span className="text-2xl mb-3 block">{card.icon}</span>
                <h3 className="font-heading text-base mb-2">{card.title}</h3>
                <p className="text-sm text-dark-fg/60 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection title="Tu negocio debería trabajar para ti, también en internet." />
    </>
  );
};

export default Home;
