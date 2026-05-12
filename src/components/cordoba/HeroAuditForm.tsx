import { useState } from "react";
import emailjs from "@emailjs/browser";

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "#fff",
  borderRadius: 8,
  padding: "12px 16px",
  width: "100%",
  fontSize: 14,
  outline: "none",
};

const HeroAuditForm = () => {
  const [form, setForm] = useState({ nombre: "", email: "", sector: "", telefono: "" });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        "service_vdsum02",
        "template_1ryowc9",
        {
          form_type: "auditoria_cordoba_hero",
          from_name: form.nombre,
          from_email: form.email,
          sector: form.sector,
          phone: form.telefono,
          city: "Córdoba",
          nombre: form.nombre,
          email: form.email,
          telefono: form.telefono,
        },
        { publicKey: "1cwUJ3NQK_iwLaJLD" },
      );
      setDone(true);
    } catch (err) {
      console.error(err);
      setSending(false);
    }
  };

  if (done) {
    return (
      <div className="text-center text-white py-12">
        <p className="font-heading text-2xl">¡Listo! Te escribimos hoy.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="text-primary text-xs font-bold uppercase tracking-wider mb-1">
        Auditoría SEO gratuita
      </div>
      <input
        name="nombre"
        required
        placeholder="Tu nombre"
        value={form.nombre}
        onChange={onChange}
        style={inputStyle}
        className="placeholder:text-white/40"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="tu@email.com"
        value={form.email}
        onChange={onChange}
        style={inputStyle}
        className="placeholder:text-white/40"
      />
      <select
        name="sector"
        required
        value={form.sector}
        onChange={onChange}
        style={inputStyle}
        className="appearance-none"
      >
        <option value="" disabled style={{ color: "#000" }}>
          Sector
        </option>
        {["Fontanero", "Fisioterapeuta", "Reformas", "Abogado", "Inmobiliaria", "Psicólogo", "Gimnasio", "Otro"].map(
          (s) => (
            <option key={s} value={s} style={{ color: "#000" }}>
              {s}
            </option>
          ),
        )}
      </select>
      <input
        name="telefono"
        placeholder="Teléfono (opcional)"
        value={form.telefono}
        onChange={onChange}
        style={inputStyle}
        className="placeholder:text-white/40"
      />
      <button
        type="submit"
        disabled={sending}
        className="w-full bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors disabled:opacity-60"
      >
        {sending ? "Enviando..." : "Quiero mi auditoría gratis →"}
      </button>
      <p className="text-xs text-white/50 text-center">
        Gratis · Sin compromiso · Respuesta en menos de 24h
      </p>
    </form>
  );
};

export default HeroAuditForm;
