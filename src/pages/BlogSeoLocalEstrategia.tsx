import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const POST = {
  slug: "seo-local-mejor-estrategia-marketing-nuevo-negocio",
  title: "SEO local: la mejor estrategia de marketing para iniciar un negocio",
  metaTitle: "SEO local: la mejor estrategia para iniciar un negocio | slocal.es",
  metaDescription:
    "Descubre por qué el SEO local supera a los anuncios cuando inicias un negocio. Datos reales, estrategia paso a paso y auditoría gratuita.",
  date: "2026-05-13",
  category: "SEO Local",
  featuredImage: "/blog/estrategia-portada.jpg",
  altText:
    "Móvil mostrando resultados locales en Google Maps al buscar un servicio cerca",
};

const FAQS = [
  {
    q: "¿Cuánto tarda el SEO local en dar resultados?",
    a: "Una ficha de Google Business Profile bien optimizada puede empezar a generar visualizaciones y llamadas en pocas semanas. El posicionamiento orgánico de la web en búsquedas locales suele tardar entre 2 y 6 meses, dependiendo de competencia y constancia. A diferencia de los anuncios, esos resultados no desaparecen cuando dejas de pagar.",
  },
  {
    q: "¿Es mejor SEO local o Google Ads para empezar?",
    a: "Para un negocio que arranca con presupuesto ajustado, el SEO local es más rentable a medio plazo. Los anuncios funcionan mientras pagas; el SEO local se acumula. Lo ideal cuando hay presupuesto: usar Ads de forma puntual para los primeros meses mientras el SEO local toma posiciones que se quedan contigo.",
  },
  {
    q: "¿Necesito una web para hacer SEO local?",
    a: "No es imprescindible para empezar — con una ficha de Google Business Profile bien trabajada ya puedes aparecer en el Local Pack. Pero para escalar y posicionarte en más búsquedas, una web sencilla con páginas por servicio y por zona multiplica los resultados.",
  },
  {
    q: "¿Qué es el Local Pack de Google?",
    a: "El Local Pack es el bloque de 3 negocios con mapa que aparece arriba en Google cuando buscas algo con intención local (por ejemplo 'fontanero cerca de mí'). Concentra alrededor del 42% de los clics en esas búsquedas. Aparecer ahí es el principal objetivo del SEO local.",
  },
  {
    q: "¿Funciona el SEO local para cualquier tipo de negocio?",
    a: "Sí, siempre que tu negocio dependa de clientes en una zona concreta: clínicas, autónomos a domicilio, comercios, restaurantes, profesionales con local, empresas de servicios, etc. Si vendes online a toda España sin componente local, hay otras estrategias más adecuadas.",
  },
];

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

