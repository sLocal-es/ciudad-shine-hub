import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SectorHeroDark from "@/components/sector/SectorHeroDark";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const WHATSAPP = "https://wa.me/34684780063";

type Sector =
  | "Fontanero"
  | "Fisioterapeuta"
  | "Abogado"
  | "Dentista"
  | "Reformas"
  | "Psicólogo"
  | "Gimnasio";
type City =
  | "Madrid"
  | "Barcelona"
  | "Valencia"
  | "Sevilla"
  | "Málaga"
  | "Córdoba"
  | "Bilbao";

const SEARCH_VOLUME: Record<City, Record<Sector, number>> = {
  Madrid:    { Fontanero: 1600, Fisioterapeuta: 590, Abogado: 1000, Dentista: 2400, Reformas: 320, Psicólogo: 1600, Gimnasio: 2900 },
  Barcelona: { Fontanero: 1300, Fisioterapeuta: 880, Abogado: 880,  Dentista: 2400, Reformas: 260, Psicólogo: 590,  Gimnasio: 1900 },
  Valencia:  { Fontanero: 1000, Fisioterapeuta: 390, Abogado: 720,  Dentista: 1900, Reformas: 140, Psicólogo: 260,  Gimnasio: 1900 },
  Sevilla:   { Fontanero: 880,  Fisioterapeuta: 210, Abogado: 880,  Dentista: 1300, Reformas: 90,  Psicólogo: 590,  Gimnasio: 2400 },
  Málaga:    { Fontanero: 170,  Fisioterapeuta: 20,  Abogado: 50,   Dentista: 110,  Reformas: 30,  Psicólogo: 110,  Gimnasio: 110  },
  Córdoba:   { Fontanero: 30,   Fisioterapeuta: 10,  Abogado: 90,   Dentista: 140,  Reformas: 0,   Psicólogo: 40,   Gimnasio: 260  },
  Bilbao:    { Fontanero: 260,  Fisioterapeuta: 260, Abogado: 480,  Dentista: 1000, Reformas: 30,  Psicólogo: 260,  Gimnasio: 1300 },
};

const DEFAULT_TICKET: Record<Sector, number> = {
  Fontanero: 200,
  Fisioterapeuta: 400,
  Abogado: 800,
  Dentista: 600,
  Reformas: 8000,
  Psicólogo: 600,
  Gimnasio: 240,
};

const SECTORS: Sector[] = ["Fontanero", "Fisioterapeuta", "Abogado", "Dentista", "Reformas", "Psicólogo", "Gimnasio"];
const CITIES: City[] = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Málaga", "Córdoba", "Bilbao"];

const SECTOR_LINKS: Partial<Record<Sector, string>> = {
  Fontanero: "/seo-para-fontaneros",
  Fisioterapeuta: "/seo-para-fisioterapeutas",
  Abogado: "/seo-para-abogados",
  Dentista: "/seo-para-dentistas",
};

const faqs = [
  {
    q: "¿Necesito tener web para aparecer en Google siendo autónomo?",
    a: "No es obligatorio, pero sí recomendable. Con solo la ficha de Google puedes aparecer en el mapa local. Con ficha y web juntas, apareces en el mapa y en los resultados de búsqueda orgánica al mismo tiempo. El servicio de slocal incluye los dos porque así es como funciona mejor.",
  },
  {
    q: "¿Cuánto tarda en verse resultado con el SEO local?",
    a: "Entre 6 y 12 semanas para las primeras posiciones en búsquedas locales de baja competencia. En ciudades grandes como Madrid o Barcelona, 3 a 4 meses para posiciones estables. En ciudades medianas o sectores con poca competencia digital, antes.",
  },
  {
    q: "¿Cuánto cuesta el SEO local para autónomos?",
    a: "El servicio de slocal tiene un precio fijo de 147 €/mes + IVA. Sin permanencia mínima, sin letra pequeña. Incluye ficha de Google, web con SEO local y posicionamiento activo cada mes.",
  },
  {
    q: "¿Qué diferencia hay entre SEO local y Google Ads?",
    a: "Con Google Ads pagas por cada clic — cuando dejas de pagar, desapareces. Con SEO local posicionas tu negocio de forma orgánica: cuando llegas al top 3, te mantienes ahí aunque pares la inversión. Para un autónomo con presupuesto limitado, el SEO local tiene mejor retorno a medio plazo.",
  },
  {
    q: "¿Funciona el SEO local en ciudades pequeñas?",
    a: "Mejor que en ciudades grandes. En una ciudad pequeña hay menos competencia digital, lo que significa que posicionas más rápido y con menos esfuerzo. Muchos autónomos en ciudades medianas están en el top 3 de Google en su sector simplemente porque nadie más lo trabaja.",
  },
  {
    q: "¿Qué es el Local Pack de Google y por qué importa?",
    a: "Es el bloque de tres negocios que Google muestra en el mapa cuando alguien busca un servicio local. Esos tres negocios reciben la mayoría de los contactos de esa búsqueda. El objetivo del SEO local es que tu negocio sea uno de esos tres.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. Sin permanencia mínima ni penalización. Avisas con 30 días de antelación y listo.",
  },
];

