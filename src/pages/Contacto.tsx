import { useState } from "react";
import { Link } from "@/lib/router-compat";
import { z } from "zod";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { sendForm } from "@/lib/sendForm";
import { useToast } from "@/hooks/use-toast";
import { seoLocalCities } from "@/data/seoLocalCities";
import { RevealScope } from "@/components/Reveal";

const schema = z.object({
  nombre: z.string().trim().min(1, "Indica tu nombre").max(100),
  negocio: z.string().trim().min(1, "Indica tu negocio").max(255),
  ciudad: z.string().trim().min(1, "Indica tu ciudad").max(100),
  email: z.string().trim().email("Email no válido").max(255),
  telefono: z.string().trim().max(30).optional(),
  tieneWeb: z.string().max(50).optional(),
  mensaje: z.string().trim().max(2000).optional(),
});

const W = "mx-auto w-full max-w-[1200px] px-6";
const WHATSAPP_URL = "https://wa.me/34644147310?text=Hola%2C%20quiero%20mi%20an%C3%A1lisis%20gratuito%20de%20Google";
const pasos = ["Nos cuentas tu negocio", "Analizamos tu ficha y tu web", "Te explicamos por dónde empezar"];

const beneficios = [
  {
    n: "01",
    h: "Análisis personalizado",
    d: "Revisamos tu ficha de Google Business Profile y tu web reales, no una plantilla genérica.",
  },
  {
    n: "02",
    h: "Respuesta en menos de 24 horas",
    d: "Una persona del equipo revisa tu caso y te contesta el mismo día laborable.",
  },
];

