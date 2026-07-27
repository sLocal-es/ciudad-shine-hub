import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import ResultadosSection from "@/components/ResultadosSection";
import { LocalPackCard, SectorIconsGrid, GBPProfileMockup } from "@/components/visuals/SeoVisuals";
import LeadMagnetForm from "@/components/forms/LeadMagnetForm";
import ContactForm from "@/components/forms/ContactForm";
import TechPartnersSection from "@/components/TechPartnersSection";
import AnalisisGratuitoModal from "@/components/AnalisisGratuitoModal";
import HeroMapsRanking from "@/components/home/HeroMapsRanking";
import logoTei from "@/assets/casos/logo-tei.png";
import logoViviane from "@/assets/casos/logo-viviane.png";
import logoMva from "@/assets/casos/logo-mva.png";
import logoFontaneros from "@/assets/casos/logo-fontaneros.png";

const Home = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "slocal.es",
    url: "https://slocal.es",
    email: "info@slocal.es",
    areaServed: "España",
    description: "Agencia SEO Local para negocios españoles.",
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

  const casosLogos = [
    { src: logoTei, alt: "Grupo TEI" },
    { src: logoViviane, alt: "Viviane Custodio" },
    { src: logoMva, alt: "MVA Fontanería" },
    { src: logoFontaneros, alt: "Fontaneros Económicos" },
  ];

  const dolores = [
    { n: "01", text: "Tu ficha de Google lleva meses sin tocarse y Google te ignora" },
    { n: "02", text: "Has pagado a una agencia sin ver resultados ni entender qué hicieron" },
    { n: "03", text: "Tus clientes te buscan en Google ahora mismo — y encuentran a tu competencia" },
  ];

  return (
    <>
      <SEOHead
        title="Agencia SEO Local | slocal.es"
        description="Agencia SEO Local especializada en Google Business Profile, SEO Local y posicionamiento para empresas que quieren conseguir más llamadas y clientes desde Google."
        canonical="/"
        jsonLd={jsonLd}
      />


      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-heading text-3xl md:text-5xl leading-tight mb-5">
              Agencia SEO Local
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-2 max-w-lg">
              Especializados en Google Business Profile, Google Maps y posicionamiento local.
            </p>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-6 max-w-lg">
              Gestionamos tu presencia en Google Maps y búsquedas locales para que cada mes más clientes de tu ciudad te encuentren antes que a tu competencia.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8">
              {casosLogos.map((l) => (
                <img
                  key={l.alt}
                  src={l.src}
                  alt={l.alt}
                  className="h-8 md:h-9 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contacto" className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors">
                Hablemos →
              </Link>
              <AnalisisGratuitoModal
                trigger={
                  <button
                    type="button"
                    className="border border-dark-fg/20 text-dark-fg font-heading text-sm rounded-lg px-6 py-3 hover:border-primary hover:text-primary transition-colors"
                  >
                    Ver análisis gratuito
                  </button>
                }
              />
            </div>
          </div>
          <HeroMapsRanking />
        </div>
      </section>

      {/* DOLOR */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-20 border-t border-dark-fg/10">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <h2 className="font-heading text-3xl md:text-5xl leading-tight">
            Por qué tu negocio local no aparece en Google
          </h2>
          <ul className="space-y-6">
            {dolores.map((d) => (
              <li key={d.n} className="flex gap-4 items-baseline">
                <span className="font-heading text-2xl md:text-3xl text-primary shrink-0">{d.n}</span>
                <span className="text-dark-fg/80 text-base md:text-lg leading-relaxed">· {d.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SEO EXPLAINER */}
      <section className="bg-warm-bg py-16 md:py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl mb-6">
              Qué es el SEO local y por qué tu negocio lo necesita
            </h2>
            <p className="text-base leading-relaxed text-foreground/80">
              El SEO local es el conjunto de técnicas que hacen que tu negocio aparezca cuando alguien busca tu servicio en Google Maps o en Google. Cuando un cliente escribe "fontanero en Madrid" o "fisioterapeuta cerca de mí", Google muestra los tres negocios mejor posicionados en el mapa — el Local Pack. Aparecer ahí multiplica las llamadas directas. En slocal.es lo gestionamos por ti: optimizamos tu ficha de Google Business Profile, creamos el contenido que posiciona y construimos la presencia digital que tu negocio necesita para aparecer antes que tu competencia. Trabajamos con negocios locales de toda España: fontaneros, fisioterapeutas, empresas de reformas, entrenadores personales, clínicas y más.
            </p>
          </div>
          <LocalPackCard query="fontanero cerca de mí" city="Madrid" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl text-center mb-12">
            Cómo funciona el posicionamiento local en Google
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: "01", title: "Analizamos tu negocio y la competencia local", desc: "Estudiamos qué buscan tus clientes en tu ciudad y qué hace bien (o mal) tu competencia para definir el plan." },
              { n: "02", title: "Optimizamos tu ficha de Google, tu web y tu contenido", desc: "Tu ficha de Google, tu web y los artículos que posicionan. Tú sigues con tu negocio, nosotros con lo demás." },
              { n: "03", title: "Cada mes ves exactamente qué posiciones has ganado", desc: "Informe mensual claro: posiciones ganadas, visitas, llamadas y qué está funcionando." },
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
            Cada sector tiene sus propias búsquedas y su propia competencia local. Por eso trabajamos de forma específica en cada uno.
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
            <SectorIconsGrid />
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section>
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl text-center mb-2">
            ¿Qué resultados consiguen los negocios locales con Slocal?
          </h2>
        </div>
        <ResultadosSection />
      </section>



      {/* LEAD MAGNET */}
      <section className="bg-warm-bg py-16 md:py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl mb-5">
              Descubre cómo te ve Google ahora mismo — gratis
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Analizamos tu ficha de Google Business Profile sin coste y te decimos exactamente qué está fallando y por qué no apareces cuando tus clientes te buscan.
            </p>
            <GBPProfileMockup />
          </div>
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <LeadMagnetForm />
          </div>
        </div>
      </section>

      {/* CITIES (compact) */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            Posicionamiento local en toda España
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mb-10">
            Trabajamos con negocios en las principales ciudades españolas. Cada ciudad tiene su propia competencia y sus propias búsquedas.
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
            <Link
              to="/seo-local-cordoba"
              className="bg-card border border-border rounded-full px-4 py-2 text-sm font-heading hover:border-primary hover:text-primary transition-colors inline-block"
            >
              SEO local en Córdoba
            </Link>
          </div>
        </div>
      </section>

      {/* TECH PARTNERS */}
      <TechPartnersSection />

      {/* CONTACTO */}
      <section className="bg-warm-bg py-16 md:py-20">
        <div className="container max-w-2xl">
          <h2 className="font-heading text-2xl md:text-3xl text-center mb-4">
            ¿Tienes dudas? Escríbenos
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Si prefieres que te contactemos nosotros, déjanos tus datos y te respondemos en menos de 24 horas.
          </p>
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection title="Tu negocio debería aparecer cuando tus clientes te buscan en Google." />
    </>
  );
};

export default Home;
