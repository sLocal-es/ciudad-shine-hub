import { MapPin, Phone, Navigation2, Star, Search } from "lucide-react";

export interface GbpResult {
  name: string;
  rating: number;
  reviews: number;
  category: string;
  hours: string;
  distance: string;
  sponsored?: boolean;
}

interface SectorPhoneMockupProps {
  query: string;
  results: GbpResult[];
  /** Optional accent shown as a small colored dot in the map area */
  accentPins?: number;
}

/**
 * Realistic smartphone mockup showing a Google Maps Local Pack result.
 * Used across all sector pages — content is customized per sector.
 */
const SectorPhoneMockup = ({ query, results, accentPins = 3 }: SectorPhoneMockupProps) => {
  return (
    <div className="relative mx-auto w-full max-w-[340px] md:max-w-[380px]">
      {/* Soft glow behind phone */}
      <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full pointer-events-none" aria-hidden />

      {/* Phone body */}
      <div className="relative rounded-[2.5rem] bg-neutral-900 p-2.5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
        {/* Side buttons */}
        <div className="absolute left-[-3px] top-24 h-10 w-[3px] rounded-l bg-neutral-800" aria-hidden />
        <div className="absolute left-[-3px] top-40 h-16 w-[3px] rounded-l bg-neutral-800" aria-hidden />
        <div className="absolute right-[-3px] top-32 h-20 w-[3px] rounded-r bg-neutral-800" aria-hidden />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2rem] bg-white">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] font-medium text-neutral-900">
            <span>9:41</span>
            <div className="absolute left-1/2 top-1.5 h-5 w-24 -translate-x-1/2 rounded-full bg-neutral-900" aria-hidden />
            <div className="flex items-center gap-1">
              <span>••••</span>
              <span className="opacity-70">5G</span>
              <span className="ml-1 inline-block h-2.5 w-4 rounded-[2px] border border-neutral-900">
                <span className="block h-full w-3/4 bg-neutral-900" />
              </span>
            </div>
          </div>

          {/* Search bar */}
          <div className="px-3 pt-4 pb-3">
            <div className="flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-2 shadow-sm ring-1 ring-neutral-200">
              <Search className="h-3.5 w-3.5 text-neutral-500" strokeWidth={2.5} />
              <span className="truncate text-[11px] font-medium text-neutral-900">{query}</span>
            </div>
            <div className="mt-2 flex gap-1.5 overflow-hidden">
              {["Cerca", "Abierto ahora", "Mejor puntuados", "24h"].map((chip, i) => (
                <span
                  key={chip}
                  className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-medium ring-1 ${
                    i === 0
                      ? "bg-neutral-900 text-white ring-neutral-900"
                      : "bg-white text-neutral-700 ring-neutral-300"
                  }`}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Map area */}
          <div className="relative h-32 overflow-hidden border-y border-neutral-200 bg-[#e8eef3]">
            {/* Fake streets */}
            <svg viewBox="0 0 320 128" className="absolute inset-0 h-full w-full" aria-hidden>
              <path d="M0 40 L320 30" stroke="#c9d3dc" strokeWidth="6" fill="none" />
              <path d="M0 90 L320 100" stroke="#c9d3dc" strokeWidth="8" fill="none" />
              <path d="M80 0 L100 128" stroke="#c9d3dc" strokeWidth="5" fill="none" />
              <path d="M220 0 L200 128" stroke="#c9d3dc" strokeWidth="5" fill="none" />
              <path d="M0 60 Q160 70 320 55" stroke="#dfe6ec" strokeWidth="3" fill="none" />
              <rect x="20" y="10" width="40" height="18" fill="#dfe6ec" />
              <rect x="240" y="105" width="60" height="20" fill="#dfe6ec" />
              <rect x="130" y="45" width="55" height="35" fill="#dfe6ec" />
            </svg>
            {/* Pins — the top 3 in orange, dimmed for the rest */}
            {Array.from({ length: accentPins }).map((_, i) => {
              const positions = [
                { l: "22%", t: "36%" },
                { l: "58%", t: "24%" },
                { l: "74%", t: "62%" },
              ];
              const p = positions[i % 3];
              return (
                <div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-full"
                  style={{ left: p.l, top: p.t }}
                >
                  <div className="flex items-center justify-center rounded-full bg-primary p-1 shadow-md">
                    <MapPin className="h-3 w-3 text-white" strokeWidth={2.5} fill="white" />
                  </div>
                </div>
              );
            })}
            {/* Dimmed competitors */}
            {[{ l: "40%", t: "76%" }, { l: "86%", t: "44%" }].map((p, i) => (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-full"
                style={{ left: p.l, top: p.t }}
              >
                <div className="h-2 w-2 rounded-full bg-neutral-400/70" />
              </div>
            ))}
            {/* User dot */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-3 w-3 rounded-full bg-blue-500 ring-4 ring-blue-500/25" />
            </div>
          </div>

          {/* Results */}
          <div className="divide-y divide-neutral-100 px-3 pb-4">
            {results.slice(0, 3).map((r, i) => (
              <div
                key={r.name}
                className={`py-3 ${i === 0 ? "" : ""}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    {r.sponsored && (
                      <span className="mb-0.5 inline-block text-[8px] font-semibold uppercase tracking-wide text-neutral-500">
                        Anuncio
                      </span>
                    )}
                    <p className="truncate text-[11.5px] font-semibold text-neutral-900">
                      {r.name}
                    </p>
                    <div className="mt-0.5 flex items-center gap-1 text-[10px] text-neutral-700">
                      <span className="font-semibold">{r.rating.toFixed(1)}</span>
                      <span className="flex items-center gap-[1px] text-amber-500">
                        {Array.from({ length: 5 }).map((_, k) => (
                          <Star key={k} className="h-2.5 w-2.5" fill="currentColor" strokeWidth={0} />
                        ))}
                      </span>
                      <span className="text-neutral-500">({r.reviews})</span>
                      <span className="text-neutral-400">·</span>
                      <span className="truncate text-neutral-600">{r.category}</span>
                    </div>
                    <p className="mt-0.5 truncate text-[10px] text-neutral-500">
                      <span className="text-emerald-600 font-medium">{r.hours}</span> · {r.distance}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <button
                      type="button"
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white"
                      aria-label="Llamar"
                    >
                      <Phone className="h-3 w-3" strokeWidth={2.5} fill="white" />
                    </button>
                    <span className="text-[8px] font-medium text-neutral-500">Llamar</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <button
                      type="button"
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-900"
                      aria-label="Cómo llegar"
                    >
                      <Navigation2 className="h-3 w-3" strokeWidth={2.5} />
                    </button>
                    <span className="text-[8px] font-medium text-neutral-500">Ruta</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Home indicator */}
          <div className="flex justify-center pb-2 pt-1">
            <div className="h-1 w-24 rounded-full bg-neutral-900/80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorPhoneMockup;