const mapas = [
  { name: "Madrid", src: seoLocalCities.madrid.mapEmbed },
  { name: "Sevilla", src: seoLocalCities.sevilla.mapEmbed },
  { name: "Córdoba", src: seoLocalCities.cordoba.mapEmbed },
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

  const labelCls = "font-heading text-[11px] tracking-[0.18em] uppercase text-warm-fg block mb-2";
  const inputCls =
    "w-full rounded-xl bg-white text-warm-fg placeholder:text-warm-fg/50 px-4 py-3.5 text-[15px] font-body border border-warm-fg/15 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-hidden";

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
              Nuestra <Link to="/" className="text-primary hover:underline">agencia SEO local</Link> analizará gratuitamente tu
              Google Business Profile y tu presencia online para detectar oportunidades de mejora y mostrarte cómo conseguir
              más llamadas, formularios y clientes desde Google.
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
                className="inline-flex items-center gap-2 rounded-xl border border-[#E5E7EB] px-6 py-3.5 font-heading text-[15px] font-medium text-black hover:border-[#D1D5DB] transition"
              >
                info@slocal.es
              </a>
            </div>
          </div>
        </div>
      </section>

      <RevealScope />

      {/* CONFIANZA */}
      <section className="bg-dark-bg py-14 md:py-16">
        <div className={W}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {beneficios.map((b) => (
              <div key={b.n} data-reveal className="rounded-2xl border border-primary/20 p-7 bg-white shadow-[0_14px_40px_-24px_hsl(var(--primary)/0.6)]">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary font-heading text-xs text-primary-foreground">{b.n}</span>
                <h2 className="mt-5 font-heading font-semibold text-warm-fg text-xl md:text-2xl leading-tight tracking-tight">
                  {b.h}
                </h2>
                <p className="mt-3 text-[15px] font-body font-light text-warm-fg/75 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="formulario" className="bg-white py-14 md:py-16 scroll-mt-24">
        <div className={W}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              <div className="lg:col-span-5 rounded-3xl bg-dark-bg px-6 py-9 md:px-10 md:py-10">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-transparent px-4 py-1.5 text-[11px] font-heading uppercase tracking-[0.18em] text-white">
                  <span className="h-2 w-2 rounded-full bg-primary" />Solicitud
                </p>
                <h2 className="mt-6 font-heading font-semibold text-white text-3xl md:text-[34px] leading-[1.1] tracking-tight">
                  Cuéntanos dónde estás y te decimos{" "}
                  <span className="text-primary">qué está frenando tus llamadas</span>
                </h2>
                <p className="mt-5 text-base text-white/75 leading-relaxed">
                  Con estos datos revisamos tu ficha, tu web y las búsquedas locales de tu ciudad antes de
                  contactarte. Recibirás un análisis concreto, con acciones priorizadas.
                </p>

                <p className="mt-9 font-heading font-semibold text-white text-lg">Qué pasa después de escribirnos</p>
                <ol className="mt-5 space-y-4">
                  {pasos.map((paso, i) => (
                    <li key={paso} className="flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading font-semibold text-primary-foreground">{i + 1}</span>
                      <span className="font-heading text-base text-white">{paso}</span>
                    </li>
                  ))}
                </ol>

                {/* CTA WhatsApp */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-9 flex items-center justify-between gap-4 rounded-2xl bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_2px_hsl(var(--primary)/0.35),0_18px_60px_-10px_hsl(var(--primary)/0.65)]"
                >
                  <span>
                    <span className="font-heading text-[11px] tracking-[0.2em] uppercase text-primary">
                      Prefieres hablarlo
                    </span>
                    <span className="mt-2 block font-heading font-semibold text-warm-fg text-lg leading-tight">
                      Escríbenos por WhatsApp
                    </span>
                    <span className="mt-1 block text-[14px] font-body text-warm-fg">
                      Respuesta directa en horario laboral
                    </span>
                  </span>
                  <span className="shrink-0 w-11 h-11 rounded-full bg-primary text-primary-foreground grid place-items-center font-heading text-lg transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              <div className="lg:col-span-7 w-full rounded-3xl border border-primary/20 bg-white p-6 md:p-10 shadow-[0_24px_60px_-28px_hsl(var(--primary)/0.55)]">
                <form onSubmit={handleSubmit} className="space-y-5">
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
                          className={`cursor-pointer rounded-full px-4 py-2 font-heading text-[14px] transition ${
                            form.tieneWeb === opt
                              ? "bg-primary text-primary-foreground border border-primary"
                              : "border border-warm-fg/20 text-warm-fg hover:border-primary hover:text-primary"
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
                    className="w-full rounded-xl bg-[hsl(var(--dark-bg))] text-white px-6 py-4 font-heading text-base font-medium hover:bg-[hsl(var(--dark-bg))]/90 disabled:opacity-60 transition"
                  >
                    {loading ? "Enviando..." : "Solicitar análisis gratuito"}
                  </button>
                  <p className="text-center text-sm text-warm-fg/70">
                    🔒 Tus datos están seguros · Respuesta en menos de 24h
                  </p>
                </form>
              </div>
            </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="bg-dark-bg py-14 md:py-16">
        <div className={W}>
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-white text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-tight mb-5">
              Nuestra <span className="text-primary">presencia local</span>
            </h2>
            <p className="text-base md:text-lg font-body font-light text-white/70 leading-relaxed">
              Trabajamos con empresas de toda España para mejorar su visibilidad en Google Maps y aumentar las
              llamadas, solicitudes y clientes desde las búsquedas locales.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {mapas.map((m) => (
              <div
                key={m.name}
                className="rounded-3xl bg-primary p-4 md:p-5 shadow-[0_14px_40px_-18px_hsl(var(--primary))]"
              >
                <h3 className="font-heading font-semibold text-xl text-white mb-4">{m.name}</h3>
                <div className="rounded-2xl overflow-hidden bg-white">
                  <iframe
                    title={`Mapa de la ficha de Slocal en ${m.name}`}
                    src={m.src}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-[280px] md:h-[340px] border-0 block"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER FINAL */}
      <div className="bg-white py-8 md:py-10">
        <div className={W}>
          <div data-conversion-banner className="rounded-2xl bg-primary px-6 py-8 md:px-10 md:py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="font-heading text-xl md:text-2xl font-semibold text-white">¿Prefieres hablar directamente?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-heading font-medium text-primary transition-[transform,background-color] duration-200 hover:scale-[1.03] hover:bg-white/90 shrink-0"
            >
              Escríbenos por WhatsApp
              <span aria-hidden className="transition-transform duration-200 group-hover/cta:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
