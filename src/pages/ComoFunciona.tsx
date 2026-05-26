import { Link } from "react-router-dom";
import { MapPin, Globe, FileText, Search, Check, Star, Phone, Navigation as NavIcon, Globe2, TrendingUp, ArrowUp, Calendar, Tag, HelpCircle, Trophy, PhoneCall, MousePointerClick, Eye, BarChart3, Image as ImageIcon, MessageSquare, ListChecks } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const pieces = [
  {
    icon: MapPin,
    title: "Tu ficha de Google",
    text: "Es lo primero que ve un cliente: categorías, servicios, fotos, reseñas y horario. Una ficha bien configurada hace sonar el teléfono antes de que entren a tu web.",
  },
  {
    icon: Globe,
    title: "Tu web local",
    text: "Una página por servicio y por zona. Así Google sabe exactamente qué ofreces y dónde. Más páginas = más búsquedas por las que puedes aparecer.",
  },
  {
    icon: FileText,
    title: "Contenido que posiciona",
    text: "Artículos sobre lo que buscan tus clientes antes de llamarte. Cada pieza atrae tráfico y refuerza tus páginas de servicio. El efecto se acumula mes a mes.",
  },
];

// ---------- Vector / CSS graphics ----------

const GraphicAuditoria = () => {
  const searches = [
    "fontanero urgencias Madrid",
    "fisioterapeuta cerca de mí",
    "empresa reformas baños Sevilla",
    "abogado laboralista Valencia",
  ];
  return (
    <div className="mt-4 bg-background border border-border rounded-[var(--radius)] p-4">
      <div className="space-y-2 mb-4">
        {searches.map((s) => (
          <div key={s} className="flex items-center gap-2 bg-secondary/60 border border-border rounded-full px-3 py-1.5 text-xs">
            <Search className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="truncate text-foreground/80">{s}</span>
          </div>
        ))}
      </div>
      <div
        className="relative rounded-[var(--radius)] overflow-hidden border border-border"
        style={{
          aspectRatio: "16 / 9",
          background: "linear-gradient(135deg, #efe9dc 0%, #f4eee2 100%)",
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(135deg, #efe9dc 0%, #f4eee2 100%)",
          backgroundSize: "22px 22px, 22px 22px, 100% 100%",
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute left-0 right-0 top-1/2 h-[3px] bg-background/70" />
          <div className="absolute top-0 bottom-0 left-1/3 w-[3px] bg-background/70" />
          <div className="absolute top-0 bottom-0 left-2/3 w-[3px] bg-background/70" />
        </div>
        {[
          { l: "18%", t: "30%" },
          { l: "55%", t: "22%" },
          { l: "72%", t: "60%" },
          { l: "30%", t: "70%" },
        ].map((p, i) => (
          <div key={i} className="absolute -translate-x-1/2 -translate-y-full" style={{ left: p.l, top: p.t }}>
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-md">
              <MapPin className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
          </div>
        ))}
        <div className="absolute right-4 bottom-4 w-14 h-14 rounded-full border-[3px] border-primary bg-background/40 flex items-center justify-center">
          <Search className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  );
};

const GraphicGBP = () => {
  const checklist = [
    { icon: Tag, label: "Categorías" },
    { icon: ListChecks, label: "Servicios" },
    { icon: ImageIcon, label: "Fotos" },
    { icon: MessageSquare, label: "Publicaciones" },
  ];
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-5 gap-3">
      <div className="sm:col-span-3 bg-background border border-border rounded-[var(--radius)] p-4">
        <div className="text-[15px] font-heading text-foreground leading-tight">Tu Negocio Local</div>
        <div className="flex items-center gap-1.5 mt-1">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-xs text-foreground/80 font-medium">4,9</span>
          <span className="text-xs text-muted-foreground">· 87 reseñas</span>
        </div>
        <div className="text-[11px] mt-1.5">
          <span className="text-green-700 font-medium">Abierto ahora</span>
          <span className="text-muted-foreground"> · Cierra 20:00</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-3">
          {[
            { icon: Phone, label: "Llamar" },
            { icon: NavIcon, label: "Cómo llegar" },
            { icon: Globe2, label: "Web" },
          ].map((b) => {
            const Ic = b.icon;
            return (
              <div key={b.label} className="flex flex-col items-center gap-1 bg-secondary/60 border border-border rounded-lg py-2">
                <Ic className="w-4 h-4 text-primary" />
                <span className="text-[10px] text-foreground/70">{b.label}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sm:col-span-2 bg-background border border-border rounded-[var(--radius)] p-4">
        <div className="text-[11px] font-heading uppercase tracking-wider text-primary mb-3">Optimizado</div>
        <ul className="space-y-2.5">
          {checklist.map((c) => {
            const Ic = c.icon;
            return (
              <li key={c.label} className="flex items-center gap-2 text-xs text-foreground/80">
                <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                </span>
                <Ic className="w-3.5 h-3.5 text-muted-foreground" />
                <span>{c.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const GraphicRanking = () => {
  const rows = [
    { n: 1, name: "Tu negocio", meta: "★ 4,9 · 87 reseñas", up: true },
    { n: 2, name: "Competidor A", meta: "★ 4,1 · 23 reseñas" },
    { n: 3, name: "Competidor B", meta: "★ 3,8 · 11 reseñas" },
  ];
  return (
    <div className="mt-4 bg-background border border-border rounded-[var(--radius)] p-4 space-y-2">
      {rows.map((r) => (
        <div
          key={r.n}
          className={`flex items-center gap-3 rounded-lg p-2.5 ${
            r.up ? "bg-primary/10 border border-primary/30" : "bg-secondary/40 border border-border"
          }`}
        >
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-heading shrink-0 ${
              r.up ? "bg-primary text-primary-foreground" : "bg-background text-foreground border border-border"
            }`}
          >
            {r.n}
          </div>
          <div className="flex-1 min-w-0">
            <div className={`text-sm font-heading ${r.up ? "text-foreground" : "text-foreground/80"}`}>{r.name}</div>
            <div className="text-[11px] text-muted-foreground">{r.meta}</div>
          </div>
          {r.up && (
            <div className="flex items-center gap-1 text-primary text-xs font-heading">
              <ArrowUp className="w-3.5 h-3.5" strokeWidth={3} />
              <span>+6</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const GraphicCalendario = () => {
  const items = [
    { icon: Trophy, tag: "Servicio del mes", title: "Reparación de fugas en cocinas" },
    { icon: MapPin, tag: "Zona objetivo", title: "Barrio de Salamanca, Madrid" },
    { icon: HelpCircle, tag: "Pregunta frecuente", title: "¿Cuánto cuesta un fontanero de urgencias?" },
    { icon: Star, tag: "Caso real", title: "Cómo desatascamos un edificio en 2h" },
  ];
  return (
    <div className="mt-4 bg-background border border-border rounded-[var(--radius)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary/60 border-b border-border">
        <Calendar className="w-4 h-4 text-primary" />
        <span className="text-xs font-heading uppercase tracking-wider text-foreground/80">Calendario editorial</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {items.map((it, i) => {
          const Ic = it.icon;
          return (
            <div
              key={it.title}
              className={`p-3.5 ${i % 2 === 0 ? "sm:border-r" : ""} ${i < 2 ? "border-b" : ""} border-border`}
            >
              <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-[10px] font-heading uppercase tracking-wide rounded-full px-2 py-0.5 mb-1.5">
                <Ic className="w-3 h-3" />
                {it.tag}
              </span>
              <div className="text-[13px] text-foreground leading-snug mt-1.5">{it.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const GraphicDashboard = () => {
  const metrics = [
    { icon: PhoneCall, label: "Llamadas", value: "31" },
    { icon: MousePointerClick, label: "Clics", value: "412" },
    { icon: Eye, label: "Visitas", value: "1.240" },
    { icon: BarChart3, label: "Posición", value: "2,1" },
  ];
  return (
    <div className="mt-4 bg-background border border-border rounded-[var(--radius)] p-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {metrics.map((m) => {
          const Ic = m.icon;
          return (
            <div key={m.label} className="bg-secondary/50 border border-border rounded-lg p-2.5">
              <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase tracking-wider font-heading">
                <Ic className="w-3 h-3" />
                <span className="truncate">{m.label}</span>
              </div>
              <div className="text-lg font-heading font-bold text-foreground mt-0.5">{m.value}</div>
            </div>
          );
        })}
      </div>
      <div className="relative bg-secondary/40 border border-border rounded-lg p-3" style={{ aspectRatio: "16 / 7" }}>
        <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id="cf-lineFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="hsl(18, 82%, 54%)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="hsl(18, 82%, 54%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[20, 40, 60].map((y) => (
            <line key={y} x1="0" x2="200" y1={y} y2={y} stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
          ))}
          <path d="M0,70 L33,60 L66,52 L100,40 L133,28 L166,18 L200,8 L200,80 L0,80 Z" fill="url(#cf-lineFill)" />
          <path
            d="M0,70 L33,60 L66,52 L100,40 L133,28 L166,18 L200,8"
            fill="none"
            stroke="hsl(18, 82%, 54%)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {[[0,70],[33,60],[66,52],[100,40],[133,28],[166,18],[200,8]].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r="2.5" fill="hsl(18, 82%, 54%)" />
          ))}
        </svg>
        <div className="absolute top-2 right-3 flex items-center gap-1 text-primary text-xs font-heading">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>+38%</span>
        </div>
      </div>
    </div>
  );
};

// Maps each placeholder label to its graphic
const labelToGraphic: Record<string, React.FC> = {
  "Imagen: auditoría SEO local": GraphicAuditoria,
  "Imagen: ficha Google optimizada": GraphicGBP,
  "Imagen: web multipágina SEO local": GraphicRanking,
  "Imagen: creación de contenido mensual": GraphicCalendario,
  "Imagen: informe mensual de resultados": GraphicDashboard,
};

const ImgPlaceholder = ({ label }: { label: string }) => {
  const G = labelToGraphic[label];
  if (G) return <G />;
  return null;
};

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3 items-start text-foreground/85 leading-relaxed text-sm md:text-base">
    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
    <span>{children}</span>
  </li>
);

// ---------- Visuals ----------
const VisualStep1 = () => {
  const queries = [
    "fontanero urgencias Madrid",
    "fisioterapeuta cerca de mí",
    "empresa reformas baños Sevilla",
    "abogado laboralista Valencia",
  ];
  return (
    <div className="bg-secondary border border-border rounded-[var(--radius)] p-5 md:p-6">
      <div className="text-primary text-[11px] font-heading uppercase tracking-wider mb-4">
        Búsquedas que analizamos
      </div>
      <div className="flex flex-wrap gap-2">
        {queries.map((q) => (
          <span
            key={q}
            className="inline-flex items-center gap-2 bg-background border border-border rounded-full px-3 py-1.5 text-xs md:text-sm"
          >
            <Search className="w-3.5 h-3.5 text-primary" />
            {q}
          </span>
        ))}
      </div>
      <ImgPlaceholder label="Imagen: auditoría SEO local" />
    </div>
  );
};

const VisualStep2 = () => {
  const rows = [
    { n: 1, name: "Tu negocio", meta: "★★★★★ 4.9 · 87 reseñas · Abierto ahora", highlight: true },
    { n: 2, name: "Competidor A", meta: "★★★★ 4.1 · 23 reseñas" },
    { n: 3, name: "Competidor B", meta: "★★★ 3.8 · 11 reseñas" },
  ];
  return (
    <div className="bg-secondary border border-border rounded-[var(--radius)] p-5 md:p-6">
      <div className="text-primary text-[11px] font-heading uppercase tracking-wider mb-4">
        Así apareces en Google Maps
      </div>
      <div className="space-y-2">
        {rows.map((r) => (
          <div
            key={r.n}
            className={`flex items-center gap-3 bg-background rounded-[var(--radius)] p-3 ${
              r.highlight ? "border-[1.5px] border-primary" : "border border-border"
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-heading ${
                r.highlight ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
              }`}
            >
              {r.n}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-heading text-foreground">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.meta}</div>
            </div>
          </div>
        ))}
      </div>
      <ImgPlaceholder label="Imagen: ficha Google optimizada" />
    </div>
  );
};

const VisualStep3 = () => {
  const serps = [
    {
      url: "tunegocio.es › fontanero-urgencias-madrid",
      title: "Fontanero urgencias en Madrid · 24h",
      desc: "Reparaciones urgentes en Madrid capital. Disponible ahora.",
    },
    {
      url: "tunegocio.es › reformas-banos-sevilla-triana",
      title: "Reformas de baños en Triana, Sevilla",
      desc: "Presupuesto sin compromiso en 24h.",
    },
    {
      url: "tunegocio.es › fisioterapia-deportiva-gracia-barcelona",
      title: "Fisioterapia deportiva en Gràcia, Barcelona",
      desc: "Tratamiento para lesiones deportivas. Cita hoy.",
    },
  ];
  return (
    <div className="bg-secondary border border-border rounded-[var(--radius)] p-5 md:p-6">
      <div className="text-primary text-[11px] font-heading uppercase tracking-wider mb-4">
        Páginas que creamos para ti
      </div>
      <div className="space-y-3">
        {serps.map((s) => (
          <div key={s.url} className="bg-background border border-border rounded-[var(--radius)] p-3">
            <div className="text-[11px] text-green-700 truncate">{s.url}</div>
            <div className="text-sm md:text-[15px] text-blue-700 font-heading leading-snug">{s.title}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.desc}</div>
          </div>
        ))}
      </div>
      <ImgPlaceholder label="Imagen: web multipágina SEO local" />
    </div>
  );
};

const VisualStep4 = () => {
  const items = [
    {
      title: "¿Cuándo llamar a un fontanero de urgencias?",
      link: "Enlaza a → Fontanero urgencias · Madrid",
    },
    {
      title: "Cuánto cuesta reformar un baño completo en 2025",
      link: "Enlaza a → Reformas baños · Sevilla",
    },
    {
      title: "Ejercicios para aliviar el dolor lumbar en casa",
      link: "Enlaza a → Fisioterapia columna · Valencia",
    },
  ];
  return (
    <div className="bg-secondary border border-border rounded-[var(--radius)] p-5 md:p-6">
      <div className="text-primary text-[11px] font-heading uppercase tracking-wider mb-4">
        Artículos que publicamos
      </div>
      <div className="space-y-3">
        {items.map((it) => (
          <div key={it.title} className="flex gap-3 items-start bg-background border border-border rounded-[var(--radius)] p-3">
            <FileText className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <div>
              <div className="text-[13px] text-foreground leading-snug">{it.title}</div>
              <div className="text-[11px] text-muted-foreground mt-1">{it.link}</div>
            </div>
          </div>
        ))}
      </div>
      <ImgPlaceholder label="Imagen: creación de contenido mensual" />
    </div>
  );
};

const VisualStep5 = () => {
  const metrics = [
    { label: "Llamadas desde Google", value: "31", pct: 78 },
    { label: "Impresiones en Google Maps", value: "1.240", pct: 62 },
    { label: "Posición media Local Pack", value: "2,1", pct: 90 },
  ];
  return (
    <div className="bg-secondary border border-border rounded-[var(--radius)] p-5 md:p-6">
      <div className="text-primary text-[11px] font-heading uppercase tracking-wider mb-4">
        Informe mensual real
      </div>
      <div className="bg-background border border-border rounded-[var(--radius)] overflow-hidden">
        <div className="bg-primary text-primary-foreground px-3.5 py-2.5 text-sm font-heading">
          Mayo 2025 · Fontanero · Madrid
        </div>
        <div className="p-3.5 space-y-4">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="flex justify-between items-baseline mb-1.5">
                <span className="text-xs text-muted-foreground">{m.label}</span>
                <span className="text-[22px] font-heading font-bold text-foreground">{m.value}</span>
              </div>
              <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${m.pct}%` }} />
              </div>
            </div>
          ))}
          <div className="text-[11px] text-muted-foreground text-center pt-2">
            Ejemplo real de cliente · datos anonimizados
          </div>
        </div>
      </div>
      <ImgPlaceholder label="Imagen: informe mensual de resultados" />
    </div>
  );
};

interface Step {
  n: string;
  title: string;
  intro: string;
  bullets: React.ReactNode[];
  visual: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
}

const steps: Step[] = [
  {
    n: "01",
    title: "Auditamos tu punto de partida",
    intro:
      "Antes de tocar nada miramos dónde estás. Qué ve Google de tu negocio, qué buscan tus clientes en tu ciudad y qué hace tu competencia que tú no.",
    bullets: [
      "Estado de tu ficha de Google Business Profile",
      "Velocidad y estructura de tu web actual",
      <><strong>Búsquedas reales de tus clientes</strong> en tu ciudad y zona</>,
      "Quién ocupa los 3 puestos del Local Pack hoy",
    ],
    visual: <VisualStep1 />,
    imgSrc: "/images/como-funciona/auditoria.webp",
    imgAlt: "Análisis de búsquedas locales en Google",
  },
  {
    n: "02",
    title: "Optimizamos tu ficha de Google",
    intro:
      "Tu Google Business Profile es la pieza más visible del sistema. Es lo que ve el cliente cuando te encuentra: decide si llama o sigue buscando.",
    bullets: [
      "Categorías precisas según tu sector y ciudad",
      "Servicios detallados con las palabras que buscan tus clientes",
      <><strong>Fotos reales de tu negocio</strong>, no imágenes de banco de imágenes</>,
      "Publicaciones semanales y protocolo de respuesta a reseñas",
    ],
    visual: <VisualStep2 />,
    imgSrc: "/images/como-funciona/ficha-google.webp",
    imgAlt: "Ficha de Google Business Profile optimizada",
  },
  {
    n: "03",
    title: "Creamos tu web orientada a búsquedas locales",
    intro:
      "Una sola página no puede posicionar para diez búsquedas distintas. Creamos una web multipágina: una página por servicio, una por zona. Cada página es una puerta de entrada desde Google.",
    bullets: [
      "Una página por cada servicio principal que ofreces",
      "Una página por cada barrio o zona donde trabajas",
      <><strong>URLs y títulos con las palabras exactas</strong> que buscan tus clientes</>,
      "Botón de llamada visible y formulario de contacto simple",
    ],
    visual: <VisualStep3 />,
    imgSrc: "/images/como-funciona/web-multipagina.webp",
    imgAlt: "Web multipágina con estructura SEO local",
  },
  {
    n: "04",
    title: "Publicamos contenido que atrae clientes cada mes",
    intro:
      "Cada mes escribimos artículos sobre las dudas reales de tus clientes. Esos artículos traen visitas, enlazan a tus páginas de servicio y suman posicionamiento sin fecha de caducidad.",
    bullets: [
      <>Artículos sobre <strong>problemas reales</strong> de tus clientes, no sobre tu empresa</>,
      "Enlace interno desde cada artículo a tu página de servicio",
      "A los 6 meses tu web tiene más de 30 páginas posicionando",
      "Efecto acumulativo: cada pieza sigue funcionando meses después",
    ],
    visual: <VisualStep4 />,
    imgSrc: "/images/como-funciona/contenido-seo.webp",
    imgAlt: "Creación de contenido SEO para negocios locales",
  },
  {
    n: "05",
    title: "Cada mes sabes exactamente qué generó Google",
    intro:
      "Sin informes de 40 páginas. Sin reuniones. Un resumen claro cada mes: cuántas llamadas vinieron de Google, qué posiciones ganaste y qué hacemos el mes siguiente.",
    bullets: [
      "Llamadas y contactos directos atribuidos a Google",
      "Posiciones ganadas en el Local Pack ese mes",
      <><strong>Siempre la misma persona</strong> explicándotelo, sin intermediarios</>,
      "Si algo falla, lo ajustamos. Si funciona, lo potenciamos.",
    ],
    visual: <VisualStep5 />,
    imgSrc: "/images/como-funciona/informe-mensual.webp",
    imgAlt: "Informe mensual de resultados SEO local",
  },
];

const timeline = [
  {
    n: 1,
    label: "Semana 1-2",
    title: "Setup completo",
    text: "Ficha optimizada, web publicada y primeras páginas de servicio indexadas.",
  },
  {
    n: 2,
    label: "Mes 1-2",
    title: "Primeras posiciones",
    text: "Apareces en Maps para búsquedas de tu zona. Las primeras llamadas desde Google.",
  },
  {
    n: 3,
    label: "Mes 3-6",
    title: "Efecto acumulativo",
    text: "Más páginas, más búsquedas, más llamadas. El sistema escala sin coste adicional.",
  },
];

const ComoFunciona = () => (
  <>
    <SEOHead
      title="Cómo Funciona el Sistema de SEO Local | slocal.es"
      description="Descubre cómo funciona el sistema de visibilidad local de slocal.es. Sin agencias, sin humo. Tres pasos para que tu negocio aparezca en Google."
      canonical="/como-funciona"
    />

    {/* HERO */}
    <section className="bg-background py-16 md:py-24">
      <div className="container text-center max-w-3xl">
        <div className="text-primary font-heading text-xs uppercase tracking-[0.15em] mb-4">
          Cómo funciona
        </div>
        <h1 className="font-heading text-3xl md:text-5xl leading-tight text-foreground mb-5">
          Un sistema que trabaja mientras tú atiendes a tus clientes
        </h1>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-[600px] mx-auto">
          No somos una agencia con cuentas junior y reuniones semanales. Somos un sistema con tres piezas que hacemos funcionar por ti, mes a mes, sin que tengas que saber nada de SEO.
        </p>
      </div>
    </section>

    {/* PIEZAS */}
    <section className="py-16 md:py-20 border-t border-border">
      <div className="container">
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-base md:text-lg">
          Todo empieza por entender qué tiene en cuenta Google para decidir a quién mostrar primero.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pieces.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="bg-secondary border border-border rounded-[var(--radius)] p-7 md:p-8">
                <Icon className="w-10 h-10 text-primary mb-5" />
                <h3 className="font-heading text-xl text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{p.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* PASOS */}
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Qué hacemos exactamente cada mes
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Sin humo ni tecnicismos. Esto es lo que ocurre desde el día 1.
          </p>
        </div>

        <div className="space-y-16 md:space-y-20">
          {steps.map((s, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <div
                key={s.n}
                className={`pt-16 md:pt-20 ${idx > 0 ? "border-t border-border" : ""}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
                  {/* Visual */}
                  <div className={`order-1 ${reverse ? "md:order-1" : "md:order-2"}`}>
                    {s.visual}
                  </div>
                  {/* Text */}
                  <div className={`order-2 ${reverse ? "md:order-2" : "md:order-1"}`}>
                    <div className="font-heading text-5xl font-bold text-primary mb-3">{s.n}</div>
                    <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-base">{s.intro}</p>
                    <ul className="space-y-3">
                      {s.bullets.map((b, i) => (
                        <Bullet key={i}>{b}</Bullet>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* TIMELINE */}
    <section className="py-16 md:py-20 bg-secondary border-t border-border">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">
            Qué pasa en los primeros 90 días
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">Resultados reales, en orden.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector line - desktop */}
          <div className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-0.5 bg-primary/40" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative">
            {timeline.map((t) => (
              <div key={t.n} className="text-center md:px-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-heading text-lg flex items-center justify-center mx-auto mb-4 relative z-10">
                  {t.n}
                </div>
                <div className="text-primary text-xs font-heading uppercase tracking-wider mb-2">
                  {t.label}
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">{t.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA FINAL */}
    <section className="bg-dark-bg text-dark-fg py-20 md:py-24">
      <div className="container text-center max-w-2xl">
        <div className="text-primary font-heading text-xs uppercase tracking-[0.15em] mb-4">
          Un solo plan
        </div>
        <h2 className="font-heading text-3xl md:text-5xl text-dark-fg mb-5 leading-tight">
          147€/mes + IVA. Sin permanencia.
        </h2>
        <p className="text-dark-fg/70 text-base md:text-lg leading-relaxed mb-8">
          Sin contrato anual. Sin letra pequeña. Si en 3 meses no ves resultados, te lo decimos nosotros antes que tú.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link
            to="/contacto"
            className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-8 py-3 hover:bg-primary/90 transition-colors"
          >
            Hablemos →
          </Link>
          <Link
            to="/planes"
            className="border border-dark-fg/30 text-dark-fg font-heading text-sm rounded-lg px-8 py-3 hover:bg-dark-fg/10 transition-colors"
          >
            Ver qué incluye
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-dark-fg/80">
          {["Sin permanencia", "Precio fijo visible", "Siempre la misma persona"].map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ComoFunciona;
