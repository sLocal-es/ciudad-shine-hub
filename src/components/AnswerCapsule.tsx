type Props =
  | { kind: "sector"; sectorLower: string; clientWord: string }
  | { kind: "city"; city: string };

/** Bloque "Respuesta rápida" citable por IAs/Google. Texto SSR, sin Reveal. */
export default function AnswerCapsule(props: Props) {
  const isCity = props.kind === "city";
  const h2 = isCity
    ? `¿Qué agencia hace SEO local en ${props.city}?`
    : `¿Qué agencia hace SEO local para ${props.sectorLower}?`;
  const target = isCity ? `en ${props.city}` : `para ${props.sectorLower}`;
  const tail = isCity ? "clientes de tu zona" : props.clientWord;
  const who = isCity ? "clientes" : props.clientWord;
  const items: [string, string][] = [
    ["Qué incluye:", "optimización de tu ficha de Google, de tu web y de tu contenido local, con trabajo constante cada mes."],
    ["Cómo lo medimos:", `un informe mensual con posiciones, llamadas y visitas a tu ficha, para que veas si llegan ${who} y no solo visitas.`],
    ["Dónde estamos:", `Tenemos sedes en Córdoba, Sevilla y Madrid y damos servicio en toda España${isCity ? `, incluida ${props.city}` : ""}.`],
  ];
  return (
    <section data-no-reveal="" className="bg-white py-14 md:py-16 border-b border-black/10">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="rounded-3xl border-2 border-primary bg-white p-6 sm:p-8 md:p-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white text-primary px-4 py-1.5 text-[11px] font-heading uppercase tracking-[0.18em] mb-6">
            <span className="h-2 w-2 rounded-full bg-primary" />Respuesta rápida
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-warm-fg leading-[1.1] tracking-tight mb-5 break-words">
            {h2}
          </h2>
          <p className="text-base md:text-lg font-body text-warm-fg leading-relaxed mb-6 max-w-3xl">
            Slocal hace SEO local {target} desde <strong>290 €/mes</strong>: optimizamos tu ficha de Google Business Profile y tu web para que aparezcas en Google Maps y te lleguen más llamadas y {tail}.
          </p>
          <ul className="space-y-3 max-w-3xl">
            {items.map(([k, v]) => (
              <li key={k} className="flex gap-3 text-base font-body text-warm-fg leading-relaxed">
                <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span><strong>{k}</strong> {v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