const formatEUR = (n: number) =>
  new Intl.NumberFormat("es-ES", { maximumFractionDigits: 0 }).format(Math.round(n));

const RoiCalculator = () => {
  const [sector, setSector] = useState<Sector>("Dentista");
  const [city, setCity] = useState<City>("Madrid");
  const [ticket, setTicket] = useState<number>(DEFAULT_TICKET["Dentista"]);

  const onSectorChange = (s: Sector) => {
    setSector(s);
    setTicket(DEFAULT_TICKET[s]);
  };

  const r = useMemo(() => {
    const searches = SEARCH_VOLUME[city][sector];
    const views = searches * 0.03;
    const contacts = views * 0.20;
    const clients = contacts * 0.40;
    const revenue = clients * ticket;
    return { searches, views, contacts, clients, revenue };
  }, [sector, city, ticket]);

  const sectorLink = SECTOR_LINKS[sector];

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <label className="block text-xs font-heading uppercase tracking-wide text-muted-foreground mb-2">Sector</label>
          <Select value={sector} onValueChange={(v) => onSectorChange(v as Sector)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {SECTORS.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-xs font-heading uppercase tracking-wide text-muted-foreground mb-2">Ciudad</label>
          <Select value={city} onValueChange={(v) => setCity(v as City)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {CITIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-xs font-heading uppercase tracking-wide text-muted-foreground mb-2">Ticket medio (€)</label>
          <Input
            type="number"
            min={0}
            value={ticket}
            onChange={(e) => setTicket(Math.max(0, Number(e.target.value) || 0))}
          />
        </div>
      </div>

      <dl className="space-y-3 font-body text-sm md:text-base">
        <div className="flex justify-between gap-4 border-b border-border pb-3">
          <dt className="text-muted-foreground">Búsquedas mensuales de {sector.toLowerCase()} en {city}</dt>
          <dd className="font-heading">{formatEUR(r.searches)}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-border pb-3">
          <dt className="text-muted-foreground">Personas que verían tu ficha en top 3</dt>
          <dd className="font-heading">~{formatEUR(r.views)}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-border pb-3">
          <dt className="text-muted-foreground">Contactos estimados al mes</dt>
          <dd className="font-heading">~{formatEUR(r.contacts)}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-border pb-3">
          <dt className="text-muted-foreground">Clientes nuevos estimados</dt>
          <dd className="font-heading">~{formatEUR(r.clients)}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-border pb-3">
          <dt className="text-foreground">Ingresos potenciales</dt>
          <dd className="font-heading text-primary text-lg">~{formatEUR(r.revenue)} €/mes</dd>
        </div>
        <div className="flex justify-between gap-4 pt-1">
          <dt className="text-muted-foreground">Tu inversión</dt>
          <dd className="font-heading">147 €/mes + IVA</dd>
        </div>
      </dl>

      <p className="text-xs text-muted-foreground mt-6 font-body font-light leading-relaxed">
        Estimación conservadora basada en datos reales de Semrush. Los resultados varían según la competencia local y el tiempo de posicionamiento.
        {sectorLink && (
          <>
            {" "}
            Ver detalle del <Link to={sectorLink} className="text-primary underline underline-offset-2">servicio para {sector.toLowerCase()}s</Link>.
          </>
        )}
      </p>
    </div>
  );
};

const AutonomosPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO para autónomos",
    provider: { "@type": "LocalBusiness", name: "slocal.es", url: "https://slocal.es" },
    description:
      "SEO local para autónomos: ficha de Google, web y posicionamiento local desde 147 €/mes + IVA sin permanencia.",
    areaServed: { "@type": "Country", name: "España" },
    offers: {
      "@type": "Offer",
      price: "147",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "147",
        priceCurrency: "EUR",
        unitText: "mes",
      },
    },
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "SEO para autónomos", item: "https://slocal.es/seo-para-autonomos" },
    ],
  };

  const problems = [
    {
      icon: "📍",
      title: "Ficha creada y olvidada",
      text: "Google interpreta inactividad como irrelevancia. Sin fotos nuevas, sin respuestas a reseñas, sin publicaciones: bajas posiciones cada mes.",
    },
    {
      icon: "🌐",
      title: "Web sin señales locales",
      text: "Una web que no menciona tu ciudad ni tus servicios específicos no le dice a Google dónde operas ni para quién.",
    },
    {
      icon: "⏳",
      title: "Nadie lo gestiona activamente",
      text: "El SEO local no se hace una vez. Tu competencia que sí lo gestiona cada mes te va ganando posición sin que te enteres.",
    },
  ];

  const comparisonRows = [
    ["Gestión ficha Google: 80–150 €/mes", "Todo incluido: 147 €/mes + IVA"],
    ["Mantenimiento web: 50–100 €/mes", "Una factura, una persona"],
    ["SEO local: 300–600 €/mes", "Sin permanencia mínima"],
    ["3 proveedores, nadie coordinado", "Siempre el mismo consultor"],
    ["Total: 430–850 €/mes", "147 €/mes + IVA"],
  ];

  return (
    <>
      <SEOHead
        title="SEO para autónomos: consigue clientes desde Google | slocal.es"
        description="Ficha de Google, web y SEO local gestionados por un consultor. 147 €/mes + IVA, sin permanencia. Más clientes para tu negocio autónomo."
        canonical="/seo-para-autonomos"
        jsonLd={[breadcrumbSchema, serviceSchema, faqSchema]}
      />

      {/* 1 — HERO */}
      <SectorHeroDark
        breadcrumbLabel="SEO para autónomos"
        eyebrow="SEO para autónomos"
        h1={<h1>SEO para autónomos: que tus clientes te encuentren en Google</h1>}
        subtitle={
          <>Consultor SEO para autónomos — ficha de Google, web y posicionamiento local. Una persona, un precio fijo, sin intermediarios.</>
        }
        phoneQuery="autónomo cerca de mí"
        phoneResults={[
          { name: "Estudio Diseño Marta Ríos", rating: 5.0, reviews: 78, category: "Diseñadora gráfica", hours: "Abierto", distance: "a 600 m" },
          { name: "Consultoría Autónomos Vega", rating: 4.9, reviews: 112, category: "Asesor fiscal", hours: "Abierto", distance: "a 1,1 km" },
          { name: "Servicios Técnicos Sanz", rating: 4.8, reviews: 65, category: "Electricista autónomo", hours: "Abre a las 8:00", distance: "a 1,5 km" },
        ]}
        primaryCta={{ label: "Escríbeme por WhatsApp →", to: "/contacto" }}
        secondaryCta={{ label: "Ver cómo funciona →", to: "/como-funciona" }}
      />

      {/* 2 — PROBLEMA */}
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-10 max-w-3xl">
            Por qué tu negocio no aparece cuando te buscan en Google
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {problems.map((p) => (
              <div key={p.title} className="bg-card border border-border rounded-2xl p-6">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-heading text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-body font-light leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — PACK COMPLETO */}
      <section className="bg-warm-bg py-16 md:py-20">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-5">
            Ficha de Google + web + SEO local: todo junto porque así funciona
          </h2>
          <p className="text-base font-body font-light text-foreground leading-relaxed mb-10 max-w-3xl">
            Google no valora la ficha sola ni la web sola. Los valora juntos, coherentes y activos. Por eso slocal gestiona los tres a la vez — no son tres servicios separados, son tres señales que Google lee como una sola.
          </p>

          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid grid-cols-2 font-heading text-sm md:text-base bg-foreground text-background">
              <div className="px-5 py-4">Contratando por separado</div>
              <div className="px-5 py-4 border-l border-background/20">Con slocal</div>
            </div>
            {comparisonRows.map(([a, b], i) => (
              <div
                key={i}
                className={`grid grid-cols-2 text-sm md:text-base font-body ${i < comparisonRows.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="px-5 py-4 text-muted-foreground">{a}</div>
                <div className="px-5 py-4 border-l border-border">{b}</div>
              </div>
            ))}
          </div>

          <p className="mt-6 font-heading text-base md:text-lg text-primary">
            147 €/mes + IVA · Sin permanencia · Sin letra pequeña
          </p>
        </div>
      </section>

      {/* 4 — CALCULADORA */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            ¿Cuánto vale estar en los primeros resultados de Google en tu ciudad?
          </h2>
          <p className="text-base font-body font-light text-muted-foreground mb-8 max-w-3xl">
            Estas son las búsquedas reales que hay cada mes en Google para los sectores más comunes. Selecciona el tuyo y tu ciudad para ver una estimación honesta de lo que puede suponer.
          </p>
          <RoiCalculator />
        </div>
      </section>


      {/* 6 — CASOS REALES */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Autónomos que ya aparecen cuando les buscan
          </h2>
          <div className="space-y-3">
            {[
              { sector: "Fontanero", city: "Córdoba", link: "/seo-para-fontaneros" },
              { sector: "Fisioterapeuta", city: "Sevilla", link: "/seo-para-fisioterapeutas" },
              { sector: "Abogado", city: "Córdoba", link: "/seo-para-abogados" },
              { sector: "Dentista", city: "Sevilla", link: "/seo-para-dentistas" },
            ].map((c) => (
              <div key={`${c.sector}-${c.city}`} className="flex items-center justify-between gap-4 bg-card border border-border rounded-xl px-5 py-4">
                <div className="font-body text-sm md:text-base">
                  <Link to={c.link} className="font-heading hover:text-primary transition-colors">{c.sector}</Link>
                  <span className="text-muted-foreground"> · {c.city} · </span>
                  <span className="text-muted-foreground italic">caso en seguimiento</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground font-body font-light mt-5">
            Resultados reales en cuanto los casos en seguimiento alcancen el primer trimestre completo.
          </p>
        </div>
      </section>


      {/* 8 — FAQ (visible) */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            Preguntas frecuentes sobre SEO local para autónomos
          </h2>
          <Accordion type="multiple" defaultValue={faqs.map((_, i) => `faq-${i}`)} className="space-y-3">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-5 data-[state=open]:border-primary transition-colors"
              >
                <AccordionTrigger className="font-heading text-left text-base hover:no-underline [&>svg]:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed font-body font-light">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 9 — CTA FINAL */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-4">
            ¿Tu negocio no aparece cuando te buscan en Google?
          </h2>
          <p className="text-primary-foreground/85 font-body font-light text-base md:text-lg mb-8">
            Escríbeme y en 24 horas te digo qué está pasando y cómo se resuelve.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-card text-primary font-heading text-sm rounded-lg px-8 py-3 hover:bg-card/90 transition-colors"
          >
            Escríbeme por WhatsApp →
          </a>
          <p className="text-primary-foreground/75 text-sm font-body font-light mt-5">
            Sin formularios. Sin reuniones obligatorias. Sin compromiso.
          </p>
        </div>
      </section>
    </>
  );
};

export default AutonomosPage;
