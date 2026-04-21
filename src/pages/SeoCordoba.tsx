import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ResultadosSection from "@/components/ResultadosSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WA_URL =
  "https://wa.me/34684780063?text=Hola%2C%20quiero%20SEO%20en%20C%C3%B3rdoba";

const SeoCordoba = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto tarda el SEO en Córdoba?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las primeras llamadas desde la ficha de Google suelen llegar en el mes 1 o 2. El posicionamiento web sólido tarda entre 2 y 4 meses.",
        },
      },
      {
        "@type": "Question",
        name: "¿Funciona para cualquier negocio en Córdoba?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, siempre que tu cliente te busque en Google: fontaneros, clínicas, reformas, electricistas, abogados, talleres, estética y más.",
        },
      },
      {
        "@type": "Question",
        name: "¿Necesito tener web?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Si no tienes, te la monto. Si tienes una web vieja o que no capta clientes, la rehago pensada para posicionar en Córdoba.",
        },
      },
      {
        "@type": "Question",
        name: "¿También trabajas fuera de Córdoba?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Trabajo con negocios locales en toda España, pero esta página está pensada para negocios que quieren clientes en Córdoba.",
        },
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="SEO Córdoba | Consigue clientes desde Google"
        description="SEO en Córdoba para negocios locales. Consigue clientes desde Google con web, ficha optimizada y posicionamiento real."
        canonical="/seo-cordoba"
        jsonLd={faqSchema}
      />

      {/* HERO */}
      <section className="py-20 md:py-28 bg-dark-bg text-dark-fg">
        <div className="container max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-dark-bg border border-primary/30 text-primary text-xs font-medium tracking-wider uppercase mb-8">
            SEO local en Córdoba
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6">
            SEO en Córdoba para conseguir <em className="text-primary not-italic">clientes desde Google</em>
          </h1>
          <p className="text-lg text-dark-fg/75 leading-relaxed mb-8 max-w-xl">
            Ayudo a negocios en Córdoba a conseguir llamadas y contactos desde Google cada mes con web optimizada, ficha de Google y posicionamiento local.
          </p>
          <a
            href={WA_URL}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-medium px-8 py-4 rounded-lg hover:bg-primary/90 transition-all"
          >
            💬 Escríbeme por WhatsApp
          </a>
          <p className="text-sm text-dark-fg/45 mt-5 max-w-md">
            Solo si quieres clientes desde Google en Córdoba. Si buscas teoría de SEO, esto no es para ti.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-20 bg-dark-bg border-t border-dark-fg/10 text-dark-fg">
        <div className="container max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl leading-tight mb-6">
            Servicio de SEO en Córdoba para <em className="text-primary not-italic">negocios locales</em>
          </h2>
          <p className="text-dark-fg/75 leading-relaxed text-lg">
            Si tienes un negocio en Córdoba y no te llegan clientes desde Google, el problema no es tu sector. Es que no estás apareciendo cuando te buscan.
          </p>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="container max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl leading-tight mb-10">
            Qué incluye el <em className="text-primary not-italic">SEO en Córdoba</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                t: "Optimización de ficha de Google Business Profile",
                d: "Configuro y mantengo tu ficha de Google en Córdoba: categorías, servicios, fotos, descripción y publicaciones cada mes.",
              },
              {
                t: "Posicionamiento en Google Maps en Córdoba",
                d: "Trabajo las señales que Google Maps usa para mostrarte primero cuando alguien busca tu servicio en Córdoba.",
              },
              {
                t: "Creación o mejora de web orientada a clientes",
                d: "Una web pensada para captar, no para presumir. Una página por servicio y por zona de Córdoba.",
              },
              {
                t: "Seguimiento y mejora continua",
                d: "Cada mes reviso, ajusto y publico contenido nuevo. Te aviso por WhatsApp cuando hay movimiento.",
              },
            ].map((b) => (
              <div
                key={b.t}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="text-primary text-lg leading-none mt-0.5">✓</span>
                  <div>
                    <h3 className="font-heading text-base mb-2">{b.t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="py-12 bg-background">
        <div className="container max-w-3xl mx-auto text-center mb-4">
          <h2 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
            Resultados reales en negocios <em className="text-primary not-italic">en Córdoba</em>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Negocios en Córdoba ya están recibiendo llamadas, visitas y contactos desde Google.
          </p>
        </div>
        <ResultadosSection />
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-16 md:py-20 bg-dark-bg text-dark-fg">
        <div className="container max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl leading-tight mb-10">
            Cómo funciona el SEO en Córdoba
          </h2>
          <ol className="space-y-5">
            {[
              {
                n: "01",
                t: "Análisis del negocio y del mercado local",
                d: "Miro tu negocio, tu competencia en Córdoba y qué busca la gente. Te digo si hay recorrido real.",
              },
              {
                n: "02",
                t: "Optimización de presencia en Google",
                d: "Monto o reordeno la web y dejo tu ficha de Google trabajando para captar en Córdoba.",
              },
              {
                n: "03",
                t: "Aumento de visibilidad en Córdoba",
                d: "Cada mes publico contenido y trabajo señales locales para que aparezcas más arriba en Google y Maps.",
              },
              {
                n: "04",
                t: "Llegada de clientes",
                d: "Llamadas, mensajes y rutas a tu negocio. Te aviso por WhatsApp de los movimientos importantes.",
              },
            ].map((s) => (
              <li
                key={s.n}
                className="flex gap-5 items-start border-b border-dark-fg/10 pb-5 last:border-0"
              >
                <span className="font-heading text-2xl font-bold text-primary/50 shrink-0 w-12">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-heading text-lg mb-1">{s.t}</h3>
                  <p className="text-sm text-dark-fg/60 leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-sm text-dark-fg/60 mt-8">
            ¿Quieres ver el sistema completo?{" "}
            <Link to="/sistema" className="text-primary hover:underline">
              Ver cómo funciona el sistema
            </Link>
            .
          </p>
        </div>
      </section>

      {/* PRECIO */}
      <section className="py-20 md:py-24 bg-dark-bg text-dark-fg border-t border-dark-fg/10">
        <div className="container max-w-2xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-dark-bg border border-primary/30 text-primary text-xs font-medium tracking-wider uppercase mb-6">
            Precio
          </div>
          <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-4">
            Cuánto cuesta el SEO en Córdoba
          </h2>
          <p className="text-dark-fg/70 text-lg mb-8 max-w-md mx-auto">
            Trabajo desde <strong className="text-primary">147€/mes</strong>, incluyendo todo lo necesario para posicionar tu negocio en Google y generar clientes reales.
          </p>
          <a
            href={WA_URL}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-medium px-8 py-4 rounded-lg hover:bg-primary/90 transition-all"
          >
            💬 Quiero saber más por WhatsApp
          </a>
        </div>
      </section>

      {/* SECTORES */}
      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="container max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl leading-tight mb-8">
            SEO local en Córdoba para <em className="text-primary not-italic">diferentes negocios</em>
          </h2>
          <p className="text-muted-foreground mb-8">
            Trabajo posicionamiento web en Córdoba y posicionamiento Google en Córdoba para negocios como:
          </p>
          <ul className="grid md:grid-cols-2 gap-3">
            {[
              "Fontaneros en Córdoba",
              "Empresas de reformas en Córdoba",
              "Electricistas en Córdoba",
              "Negocios locales en Córdoba",
            ].map((s) => (
              <li
                key={s}
                className="bg-card border border-border rounded-xl p-4 flex items-center gap-3"
              >
                <span className="text-primary">✓</span>
                <span className="text-sm">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl leading-tight mb-10">
            Preguntas frecuentes sobre SEO en Córdoba
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: "¿Cuánto tarda el SEO en Córdoba?",
                a: "Las primeras llamadas desde la ficha de Google suelen llegar en el mes 1 o 2. El posicionamiento web sólido tarda entre 2 y 4 meses.",
              },
              {
                q: "¿Funciona para cualquier negocio en Córdoba?",
                a: "Sí, siempre que tu cliente te busque en Google. Funciona muy bien para fontaneros, clínicas, reformas, electricistas, abogados, talleres y estética.",
              },
              {
                q: "¿Necesito tener web?",
                a: "No hace falta. Si no tienes, te la monto yo. Si tienes una web vieja o que no capta, la rehago pensada para Córdoba.",
              },
              {
                q: "¿También trabajas fuera de Córdoba?",
                a: "Sí, trabajo con negocios locales en toda España. Esta página está pensada para quien quiere clientes en Córdoba.",
              },
            ].map((f) => (
              <AccordionItem
                key={f.q}
                value={f.q}
                className="bg-card rounded-xl border border-border px-6"
              >
                <AccordionTrigger className="hover:no-underline font-heading text-base text-left">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-2xl mx-auto">
          <div className="bg-dark-bg rounded-2xl p-10 md:p-14 text-center">
            <h2 className="font-heading text-2xl md:text-3xl text-dark-fg mb-4">
              Consigue clientes desde Google <em className="text-primary not-italic">en Córdoba</em>
            </h2>
            <p className="text-dark-fg/70 mb-8 max-w-md mx-auto">
              Te miro tu caso gratis y te digo si tiene sentido empezar. Cuanto antes, antes Google te manda clientes.
            </p>
            <a
              href={WA_URL}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-medium px-8 py-4 rounded-lg hover:bg-primary/90 transition-all w-full max-w-sm mb-3"
            >
              💬 Escríbeme por WhatsApp
            </a>
            <p className="text-xs text-dark-fg/40">Respondo el mismo día.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoCordoba;
