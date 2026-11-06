/** Copy centralizado de los ConversionBanner (títulos y CTA orientados a beneficio). */
export const BANNER_COPY = {
  homeAparece: { title: "Quiero que mis clientes me encuentren", cta: "Ver cómo me ve Google" },
  homeTodo: { title: "Tú atiendes clientes, nosotros Google", cta: "Pedir mi auditoría gratuita" },
  homeHablamos: { title: "Descubre si el SEO Local encaja contigo", cta: "Hablar de mi negocio" },
  homeSemana: { title: "Ver cuánto me cuesta no aparecer", cta: "Quiero dejar de perder llamadas" },
  homeResenas: { title: "Estos negocios ya reciben llamadas desde Google", cta: "Quiero mi auditoría gratuita" },
  masClientes: (w: string) => ({ title: `¿Quieres más ${w} desde Google?`, cta: "Pedir mi auditoría gratuita" }),
  frena: { title: "Adelanta a quien hoy aparece antes que tú", cta: "Ver qué me frena en Google" },
  proximoCaso: { title: "Tu negocio puede ser el próximo caso de éxito", cta: "Quiero ser el próximo caso" },
  competencia: { title: "Ver cuánto me cuesta no aparecer", cta: "Quiero que me encuentren" },
  cityAparece: (c: string) => ({
    eyebrow: "AUDITORÍA GRATUITA",
    title: `¿Tu negocio aparece en Google Maps en ${c}?`,
    key: "Compruébalo gratis",
    sub: "Descubre en menos de 24 horas dónde estás frente a tu competencia.",
  }),
  cityCompetencia: (c: string) => ({
    eyebrow: "TU COMPETENCIA YA ESTÁ AHÍ",
    title: `Las llamadas de ${c} se las lleva quien sale primero.`,
    key: "Que seas tú",
    sub: "Te mostramos dónde estás hoy frente a tus competidores y qué haríamos para pasarlos. Sin compromiso.",
  }),
  cityLlamadas: (c: string) => ({ title: `Empieza a recibir llamadas en ${c}`, cta: "Hablar de mi negocio" }),
};
