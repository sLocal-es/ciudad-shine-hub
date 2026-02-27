import { useLocation, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import PlanCards from "@/components/PlanCards";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

import { cities } from "@/data/cities";

const CityPage = () => {
  const location = useLocation();
  const slug = location.pathname.replace("/seo-local-", "");
  const city = cities.find((c) => c.slug === slug);

  if (!city) return <div className="container py-20 text-center">Ciudad no encontrada</div>;

  const otherCities = cities.filter((c) => c.slug !== slug).slice(0, 4);

  const faqs = [
    { q: `¿Cuánto tarda en posicionarse un negocio en Google en ${city.name}?`, a: `Los primeros resultados suelen verse entre el mes 2 y el mes 4. En ciudades con alta competencia como ${city.name} puede llevar algo más al inicio, pero los resultados son sostenibles porque no dependen de publicidad. A partir del mes 6, las posiciones se consolidan.` },
    { q: `¿Necesito ya tener web para empezar con el SEO en ${city.name}?`, a: `No. En el Nivel 1 creamos tu web desde cero, adaptada para posicionar en ${city.name}. Si ya tienes una, la optimizamos. Lo importante es que Google pueda leerla correctamente.` },
    { q: `¿Funciona para cualquier tipo de negocio local en ${city.name}?`, a: `Sí. Trabajamos con fontaneros, clínicas, peluquerías, talleres, restaurantes, asesorías y cualquier negocio que tenga clientes en ${city.name}.` },
    { q: "¿Qué diferencia hay entre SEO local y publicidad en Google?", a: "La publicidad funciona solo mientras pagas — cuando paras, desapareces. El SEO posiciona tu web de forma orgánica: los resultados se acumulan y se mantienen. Es más lento al principio pero mucho más rentable a largo plazo." },
    { q: `¿Cómo sé si mi negocio en ${city.name} está posicionando?`, a: "Cada mes recibes un informe con las posiciones ganadas, las visitas a tu web y qué búsquedas te están trayendo clientes. Sin tecnicismos, en lenguaje normal." },
    { q: "¿Tengo que firmar un contrato largo?", a: "El Nivel 1 es pago único, sin ningún compromiso. Los Niveles 2 y 3 tienen mínimo 6 meses porque el SEO necesita ese tiempo para mostrar resultados reales. Después puedes continuar o parar cuando quieras." },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "Localidades", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 3, name: `SEO Local ${city.name}`, item: `https://slocal.es/seo-local-${city.slug}` },
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "slocal.es",
    url: "https://slocal.es",
    email: "hola@slocal.es",
    areaServed: city.name,
  };

  return (
    <>
      <SEOHead
        title={`SEO Local ${city.name} | Aparecer en Google para Negocios | slocal.es`}
        description={`¿Tu negocio en ${city.name} no aparece en Google? Activamos el sistema que te posiciona por delante de tu competencia. Sin agencias, sin humo.`}
        canonical={`/seo-local-${city.slug}`}
        jsonLd={[breadcrumbSchema, faqSchema, localBusinessSchema]}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <BreadcrumbNav items={[
              { label: "Inicio", href: "/" },
              { label: "Localidades" },
              { label: `SEO Local ${city.name}` },
            ]} />
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              SEO Local en {city.name}: Que Tu Negocio Aparezca Primero en Google
            </h1>
            <h2 className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              El sistema que posiciona negocios en {city.name} por delante de su competencia — mes a mes, sin agencias.
            </h2>
            <Link to="/contacto" className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors inline-block">
              Empezar en {city.name} →
            </Link>
          </div>
          <img src={city.image} alt={`Ciudad de ${city.name}`} className="rounded-xl w-full h-[340px] object-cover" loading="lazy" />
        </div>
      </section>

      {/* INTRO TEXT */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            ¿Por qué los negocios en {city.name} necesitan SEO local?
          </h2>
          {city.intro.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">{p}</p>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-warm-bg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Qué incluye el sistema en {city.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: `Optimizamos tu ficha de Google en ${city.name}`, body: `Configuramos y optimizamos tu Google Business Profile para que aparezcas en el mapa cuando alguien busca tu servicio en ${city.name}. Fotos, categorías, horarios, descripciones — todo listo.` },
              { title: "Creamos la web que Google quiere leer", body: `Una web con páginas específicas para tus servicios en ${city.name}. Estructura clara, contenido relevante, velocidad técnica. Todo lo que Google necesita para posicionarte.` },
              { title: "Seguimiento mensual de posiciones", body: `Cada mes un informe con las posiciones que has ganado, las visitas recibidas y qué búsquedas te están trayendo clientes en ${city.name}. Sin tecnicismos.` },
            ].map((card) => (
              <div key={card.title} className="bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:border-primary hover:-translate-y-[3px]">
                <h3 className="font-heading text-base mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-3">Planes para negocios en {city.name}</h2>
          <p className="text-sm text-muted-foreground mb-8">Trabajamos con negocios de {city.name} y de toda España de forma remota.</p>
          <PlanCards />
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="bg-warm-bg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">Encuéntranos</h2>
          <div
            role="img"
            aria-label="Mapa de Google Maps"
            className="bg-warm-bg border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-2 text-muted-foreground text-[13px] text-center p-5"
            style={{ height: "280px" }}
          >
            <span className="text-[28px]">🗺</span>
            <span>[MAPA: iframe Google Maps — reemplazar con embed real de slocal.es]</span>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            hola@slocal.es · Respondemos en menos de 24h
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-dark-bg text-dark-fg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8 text-center">
            Lo que dicen los negocios que ya están posicionando
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card text-card-foreground rounded-xl p-6 shadow-sm">
                <div className="text-primary mb-3">★★★★★</div>
                <p className="text-sm italic text-muted-foreground mb-4">
                  "Reseña real de cliente — próximamente"
                </p>
                <p className="text-xs text-muted-foreground">
                  [Nombre del negocio · {city.name}]
                </p>
                <div className="w-6 h-6 rounded-full bg-muted mt-3 flex items-center justify-center text-[10px] text-muted-foreground">G</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-dark-fg/40 mt-6">
            Reseñas verificadas de Google Business Profile.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title={`Preguntas frecuentes sobre SEO local en ${city.name}`} items={faqs} />

      {/* RELATED CITIES */}
      <section className="bg-warm-bg py-12">
        <div className="container">
          <h2 className="font-heading text-xl mb-6">También posicionamos en otras ciudades</h2>
          <div className="flex flex-wrap gap-3">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                to={`/seo-local-${c.slug}`}
                className="border border-border bg-card rounded-full px-5 py-2 text-sm font-heading hover:border-primary hover:text-primary transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection title={`¿Listo para que tu negocio en ${city.name} aparezca primero?`} buttonText="Empezar ahora →" />
    </>
  );
};

export default CityPage;
