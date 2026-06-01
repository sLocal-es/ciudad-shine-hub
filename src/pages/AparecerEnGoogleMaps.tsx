import { Link } from "react-router-dom";
import { cities } from "@/data/cities";
import SEOHead from "@/components/SEOHead";
import { MapsMobileMockup } from "@/components/visuals/SeoVisuals";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";

const WA_URL =
  "https://wa.me/34684780063?text=Hola%2C%20quiero%20aparecer%20en%20Google%20Maps";

const TITLE = "Aparecer en Google Maps";
const PATH = "/aparecer-en-google-maps";

const howSteps = [
  {
    n: "01",
    title: "Optimizamos tu ficha de Google Business Profile al completo",
    body: "Revisamos y configuramos cada campo: categorías principales y secundarias, atributos, descripción con keywords locales, fotos actualizadas, horarios, zona de servicio y productos o servicios. Todo lo que Google necesita para mostrarte en el mapa.",
  },
  {
    n: "02",
    title: "Creamos coherencia entre tu web y tu ficha",
    body: "Google cruza la información de tu ficha con tu web. Si hay inconsistencias en nombre, dirección, teléfono o servicios, te penaliza. Nos aseguramos de que todo coincida y refuerce tu posicionamiento local.",
  },
  {
    n: "03",
    title: "Gestionamos tu ficha de forma continua cada mes",
    body: "Publicamos posts en tu ficha, respondemos reseñas y mantenemos el perfil activo. Google premia la actividad constante con mejor posicionamiento en Maps.",
  },
  {
    n: "04",
    title: "Seguimiento mensual de tu posición en Google Maps",
    body: "Cada mes te mostramos en qué posición apareces para las búsquedas más importantes de tu negocio. Sin tecnicismos, con datos claros y comprensibles.",
  },
];

const faqs = [
  {
    q: "¿Cómo puedo aparecer en Google Maps con mi negocio?",
    a: "Para aparecer en Google Maps necesitas crear y verificar tu ficha en Google Business Profile, completar toda la información del negocio con categorías correctas, fotos y descripción optimizada, conseguir reseñas de clientes y mantener la ficha activa con publicaciones regulares. Cuanto más completa y activa esté tu ficha, mejor posición obtendrás en el mapa.",
  },
  {
    q: "¿Cuánto tarda en aparecer mi negocio en Google Maps?",
    a: "Una vez verificada la ficha, tu negocio aparece en Google Maps en pocos días. Posicionarte en los primeros resultados del Local Pack lleva entre 2 y 4 meses de optimización continua dependiendo de la competencia de tu sector y ciudad.",
  },
  {
    q: "¿Por qué mi negocio no aparece en Google Maps aunque esté registrado?",
    a: "Tener la ficha creada no es suficiente. Google evalúa relevancia, prominencia y proximidad. Una ficha incompleta, sin fotos, sin reseñas o sin actividad reciente tiene muy poca visibilidad frente a competidores que la gestionan activamente.",
  },
  {
    q: "¿Qué información necesita mi ficha para aparecer bien posicionado?",
    a: "Nombre exacto del negocio, categoría principal correcta, dirección o zona de servicio, teléfono, horarios actualizados, descripción con keywords locales, mínimo 10 fotos de calidad, respuestas a reseñas y publicaciones periódicas. Cada campo completo suma relevancia ante Google.",
  },
  {
    q: "¿Las reseñas de Google Maps afectan al posicionamiento?",
    a: "Sí, directamente. Las reseñas son uno de los factores más importantes del algoritmo local de Google. Más reseñas, más recientes y con mejor puntuación mejoran tu posición en el mapa. Responder a todas las reseñas también tiene impacto positivo en el ranking.",
  },
];

const AparecerEnGoogleMaps = () => {
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
    name: "Optimización de ficha en Google Maps",
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    areaServed: "España",
    offers: { "@type": "Offer", price: "147", priceCurrency: "EUR" },
  };

  return (
    <>
      <SEOHead
        title="Cómo Aparecer en Google Maps con tu Negocio Local | slocal.es"
        description="¿Tu negocio no aparece en Google Maps? Optimizamos tu ficha de Google Business Profile para que aparezcas cuando tus clientes te buscan. Desde 147€/mes + IVA."
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
              Cómo Aparecer en Google Maps con tu Negocio Local
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              Si alguien busca tu servicio en Google Maps y no te encuentra, está llamando a tu competencia. Optimizamos tu ficha de Google para que aparezcas en el mapa cuando más importa.
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
          <MapsMobileMockup />
        </div>
      </section>

      {/* EXPLAINER */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-6">
            Por qué tu negocio no aparece en Google Maps
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            Google Maps muestra los negocios que considera más relevantes para cada búsqueda. Si no apareces, no es porque Google no sepa que existes — es porque tu ficha no está optimizada para competir. Categorías incorrectas, descripciones vacías, fotos antiguas, horarios sin actualizar, pocas reseñas… cada detalle cuenta.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            El algoritmo de Google Maps prioriza tres factores: relevancia, distancia y prominencia. La distancia no la puedes controlar, pero la relevancia y la prominencia sí. Una ficha completa, activa y con reseñas recientes tiene muchas más probabilidades de aparecer en el Local Pack — los tres negocios destacados que aparecen con el mapa.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
            El error más común: crear la ficha y abandonarla. Google interpreta la inactividad como falta de relevancia y te penaliza bajando posiciones. Un negocio que actualiza su ficha, responde reseñas y mantiene coherencia entre su web y su perfil aparece antes.
          </p>
        </div>
      </section>

      {/* HOW WE SOLVE IT */}
      <section className="bg-warm-bg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Cómo conseguimos que aparezcas en Google Maps
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

      {/* SERVICIOS RELACIONADOS */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">Servicios relacionados</h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Si además de Google Maps quieres mejorar tu posicionamiento orgánico en Google, consulta nuestro servicio de{" "}
            <Link to="/seo-para-negocios-locales" className="text-primary hover:underline font-medium">
              SEO para negocios locales
            </Link>{" "}
            y nuestra guía sobre{" "}
            <Link to="/ficha-google-mi-negocio" className="text-primary hover:underline font-medium">
              optimización de ficha de Google Mi Negocio
            </Link>.
          </p>
        </div>
      </section>

      {/* PRECIO */}
      <section className="bg-warm-bg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8 text-center">
            Un plan, precio claro
          </h2>
          <div className="max-w-md mx-auto bg-card border border-border rounded-xl p-8 hover:border-primary transition-colors">
            <p className="font-heading text-4xl text-primary">147€</p>
            <p className="text-sm text-muted-foreground mt-1">/mes + IVA</p>
            <p className="text-sm text-foreground/80 mt-5 leading-relaxed">
              Optimización y gestión de ficha Google Business Profile + web + contenido mensual + seguimiento directo.
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
              Quiero aparecer en Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Preguntas frecuentes sobre Google Maps" items={faqs} />

      {/* CITY LINKS */}
      <section className="bg-warm-bg py-12">
        <div className="container">
          <h2 className="font-heading text-xl mb-6">Posicionamiento en Google Maps en toda España</h2>
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
            ¿Tu negocio no aparece en Google Maps? Lo solucionamos.
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

export default AparecerEnGoogleMaps;
