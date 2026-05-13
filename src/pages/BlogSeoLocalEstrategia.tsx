import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";

const POST = {
  slug: "seo-local-mejor-estrategia-marketing-nuevo-negocio",
  title: "SEO local: la mejor estrategia de marketing para iniciar un negocio",
  metaTitle: "SEO local: la mejor estrategia para iniciar un negocio | slocal.es",
  metaDescription:
    "Descubre por qué el SEO local supera a los anuncios cuando inicias un negocio. Datos reales, estrategia paso a paso y auditoría gratuita.",
  date: "2026-05-13",
  category: "SEO Local",
};

const AuditForm = () => {
  const [form, setForm] = useState({ nombre: "", email: "", negocio: "", ciudad: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        "service_vdsum02",
        "template_1ryowc9",
        {
          form_type: "auditoria_blog_seo_local_estrategia",
          from_name: form.nombre,
          from_email: form.email,
          business: form.negocio,
          city: form.ciudad,
          nombre: form.nombre,
          email: form.email,
          negocio: form.negocio,
          ciudad: form.ciudad,
        },
        { publicKey: "1cwUJ3NQK_iwLaJLD" },
      );
      setStatus("ok");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (status === "ok") {
    return (
      <div className="text-center text-dark-fg py-10">
        <p className="font-heading text-xl md:text-2xl">
          ✅ ¡Listo! Recibirás tu auditoría en menos de 24h.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-lg px-4 py-3 text-sm bg-white/[0.07] border border-white/15 text-dark-fg placeholder:text-white/40 outline-none focus:border-primary";

  return (
    <form onSubmit={onSubmit} className="space-y-3 max-w-md mx-auto">
      <input name="nombre" required placeholder="Nombre" value={form.nombre} onChange={onChange} className={inputCls} />
      <input name="email" type="email" required placeholder="Email" value={form.email} onChange={onChange} className={inputCls} />
      <input name="negocio" required placeholder="Nombre del negocio" value={form.negocio} onChange={onChange} className={inputCls} />
      <input name="ciudad" required placeholder="Ciudad" value={form.ciudad} onChange={onChange} className={inputCls} />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Quiero mi auditoría gratuita"}
      </button>
      <p className="text-xs text-white/60 text-center">Sin compromiso. Sin llamadas comerciales.</p>
      {status === "error" && (
        <p className="text-xs text-red-300 text-center">
          Algo ha fallado. Escríbenos a hola@slocal.es
        </p>
      )}
    </form>
  );
};

const BlogSeoLocalEstrategia = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: POST.title,
    name: POST.title,
    description: POST.metaDescription,
    datePublished: POST.date,
    dateModified: POST.date,
    author: { "@type": "Organization", name: "slocal.es" },
    publisher: {
      "@type": "Organization",
      name: "slocal.es",
      url: "https://slocal.es",
    },
    mainEntityOfPage: `https://slocal.es/blog/${POST.slug}`,
  };

  const faqs = [
    {
      q: "¿Cuánto tarda el SEO local en dar resultados?",
      a: "Los primeros movimientos en Google Maps se notan entre el mes 2 y el mes 4. A partir del mes 6 el flujo de clientes desde Google se vuelve estable y predecible. Es más lento que los anuncios, pero genera resultados que no desaparecen cuando dejas de pagar.",
    },
    {
      q: "¿Es mejor SEO local o Google Ads para empezar?",
      a: "Si tu presupuesto es limitado y vas a operar muchos años en una zona concreta, el SEO local rinde mucho más a medio plazo. Google Ads aporta visibilidad inmediata pero desaparece al parar la inversión. La combinación ideal: SEO local como base y Ads puntuales para campañas concretas.",
    },
    {
      q: "¿Necesito una web para hacer SEO local?",
      a: "Puedes empezar solo con la ficha de Google Business Profile y obtener resultados, pero una web con páginas locales multiplica tu visibilidad porque te permite aparecer también en los resultados orgánicos para búsquedas específicas de tu servicio y tu ciudad.",
    },
    {
      q: "¿Qué es el Local Pack de Google?",
      a: "Es el bloque de tres negocios con mapa que aparece en la parte superior de Google cuando haces una búsqueda local (por ejemplo, 'fontanero cerca de mí'). Concentra alrededor del 42% de los clics y es el objetivo principal de cualquier estrategia de SEO local.",
    },
  ];

  return (
    <>
      <SEOHead
        title={POST.metaTitle}
        description={POST.metaDescription}
        canonical={`/blog/${POST.slug}`}
        jsonLd={[
          articleSchema,
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://slocal.es/blog" },
              { "@type": "ListItem", position: 3, name: POST.title, item: `https://slocal.es/blog/${POST.slug}` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />

      {/* Hero */}
      <section className="bg-dark-bg text-dark-fg py-16">
        <div className="container max-w-3xl">
          <BreadcrumbNav
            items={[
              { label: "Inicio", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: POST.title },
            ]}
          />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-heading text-primary border border-primary/30 rounded-full px-3 py-0.5">
              {POST.category}
            </span>
            <span className="text-xs text-dark-fg/60">13 de mayo de 2026</span>
            <span className="text-xs text-dark-fg/60">· 8 min de lectura</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl leading-tight">{POST.title}</h1>
        </div>
      </section>

      {/* Content */}
      <article className="container max-w-3xl pb-12 pt-10">
        <div className="prose prose-sm md:prose-base max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-li:text-muted-foreground prose-strong:text-foreground">
          <p>
            Cuando montas un negocio, la primera pregunta es: ¿cómo consigo clientes? Redes sociales,
            anuncios, boca a boca... Hay mil opciones. Pero si tu negocio depende de clientes en una
            zona concreta, hay una estrategia que las supera a todas al inicio: el SEO local.
          </p>

          <div className="key-points">
            <h2>Puntos clave</h2>
            <table>
              <thead>
                <tr><th>Estadística</th><th>Dato</th></tr>
              </thead>
              <tbody>
                <tr><td>Búsquedas "cerca de mí" al mes</td><td>+1.500 millones</td></tr>
                <tr><td>Búsquedas con intención local</td><td>46% del total en Google</td></tr>
                <tr><td>Visitas al negocio tras búsqueda local</td><td>76% en menos de 24h</td></tr>
                <tr><td>Clics al primer resultado del Local Pack</td><td>42%</td></tr>
                <tr><td>Más probabilidad si el perfil de Google está completo</td><td>70%</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Lo que está pasando ahora mientras lees esto</h2>
          <p>
            Mientras terminas de leer este párrafo, miles de personas en España están escribiendo en
            Google frases como "fontanero cerca de mí", "fisioterapeuta en mi barrio" o "cafetería
            con desayuno en Málaga". Cada una de esas búsquedas es un cliente con intención real —
            alguien que no está navegando por curiosidad, sino que necesita resolver algo hoy.
          </p>
          <p>
            Esa es la diferencia clave entre el SEO local y otros canales de marketing: no
            interrumpes a nadie. Apareces justo cuando alguien te está buscando. Y si cuando llegan
            ven una ficha cuidada, reseñas reales y un negocio que parece serio, llaman. No piden
            presupuesto a tres más. Llaman al primero que les encaja.
          </p>
          <p>
            En este artículo vas a ver por qué el SEO local es la mejor estrategia para iniciar un
            negocio nuevo, dónde aparece tu negocio cuando lo trabajas bien y cómo construir las
            bases en pocas semanas para que Google te muestre antes que a tu competencia. También
            puedes ampliar esta lectura con nuestra guía de{" "}
            <Link to="/seo-para-negocios-locales">SEO para negocios locales</Link> o explorar más{" "}
            <Link to="/blog">artículos del blog</Link>.
          </p>

          <h3>El problema de empezar con anuncios</h3>
          <p>
            Cuando un negocio nuevo recurre a Google Ads o Meta Ads desde el día uno, ocurre algo
            previsible: empiezan a llegar contactos rápido, pero el día que se corta el presupuesto,
            todo se apaga. No hay activo construido. No hay ventaja competitiva acumulada. Es
            alquilar visibilidad, no construirla.
          </p>
          <p>
            El SEO local hace lo contrario. Cada reseña que consigues, cada foto que subes, cada
            página de tu web bien estructurada se queda. Suma. Y al cabo de unos meses, tu negocio
            empieza a aparecer en búsquedas que antes ni sabías que existían.
          </p>

          <div className="pro-tip">
            <p>
              <strong>Consejo profesional:</strong> si vas a invertir tus primeros 1.000 € de
              marketing, no los pongas todos en anuncios. Reserva al menos la mitad para construir
              tu presencia local: ficha de Google, fotos profesionales, primeras reseñas y página
              web local. Es lo único que seguirá generando clientes dentro de un año.
            </p>
          </div>

          <table>
            <thead><tr><th>Resumen</th><th>Por qué importa</th></tr></thead>
            <tbody>
              <tr><td>El SEO local construye un activo</td><td>Sigue generando clientes aunque pares la inversión</td></tr>
              <tr><td>Los anuncios solo alquilan visibilidad</td><td>El día que paras, paras los clientes</td></tr>
            </tbody>
          </table>

          <h2>Por qué el SEO local es ideal para empezar</h2>
          <p>
            Un negocio nuevo tiene tres limitaciones reales: poco presupuesto, poca autoridad y poco
            tiempo para experimentar. El SEO local encaja con esas tres limitaciones mejor que
            ningún otro canal. La inversión inicial es baja comparada con anuncios, no necesitas
            tener marca conocida para aparecer y los resultados, una vez llegan, se mantienen mes a
            mes sin tener que reinventar nada.
          </p>
          <p>
            Además, el SEO local opera en un terreno donde la competencia suele estar mal preparada.
            La mayoría de negocios pequeños tienen fichas de Google sin completar, sin fotos, sin
            reseñas recientes y sin web optimizada por zonas. Eso significa que el coste de
            destacar es mucho más bajo que en mercados saturados como el SEO nacional o los
            anuncios en frío.
          </p>

          <h3>Inversión baja, retorno acumulativo</h3>
          <p>
            Cuando comparas mes a mes, los anuncios son lineales: pones 500 €, recibes X clics.
            Pones 0 €, recibes 0 clics. El SEO local es exponencial: pones 500 € en el mes 1 y no
            pasa nada visible. Pones 500 € durante seis meses seguidos y de pronto pasas de 5
            llamadas al mes a 35.
          </p>

          <h3>Tu zona es más fácil de dominar</h3>
          <p>
            Posicionar la palabra "fontanero" en toda España es prácticamente imposible para un
            negocio nuevo. Posicionar "fontanero urgente en Carabanchel" es perfectamente
            alcanzable en seis meses con la estrategia adecuada. La clave del SEO local es elegir
            bien el ámbito geográfico y construir la presencia barrio por barrio.
          </p>

          <div className="pro-tip">
            <p>
              <strong>Consejo profesional:</strong> antes de lanzar tu web, haz una lista de las 10
              búsquedas exactas que harían tus clientes. Cada una de esas búsquedas debería tener
              una página específica en tu web. Esa lista vale más que cualquier estrategia genérica.
            </p>
          </div>

          <table>
            <thead><tr><th>Resumen</th><th>Detalle</th></tr></thead>
            <tbody>
              <tr><td>Inversión inicial baja</td><td>Desde 100-200 €/mes para empezar</td></tr>
              <tr><td>Resultado acumulativo</td><td>Crece mes a mes sin necesidad de aumentar gasto</td></tr>
              <tr><td>Competencia local débil</td><td>La mayoría de negocios tienen fichas sin optimizar</td></tr>
            </tbody>
          </table>

          <h2>Dónde aparece tu negocio con SEO local</h2>
          <p>
            Una de las grandes ventajas del SEO local es que no apareces en un solo sitio: apareces
            en varios formatos diferentes dentro de Google, todos visibles para el mismo cliente
            potencial. Cada uno cumple una función distinta y, juntos, multiplican tus posibilidades
            de conseguir el contacto.
          </p>

          <h3>Local Pack</h3>
          <p>
            Es el bloque de tres negocios con mapa que aparece en lo más alto de Google cuando hay
            una búsqueda con intención local. Es el resultado más codiciado de todos: el primer
            puesto del Local Pack se lleva el 42% de los clics, y los tres primeros juntos
            concentran prácticamente toda la atención del usuario. Aparecer aquí depende de tu ficha
            de Google Business Profile, de las reseñas y de la cercanía al usuario.
          </p>

          <h3>Google Maps</h3>
          <p>
            Cuando alguien abre directamente la app de Maps y busca "peluquería" o "abogado", ve un
            listado mucho más amplio. Aquí caben más negocios, pero la decisión sigue dependiendo
            de las mismas señales: reseñas recientes, fotos, descripción y horarios actualizados.
          </p>

          <h3>Resultados orgánicos</h3>
          <p>
            Debajo del Local Pack aparecen los resultados clásicos de Google. Aquí compiten las
            páginas web. Si tu web tiene páginas específicas como "fontanero-urgente-madrid" o
            "fisioterapeuta-suelo-pelvico-valencia", puedes aparecer también en este bloque, lo que
            te da un segundo punto de entrada para la misma búsqueda.
          </p>

          <table>
            <thead><tr><th>Bloque</th><th>Qué cliente capta</th></tr></thead>
            <tbody>
              <tr><td>Local Pack</td><td>Cliente con intención inmediata, listo para llamar</td></tr>
              <tr><td>Google Maps</td><td>Cliente que está comparando opciones cercanas</td></tr>
              <tr><td>Orgánico</td><td>Cliente que está investigando antes de decidir</td></tr>
            </tbody>
          </table>

          <h2>Los tres pilares del SEO local</h2>
          <p>
            Aunque hay decenas de factores que influyen en el SEO local, todos se agrupan en tres
            pilares principales. Si cuidas estos tres y los mantienes en el tiempo, ya estás por
            delante de la mayoría de negocios de tu zona.
          </p>

          <h3>Google Business Profile</h3>
          <p>
            Es la base. Sin una ficha bien configurada no apareces en el mapa, da igual lo bueno que
            sea tu servicio. Necesitas una categoría principal correcta, categorías secundarias bien
            elegidas, descripción con palabras clave reales, fotos actualizadas (interior, exterior,
            equipo, trabajos), horarios precisos y publicaciones mensuales para mantener la ficha
            activa.
          </p>

          <h3>Reseñas</h3>
          <p>
            Las reseñas hacen dos cosas a la vez: convencen al cliente y convencen a Google. Una
            ficha con 35 reseñas recientes y respuestas profesionales aparece antes que una con 8
            reseñas de hace dos años, aunque la calidad real del negocio sea idéntica. La clave no
            es solo conseguirlas, es mantener un ritmo constante mes a mes.
          </p>

          <div className="pro-tip">
            <p>
              <strong>Consejo profesional:</strong> pide reseñas el mismo día que terminas el
              servicio, mientras la experiencia está fresca. Un mensaje corto con un enlace directo
              a tu ficha multiplica la tasa de respuesta frente a esperar a la semana siguiente.
            </p>
          </div>

          <h3>Contenido y páginas locales</h3>
          <p>
            Tu web debe tener páginas específicas para cada combinación de servicio + zona que
            quieras posicionar. No vale una página de "Servicios" genérica. Necesitas páginas
            independientes con texto único, ejemplos reales y llamadas a la acción claras. Cuanto
            más concreta sea la página, más probabilidades tiene de aparecer en la búsqueda
            específica del usuario.
          </p>

          <table>
            <thead><tr><th>Pilar</th><th>Lo que aporta</th></tr></thead>
            <tbody>
              <tr><td>Google Business Profile</td><td>Visibilidad en el Local Pack y en Maps</td></tr>
              <tr><td>Reseñas</td><td>Confianza para el cliente y señal positiva para Google</td></tr>
              <tr><td>Contenido y páginas locales</td><td>Visibilidad en orgánico para búsquedas específicas</td></tr>
            </tbody>
          </table>

          <h2>¿Cuándo ves resultados?</h2>
          <p>
            Esta es la pregunta más importante para cualquier negocio nuevo. La respuesta honesta es
            que el SEO local no es un canal inmediato — pero los resultados, cuando llegan, son
            sostenibles. En las primeras 4-6 semanas se hacen las bases: ficha optimizada,
            primeras páginas locales publicadas, primeras reseñas recientes, citaciones en
            directorios.
          </p>
          <p>
            Entre el mes 2 y el mes 4 empiezan a aparecer los primeros movimientos visibles: subes
            posiciones en Maps, recibes algunas llamadas directas desde la ficha y empiezas a
            aparecer para búsquedas con tu nombre + ciudad. A partir del mes 6, los resultados se
            estabilizan y crecen mes a mes sin que tengas que reinventar la estrategia.
          </p>

          <div className="pro-tip">
            <p>
              <strong>Consejo profesional:</strong> el peor error que puedes cometer en SEO local
              es abandonar entre el mes 2 y el mes 3, justo antes de que los resultados empiecen a
              aparecer. Si te comprometes con 6 meses de trabajo constante, las probabilidades de
              tener un canal estable de clientes desde Google son altísimas.
            </p>
          </div>

          <table>
            <thead><tr><th>Mes</th><th>Qué esperar</th></tr></thead>
            <tbody>
              <tr><td>Mes 1</td><td>Bases técnicas: ficha, web, primeras reseñas</td></tr>
              <tr><td>Mes 2-4</td><td>Primeros movimientos en Maps y primeras llamadas</td></tr>
              <tr><td>Mes 6</td><td>Posiciones consolidadas y flujo estable</td></tr>
              <tr><td>Mes 12</td><td>Canal estable y autoridad local construida</td></tr>
            </tbody>
          </table>
        </div>
      </article>

      {/* CTA destacado con formulario */}
      <section className="bg-dark-bg text-dark-fg py-16">
        <div className="container max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl mb-3">
            ¿Sabes cómo ve Google tu negocio ahora mismo?
          </h2>
          <p className="text-dark-fg/80 mb-2">
            La mayoría de negocios pierden clientes cada día por errores invisibles en su perfil de
            Google.
          </p>
          <p className="text-dark-fg/70 text-sm mb-8">
            Rellena el formulario y en menos de 24h recibes un análisis gratuito de tu presencia
            local: ficha, posición en Maps, reseñas y competencia.
          </p>
          <AuditForm />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Preguntas frecuentes" items={faqs} />

      {/* Resumen final */}
      <section className="container max-w-3xl pb-20">
        <div className="bg-warm-bg border border-border rounded-xl p-6 md:p-8">
          <h2 className="font-heading text-xl md:text-2xl mb-4">Resumen</h2>
          <ul className="space-y-2 text-muted-foreground text-sm md:text-base list-disc pl-5">
            <li>El SEO local construye un activo que sigue generando clientes aunque pares la inversión.</li>
            <li>Es ideal para negocios nuevos: inversión baja, competencia local débil y resultados acumulativos.</li>
            <li>Apareces en tres bloques de Google: Local Pack, Maps y resultados orgánicos.</li>
            <li>Los tres pilares son ficha de Google, reseñas constantes y páginas locales en tu web.</li>
            <li>Los primeros resultados llegan en el mes 2-4 y se consolidan a partir del mes 6.</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default BlogSeoLocalEstrategia;
