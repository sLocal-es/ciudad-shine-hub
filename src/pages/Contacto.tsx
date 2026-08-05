import { useState } from "react";
import { z } from "zod";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { sendForm } from "@/lib/sendForm";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  nombre: z.string().trim().min(1, "Indica tu nombre").max(100),
  negocio: z.string().trim().min(1, "Indica tu negocio").max(255),
  ciudad: z.string().trim().min(1, "Indica tu ciudad").max(100),
  email: z.string().trim().email("Email no válido").max(255),
  telefono: z.string().trim().max(30).optional(),
  tieneWeb: z.string().max(50).optional(),
  mensaje: z.string().trim().max(2000).optional(),
});

const sectionCls = "bg-white py-24 md:py-32 border-t border-warm-fg/10";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d811430.806100093!2d-6.6367644726445185!3d37.39807113471488!2m3!1f0!2f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac51e84256737de1%3A0xba193d08e9882037!2sSlocal!5e0!3m2!1ses!2ses!4v1785864736626!5m2!1ses!2ses";

const beneficios = [
  {
    n: "01",
    h: "Análisis personalizado",
    d: "Revisamos tu ficha de Google Business Profile y tu web reales, no una plantilla genérica.",
  },
  {
    n: "02",
    h: "Sin compromiso",
    d: "Te enviamos el análisis y las oportunidades detectadas. Decides después, sin presión.",
  },
  {
    n: "03",
    h: "Respuesta en menos de 24 horas",
    d: "Una persona del equipo revisa tu caso y te contesta el mismo día laborable.",
  },
];

