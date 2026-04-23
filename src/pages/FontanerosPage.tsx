import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const FontanerosPage = () => {
  const faqs = [
    {
      q: "¿Vale la pena el SEO para un fontanero autónomo?",
      a: "Sí. La mayoría de nuestros clientes son autónomos o empresas de 2-3 personas. El SEO local es especialmente rentable para fontaneros porque cada trabajo puede valer entre 80€ y varios miles en instalaciones grandes. Una llamada adicional al mes ya amortiza el servicio.",
    },
    {
      q: "¿Necesito web si ya tengo ficha de Google?",
      a: "La ficha sola posiciona en Maps, pero una web refuerza la autoridad y te permite aparecer también en los resultados orgánicos. El servicio incluye ambas desde el inicio.",
    },
    {
      q: "¿Cómo compito con fontaneros que llevan años en Google?",
      a: "El SEO local favorece la proximidad y la relevancia, no el tiempo en el mercado. Un fontanero con ficha bien optimizada y reseñas recientes en su barrio aparece antes que una empresa grande con ficha abandonada.",
    },
    {
      q: "¿Funciona especialmente para urgencias?",
      a: "Especialmente para urgencias. Las búsquedas de urgencia tienen la mayor intención de compra y en muchas zonas hay menos competencia bien posicionada. Configuramos tu ficha y contenido específicamente para 'fontanero urgente', 'avería ahora' y 'fontanero 24h'.",
    },
    {
      q: "¿Cuándo empiezo a recibir más llamadas?",
      a: "Los primeros contactos desde Google suelen aparecer entre el mes 2 y el mes 3. Las urgencias se captan antes porque la intención de búsqueda es inmediata y la competencia bien posicionada es menor en esas queries específicas.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "SEO para Fontaneros", item: "https://slocal.es/seo-para-fontaneros" },
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
    name: "SEO para Fontaneros",
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    areaServed: "España",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "slocal.es",
    url: "https://slocal.es",
    description: "Servicio de SEO local para fontaneros en España",
    areaServed: "España",
    priceRange: "€€",
  };

  const serviceTypes = [
    "Fontanero urgente y averías",
    "Fontanero 24 horas",
    "Instalación y cambio de caldera",
    "Detección y reparación de fugas",
    "Fontanero para comunidades",
    "Instalaciones de fontanería",
    "Desatascos y tuberías",
    "Fontanero para reformas",
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
    { label: "SEO para fisioterapeutas", slug: "seo-para-fisioterapeutas" },
    { label: "SEO para empresas de reformas", slug: "seo-para-reformas" },
    { label: "SEO para pintores", slug: "seo-para-pintores" },
    { label: "SEO para clínicas", slug: "seo-para-clinicas" },
    { label: "SEO para entrenadores personales", slug: "seo-para-entrenadores" },
    { label: "SEO para yoga y pilates", slug: "seo-para-yoga" },
  ];

  const steps = [
    {
      n: "01",
      h: "Optimizamos tu ficha de Google para búsquedas de urgencias",
      p: "Configuramos las categorías correctas para fontanería y urgencias, la descripción con keywords de alta intención (avería, urgente, 24h, fuga), fotos del trabajo real, horarios de disponibilidad y zona de servicio por barrios. Google necesita señales claras de que eres el fontanero más relevante de tu zona para mostrarte en el top 3 cuando hay una urgencia.",
    },
    {
      n: "02",
      h: "Creamos páginas específicas para cada tipo de servicio",
      p: 'Una web con página por tipo de avería y zona permite aparecer en búsquedas específicas de alta conversión: "instalación caldera Madrid", "detección fugas Valencia", "fontanero urgente Chamberí". Cada página ataca una búsqueda concreta. Los competidores con una sola página genérica no pueden competir con eso.',
    },
    {
      n: "03",
      h: "Gestionamos tu reputación y te informamos de resultados",
      p: "Las reseñas son el factor que más influye en que alguien te llame o llame a otro. Gestionamos la obtención y respuesta de reseñas de forma estratégica. Cada mes recibes un informe claro: posiciones en Google Maps, llamadas recibidas y qué búsquedas te están trayendo trabajo.",
    },
  ];

  return (
    <>
      <SEOHead
        title="SEO para Fontaneros | Consigue Más Llamadas desde Google | slocal.es"
        description="Haz que tu negocio de fontanería aparezca cuando alguien busca fontanero urgente en tu ciudad. Más llamadas, más trabajos. Desde 147€/mes + IVA."
        canonical="/seo-para-fontaneros"
        jsonLd={[breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema]}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <BreadcrumbNav items={[
              { label: "Inicio", href: "/" },
              { label: "SEO para Fontaneros" },
            ]} />
            <span className="inline-block border border-primary text-primary text-xs font-heading rounded-full px-4 py-1.5 mb-6">
              SEO para Fontaneros
            </span>
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              SEO para Fontaneros: Que te Llamen cuando Haya una Avería
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              Cuando una tubería revienta o hay una fuga, el cliente busca en Google y llama al primero que aparece. Si no eres tú, ese trabajo se lo lleva otro. Lo gestionamos para que seas el primero — desde 147€/mes.
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
              [IMAGEN: Pantalla de móvil mostrando búsqueda "fontanero urgente" en Google Maps con Local Pack]
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM — dos columnas sin cards */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            Por qué muchos fontaneros son invisibles en Google
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground">
              <p>
                La fontanería es uno de los sectores con mayor intención de compra en Google. Cuando alguien busca "fontanero urgente" o "avería de agua ahora", ya ha decidido contratar — solo está eligiendo a quién llamar. El 76% de esas personas llama al negocio dentro de las siguientes 24 horas.
              </p>
              <p>
                El problema es que Google Maps solo muestra tres negocios. Esos tres se llevan el 40% de todos los clics. El cuarto y el quinto apenas existen para ese cliente. La diferencia entre estar en el top 3 y estar fuera puede ser de 15 a 25 llamadas al mes.
              </p>
            </div>
            <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground">
              <p>
                El error más común: crear la ficha de Google cuando empiezas y no volver a tocarla. Google interpreta eso como inactividad y te baja posiciones progresivamente. Un fontanero con ficha desactualizada, sin fotos recientes y sin reseñas pierde visibilidad cada semana frente a competidores que sí la gestionan.
              </p>
              <p>
                El segundo error: no tener páginas específicas por tipo de servicio. "Fontanero urgente", "instalación de caldera", "detección de fugas" y "fontanero 24h" son búsquedas distintas con clientes distintos. Si tienes una sola página genérica, solo apareces para una de ellas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW — lista vertical numerada */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            Cómo conseguimos que te llamen más desde Google
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
            Tipos de servicio de fontanería que posicionamos
          </h2>
          <p className="text-base text-muted-foreground font-body font-light mb-10 max-w-2xl">
            Cada tipo de servicio tiene sus propias búsquedas en Google. Creamos contenido específico para cada uno.
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
                [IMAGEN: Collage trabajos fontanería: caldera, tubería, grifo]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">Resultados reales con fontaneros</h2>
          <p className="text-base text-muted-foreground font-body font-light mb-10 max-w-3xl">
            MVA Fontanería en Madrid consiguió 60 interacciones desde Google en sus primeros 2 meses. Fontaneros Económicos, también en Madrid, recibió 11 llamadas directas y 4 WhatsApp en mes y medio. Ambos empezaron desde cero, sin web ni ficha optimizada.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-xs font-heading text-primary mb-2">MADRID</p>
              <h3 className="font-heading text-lg mb-3">MVA Fontanería</h3>
              <p className="text-3xl font-heading text-foreground mb-1">60 interacciones</p>
              <p className="text-sm text-muted-foreground font-body">desde Google en sus primeros 2 meses</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-xs font-heading text-primary mb-2">MADRID</p>
              <h3 className="font-heading text-lg mb-3">Fontaneros Económicos</h3>
              <p className="text-3xl font-heading text-foreground mb-1">11 llamadas + 4 WhatsApp</p>
              <p className="text-sm text-muted-foreground font-body">en mes y medio, empezando desde cero</p>
            </div>
          </div>
        </div>
      </section>

      {/* PLAN ÚNICO */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-3 text-center">Servicio de SEO para fontaneros</h2>
          <p className="text-base text-muted-foreground font-body font-light text-center mb-10">
            Todo lo que necesita tu negocio de fontanería para aparecer cuando te buscan en Google.
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
                "Google Business Profile — configuración y gestión mensual",
                "Web con páginas por tipo de servicio y zona",
                "2 artículos de blog mensuales para tu sector",
                "Posts mensuales en tu ficha de Google",
                "Informe mensual de posiciones y llamadas",
                "Gestor directo — hablas con quien gestiona tu cuenta",
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
      <FAQSection title="Preguntas frecuentes sobre SEO para fontaneros" items={faqs} />

      {/* CIUDADES */}
      <section className="py-12">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            Trabajamos con fontaneros en toda España
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 font-body font-light">
            Gestionamos el posicionamiento local de fontaneros en toda España.
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

      {/* CTA FINAL */}
      <CTASection
        title="¿Quieres que tu teléfono suene más gracias a Google?"
        buttonText="Hablemos →"
      />
    </>
  );
};

export default FontanerosPage;
