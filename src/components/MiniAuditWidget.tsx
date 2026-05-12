import { useState } from "react";
import { Wrench, Activity, Hammer, Scale, Stethoscope, MoreHorizontal } from "lucide-react";
import { sendForm } from "@/lib/sendForm";

const sectores = [
  { label: "Fontanero", Icon: Wrench },
  { label: "Fisioterapeuta", Icon: Activity },
  { label: "Reformas", Icon: Hammer },
  { label: "Abogado", Icon: Scale },
  { label: "Dentista", Icon: Stethoscope },
  { label: "Otro", Icon: MoreHorizontal },
];

const visibilidades = ["Sí, pero bajo", "A veces", "No aparezco"];

const MiniAuditWidget = () => {
  const [step, setStep] = useState(1);
  const [sector, setSector] = useState("");
  const [visibilidad, setVisibilidad] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const progress = done ? 100 : step === 1 ? 33 : step === 2 ? 66 : 100;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await sendForm({
        form_type: "mini_auditoria_cordoba",
        from_name: "Mini auditoría",
        from_email: email,
        sector,
        city: "Córdoba",
        message: `Visibilidad en Google Maps: ${visibilidad}`,
      });
      setDone(true);
    } catch {
      setDone(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden w-full">
      <div className="h-1 bg-border">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="p-6 md:p-8 min-h-[340px] flex flex-col">
        {done ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mb-4">
              ✓
            </div>
            <h3 className="font-heading text-lg text-foreground mb-2">
              ¡Listo! Te contactamos en menos de 24h.
            </h3>
            <p className="text-sm text-muted-foreground">Revisa tu correo.</p>
          </div>
        ) : step === 1 ? (
          <>
            <div className="text-xs text-muted-foreground font-heading mb-2">PASO 1 DE 3</div>
            <h3 className="font-heading text-lg md:text-xl text-foreground mb-5">
              ¿En qué sector trabajas?
            </h3>
            <div className="flex flex-wrap gap-2">
              {sectores.map(({ label, Icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    setSector(label);
                    setStep(2);
                  }}
                  className="inline-flex items-center gap-2 border border-border bg-card rounded-full px-4 py-2 text-sm font-heading text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </>
        ) : step === 2 ? (
          <>
            <div className="text-xs text-muted-foreground font-heading mb-2">PASO 2 DE 3</div>
            <h3 className="font-heading text-lg md:text-xl text-foreground mb-5">
              ¿Apareces en Google Maps cuando buscan tu servicio?
            </h3>
            <div className="flex flex-wrap gap-2">
              {visibilidades.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => {
                    setVisibilidad(v);
                    setStep(3);
                  }}
                  className="border border-border bg-card rounded-full px-4 py-2 text-sm font-heading text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {v}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-xs text-muted-foreground font-heading mb-2">PASO 3 DE 3</div>
            <h3 className="font-heading text-lg md:text-xl text-foreground mb-5">
              ¿Dónde te enviamos el diagnóstico?
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full h-11 px-4 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground font-heading text-sm rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors disabled:opacity-60"
              >
                {loading ? "Enviando…" : "Ver mi diagnóstico gratis →"}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Gratis. Sin compromiso. Respuesta en 24h.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default MiniAuditWidget;
