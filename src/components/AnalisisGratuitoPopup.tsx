import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { z } from "zod";
import { sendForm } from "@/lib/sendForm";

const DISMISSED_KEY = "analysisModalDismissed";
const SUBMITTED_KEY = "analysisModalSubmitted";
const MINIMUM_DELAY_MS = 3500;

const schema = z.object({
  nombre: z.string().trim().min(2, "Indica tu nombre").max(100),
  telefono: z
    .string()
    .trim()
    .min(6, "Indica un teléfono válido")
    .max(30)
    .refine((v) => v.replace(/\D/g, "").length >= 6, "Indica un teléfono válido"),
  empresa: z.string().trim().min(2, "Indica el nombre de tu empresa").max(255),
  email: z.string().trim().email("Email no válido").max(255),
});

type Fields = z.infer<typeof schema>;

const AnalisisGratuitoPopup = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [globalError, setGlobalError] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [form, setForm] = useState<Fields>({ nombre: "", telefono: "", empresa: "", email: "" });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(DISMISSED_KEY) || sessionStorage.getItem(SUBMITTED_KEY)) return;

    let delayElapsed = false;
    let triggered = false;

    const hasReachedHalfway = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      return scrollableHeight > 0 && window.scrollY >= scrollableHeight * 0.5;
    };

    const tryToOpen = () => {
      if (!delayElapsed || triggered || !hasReachedHalfway()) return;
      triggered = true;
      window.removeEventListener("scroll", tryToOpen);
      setOpen(true);
    };

    window.addEventListener("scroll", tryToOpen, { passive: true });
    const minimumDelay = window.setTimeout(() => {
      delayElapsed = true;
      tryToOpen();
    }, MINIMUM_DELAY_MS);

    return () => {
      window.clearTimeout(minimumDelay);
      window.removeEventListener("scroll", tryToOpen);
    };
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(DISMISSED_KEY, "true");
    } catch {
      /* noop */
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGlobalError("");
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof Fields, string>> = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0] as keyof Fields;
        if (k && !fieldErrors[k]) fieldErrors[k] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      await sendForm({
        form_type: "Análisis gratuito — Pop-up global",
        from_name: parsed.data.nombre,
        from_email: parsed.data.email,
        phone: parsed.data.telefono,
        business: parsed.data.empresa,
        message: "Solicitud de análisis gratuito desde el pop-up global.",
      });
      setSent(true);
      sessionStorage.setItem(SUBMITTED_KEY, "true");
    } catch {
      setGlobalError("Ha ocurrido un error. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  const inputCls =
    "w-full rounded-xl bg-white text-black placeholder:text-gray-600 caret-black px-4 py-3.5 text-[15px] font-body outline-hidden border border-[#E5E7EB] focus:border-primary focus:ring-2 focus:ring-primary/15 transition";

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start md:items-center justify-center bg-black/50 px-4 py-6 overflow-y-auto overscroll-contain"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Solicitar análisis gratuito"
    >
      <div
        className="relative w-full max-w-md my-auto rounded-3xl bg-white border border-[#E5E7EB] p-6 md:p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Cerrar"
          className="absolute top-4 right-4 w-9 h-9 grid place-items-center rounded-full border border-[#E5E7EB] text-black hover:border-primary hover:text-primary transition"
        >
          <X size={18} />
        </button>

        {sent ? (
          <div className="py-6 text-center">
            <h2 className="font-heading font-semibold text-black text-2xl leading-tight tracking-tight">
              ¡Solicitud recibida!
            </h2>
            <p className="mt-3 text-[15px] font-body font-light text-[#4B5563] leading-relaxed">
              Analizaremos tu presencia local y nos pondremos en contacto contigo.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 rounded-xl bg-primary text-primary-foreground px-6 py-3 font-heading text-[15px] font-medium hover:bg-primary/90 transition"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <p className="font-heading text-[11px] tracking-[0.22em] uppercase text-primary mb-3 pr-10">
              — Análisis gratuito
            </p>
            <h2 className="font-heading font-semibold text-black text-2xl md:text-[28px] leading-[1.1] tracking-tight pr-6">
              ¿Quieres saber cómo está posicionada tu empresa en{" "}
              <span className="text-primary">Google</span>?
            </h2>
            <p className="mt-3 text-[14px] md:text-[15px] font-body font-light text-[#4B5563] leading-relaxed">
              Te hacemos un análisis gratuito de tu presencia local y te mostramos las principales
              oportunidades para conseguir más visibilidad y clientes.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3" noValidate>
              <div>
                <input
                  className={inputCls}
                  placeholder="Nombre"
                  autoComplete="name"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                />
                {errors.nombre && <p className="mt-1 text-[13px] text-destructive">{errors.nombre}</p>}
              </div>
              <div>
                <input
                  className={inputCls}
                  placeholder="Teléfono"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                />
                {errors.telefono && <p className="mt-1 text-[13px] text-destructive">{errors.telefono}</p>}
              </div>
              <div>
                <input
                  className={inputCls}
                  placeholder="Nombre de la empresa"
                  autoComplete="organization"
                  value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                />
                {errors.empresa && <p className="mt-1 text-[13px] text-destructive">{errors.empresa}</p>}
              </div>
              <div>
                <input
                  className={inputCls}
                  placeholder="Correo electrónico"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && <p className="mt-1 text-[13px] text-destructive">{errors.email}</p>}
              </div>

              {globalError && <p className="text-[13px] text-destructive">{globalError}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-primary text-primary-foreground px-6 py-4 font-heading text-[15px] font-medium shadow-[0_14px_40px_-18px_hsl(var(--primary))] hover:bg-primary/90 transition disabled:opacity-60"
              >
                {loading ? "Enviando…" : "Solicitar mi análisis gratuito"}
              </button>
              <p className="text-center text-[12.5px] font-body text-[#6B7280] leading-relaxed">
                Sin compromiso. Analizamos tu presencia en Google y te mostramos las principales
                oportunidades de mejora.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AnalisisGratuitoPopup;
