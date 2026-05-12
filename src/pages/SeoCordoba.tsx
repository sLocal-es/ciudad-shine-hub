import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import ResultadosSection from "@/components/ResultadosSection";
import MiniAuditWidget from "@/components/MiniAuditWidget";

const sectores = [
  { label: "SEO para fontaneros", href: "/seo-para-fontaneros" },
  { label: "SEO para fisioterapeutas", href: "/seo-para-fisioterapeutas" },
  { label: "SEO para empresas de reformas", href: "/seo-para-reformas" },
  { label: "SEO para abogados", href: "/seo-para-abogados" },
  { label: "SEO para inmobiliarias", href: "/seo-para-inmobiliarias" },
  { label: "SEO para dentistas", href: "/seo-para-dentistas" },
  { label: "SEO para psicólogos", href: "/seo-para-psicologos" },
  { label: "SEO para gimnasios", href: "/seo-para-gimnasios" },
];

const otrasCiudades = [
  { label: "SEO local en Madrid", href: "/seo-local-madrid" },
  { label: "SEO local en Barcelona", href: "/seo-local-barcelona" },
  { label: "SEO local en Valencia", href: "/seo-local-valencia" },
  { label: "SEO local en Sevilla", href: "/seo-local-sevilla" },
  { label: "SEO local en Málaga", href: "/seo-local-malaga" },
  { label: "SEO local en Zaragoza", href: "/seo-local-zaragoza" },
  { label: "SEO local en Bilbao", href: "/seo-local-bilbao" },
  { label: "SEO local en Murcia", href: "/seo-local-murcia" },
];

const pasos = [
  {
    n: "01",
    title: "Optimización de Google Business Profile para negocios en Córdoba",
    body:
      "Configuramos cada campo de tu perfil para las búsquedas de Córdoba: categorías correctas, descripción con keywords locales, fotos actualizadas, horarios y zona de servicio por barrios y zonas de la ciudad. Google necesita señales claras de que eres el negocio más relevante de tu zona para mostrarte en el top 3.",
  },
  {
    n: "02",
    title: "Contenido SEO local para búsquedas en Córdoba",
    body:
      "Artículos de blog y páginas de servicio optimizadas para las búsquedas que hacen tus clientes en Córdoba. Contenido específico por zona y por tipo de servicio, diseñado para aparecer cuando alguien busca exactamente lo que tú ofreces en la ciudad.",
  },
  {
    n: "03",
    title: "Seguimiento mensual de posicionamiento en Córdoba",
    body:
      "Informe mensual con posiciones en Google Maps para las búsquedas más importantes de tu sector en Córdoba, visitas al perfil, llamadas recibidas y qué está funcionando. Sin tecnicismos, con datos reales.",
  },
];

const faqs = [
  {
    q: "¿Cuánto tarda en posicionarse un negocio en Córdoba?",
    a: "En Córdoba, con una competencia digital menor que en Madrid o Barcelona, los primeros resultados visibles suelen aparecer entre el mes 1 y el mes 3. Los resultados se consolidan a partir del mes 4-5. Empezar ahora te da una ventaja real sobre los competidores que todavía no han trabajado su presencia en Google.",
  },
  {
    q: "¿Por qué es buen momento para hacer SEO local en Córdoba?",
    a: "Porque la competencia digital en Córdoba todavía no está saturada. Los negocios que posicionan ahora ocupan un espacio que después será mucho más difícil y costoso conseguir.",
  },
  {
    q: "¿Necesito web para hacer SEO local en Córdoba?",
    a: "No es imprescindible para empezar, pero mejora significativamente los resultados. El servicio incluye la web desde el inicio.",
  },
  {
    q: "¿Funciona para cualquier tipo de negocio en Córdoba?",
    a: "Sí. Fontaneros, fisioterapeutas, reformas, abogados, dentistas, psicólogos, inmobiliarias y cualquier negocio local en Córdoba o en la provincia.",
  },
  {
    q: "¿Hay permanencia mínima?",
    a: "No. El servicio es mes a mes.",
  },
];

