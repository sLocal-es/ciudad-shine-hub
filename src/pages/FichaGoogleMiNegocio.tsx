import { Link } from "react-router-dom";
import { cities } from "@/data/cities";
import SEOHead from "@/components/SEOHead";
import { GBPProfileMockup } from "@/components/visuals/SeoVisuals";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";

const WA_URL =
  "https://wa.me/34684780063?text=Hola%2C%20quiero%20optimizar%20mi%20ficha%20de%20Google";

const TITLE = "Ficha de Google Mi Negocio";
const PATH = "/ficha-google-mi-negocio";

const howSteps = [
  {
    n: "01",
    title: "Configuración profesional completa de Google Business Profile",
    body: "Revisamos o creamos tu ficha desde cero: categoría principal y secundarias, atributos del negocio, descripción optimizada con keywords locales, fotos profesionales, horarios, zona de servicio, productos y servicios. Cada campo optimizado para maximizar tu visibilidad en Google.",
  },
  {
    n: "02",
    title: "Gestión continua de reseñas y publicaciones",
    body: "Las reseñas son uno de los factores más importantes del algoritmo local de Google. Te ayudamos a conseguir más reseñas y las respondemos correctamente. Publicamos posts periódicos en tu ficha para mantenerla activa y relevante ante Google.",
  },
  {
    n: "03",
    title: "Coherencia NAP en toda tu presencia digital",
    body: "Google cruza el nombre, dirección y teléfono de tu ficha con tu web y otros directorios. Si hay inconsistencias, penaliza tu posición. Nos aseguramos de que tu información sea idéntica en todas partes.",
  },
  {
    n: "04",
    title: "Seguimiento mensual de rendimiento",
    body: "Cada mes revisamos las estadísticas de tu ficha: búsquedas, clics, llamadas y solicitudes de ruta. Te informamos de la evolución con datos claros y ajustamos la estrategia cuando es necesario.",
  },
];

const faqs = [
  {
    q: "¿Qué es Google Mi Negocio y por qué es importante?",
    a: "Google Mi Negocio (ahora Google Business Profile) es el perfil gratuito que gestiona cómo aparece tu negocio en Google Maps y en las búsquedas locales. Es importante porque es lo primero que ven tus clientes cuando te buscan: tu nombre, fotos, reseñas, horario y cómo contactar contigo. Sin él, tu negocio es invisible en las búsquedas locales.",
  },
  {
    q: "¿Cómo optimizo mi ficha de Google para aparecer primero?",
    a: "Para aparecer en los primeros resultados necesitas: completar todos los campos de la ficha, elegir las categorías correctas, subir fotos de calidad actualizadas, conseguir reseñas positivas y responderlas, publicar actualizaciones periódicas y mantener coherencia entre tu ficha y tu web. La optimización continua es más efectiva que hacerlo una sola vez.",
  },
  {
    q: "¿Con qué frecuencia debo actualizar mi ficha de Google?",
    a: "Google premia la actividad continua. Lo recomendable es publicar al menos 2-4 posts al mes, actualizar fotos cada 2-3 meses, responder todas las reseñas en menos de 48 horas y revisar que la información esté actualizada (horarios, servicios, teléfono). La inactividad penaliza el posicionamiento.",
  },
  {
    q: "¿Las reseñas afectan a mi posición en Google?",
    a: "Sí, directamente. Las reseñas son uno de los tres factores principales del algoritmo local de Google junto con relevancia y proximidad. Más reseñas, más recientes y con mejor puntuación media mejoran tu posición en Google Maps. Responder a todas las reseñas también tiene impacto positivo en el ranking.",
  },
  {
    q: "¿Puedo gestionar mi ficha de Google yo solo?",
    a: "Técnicamente sí, pero requiere tiempo y conocimiento continuo del algoritmo local de Google. La mayoría de propietarios de negocios locales no tienen tiempo para hacer un seguimiento mensual, responder reseñas a tiempo, publicar contenido optimizado y analizar estadísticas. Por eso tiene sentido delegar esta gestión a un especialista.",
  },
];

