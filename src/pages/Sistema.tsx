import SEOHead from "@/components/SEOHead";
import ResultadosSection from "@/components/ResultadosSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WA_URL =
  "https://wa.me/34684780063?text=Hola%2C%20quiero%20que%20Google%20me%20mande%20clientes";

const Sistema = () => {
  return (
    <>
      <SEOHead
        title="Que Google te mande clientes — slocal.es"
        description="Web + ficha de Google + contenido al mes. Sin agencias, sin permanencia. Escríbeme por WhatsApp."
        canonical="/sistema"
      />

      {/* Mini nav */}
      <nav className="py-5 px-6 md:px-10 flex justify-between items-center border-b border-dark-fg/10 bg-dark-bg">
        <div className="font-heading font-bold text-lg text-dark-fg">
          <span className="text-primary">s</span>local.es
        </div>
        <a
          href={WA_URL}
          className="text-dark-fg/60 text-sm hover:text-dark-fg transition-colors"
        >
          💬 WhatsApp
        </a>
      </nav>

      {/* HERO */}
      <section className="py-20 md:py-28 bg-dark-bg text-dark-fg">
        <div className="container max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-dark-bg border border-primary/30 text-primary text-xs font-medium tracking-wider uppercase mb-8">
            Para negocios locales
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6">
            Que Google te mande clientes.<br />
            <em className="text-primary not-italic">Cada mes.</em>
          </h1>
          <p className="text-lg text-dark-fg/75 leading-relaxed mb-8 max-w-xl">
            Te monto la web, la ficha de Google y publico contenido cada mes para que aparezcas cuando alguien busca lo que haces en tu ciudad. <strong className="text-dark-fg">Desde consulta condiciones.</strong>
          </p>
          <a
            href={WA_URL}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-medium px-8 py-4 rounded-lg hover:bg-primary/90 transition-all"
          >
            💬 Escríbeme por WhatsApp
          </a>
          <p className="text-sm text-dark-fg/45 mt-5 max-w-md">
            Solo si quieres clientes desde Google. Si buscas información o teoría sobre SEO, esto no es para ti.
          </p>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="py-16 md:py-20 bg-dark-bg border-t border-dark-fg/10 text-dark-fg">
        <div className="container max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl leading-tight mb-10">
            Qué incluye <em className="text-primary not-italic">todos los meses</em>
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              { t: "Web optimizada", d: "Una página por servicio y por zona. La que Google entiende." },
              { t: "Ficha de Google activa", d: "Configurada, mantenida y actualizada cada mes." },
              { t: "Contenido cada mes", d: "Artículos en tu web y posts en tu ficha. Sin que tú toques nada." },
              { t: "Seguimiento directo", d: "Te escribo yo por WhatsApp. Sin informes inútiles." },
            ].map((b) => (
              <li
                key={b.t}
                className="bg-dark-bg/50 border border-dark-fg/10 rounded-xl p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="text-primary text-lg leading-none mt-0.5">✓</span>
                  <div>
                    <div className="font-heading text-base mb-1">{b.t}</div>
                    <p className="text-sm text-dark-fg/60 leading-relaxed">{b.d}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PARA QUIÉN ES / NO ES */}
      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="container max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl leading-tight mb-10">
            Esto es para ti si…
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-xs font-medium uppercase tracking-wider text-primary mb-4">Sí es para ti</div>
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex gap-2"><span className="text-primary">✓</span> Tienes un negocio local que atiende clientes en una ciudad o zona.</li>
                <li className="flex gap-2"><span className="text-primary">✓</span> Quieres que Google te mande llamadas y mensajes cada mes.</li>
                <li className="flex gap-2"><span className="text-primary">✓</span> Buscas algo simple, sin agencias ni informes.</li>
                <li className="flex gap-2"><span className="text-primary">✓</span> Estás dispuesto a esperar 1–3 meses para ver resultados sólidos.</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">No es para ti</div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><span>✗</span> Quieres clientes mañana mismo (eso es publicidad de pago).</li>
                <li className="flex gap-2"><span>✗</span> Buscas información o tutoriales gratis sobre SEO.</li>
                <li className="flex gap-2"><span>✗</span> Vendes online a toda España sin atender una zona concreta.</li>
                <li className="flex gap-2"><span>✗</span> Quieres rediseño bonito sin pensar en captar clientes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-16 md:py-20 bg-dark-bg text-dark-fg">
        <div className="container max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl leading-tight mb-10">
            Cómo funciona
          </h2>
          <ol className="space-y-5">
            {[
              { n: "01", t: "Me escribes por WhatsApp", d: "Me dices a qué te dedicas y en qué ciudad. Te miro gratis cómo estás en Google." },
              { n: "02", t: "Te digo qué se puede hacer", d: "Sin humo. Si no veo recorrido, te lo digo. Si lo veo, te paso precio y tiempos." },
              { n: "03", t: "Monto el sistema", d: "Web + ficha de Google configuradas en pocos días. Lo hago yo, sin reuniones eternas." },
              { n: "04", t: "Cada mes me ocupo de todo", d: "Contenido nuevo, mantenimiento de la ficha y aviso por WhatsApp cuando hay movimiento." },
            ].map((s) => (
              <li key={s.n} className="flex gap-5 items-start border-b border-dark-fg/10 pb-5 last:border-0">
                <span className="font-heading text-2xl font-bold text-primary/50 shrink-0 w-12">{s.n}</span>
                <div>
                  <div className="font-heading text-lg mb-1">{s.t}</div>
                  <p className="text-sm text-dark-fg/60 leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRUEBA — Casos (cards intactas, modal mejorado dentro de ResultadosSection) */}
      <ResultadosSection />

      {/* PRECIO */}
      <section className="py-20 md:py-24 bg-dark-bg text-dark-fg border-t border-dark-fg/10">
        <div className="container max-w-2xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-dark-bg border border-primary/30 text-primary text-xs font-medium tracking-wider uppercase mb-6">
            Precio
          </div>
          <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-4">
            Desde <em className="text-primary not-italic">consulta condiciones</em>
          </h2>
          <p className="text-dark-fg/70 text-lg mb-8 max-w-md mx-auto">
            Web + ficha de Google + contenido cada mes + seguimiento directo conmigo. Todo incluido.
          </p>
          <ul className="text-left max-w-md mx-auto space-y-3 text-sm text-dark-fg/75 mb-10">
            <li className="flex gap-2"><span className="text-primary">✓</span> Sin permanencia.</li>
            <li className="flex gap-2"><span className="text-primary">✓</span> Sin contratos largos.</li>
            <li className="flex gap-2"><span className="text-primary">✓</span> Cancelas cuando quieras.</li>
          </ul>
          <a
            href={WA_URL}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-medium px-8 py-4 rounded-lg hover:bg-primary/90 transition-all"
          >
            💬 Quiero saber más por WhatsApp
          </a>
        </div>
      </section>

      {/* OBJECIONES */}
      <section className="py-16 md:py-20 bg-secondary/40">
        <div className="container max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl leading-tight mb-10">
            Lo que la gente me pregunta
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "¿Funciona en mi sector?", a: "Si tu cliente te busca en Google (fontaneros, fisios, reformas, clínicas, abogados, talleres, estética…), funciona. Si vendes online a toda España sin zona, no es lo mío." },
              { q: "¿Cuánto tarda en dar resultados?", a: "Las primeras llamadas suelen llegar en el mes 1 o 2 desde la ficha de Google. La web tarda un poco más, entre 2 y 4 meses para verla subir de forma sólida." },
              { q: "¿Necesito tener web ya?", a: "No. Si no tienes, te la monto yo. Si la tienes pero está vieja o mal hecha para Google, te monto una nueva pensada para captar clientes." },
              { q: "¿Hay que pagar publicidad aparte?", a: "No. Esto es posicionamiento orgánico en Google y Maps. No gastas un euro en anuncios." },
              { q: "¿Y si no me convence?", a: "Te vas cuando quieras. Sin permanencia, sin penalizaciones, sin llamadas raras." },
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
              Mejor hoy que dentro de <em className="text-primary not-italic">tres meses</em>
            </h2>
            <p className="text-dark-fg/70 mb-8 max-w-md mx-auto">
              Cuanto antes empieces, antes Google empieza a mandarte clientes. Te miro tu caso gratis y te digo si tiene sentido.
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

      <footer className="border-t border-border/30 py-8 bg-dark-bg">
        <div className="container max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dark-fg/40">
          <p>© 2026 slocal.es · Javi Soriano</p>
        </div>
      </footer>
    </>
  );
};

export default Sistema;
