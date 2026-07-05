import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SectorHeroDark from "@/components/sector/SectorHeroDark";

const AbogadosPage = () => {
  const faqs = [
    {
      q: "¿Cuándo empieza a recibir más consultas mi despacho?",
      a: "Los primeros resultados visibles aparecen entre el mes 2 y el mes 4: más visitas al perfil de Google, más llamadas directas y mejora de posiciones en Maps. A partir del mes 6 el flujo se consolida. En especialidades con menos competencia digital los resultados llegan antes.",
    },
    {
      q: "¿Funciona el SEO local para despachos pequeños o solo para grandes firmas?",
      a: "El SEO local favorece precisamente a los despachos pequeños y especializados. Un despacho de derecho laboral bien posicionado en su ciudad aparece antes que una gran firma generalista sin presencia local trabajada. La especialización es una ventaja, no un handicap.",
    },
    {
      q: "¿Necesito tener web para hacer SEO local como abogado?",
      a: "Una web optimizada por área de práctica y ciudad es lo que permite aparecer en los resultados orgánicos además de en Google Maps. El servicio incluye la web desde el inicio — no necesitas nada previo para arrancar.",
    },
    {
      q: "¿Puedo posicionarme para varias especialidades jurídicas?",
      a: "Sí. Creamos páginas específicas para cada área de práctica — derecho laboral, familia, herencias, penal, mercantil — optimizadas para las búsquedas reales de cada especialidad. Cada página ataca búsquedas distintas y suma tráfico cualificado.",
    },
    {
      q: "¿Qué diferencia hay entre SEO local y Google Ads para abogados?",
      a: "Google Ads te da visibilidad inmediata pagando por cada clic. En derecho, el coste por clic puede ser de 5 a 15€. El SEO local construye una presencia que genera consultas de forma orgánica, sin coste por clic, con retorno creciente mes a mes.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "SEO para Abogados", item: "https://slocal.es/seo-para-abogados" },
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
    name: "SEO para Abogados",
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    areaServed: "España",
    description: "Servicio de SEO local para despachos de abogados en España",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "slocal.es",
    url: "https://slocal.es",
    description: "SEO local para abogados en España",
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

  const practiceAreas = [
    "Derecho laboral y despidos",
    "Derecho de familia y divorcios",
    "Herencias y sucesiones",
    "Derecho penal",
    "Derecho civil",
    "Derecho mercantil",
    "Extranjería e inmigración",
    "Arrendamientos e inmobiliario",
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
    { label: "SEO para inmobiliarias", slug: "seo-para-inmobiliarias" },
    { label: "SEO para dentistas", slug: "seo-para-dentistas" },
    { label: "SEO para psicólogos", slug: "seo-para-psicologos" },
  ];

  const steps = [
    {
      n: "01",
      h: "Tu despacho aparece cuando alguien busca tu especialidad en tu ciudad",
      p: 'Optimizamos tu ficha de Google Business Profile con las categorías legales correctas, descripción con las keywords que usan tus clientes ("abogado de familia", "abogado penal", "asesoría laboral"), fotos del despacho y zona de servicio por ciudad y barrio. Cuando alguien busca "abogado divorcio Valencia" o "laboralista cerca de mí", tu despacho aparece en el mapa con botón de llamada directo.',
    },
    {
      n: "02",
      h: "Una web con página por especialidad jurídica y ciudad",
      p: 'Creamos páginas específicas para cada área de práctica. "Abogado de herencias en Sevilla", "abogado laboral en Bilbao", "divorcios de mutuo acuerdo en Barcelona" — cada búsqueda con intención de contratar tiene su propia página. El visitante que llega sabe exactamente para qué te necesita y tú eres la respuesta obvia.',
    },
    {
      n: "03",
      h: "Informe mensual de consultas y posiciones en Google",
      p: "Cada mes sabes cuántas personas han visto tu ficha, cuántas han llamado y qué posiciones has ganado en Google Maps para las búsquedas más importantes de tu especialidad. Sin tecnicismos. Solo los datos que importan.",
    },
  ];

  return (
    <>
      <SEOHead
        title="SEO para Abogados | Más Consultas y Casos desde Google | slocal.es"
        description="Cuando alguien necesita un abogado, busca en Google. Haz que tu despacho aparezca primero — más consultas, más casos firmados. Desde 147€/mes + IVA."
        canonical="/seo-para-abogados"
        jsonLd={[breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema]}
      />

      {/* HERO */}
      <SectorHeroDark
        breadcrumbLabel="SEO para Abogados"
        eyebrow="SEO para Abogados"
        h1={<h1>SEO para Abogados: Más Consultas y Casos desde Google</h1>}
        subtitle={
          <>Tu despacho tiene años de experiencia y clientes satisfechos. Pero si alguien en tu ciudad busca "abogado laboralista" o "abogado de divorcios" en Google ahora mismo y no apareces tú, esa consulta se la lleva otro despacho. Cada día que no estás en el top 3 de Google Maps son casos que pierdes sin saberlo.</>
        }
        phoneQuery="abogado laboralista cerca de mí"
        phoneResults={[
          { name: "Bufete Álvarez & Asociados", rating: 4.9, reviews: 142, category: "Abogado laboralista", hours: "Abierto", distance: "a 600 m" },
          { name: "Despacho Jurídico Central", rating: 4.8, reviews: 98, category: "Abogado", hours: "Abierto", distance: "a 1,1 km" },
          { name: "Legal Group Familia", rating: 4.7, reviews: 76, category: "Abogado de familia", hours: "Abre a las 9:00", distance: "a 1,5 km" },
        ]}
      />

      {/* PROBLEM */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            Por qué tu despacho de abogados no aparece en Google
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground">
              <p>
                El 78% de quienes necesitan un abogado empieza buscando en Google. Cuando alguien tiene un despido, un divorcio o un problema de herencia, busca "abogado laboralista en Madrid" o "abogado de divorcios en Barcelona" y llama a uno de los tres primeros que aparecen en el mapa. El 90% de esas personas contacta con alguno de esos tres. El resto de despachos no existe para ese cliente en ese momento.
              </p>
            </div>
            <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground">
              <p>
                El error más común: tener ficha de Google creada pero sin gestionar. Sin fotos recientes, sin respuestas a reseñas, sin publicaciones periódicas, Google interpreta que el despacho no es relevante y lo baja en el ranking. En el sector legal, donde la competencia es alta, esa diferencia puede ser de 10 a 15 consultas al mes que van a otro despacho. La especialización y la proximidad son tus ventajas — pero solo si Google las conoce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            Cómo posicionamos tu despacho de abogados en Google
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

      {/* PRACTICE AREAS */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            Áreas de práctica de abogados que posicionamos en Google
          </h2>
          <p className="text-base text-muted-foreground font-body font-light mb-10 max-w-2xl">
            Cada especialidad jurídica tiene sus propias búsquedas. Creamos páginas específicas para cada área de práctica y ciudad.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {practiceAreas.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm font-body">
                  <span className="text-primary mt-0.5">→</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="border-2 border-dashed border-border bg-warm-bg rounded-xl aspect-[4/3] flex items-center justify-center p-6 text-center">
              <p className="text-sm text-muted-foreground font-body">
                [IMAGEN: Despacho de abogados profesional — sala de reuniones con libros jurídicos]
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <FAQSection title="Preguntas frecuentes sobre SEO para abogados" items={faqs} />

      {/* CIUDADES */}
      <section className="py-12">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            SEO local para abogados en toda España
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 font-body font-light">
            Posicionamos despachos de abogados en toda España — en ciudades con alta competencia y en mercados locales donde todavía hay oportunidad real.
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
        title="¿Tu despacho no aparece cuando alguien busca un abogado en tu ciudad?"
        buttonText="Hablemos →"
      />
    </>
  );
};

export default AbogadosPage;
