import { useState, ReactNode } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { sendForm } from "@/lib/sendForm";
import { useToast } from "@/hooks/use-toast";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isPhone = (v: string) => /[\d\s+()-]{6,}/.test(v) && v.replace(/\D/g, "").length >= 6;

const schema = z.object({
  from_name: z.string().trim().min(1, "Indica tu nombre").max(100),
  contact: z
    .string()
    .trim()
    .min(1, "Indica tu WhatsApp o email")
    .max(255)
    .refine((v) => isEmail(v) || isPhone(v), "Introduce un email o WhatsApp válido"),
  business: z.string().trim().min(1, "Indica el nombre de tu negocio").max(255),
  city: z.string().trim().min(1, "Indica tu ciudad").max(100),
});

interface Props {
  trigger: ReactNode;
}

const AnalisisGratuitoModal = ({ trigger }: Props) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
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
    const contact = parsed.data.contact;
    try {
      await sendForm({
        form_type: "Análisis gratuito — Modal Home",
        from_name: parsed.data.from_name,
        from_email: isEmail(contact) ? contact : "—",
        phone: isPhone(contact) && !isEmail(contact) ? contact : "—",
        business: parsed.data.business,
        city: parsed.data.city,
      });
      toast({
        title: "¡Solicitud enviada!",
        description: "Te contactamos en menos de 24 horas con tu análisis.",
      });
      (e.target as HTMLFormElement).reset();
      setOpen(false);
    } catch (err) {
      console.error("EmailJS error (AnalisisGratuito):", err);
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
    "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-lg bg-card border-border rounded-xl p-6 md:p-8 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl md:text-3xl leading-tight text-foreground">
            Descubre cómo te ve Google ahora mismo
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm md:text-base leading-relaxed pt-2">
            Analizamos gratis tu ficha de Google Business Profile y te mostramos exactamente qué está limitando tu visibilidad.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2" noValidate>
          <div className="md:col-span-2">
            <input name="from_name" placeholder="Nombre" className={inputCls} maxLength={100} />
            {errors.from_name && <p className="text-xs text-destructive mt-1">{errors.from_name}</p>}
          </div>
          <div className="md:col-span-2">
            <input name="contact" placeholder="WhatsApp o email" className={inputCls} maxLength={255} />
            {errors.contact && <p className="text-xs text-destructive mt-1">{errors.contact}</p>}
          </div>
          <div>
            <input name="business" placeholder="Nombre del negocio" className={inputCls} maxLength={255} />
            {errors.business && <p className="text-xs text-destructive mt-1">{errors.business}</p>}
          </div>
          <div>
            <input name="city" placeholder="Ciudad" className={inputCls} maxLength={100} />
            {errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}
          </div>
          <div className="md:col-span-2 mt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground font-heading text-sm rounded-lg px-8 py-3 hover:bg-primary/90 transition-colors disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Quiero mi análisis gratuito"}
            </button>
            <div className="flex items-center justify-center gap-3 mt-3 text-xs text-muted-foreground">
              <span>Sin compromiso</span>
              <span aria-hidden>·</span>
              <span>Respuesta en menos de 24h</span>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AnalisisGratuitoModal;
