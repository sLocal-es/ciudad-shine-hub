import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import heroImg from "@/assets/madrid/madrid-hero.jpg";
import mobileImg from "@/assets/madrid/madrid-maps-mobile.jpg";
import shopImg from "@/assets/madrid/madrid-shop-owner.jpg";
import meetingImg from "@/assets/madrid/madrid-meeting.jpg";
import neighborhoodsImg from "@/assets/madrid/madrid-neighborhoods.jpg";
import reviewsImg from "@/assets/madrid/madrid-reviews.jpg";

const URL = "https://slocal.es/seo-local-madrid";

const SECTORES = [
  "Clínicas y centros médicos",
  "Fisioterapeutas",
  "Dentistas",
  "Abogados y despachos",
  "Reformas y obras",
  "Fontaneros y oficios",
  "Psicólogos",
  "Gimnasios y entrenadores",
  "Inmobiliarias",
  "Comercio local",
  "Restauración",
  "Autónomos y servicios",
];

const ZONAS = [
  "Chamberí", "Salamanca", "Centro", "Retiro", "Chamartín", "Tetuán",
  "Arganzuela", "Moncloa-Aravaca", "Latina", "Carabanchel", "Usera", "Puente de Vallecas",
  "Moratalaz", "Ciudad Lineal", "Hortaleza", "San Blas",
  "Móstoles", "Alcalá de Henares", "Fuenlabrada", "Getafe", "Leganés", "Alcorcón",
];