const CONTENT_HTML = `
  <p>Cuando montas un negocio, la primera pregunta es siempre la misma: ¿cómo consigo clientes? Redes sociales, anuncios, boca a boca... Hay mil opciones. Pero si tu negocio depende de clientes en una zona concreta, hay una estrategia que las supera a todas al inicio: el SEO local. Y los datos lo confirman.</p>

  <nav class="toc">
    <h2>Tabla de Contenidos</h2>
    <ul>
      <li><a href="#por-que">Por qué el SEO local supera a los anuncios al inicio</a></li>
      <li><a href="#google-ahora">Lo que está pasando ahora mismo en Google</a></li>
      <li><a href="#pilares">Los tres pilares del SEO local</a></li>
      <li><a href="#cuando">Cuándo verás resultados</a></li>
      <li><a href="#errores">Errores más comunes al empezar</a></li>
      <li><a href="#slocal">Cómo te ayudamos desde slocal.es</a></li>
      <li><a href="#faq">Preguntas frecuentes</a></li>
    </ul>
  </nav>

  <div class="key-points">
    <h2>Puntos clave</h2>
    <table>
      <thead><tr><th>Punto</th><th>Dato</th></tr></thead>
      <tbody>
        <tr><td>Búsquedas "cerca de mí" al mes</td><td>+1.500 millones</td></tr>
        <tr><td>Búsquedas con intención local en Google</td><td>46% del total</td></tr>
        <tr><td>Personas que visitan el negocio tras buscar</td><td>76% en menos de 24h</td></tr>
        <tr><td>Clics al primer resultado del Local Pack</td><td>42%</td></tr>
        <tr><td>Más probabilidad de generar confianza con perfil completo</td><td>70%</td></tr>
      </tbody>
    </table>
  </div>

  <h2 id="por-que">Por qué el SEO local supera a los anuncios al inicio</h2>
  <p>Los anuncios de Google o Meta dan resultados rápidos, pero tienen un problema: en el momento que dejas de pagar, desapareces. El SEO local funciona al revés. Inviertes una vez y el posicionamiento se mantiene y crece con el tiempo. Para un negocio que empieza, con presupuesto limitado, esa diferencia lo cambia todo.</p>
  <div class="stat-highlight">
    <strong>Dato real:</strong> Las empresas con perfil de Google completo tienen un 70% más de probabilidades de atraer visitas y un 50% más de ser consideradas para una compra.
  </div>
  <div class="pro-tip">
    <strong>Consejo profesional:</strong> No compitas con anuncios contra empresas que llevan años en el mercado y tienen presupuestos mayores. Posiciónate en Google Maps — ahí el presupuesto no decide, decide el trabajo.
  </div>

  <h2 id="google-ahora">Lo que está pasando ahora mismo en Google</h2>
  <img src="/blog/estrategia-stats-mapa.svg" alt="Infografía con estadísticas de búsquedas locales en Google España" />
  <p>El comportamiento del usuario ha cambiado. Hoy, Google es el primer paso de casi cualquier decisión de compra local: 1.500 millones de búsquedas "cerca de mí" cada mes, el 46% de las búsquedas tienen intención local, el 76% de quienes buscan visitan el negocio en menos de 24 horas y el 28% acaban generando una venta directa.</p>
  <table>
    <thead><tr><th>Comportamiento del usuario</th><th>Dato</th></tr></thead>
    <tbody>
      <tr><td>Búsquedas "cerca de mí" cada mes</td><td>+1.500 millones</td></tr>
      <tr><td>Visitas al negocio en menos de 24h</td><td>76%</td></tr>
      <tr><td>Búsquedas que generan venta en 24h</td><td>28%</td></tr>
      <tr><td>Clics al primer resultado del Local Pack</td><td>42%</td></tr>
      <tr><td>Usuarios que buscan en móvil</td><td>84%</td></tr>
    </tbody>
  </table>

  <h2 id="pilares">Los tres pilares del SEO local</h2>
  <img src="/blog/estrategia-tres-pilares.svg" alt="Los tres pilares del SEO local: Google Business Profile, reseñas y contenido" />

  <h3>1. Google Business Profile</h3>
  <p>Tu ficha de Google es la puerta de entrada. Aparece en Maps, en el Local Pack y en búsquedas con marca. Una ficha incompleta es invisible; una ficha completa, con fotos reales, horarios actualizados, productos y publicaciones, multiplica las llamadas.</p>
  <div class="stat-highlight">
    <strong>Dato real:</strong> Los negocios con perfil completo tienen el doble de probabilidades de generar confianza según Google.
  </div>

  <h3>2. Reseñas</h3>
  <p>Las reseñas son el factor más visible para el cliente y uno de los más importantes para Google. No basta con tenerlas: hace falta cantidad, frecuencia y respuesta activa.</p>
  <table>
    <thead><tr><th>Reseñas activas</th><th>Probabilidad de aparecer en el Pack de 3</th></tr></thead>
    <tbody>
      <tr><td>0-5</td><td>Muy baja</td></tr>
      <tr><td>10-20</td><td>Empiezas a competir por barrio</td></tr>
      <tr><td>20-40 con respuesta</td><td>Alta en búsquedas locales</td></tr>
      <tr><td>+40 con respuesta semanal</td><td>Alta en búsquedas generales</td></tr>
    </tbody>
  </table>

  <h3>3. Contenido y páginas locales</h3>
  <p>Tu web le dice a Google qué eres y dónde trabajas. Sin páginas específicas por servicio y por zona, Google no sabe a quién enviarte. Con ellas, capturas búsquedas hiperlocales con muy poca competencia.</p>
  <div class="pro-tip">
    <strong>Consejo profesional:</strong> Crea una página específica por cada servicio y cada zona donde trabajas. "Fontanero en Chamberí" y "fontanero en Vallecas" son búsquedas distintas. Si tu web no lo dice, Google elige a otro.
  </div>

  <h2 id="cuando">¿Cuándo verás resultados?</h2>
  <p>Seamos honestos: el SEO local no es magia, es constancia. Una ficha de Google Business Profile bien optimizada puede empezar a dar resultados en pocas semanas — visualizaciones, llamadas y rutas. El posicionamiento orgánico de la web en búsquedas locales suele tomar entre 2 y 6 meses. La buena noticia: cada mes de trabajo se acumula. Lo que ganas, se queda.</p>
  <div class="stat-highlight">
    <strong>Dato real:</strong> Las páginas mejor posicionadas llevan de media más de dos años y medio rankeando — pero en SEO local los primeros resultados llegan mucho antes.
  </div>

  <h2 id="errores">Errores más comunes al empezar</h2>
  <table>
    <thead><tr><th>Error</th><th>Impacto</th><th>Solución</th></tr></thead>
    <tbody>
      <tr><td>Ficha de Google incompleta</td><td>Invisibilidad en Maps</td><td>Completar cada campo con detalle</td></tr>
      <tr><td>Web genérica sin zonas ni servicios específicos</td><td>Google no sabe a quién mandarte</td><td>Páginas por servicio y ciudad</td></tr>
      <tr><td>Sin reseñas o sin responderlas</td><td>Menos confianza y peor posición</td><td>Pedir y responder activamente</td></tr>
      <tr><td>Datos distintos en web y ficha</td><td>Google duda de tu negocio</td><td>NAP idéntico en todas partes</td></tr>
      <tr><td>Esperar resultados sin trabajo continuo</td><td>Estancamiento</td><td>Publicaciones y reseñas mensuales</td></tr>
    </tbody>
  </table>
`;

