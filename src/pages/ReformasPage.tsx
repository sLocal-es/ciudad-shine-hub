import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const ReformasPage = () => {
  const faqs = [
    {
      q: "¿Cuándo empieza a llegar el primer presupuesto desde Google?",
      a: "En reformas el proceso es más largo que en otros sectores — el cliente compara y valora antes de decidir. Los primeros contactos cualificados suelen aparecer entre el mes 3 y el mes 5. A partir del mes 6 el flujo se consolida. El SEO local trabaja mientras tú estás en la obra.",
    },
    {
      q: "¿Funciona para autónomos de reformas o solo para empresas grandes?",
      a: "Especialmente para autónomos y empresas pequeñas. El SEO local favorece la proximidad y la especialización. Una empresa bien posicionada en su zona aparece antes que una grande sin ficha optimizada. La mayoría de nuestros clientes de reformas son autónomos o empresas de 2 a 10 personas.",
    },
    {
      q: "¿Necesito fotos de mis proyectos para empezar?",
      a: "Ayudan mucho, especialmente en reformas. Las fotos de antes y después en Google son el factor que más aumenta los clics. Si no tienes, te decimos exactamente qué fotografiar para maximizar el impacto.",
    },
    {
      q: "¿Cómo me diferencio de otras empresas de reformas en Google?",
      a: "Con páginas específicas por tipo de reforma y por zona, reseñas gestionadas estratégicamente y contenido que muestra tu experiencia real. La mayoría de empresas de reformas tienen una sola página genérica — eso es exactamente la oportunidad para quien trabaja bien el SEO.",
    },
    {
      q: "¿El SEO funciona mejor que Google Ads para reformas?",
      a: "Dependen de objetivos distintos. Google Ads da visibilidad inmediata pagando por cada clic. El SEO local construye una presencia que genera presupuestos a coste cero a medio plazo. Para reformas, donde el ticket es alto, el retorno del SEO local a 6-12 meses es muy superior.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "SEO para Empresas de Reformas", item: "https://slocal.es/seo-para-reformas" },
    ],
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO para Empresas de Reformas",
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    areaServed: "España",
    description: "Servicio de SEO local para empresas de reformas en España",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "slocal.es",
    url: "https://slocal.es",
    description: "SEO local para empresas de reformas en España",
    areaServed: "España",
    priceRange: "€€",
  };

  const serviceTypes = [
    "Reformas integrales de vivienda",
    "Reforma de cocina",
    "Reforma de baño",
    "Reforma de local comercial",
    "Reformas para comunidades de vecinos",
    "Rehabilitación de fachadas",
    "Reformas de oficinas",
    "Pintura y acabados interiores",
  ];

  const cities = [
    { name: "Madrid", slug: "madrid" },
    { name: "Barcelona", slug: "barcelona" },
    { name: "Valencia", slug: "valencia" },
    { name: "Sevilla", slug: "sevilla" },
    { name: "Málaga", slug: "malaga" },
    { name: "Zaragoza", slug: "zaragoza" },
    { name: "Bilbao", slug: "bilbao" },
    { name: "Murcia", slug: "murcia" },
  ];

  const otherSectors = [
    { label: "SEO para fontaneros", slug: "seo-para-fontaneros" },
    { label: "SEO para fisioterapeutas", slug: "seo-para-fisioterapeutas" },
    { label: "SEO para pintores", slug: "seo-para-pintores" },
    { label: "SEO para clínicas", slug: "seo-para-clinicas" },
    { label: "SEO para entrenadores personales", slug: "seo-para-entrenadores" },
    { label: "SEO para yoga y pilates", slug: "seo-para-yoga" },
  ];

  const steps = [
    {
      n: "01",
      h: "Optimizamos tu ficha de Google para búsquedas de reforma local",
      p: "Configuramos las categorías correctas para reformas y construcción, la descripción con keywords de intención de compra (reforma integral, reforma baño, reforma cocina), fotos de proyectos terminados, horarios y zona de servicio por ciudades y barrios. Las fotos de antes y después son el factor que más aumenta los clics en fichas de reforma — te guiamos en qué fotografiar.",
    },
    {
      n: "02",
      h: "Creamos páginas específicas para cada tipo de reforma",
      p: 'Una web con página por tipo de reforma y por zona permite aparecer en búsquedas de alta intención: "reforma integral cocina Madrid", "reforma baño Valencia presupuesto", "empresa reformas locales comerciales Barcelona". Cada página ataca una búsqueda con intención de contratar. Los competidores con una sola página genérica no pueden posicionar para todas estas búsquedas a la vez.',
    },
    {
      n: "03",
      h: "Generamos confianza con contenido y reseñas estratégicas",
      p: "En reformas, la confianza es el factor decisivo. Un cliente que pide tres presupuestos va a elegir a quien más confianza le transmita online. Gestionamos las reseñas de Google, creamos contenido que muestra tu experiencia y expertise, y construimos el perfil digital que convierte visitas en solicitudes de presupuesto.",
    },
  ];

  return (
    <>
      <SEOHead
        title="SEO para Empresas de Reformas | Más Presupuestos desde Google | slocal.es"
        description="Haz que tu empresa de reformas aparezca cuando alguien busca reforma en tu ciudad. Más presupuestos desde Google. Desde 147€/mes + IVA."
        canonical="/seo-para-reformas"
        jsonLd={[breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema]}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <BreadcrumbNav items={[
              { label: "Inicio", href: "/" },
              { label: "SEO para Empresas de Reformas" },
            ]} />
            <span className="inline-block border border-primary text-primary text-xs font-heading rounded-full px-4 py-1.5 mb-6">
              SEO para Empresas de Reformas
            </span>
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              SEO para Empresas de Reformas: Más Presupuestos desde Google
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              Cuando alguien decide reformar su cocina o su baño, lo primero que hace es buscar en Google. Las empresas que aparecen en el top 3 se llevan la mayoría de los presupuestos. Las que no aparecen, no existen para ese cliente. Lo gestionamos para que seas tú quien aparezca — desde 147€/mes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contacto" className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors">
                Empezar →
              </Link>
              <Link to="/como-funciona" className="border border-dark-fg/20 text-dark-fg font-heading text-sm rounded-lg px-6 py-3 hover:border-primary hover:text-primary transition-colors">
                Ver cómo funciona
              </Link>
            </div>
          </div>

          <div className="border-2 border-dashed border-border bg-warm-bg rounded-xl aspect-[4/3] flex items-center justify-center p-6 text-center">
            <p className="text-sm text-muted-foreground font-body">
              [IMAGEN: Pantalla de móvil mostrando búsqueda "empresa de reformas Madrid" en Google Maps con Local Pack]
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            Por qué muchas empresas de reformas no aparecen en Google
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground">
              <p>
                Las reformas son una de las búsquedas con mayor intención de compra en Google. Quien busca "empresa de reformas integrales en Madrid" o "reforma de baño en Barcelona" ya tiene presupuesto y está eligiendo a quién llamar. El problema es que Google Maps solo muestra tres empresas. Esas tres reciben el 40% de todos los contactos.
              </p>
              <p>
                El sector de las reformas tiene un ciclo de venta más largo que otros — el cliente compara, pide varios presupuestos y valora la confianza. Por eso, aparecer primero en Google no solo genera más contactos, sino que posiciona tu empresa como la referencia de confianza en tu zona antes de que el cliente llame a nadie.
              </p>
            </div>
            <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground">
              <p>
                El error más común en empresas de reformas: depender del boca a boca y no trabajar la visibilidad digital. El boca a boca es irregular — unos meses van bien y otros mal. El SEO local genera un flujo constante de presupuestos sin depender de referencias.
              </p>
              <p>
                El segundo error: tener una sola página genérica. "Reforma integral", "reforma de baño", "reforma de cocina" y "reforma de local comercial" son búsquedas distintas con clientes distintos. Cada tipo de reforma necesita su propia página para posicionar en esa búsqueda específica. Las empresas que lo hacen bien reciben presupuestos cualificados cada semana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            Cómo conseguimos más presupuestos para tu empresa de reformas
          </h2>
          <div>
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`grid grid-cols-[auto_1fr] gap-6 md:gap-10 py-8 ${i < steps.length - 1 ? "border-b border-border" : ""}`}
              >
                <span className="font-heading text-4xl md:text-5xl text-primary leading-none">{s.n}</span>
                <div>
                  <h3 className="font-heading text-lg md:text-xl mb-3">{s.h}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-body font-light">
                    {s.p}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE TYPES */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            Tipos de reforma que posicionamos
          </h2>
          <p className="text-base text-muted-foreground font-body font-light mb-10 max-w-2xl">
            Cada tipo de reforma tiene sus propias búsquedas en Google. Creamos páginas específicas para cada servicio.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {serviceTypes.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm font-body">
                  <span className="text-primary mt-0.5">→</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="border-2 border-dashed border-border bg-warm-bg rounded-xl aspect-[4/3] flex items-center justify-center p-6 text-center">
              <p className="text-sm text-muted-foreground font-body">
                [IMAGEN: Collage de proyectos de reforma: cocina reformada, baño nuevo, fachada rehabilitada]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">Resultados reales con empresas de reformas</h2>
          <p className="text-base text-muted-foreground font-body font-light mb-10">
            Grupo TEI, empresa de reformas en Madrid, consiguió 8 llamadas directas desde Google en sus primeros 3 meses con slocal.es. Empezaron sin web ni ficha optimizada — solo con el sistema de posicionamiento local activado.
          </p>
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <p className="text-xs font-heading text-primary mb-2">MADRID · REFORMAS</p>
            <h3 className="font-heading text-xl mb-4">Grupo TEI</h3>
            <p className="text-3xl md:text-4xl font-heading text-foreground mb-1">8 llamadas directas</p>
            <p className="text-sm text-muted-foreground font-body">en los primeros 3 meses, empezando desde cero</p>
          </div>
        </div>
      </section>

      {/* PLAN */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-3 text-center">Servicio de SEO para empresas de reformas</h2>
          <p className="text-base text-muted-foreground font-body font-light text-center mb-10">
            Todo lo que necesita tu empresa de reformas para aparecer cuando alguien busca reforma en tu ciudad.
          </p>
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm">
            <span className="inline-block bg-primary/10 text-primary text-xs font-heading rounded-full px-3 py-1 mb-5">
              PLAN SLOCAL.ES
            </span>
            <p className="font-heading text-4xl md:text-5xl mb-8">
              147€<span className="text-lg text-muted-foreground font-body font-light">/mes + IVA</span>
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Tu empresa aparece cuando alguien busca reforma en tu ciudad",
                "Más presupuestos directos desde Google — sin depender del boca a boca",
                "Contenido mensual que posiciona para cada tipo de reforma y zona",
                "Tu ficha de Google activa — Google te muestra antes que a la competencia",
                "Cada mes sabes exactamente cuántos presupuestos ha generado Google",
                "Hablas siempre con la misma persona — sin intermediarios",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm md:text-base font-body">
                  <span className="text-primary font-heading">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contacto"
              className="inline-block bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors"
            >
              Empezar →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Preguntas frecuentes sobre SEO para empresas de reformas" items={faqs} />

      {/* CIUDADES */}
      <section className="py-12">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            Trabajamos con empresas de reformas en toda España
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 font-body font-light">
            Gestionamos el posicionamiento local de empresas de reformas en toda España.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {cities.map((city) => (
              <Link
                key={city.slug}
                to={`/seo-local-${city.slug}`}
                className="bg-card border border-border rounded-full px-4 py-2 text-sm font-heading text-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-[2px]"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OTROS SECTORES */}
      <section className="bg-warm-bg py-12">
        <div className="container max-w-4xl text-center">
          <h2 className="font-heading text-xl md:text-2xl mb-8">También trabajamos con otros sectores</h2>
          <div className="flex flex-wrap justify-center gap-2.5">
            {otherSectors.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="bg-card border border-border rounded-full px-4 py-2 text-sm font-heading text-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-[2px]"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Tu empresa de reformas no aparece cuando alguien busca reforma en tu ciudad?"
        buttonText="Hablemos →"
      />
    </>
  );
};

export default ReformasPage;