const FAQS = [
  {
    q: "¿Qué es exactamente el SEO Local y en qué se diferencia del SEO tradicional?",
    a: "El SEO Local trabaja para que tu negocio aparezca cuando alguien busca un servicio cerca de su ubicación: en Google Maps, en el bloque de resultados locales (el 'Local Pack') y en búsquedas con intención geográfica. El SEO tradicional compite por consultas amplias a nivel nacional. Para un negocio físico en Madrid, el SEO Local es lo que realmente trae llamadas y clientes a la puerta.",
  },
  {
    q: "¿Cuánto tarda en notarse el trabajo en mi negocio?",
    a: "Las primeras mejoras en la ficha de Google Business Profile son visibles en las primeras semanas. Las posiciones en el mapa empiezan a moverse a partir del segundo o tercer mes y se consolidan entre el cuarto y el sexto. Es un trabajo continuo, no una campaña con fecha de fin.",
  },
  {
    q: "¿Tengo que firmar permanencia?",
    a: "No. El servicio es mes a mes. Si en algún momento sientes que no te aporta, lo cancelas y no hay penalización.",
  },
  {
    q: "¿Necesito una web para que funcione?",
    a: "No es imprescindible para empezar. La ficha de Google bien trabajada ya genera llamadas. Pero a medio plazo, una web propia bien organizada por servicio y por zona multiplica los resultados. Si no la tienes, te ayudamos a construirla.",
  },
  {
    q: "¿Trabajáis con mi sector?",
    a: "Si tu negocio recibe clientes de Madrid o de su área metropolitana, sí. Trabajamos con clínicas, despachos, oficios, comercio local, servicios profesionales y autónomos. Lo que cambia en cada caso es el enfoque de las palabras clave y de las reseñas, no el método.",
  },
  {
    q: "¿Qué incluye exactamente el servicio?",
    a: "Auditoría inicial, optimización de tu ficha de Google Business Profile, trabajo de SEO local sobre tu web, estrategia de reseñas, contenido orientado a búsquedas reales de tu zona y un informe mensual claro con lo que ha pasado y qué viene después.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
    { "@type": "ListItem", position: 2, name: "SEO Local en Madrid", item: URL },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "slocal.es",
  url: URL,
  description: "Consultoría de SEO Local para negocios en Madrid",
  areaServed: "Madrid, España",
  priceRange: "€€",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// Helpers para bloques editoriales con imagen alternada
const EditorialBlock = ({
  eyebrow,
  title,
  children,
  image,
  alt,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  image: string;
  alt: string;
  reverse?: boolean;
}) => (
  <section className="py-20 md:py-28">
    <div className="container max-w-6xl">
      <div className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
        <div className="md:col-span-7">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-primary mb-5">
            {eyebrow}
          </p>
          <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.15] mb-8 text-foreground">
            {title}
          </h2>
          <div className="space-y-5 text-[17px] md:text-lg leading-[1.75] font-body font-light text-foreground/85 max-w-[58ch]">
            {children}
          </div>
        </div>
        <div className="md:col-span-5">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="w-full h-[420px] md:h-[520px] object-cover rounded-sm shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>
    </div>
  </section>
);

const SeoLocalMadrid = () => {
  return (
    <>
      <SEOHead
        title="SEO Local en Madrid | Consultoría especializada — slocal.es"
        description="Ayudamos a negocios de Madrid a aparecer en Google Maps y en los resultados locales de Google. Consultoría de SEO Local, sin permanencia, con seguimiento real de resultados."
        canonical="/seo-local-madrid"
        jsonLd={[breadcrumbSchema, localBusinessSchema, faqSchema]}
      />

      {/* HERO EDITORIAL */}
      <section className="relative bg-dark-bg text-dark-fg overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Calle comercial en Madrid al atardecer"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/70 to-dark-bg/40" />
        </div>
        <div className="relative container max-w-5xl py-24 md:py-36">
          <BreadcrumbNav
            items={[
              { label: "Inicio", href: "/" },
              { label: "SEO Local en Madrid" },
            ]}
          />
          <p className="font-heading text-xs uppercase tracking-[0.25em] text-primary mb-8 mt-4">
            Consultoría de SEO Local · Madrid
          </p>
          <h1 className="font-heading text-[2.75rem] md:text-[4.5rem] leading-[1.05] mb-8 max-w-4xl">
            SEO Local en Madrid
          </h1>
          <p className="text-lg md:text-2xl leading-[1.5] font-body font-light text-dark-fg/85 max-w-3xl">
            Ayudamos a negocios de Madrid a conseguir más llamadas, presupuestos y clientes apareciendo donde las personas realmente buscan: Google Maps y los resultados locales de Google.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/contacto"
              className="inline-block bg-primary text-primary-foreground font-heading text-sm rounded-full px-8 py-4 hover:bg-primary/90 transition-colors"
            >
              Hablemos de tu negocio →
            </Link>
            <a
              href="#proceso"
              className="inline-block border border-dark-fg/30 text-dark-fg font-heading text-sm rounded-full px-8 py-4 hover:border-dark-fg/60 transition-colors"
            >
              Cómo trabajamos
            </a>
          </div>
        </div>
      </section>

      {/* BLOQUE 1 — Por qué el SEO Local es tan importante en Madrid */}
      <EditorialBlock
        eyebrow="01 · El cambio de hábito"
        title="Por qué el SEO Local es tan importante en Madrid"
        image={mobileImg}
        alt="Persona usando Google Maps en el móvil en una calle de Madrid"
      >
        <p>
          La forma en la que la gente busca un servicio en Madrid ha cambiado por completo. Hoy nadie abre la guía telefónica ni pregunta al vecino. Sacan el móvil, escriben lo que necesitan y eligen a quien aparece primero.
        </p>
        <p>
          Más del 80% de esas búsquedas se hacen desde un smartphone, muchas veces en la calle, a pocos minutos de donde la persona está. Google Maps se ha convertido en el primer punto de contacto entre un negocio y un cliente potencial: antes que tu web, antes que tu teléfono, antes que tu local.
        </p>
        <p>
          Las reseñas terminan de decidir. Un negocio con muchas valoraciones positivas y respuestas cuidadas transmite confianza al instante. Y una parte muy importante de esos clientes ni siquiera entra en la web: llaman directamente desde el resultado de Google.
        </p>
      </EditorialBlock>

      <div className="border-t border-border" />

      {/* BLOQUE 2 — Qué ocurre cuando no apareces */}
      <EditorialBlock
        eyebrow="02 · La invisibilidad cuesta dinero"
        title="Qué ocurre cuando tu negocio no aparece en Google Maps"
        image={shopImg}
        alt="Propietaria de un comercio local de Madrid atendiendo a una clienta"
        reverse
      >
        <p>
          Cuando tu negocio no aparece, no es que pierdas un puesto en una lista. Es que dejas de existir para esa persona. Esa llamada, ese presupuesto o esa reserva la recibe otro.
        </p>
        <p>
          A los meses la diferencia es enorme. Tu competencia directa —muchas veces un negocio parecido al tuyo, a pocas calles— acumula clientes, reseñas y autoridad. Cada mes que pasa la distancia se hace más grande y más cara de recortar.
        </p>
        <p>
          La salida fácil suele ser pagar Google Ads. Funciona mientras pagas. El día que paras, desapareces. El SEO Local construye un activo propio que sigue trayendo clientes mes a mes sin depender de cuánto inviertes en anuncios.
        </p>
      </EditorialBlock>

      <div className="border-t border-border" />

      {/* BLOQUE 3 — Cómo trabajamos */}
      <section id="proceso" className="bg-warm-bg py-24 md:py-32">
        <div className="container max-w-4xl">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-primary mb-5">
            03 · El método
          </p>
          <h2 className="font-heading text-3xl md:text-[2.75rem] leading-[1.1] mb-14 max-w-3xl">
            Cómo trabajamos el SEO Local
          </h2>

          <div className="space-y-14">
            {[
              {
                n: "Uno",
                t: "Auditoría inicial",
                d: "Analizamos cómo te ve hoy Google: tu ficha, tu web, las búsquedas reales de tus clientes y a tu competencia directa. Te entregamos una foto clara del punto de partida.",
              },
              {
                n: "Dos",
                t: "Optimización de tu ficha de Google Business Profile",
                d: "Categorías, servicios, fotos, descripción, área de servicio, publicaciones, productos. Cada detalle de tu ficha ajustado para las búsquedas que importan en tu zona de Madrid.",
              },
              {
                n: "Tres",
                t: "SEO local sobre tu web",
                d: "Trabajamos tu web para que Google entienda dónde estás, qué ofreces y a quién sirves. Páginas por servicio, páginas por barrio cuando tiene sentido, datos estructurados y velocidad de carga.",
              },
              {
                n: "Cuatro",
                t: "Estrategia de reseñas",
                d: "Diseñamos un sistema para que tus clientes te valoren con frecuencia y de forma natural. Y respondemos las reseñas con criterio, porque eso también pesa.",
              },
              {
                n: "Cinco",
                t: "Seguimiento mensual",
                d: "Cada mes te enviamos un informe corto y claro: posiciones, llamadas, contactos, qué hemos hecho y qué viene en el mes siguiente. Sin jerga.",
              },
            ].map((s) => (
              <div key={s.n} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 border-b border-border pb-12 last:border-0">
                <div className="md:col-span-3">
                  <span className="font-heading text-sm uppercase tracking-[0.2em] text-primary">{s.n}</span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-heading text-xl md:text-2xl mb-4">{s.t}</h3>
                  <p className="text-[17px] leading-[1.7] font-body font-light text-foreground/80 max-w-[58ch]">
                    {s.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOQUE 4 — Por qué slocal.es */}
      <EditorialBlock
        eyebrow="04 · Por qué nosotros"
        title="Por qué elegir slocal.es"
        image={meetingImg}
        alt="Reunión profesional entre consultora y propietaria de un negocio en Madrid"
      >
        <p>
          No somos una agencia de marketing que hace de todo. Trabajamos una sola cosa: que negocios locales aparezcan donde sus clientes los buscan. Esa especialización es la diferencia.
        </p>
        <p>
          Conocemos los mercados locales por dentro. Sabemos cómo se comporta un cliente en Chamberí, qué busca en Vallecas o qué espera de un negocio en Móstoles. Esa lectura del terreno guía todo lo que hacemos.
        </p>
        <p>
          Hablamos tu idioma, no el nuestro. Te explicamos lo que hacemos en términos de negocio: llamadas, presupuestos, clientes. No en métricas técnicas que no se traducen en facturación.
        </p>
        <p>
          Todo es transparente. El precio, el método, los plazos y los resultados. Cada mes ves exactamente qué se ha hecho y qué ha pasado. Sin permanencia, sin sorpresas.
        </p>
      </EditorialBlock>

      {/* BLOQUE 5 — Sectores */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="container max-w-5xl">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-primary mb-5">
            05 · A quién acompañamos
          </p>
          <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.15] mb-14 max-w-3xl">
            Sectores con los que trabajamos en Madrid
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6">
            {SECTORES.map((s) => (
              <li
                key={s}
                className="font-heading text-lg text-foreground border-b border-border pb-5"
              >
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-14 text-[17px] leading-[1.7] font-body font-light text-foreground/75 max-w-[58ch]">
            Si tu negocio recibe clientes en Madrid o en su área metropolitana, el método se adapta a tu sector. Lo que cambia es el enfoque; no el rigor del trabajo.
          </p>
        </div>
      </section>

      {/* BLOQUE 6 — Barrios y zonas */}
      <section className="relative bg-dark-bg text-dark-fg py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={neighborhoodsImg}
            alt="Vista aérea de los barrios de Madrid al atardecer"
            loading="lazy"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/85 to-dark-bg/40" />
        </div>
        <div className="relative container max-w-5xl">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-primary mb-5">
            06 · Cobertura
          </p>
          <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.15] mb-8 max-w-3xl">
            Barrios y zonas de Madrid donde trabajamos
          </h2>
          <p className="text-lg leading-[1.65] font-body font-light text-dark-fg/80 max-w-2xl mb-12">
            En Madrid, cada barrio es un mercado en sí mismo. Las búsquedas se hacen por zona, no por ciudad, y cada distrito tiene su propia competencia y su propio cliente.
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3">
            {ZONAS.map((z) => (
              <li key={z} className="font-heading text-base text-dark-fg/90">
                {z}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BLOQUE — Reseñas (imagen + cita) */}
      <section className="py-24 md:py-32">
        <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5">
            <img
              src={reviewsImg}
              alt="Restaurante local de Madrid con valoración de cinco estrellas"
              loading="lazy"
              className="w-full h-[420px] md:h-[520px] object-cover rounded-sm shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]"
            />
          </div>
          <div className="md:col-span-7">
            <blockquote className="font-heading text-2xl md:text-[2rem] leading-[1.3] text-foreground max-w-[28ch]">
              "Las reseñas son lo más cerca que un negocio local tiene hoy del boca a boca. Quien las cuida, gana."
            </blockquote>
            <p className="mt-8 text-sm font-heading uppercase tracking-[0.2em] text-muted-foreground">
              — Equipo slocal.es
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUE 7 — FAQ */}
      <div className="bg-warm-bg" id="faq">
        <FAQSection
          title="Preguntas frecuentes sobre SEO Local en Madrid"
          items={FAQS}
        />
      </div>

      {/* CTA FINAL */}
      <section className="bg-primary py-24 md:py-28">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.15] text-primary-foreground mb-6">
            ¿Hablamos de tu negocio en Madrid?
          </h2>
          <p className="text-primary-foreground/90 text-lg font-body font-light mb-10 max-w-xl mx-auto">
            Te decimos sin compromiso cómo te ve hoy Google y qué se puede mejorar para que empieces a recibir más llamadas desde Maps.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-card text-foreground font-heading text-sm rounded-full px-10 py-4 hover:bg-card/90 transition-colors"
          >
            Empezar conversación →
          </Link>
        </div>
      </section>
    </>
  );
};

export default SeoLocalMadrid;
