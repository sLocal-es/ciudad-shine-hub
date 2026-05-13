import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import AutonomosAuditForm from "@/components/autonomos/HeroAuditForm";

const AutonomosPage = () => {
  const faqs = [
    {
      q: "¿Vale la pena el SEO si soy autónomo y trabajo solo?",
      a: "Especialmente si trabajas solo. No tienes equipo comercial ni presupuesto para anuncios. El SEO local te permite que cada cliente potencial de tu zona te encuentre en Google sin pagar por cada clic. Un par de contratos extra al mes ya amortiza el servicio con creces.",
    },
    {
      q: "¿Necesito web o solo con la ficha de Google es suficiente?",
      a: "La ficha es imprescindible y posiciona en Google Maps, pero tiene techo. Una web con páginas por servicio y zona te permite aparecer también en los resultados orgánicos y te da credibilidad frente a un cliente que duda entre llamarte a ti o a otro. El servicio incluye ambas desde el inicio.",
    },
    {
      q: "¿Cómo compito con empresas más grandes que llevan años en Google?",
      a: "El SEO local favorece la proximidad y la relevancia, no el tamaño. Un autónomo con ficha bien optimizada, reseñas recientes y contenido específico de su zona aparece antes que una empresa grande con presencia digital descuidada. Hemos visto autónomos superar a competidores con diez veces más antigüedad.",
    },
    {
      q: "¿Funciona el SEO local para autónomos que trabajan en toda España?",
      a: "Sí, pero la estrategia cambia. En lugar de optimizar por una ciudad, trabajamos por zonas o regiones de servicio. También se puede combinar SEO local en tu ciudad principal con SEO orgánico nacional para servicios que se prestan en remoto.",
    },
    {
      q: "¿Cuándo empiezo a recibir contactos desde Google?",
      a: "Los primeros contactos suelen llegar entre el mes 2 y el mes 3. Depende de la competencia en tu zona y servicio. En sectores con menos saturación los resultados aparecen antes; en zonas muy competidas se nota a partir del tercer o cuarto mes.",
    },
    {
      q: "¿Qué diferencia hay entre SEO para autónomos y SEO para empresas?",
      a: "El enfoque y el presupuesto. Las empresas grandes invierten en SEO nacional con equipos enteros. Para autónomos optimizamos lo que de verdad mueve la aguja: ficha de Google, páginas por servicio y zona, reseñas y contenido local. Mismo método, escala adaptada a un autónomo.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "SEO para Autónomos", item: "https://slocal.es/seo-para-autonomos" },
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
    name: "SEO para Autónomos",
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    areaServed: "España",
  };

  const sectorTypes = [
    "Autónomos de servicios profesionales (abogados, asesores, consultores)",
    "Autónomos de oficios (electricistas, pintores, carpinteros)",
    "Autónomos creativos (fotógrafos, diseñadores, copywriters)",
    "Autónomos de salud y bienestar (fisios, nutricionistas, entrenadores)",
    "Autónomos de reformas y construcción",
    "Autónomos de tecnología e informática",
    "Autónomos de formación y coaching",
    "Otros servicios locales",
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
    { label: "SEO para dentistas", slug: "seo-para-dentistas" },
    { label: "SEO para psicólogos", slug: "seo-para-psicologos" },
  ];

  const steps = [
    {
      n: "01",
      h: "Optimizamos tu presencia en Google desde el primer día",
      p: "Configuramos tu ficha de Google Business Profile con las categorías correctas para tu servicio, descripción optimizada con las keywords que usan tus clientes, fotos profesionales y zona de servicio por ciudad y barrio. Google necesita señales claras de que eres el autónomo más relevante de tu zona para mostrarte antes que a la competencia.",
    },
    {
      n: "02",
      h: "Creamos páginas específicas para cada servicio y zona",
      p: 'Una web con una página por servicio y por zona donde trabajas permite aparecer en búsquedas específicas de alta intención: "electricista en Chamberí", "asesor fiscal autónomo Madrid", "fotógrafo de bodas Valencia". Cada página ataca una búsqueda concreta. Los autónomos con una sola página genérica no pueden competir con eso.',
    },
    {
      n: "03",
      h: "Gestionamos reseñas y te informamos de resultados reales",
      p: "Las reseñas son el factor que más influye en que un cliente potencial te contacte a ti y no a otro. Gestionamos la obtención y respuesta de reseñas de forma estratégica. Cada mes recibes un informe claro: posiciones en Google Maps, visitas a tu web y qué búsquedas te están trayendo clientes nuevos.",
    },
  ];

  return (
    <>
      <SEOHead
        title="SEO para Autónomos | Consigue Clientes desde Google | slocal.es"
        description="Consultor SEO especializado en autónomos. Aparece en Google cuando tus clientes te buscan. Más contratos, sin pagar anuncios. Desde 147€/mes + IVA."
        canonical="/seo-para-autonomos"
        jsonLd={[breadcrumbSchema, faqSchema, serviceSchema]}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <BreadcrumbNav items={[
              { label: "Inicio", href: "/" },
              { label: "SEO para Autónomos" },
            ]} />
            <span className="inline-block border border-primary text-primary text-xs font-heading rounded-full px-4 py-1.5 mb-6">
              SEO para Autónomos
            </span>
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              SEO para Autónomos: Que tus Clientes te Encuentren en Google
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-6 font-body font-light">
              Aparece cuando te buscan. Sin pagar anuncios. Sin permanencia.
            </p>
            <ul className="space-y-2.5 mb-2">
              {[
                "Tu ficha de Google optimizada desde el primer mes",
                "Más contactos sin depender de publicidad de pago",
                "Informe mensual con resultados reales",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm md:text-base font-body text-dark-fg/85">
                  <span className="text-primary mt-0.5">→</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary/95 rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="font-heading text-xl md:text-2xl text-primary-foreground mb-2">
              ¿Apareces cuando tus clientes te buscan?
            </h2>
            <p className="text-primary-foreground/85 text-sm font-body font-light mb-5">
              Analizamos gratis cómo te ve Google ahora mismo
            </p>
            <AutonomosAuditForm />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            Por qué muchos autónomos son invisibles en Google
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground">
              <p>
                Ser autónomo significa que cada cliente nuevo importa. Pero la mayoría de autónomos en España tienen un problema invisible: cuando alguien busca su servicio en Google, no aparecen. Aparece la competencia.
              </p>
              <p>
                El 46% de todas las búsquedas en Google tienen intención local. El 76% de quienes buscan un servicio localmente contactan con el negocio en menos de 24 horas. Si no estás en los primeros resultados de Google Maps en tu zona, esos contactos van a otro.
              </p>
            </div>
            <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground">
              <p>
                El error más común: no tener presencia en Google o tenerla a medias. Una ficha sin completar, una web genérica que no dice qué haces ni dónde lo haces, y cero reseñas. Google no tiene motivos para mostrarte antes que a tu competencia.
              </p>
              <p>
                El segundo error: intentar posicionarse para todo a la vez. "Diseñador web", "diseñador web freelance Madrid", "diseñador web para empresas" son búsquedas distintas con clientes distintos. Sin una estrategia clara por servicio y zona, Google no sabe cuándo mostrarte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            Cómo conseguimos que tus clientes te encuentren en Google
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

      {/* SECTOR TYPES */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            Sectores de autónomos con los que trabajamos
          </h2>
          <p className="text-base text-muted-foreground font-body font-light mb-10 max-w-2xl">
            Cada tipo de servicio tiene sus propias búsquedas en Google. Adaptamos la estrategia a tu actividad concreta.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {sectorTypes.map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm md:text-base font-body">
                <span className="text-primary mt-0.5">→</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PLAN */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-3 text-center">El plan SEO para autónomos</h2>
          <p className="text-base text-muted-foreground font-body font-light text-center mb-10">
            Todo lo que necesitas como autónomo para aparecer cuando tus clientes te buscan en Google.
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
                "Tu negocio aparece cuando alguien busca tu servicio en tu ciudad",
                "Más contactos directos desde Google — sin pagar por cada uno",
                "Contenido mensual que posiciona para nuevas búsquedas de tu servicio",
                "Tu ficha de Google activa — Google te muestra antes que a la competencia",
                "Cada mes sabes exactamente qué clientes ha generado Google",
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
      <FAQSection title="Preguntas frecuentes sobre SEO para autónomos" items={faqs} />

      {/* CIUDADES */}
      <section className="py-12">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            Trabajamos con autónomos en toda España
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 font-body font-light">
            Gestionamos el posicionamiento local de autónomos en toda España.
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
        title="¿Quieres que tus clientes te encuentren en Google?"
        buttonText="Hablemos →"
      />
    </>
  );
};

export default AutonomosPage;
