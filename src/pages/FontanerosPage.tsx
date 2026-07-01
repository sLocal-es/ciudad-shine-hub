import { Link } from "react-router-dom";
import {
  Search,
  Wrench,
  Flame,
  Droplets,
  Clock,
  MapPin,
  Sparkles,
  BarChart3,
  Settings2,
  Rocket,
  TrendingUp,
  RefreshCw,
  Activity,
  Radar,
  Shield,
  Phone,
  ImageIcon,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const FontanerosPage = () => {
  const faqs = [
    {
      q: "¿Vale la pena el SEO para un fontanero autónomo?",
      a: "Sí. La mayoría de nuestros clientes son autónomos o empresas de 2-3 personas. El SEO local es especialmente rentable para fontaneros porque cada trabajo puede valer entre 80€ y varios miles en instalaciones grandes. Una llamada adicional al mes ya amortiza el servicio.",
    },
    {
      q: "¿Necesito web si ya tengo ficha de Google?",
      a: "La ficha sola posiciona en Maps, pero una web refuerza la autoridad y te permite aparecer también en los resultados orgánicos. El servicio incluye ambas desde el inicio.",
    },
    {
      q: "¿Cómo compito con fontaneros que llevan años en Google?",
      a: "El SEO local favorece la proximidad y la relevancia, no el tiempo en el mercado. Un fontanero con ficha bien optimizada y reseñas recientes en su barrio aparece antes que una empresa grande con ficha abandonada.",
    },
    {
      q: "¿Funciona especialmente para urgencias?",
      a: "Especialmente para urgencias. Las búsquedas de urgencia tienen la mayor intención de compra y en muchas zonas hay menos competencia bien posicionada. Configuramos tu ficha y contenido específicamente para 'fontanero urgente', 'avería ahora' y 'fontanero 24h'.",
    },
    {
      q: "¿Cuándo empiezo a recibir más llamadas?",
      a: "Los primeros contactos desde Google suelen aparecer entre el mes 2 y el mes 3. Las urgencias se captan antes porque la intención de búsqueda es inmediata y la competencia bien posicionada es menor en esas queries específicas.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "SEO para Fontaneros", item: "https://slocal.es/seo-para-fontaneros" },
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
    name: "SEO para Fontaneros",
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    areaServed: "España",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "slocal.es",
    url: "https://slocal.es",
    description: "Servicio de SEO local para fontaneros en España",
    areaServed: "España",
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
  };

  const serviceTypes = [
    "Fontanero urgente y averías",
    "Fontanero 24 horas",
    "Instalación y cambio de caldera",
    "Detección y reparación de fugas",
    "Fontanero para comunidades",
    "Instalaciones de fontanería",
    "Desatascos y tuberías",
    "Fontanero para reformas",
  ];

  const cities = [
    { name: "Madrid", slug: "madrid" },
    { name: "Barcelona", slug: "barcelona" },
    { name: "Valencia", slug: "valencia" },
    { name: "Sevilla", slug: "sevilla" },
    { name: "Málaga", slug: "malaga" },
    { name: "Zaragoza", slug: "zaragoza" },
    { name: "Bilbao", slug: "bilbao" },
    { name: "Murcia", slug: "murcia" },
  ];

  const otherSectors = [
    { label: "SEO para fisioterapeutas", slug: "seo-para-fisioterapeutas" },
    { label: "SEO para empresas de reformas", slug: "seo-para-reformas" },
    { label: "SEO para pintores", slug: "seo-para-pintores" },
    { label: "SEO para clínicas", slug: "seo-para-clinicas" },
    { label: "SEO para entrenadores personales", slug: "seo-para-entrenadores" },
    { label: "SEO para yoga y pilates", slug: "seo-para-yoga" },
  ];

  const searchQueries = [
    { icon: Clock, text: "Fontanero urgente" },
    { icon: Phone, text: "Fontanero 24 horas" },
    { icon: Droplets, text: "Reparación de fugas" },
    { icon: Flame, text: "Instalación de caldera" },
    { icon: Wrench, text: "Desatascos" },
    { icon: MapPin, text: "Fontanero cerca de mí" },
  ];

  const processSteps = [
    { n: "01", icon: Search, h: "Descubrimos qué servicios tienen más demanda" },
    { n: "02", icon: Radar, h: "Analizamos cómo entiende Google tu empresa" },
    { n: "03", icon: Settings2, h: "Optimizamos tu web y tu ficha para esas búsquedas" },
    { n: "04", icon: Rocket, h: "Empiezas a aparecer cuando te buscan" },
  ];

  const monthlyReasons = [
    { icon: TrendingUp, h: "Tus competidores siguen trabajando" },
    { icon: RefreshCw, h: "Google cambia constantemente" },
    { icon: Activity, h: "Tu ficha necesita actividad" },
    { icon: Sparkles, h: "Aparecen nuevas búsquedas" },
    { icon: Shield, h: "Seguimos reforzando tu presencia" },
  ];

  // Reused visual placeholder for real screenshots inserted later
  const Placeholder = ({ label, ratio = "aspect-[4/3]" }: { label: string; ratio?: string }) => (
    <div
      className={`${ratio} w-full rounded-xl border border-dark-fg/15 bg-dark-fg/[0.03] flex flex-col items-center justify-center gap-2 text-dark-fg/50 text-xs text-center p-6`}
    >
      <ImageIcon className="w-6 h-6" />
      <span className="font-body">[{label}]</span>
    </div>
  );

  const steps = [
    {
      n: "01",
      h: "Optimizamos tu ficha de Google para búsquedas de urgencias",
      p: "Configuramos las categorías correctas para fontanería y urgencias, la descripción con keywords de alta intención (avería, urgente, 24h, fuga), fotos del trabajo real, horarios de disponibilidad y zona de servicio por barrios. Google necesita señales claras de que eres el fontanero más relevante de tu zona para mostrarte en el top 3 cuando hay una urgencia.",
    },
    {
      n: "02",
      h: "Creamos páginas específicas para cada tipo de servicio",
      p: 'Una web con página por tipo de avería y zona permite aparecer en búsquedas específicas de alta conversión: "instalación caldera Madrid", "detección fugas Valencia", "fontanero urgente Chamberí". Cada página ataca una búsqueda concreta. Los competidores con una sola página genérica no pueden competir con eso.',
    },
    {
      n: "03",
      h: "Gestionamos tu reputación y te informamos de resultados",
      p: "Las reseñas son el factor que más influye en que alguien te llame o llame a otro. Gestionamos la obtención y respuesta de reseñas de forma estratégica. Cada mes recibes un informe claro: posiciones en Google Maps, llamadas recibidas y qué búsquedas te están trayendo trabajo.",
    },
  ];

  return (
    <>
      <SEOHead
        title="SEO para Fontaneros | Consigue Más Llamadas desde Google | slocal.es"
        description="Haz que tu negocio de fontanería aparezca cuando alguien busca fontanero urgente en tu ciudad. Más llamadas, más trabajos. Desde 147€/mes + IVA."
        canonical="/seo-para-fontaneros"
        jsonLd={[breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema]}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <BreadcrumbNav items={[
              { label: "Inicio", href: "/" },
              { label: "SEO para Fontaneros" },
            ]} />
            <span className="inline-block border border-primary text-primary text-xs font-heading rounded-full px-4 py-1.5 mb-6">
              SEO para Fontaneros
            </span>
            <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              SEO para Fontaneros: Que te Llamen cuando Haya una Avería
            </h1>
            <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8 font-body font-light">
              Cuando una tubería revienta o hay una fuga, el cliente busca en Google y llama al primero que aparece. Si no eres tú, ese trabajo se lo lleva otro. Lo gestionamos para que seas el primero — desde 147€/mes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contacto" className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors">
                Empezar →
              </Link>
              <Link to="/como-funciona" className="border border-dark-fg/20 text-dark-fg font-heading text-sm rounded-lg px-6 py-3 hover:border-primary hover:text-primary transition-colors">
                Ver cómo funciona
              </Link>
            </div>
          </div>

          {/* Phone mockup + short benefit list */}
          <div className="grid grid-cols-[1fr_auto] gap-6 md:gap-8 items-center">
            <div className="mx-auto w-full max-w-[280px] rounded-[2.5rem] border-[10px] border-dark-fg/90 bg-dark-fg/5 p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <div className="aspect-[9/19] rounded-[1.75rem] bg-dark-fg/[0.04] border border-dark-fg/10 flex flex-col items-center justify-center gap-3 text-dark-fg/45 text-[11px] text-center p-4">
                <ImageIcon className="w-6 h-6" />
                <span className="font-body">[Captura real de Google Maps — Local Pack "fontanero urgente"]</span>
              </div>
            </div>
            <ul className="space-y-4 text-sm md:text-base font-heading">
              <li className="flex items-center gap-2"><span className="text-primary">→</span> Aparece aquí cuando te buscan</li>
              <li className="flex items-center gap-2"><span className="text-primary">→</span> Más llamadas</li>
              <li className="flex items-center gap-2"><span className="text-primary">→</span> Más trabajos</li>
              <li className="flex items-center gap-2"><span className="text-primary">→</span> Más ingresos</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ASÍ BUSCAN TUS CLIENTES */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-20 border-t border-dark-fg/10">
        <div className="container max-w-6xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10 max-w-3xl">
            Así buscan tus clientes (y así te encuentran)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {searchQueries.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="group border border-dark-fg/15 bg-dark-fg/[0.03] rounded-xl p-5 flex items-center gap-3 hover:border-primary/60 transition-colors"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg border border-dark-fg/15 text-primary shrink-0">
                  <Search className="w-4 h-4" />
                </span>
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-dark-fg/60" />
                  <span className="font-body text-sm md:text-base">{text}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-2xl">
            <p className="text-dark-fg/70 font-body font-light leading-relaxed">
              Cada día se realizan cientos de búsquedas como estas.
            </p>
            <p className="font-heading text-xl md:text-2xl mt-3">
              La pregunta es: <span className="text-primary">¿apareces tú o tu competencia?</span>
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM — 2 dark cards */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-20 border-t border-dark-fg/10">
        <div className="container max-w-6xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            Por qué muchos fontaneros son invisibles en Google
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-dark-fg/15 bg-dark-fg/[0.03] rounded-2xl p-8">
              <span className="flex items-center justify-center w-11 h-11 rounded-lg border border-dark-fg/15 text-primary mb-5">
                <Search className="w-5 h-5" />
              </span>
              <div className="space-y-4 text-base leading-relaxed font-body font-light text-dark-fg/80">
                <p>
                  La fontanería es uno de los sectores con mayor intención de compra en Google. Cuando alguien busca "fontanero urgente" o "avería de agua ahora", ya ha decidido contratar — solo está eligiendo a quién llamar. El 76% de esas personas llama al negocio dentro de las siguientes 24 horas.
                </p>
                <p>
                  El problema es que Google Maps solo muestra tres negocios. Esos tres se llevan el 40% de todos los clics. El cuarto y el quinto apenas existen para ese cliente. La diferencia entre estar en el top 3 y estar fuera puede ser de 15 a 25 llamadas al mes.
                </p>
              </div>
            </div>
            <div className="border border-dark-fg/15 bg-dark-fg/[0.03] rounded-2xl p-8">
              <span className="flex items-center justify-center w-11 h-11 rounded-lg border border-dark-fg/15 text-primary mb-5">
                <Settings2 className="w-5 h-5" />
              </span>
              <div className="space-y-4 text-base leading-relaxed font-body font-light text-dark-fg/80">
                <p>
                  El error más común: crear la ficha de Google cuando empiezas y no volver a tocarla. Google interpreta eso como inactividad y te baja posiciones progresivamente. Un fontanero con ficha desactualizada, sin fotos recientes y sin reseñas pierde visibilidad cada semana frente a competidores que sí la gestionan.
                </p>
                <p>
                  El segundo error: no tener páginas específicas por tipo de servicio. "Fontanero urgente", "instalación de caldera", "detección de fugas" y "fontanero 24h" son búsquedas distintas con clientes distintos. Si tienes una sola página genérica, solo apareces para una de ellas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO — 4 tarjetas horizontales */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-20 border-t border-dark-fg/10">
        <div className="container max-w-6xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">
            Cómo conseguimos que te llamen más desde Google
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map(({ n, icon: Icon, h }) => (
              <div
                key={n}
                className="border border-dark-fg/15 bg-dark-fg/[0.03] rounded-2xl p-6 flex flex-col gap-6 hover:border-primary/60 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center justify-center w-11 h-11 rounded-lg border border-dark-fg/15 text-primary">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-heading text-xs text-dark-fg/40 tracking-wider">{n}</span>
                </div>
                <p className="font-heading text-base md:text-lg leading-snug">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASO REAL — TIMELINE */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24 border-t border-dark-fg/10">
        <div className="container max-w-4xl">
          <span className="inline-block border border-primary/60 text-primary text-xs font-heading rounded-full px-4 py-1.5 mb-5">
            CASO REAL
          </span>
          <h2 className="font-heading text-2xl md:text-3xl mb-3">
            De invisible a top 3 en Google Maps
          </h2>
          <p className="text-dark-fg/70 font-body font-light mb-12 max-w-2xl">
            Así se ve la transformación de un fontanero real. Cada paso está documentado con capturas de Google, Maps, GeoGrid, Business, Semrush y Ahrefs.
          </p>

          <ol className="relative border-l border-dark-fg/20 pl-8 md:pl-10 space-y-12">
            {[
              { tag: "ANTES", desc: "Ficha sin optimizar, sin apenas visibilidad en Maps.", ph: "Captura Google Maps — posición inicial fuera del top 20" },
              { tag: "ANALIZAMOS", desc: "Auditamos ficha, web y competencia en su zona.", ph: "Captura Semrush / Ahrefs — análisis de keywords y competencia" },
              { tag: "OPTIMIZAMOS", desc: "Reestructuramos la ficha, la web y las categorías.", ph: "Captura Google Business — ficha optimizada" },
              { tag: "DESPUÉS", desc: "Aparece en el Local Pack para búsquedas de alta intención.", ph: "Captura Google — Local Pack top 3" },
              { tag: "GRID DE POSICIONES", desc: "Rankings por barrio medidos con GeoGrid.", ph: "Captura GeoGrid — mapa de posiciones por zona" },
              { tag: "RESULTADO", desc: "Llamadas, mensajes y solicitudes de presupuesto reales.", ph: "Captura Google Business Insights — llamadas y direcciones" },
            ].map((step, i, arr) => (
              <li key={step.tag} className="relative">
                <span className="absolute -left-[42px] md:-left-[50px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground font-heading text-[11px]">
                  {i + 1}
                </span>
                <p className="font-heading text-primary text-xs tracking-widest mb-2">{step.tag}</p>
                <p className="font-heading text-lg md:text-xl mb-4">{step.desc}</p>
                <Placeholder label={step.ph} />
                {i < arr.length - 1 && (
                  <div className="mt-8 text-dark-fg/30 text-xl">↓</div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* POR QUÉ TRABAJARLO CADA MES */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-20 border-t border-dark-fg/10">
        <div className="container max-w-6xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10 max-w-3xl">
            ¿Por qué trabajarlo cada mes?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {monthlyReasons.map(({ icon: Icon, h }, i) => (
              <div
                key={h}
                className="border border-dark-fg/15 bg-dark-fg/[0.03] rounded-2xl p-6 flex flex-col gap-5 hover:border-primary/60 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg border border-dark-fg/15 text-primary">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-heading text-xs text-dark-fg/40">0{i + 1}</span>
                </div>
                <p className="font-heading text-sm md:text-base leading-snug">{h}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-2xl">
            <p className="font-heading text-xl md:text-2xl leading-snug">
              Google no es una fotografía.
              <br />
              Es una <span className="text-primary">competición continua</span>.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE TYPES */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-20 border-t border-dark-fg/10">
        <div className="container max-w-6xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            Tipos de servicio de fontanería que posicionamos
          </h2>
          <p className="text-base text-dark-fg/70 font-body font-light mb-10 max-w-2xl">
            Cada tipo de servicio tiene sus propias búsquedas en Google. Creamos contenido específico para cada uno.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
            {serviceTypes.map((t) => (
              <div
                key={t}
                className="border border-dark-fg/15 bg-dark-fg/[0.03] rounded-xl px-5 py-4 flex items-center gap-3 hover:border-primary/60 transition-colors"
              >
                <Wrench className="w-4 h-4 text-primary shrink-0" strokeWidth={1.5} />
                <span className="font-body text-sm md:text-base">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS — pruebas visuales */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-20 border-t border-dark-fg/10">
        <div className="container max-w-6xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">Resultados reales con fontaneros</h2>
          <p className="text-base text-dark-fg/70 font-body font-light mb-10 max-w-3xl">
            MVA Fontanería en Madrid consiguió 60 interacciones desde Google en sus primeros 2 meses. Fontaneros Económicos, también en Madrid, recibió 11 llamadas directas y 4 WhatsApp en mes y medio. Ambos empezaron desde cero, sin web ni ficha optimizada.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-dark-fg/15 bg-dark-fg/[0.03] rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-heading text-primary tracking-widest">MADRID</p>
                <BarChart3 className="w-5 h-5 text-dark-fg/40" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-lg">MVA Fontanería</h3>
              <Placeholder label="Captura Google Business Insights — 60 interacciones" ratio="aspect-[16/10]" />
              <p className="font-heading text-3xl">60 interacciones</p>
              <p className="text-sm text-dark-fg/60 font-body">desde Google en sus primeros 2 meses</p>
            </div>
            <div className="border border-dark-fg/15 bg-dark-fg/[0.03] rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-heading text-primary tracking-widest">MADRID</p>
                <Phone className="w-5 h-5 text-dark-fg/40" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-lg">Fontaneros Económicos</h3>
              <Placeholder label="Captura llamadas + WhatsApp desde Google" ratio="aspect-[16/10]" />
              <p className="font-heading text-3xl">11 llamadas + 4 WhatsApp</p>
              <p className="text-sm text-dark-fg/60 font-body">en mes y medio, empezando desde cero</p>
            </div>
          </div>
        </div>
      </section>

      {/* PLAN ÚNICO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-20 border-t border-dark-fg/10">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-3 text-center">Servicio de SEO para fontaneros</h2>
          <p className="text-base text-dark-fg/70 font-body font-light text-center mb-10">
            Todo lo que necesita tu negocio de fontanería para aparecer cuando te buscan en Google.
          </p>
          <div className="border border-dark-fg/15 bg-dark-fg/[0.03] rounded-2xl p-8 md:p-10">
            <span className="inline-block border border-primary/60 text-primary text-xs font-heading rounded-full px-3 py-1 mb-5">
              PLAN SLOCAL.ES
            </span>
            <p className="font-heading text-4xl md:text-5xl mb-8">
              147€<span className="text-lg text-dark-fg/60 font-body font-light">/mes + IVA</span>
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Tu negocio aparece cuando alguien busca fontanero urgente en tu ciudad",
                "Más llamadas directas desde Google — sin pagar por cada una",
                "Contenido mensual que posiciona para nuevas búsquedas de averías y servicios",
                "Tu ficha de Google activa — Google te muestra antes que a la competencia",
                "Cada mes sabes exactamente cuántas llamadas ha generado Google",
                "Hablas siempre con la misma persona — sin intermediarios",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm md:text-base font-body text-dark-fg/85">
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

      {/* FAQ — dark variant */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-20 border-t border-dark-fg/10">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">Preguntas frecuentes sobre SEO para fontaneros</h2>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group border border-dark-fg/15 bg-dark-fg/[0.03] rounded-xl px-5 py-4 open:border-primary/60 transition-colors"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-heading text-sm md:text-base">
                  <span>{item.q}</span>
                  <span className="text-primary shrink-0 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-dark-fg/70 font-body font-light leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CIUDADES */}
      <section className="bg-dark-bg text-dark-fg py-14 border-t border-dark-fg/10">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            Trabajamos con fontaneros en toda España
          </h2>
          <p className="text-sm md:text-base text-dark-fg/70 mb-8 font-body font-light">
            Gestionamos el posicionamiento local de fontaneros en toda España.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {cities.map((city) => (
              <Link
                key={city.slug}
                to={`/seo-local-${city.slug}`}
                className="border border-dark-fg/20 rounded-full px-4 py-2 text-sm font-heading text-dark-fg transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-[2px]"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OTROS SECTORES */}
      <section className="bg-dark-bg text-dark-fg py-14 border-t border-dark-fg/10">
        <div className="container max-w-4xl text-center">
          <h2 className="font-heading text-xl md:text-2xl mb-8">También trabajamos con otros sectores</h2>
          <div className="flex flex-wrap justify-center gap-2.5">
            {otherSectors.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="border border-dark-fg/20 rounded-full px-4 py-2 text-sm font-heading text-dark-fg transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-[2px]"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CTASection
        title="¿Quieres que tu teléfono suene más gracias a Google?"
        buttonText="Hablemos →"
      />
    </>
  );
};

export default FontanerosPage;
