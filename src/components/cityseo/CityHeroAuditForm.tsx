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

interface Props {
  ciudad: string;
}

const CityHeroAuditForm = ({ ciudad }: Props) => {
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", negocio: "", barrio: "" });
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
          form_type: `auditoria_${ciudad.toLowerCase()}_hero`,
          from_name: form.nombre,
          from_email: form.email,
          phone: form.telefono,
          business: form.negocio,
          city: ciudad,
          neighborhood: form.barrio,
          nombre: form.nombre,
          telefono: form.telefono,
          email: form.email,
          negocio: form.negocio,
          ciudad: ciudad,
          barrio: form.barrio,
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
      <div className="text-center text-primary-foreground py-12">
        <p className="font-heading text-xl md:text-2xl">✅ ¡Listo! Recibirás tu análisis en menos de 24h.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <input name="nombre" required placeholder="Nombre" value={form.nombre} onChange={onChange} style={inputStyle} className="placeholder:text-white/50" />
      <input name="telefono" type="tel" required placeholder="Teléfono" value={form.telefono} onChange={onChange} style={inputStyle} className="placeholder:text-white/50" />
      <input name="email" type="email" required placeholder="Email" value={form.email} onChange={onChange} style={inputStyle} className="placeholder:text-white/50" />
      <input name="negocio" required placeholder="Tu negocio" value={form.negocio} onChange={onChange} style={inputStyle} className="placeholder:text-white/50" />
      <input name="barrio" required placeholder="Barrio o zona" value={form.barrio} onChange={onChange} style={inputStyle} className="placeholder:text-white/50" />
      <button
        type="submit"
        disabled={sending}
        className="w-full bg-dark-bg text-dark-fg font-heading text-sm rounded-lg px-6 py-3 hover:bg-dark-bg/90 transition-colors disabled:opacity-60"
      >
        {sending ? "Enviando..." : "Quiero mi análisis gratuito"}
      </button>
      <p className="text-xs text-primary-foreground/70 text-center">Sin compromiso. Sin llamadas comerciales.</p>
      {error && (
        <p className="text-xs text-center text-red-100">Algo ha fallado. Escríbenos a info@slocal.es</p>
      )}
    </form>
  );
};

export default CityHeroAuditForm;
