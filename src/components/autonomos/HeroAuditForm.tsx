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

const AutonomosAuditForm = () => {
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", negocio: "", ciudad: "" });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      await emailjs.send(
        "service_vdsum02",
        "template_1ryowc9",
        {
          form_type: "auditoria_autonomos_hero",
          from_name: form.nombre,
          from_email: form.email,
          phone: form.telefono,
          business: form.negocio,
          city: form.ciudad,
          nombre: form.nombre,
          telefono: form.telefono,
          email: form.email,
          negocio: form.negocio,
          ciudad: form.ciudad,
        },
        { publicKey: "1cwUJ3NQK_iwLaJLD" },
      );
      setDone(true);
    } catch (err) {
      console.error(err);
      setError(true);
      setSending(false);
    }
  };

  if (done) {
    return (
      <div className="text-center text-white py-12">
        <p className="font-heading text-xl md:text-2xl">✅ ¡Listo! Recibirás tu análisis en menos de 24h.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <input name="nombre" required placeholder="Nombre" value={form.nombre} onChange={onChange} style={inputStyle} className="placeholder:text-white/40" />
      <input name="telefono" type="tel" required placeholder="Teléfono" value={form.telefono} onChange={onChange} style={inputStyle} className="placeholder:text-white/40" />
      <input name="email" type="email" required placeholder="Email" value={form.email} onChange={onChange} style={inputStyle} className="placeholder:text-white/40" />
      <input name="negocio" required placeholder="Tu servicio" value={form.negocio} onChange={onChange} style={inputStyle} className="placeholder:text-white/40" />
      <input name="ciudad" required placeholder="Ciudad" value={form.ciudad} onChange={onChange} style={inputStyle} className="placeholder:text-white/40" />
      <button
        type="submit"
        disabled={sending}
        className="w-full bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors disabled:opacity-60"
      >
        {sending ? "Enviando..." : "Quiero mi análisis gratuito"}
      </button>
      <p className="text-xs text-white/50 text-center">Sin compromiso. Sin llamadas comerciales.</p>
      {error && (
        <p className="text-xs text-center text-red-300">Algo ha fallado. Escríbenos a hola@slocal.es</p>
      )}
    </form>
  );
};

export default AutonomosAuditForm;