const FichaGoogleMiNegocio = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: TITLE, item: `https://slocal.es${PATH}` },
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
    name: "Optimización de ficha Google Business Profile",
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    areaServed: "España",
    offers: { "@type": "Offer", price: "147", priceCurrency: "EUR" },
  };

  return (
    <>
      <SEOHead
        title="Ficha de Google Mi Negocio: Optimización Google Business Profile | slocal.es"
        description="Optimizamos tu ficha de Google Mi Negocio (Google Business Profile) para que aparezcas cuando tus clientes te buscan. Gestión continua desde 147€/mes + IVA."
        canonical={PATH}
        jsonLd={[breadcrumbSchema, faqSchema, serviceSchema]}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <BreadcrumbNav
              items={[
                { label: "Inicio", href: "/" },
                { label: TITLE },
              ]}
            />
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              Ficha de Google Mi Negocio: Optimización y Gestión Profesional
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              Tu ficha de Google Business Profile es lo primero que ven tus clientes cuando te buscan. Si no está optimizada y activa, estás perdiendo clientes cada día frente a competidores que sí la cuidan.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors inline-block"
            >
              Hablemos por WhatsApp →
            </a>
          </div>
          <ImagePlaceholder
            description="FOTO: ficha de Google Business Profile optimizada con reseñas y fotos"
            height="340px"
          />
        </div>
      </section>

      {/* EXPLAINER */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            Por qué tu ficha de Google no te está trayendo clientes
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            Google Mi Negocio — ahora llamado Google Business Profile — es la herramienta gratuita de Google que permite a los negocios locales aparecer en Google Maps y en los resultados de búsqueda local. Es tu escaparate digital: lo primero que ven tus clientes potenciales cuando te buscan en Google.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            El problema es que la mayoría de fichas están incompletas o desactualizadas. Una ficha sin fotos recientes, sin descripción optimizada, sin reseñas o sin actualizaciones periódicas le dice a Google que tu negocio no es relevante. Y si Google no te considera relevante, no te muestra — así de simple.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            Optimizar tu ficha de Google no es solo rellenar campos. Las categorías que eliges, las palabras de la descripción, la frecuencia de publicaciones y cómo gestionas las reseñas determinan directamente tu posición en Google Maps y en las búsquedas locales.
          </p>
        </div>
      </section>

      {/* HOW WE SOLVE IT */}
      <section className="bg-warm-bg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Qué incluye la optimización de tu ficha de Google
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {howSteps.map((step) => (
              <div
                key={step.n}
                className="bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:border-primary hover:-translate-y-[3px]"
              >
                <div className="font-heading text-primary text-sm mb-2">{step.n}</div>
                <h3 className="font-heading text-base mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GMB vs GBP */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            Google Mi Negocio y Google Business Profile: ¿es lo mismo?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            Sí. Google renombró Google Mi Negocio como Google Business Profile en 2022, pero es exactamente la misma herramienta. Si buscas "Google Mi Negocio", "ficha de Google" o "Google Business Profile" estás hablando del mismo perfil gratuito que gestiona la presencia de tu negocio en Google Maps y búsquedas locales. En slocal.es lo llamamos indistintamente, pero el servicio es el mismo: optimizar y gestionar ese perfil para que aparezcas primero cuando tus clientes te buscan.
          </p>
        </div>
      </section>

      {/* SERVICIOS RELACIONADOS */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">Servicios relacionados</h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            La ficha de Google es el punto de partida, pero para resultados completos combínala con nuestro servicio de{" "}
            <Link to="/seo-para-negocios-locales" className="text-primary hover:underline font-medium">
              SEO para negocios locales
            </Link>{" "}
            y aprende a{" "}
            <Link to="/aparecer-en-google-maps" className="text-primary hover:underline font-medium">
              aparecer en Google Maps
            </Link>{" "}
            en las primeras posiciones.
          </p>
        </div>
      </section>

      {/* PRECIO */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8 text-center">
            Un plan, precio claro
          </h2>
          <div className="max-w-md mx-auto bg-card border border-border rounded-xl p-8 hover:border-primary transition-colors">
            <p className="font-heading text-4xl text-primary">147€</p>
            <p className="text-sm text-muted-foreground mt-1">/mes + IVA</p>
            <p className="text-sm text-foreground/80 mt-5 leading-relaxed">
              Optimización y gestión de Google Business Profile + web + contenido mensual + seguimiento directo.
            </p>
            <ul className="mt-5 space-y-2">
              <li className="text-sm flex items-start gap-2 text-foreground/80">
                <span className="text-primary mt-0.5">✓</span> Sin contratos largos
              </li>
              <li className="text-sm flex items-start gap-2 text-foreground/80">
                <span className="text-primary mt-0.5">✓</span> Cancelas cuando quieras
              </li>
            </ul>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-center bg-primary text-primary-foreground rounded-lg py-3 font-heading text-sm hover:bg-primary/90 transition-colors"
            >
              Quiero optimizar mi ficha →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Preguntas frecuentes sobre la ficha de Google Mi Negocio" items={faqs} />

      {/* CITY LINKS */}
      <section className="bg-warm-bg py-12">
        <div className="container">
          <h2 className="font-heading text-xl mb-6">Gestión de ficha de Google en toda España</h2>
          <div className="flex flex-wrap gap-3">
            {cities.map((c) => (
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
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-6">
            Tu ficha de Google puede traerte clientes cada día. Solo necesita estar optimizada.
          </h2>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-card text-primary font-heading text-sm rounded-lg px-8 py-3 hover:bg-card/90 transition-colors"
          >
            Hablemos →
          </a>
        </div>
      </section>
    </>
  );
};

export default FichaGoogleMiNegocio;
