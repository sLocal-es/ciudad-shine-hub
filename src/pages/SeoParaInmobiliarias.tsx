import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SectorHeroDark from "@/components/sector/SectorHeroDark";

const SeoParaInmobiliarias = () => {
  const faqs = [
    {
      q: "¿Cuándo empieza mi inmobiliaria a recibir más contactos desde Google?",
      a: "Los primeros resultados visibles aparecen entre el mes 2 y el mes 4: más visitas al perfil de Google, más llamadas y más formularios desde la web. A partir del mes 6 el flujo se consolida.",
    },
    {
      q: "¿Funciona el SEO local para inmobiliarias pequeñas?",
      a: "Sí. El SEO local favorece a las inmobiliarias de barrio frente a los grandes portales. Trabajando bien tu zona, apareces antes que franquicias generalistas sin presencia local cuidada.",
    },
    {
      q: "¿Necesito tener web para hacer SEO local como inmobiliaria?",
      a: "Una web optimizada por zona y tipo de operación es lo que permite aparecer en los resultados orgánicos además de en Google Maps. El servicio incluye la web desde el inicio.",
    },
    {
      q: "¿Puedo posicionarme para varias zonas o tipos de inmueble?",
      a: "Sí. Creamos páginas específicas para cada zona y tipo de operación — pisos en venta, alquiler, locales comerciales, obra nueva — optimizadas para las búsquedas reales de cada barrio.",
    },
    {
      q: "¿Qué diferencia hay entre SEO local y portales como Idealista?",
      a: "Los portales te cobran por anuncio y compites con cientos de inmobiliarias. El SEO local construye tu propia presencia en Google: contactos directos, sin intermediarios y sin coste por lead.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "SEO para Inmobiliarias", item: "https://slocal.es/seo-para-inmobiliarias" },
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
    name: "SEO para Inmobiliarias",
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    areaServed: "España",
    description: "Servicio de SEO local para inmobiliarias en España",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "slocal.es",
    url: "https://slocal.es",
    description: "SEO local para inmobiliarias en España",
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

  const operationTypes = [
    "Pisos en venta por zona",
    "Pisos en alquiler por barrio",
    "Locales comerciales",
    "Obra nueva y promociones",
    "Chalets y viviendas unifamiliares",
    "Inversión y rentabilidad",
    "Alquiler de temporada",
    "Tasaciones y valoraciones",
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
      h: "Tu inmobiliaria aparece cuando alguien busca pisos en tu zona",
      p: 'Optimizamos tu ficha de Google Business Profile con las categorías correctas, descripción con las keywords reales ("inmobiliaria en Chamberí", "pisos en venta Gracia"), fotos de la oficina y del equipo, y zona de servicio por barrios. Cuando alguien busca "inmobiliaria cerca de mí" o "pisos en venta en mi barrio", apareces en el mapa con botón de llamada directo.',
    },
    {
      n: "02",
      h: "Una web con página por zona y tipo de operación",
      p: 'Creamos páginas específicas para cada barrio y tipo de inmueble. "Pisos en venta en Salamanca", "alquiler en Eixample", "obra nueva en Málaga este" — cada búsqueda con intención real tiene su propia página. El visitante que llega encuentra exactamente lo que busca.',
    },
    {
      n: "03",
      h: "Informe mensual de contactos y posiciones en Google",
      p: "Cada mes sabes cuántas personas han visto tu ficha, cuántas han llamado, cuántos formularios has recibido y qué posiciones has ganado en Google Maps para las búsquedas más importantes de tu zona. Sin tecnicismos. Solo los datos que importan.",
    },
  ];

  return (
    <>
      <SEOHead
        title="SEO para Inmobiliarias | Más Contactos desde Google | slocal.es"
        description="Cuando alguien busca piso en tu zona, busca en Google. Haz que tu inmobiliaria aparezca primero — más contactos, sin depender de portales. Desde 147€/mes + IVA."
        canonical="/seo-para-inmobiliarias"
        jsonLd={[breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema]}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <BreadcrumbNav items={[
              { label: "Inicio", href: "/" },
              { label: "SEO para Inmobiliarias" },
            ]} />
            <span className="inline-block border border-primary text-primary text-xs font-heading rounded-full px-4 py-1.5 mb-6">
              SEO para Inmobiliarias
            </span>
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              SEO para Inmobiliarias: Más Contactos desde Google
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              Tu inmobiliaria conoce su zona como nadie. Pero si alguien busca "pisos en venta" o "inmobiliaria cerca de mí" en tu barrio y no apareces tú, ese contacto se lo lleva un portal o la competencia. Cada día que no estás en el top 3 de Google Maps son clientes que pierdes sin saberlo.
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
              Pantalla de móvil mostrando búsqueda "inmobiliaria Madrid centro" en Google Maps con 3 resultados destacados
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            Por qué tu inmobiliaria no aparece en Google
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground">
              <p>
                El 82% de quienes buscan vivienda empieza en Google. Cuando alguien quiere comprar o alquilar, busca "pisos en venta en [barrio]" o "inmobiliaria en [zona]" y contacta con uno de los tres primeros que aparecen en el mapa. El resto de inmobiliarias no existe para ese cliente en ese momento.
              </p>
            </div>
            <div className="space-y-4 text-base leading-relaxed font-body font-light text-foreground">
              <p>
                El error más común: depender exclusivamente de portales como Idealista o Fotocasa, pagando por cada anuncio y compitiendo con cientos de inmobiliarias por el mismo cliente. Mientras tanto, tu ficha de Google está sin gestionar, sin fotos recientes, sin reseñas trabajadas. La cercanía y el conocimiento de la zona son tu ventaja — pero solo si Google los conoce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            Cómo posicionamos tu inmobiliaria en Google
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

      {/* OPERATION TYPES */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            Tipos de operaciones inmobiliarias que posicionamos en Google
          </h2>
          <p className="text-base text-muted-foreground font-body font-light mb-10 max-w-2xl">
            Cada tipo de inmueble y cada zona tiene sus propias búsquedas. Creamos páginas específicas para cada combinación.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {operationTypes.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm font-body">
                  <span className="text-primary mt-0.5">→</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="border-2 border-dashed border-border bg-warm-bg rounded-xl aspect-[4/3] flex items-center justify-center p-6 text-center">
              <p className="text-sm text-muted-foreground font-body">
                Oficina inmobiliaria moderna con escaparate de pisos en venta
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <FAQSection title="Preguntas frecuentes sobre SEO para inmobiliarias" items={faqs} />

      {/* CIUDADES */}
      <section className="py-12">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            SEO local para inmobiliarias en toda España
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 font-body font-light">
            Posicionamos inmobiliarias en toda España — en grandes ciudades y en mercados locales donde todavía hay oportunidad real.
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
        title="¿Tu inmobiliaria no aparece cuando alguien busca piso en tu zona?"
        buttonText="Hablemos →"
      />
    </>
  );
};

export default SeoParaInmobiliarias;
