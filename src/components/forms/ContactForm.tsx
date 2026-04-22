import { useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/lib/emailjs";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  from_name: z.string().trim().min(1, "Indica tu nombre").max(100),
  from_email: z.string().trim().email("Email no válido").max(255),
  message: z.string().trim().min(1, "Escribe tu mensaje").max(2000),
});

const ContactForm = () => {
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
          form_type: "Contacto",
          ...parsed.data,
          phone: "",
          business: "",
          sector: "",
          city: "",
        },
        { publicKey: EMAILJS_CONFIG.publicKey },
      );
      toast({
        title: "¡Mensaje enviado!",
        description: "Te respondemos en menos de 24 horas.",
      });
      (e.target as HTMLFormElement).reset();
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

  const inputCls =
    "w-full bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <input name="from_name" placeholder="Nombre" className={inputCls} maxLength={100} />
        {errors.from_name && <p className="text-xs text-destructive mt-1">{errors.from_name}</p>}
      </div>
      <div>
        <input name="from_email" type="email" placeholder="Email" className={inputCls} maxLength={255} />
        {errors.from_email && <p className="text-xs text-destructive mt-1">{errors.from_email}</p>}
      </div>
      <div>
        <textarea name="message" placeholder="Mensaje" rows={5} className={inputCls} maxLength={2000} />
        {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-primary text-primary-foreground font-heading text-sm rounded-lg px-8 py-3 hover:bg-primary/90 transition-colors disabled:opacity-60"
      >
        {loading ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
};

export default ContactForm;
