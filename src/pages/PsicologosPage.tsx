import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SectorHeroDark from "@/components/sector/SectorHeroDark";

const PsicologosPage = () => {
  const faqs = [
    {
      q: "¿Cuándo empieza a llenarse la agenda con pacientes desde Google?",
      a: "Los primeros resultados visibles aparecen entre el mes 2 y el mes 4. En especialidades con menos competencia digital los resultados llegan antes. A partir del mes 6 el flujo se consolida y la agenda se llena de forma predecible sin depender del boca a boca.",
    },
    {
      q: "¿Funciona para psicólogos autónomos o solo para grandes clínicas?",
      a: "El SEO local favorece precisamente a los psicólogos independientes. Una consulta bien posicionada en su barrio aparece antes que un gran centro sin presencia local trabajada. La especialización es tu ventaja frente a los grandes centros.",
    },
    {
      q: "¿Es compatible con estar en Doctoralia?",
      a: "Sí, son canales complementarios. La diferencia es que los pacientes que llegan desde Google llegan directamente a ti, sin compararte con otros psicólogos y sin comisión por cada paciente. A medio plazo el SEO tiene un retorno mucho mayor.",
    },
    {
      q: "¿Puedo posicionarme para varias especialidades terapéuticas?",
      a: "Sí. Creamos páginas específicas para cada especialidad — ansiedad, terapia de pareja, psicología infantil, depresión — optimizadas para las búsquedas reales de cada una. Cada página ataca búsquedas distintas y suma pacientes cualificados.",
    },
    {
      q: "¿El SEO para psicólogos es diferente al de otros sectores?",
      a: "Sí. La psicología pertenece al sector salud, donde Google aplica criterios E-E-A-T más estrictos — experiencia, expertise, autoridad y confianza. El contenido debe transmitir credibilidad profesional. Lo gestionamos teniendo en cuenta esas particularidades del sector.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "SEO para Psicólogos", item: "https://slocal.es/seo-para-psicologos" },
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
    name: "SEO para Psicólogos",
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    areaServed: "España",
    description: "Servicio de SEO local para psicólogos y clínicas de psicología en España",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "slocal.es",
    url: "https://slocal.es",
    description: "SEO local para psicólogos en España",
    areaServed: "España",
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
  };

  const specialties = [
    "Psicología para ansiedad y estrés",
    "Terapia de pareja",
    "Psicología infantil y adolescentes",
    "Depresión y estado de ánimo",
    "Psicología online",
    "Terapia familiar",
    "Psicología forense",
    "Duelo y pérdida",
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
    { label: "SEO para abogados", slug: "seo-para-abogados" },
    { label: "SEO para inmobiliarias", slug: "seo-para-inmobiliarias" },
    { label: "SEO para dentistas", slug: "seo-para-dentistas" },
    { label: "SEO para gimnasios", slug: "seo-para-gimnasios" },
  ];

  const steps = [
    {
      n: "01",
      h: "Tu consulta aparece cuando alguien busca psicólogo en tu ciudad",
      p: 'Optimizamos tu ficha de Google Business Profile con las categorías correctas para psicología, descripción con las keywords que usan tus pacientes ("psicólogo ansiedad", "terapia de pareja", "psicólogo infantil"), fotos de la consulta, horarios y zona de servicio. Cuando alguien busca "psicólogo en Chamberí" o "terapia cerca de mí", tu consulta aparece en el mapa con botón de llamada directo — sin pasar por ninguna plataforma.',
    },
    {
      n: "02",
      h: "Páginas específicas para cada especialidad y ciudad",
      p: 'Creamos páginas optimizadas para cada especialidad terapéutica y zona. "Psicólogo para ansiedad en Madrid", "terapia de pareja en Barcelona", "psicólogo infantil en Valencia" — cada búsqueda con intención de contactar tiene su propia página. El paciente que llega ya sabe exactamente qué necesita y tú eres la respuesta más relevante para él.',
    },
    {
      n: "03",
      h: "Cada mes sabes cuántos pacientes ha generado Google",
      p: "Informe mensual con posiciones en Google Maps para las búsquedas más importantes de tu especialidad, visitas al perfil, llamadas recibidas y clics a tu web. Puedes comparar el retorno del SEO frente a lo que pagas en plataformas como Doctoralia. Sin tecnicismos, con datos reales.",
    },
  ];

  return (
    <>
      <SEOHead
        title="SEO para Psicólogos | Más Pacientes desde Google | slocal.es"
        description="Haz que tu consulta aparezca cuando alguien busca psicólogo en tu ciudad. Agenda llena sin depender de plataformas ni del boca a boca. Desde 147€/mes + IVA."
        canonical="/seo-para-psicologos"
        jsonLd={[breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema]}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <BreadcrumbNav items={[
              { label: "Inicio", href: "/" },
              { label: "SEO para Psicólogos" },
            ]} />
            <span className="inline-block border border-primary text-primary text-xs font-heading rounded-full px-4 py-1.5 mb-6">
              SEO para Psicólogos
            </span>
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              SEO para Psicólogos: Agenda Llena desde Google
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              Cada semana hay personas en tu ciudad buscando en Google "psicólogo para ansiedad", "terapia de pareja" o "psicólogo infantil". Están eligiendo a quién llamar ahora mismo. Si no apareces entre los tres primeros, esa persona llama a otro psicólogo. Lo gestionamos para que seas tú quien aparece — desde 147€/mes.
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
              [IMAGEN: Pantalla de móvil mostrando búsqueda "psicólogo ansiedad Valencia" en Google Maps con 3 consultas destacadas en el Local Pack]
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            Por qué tu consulta de psicología no aparece en Google
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground">
              <p>
                El boca a boca llena la agenda durante un tiempo. Pero es irregular — hay semanas con lista de espera y semanas con huecos. Y cada paciente que llega por recomendación depende de que otro paciente tuyo hable de ti en el momento justo. No puedes controlarlo ni escalarlo.
              </p>
              <p>
                Las plataformas como Doctoralia dan visibilidad, pero cobran comisión por cada paciente que te envían. Estás pagando para conseguir pacientes que podrían llegar directamente a ti sin intermediarios.
              </p>
            </div>
            <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground">
              <p>
                Cuando alguien decide buscar ayuda psicológica, lo primero que hace es escribir en Google. "Psicólogo en Valencia", "terapia para ansiedad en Barcelona", "psicólogo de pareja en Madrid". Esas búsquedas tienen una intención clara — esa persona ya ha decidido buscar ayuda y está eligiendo a quién llamar.
              </p>
              <p>
                Google Maps muestra tres consultas. Esas tres reciben el 60% de todos los contactos. Las que no aparecen no existen para ese paciente en ese momento. El problema no es la demanda — la hay y está creciendo. El problema es la visibilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            Cómo conseguimos que tu consulta reciba más pacientes desde Google
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

      {/* RESULTS */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            Resultados reales con psicólogos
          </h2>
          <p className="text-base text-muted-foreground font-body font-light mb-8">
            Viviane Custodio, psicóloga en Valencia, recibió 4 llamadas directas desde Google en su segundo mes con slocal.es. Empezó sin web ni ficha optimizada.
          </p>
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="font-heading text-lg md:text-xl mb-1">Viviane Custodio</p>
                <p className="text-sm text-muted-foreground font-body">Psicóloga · Valencia</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="font-heading text-3xl md:text-4xl text-primary leading-none">4</p>
                <p className="text-sm text-muted-foreground font-body mt-1">llamadas en el segundo mes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            Por qué slocal.es y no una plataforma o una agencia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-heading text-lg md:text-xl mb-4">Doctoralia o Psychology Today</h3>
              <p className="text-base leading-relaxed font-body font-light text-foreground">
                Pagas por cada paciente que te envían. El paciente llega comparándote con otros psicólogos en la misma plataforma. Si dejas de pagar, desapareces. No construyes nada propio.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg md:text-xl mb-4 text-primary">slocal.es</h3>
              <p className="text-base leading-relaxed font-body font-light text-foreground">
                Los pacientes llegan directamente a ti desde Google, sin compararte con nadie, sin comisiones. Cada mes que posicionas, tu visibilidad crece. Ese activo es tuyo — no desaparece cuando cancelas.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* MID CTA */}
      <section className="bg-warm-bg py-14">
        <div className="container max-w-3xl text-center">
          <p className="font-heading text-xl md:text-2xl mb-6 leading-snug">
            ¿Tienes semanas con huecos en la agenda? Google puede llenártela de forma constante.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-primary text-primary-foreground font-heading text-sm rounded-lg px-8 py-3.5 hover:bg-primary/90 transition-colors"
          >
            Hablemos →
          </Link>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            Especialidades de psicología que posicionamos en Google
          </h2>
          <p className="text-base text-muted-foreground font-body font-light mb-10 max-w-2xl">
            Cada especialidad tiene sus propias búsquedas. Creamos páginas específicas para cada una y para la zona donde ejerces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {specialties.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm font-body">
                  <span className="text-primary mt-0.5">→</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="border-2 border-dashed border-border bg-warm-bg rounded-xl aspect-[4/3] flex items-center justify-center p-6 text-center">
              <p className="text-sm text-muted-foreground font-body">
                [IMAGEN: Consulta de psicología acogedora — sillones, luz cálida, ambiente de confianza]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Preguntas frecuentes sobre SEO para psicólogos" items={faqs} />

      {/* CIUDADES */}
      <section className="py-12">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            SEO local para psicólogos en toda España
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 font-body font-light">
            Posicionamos consultas de psicología en toda España — tanto en ciudades con alta competencia como en mercados locales con oportunidad real.
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
        title="¿Tu consulta no aparece cuando alguien busca psicólogo en tu ciudad?"
        buttonText="Hablemos →"
      />
    </>
  );
};

export default PsicologosPage;
