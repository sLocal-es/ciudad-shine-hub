import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { MapPin, Globe, TrendingUp, ArrowRight } from "lucide-react";

import FAQSection from "@/components/FAQSection";
import { sectors } from "@/data/sectors";
import { cities } from "@/data/cities";


const FisioterapeutasPage = () => {
  const otherSectors = sectors.filter((s) => s.slug !== "seo-para-fisioterapeutas").slice(0, 4);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "SEO para Fisioterapeutas", item: "https://slocal.es/seo-para-fisioterapeutas" },
    ],
  };

  const faqs = [
    {
      q: "¿Cómo conseguir más pacientes como fisioterapeuta desde Google?",
      a: "La forma más estable es aparecer en Google Maps y en las búsquedas locales cuando alguien de tu ciudad escribe 'fisio cerca de mí' o 'fisioterapeuta en tu barrio'. Para conseguirlo se trabajan tres cosas a la vez: la ficha de Google Business Profile, una web multipágina con un apartado por servicio y ciudad, y el posicionamiento local de todo ese conjunto. Cuando esas tres piezas están bien montadas, las llamadas entran solas sin pagar por clic.",
    },
    {
      q: "¿Cuánto cuesta el SEO para fisioterapeutas?",
      a: "En slocal.es trabajamos con planes fijos desde 150 €/mes, sin permanencia ni cláusulas raras. No hay porcentajes sobre resultados ni sorpresas a final de mes. Puedes ver el desglose en la página de planes: incluye optimización de ficha de Google, web local y contenido mensual orientado al posicionamiento de clínicas de fisioterapia.",
    },
    {
      q: "¿Cuánto tarda en posicionar una clínica de fisioterapia en Google?",
      a: "En ciudades pequeñas suelen verse los primeros movimientos en 3-5 semanas. En ciudades grandes como Madrid, Barcelona o Valencia, entrar al pack local de las búsquedas más competidas lleva normalmente entre 2 y 4 meses. Las búsquedas de barrio o de tratamiento concreto (por ejemplo, 'fisio suelo pélvico' en tu zona) responden mucho antes.",
    },
    {
      q: "¿Qué es más importante para un fisioterapeuta: la ficha de Google o la web?",
      a: "Las dos, y funcionan mejor juntas. La ficha de Google Mi Negocio es la que genera la mayoría de llamadas directas desde el móvil. La web multipágina es la que refuerza ese posicionamiento, permite explicar cada servicio (punción seca, suelo pélvico, deportiva) y captar búsquedas más específicas. Separadas funcionan a medias; conectadas se potencian.",
    },
    {
      q: "¿Se puede aparecer en Google Maps sin hacer anuncios?",
      a: "Sí. Todo nuestro trabajo es SEO local orgánico: aparecer en Google Maps y en los resultados normales sin pagar por clic. No usamos Google Ads. El día que dejas de pagar una campaña de anuncios, dejas de aparecer; con posicionamiento local orgánico, el trabajo hecho sigue dando frutos.",
    },
  ];

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
    name: "SEO local para Fisioterapeutas",
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    areaServed: "España",
  };

  return (
    <>
      <SEOHead
        title="SEO para Fisioterapeutas | Google Maps y Web Local"
        description="Posiciona tu clínica de fisioterapia en Google Maps y búsquedas locales. Más citas sin depender de Doctoralia ni del boca a boca. Desde 147€/mes + IVA."
        canonical="/seo-para-fisioterapeutas"
        jsonLd={[breadcrumbSchema, faqSchema, serviceSchema]}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container max-w-4xl">
          <BreadcrumbNav items={[
            { label: "Inicio", href: "/" },
            { label: "SEO para Fisioterapeutas" },
          ]} />
          <span className="inline-block border border-primary text-primary text-xs font-heading rounded-full px-4 py-1.5 mb-6">
            SEO para Fisioterapeutas
          </span>
          <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-6">
            SEO para Fisioterapeutas: Consigue Más Pacientes desde Google
          </h1>
          <p className="text-dark-fg/80 text-base md:text-lg leading-relaxed mb-4 font-body font-light">
            El <strong>seo para fisioterapeutas</strong> no va de teoría ni de palabras raras. Va de algo muy concreto: que cuando un paciente de tu ciudad abra Google y busque "fisio cerca de mí", tu clínica aparezca entre las primeras opciones del mapa. Ese es el trabajo.
          </p>
          <p className="text-dark-fg/80 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
            En slocal.es montamos un sistema de <strong>seo local fisioterapia</strong> que combina tres piezas: tu ficha de Google Business Profile, una web multipágina optimizada y el posicionamiento local de tu clínica. Sin agencias intermediarias, sin publicidad de pago y con precios fijos.
          </p>
          <div className="mb-8 rounded-xl border border-dark-fg/15 bg-dark-fg/5 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:divide-x divide-dark-fg/15">
            {[
              { k: "Primera página", v: "en 2-3 meses" },
              { k: "+15 llamadas/mes", v: "sin publicidad" },
              { k: "147€/mes", v: "precio fijo" },
            ].map((m) => (
              <div key={m.k} className="flex-1 py-2 sm:py-0 sm:px-5 text-center">
                <div className="font-heading text-primary text-base md:text-lg leading-tight">{m.k}</div>
                <div className="text-dark-fg/70 text-xs md:text-sm font-body mt-0.5">{m.v}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">

            <Link to="/contacto" className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors">
              Empezar →
            </Link>
            <Link to="/planes" className="border border-dark-fg/20 text-dark-fg font-heading text-sm rounded-lg px-6 py-3 hover:border-primary hover:text-primary transition-colors">
              Ver planes
            </Link>
          </div>
        </div>
      </section>

      {/* H2 — Cómo conseguir pacientes */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Cómo conseguir pacientes para tu clínica de fisioterapia
          </h2>

          <h3 className="font-heading text-xl mb-3 mt-8">Por qué muchos fisioterapeutas no aparecen cuando un paciente los busca</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            La mayoría de clínicas de fisioterapia tienen la ficha de Google abierta, pero abandonada: sin fotos recientes, sin servicios clasificados correctamente, sin reseñas nuevas en meses. Para Google eso es una señal de inactividad, y el algoritmo prefiere mostrar a quien parece estar más vivo. Por eso profesionales excelentes quedan invisibles mientras clínicas mediocres se llevan los pacientes nuevos.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            Lo mismo ocurre con la web. Una web de una sola página que solo dice "somos fisioterapeutas en tu ciudad" no le da a Google información suficiente para posicionarte. El <em>posicionamiento fisioterapia</em> necesita contenido que explique cada tratamiento y cada zona de servicio por separado.
          </p>

          <h3 className="font-heading text-xl mb-3 mt-8">Qué busca un paciente antes de pedir cita</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            Cuando alguien tiene dolor lumbar, un esguince o sale de una operación, no pregunta al vecino. Coge el móvil y escribe tres palabras en Google. Mira el mapa, lee dos reseñas, comprueba que la ficha tiene fotos reales y llama al primer o segundo resultado. No compara cinco clínicas: quiere resolver el dolor hoy.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            Eso significa que <strong>captar pacientes fisioterapia</strong> desde Google depende de estar en los tres primeros puestos del mapa local. Estar en la posición 7 es, a efectos prácticos, no existir.
          </p>

          <h3 className="font-heading text-xl mb-3 mt-8">Por qué depender solo del boca a boca limita tu crecimiento</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            El boca a boca es estupendo, pero es lento y tiene un techo. Solo te llega gente que conoce a alguien que ya es paciente tuyo. En cambio, Google te pone delante de personas que ni siquiera sabían que existías, justo en el momento en que necesitan un fisio. Es la diferencia entre esperar a que te recomienden y que te encuentren por sí mismos.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            Una clínica bien posicionada localmente puede recibir 20-40 llamadas nuevas al mes sin gastar un euro en anuncios. Eso es crecimiento estable, predecible y que no depende de la suerte.
          </p>
        </div>
      </section>

      {/* H2 — Cómo posicionar tu clínica en Google */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Cómo posicionar tu clínica de fisioterapia en Google
          </h2>

          <h3 className="font-heading text-xl mb-3 mt-8">Qué tiene en cuenta Google para mostrar una clínica local</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            Google combina tres factores cuando decide qué clínica enseñar en el mapa: la relevancia (si tu ficha y tu web coinciden con lo que busca el usuario), la distancia (dónde está el paciente respecto a tu consulta) y la prominencia (cuánta actividad, reseñas y señales tiene tu negocio en internet). Trabajar solo uno de los tres no alcanza.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            Para <em>aparecer en google fisioterapia</em> hay que ordenar esas tres señales a la vez: ficha completa y activa, web coherente con esa ficha y un histórico de reseñas y contenido que respalde la prominencia del negocio.
          </p>

          <h3 className="font-heading text-xl mb-3 mt-8">Por qué una web multipágina ayuda al posicionamiento local</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            Una web de una sola página solo puede posicionar para una o dos búsquedas. Una web multipágina tiene un apartado por cada servicio (punción seca, suelo pélvico, fisioterapia deportiva) y otro por cada zona de influencia. Eso multiplica las búsquedas por las que puedes aparecer.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            Un ejemplo sencillo: si tienes consulta en Chamberí, una página dedicada a "fisioterapia deportiva en Chamberí" puede captar a alguien que busca exactamente eso, mientras tu home genérica seguiría atrayendo búsquedas más amplias. Misma clínica, muchas más puertas de entrada.
          </p>

          <h3 className="font-heading text-xl mb-3 mt-8">Qué errores frenan el posicionamiento de una clínica de fisioterapia</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            Los fallos más habituales que vemos son siempre los mismos: ficha de Google sin categorías secundarias, web que tarda 6 segundos en cargar, fotos de stock en lugar de fotos reales de la consulta, direcciones distintas en la web y en la ficha, y cero publicaciones en Google Business Profile desde hace un año. Cualquiera de esos errores, por separado, ya te frena. Juntos, te hunden.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            Arreglar esto no es una tarea puntual, es un trabajo continuo. Por eso el <strong>posicionamiento clínica fisioterapia</strong> funciona mejor como sistema mensual que como proyecto de un único ajuste.
          </p>
        </div>
      </section>

      {/* H2 — Google Maps */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            SEO local para fisioterapeutas: aparecer en Google Maps
          </h2>

          <h3 className="font-heading text-xl mb-3 mt-8">Cómo funciona Google Maps para negocios locales</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            Cuando alguien hace una búsqueda con intención local (con o sin la palabra "cerca"), Google muestra un bloque de mapa con tres clínicas destacadas encima de los resultados normales. Ese bloque se conoce como <Link to="/posicionamiento-local" className="text-primary hover:underline">pack local y es la llave para aparecer en Google Maps</Link> de tu ciudad. Entrar ahí es lo que hace sonar el teléfono.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            Fuera de ese bloque, el CTR cae en picado. Estar en el cuarto puesto del mapa ya supone recibir una fracción muy pequeña de las llamadas. El trabajo de <em>seo fisioterapia</em> consiste, sobre todo, en meterte dentro de ese top 3.
          </p>

          <h3 className="font-heading text-xl mb-3 mt-8">Qué papel tiene la ficha de Google Business Profile</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            La <Link to="/como-funciona" className="text-primary hover:underline">ficha de Google Mi Negocio</Link> es la pieza más visible de todo el sistema. Es lo que ve el paciente cuando encuentra tu clínica: categorías, servicios, horario, fotos, reseñas y botones de llamada y cómo llegar. Una ficha bien montada convierte visitas en llamadas sin que el usuario llegue a entrar en la web.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            Configuramos las categorías correctas (Fisioterapeuta, Clínica de Fisioterapia, Fisioterapia Deportiva cuando aplica), los servicios concretos (punción seca, suelo pélvico, drenaje linfático, lesiones deportivas), las fotos reales y el sistema de respuesta a reseñas. Todo revisado mes a mes.
          </p>

          <h3 className="font-heading text-xl mb-3 mt-8">Qué señales ayudan a aparecer mejor posicionado en Maps</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            Google premia tres señales claras: reseñas recientes y con texto (no solo estrellas), publicaciones nuevas en la ficha (novedades, ofertas, eventos) y coherencia entre la ficha, la web y otros directorios donde aparece tu clínica. A más constancia, mejor posición en el mapa.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            Si tu clínica está en una ciudad grande, merece la pena revisar también cómo se comportan las búsquedas por barrio. Tenemos páginas específicas de <Link to="/seo-local-madrid" className="text-primary hover:underline">SEO local en Madrid</Link> y de <Link to="/seo-local-barcelona" className="text-primary hover:underline">SEO local en Barcelona</Link> con detalles de cómo funciona el pack local en cada mercado.
          </p>
        </div>
      </section>

      {/* 3 STEPS VISUAL */}
      <section className="bg-dark-bg text-dark-fg py-10">
        <div className="container max-w-4xl">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-2">
            {[
              { I: MapPin, t: "Ficha de Google optimizada" },
              { I: Globe, t: "Web local multipágina" },
              { I: TrendingUp, t: "Contenido mensual" },
            ].map(({ I, t }, i, arr) => (
              <div key={t} className="flex flex-1 items-center gap-3 md:flex-col md:text-center">
                <div className="flex items-center gap-3 md:flex-col flex-1">
                  <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                    <I size={22} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-dark-fg/60 font-heading uppercase tracking-wide">Paso {i + 1}</div>
                    <div className="font-heading text-sm md:text-base text-dark-fg">{t}</div>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight className="text-primary/60 hidden md:block" size={20} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2 — Cómo funciona nuestro sistema */}
      <section className="bg-warm-bg py-16">

        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Cómo funciona nuestro sistema: ficha de Google + web + posicionamiento local
          </h2>
          <p className="text-base leading-relaxed mb-8 text-foreground/80 font-body font-light">
            Nuestro sistema de <strong>seo local fisioterapia</strong> no es una suma de servicios sueltos. Son tres piezas conectadas que se refuerzan entre sí. Esto es lo que hacemos cada mes en tu clínica.
          </p>

          <h3 className="font-heading text-xl mb-3 mt-8">Optimización de la ficha de Google</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            Revisamos y reconfiguramos tu Google Business Profile: categorías, servicios detallados, descripción optimizada, horarios, zonas de servicio si haces visitas a domicilio, fotos reales de la consulta y publicaciones semanales. Una ficha bien gestionada multiplica por tres o por cuatro las llamadas que te llegan desde Google.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            Además te damos una pauta sencilla para pedir reseñas a tus pacientes y un protocolo de respuesta, porque las reseñas nuevas (y la velocidad con que las contestas) son una de las señales más fuertes para Google.
          </p>

          <h3 className="font-heading text-xl mb-3 mt-8">Web local orientada a búsquedas por servicio y ciudad</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            Si ya tienes web, la auditamos y rehacemos su estructura técnica para que Google entienda qué tipo de fisioterapia ofreces y dónde. Si no la tienes, te montamos una desde cero: clara, rápida, con botón de llamar visible y un formulario de reserva sencillo. No es un escaparate bonito, es una máquina diseñada para convertir búsquedas en citas.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            La clave es la estructura multipágina: una página por servicio (punción seca, suelo pélvico, fisioterapia deportiva, recuperación postquirúrgica) y una por cada zona relevante. Así cubres muchas más búsquedas específicas que con una web de una sola página.
          </p>

          <h3 className="font-heading text-xl mb-3 mt-8">Contenido y estructura interna para reforzar el posicionamiento</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            Cada mes publicamos uno o dos artículos en tu web sobre las dudas reales de tus pacientes: "cuánto tarda en curar un esguince", "ejercicios para hernia discal", "cuándo ir al fisio después de un accidente". Esos artículos atraen tráfico cualificado y, lo más importante, enlazan internamente con tus páginas de servicio.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            En seis meses tu web pasa de cinco páginas a treinta, cada una posicionando para búsquedas distintas. Ese es el efecto compuesto del <em>posicionamiento fisioterapia</em>: no depende de un único golpe de suerte, sino de ir sumando piezas mes tras mes.
          </p>
        </div>
      </section>

      {/* CASE */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Caso real: clínica de fisioterapia en Valencia
          </h2>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            Una clínica familiar de Valencia llegó a slocal.es con la ficha de Google sin tocar desde 2021 y una web que cargaba en seis segundos. Reorganizamos la ficha, subimos 28 fotos reales y arrancamos con dos publicaciones semanales.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            Mes 1: primeras impresiones en Google Maps por "fisio cerca de mí" en su barrio. Mes 2: 4 llamadas nuevas atribuidas directamente a Google. Mes 4: más de 15 llamadas mensuales desde Google, sin haber gastado un euro en publicidad.
          </p>
        </div>
      </section>

      {/* PLAN ÚNICO */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-3 text-center">Servicio de SEO para fisioterapeutas</h2>
          <p className="text-base text-muted-foreground font-body font-light text-center mb-10">
            Todo lo que necesita tu clínica para aparecer cuando alguien busca fisioterapeuta en tu ciudad.
          </p>
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm">
            <span className="inline-block bg-primary/10 text-primary text-xs font-heading rounded-full px-3 py-1 mb-5">
              PLAN SLOCAL.ES
            </span>
            <p className="font-heading text-4xl md:text-5xl mb-8">
              147€<span className="text-lg text-muted-foreground font-body font-light">/mes + IVA</span>
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Tu clínica aparece cuando alguien busca fisioterapeuta en tu ciudad",
                "Más citas directas desde Google — sin depender de recomendaciones",
                "Contenido mensual que posiciona para cada tratamiento y zona",
                "Tu ficha de Google activa — Google te muestra antes que a la competencia",
                "Cada mes sabes exactamente cuántas citas ha generado Google",
                "Hablas siempre con la misma persona — sin intermediarios",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm md:text-base font-body">
                  <span className="text-primary font-heading">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contacto"
              className="inline-block bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors"
            >
              Empezar →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Preguntas frecuentes sobre SEO para fisioterapeutas" items={faqs} />

      {/* RELATED SECTORS */}
      <section className="bg-warm-bg py-12">
        <div className="container">
          <h2 className="font-heading text-xl mb-6">También trabajamos con otros sectores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {otherSectors.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="bg-card border border-border rounded-xl p-5 transition-all duration-200 hover:border-primary hover:-translate-y-[3px] group"
              >
                <h3 className="font-heading text-sm group-hover:text-primary transition-colors mb-1">{s.relatedLabel}</h3>
                <p className="text-xs text-muted-foreground">{s.relatedDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-primary py-16">
        <div className="container text-center max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-4">
            Empieza a conseguir pacientes esta semana
          </h2>
          <p className="text-primary-foreground/90 mb-8 leading-relaxed">
            Cada semana invisible en Google es una semana de pacientes que llaman a otra clínica. En 30 días tu ficha estará optimizada, tu web local indexada y tu primer contenido publicado.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contacto" className="bg-card text-primary font-heading text-sm rounded-lg px-8 py-3 hover:bg-card/90 transition-colors">
              Hablemos →
            </Link>
            <Link to="/planes" className="border border-primary-foreground/30 text-primary-foreground font-heading text-sm rounded-lg px-8 py-3 hover:bg-primary-foreground/10 transition-colors">
              Ver planes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FisioterapeutasPage;
