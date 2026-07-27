import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import SectorHeroDark from "@/components/sector/SectorHeroDark";
import LogoMarquee from "@/components/LogoMarquee";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

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
  { q: "¿Necesito tener web para aparecer en Google siendo autónomo?", a: "No es obligatorio, pero sí recomendable. Con solo la ficha de Google puedes aparecer en el mapa local. Con ficha y web juntas, apareces en el mapa y en los resultados de búsqueda orgánica al mismo tiempo. Slocal incluye los dos porque así es como funciona mejor." },
  { q: "¿Cuánto tarda en verse resultado con el SEO local?", a: "Entre 6 y 12 semanas para las primeras posiciones en búsquedas locales de baja competencia. En ciudades grandes como Madrid o Barcelona, 3 a 4 meses para posiciones estables. En ciudades medianas o sectores con poca competencia digital, antes." },
  { q: "¿Qué diferencia hay entre SEO local y Google Ads?", a: "Con Google Ads pagas por cada clic — cuando dejas de pagar, desapareces. Con SEO local posicionas tu negocio de forma orgánica: cuando llegas al top 3, te mantienes ahí aunque pares la inversión. Para un autónomo con presupuesto limitado, el SEO local tiene mejor retorno a medio plazo." },
  { q: "¿Funciona el SEO local en ciudades pequeñas?", a: "Mejor que en ciudades grandes. En una ciudad pequeña hay menos competencia digital, lo que significa que posicionas más rápido y con menos esfuerzo. Muchos autónomos en ciudades medianas están en el top 3 de Google en su sector simplemente porque nadie más lo trabaja." },
  { q: "¿Qué es el Local Pack de Google y por qué importa?", a: "Es el bloque de tres negocios que Google muestra en el mapa cuando alguien busca un servicio local. Esos tres negocios reciben la mayoría de los contactos de esa búsqueda. El objetivo del SEO local es que tu negocio sea uno de esos tres." },
  { q: "¿Puedo cancelar cuando quiera?", a: "Sí. Sin permanencia mínima ni penalización. Avisas con 30 días de antelación y listo." },
];

const sectionCls = "bg-white py-24 md:py-32 border-t border-warm-fg/10";