const Contacto = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    negocio: "",
    ciudad: "",
    email: "",
    telefono: "",
    tieneWeb: "",
    mensaje: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: "Revisa el formulario",
        description: parsed.error.issues[0]?.message ?? "Hay campos no válidos",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      await sendForm({
        form_type: "Contacto (página /contacto)",
        from_name: parsed.data.nombre,
        from_email: parsed.data.email,
        phone: parsed.data.telefono,
        business: parsed.data.negocio,
        city: parsed.data.ciudad,
        message: `Tiene web: ${parsed.data.tieneWeb || "No indicado"}\n\n${parsed.data.mensaje ?? ""}`,
      });
      toast({
        title: "¡Solicitud enviada!",
        description: "Te enviamos tu análisis gratuito en menos de 24 horas.",
      });
      setForm({ nombre: "", negocio: "", ciudad: "", email: "", telefono: "", tieneWeb: "", mensaje: "" });
    } catch (err) {
      console.error("EmailJS error (/contacto):", err);
      toast({
        title: "No hemos podido enviar tu mensaje",
        description: "Inténtalo de nuevo o escríbenos a info@slocal.es",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const labelCls = "font-heading text-[11px] tracking-[0.18em] uppercase text-warm-fg/50 block mb-2";
  const inputCls =
    "w-full rounded-xl bg-white text-warm-fg placeholder:text-warm-fg/40 px-4 py-3.5 text-[15px] font-body outline-none border border-warm-fg/15 focus:border-primary focus:ring-2 focus:ring-primary/15 transition";

  return (
    <>
      <SEOHead
        title="Contacto | Agencia SEO Local slocal.es"
        description="Solicita tu análisis gratuito de Google Business Profile. Detectamos oportunidades para conseguir más llamadas y clientes desde Google. Respuesta en 24h."
        canonical="/contacto"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white text-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(600px 400px at 15% 20%, hsl(var(--primary) / 0.12), transparent 60%), radial-gradient(500px 400px at 90% 80%, hsl(var(--primary) / 0.08), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--dark-fg) / 0.04) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--dark-fg) / 0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />

        <div className="container relative pt-10 md:pt-14 pb-20 md:pb-28">
          <BreadcrumbNav items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />

          <div className="mt-10 max-w-4xl">
            <p className="font-heading text-xs tracking-[0.22em] uppercase text-primary mb-6">
              — Análisis gratuito
            </p>
            <h1 className="font-heading font-semibold leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl max-w-[26ch]">
              Cuéntanos tu negocio. Descubre cómo conseguir{" "}
              <span className="text-primary">más clientes desde Google</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg font-body font-light leading-relaxed text-black">
              Analizaremos gratuitamente tu Google Business Profile y tu presencia online para detectar
              oportunidades de mejora y mostrarte cómo conseguir más llamadas, formularios y clientes desde Google.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#formulario"
                className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3.5 font-heading text-[15px] font-medium shadow-[0_14px_40px_-18px_hsl(var(--primary))] hover:bg-primary/90 transition"
              >
                Solicitar análisis gratuito
              </a>
              <a
                href="mailto:info@slocal.es"
                className="inline-flex items-center gap-2 rounded-xl border border-warm-fg/20 px-6 py-3.5 font-heading text-[15px] font-medium text-warm-fg hover:border-warm-fg/40 transition"
              >
                info@slocal.es
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIANZA */}
      <section className={sectionCls}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {beneficios.map((b) => (
              <div key={b.n} className="rounded-3xl border border-warm-fg/10 p-8 bg-[hsl(var(--warm-bg))]">
                <span className="font-heading text-xs tracking-[0.22em] text-primary">{b.n}</span>
                <h2 className="mt-5 font-heading font-semibold text-warm-fg text-xl md:text-2xl leading-tight tracking-tight">
                  {b.h}
                </h2>
                <p className="mt-3 text-[15px] font-body font-light text-warm-fg/70 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="formulario" className={sectionCls}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="font-heading text-xs tracking-[0.22em] uppercase text-primary mb-6">— Solicitud</p>
              <h2 className="font-heading font-semibold text-warm-fg text-3xl md:text-4xl leading-[1.08] tracking-tight">
                Cuéntanos dónde estás y te decimos{" "}
                <span className="text-primary">qué está frenando tus llamadas</span>
              </h2>
              <p className="mt-6 text-base font-body font-light text-warm-fg/70 leading-relaxed">
                Con estos datos revisamos tu ficha, tu web y las búsquedas locales de tu ciudad antes de
                contactarte. Recibirás un análisis concreto, con acciones priorizadas.
              </p>

              {/* CTA WhatsApp */}
              <a
                href="https://wa.me/34600000000?text=Hola%2C%20quiero%20mi%20an%C3%A1lisis%20gratuito%20de%20Google"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 flex items-center justify-between gap-4 rounded-2xl border border-warm-fg/12 bg-[hsl(var(--warm-bg))] p-6 hover:border-primary/40 transition"
              >
                <span>
                  <span className="font-heading text-[11px] tracking-[0.2em] uppercase text-primary">
                    Prefieres hablarlo
                  </span>
                  <span className="mt-2 block font-heading font-semibold text-warm-fg text-lg leading-tight">
                    Escríbenos por WhatsApp
                  </span>
                  <span className="mt-1 block text-[14px] font-body text-warm-fg/60">
                    Respuesta directa en horario laboral
                  </span>
                </span>
                <span className="shrink-0 w-11 h-11 rounded-full bg-primary text-primary-foreground grid place-items-center font-heading text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <div className="lg:col-span-7 w-full">
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-warm-fg/10 bg-[hsl(var(--warm-bg))] p-6 md:p-10 space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Nombre *</label>
                    <input
                      required
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      className={inputCls}
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Negocio / sector *</label>
                    <input
                      required
                      value={form.negocio}
                      onChange={(e) => setForm({ ...form, negocio: e.target.value })}
                      className={inputCls}
                      placeholder="Nombre y actividad"
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Ciudad *</label>
                    <input
                      required
                      value={form.ciudad}
                      onChange={(e) => setForm({ ...form, ciudad: e.target.value })}
                      className={inputCls}
                      placeholder="Tu ciudad"
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputCls}
                      placeholder="tucorreo@email.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelCls}>Teléfono</label>
                    <input
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      className={inputCls}
                      placeholder="Para llamarte o escribirte por WhatsApp"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>¿Tienes web ahora?</label>
                  <div className="flex flex-wrap gap-3">
                    {["Sí", "No", "Sí pero necesita mejoras"].map((opt) => (
                      <label
                        key={opt}
                        className={`cursor-pointer rounded-full border px-4 py-2 text-[14px] font-body transition ${
                          form.tieneWeb === opt
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-warm-fg/15 bg-white text-warm-fg/70 hover:border-warm-fg/30"
                        }`}
                      >
                        <input
                          type="radio"
                          name="tieneWeb"
                          value={opt}
                          checked={form.tieneWeb === opt}
                          onChange={(e) => setForm({ ...form, tieneWeb: e.target.value })}
                          className="sr-only"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={labelCls}>¿Qué quieres mejorar? (opcional)</label>
                  <textarea
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    rows={4}
                    className={`${inputCls} resize-none`}
                    placeholder="Ej. Conseguir más llamadas, aparecer en Google Maps, mejorar mi web..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-primary text-primary-foreground px-6 py-4 font-heading text-[15px] font-medium shadow-[0_14px_40px_-18px_hsl(var(--primary))] hover:bg-primary/90 transition disabled:opacity-60"
                >
                  {loading ? "Enviando..." : "Solicitar análisis gratuito"}
                </button>
                <p className="text-center text-[13px] font-body text-warm-fg/60">
                  🔒 Tus datos están seguros · Sin compromiso · Respuesta en menos de 24h
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className={sectionCls}>
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading font-semibold text-warm-fg text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              Nuestra <span className="text-primary">presencia local</span>
            </h2>
            <p className="text-base md:text-lg font-body font-light text-warm-fg/70 leading-relaxed">
              Trabajamos con empresas de toda España para mejorar su visibilidad en Google Maps y aumentar las
              llamadas, solicitudes y clientes desde las búsquedas locales.
            </p>
          </div>
          <div className="w-full rounded-2xl overflow-hidden border border-warm-fg/10 shadow-[0_10px_40px_-30px_rgba(0,0,0,0.12)]">
            <iframe
              title="Mapa de Slocal"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[320px] md:h-[440px] border-0 block"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;
