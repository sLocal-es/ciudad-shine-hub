import { useEffect, useState } from "react";
import { Search, MapPin, Star, Navigation, Phone } from "lucide-react";

interface Business {
  name: string;
  rating: number;
  reviews: number;
  distance: string;
  category: string;
  status: string;
}

interface Scenario {
  query: string;
  city: string;
  results: Business[];
}

const scenarios: Scenario[] = [
  {
    query: "Fontanería en Sevilla",
    city: "Sevilla",
    results: [
      { name: "Fontanería Triana 24h", rating: 4.9, reviews: 187, distance: "0,6 km", category: "Fontanero · Urgencias", status: "Abierto ahora" },
      { name: "Aqua Reparaciones", rating: 4.6, reviews: 92, distance: "1,2 km", category: "Fontanero", status: "Abierto · Cierra 20:00" },
      { name: "Fontaneros del Sur", rating: 4.3, reviews: 41, distance: "2,1 km", category: "Fontanero", status: "Abierto ahora" },
    ],
  },
  {
    query: "Clínica dental en Madrid",
    city: "Madrid",
    results: [
      { name: "Clínica Dental Chamberí", rating: 4.9, reviews: 312, distance: "0,4 km", category: "Dentista · Implantes", status: "Abierto · Cierra 21:00" },
      { name: "Dental Salamanca", rating: 4.7, reviews: 198, distance: "1,1 km", category: "Clínica dental", status: "Abierto ahora" },
      { name: "Sonrisa Madrid", rating: 4.4, reviews: 76, distance: "1,8 km", category: "Dentista", status: "Abierto · Cierra 20:00" },
    ],
  },
  {
    query: "Reforma en Málaga",
    city: "Málaga",
    results: [
      { name: "Reformas Costa del Sol", rating: 4.8, reviews: 154, distance: "0,9 km", category: "Empresa de reformas", status: "Abierto · Cierra 19:00" },
      { name: "Obra & Diseño Málaga", rating: 4.6, reviews: 89, distance: "1,5 km", category: "Reformas integrales", status: "Abierto ahora" },
      { name: "Reformas Pedregalejo", rating: 4.2, reviews: 37, distance: "2,7 km", category: "Reformas", status: "Abierto · Cierra 18:00" },
    ],
  },
  {
    query: "Abogado laboralista en Madrid",
    city: "Madrid",
    results: [
      { name: "Despacho Laboral Madrid", rating: 4.9, reviews: 221, distance: "0,5 km", category: "Abogado laboralista", status: "Abierto · Cierra 19:00" },
      { name: "Bufete Ríos & Asociados", rating: 4.7, reviews: 134, distance: "1,3 km", category: "Abogados", status: "Abierto ahora" },
      { name: "Laboralistas Centro", rating: 4.5, reviews: 68, distance: "2,0 km", category: "Abogado laboralista", status: "Abierto · Cierra 18:00" },
    ],
  },
  {
    query: "Peluquería en Valencia",
    city: "Valencia",
    results: [
      { name: "Studio Hair Ruzafa", rating: 4.9, reviews: 276, distance: "0,3 km", category: "Peluquería · Unisex", status: "Abierto · Cierra 20:30" },
      { name: "Peluquería Carmen", rating: 4.6, reviews: 112, distance: "1,0 km", category: "Peluquería", status: "Abierto ahora" },
      { name: "Hair Loft Valencia", rating: 4.4, reviews: 54, distance: "1,7 km", category: "Peluquería", status: "Abierto · Cierra 20:00" },
    ],
  },
];

const Stars = ({ rating }: { rating: number }) => {
  const full = Math.round(rating);
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${i < full ? "fill-amber-400 text-amber-400" : "text-white/20"}`}
        />
      ))}
    </span>
  );
};

const HeroMapsRanking = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % scenarios.length), 2500);
    return () => clearInterval(id);
  }, []);

  const s = scenarios[idx];

  return (
    <div
      className="w-full rounded-xl bg-[#1f1f1f] border border-white/10 shadow-2xl overflow-hidden"
      aria-label="Simulación de ranking en Google Maps"
    >
      {/* Search bar */}
      <div className="p-3 bg-[#2a2a2a] border-b border-white/5">
        <div
          key={`q-${idx}`}
          className="flex items-center gap-2 bg-[#1a1a1a] rounded-full px-4 py-2.5 animate-fade-in"
        >
          <Search className="w-4 h-4 text-white/50 shrink-0" />
          <span className="text-sm text-white/90 flex-1 truncate">{s.query}</span>
          <span className="text-[10px] text-white/40 uppercase tracking-wider hidden sm:inline">
            {s.city}
          </span>
        </div>
      </div>

      {/* Map area */}
      <div className="relative h-28 bg-gradient-to-br from-[#2d3a2d] via-[#3a4a3a] to-[#2a3540] overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-1/3 left-[28%]">
          <MapPin className="w-6 h-6 text-primary drop-shadow-lg fill-primary" />
        </div>
        <div className="absolute top-1/2 left-[55%]">
          <MapPin className="w-5 h-5 text-white/60" />
        </div>
        <div className="absolute top-[60%] left-[72%]">
          <MapPin className="w-5 h-5 text-white/60" />
        </div>
      </div>

      {/* Results */}
      <div key={`r-${idx}`} className="divide-y divide-white/5 animate-fade-in">
        {s.results.map((b, i) => {
          const top = i === 0;
          return (
            <div key={b.name} className="p-3.5 flex gap-3 items-start">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-heading shrink-0 ${
                  top ? "bg-primary text-primary-foreground" : "bg-white/10 text-white/70"
                }`}
              >
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`text-sm font-heading truncate ${
                      top ? "text-primary" : "text-white/90"
                    }`}
                  >
                    {b.name}
                  </span>
                  {top && (
                    <span className="text-[9px] font-heading uppercase tracking-wider bg-primary/20 text-primary px-1.5 py-0.5 rounded">
                      Tu negocio
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 mt-0.5 text-xs text-white/60">
                  <span className="text-amber-400 font-semibold">{b.rating.toFixed(1)}</span>
                  <Stars rating={b.rating} />
                  <span>({b.reviews})</span>
                </div>
                <div className="text-[11px] text-white/50 mt-0.5 truncate">
                  {b.category} · {b.distance} · <span className="text-emerald-400">{b.status}</span>
                </div>
              </div>
              {top && (
                <div className="hidden sm:flex flex-col gap-1 shrink-0">
                  <button
                    type="button"
                    className="w-7 h-7 rounded-full bg-primary/15 text-primary flex items-center justify-center"
                    aria-label="Llamar"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 rounded-full bg-white/5 text-white/70 flex items-center justify-center"
                    aria-label="Cómo llegar"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Indicator */}
      <div className="flex justify-center gap-1.5 py-2.5 bg-[#1a1a1a] border-t border-white/5">
        {scenarios.map((_, i) => (
          <span
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === idx ? "w-6 bg-primary" : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroMapsRanking;