const RESUMEN_HTML = `
  <h2>Resumen</h2>
  <ul>
    <li>El SEO local no se detiene cuando dejas de pagar — los anuncios sí</li>
    <li>El 46% de las búsquedas en Google tienen intención local</li>
    <li>El 76% de quienes buscan localmente visitan el negocio en 24h</li>
    <li>Google Business Profile optimizado puede dar resultados en semanas</li>
    <li>Cada mes de trabajo suma posiciones que no desaparecen</li>
  </ul>
  <p style="margin-top:24px;">¿Quieres profundizar más? Lee nuestra guía completa sobre <a href="/seo-para-negocios-locales">SEO para negocios locales</a> o vuelve al <a href="/blog">blog</a> para más artículos.</p>
`;

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
    image: `https://slocal.es${POST.featuredImage}`,
    mainEntityOfPage: `https://slocal.es/blog/${POST.slug}`,
    inLanguage: "es",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://slocal.es/blog" },
      { "@type": "ListItem", position: 3, name: POST.title, item: `https://slocal.es/blog/${POST.slug}` },
    ],
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

  const dateFormatted = new Date(POST.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <SEOHead
        title={POST.metaTitle}
        description={POST.metaDescription}
        canonical={`/blog/${POST.slug}`}
        ogImage={`https://slocal.es${POST.featuredImage}`}
        jsonLd={[articleSchema, breadcrumbSchema, faqSchema]}
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
            <span className="text-xs text-dark-fg/60">{dateFormatted}</span>
            <span className="text-xs text-dark-fg/60">· 6 min de lectura</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl leading-tight">{POST.title}</h1>
        </div>
      </section>

      {/* Featured image */}
      <div className="container max-w-3xl -mt-4 mb-10">
        <img
          src={POST.featuredImage}
          alt={POST.altText}
          className="w-full rounded-xl border border-border"
          loading="lazy"
        />
      </div>

      {/* Content (intro → errores) */}
      <article className="container max-w-3xl pb-12">
        <div
          className="prose prose-sm md:prose-base max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-li:text-muted-foreground prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: CONTENT_HTML }}
        />
      </article>

      {/* CTA inline form (replaces "cómo te ayudamos") */}
      <section id="slocal" className="bg-dark-bg text-dark-fg py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            ¿Sabes cómo ve Google tu negocio ahora mismo?
          </h2>
          <p className="text-dark-fg/70 text-sm md:text-base max-w-xl mx-auto mb-8">
            La mayoría de negocios pierden clientes cada día por errores invisibles en su perfil de
            Google. Rellena el formulario y en menos de 24h recibes un análisis gratuito.
          </p>
          <AuditForm />
        </div>
      </section>

      {/* Resumen + internal links */}
      <article className="container max-w-3xl py-12">
        <div
          className="prose prose-sm md:prose-base max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-li:text-muted-foreground prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: RESUMEN_HTML }}
        />
      </article>

      {/* FAQ */}
      <section id="faq">
        <FAQSection title="Preguntas frecuentes" items={FAQS} />
      </section>

      {/* Final CTA — same component as Córdoba */}
      <CTASection
        title="¿Quieres que tu negocio aparezca primero en Google?"
        buttonText="Hablemos →"
      />
    </>
  );
};

export default BlogSeoLocalEstrategia;
