import { Star, MapPin, Phone, Navigation, Globe, Bookmark, Wrench, HeartPulse, Hammer, PaintRoller, Scale, Dumbbell, Stethoscope, Brain, Search, TrendingUp, Quote } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const Stars = ({ value = 5, size = 12 }: { value?: number; size?: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        size={size}
        className={i <= value ? "fill-primary text-primary" : "fill-muted text-muted"}
      />
    ))}
  </div>
);

type Business = { name: string; category: string; rating: number; reviews: number; distance: string; highlight?: boolean };

export const LocalPackCard = ({
  query = "fontanero cerca de mí",
  city = "Madrid",
  businesses,
}: {
  query?: string;
  city?: string;
  businesses?: Business[];
}) => {
  const data: Business[] = businesses ?? [
    { name: "Tu Negocio Local", category: "Servicio profesional", rating: 5, reviews: 128, distance: "0,4 km", highlight: true },
    { name: "Servicios Express", category: "Servicio profesional", rating: 4, reviews: 64, distance: "1,1 km" },
    { name: "Asistencia 24h", category: "Servicio profesional", rating: 4, reviews: 41, distance: "1,8 km" },
  ];
  return (
    <div className="w-full max-w-md mx-auto bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background">
        <Search size={14} className="text-muted-foreground" />
        <span className="text-xs font-body text-foreground/80 truncate">{query} · {city}</span>
      </div>
      <div className="relative h-28 bg-gradient-to-br from-secondary via-background to-secondary overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 120" preserveAspectRatio="none">
          <path d="M0 60 Q100 20 200 60 T400 60" stroke="hsl(var(--border))" strokeWidth="1" fill="none" />
          <path d="M0 80 Q120 40 240 80 T400 80" stroke="hsl(var(--border))" strokeWidth="1" fill="none" />
        </svg>
        <MapPin className="absolute top-4 left-1/3 text-primary fill-primary" size={22} />
        <MapPin className="absolute top-10 right-1/4 text-foreground/40 fill-foreground/20" size={18} />
        <MapPin className="absolute bottom-3 left-1/2 text-foreground/40 fill-foreground/20" size={18} />
      </div>
      <ul className="divide-y divide-border">
        {data.map((b, i) => (
          <li key={i} className={`flex items-start gap-3 p-3 ${b.highlight ? "bg-primary/5 border-l-4 border-primary" : "border-l-4 border-transparent"}`}>
            <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-heading text-sm ${b.highlight ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}>
              {b.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-heading text-sm text-foreground truncate">{b.name}</span>
                {b.highlight && <span className="text-[10px] font-heading uppercase tracking-wide bg-primary/15 text-primary px-1.5 py-0.5 rounded">Tú</span>}
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Stars value={b.rating} />
                <span className="text-xs text-muted-foreground">{b.rating.toFixed(1).replace(".", ",")} · {b.reviews} reseñas</span>
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">{b.category} · {b.distance}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const MapsMobileMockup = ({ query = "dentista cerca de mí", city = "Valencia" }: { query?: string; city?: string }) => (
  <div className="mx-auto" style={{ width: 260 }}>
    <div className="rounded-[2rem] border-[10px] border-foreground/90 bg-background overflow-hidden shadow-xl">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-card">
        <Search size={12} className="text-muted-foreground" />
        <span className="text-[11px] font-body text-foreground/80 truncate">{query}</span>
      </div>
      <div className="relative h-40 bg-gradient-to-br from-secondary via-background to-secondary">
        <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 260 160" preserveAspectRatio="none">
          <path d="M0 40 L260 50" stroke="hsl(var(--border))" strokeWidth="1" fill="none" />
          <path d="M0 90 L260 80" stroke="hsl(var(--border))" strokeWidth="1" fill="none" />
          <path d="M80 0 L70 160" stroke="hsl(var(--border))" strokeWidth="1" fill="none" />
          <path d="M180 0 L190 160" stroke="hsl(var(--border))" strokeWidth="1" fill="none" />
        </svg>
        <MapPin size={28} className="absolute top-12 left-1/2 -translate-x-1/2 text-primary fill-primary drop-shadow" />
        <MapPin size={20} className="absolute top-6 right-6 text-foreground/40 fill-foreground/20" />
        <MapPin size={20} className="absolute bottom-6 left-6 text-foreground/40 fill-foreground/20" />
      </div>
      <div className="p-3">
        <div className="text-[10px] text-muted-foreground mb-2">Resultados en {city}</div>
        {[
          { n: "Tu negocio", r: 5, rv: 96, h: true },
          { n: "Centro Salud", r: 4, rv: 38, h: false },
        ].map((b, i) => (
          <div key={i} className={`flex items-center gap-2 p-2 rounded mb-1 ${b.h ? "bg-primary/10" : ""}`}>
            <div className={`w-6 h-6 rounded-full ${b.h ? "bg-primary" : "bg-secondary"} flex items-center justify-center text-[10px] font-heading ${b.h ? "text-primary-foreground" : "text-foreground"}`}>{b.n.charAt(0)}</div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-heading text-foreground truncate">{b.n}</div>
              <div className="flex items-center gap-1">
                <Stars value={b.r} size={9} />
                <span className="text-[9px] text-muted-foreground">{b.rv}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const GBPProfileMockup = ({
  name = "Tu Negocio Local",
  category = "Servicio profesional",
  city = "Madrid",
  rating = 4.9,
  reviews = 128,
}: { name?: string; category?: string; city?: string; rating?: number; reviews?: number }) => (
  <div className="w-full max-w-md mx-auto bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
    <div className="h-20 bg-gradient-to-r from-primary/20 via-secondary to-primary/10" />
    <div className="p-5">
      <h4 className="font-heading text-lg text-foreground">{name}</h4>
      <p className="text-xs text-muted-foreground mt-0.5">{category} · {city}</p>
      <div className="flex items-center gap-2 mt-2">
        <span className="font-heading text-primary">{rating.toFixed(1).replace(".", ",")}</span>
        <Stars value={Math.round(rating)} />
        <span className="text-xs text-muted-foreground">({reviews})</span>
      </div>
      <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
        <span className="text-emerald-600 font-heading">Abierto</span>
        <span>· Cierra a las 20:00</span>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        {[
          { i: Phone, l: "Llamar" },
          { i: Navigation, l: "Ruta" },
          { i: Globe, l: "Web" },
          { i: Bookmark, l: "Guardar" },
        ].map(({ i: Icon, l }) => (
          <div key={l} className="flex flex-col items-center gap-1 py-2 rounded-lg bg-secondary text-foreground">
            <Icon size={16} className="text-primary" />
            <span className="text-[10px] font-heading">{l}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1.5 mt-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="aspect-square rounded bg-gradient-to-br from-secondary to-background border border-border" />
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border space-y-3">
        {[
          { n: "María G.", t: "Rápidos y muy profesionales. Recomiendo 100%." },
          { n: "Carlos R.", t: "Mejor servicio de la zona. Volveré seguro." },
        ].map((r) => (
          <div key={r.n} className="flex gap-2">
            <div className="w-7 h-7 rounded-full bg-secondary shrink-0 flex items-center justify-center text-[10px] font-heading">{r.n.charAt(0)}</div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-heading">{r.n}</span>
                <Stars value={5} size={9} />
              </div>
              <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{r.t}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ReviewsWidget = ({ rating = 4.9, total = 184 }: { rating?: number; total?: number }) => {
  const dist = [
    { s: 5, p: 86 },
    { s: 4, p: 10 },
    { s: 3, p: 2 },
    { s: 2, p: 1 },
    { s: 1, p: 1 },
  ];
  return (
    <div className="w-full max-w-md mx-auto bg-card border border-border rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-5">
        <div className="text-center">
          <div className="font-heading text-5xl text-primary leading-none">{rating.toFixed(1).replace(".", ",")}</div>
          <Stars value={Math.round(rating)} />
          <div className="text-xs text-muted-foreground mt-1">{total} reseñas</div>
        </div>
        <div className="flex-1 space-y-1.5">
          {dist.map((d) => (
            <div key={d.s} className="flex items-center gap-2">
              <span className="text-[10px] text-muted-foreground w-3">{d.s}</span>
              <Star size={10} className="fill-primary text-primary" />
              <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${d.p}%` }} />
              </div>
              <span className="text-[10px] text-muted-foreground w-8 text-right">{d.p}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 pt-5 border-t border-border space-y-3">
        {[
          { n: "Lucía M.", t: "Atención impecable. Llegaron en menos de una hora.", d: "Hace 2 días" },
          { n: "Javier P.", t: "Profesionalidad y precio justo. Sin sorpresas.", d: "Hace 1 semana" },
        ].map((r) => (
          <div key={r.n} className="flex gap-2">
            <Quote size={14} className="text-primary shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-xs text-foreground leading-snug">{r.t}</p>
              <div className="text-[10px] text-muted-foreground mt-1">{r.n} · {r.d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const trend = [
  { m: "M1", v: 12 },
  { m: "M2", v: 24 },
  { m: "M3", v: 38 },
  { m: "M4", v: 51 },
  { m: "M5", v: 72 },
  { m: "M6", v: 94 },
];

export const MetricsDashboard = () => (
  <div className="w-full max-w-md mx-auto bg-card border border-border rounded-2xl p-6 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div>
        <div className="text-xs text-muted-foreground">Informe mensual</div>
        <div className="font-heading text-base">Tu negocio en Google</div>
      </div>
      <div className="flex items-center gap-1 text-xs font-heading text-emerald-600">
        <TrendingUp size={14} /> +148%
      </div>
    </div>
    <div className="grid grid-cols-3 gap-3 mb-5">
      {[
        { l: "Llamadas", v: "94" },
        { l: "Rutas", v: "212" },
        { l: "Web", v: "586" },
      ].map((k) => (
        <div key={k.l} className="rounded-lg bg-secondary p-3 text-center">
          <div className="font-heading text-xl text-foreground">{k.v}</div>
          <div className="text-[10px] text-muted-foreground mt-0.5">{k.l}</div>
        </div>
      ))}
    </div>
    <div className="h-24">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={trend} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
          <XAxis dataKey="m" stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} axisLine={false} />
          <YAxis hide />
          <Line type="monotone" dataKey="v" stroke="hsl(var(--primary))" strokeWidth={2.5} dot={{ r: 3, fill: "hsl(var(--primary))" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="text-[11px] text-muted-foreground text-center mt-2">Posición media: <span className="text-primary font-heading">#2</span> en Google Maps</div>
  </div>
);

const sectorIcons = [
  { i: Wrench, l: "Fontanería" },
  { i: HeartPulse, l: "Fisioterapia" },
  { i: Hammer, l: "Reformas" },
  { i: PaintRoller, l: "Pintura" },
  { i: Stethoscope, l: "Clínicas" },
  { i: Dumbbell, l: "Entrenadores" },
  { i: Scale, l: "Abogados" },
  { i: Brain, l: "Psicología" },
];

export const SectorIconsGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-md mx-auto">
    {sectorIcons.map(({ i: Icon, l }) => (
      <div key={l} className="flex flex-col items-center justify-center gap-2 aspect-square rounded-xl bg-secondary border border-border hover:border-primary transition-colors">
        <Icon size={26} className="text-primary" />
        <span className="text-[11px] font-heading text-foreground">{l}</span>
      </div>
    ))}
  </div>
);

export const ServiceHeroVisual = ({ slug }: { slug: string }) => {
  const map: Record<string, JSX.Element> = {
    "aparecer-en-google-maps": <MapsMobileMockup query="servicio cerca de mí" city="tu ciudad" />,
    "ficha-google-mi-negocio": <GBPProfileMockup />,
    "seo-para-negocios-locales": <LocalPackCard query="negocio local" city="tu ciudad" />,
    "como-salir-primero-en-google": <LocalPackCard query="servicio + ciudad" city="tu ciudad" />,
  };
  return map[slug] ?? <LocalPackCard />;
};
