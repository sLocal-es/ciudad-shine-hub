import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import ResultadosSection from "@/components/ResultadosSection";
import PromoBanner from "@/components/sistema/PromoBanner";
import PromoPopup from "@/components/sistema/PromoPopup";
import pagespeedViviane from "@/assets/casos/pagespeed-viviane.webp";
import pagespeedTei from "@/assets/casos/pagespeed-tei.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Sistema = () => {
  return (
    <>
      <PromoBanner />
      <PromoPopup />
      <SEOHead
        title="El Sistema Anti-Agencia — slocal.es"
        description="No soy una agencia. Gestiono tu presencia en Google de forma personal — web, ficha y contenido continuo — por lo que una agencia cobra solo por atenderte."
        canonical="/sistema"
      />

      {/* Mini nav solo logo + CTA */}
      <nav className="py-5 px-6 md:px-10 flex justify-between items-center border-b border-dark-fg/10 bg-dark-bg">
        <div className="font-heading font-bold text-lg text-dark-fg">
          <span className="text-primary">s</span>local.es
        </div>
        <a
          href="https://wa.me/34684780063?text=Hola%2C%20quiero%20que%20me%20eches%20un%20ojo%20en%20Google"
          className="text-dark-fg/60 text-sm hover:text-dark-fg transition-colors"
        >
          💬 Escríbeme por WhatsApp
        </a>
      </nav>

      {/* Hero */}
      <section className="py-20 md:py-28 bg-dark-bg text-dark-fg">
        <div className="container max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-dark-bg border border-primary/30 text-primary text-xs font-medium tracking-wider uppercase mb-8">
            El Sistema Anti-Agencia
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6">
            Que Google te mande<br />clientes. <em className="text-primary not-italic">De verdad.</em>
          </h1>
          <p className="text-lg text-dark-fg/70 leading-relaxed mb-8 max-w-xl">
            No soy una agencia. Gestiono tu presencia en Google de forma personal — web, ficha y contenido continuo — por lo que una agencia cobra solo por atenderte.
          </p>
          <a
            href="https://wa.me/34684780063?text=Hola%2C%20quiero%20que%20me%20eches%20un%20ojo%20en%20Google"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-medium px-8 py-4 rounded-lg hover:bg-primary/90 transition-all"
          >
            Escríbeme y te miro gratis →
          </a>
        </div>
      </section>

      {/* Mi Historia */}
      <section className="py-20 md:py-28 bg-dark-bg">
        <div className="container max-w-[680px] mx-auto">
          <h2 className="font-['DM_Serif_Display'] text-3xl md:text-[2.5rem] leading-tight text-dark-fg mb-14">
            Por qué monté esto<br />(y por qué <em className="text-primary not-italic">no soy</em> una agencia)
          </h2>

          <div className="space-y-10">
            <p className="text-dark-fg/85 text-lg leading-relaxed">
              Soy Javi. Llevo la presencia en Google de negocios locales de forma personal, sin intermediarios, sin letra pequeña.
            </p>

            <p className="text-dark-fg/85 text-lg leading-relaxed">
              Trabajé en una agencia de marketing. Vi de cerca cómo funciona por dentro.
            </p>

            <p className="text-dark-fg/85 text-lg leading-relaxed">
              Para que una agencia te dedique tiempo real, necesitas pagar a partir de €600 o €1.000 al mes. Si pagas menos, eres el último de la lista. Nadie te llama, nadie toca nada, y a final de mes te mandan un informe con números que no sirven para nada.
            </p>

            <p className="text-dark-fg/85 text-lg leading-relaxed border-l-[3px] border-primary pl-6">
              Un sistema pensado para el negocio que no necesita gastar €1.000 al mes pero sí merece que Google le mande clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Qué hago - Accordions */}
      <section className="py-16 md:py-20 bg-secondary/50">
        <div className="container max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
            ¿Qué hago exactamente<br />por tu negocio?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">Tres cosas. Sin complicaciones.</p>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="paso-01" className="bg-card rounded-xl border border-border px-6">
              <AccordionTrigger className="hover:no-underline gap-4">
                <div className="flex items-center gap-5 text-left">
                  <span className="text-3xl font-heading font-bold text-primary/40 shrink-0">01</span>
                  <span className="font-heading text-lg">Te hago la web para que Google te entienda</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 text-muted-foreground text-sm">
                <p className="mb-3">Una web estructurada por lo que haces y por las zonas donde trabajas. Google necesita que se lo expliques bien para mostrarte cuando alguien te busca. Sin eso, da igual lo bueno que seas.</p>
                <p className="italic text-muted-foreground/80">No es una web de 4 páginas como hacen muchos, es una web con una página para cada servicio y cada barrio o zona donde trabajas, para que cuando alguien cerca busque lo que haces aparezcas tú.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="paso-02" className="bg-card rounded-xl border border-border px-6">
              <AccordionTrigger className="hover:no-underline gap-4">
                <div className="flex items-center gap-5 text-left">
                  <span className="text-3xl font-heading font-bold text-primary/40 shrink-0">02</span>
                  <span className="font-heading text-lg">Pongo en marcha y mantengo tu ficha de Google</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 text-muted-foreground text-sm">
                La ficha de Google es lo primero que ve alguien cuando te busca. Si está a medias o sin actualizar, pierdes clientes antes de que te llamen. La configuro bien y la mantengo activa cada mes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="paso-03" className="bg-card rounded-xl border border-border px-6">
              <AccordionTrigger className="hover:no-underline gap-4">
                <div className="flex items-center gap-5 text-left">
                  <span className="text-3xl font-heading font-bold text-primary/40 shrink-0">03</span>
                  <span className="font-heading text-lg">Publico contenido continuo para que subas en Google</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-16 text-muted-foreground text-sm">
                Google premia los negocios que están activos. Publico artículos en tu web y posts en tu ficha cada mes para que vayas ganando posiciones de forma sostenida. Sin pagar publicidad.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Prueba Social - Scores */}
      <section className="py-16 md:py-20 bg-dark-bg text-dark-fg">
        <div className="container max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
            Las webs que construyo<br />están <em className="text-primary not-italic">optimizadas de verdad</em>
          </h2>
          <p className="text-dark-fg/70 mb-10">Esto no son palabras. Cualquiera puede comprobarlo en Google PageSpeed Insights ahora mismo.</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-dark-bg/50 border border-dark-fg/10 rounded-xl p-6">
              <div className="text-xs text-primary uppercase tracking-wider font-medium mb-4">psivivianecustodio.com</div>
              <img
                src={pagespeedViviane}
                alt="PageSpeed psivivianecustodio.com — 90 Rendimiento, 91 Accesibilidad, 100 Prácticas recomendadas, 100 SEO"
                className="w-full rounded-lg border border-dark-fg/10"
                loading="lazy"
              />
              <p className="text-xs text-dark-fg/50 italic mt-4">Psicóloga en Valencia. Web optimizada y lista para posicionar.</p>
            </div>
            <div className="bg-dark-bg/50 border border-dark-fg/10 rounded-xl p-6">
              <div className="text-xs text-primary uppercase tracking-wider font-medium mb-4">obrasenmadrid.com</div>
              <img
                src={pagespeedTei}
                alt="PageSpeed obrasenmadrid.com — 90 Rendimiento, 95 Accesibilidad, 100 Prácticas recomendadas, 92 SEO"
                className="w-full rounded-lg border border-dark-fg/10"
                loading="lazy"
              />
              <p className="text-xs text-dark-fg/50 italic mt-4">Cliente activo. Web montada recientemente.</p>
            </div>
          </div>
          <p className="text-xs text-dark-fg/40">Una web lenta o mal construida penaliza tu posición en Google. Las mías arrancan desde el primer día con una base técnica sólida.</p>
        </div>
      </section>

      {/* Resultados */}
      <ResultadosSection />

      {/* Comparativa Precio */}
      <section className="py-16 md:py-20 bg-dark-bg text-dark-fg">
        <div className="container max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl text-center mb-10">
            No es solo el precio
          </h2>
          <div className="overflow-x-auto rounded-xl border border-dark-fg/10">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left p-4 font-heading text-dark-fg/50 text-xs uppercase tracking-wider"></th>
                  <th className="text-center p-4 font-heading text-dark-fg/50 text-xs uppercase tracking-wider">Agencia tradicional</th>
                  <th className="text-center p-4 font-heading text-xs uppercase tracking-wider text-primary border-x border-primary/20 bg-primary/5">slocal.es</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Hablas con…", agencia: "Account manager (junior)", slocal: "Conmigo directo" },
                  { feature: "Precio mensual", agencia: "€500–850/mes", slocal: "€150–250/mes" },
                  { feature: "Reportes", agencia: "Informes PDF", slocal: "Te explico qué ha pasado y qué hacemos" },
                  { feature: "Respuesta", agencia: "48–72 horas", slocal: "WhatsApp · mismo día" },
                ].map((row) => (
                  <tr key={row.feature} className="border-t border-dark-fg/10">
                    <td className="p-4 font-heading text-dark-fg/80">{row.feature}</td>
                    <td className="p-4 text-center text-dark-fg/40">{row.agencia}</td>
                    <td className="p-4 text-center font-heading text-primary border-x border-primary/20 bg-primary/5">{row.slocal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-dark-fg/40 text-sm mt-6">Mismos resultados. Sin intermediarios.</p>

          <div className="mt-16">
            <h3 className="font-heading text-2xl md:text-3xl leading-tight mb-4">
              ¿Cuánto cuesta una web<br />multipágina en una <em className="text-primary not-italic">agencia</em>?
            </h3>
            <p className="text-dark-fg/60 mb-8">Una web bien estructurada para SEO local — con páginas por servicio y por zona — tiene un coste muy concreto según dónde vayas.</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-dark-fg/5 border border-dark-fg/10 rounded-xl p-8 opacity-70">
                <div className="text-xs text-dark-fg/50 uppercase tracking-wider font-medium mb-3">Agencia tradicional</div>
                <div className="font-heading text-4xl text-dark-fg/50">€1.500–3.000</div>
                <div className="text-sm text-dark-fg/40 mt-2">web multipágina 50–70 páginas · pago único</div>
              </div>
              <div className="bg-primary text-primary-foreground rounded-xl p-8">
                <div className="text-xs uppercase tracking-wider font-medium mb-3 opacity-90">slocal.es</div>
                <div className="font-heading text-4xl">€497</div>
                <div className="text-sm mt-2 opacity-90">web multipágina · pago único</div>
              </div>
            </div>

            <p className="text-sm text-dark-fg/40 mt-6">La diferencia no es que la web sea peor. Es que no tengo estructura de agencia que mantener. El trabajo lo hago yo, con las herramientas adecuadas, y el resultado técnico habla por sí solo.</p>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="py-16 md:py-20 bg-dark-bg text-dark-fg">
        <div className="container max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
            Dos planes.<br /><em className="text-primary not-italic">Sin letra pequeña.</em>
          </h2>
          <p className="text-dark-fg/70 mb-10">El setup inicial (la web + ficha configurada) se paga una sola vez al empezar. Después eliges el nivel de mantenimiento mensual.</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-dark-bg/50 border border-dark-fg/10 rounded-xl p-8">
              <div className="font-heading text-lg mb-1">Esencial</div>
              <div className="font-heading text-4xl text-dark-fg mb-1">€150</div>
              <div className="text-sm text-dark-fg/50 mb-6">+ IVA / mes</div>
              <ul className="space-y-3 text-sm text-dark-fg/70">
                <li className="flex items-start gap-2"><span className="text-primary">✓</span> 2 artículos de blog al mes</li>
                <li className="flex items-start gap-2"><span className="text-primary">✓</span> 4 posts en tu ficha de Google al mes</li>
                <li className="flex items-start gap-2"><span className="text-primary">✓</span> Gestión continua de tu ficha</li>
                <li className="flex items-start gap-2"><span className="text-primary">✓</span> Ideal para ciudades con menos competencia</li>
              </ul>
            </div>
            <div className="bg-dark-bg/50 border border-primary rounded-xl p-8 relative">
              <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">Más elegido</div>
              <div className="font-heading text-lg mb-1">Pro</div>
              <div className="font-heading text-4xl text-primary mb-1">€250</div>
              <div className="text-sm text-dark-fg/50 mb-6">+ IVA / mes</div>
              <ul className="space-y-3 text-sm text-dark-fg/70">
                <li className="flex items-start gap-2"><span className="text-primary">✓</span> 4 artículos de blog al mes</li>
                <li className="flex items-start gap-2"><span className="text-primary">✓</span> 8 posts en tu ficha de Google al mes</li>
                <li className="flex items-start gap-2"><span className="text-primary">✓</span> Gestión continua de tu ficha</li>
                <li className="flex items-start gap-2"><span className="text-primary">✓</span> Resultados más rápidos en ciudades grandes</li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-dark-fg/50">* Setup inicial (web + ficha): <span className="line-through text-dark-fg/30">€597</span> <strong className="text-green-400">€497 + IVA</strong> este mes · pago único · sin permanencia mínima.</p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-2xl mx-auto">
          <div className="bg-dark-bg rounded-2xl p-10 md:p-14 text-center">
            <h2 className="font-heading text-2xl md:text-3xl mb-4">
              ¿Quieres saber cómo<br />estás en Google <em className="text-primary not-italic">ahora mismo</em>?
            </h2>
            <p className="text-dark-fg/70 mb-8 max-w-md mx-auto">
              Dime a qué te dedicas y en qué ciudad. Te miro gratis cómo estás y te digo qué se puede mejorar. Sin compromiso y sin llamadas de seguimiento si no te interesa.
            </p>
            <a
              href="https://wa.me/34684780063?text=Hola%2C%20quiero%20que%20me%20eches%20un%20ojo%20en%20Google"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-medium px-8 py-4 rounded-lg hover:bg-primary/90 transition-all w-full max-w-sm mb-3"
            >
              💬 Escríbeme por WhatsApp
            </a>
            <a
              href="mailto:hola@slocal.es?subject=Quiero que me eches un ojo en Google"
              className="inline-flex items-center justify-center gap-2 border border-dark-fg/20 text-dark-fg font-heading font-medium px-8 py-4 rounded-lg hover:border-green-500 hover:text-green-500 transition-all w-full max-w-sm mb-3"
            >
              O por email
            </a>
            <p className="text-xs text-dark-fg/40">Respondo en menos de 24 horas.</p>
          </div>
        </div>
      </section>

      {/* Footer mínimo */}
      <footer className="border-t border-border/30 py-8 bg-dark-bg">
        <div className="container max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dark-fg/40">
          <p>© 2026 slocal.es · Javi Soriano</p>
        </div>
      </footer>
    </>
  );
};

export default Sistema;
