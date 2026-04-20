import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import PlanCards from "@/components/PlanCards";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { sectors } from "@/data/sectors";
import { cities } from "@/data/cities";

const FisioterapeutasPage = () => {
  const sector = sectors.find((s) => s.slug === "seo-para-fisioterapeutas");
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
      q: "¿En cuánto tiempo veré los primeros pacientes desde Google?",
      a: "En clínicas de fisioterapia los primeros movimientos se ven entre el mes 1 y el mes 2. Las llamadas y reservas suelen empezar a partir del segundo mes, una vez que la ficha de Google Maps está optimizada y la web indexada para tus búsquedas locales.",
    },
    {
      q: "¿Sirve el SEO si soy fisioterapeuta autónomo y no tengo clínica?",
      a: "Sí. El seo local fisioterapeuta funciona igual de bien para profesionales que pasan consulta a domicilio o que alquilan una sala. Lo importante es tener una dirección o zona de servicio definida y un teléfono de contacto.",
    },
    {
      q: "¿Tengo que pagar publicidad en Google además del plan mensual?",
      a: "No. Todo el trabajo es SEO orgánico: tu ficha de Google Maps, tu web y tus artículos posicionando solos. Sin Google Ads, sin pagar por clic. Cuando dejas de pagar el plan, no se cae todo de golpe como pasa con la publicidad.",
    },
    {
      q: "¿Necesito tener web hecha para empezar?",
      a: "No. Si no tienes web te creamos una optimizada para SEO en el setup inicial. Si ya tienes web, la auditamos y aplicamos los cambios técnicos necesarios para que Google la entienda como una clínica de fisioterapia local.",
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
    name: "SEO para Fisioterapeutas",
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    areaServed: "España",
  };

  return (
    <>
      <SEOHead
        title="SEO para Fisioterapeutas | Consigue Pacientes en Google"
        description="¿Eres fisioterapeuta y quieres más pacientes? Te posicionamos en Google Maps y búsquedas locales. Sin agencias. Resultados desde el mes 1. Desde €150/mes."
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
            El <strong>seo para fisioterapeutas</strong> es hoy la diferencia entre tener la agenda llena cada semana o vivir esperando que alguien te recomiende. Cuando una persona tiene una contractura, un esguince o sale de una operación, lo primero que hace no es preguntar a su vecina: abre Google y escribe "fisioterapeuta cerca de mí". Si no apareces ahí, no existes.
          </p>
          <p className="text-dark-fg/80 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
            En slocal.es te posicionamos en Google Maps y en las búsquedas locales de tu ciudad sin agencias intermediarias, con precios fijos y resultados medibles desde el primer mes.
          </p>
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

      {/* H2 — Por qué pierden pacientes */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            ¿Por qué los fisioterapeutas pierden pacientes en Google?
          </h2>

          <h3 className="font-heading text-xl mb-3 mt-8">El paciente busca fisio en Google antes de llamar</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            Hace diez años, un paciente con dolor lumbar preguntaba al médico de cabecera o se fiaba del cartel del barrio. Hoy abre el móvil, escribe tres palabras en Google y elige entre los tres primeros resultados que ve en el mapa. Si tu clínica no está ahí, ese paciente nunca sabrá que existes — aunque tu consulta esté literalmente a 200 metros de su casa.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            La realidad es dura: más del 80% de las personas que buscan un fisioterapeuta llaman al primer o segundo resultado del mapa de Google. No comparan, no leen la web entera, no piden referencias. Quieren resolver el dolor cuanto antes. Si apareces en la posición 7, da igual lo bueno que seas técnicamente: no recibirás esa llamada.
          </p>

          <h3 className="font-heading text-xl mb-3 mt-8">Si no apareces en el mapa local, no existes</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            Google muestra un bloque de mapa con tres clínicas destacadas justo encima de los resultados normales. Ese bloque, conocido como "pack local", se lleva la mayoría de las llamadas. Estar dentro de esos tres puestos significa que tu teléfono suena varias veces al día. Estar fuera significa que suena cuando alguien te recomienda explícitamente.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            La mayoría de fisioterapeutas tienen ficha de Google Maps abierta pero abandonada: sin fotos recientes, sin servicios bien clasificados, sin reseñas nuevas en meses. Eso le dice a Google que la clínica no está activa, y el algoritmo prefiere mostrar a quien parece estar más vivo. Por eso muchos profesionales excelentes están invisibles mientras clínicas mediocres se llevan los pacientes nuevos.
          </p>
        </div>
      </section>

      {/* H2 — Qué incluye el SEO */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Qué incluye el SEO para fisioterapeutas con slocal.es
          </h2>

          <h3 className="font-heading text-xl mb-3 mt-8">Optimización de tu ficha de Google Maps</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            Tu Google Business Profile es la pieza más importante del seo local fisioterapeuta. Configuramos las categorías correctas (Fisioterapeuta, Clínica de Fisioterapia, Fisioterapia Deportiva si aplica), añadimos los servicios concretos que ofreces (punción seca, suelo pélvico, drenaje linfático, lesiones deportivas), subimos fotos reales de la consulta y publicamos novedades cada semana para mantener la ficha activa ante Google.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            Además optimizamos el horario, la zona de servicio si haces visitas a domicilio, los enlaces a reserva online si los usas y el sistema de respuesta a reseñas. Una ficha bien gestionada multiplica por tres o por cuatro el número de llamadas que llegan desde Google sin tocar una sola línea de la web.
          </p>

          <h3 className="font-heading text-xl mb-3 mt-8">Página web con estructura semántica para posicionarte</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            Si ya tienes web, la auditamos y rehacemos su estructura técnica para que Google entienda exactamente qué tipo de fisioterapia ofreces y dónde la ofreces. Esto significa títulos optimizados, descripciones por servicio, esquema de datos LocalBusiness y MedicalBusiness, velocidad de carga corregida y versión móvil impecable.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            Si no tienes web, te montamos una desde cero pensada para conversión: clara, rápida, con un botón de llamar visible en cada página y un formulario de reserva que no asuste al paciente. La web no es un escaparate bonito: es una máquina diseñada para convertir búsquedas en citas.
          </p>

          <h3 className="font-heading text-xl mb-3 mt-8">Artículos de blog con keywords de alta intención</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            Cada mes publicamos artículos en tu web sobre las dudas que tus futuros pacientes están escribiendo en Google ahora mismo: "cuánto tarda en curar un esguince de tobillo", "ejercicios para hernia discal", "cuándo ir al fisio después de un accidente de coche". Estos artículos atraen tráfico cualificado que muchas veces termina pidiendo cita.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            No son artículos genéricos copiados de internet. Cada uno se escribe para captar una intención de búsqueda real, posicionar para una pregunta concreta y enlazar internamente con tu página de servicios. En seis meses tu web pasa de tener cinco páginas a tener treinta, y cada una atrae visitas distintas.
          </p>
        </div>
      </section>

      {/* H2 — Cómo buscan */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            ¿Cómo buscan fisioterapeuta los pacientes en Google?
          </h2>

          <h3 className="font-heading text-xl mb-3 mt-8">Búsquedas locales más frecuentes en fisioterapia</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            Las búsquedas más habituales que tus futuros pacientes están escribiendo son del tipo "<strong>fisioterapeuta cerca de mí</strong>", "<strong>clínica de fisioterapia en Valencia</strong>" (o tu ciudad), "<strong>fisio para lesión de espalda</strong>" y "<strong>fisioterapeuta deportivo</strong>". Cada una de esas búsquedas representa a una persona que tiene un dolor concreto, dinero en la cartera y ganas de coger el teléfono.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            Nuestro trabajo es asegurar que cuando esa búsqueda ocurre desde un móvil dentro de tu zona de influencia, Google te muestre. Para ello combinamos optimización de la ficha local, contenido específico en la web por cada tipo de tratamiento y enlazado interno entre artículos de blog y páginas de servicio.
          </p>

          <h3 className="font-heading text-xl mb-3 mt-8">Por qué la intención de búsqueda en fisioterapia es muy alta</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            Nadie busca "fisioterapeuta" por aburrimiento. Cuando alguien teclea esa palabra en Google es porque tiene dolor, porque acaba de salir del traumatólogo con una receta o porque su mutua le ha dicho que se busque uno. La intención de compra es altísima: el ratio de llamada por visita en clínicas de fisioterapia bien posicionadas suele estar entre el 8% y el 15%, mucho más alto que en sectores como abogados o reformas.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            Esto significa que no necesitas miles de visitas mensuales para llenar la agenda. Con 300 visitas al mes desde Google bien orientadas, una clínica pequeña puede generar 25-40 llamadas nuevas, suficiente para llenar varias semanas de citas. El seo local fisioterapeuta no busca volumen, busca personas que ya quieren reservar.
          </p>
        </div>
      </section>

      {/* H2 — Resultados reales */}
      <section className="bg-warm-bg py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Resultados reales de fisioterapeutas con slocal.es
          </h2>

          <h3 className="font-heading text-xl mb-3 mt-8">Caso: clínica de fisioterapia en Valencia — 4 llamadas en el mes 2</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            Una clínica de fisioterapia familiar de Valencia llegó a slocal.es con una ficha de Google sin tocar desde 2021, sin fotos actualizadas y con la web cargando en seis segundos. Empezamos por reorganizar la ficha, añadir veintiocho fotos nuevas de la consulta y los tratamientos, y publicar dos posts semanales con casos reales y consejos de recuperación.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            En el mes 1 ya empezaron a aparecer impresiones en Google Maps por búsquedas como "fisio cerca de mí" en su barrio. En el mes 2 recibieron 4 llamadas nuevas atribuidas directamente a Google, todas convertidas en pacientes. En el mes 4 las llamadas mensuales desde Google superaron las 15, sin haber gastado un euro en publicidad.
          </p>
        </div>
      </section>

      {/* H2 — Cuánto tarda */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            ¿Cuánto tarda en funcionar el SEO para una clínica de fisioterapia?
          </h2>

          <h3 className="font-heading text-xl mb-3 mt-8">Resultados en ciudades pequeñas vs grandes</h3>
          <p className="text-base leading-relaxed mb-4 text-foreground/80 font-body font-light">
            En ciudades pequeñas y pueblos de menos de 50.000 habitantes, los primeros movimientos en Google Maps suelen verse en 3-5 semanas. La competencia local es baja, hay pocas clínicas peleando por las mismas búsquedas y basta con tener la ficha bien optimizada y la web técnicamente correcta para empezar a recibir llamadas en el primer o segundo mes.
          </p>
          <p className="text-base leading-relaxed mb-6 text-foreground/80 font-body font-light">
            En grandes ciudades como Madrid, Barcelona o Valencia el plazo se estira a 2-4 meses para entrar en el pack local de las búsquedas más codiciadas. Hay decenas de clínicas peleando por la misma keyword, así que aquí el blog mensual y el enlazado interno se vuelven críticos para diferenciarte. Aun así, las búsquedas de barrio o de tratamiento específico ("fisio suelo pélvico Chamberí") suelen rendir mucho antes.
          </p>
        </div>
      </section>

      {/* PLANS */}
      <section className="bg-warm-bg py-16">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl mb-8 text-center">Elige tu plan</h2>
          <PlanCards />
          <p className="text-center text-sm text-muted-foreground mt-6">Ideal para clínicas de fisioterapia y profesionales autónomos.</p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Preguntas frecuentes" items={faqs} />

      {/* CITY LINKS */}
      <section className="py-12">
        <div className="container">
          <h2 className="font-heading text-xl mb-6">Ciudades donde trabajamos con fisioterapeutas</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            El sistema de visibilidad local para fisioterapeutas funciona en toda España. Estas son las ciudades donde ya tenemos páginas dedicadas con contenido específico para posicionar tu clínica en Google.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                to={`/seo-para-fisioterapeutas/${c.slug}`}
                className="border border-border bg-card rounded-xl px-5 py-3 text-sm font-heading hover:border-primary hover:text-primary transition-colors text-center"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

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

      {/* H2 — Empieza */}
      <section className="bg-primary py-16">
        <div className="container text-center max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-4">
            Empieza a conseguir pacientes esta semana
          </h2>
          <p className="text-primary-foreground/90 mb-8 leading-relaxed">
            Cada semana que pasas invisible en Google es una semana de pacientes que han llamado a otra clínica. Empieza hoy y en 30 días tu ficha estará optimizada, tu web indexada y tu primer artículo publicado.
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
