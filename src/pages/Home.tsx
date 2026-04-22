import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import ResultadosSection from "@/components/ResultadosSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import heroImg from "@/assets/hero-home.webp";

const Home = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "slocal.es",
    url: "https://slocal.es",
    email: "info@slocal.es",
    areaServed: "España",
    description: "Sistema de SEO local para negocios españoles. Desde 147€/mes.",
  };

  const sectores = [
    { to: "/seo-para-fontaneros", label: "SEO para fontaneros" },
    { to: "/seo-para-fisioterapeutas", label: "SEO para fisioterapeutas" },
    { to: "/seo-para-reformas", label: "SEO para empresas de reformas" },
    { to: "/seo-para-pintores", label: "SEO para pintores" },
    { to: "/seo-para-clinicas", label: "SEO para clínicas" },
    { to: "/seo-para-entrenadores", label: "SEO para entrenadores personales" },
    { to: "/seo-para-yoga", label: "SEO para yoga y pilates" },
  ];

  const ciudades = [
    { to: "/seo-local-madrid", label: "SEO local en Madrid" },
    { to: "/seo-local-barcelona", label: "SEO local en Barcelona" },
    { to: "/seo-local-valencia", label: "SEO local en Valencia" },
    { to: "/seo-local-sevilla", label: "SEO local en Sevilla" },
    { to: "/seo-local-malaga", label: "SEO local en Málaga" },
    { to: "/seo-local-zaragoza", label: "SEO local en Zaragoza" },
    { to: "/seo-local-bilbao", label: "SEO local en Bilbao" },
    { to: "/seo-local-murcia", label: "SEO local en Murcia" },
  ];

  return (
    <>
      <SEOHead
        title="SEO Local para Negocios | Sin agencia, desde 147€/mes | slocal.es"
        description="Consigue que tus clientes te encuentren en Google Maps y búsquedas locales. Sin agencias, sin contratos, resultados visibles cada mes. Desde 147€/mes + IVA."
        canonical="/"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-heading text-3xl md:text-5xl leading-tight mb-5">
              SEO local para negocios: más clientes desde Google, sin agencias
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              El sistema que posiciona tu negocio en Google Maps y búsquedas locales. Sin intermediarios, sin contratos largos, con resultados visibles cada mes.
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
          <img
            src={heroImg}
            alt="Propietario de negocio local revisando resultados en Google Maps desde el móvil"
            className="rounded-xl w-full h-[360px] object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl text-center mb-10 max-w-2xl mx-auto">
            Por qué tu negocio local no aparece en Google
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🔍", text: "Tu ficha de Google lleva meses sin tocarse y pierdes clientes cada día" },
              { icon: "🏢", text: "Has pagado a una agencia sin entender qué hicieron ni ver resultados" },
              { icon: "📉", text: "Hay clientes en tu ciudad buscando tu servicio ahora mismo — y encuentran a tu competencia" },
            ].map((card) => (
              <div key={card.text} className="bg-warm-bg border border-border rounded-xl p-6 transition-all duration-200 hover:border-primary hover:-translate-y-[3px]">
                <span className="text-2xl mb-3 block">{card.icon}</span>
                <p className="text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO EXPLAINER */}
      <section className="bg-warm-bg py-16 md:py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl mb-6">
              ¿Qué es el SEO local y por qué tu negocio lo necesita?
            </h2>
            <p className="text-base leading-relaxed text-foreground/80">
              El SEO local es el conjunto de técnicas que hacen que tu negocio aparezca cuando alguien busca tu servicio en Google Maps o en las búsquedas de Google. Cuando un cliente escribe "fontanero en Madrid" o "fisioterapeuta cerca de mí", Google muestra los tres negocios mejor posicionados — el Local Pack. Aparecer ahí multiplica las llamadas directas. En slocal.es lo gestionamos por ti: optimizamos tu ficha de Google Business Profile, creamos contenido que posiciona y construimos la presencia digital que tu negocio necesita para aparecer antes que tu competencia. Trabajamos con negocios locales de toda España: fontaneros, fisioterapeutas, reformas, entrenadores personales, clínicas y más.
            </p>
          </div>
          <ImagePlaceholder
            description="Captura de Google Maps mostrando el Local Pack con 3 negocios destacados"
            height="320px"
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl text-center mb-12">
            Cómo funciona el sistema de posicionamiento local
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: "01", title: "Analizamos tu negocio y tu competencia local", desc: "Estudiamos qué buscan tus clientes en tu ciudad y qué hace bien (o mal) tu competencia para definir el plan." },
              { n: "02", title: "Optimizamos tu ficha, tu web y tu contenido", desc: "Tu ficha de Google, tu web y los artículos que posicionan. Tú sigues con tu negocio, nosotros con lo demás." },
              { n: "03", title: "Cada mes sabes exactamente qué ha mejorado", desc: "Informe mensual claro: posiciones ganadas, visitas, llamadas y qué está funcionando." },
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

      {/* SECTORES */}
      <section className="bg-warm-bg py-16 md:py-20">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl text-center mb-4">
            SEO local para cada tipo de negocio
          </h2>
          <p className="text-center text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-10">
            Cada sector tiene sus propias búsquedas y su propia competencia. Por eso trabajamos con sectores específicos y sabemos exactamente qué funciona en cada uno.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-wrap gap-3">
              {sectores.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className="bg-card border border-border rounded-full px-4 py-2 text-sm font-heading hover:border-primary hover:text-primary transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <ImagePlaceholder
              description="Collage de negocios locales: fontanero, fisioterapeuta, obras de reforma"
              height="280px"
            />
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section className="py-16 md:py-20">
        <div className="container max-w-xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Un plan, precio claro, sin agencia
          </h2>
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="font-heading text-4xl md:text-5xl text-primary mb-1">147€<span className="text-lg text-muted-foreground">/mes</span></div>
            <p className="text-xs text-muted-foreground mb-6">+ IVA</p>
            <ul className="text-left space-y-3 mb-8 max-w-xs mx-auto">
              <li className="flex items-start gap-2 text-sm">
                <span className="text-primary font-heading">✓</span> Sin contratos largos
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-primary font-heading">✓</span> Cancelas cuando quieras
              </li>
            </ul>
            <a
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground font-heading text-sm rounded-lg px-8 py-3 hover:bg-primary/90 transition-colors"
            >
              Hablar por WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section>
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl text-center mb-2">
            Resultados reales de negocios locales como el tuyo
          </h2>
        </div>
        <ResultadosSection />
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-20">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl text-center mb-10">
            No es solo el precio
          </h2>
          <div className="overflow-x-auto rounded-xl border border-dark-fg/10">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left p-4 font-heading text-dark-fg/50 text-xs uppercase tracking-wider"></th>
                  <th className="text-center p-4 font-heading text-dark-fg/50 text-xs uppercase tracking-wider">Agencia tradicional</th>
                  <th className="text-center p-4 font-heading text-xs uppercase tracking-wider text-primary border-x border-primary/20 bg-primary/5">slocal.es</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Hablas con…", agencia: "Account manager (junior)", slocal: "Conmigo directo" },
                  { feature: "Precio mensual", agencia: "€500–850/mes", slocal: "€150–250/mes" },
                  { feature: "Reportes", agencia: "Informes PDF", slocal: "Te explico qué ha pasado y qué hacemos" },
                  { feature: "Respuesta", agencia: "48–72 horas", slocal: "WhatsApp · mismo día" },
                ].map((row) => (
                  <tr key={row.feature} className="border-t border-dark-fg/10">
                    <td className="p-4 font-heading text-dark-fg/80">{row.feature}</td>
                    <td className="p-4 text-center text-dark-fg/40">{row.agencia}</td>
                    <td className="p-4 text-center font-heading text-primary border-x border-primary/20 bg-primary/5">{row.slocal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-dark-fg/40 text-sm mt-6">Mismos resultados. Sin intermediarios.</p>
        </div>
      </section>

      {/* CITIES (compact) */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            Posicionamiento local en toda España
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mb-10">
            Trabajamos con negocios en las principales ciudades españolas. Cada ciudad tiene su competencia y sus búsquedas — y sabemos cómo posicionarte en cada una.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {ciudades.map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="bg-card border border-border rounded-full px-4 py-2 text-sm font-heading hover:border-primary hover:text-primary transition-colors"
              >
                {c.label}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/seo-cordoba" className="text-sm text-primary font-heading hover:underline">
              SEO en Córdoba →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection title="Tu negocio debería aparecer cuando tus clientes te buscan en Google." />
    </>
  );
};

export default Home;
