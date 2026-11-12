import { useState, type ReactNode } from "react";
import { sendForm } from "@/lib/sendForm";
import { toast } from "@/hooks/use-toast";

/* ---------- Auditoria lead form (copy of master) ---------- */
export const AuditoriaLeadForm = ({ formType, compact = false, inline = false }: { formType: string; compact?: boolean; inline?: boolean }) => {
  const [form, setForm] = useState({ name: "", business: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendForm({
        form_type: formType,
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        business: form.business,
        message: form.message,
      });
      toast({ title: "Solicitud enviada", description: "Te enviaremos tu auditoría en menos de 24 horas." });
      setForm({ name: "", business: "", phone: "", email: "", message: "" });
    } catch {
      toast({ title: "Error al enviar", description: "Inténtalo de nuevo en unos minutos.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full rounded-xl bg-white text-warm-fg placeholder:text-warm-fg/50 px-4 py-3.5 text-[15px] font-body outline-hidden border border-transparent focus:border-warm-fg/20 focus:ring-2 focus:ring-white/40 transition resize-none";

  if (inline) {
    const inlineInputCls =
      "h-11 w-full min-w-0 rounded-xl border border-transparent bg-white px-3 text-sm font-body text-warm-fg outline-hidden placeholder:text-warm-fg/60 focus:border-warm-fg/20 focus:ring-2 focus:ring-white/40 transition";

    return (
      <form onSubmit={onSubmit} className="w-full lg:max-w-4xl">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_minmax(11rem,1.5fr)]">
          <input required type="text" placeholder="Nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inlineInputCls} />
          <input required type="text" placeholder="Nombre de tu empresa" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} className={inlineInputCls} />
          <input required type="tel" placeholder="Teléfono" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inlineInputCls} />
          <input required type="email" placeholder="Correo electrónico" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inlineInputCls} />
          <button
            type="submit"
            disabled={loading}
            className="col-span-2 h-11 w-full whitespace-nowrap rounded-xl bg-warm-fg px-4 text-sm font-heading font-medium text-white transition hover:bg-warm-fg/90 disabled:opacity-60 lg:col-span-1"
          >
            {loading ? "Enviando..." : "Quiero mi auditoría gratuita"}
          </button>
        </div>
        <p className="pt-2 text-center text-sm font-body text-white/90 lg:text-right">
          🔒 Tus datos están seguros. Te responderemos en menos de 24 horas.
        </p>
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full rounded-2xl bg-white/10 p-5 md:p-6 backdrop-blur-xs">
      <div className="space-y-3">
        <input required type="text" placeholder="Nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
        <input required type="text" placeholder="Nombre de tu empresa" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} className={inputCls} />
        <input required type="tel" placeholder="Teléfono" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
        <input required type="email" placeholder="Correo electrónico" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
        {!compact && (
          <textarea
            rows={3}
            placeholder="Ej. Conseguir más llamadas, aparecer primero en Google, mejorar mi web..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={inputCls}
          />
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-warm-fg text-white px-5 py-3.5 text-[15px] font-heading font-medium hover:bg-warm-fg/90 transition disabled:opacity-60"
        >
          {loading ? "Enviando..." : "Quiero mi auditoría gratuita"}
        </button>
        <p className="pt-1 text-center text-white/80 text-[13px] font-body">
          🔒 Tus datos están seguros. Te responderemos en menos de 24 horas.
        </p>
      </div>
    </form>
  );
};

type AuditoriaCtaSectionProps = {
  formType: string;
  id?: string;
  scrollMargin?: boolean;
  title?: ReactNode;
  body?: ReactNode;
  /** Estilo rediseñado (sectores, ciudades y páginas de servicio). */
  redesigned?: boolean;
  /** Sustituye el padding vertical de la sección (solo con redesigned). */
  paddingClassName?: string;
};

const CHECKS = ["En menos de 24 horas", "Sin compromiso"];

/** Bloque «Auditoría gratuita»: tarjeta naranja con título, ventajas y formulario. */
const AuditoriaCtaSection = ({ formType, id, scrollMargin, title, body, redesigned = true, paddingClassName }: AuditoriaCtaSectionProps) => {
  const R = redesigned;
  const wrap = R ? "mx-auto w-full max-w-[1200px] px-6" : "container";
  return (
    <section id={id} className={`${R ? `bg-white ${paddingClassName ?? "py-10 md:py-14"}` : "bg-white py-12 md:py-20"}${scrollMargin ? " scroll-mt-24" : ""}`}>
      <div className={wrap}>
        <div className={R ? "relative overflow-hidden rounded-3xl bg-primary text-primary-foreground px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16" : "rounded-3xl bg-primary text-primary-foreground px-6 py-14 md:px-14 md:py-20 lg:px-20 lg:py-24"}>
          {R && <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(500px 300px at 85% 10%, rgba(255,255,255,0.18), transparent 60%)" }} />}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center${R ? " relative z-10" : ""}`}>
            <div>
              <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-heading tracking-[0.18em] uppercase text-white">
                Auditoría gratuita
              </span>
              <h2 className="mt-6 font-heading font-semibold leading-[1.1] tracking-tight text-3xl md:text-4xl lg:text-5xl text-white max-w-[20ch]">
                {title ?? "Descubre por qué tu competencia recibe más llamadas que tú"}
              </h2>
              <p className="mt-6 max-w-xl text-base md:text-lg font-body font-light text-white/85 leading-relaxed">
                {body ?? "Analizamos gratis tu ficha de Google Business Profile y tu web. Te mostraremos los principales errores que están impidiendo que aparezcas por delante de tu competencia."}
              </p>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base font-body text-white/90">
                {CHECKS.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden>
                      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <AuditoriaLeadForm formType={formType} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditoriaCtaSection;
