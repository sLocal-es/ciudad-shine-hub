import { Link } from "react-router-dom";
import { MapPin, FileText, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import HeroAuditForm from "@/components/cordoba/HeroAuditForm";

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

  const localBusinessDetailedSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Seo Local en Córdoba | Slocal",
    description: "Servicio de SEO local y posicionamiento en Google Maps para autónomos y pymes en Córdoba.",
    url: "https://slocal.es/seo-local-cordoba",
    telephone: "+3684780063",
    email: "info@slocal.es",
    areaServed: {
      "@type": "City",
      name: "Córdoba",
      sameAs: "https://www.wikidata.org/wiki/Q5818",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.8882,
      longitude: -4.7796,
    },
    sameAs: "https://slocal.es/seo-local-cordoba",
    priceRange: "147€/mes + IVA",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "14:00",
      },
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

  return (
    <>
      <SEOHead
        title="SEO Local en Córdoba para Negocios | Aparecer en Google Maps | slocal.es"
        description="Haz que tu negocio en Córdoba aparezca cuando tus clientes te buscan en Google. Más llamadas, más clientes locales. Desde 147€/mes + IVA."
        canonical="/seo-local-cordoba"
        jsonLd={[serviceSchema, breadcrumbSchema, localBusinessSchema, localBusinessDetailedSchema, faqSchema]}
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
          </div>
          <HeroAuditForm />
        </div>
      </section>

      {/* MAPA + BARRIOS */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8 max-w-3xl">
            SEO Local en Córdoba: trabajamos tu zona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <iframe
              title="Mapa de Córdoba"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46931.122258679665!2d-4.837975406111342!3d37.91270327681709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac51e84256737de1%3A0xba193d08e9882037!2sSeo%20Local%20en%20C%C3%B3rdoba%20%7C%20Slocal!5e0!3m2!1sen!2ses!4v1779114464348!5m2!1sen!2ses"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div>
              <h3 className="font-heading text-xl md:text-2xl mb-5">
                Barrios y zonas donde posicionamos negocios
              </h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm md:text-base text-foreground mb-6">
                {[
                  "Casco Histórico",
                  "Ciudad Jardín",
                  "El Brillante",
                  "Poniente",
                  "Sector Sur",
                  "La Fuensanta",
                  "Zoco",
                  "Fátima-Levante",
                  "El Naranjo",
                  "Cruz de Juárez",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                Si tu negocio está en Córdoba y tus clientes te buscan en Google, te posicionamos donde viven: barrio a barrio, búsqueda a búsqueda.
              </p>
              <Link
                to="/contacto"
                className="inline-block bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors"
              >
                Analiza tu negocio gratis →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SISTEMA — 3 columnas */}
      <section className="bg-warm-bg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-10 max-w-3xl">
            El sistema que hace que te llamen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                Icon: MapPin,
                title: "Tu ficha de Google, activa",
                body:
                  "Optimizamos cada campo de tu perfil para que aparezcas cuando alguien busca tu servicio cerca. Categorías, fotos, reseñas, zona de servicio — todo trabajado para que Google te muestre antes que a tu competencia en Córdoba.",
              },
              {
                Icon: FileText,
                title: "Una página para cada servicio y zona",
                body:
                  "Creamos páginas específicas para cada servicio que ofreces y cada zona de Córdoba donde quieres trabajar. Cuando alguien busca 'fontanero en el Casco Histórico' o 'fisioterapeuta en Ciudad Jardín', encuentra tu negocio.",
              },
              {
                Icon: TrendingUp,
                title: "Más clientes cada mes",
                body:
                  "El SEO local es acumulativo. Cada mes que trabajamos tu presencia, más búsquedas te encuentran a ti. Y cada cliente que llega de Google tiene coste cero — no pagas por cada llamada.",
              },
            ].map(({ Icon, title, body }) => (
              <div key={title}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg md:text-xl mb-3">{title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASO PRÁCTICO */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-10 max-w-3xl">
            Lo que consigue el sistema en la práctica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                Grupo TEI no aparecía en Google. Su competencia posicionaba con webs básicas de 4 o 5 páginas y se llevaba todos los clientes.
              </p>
              <p>
                Creamos una página específica para cada servicio en cada barrio de Madrid donde querían trabajar. Optimizamos su ficha de Google con las señales locales correctas.
              </p>
              <p>
                En menos de 2 meses empezaron a aparecer en la primera página de Google para búsquedas como "empresa de reformas en Chamberí" o "instalación de suelos en Salamanca". Las llamadas empezaron a llegar sin pagar por cada una.
              </p>
              <p className="text-xs italic">
                Tu negocio en Córdoba tiene la misma oportunidad. La competencia digital aquí todavía es menor que en Madrid.
              </p>
              <Link
                to="/contacto"
                className="inline-block mt-2 bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors"
              >
                Analiza tu negocio gratis →
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { n: "2 meses", d: "hasta primera página de Google" },
                { n: "0€", d: "coste por cada llamada recibida" },
                { n: "Barrio a barrio", d: "presencia construida donde querían trabajar" },
              ].map((m) => (
                <div key={m.n} className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <div className="font-heading text-3xl md:text-4xl text-primary mb-1">{m.n}</div>
                  <div className="text-sm text-muted-foreground">{m.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-warm-bg py-16">
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

      {/* SECTORES */}
      <section className="py-16">
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
