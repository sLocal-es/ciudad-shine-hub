import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const DentistasPage = () => {
  const faqs = [
    {
      q: "¿Cuándo empieza a llenarse la agenda de nuevos pacientes desde Google?",
      a: "Los primeros resultados visibles aparecen entre el mes 2 y el mes 4: más visitas al perfil de Google, más llamadas directas y mejora de posiciones en Maps. En tratamientos con menos competencia digital los resultados llegan antes. A partir del mes 6 el flujo de pacientes se consolida mes a mes.",
    },
    {
      q: "¿Funciona para clínicas pequeñas o solo para grandes grupos dentales?",
      a: "El SEO local favorece precisamente a las clínicas pequeñas e independientes. Una clínica bien posicionada en su barrio aparece antes que una gran cadena sin ficha local optimizada. La especialización y la proximidad son tu ventaja frente a los grandes grupos.",
    },
    {
      q: "¿Las reseñas de Google son importantes para una clínica dental?",
      a: "Son el factor decisivo. Antes de pedir cita, el 90% de los pacientes lee las reseñas de la clínica. Una clínica con 50 reseñas recientes y bien respondidas convierte mucho más que una con 10 reseñas antiguas. Gestionamos la obtención y respuesta estratégica de reseñas cada mes.",
    },
    {
      q: "¿Necesito páginas específicas para cada tratamiento?",
      a: '"Dentista en Madrid" y "ortodoncia en Madrid" son búsquedas completamente distintas con pacientes distintos. Una sola página genérica no puede posicionar para todas las búsquedas de tratamientos que generan citas. Creamos una página por tratamiento y ciudad desde el inicio.',
    },
    {
      q: "¿Qué diferencia hay entre SEO para dentistas y Google Ads?",
      a: "Google Ads genera visibilidad mientras pagas — cuando paras la campaña, desapareces. El SEO construye una presencia orgánica que genera citas de forma constante sin coste por clic. Para una clínica dental donde cada paciente puede valer cientos de euros en tratamientos, el retorno del SEO a medio plazo es muy superior.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "SEO para Dentistas", item: "https://slocal.es/seo-para-dentistas" },
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
    name: "SEO para Dentistas",
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    areaServed: "España",
    description: "Servicio de SEO local para dentistas y clínicas dentales en España",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "slocal.es",
    url: "https://slocal.es",
    description: "SEO local para dentistas en España",
    areaServed: "España",
    priceRange: "€€",
  };

  const treatments = [
    "Implantes dentales",
    "Ortodoncia infantil y adultos",
    "Blanqueamiento dental",
    "Dentista de urgencias",
    "Endodoncia y tratamientos de conducto",
    "Prótesis dentales",
    "Carillas dentales",
    "Revisiones y limpiezas",
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
    { label: "SEO para empresas de reformas", slug: "seo-para-reformas" },
    { label: "SEO para abogados", slug: "seo-para-abogados" },
    { label: "SEO para inmobiliarias", slug: "seo-para-inmobiliarias" },
    { label: "SEO para psicólogos", slug: "seo-para-psicologos" },
  ];

  const steps = [
    {
      n: "01",
      h: "Tu clínica aparece cuando alguien busca dentista en tu zona",
      p: 'Optimizamos tu ficha de Google Business Profile con las categorías correctas para odontología, descripción con keywords de alta intención ("dentista urgencias", "implantes dentales", "ortodoncia infantil"), fotos de la clínica y del equipo, horarios y zona de servicio por barrios. Las reseñas son el factor más importante para que un paciente te elija — gestionamos su obtención y respuesta de forma estratégica.',
    },
    {
      n: "02",
      h: "Páginas específicas para cada tratamiento dental y ciudad",
      p: 'Creamos páginas optimizadas para cada tratamiento y zona: "ortodoncia en Valencia", "implantes dentales en Sevilla", "blanqueamiento dental en Madrid centro". Cada búsqueda con intención de reservar cita tiene su propia página. El paciente que llega sabe exactamente qué tratamiento busca y tú eres la clínica más relevante para él.',
    },
    {
      n: "03",
      h: "Cada mes sabes cuántas citas ha generado Google",
      p: "Informe mensual con posiciones en Google Maps para las búsquedas más importantes de tu clínica, visitas al perfil, llamadas recibidas y clics a tu web. Puedes ver exactamente qué retorno está generando el SEO frente a otros canales. Sin tecnicismos, con datos reales.",
    },
  ];

  return (
    <>
      <SEOHead
        title="SEO para Dentistas | Llena tu Agenda desde Google | slocal.es"
        description="Haz que tu clínica dental aparezca cuando alguien busca dentista en tu ciudad. Más pacientes, más citas. Desde 147€/mes + IVA."
        canonical="/seo-para-dentistas"
        jsonLd={[breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema]}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <BreadcrumbNav items={[
              { label: "Inicio", href: "/" },
              { label: "SEO para Dentistas" },
            ]} />
            <span className="inline-block border border-primary text-primary text-xs font-heading rounded-full px-4 py-1.5 mb-6">
              SEO para Dentistas
            </span>
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              SEO para Dentistas: Llena tu Agenda desde Google
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              Hay 49.500 búsquedas mensuales de "dentista cerca de mí" solo en España. Cada día, cientos de personas en tu ciudad buscan en Google un dentista y llaman al primero que aparece en el mapa. Si no eres tú, esas citas se las lleva otra clínica. Lo gestionamos para que tu agenda se llene con pacientes que te han elegido a ti — desde 147€/mes.
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
              [IMAGEN: Pantalla de móvil mostrando búsqueda "dentista cerca de mí" en Google Maps con 3 clínicas dentales destacadas en el Local Pack]
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            Por qué tu clínica dental no aparece en Google
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground">
              <p>
                Cuando alguien tiene dolor de muelas, busca ortodoncia para su hijo o quiere mejorar su sonrisa, lo primero que hace es buscar en Google. "Dentista en Chamberí", "clínica dental en Gràcia", "implantes dentales cerca de mí" — esas búsquedas tienen una intención clara: reservar cita. El 75% de esas personas nunca pasa de la primera página de resultados. Y el 90% llama a uno de los tres primeros que aparecen en Google Maps.
              </p>
              <p>
                Hay 23.559 clínicas dentales en España. La diferencia entre las que tienen la agenda llena y las que dependen del boca a boca es, casi siempre, el posicionamiento en Google.
              </p>
            </div>
            <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground">
              <p>
                El error más común: tener una web bonita y una ficha de Google creada hace años sin gestionar. Google interpreta la inactividad como falta de relevancia. Sin fotos recientes, sin reseñas respondidas, sin publicaciones periódicas, tu clínica baja posiciones cada semana frente a competidores que sí gestionan su presencia.
              </p>
              <p>
                El segundo error: no tener páginas específicas por tratamiento. "Ortodoncia", "implantes dentales", "blanqueamiento dental" y "dentista de urgencias" son búsquedas distintas con pacientes distintos. Una sola página genérica solo puede posicionar para una de ellas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            Cómo posicionamos tu clínica dental en Google
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

      {/* TREATMENTS */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            Tratamientos dentales que posicionamos en Google
          </h2>
          <p className="text-base text-muted-foreground font-body font-light mb-10 max-w-2xl">
            Cada tratamiento tiene sus propias búsquedas. Creamos páginas específicas para cada uno y para la zona donde operas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {treatments.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm font-body">
                  <span className="text-primary mt-0.5">→</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="border-2 border-dashed border-border bg-warm-bg rounded-xl aspect-[4/3] flex items-center justify-center p-6 text-center">
              <p className="text-sm text-muted-foreground font-body">
                [IMAGEN: Clínica dental moderna — sala de tratamiento limpia y profesional]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLAN */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-3 text-center">Servicio de SEO para dentistas y clínicas dentales</h2>
          <p className="text-base text-muted-foreground font-body font-light text-center mb-10">
            Todo lo que necesita tu clínica para aparecer cuando alguien busca dentista en tu ciudad.
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
                "Tu clínica aparece cuando alguien busca dentista en tu ciudad",
                "Más citas directas desde Google — sin pagar por cada paciente",
                "Contenido mensual que posiciona para cada tratamiento y zona",
                "Tu ficha de Google activa — Google te muestra antes que a la competencia",
                "Cada mes sabes exactamente cuántas citas ha generado Google",
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
      <FAQSection title="Preguntas frecuentes sobre SEO para dentistas" items={faqs} />

      {/* CIUDADES */}
      <section className="py-12">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            SEO local para dentistas en toda España
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 font-body font-light">
            Posicionamos clínicas dentales en toda España — en ciudades con alta competencia y en zonas donde todavía hay oportunidad real de captar posiciones.
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
          <h2 className="font-heading text-xl md:text-2xl mb-8">SEO local para otros negocios</h2>
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
        title="¿Tu clínica dental no aparece cuando alguien busca dentista en tu ciudad?"
        buttonText="Hablemos →"
      />
    </>
  );
};

export default DentistasPage;
