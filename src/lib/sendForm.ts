import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "./emailjs";

export interface SendFormPayload {
  title: string;
  formType: string;
  name: string;
  email: string;
  phone?: string;
  business?: string;
  sector?: string;
  city?: string;
  message?: string;
}

/**
 * Envía un formulario a EmailJS usando todas las variables que el template
 * actual espera ({{title}}, {{name}}, {{email}}, {{FORM_TYPE}}, etc.) y
 * también los aliases antiguos (from_name, from_email, form_type) para
 * compatibilidad.
 */
export async function sendForm(payload: SendFormPayload) {
  const params = {
    // Variables que usa el template actual
    title: payload.title,
    name: payload.name,
    email: payload.email,
    FORM_TYPE: payload.formType,

    // Aliases (compatibilidad)
    form_type: payload.formType,
    from_name: payload.name,
    from_email: payload.email,

    // Resto de campos
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
