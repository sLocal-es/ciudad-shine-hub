import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const ComoFunciona = () => (
  <>
    <SEOHead
      title="Cómo Funciona | slocal.es"
      description="Descubre cómo funciona el sistema de visibilidad local de slocal.es. Sin agencias, sin humo. Tres pasos para que tu negocio aparezca en Google."
      canonical="/como-funciona"
    />

    {/* HERO */}
    <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
      <div className="container text-center max-w-3xl">
        <h1 className="font-heading text-3xl md:text-5xl leading-tight mb-5">
          Cómo funciona slocal.es
        </h1>
        <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed">
          No somos una agencia. Somos un sistema. Tú eliges tu nivel, nosotros hacemos el trabajo, cada mes ves los resultados.
        </p>
      </div>
    </section>

    {/* STEPS */}
    <section className="py-16 md:py-20">
      <div className="container max-w-3xl space-y-16">
        {[
          {
            n: "01",
            title: "Eliges tu plan",
            desc: "Dos planes mensuales diseñados para distintas necesidades. Esencial (€150/mes) para ciudades con menos competencia, Pro (€250/mes) para resultados más rápidos en ciudades grandes. Setup inicial con web + ficha incluido.",
            extra: "No necesitas saber nada de SEO. Te explicamos qué incluye cada plan y cuál encaja mejor con tu negocio."
          },
          {
            n: "02",
            title: "Nos encargamos de todo",
            desc: "Una vez que empezamos, tú sigues con tu negocio. Nosotros creamos tu web, configuramos tu ficha de Google, escribimos los artículos que posicionan y optimizamos todo mes a mes.",
            extra: "No tienes que enviarnos textos, fotos ni estar pendiente. Nos encargamos de todo el proceso."
          },
          {
            n: "03",
            title: "Cada mes sabes qué mejoró",
            desc: "Recibes un informe mensual claro con las posiciones ganadas, las visitas a tu web y qué búsquedas te están trayendo clientes. Sin tecnicismos, en un formato que puedes entender en dos minutos.",
            extra: "Si algo no funciona, lo ajustamos. Si algo funciona, lo potenciamos. El sistema mejora cada mes."
          },
        ].map((step) => (
          <div key={step.n} className="flex gap-6">
            <span className="text-primary font-heading text-5xl leading-none">{step.n}</span>
            <div>
              <h2 className="font-heading text-xl mb-3">{step.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-3 text-sm md:text-base">{step.desc}</p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{step.extra}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-16">
      <div className="container text-center">
        <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-6">
          ¿Quieres saber qué nivel encaja con tu negocio?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/planes" className="bg-card text-primary font-heading text-sm rounded-lg px-8 py-3 hover:bg-card/90 transition-colors">
            Ver planes →
          </Link>
          <Link to="/contacto" className="border border-primary-foreground/30 text-primary-foreground font-heading text-sm rounded-lg px-8 py-3 hover:bg-primary-foreground/10 transition-colors">
            Contactar
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default ComoFunciona;