const IllustrationPlaceholder = ({ label, aspect = "aspect-[1/1]" }: { label: string; aspect?: string }) => (
  <div
    className={`w-full ${aspect} rounded-3xl border-2 border-dashed border-warm-fg/20 bg-[hsl(var(--warm-bg))] flex flex-col items-center justify-center gap-3 p-8 text-center`}
    role="img"
    aria-label={label}
  >
    <span className="font-heading text-[10px] tracking-[0.28em] uppercase text-warm-fg/50">
      Illustration placeholder
    </span>
    <span className="font-body text-[13px] text-warm-fg/45 max-w-[28ch]">{label}</span>
  </div>
);

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
    <div className="bg-white border border-warm-fg/10 rounded-3xl p-6 md:p-10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <label className="block text-[11px] font-heading tracking-[0.22em] uppercase text-primary mb-2">Sector</label>
          <Select value={sector} onValueChange={(v) => onSectorChange(v as Sector)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {SECTORS.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-[11px] font-heading tracking-[0.22em] uppercase text-primary mb-2">Ciudad</label>
          <Select value={city} onValueChange={(v) => setCity(v as City)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {CITIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-[11px] font-heading tracking-[0.22em] uppercase text-primary mb-2">Ticket medio (€)</label>
          <Input
            type="number"
            min={0}
            value={ticket}
            onChange={(e) => setTicket(Math.max(0, Number(e.target.value) || 0))}
          />
        </div>
      </div>

      <dl className="space-y-3 font-body text-sm md:text-base">
        <div className="flex justify-between gap-4 border-b border-warm-fg/15 pb-3">
          <dt className="text-warm-fg/70">Búsquedas mensuales de {sector.toLowerCase()} en {city}</dt>
          <dd className="font-heading text-warm-fg">{formatEUR(r.searches)}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-warm-fg/15 pb-3">
          <dt className="text-warm-fg/70">Personas que verían tu ficha en top 3</dt>
          <dd className="font-heading text-warm-fg">~{formatEUR(r.views)}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-warm-fg/15 pb-3">
          <dt className="text-warm-fg/70">Contactos estimados al mes</dt>
          <dd className="font-heading text-warm-fg">~{formatEUR(r.contacts)}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-warm-fg/15 pb-3">
          <dt className="text-warm-fg/70">Clientes nuevos estimados</dt>
          <dd className="font-heading text-warm-fg">~{formatEUR(r.clients)}</dd>
        </div>
        <div className="flex justify-between gap-4 pt-2">
          <dt className="text-warm-fg">Ingresos potenciales</dt>
          <dd className="font-heading text-primary text-2xl md:text-3xl">~{formatEUR(r.revenue)} €/mes</dd>
        </div>
      </dl>

      <p className="text-xs text-warm-fg/60 mt-6 font-body font-light leading-relaxed">
        Estimación conservadora basada en datos reales de Semrush. Los resultados varían según la competencia local y el tiempo de posicionamiento.
        {sectorLink && (
          <>
            {" "}Ver detalle del <Link to={sectorLink} className="text-primary underline underline-offset-2">servicio para {sector.toLowerCase()}s</Link>.
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
    description: "SEO local para autónomos: ficha de Google, web y posicionamiento local sin permanencia.",
    areaServed: { "@type": "Country", name: "España" },
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
    { n: "01", title: "Ficha creada y olvidada", text: "Google interpreta la inactividad como irrelevancia. Sin fotos nuevas, sin respuestas a reseñas, sin publicaciones: bajas posiciones cada mes." },
    { n: "02", title: "Web sin señales locales", text: "Una web que no menciona tu ciudad ni tus servicios específicos no le dice a Google dónde operas ni para quién." },
    { n: "03", title: "Nadie lo gestiona activamente", text: "El SEO local no se hace una vez. Tu competencia que sí lo gestiona cada mes te va ganando posición sin que te enteres." },
  ];

  const casos = [
    { sector: "Fontanero", city: "Córdoba", link: "/seo-para-fontaneros" },
    { sector: "Fisioterapeuta", city: "Sevilla", link: "/seo-para-fisioterapeutas" },
    { sector: "Abogado", city: "Córdoba", link: "/seo-para-abogados" },
    { sector: "Dentista", city: "Sevilla", link: "/seo-para-dentistas" },
  ];

  return (
    <>
      <SEOHead
        title="SEO para autónomos: consigue clientes desde Google | slocal.es"
        description="Agencia SEO Local para autónomos: ficha de Google, web y SEO local gestionados por un consultor. Sin permanencia. Más clientes para tu negocio."
        canonical="/seo-para-autonomos"
        jsonLd={[breadcrumbSchema, serviceSchema, faqSchema]}
      />

      {/* HERO */}
      <SectorHeroDark
        breadcrumbLabel="SEO para autónomos"
        eyebrow="Agencia SEO Local · Autónomos"
        h1={<h1>SEO para <span className="text-primary">autónomos</span></h1>}
        subtitle={<>Consultor SEO Local para autónomos: ficha de Google, web y posicionamiento local. Una persona, un servicio completo, sin intermediarios.</>}
        primaryCta={{ label: "Solicitar auditoría gratuita", to: "/contacto" }}
        secondaryCta={{ label: "Ver cómo funciona", to: "/como-funciona" }}
        trustItems={["Sin permanencia", "Un consultor dedicado", "Auditoría inicial sin coste"]}
        curveClass="bg-white"
      />

      {/* MARQUEE */}
      <section className="bg-white border-t border-warm-fg/10">
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary py-6 text-center">
            — Herramientas con las que trabajamos
          </p>
        </div>
        <LogoMarquee />
      </section>

      {/* MANIFIESTO */}
      <section className={sectionCls}>
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— El punto de partida</p>
          <h2 className="font-heading font-semibold text-warm-fg leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl max-w-[22ch]">
            ¿Por qué tu negocio no aparece cuando <span className="text-primary">te buscan</span> en Google?
          </h2>
          <p className="mt-8 max-w-2xl text-base md:text-lg font-body text-warm-fg leading-relaxed">
            Como autónomo compites en Google contra empresas, franquicias y agencias. La diferencia entre aparecer o no aparecer no es el tamaño: es tener una ficha de Google trabajada, una web coherente y a alguien que lo mantenga cada mes.
          </p>

          <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {problems.map((p) => (
              <div key={p.n} className="bg-white rounded-3xl border border-warm-fg/10 p-8 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)] transition-all">
                <span className="font-heading text-[11px] tracking-[0.22em] uppercase text-primary">{p.n}</span>
                <h3 className="mt-6 font-heading text-xl md:text-2xl text-warm-fg leading-snug">{p.title}</h3>
                <p className="mt-4 font-body font-light text-warm-fg/70 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACK EDITORIAL SPLIT */}
      <section className={sectionCls}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div>
              <p className="font-heading text-[11px] tracking-[0.22em] uppercase text-primary mb-6">Todo junto</p>
              <h2 className="font-heading font-semibold text-warm-fg leading-[1.1] tracking-tight text-3xl md:text-4xl lg:text-5xl max-w-[18ch]">
                Ficha de Google + web + SEO local: <span className="text-primary">todo junto</span>
              </h2>
              <p className="mt-6 max-w-lg text-base md:text-lg font-body font-light text-warm-fg/75 leading-relaxed">
                Google no valora la ficha sola ni la web sola. Los valora juntos, coherentes y activos. Por eso Slocal gestiona los tres a la vez — no son tres servicios separados, son tres señales que Google lee como una sola.
              </p>
              <ul className="mt-8 space-y-3 max-w-md">
                {["Ficha de Google Business Profile", "Web con SEO Local", "Posicionamiento activo cada mes", "Un solo interlocutor", "Sin permanencia mínima", "Informe mensual claro"].map((f) => (
                  <li key={f} className="flex items-center gap-3 font-body text-warm-fg/85">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="text-primary shrink-0" aria-hidden>
                      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[15px] md:text-base">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-first md:order-last">
              <IllustrationPlaceholder label="Pack completo Slocal: ficha + web + SEO Local" />
            </div>
          </div>
        </div>
      </section>

      {/* CALCULADORA */}
      <section className={sectionCls}>
        <div className="container max-w-5xl">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Calculadora</p>
          <h2 className="font-heading font-semibold text-warm-fg leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl max-w-[22ch] mb-6">
            ¿Cuánto vale estar en los <span className="text-primary">primeros resultados</span> de Google en tu ciudad?
          </h2>
          <p className="text-base md:text-lg font-body font-light text-warm-fg/70 leading-relaxed max-w-3xl mb-12">
            Estas son las búsquedas reales que hay cada mes en Google para los sectores más comunes. Selecciona el tuyo y tu ciudad para ver una estimación honesta de lo que puede suponer.
          </p>
          <RoiCalculator />
        </div>
      </section>

      {/* CASOS */}
      <section className={sectionCls}>
        <div className="container">
          <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Casos reales</p>
          <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-[22ch] mb-14">
            Autónomos que ya aparecen cuando les <span className="text-primary">buscan</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {casos.map((c) => (
              <Link
                key={`${c.sector}-${c.city}`}
                to={c.link}
                className="group bg-white rounded-2xl border border-warm-fg/10 px-6 py-5 flex items-center justify-between gap-4 hover:border-primary hover:shadow-[0_10px_40px_-25px_rgba(0,0,0,0.15)] transition-all"
              >
                <div>
                  <p className="font-heading text-warm-fg group-hover:text-primary transition-colors">{c.sector}</p>
                  <p className="text-sm font-body text-warm-fg/60">{c.city} · caso en seguimiento</p>
                </div>
                <span className="text-primary font-heading text-lg">→</span>
              </Link>
            ))}
          </div>
          <p className="text-xs text-warm-fg/60 font-body font-light mt-6">
            Resultados detallados en cuanto los casos alcancen el primer trimestre completo.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className={sectionCls}>
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— FAQ</p>
            <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl leading-[1.05] tracking-tight">
              Preguntas frecuentes.
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="divide-y divide-warm-fg/15 border-y border-warm-fg/15">
              {faqs.map((item, i) => (
                <details key={i} className="group py-6">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-6 font-heading text-lg md:text-xl text-warm-fg">
                    <span>{item.q}</span>
                    <span className="text-primary shrink-0 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-base font-body font-light text-warm-fg/70 leading-relaxed max-w-2xl">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        id="contacto"
        title="¿Tu negocio no aparece cuando te buscan en Google?"
        buttonText="Solicitar auditoría gratuita →"
      />
    </>
  );
};

export default AutonomosPage;
