import { useState } from "react";
import { z } from "zod";
import SEOHead from "@/components/SEOHead";
import ImagePlaceholder from "@/components/ImagePlaceholder";
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
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          form_type: "Contacto (página /contacto)",
          from_name: parsed.data.nombre,
          from_email: parsed.data.email,
          phone: parsed.data.telefono ?? "",
          business: parsed.data.negocio,
          sector: "",
          city: parsed.data.ciudad,
          message: `Tiene web: ${parsed.data.tieneWeb || "No indicado"}\n\n${parsed.data.mensaje ?? ""}`,
        },
        { publicKey: EMAILJS_CONFIG.publicKey },
      );
      toast({
        title: "¡Mensaje enviado!",
        description: "Te respondemos en menos de 24 horas.",
      });
      setForm({ nombre: "", negocio: "", ciudad: "", email: "", telefono: "", tieneWeb: "", mensaje: "" });
    } catch {
      toast({
        title: "No hemos podido enviar tu mensaje",
        description: "Inténtalo de nuevo o escríbenos a info@slocal.es",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Contacto | slocal.es"
        description="Cuéntanos tu negocio y te decimos qué nivel encaja mejor contigo. Respondemos en menos de 24h. Sin compromiso."
        canonical="/contacto"
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* FORM */}
            <div>
              <h1 className="font-heading text-3xl md:text-4xl mb-3">Hablemos</h1>
              <p className="text-muted-foreground mb-8">
                Cuéntanos tu negocio y te decimos qué nivel encaja mejor contigo.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-body block mb-1.5">Nombre *</label>
                  <input
                    required
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-card focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-body block mb-1.5">Negocio / sector *</label>
                  <input
                    required
                    value={form.negocio}
                    onChange={(e) => setForm({ ...form, negocio: e.target.value })}
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-card focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-body block mb-1.5">Ciudad *</label>
                  <input
                    required
                    value={form.ciudad}
                    onChange={(e) => setForm({ ...form, ciudad: e.target.value })}
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-card focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-body block mb-1.5">Email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-card focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-body block mb-1.5">Teléfono</label>
                  <input
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-card focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-body block mb-1.5">¿Tienes web ahora?</label>
                  <div className="flex gap-4 text-sm">
                    {["Sí", "No", "Sí pero necesita mejoras"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="tieneWeb"
                          value={opt}
                          checked={form.tieneWeb === opt}
                          onChange={(e) => setForm({ ...form, tieneWeb: e.target.value })}
                          className="accent-primary"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-body block mb-1.5">Mensaje (opcional)</label>
                  <textarea
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    rows={4}
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-card focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-8 py-3 hover:bg-primary/90 transition-colors disabled:opacity-60"
                >
                  {loading ? "Enviando..." : "Enviar →"}
                </button>
                <p className="text-xs text-muted-foreground mt-2">
                  Sin compromiso · Respondemos en menos de 24h
                </p>
              </form>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
              <ImagePlaceholder description="FOTO: persona trabajando, portátil, ambiente profesional" height="420px" />
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="text-muted-foreground">Email:</span>{" "}
                  <a href="mailto:hola@slocal.es" className="text-primary hover:underline">hola@slocal.es</a>
                </p>
                <p className="text-sm text-muted-foreground">
                  También por WhatsApp: [número próximamente]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;