const SeoCordoba = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Local en Córdoba",
    provider: {
      "@type": "LocalBusiness",
      name: "slocal.es",
      url: "https://slocal.es",
    },
    areaServed: "Córdoba",
    description: "Servicio de SEO local para negocios en Córdoba",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "SEO Local en Córdoba",
        item: "https://slocal.es/seo-local-cordoba",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "slocal.es",
    url: "https://slocal.es",
    description: "SEO local para negocios en Córdoba",
    areaServed: "Córdoba, España",
    priceRange: "€€",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SEOHead
        title="SEO Local en Córdoba para Negocios | Aparecer en Google Maps | slocal.es"
        description="Haz que tu negocio en Córdoba aparezca cuando tus clientes te buscan en Google. Más llamadas, más clientes locales. Desde 147€/mes + IVA."
        canonical="/seo-local-cordoba"
        jsonLd={[serviceSchema, breadcrumbSchema, localBusinessSchema, faqSchema]}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <BreadcrumbNav
              items={[
                { label: "Inicio", href: "/" },
                { label: "SEO Local en Córdoba" },
              ]}
            />
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              SEO Local en Córdoba: Que tus Clientes te Encuentren en Google
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              Cuando alguien en Córdoba busca "fontanero en el Casco Histórico", "fisioterapeuta en Ciudad Jardín" o "empresa de reformas en Córdoba", Google muestra tres negocios en el mapa. Esos tres reciben el 40% de todos los contactos. Si no estás tú, está tu competencia. Lo gestionamos desde Córdoba para que eso cambie — desde 147€/mes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contacto"
                className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors inline-block"
              >
                Empezar →
              </Link>
              <Link
                to="/como-funciona"
                className="border border-dark-fg/30 text-dark-fg font-heading text-sm rounded-lg px-6 py-3 hover:border-primary hover:text-primary transition-colors inline-block"
              >
                Ver cómo funciona
              </Link>
            </div>
          </div>
          <div className="rounded-xl w-full h-[340px] border-2 border-dashed border-[#E4E2DC] bg-[#F0EDE4] flex items-center justify-center p-6 text-center">
            <span className="text-sm text-muted-foreground font-body">
              [IMAGEN: Pantalla de móvil mostrando búsqueda "fontanero Córdoba" en Google Maps con Local Pack]
            </span>
          </div>
        </div>
      </section>

      {/* WHY — dos columnas sin cards */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8 max-w-3xl">
            SEO local en Córdoba: por qué tu negocio no aparece en Google Maps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                Córdoba tiene un mercado local activo con menor competencia digital que Madrid o Barcelona. Eso significa que los negocios que trabajan su posicionamiento en Google Maps ahora tienen una ventaja real sobre los que esperan. En barrios como el Casco Histórico, Ciudad Jardín, El Brillante, Parque Figueroa o Vistalegre, los clientes buscan servicios locales en Google a diario.
              </p>
              <p>
                Cuando alguien busca "electricista en Córdoba", "clínica dental cerca de mí" o "abogado en el centro de Córdoba", Google muestra tres negocios en el mapa. Los que están ahí reciben el 40% de todos los clics. Los que no están no existen para ese cliente.
              </p>
            </div>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                El error más común: crear la ficha de Google una vez y abandonarla. Google interpreta la inactividad como falta de relevancia y baja posiciones progresivamente. En Córdoba, donde la competencia digital todavía es menor que en las grandes capitales, optimizar ahora te da una ventaja que después será muy difícil de recuperar para tu competencia.
              </p>
              <p>
                Un negocio en el Casco Histórico de Córdoba bien posicionado en Google Maps recibe búsquedas de residentes, de turistas que buscan servicios locales y de personas de toda la provincia. La combinación de proximidad y relevancia es exactamente lo que gestionamos para tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="bg-warm-bg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Cómo posicionamos tu negocio en Córdoba en Google Maps
          </h2>
          <div className="flex flex-col">
            {pasos.map((p, i) => (
              <div
                key={p.n}
                className={`flex flex-col md:flex-row gap-6 md:gap-10 py-8 ${
                  i !== pasos.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="text-primary font-heading font-light text-5xl md:text-6xl leading-none md:w-32 shrink-0">
                  {p.n}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-lg md:text-xl mb-3">{p.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-3">
            Resultados reales de negocios locales en Córdoba
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Estos son algunos de los resultados de negocios locales que ya trabajan con el sistema de posicionamiento de slocal.es.
          </p>
        </div>
        <ResultadosSection />
      </section>

      {/* SECTORES */}
      <section className="bg-warm-bg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-3">
            SEO local para negocios en Córdoba por sector
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Cada sector tiene sus propias búsquedas en Córdoba. Trabajamos de forma específica en cada uno.
          </p>
          <div className="flex flex-wrap gap-3">
            {sectores.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="border border-border bg-card rounded-full px-5 py-2 text-sm font-heading hover:border-primary hover:text-primary transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16">
        <div className="container max-w-xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-3 text-center">
            SEO local en Córdoba: plan y precio
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-8 max-w-md mx-auto">
            Todo lo que necesita tu negocio en Córdoba para aparecer cuando tus clientes te buscan en Google.
          </p>
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <div className="text-center mb-6">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase mb-4">
                Plan slocal.es
              </div>
              <div className="font-heading text-4xl mb-1">
                147€<span className="text-base text-muted-foreground">/mes</span>
              </div>
              <div className="text-xs text-muted-foreground">+ IVA</div>
            </div>
            <ul className="space-y-2 mb-8 text-sm">
              <li className="flex items-start gap-2"><span className="text-primary">✓</span><span>Tu negocio aparece cuando alguien te busca en Google en Córdoba</span></li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span><span>Más llamadas y contactos directos — sin pagar por cada uno</span></li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span><span>Contenido mensual que posiciona para nuevas búsquedas en tu zona</span></li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span><span>Tu ficha de Google activa — Google te muestra antes que a la competencia</span></li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span><span>Cada mes sabes exactamente cuántos contactos ha generado Google</span></li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span><span>Hablas siempre con la misma persona — sin intermediarios</span></li>
            </ul>
            <Link
              to="/contacto"
              className="block w-full text-center bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors"
            >
              Empezar en Córdoba →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Preguntas frecuentes sobre SEO local en Córdoba" items={faqs} />

      {/* OTHER CITIES */}
      <section className="bg-warm-bg py-12">
        <div className="container">
          <h2 className="font-heading text-xl md:text-2xl mb-3">
            SEO local en otras ciudades de España
          </h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
            Trabajamos con negocios en toda España.
          </p>
          <div className="flex flex-wrap gap-3">
            {otrasCiudades.map((c) => (
              <Link
                key={c.href}
                to={c.href}
                className="border border-border bg-card rounded-full px-5 py-2 text-sm font-heading hover:border-primary hover:text-primary transition-colors"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-6">
            ¿Tu negocio en Córdoba no aparece cuando tus clientes te buscan en Google?
          </h2>
          <Link
            to="/contacto"
            className="inline-block bg-card text-primary font-heading text-sm rounded-lg px-8 py-3 hover:bg-card/90 transition-colors"
          >
            Hablemos →
          </Link>
        </div>
      </section>
    </>
  );
};

export default SeoCordoba;
