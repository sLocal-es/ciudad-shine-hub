import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "./emailjs";

export interface SendFormPayload {
  form_type: string;
  from_name: string;
  from_email: string;
  phone?: string;
  business?: string;
  sector?: string;
  city?: string;
  message?: string;
}

/**
 * Envía todos los formularios a EmailJS con una única configuración y con
 * los nombres exactos de variables usados por la plantilla.
 */
export async function sendForm(payload: SendFormPayload) {
  const params = {
    form_type: payload.form_type,
    from_name: payload.from_name,
    from_email: payload.from_email,
    phone: payload.phone ?? "",
    business: payload.business ?? "",
    sector: payload.sector ?? "",
    city: payload.city ?? "",
    message: payload.message ?? "",
  };

  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    params,
    { publicKey: EMAILJS_CONFIG.publicKey },
  );
}
