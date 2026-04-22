import { useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/lib/emailjs";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  from_name: z.string().trim().min(1, "Indica tu nombre").max(100),
  from_email: z.string().trim().email("Email no válido").max(255),
  phone: z.string().trim().min(6, "Teléfono no válido").max(30),
  business: z.string().trim().min(1, "Indica tu negocio o URL").max(255),
  sector: z.string().min(1, "Selecciona un sector"),
  city: z.string().trim().min(1, "Indica tu ciudad").max(100),
});

const SECTORES = [
  "Fontanería",
  "Fisioterapia",
  "Reformas",
  "Pintura",
  "Clínica",
  "Entrenamiento personal",
  "Yoga/Pilates",
  "Otro",
];

const LeadMagnetForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[String(i.path[0])] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          form_type: "Lead magnet — Análisis gratuito",
          ...parsed.data,
          message: "",
        },
        { publicKey: EMAILJS_CONFIG.publicKey },
      );
      toast({
        title: "¡Solicitud enviada!",
        description: "Te contactamos en menos de 24 horas con tu análisis.",
      });
      (e.target as HTMLFormElement).reset();
    } catch {
      toast({
        title: "No hemos podido enviar tu solicitud",
        description: "Inténtalo de nuevo o escríbenos a info@slocal.es",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4" noValidate>
      <div>
        <input name="from_name" placeholder="Nombre" className={inputCls} maxLength={100} />
        {errors.from_name && <p className="text-xs text-destructive mt-1">{errors.from_name}</p>}
      </div>
      <div>
        <input name="from_email" type="email" placeholder="Email" className={inputCls} maxLength={255} />
        {errors.from_email && <p className="text-xs text-destructive mt-1">{errors.from_email}</p>}
      </div>
      <div>
        <input name="phone" placeholder="Teléfono" className={inputCls} maxLength={30} />
        {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
      </div>
      <div>
        <input name="business" placeholder="Nombre de tu negocio o URL de tu ficha" className={inputCls} maxLength={255} />
        {errors.business && <p className="text-xs text-destructive mt-1">{errors.business}</p>}
      </div>
      <div>
        <select name="sector" className={inputCls} defaultValue="">
          <option value="" disabled>Sector</option>
          {SECTORES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.sector && <p className="text-xs text-destructive mt-1">{errors.sector}</p>}
      </div>
      <div>
        <input name="city" placeholder="Ciudad" className={inputCls} maxLength={100} />
        {errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto bg-primary text-primary-foreground font-heading text-sm rounded-lg px-8 py-3 hover:bg-primary/90 transition-colors disabled:opacity-60"
        >
          {loading ? "Enviando..." : "Quiero mi análisis gratuito"}
        </button>
      </div>
    </form>
  );
};

export default LeadMagnetForm;
