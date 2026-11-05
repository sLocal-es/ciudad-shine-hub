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
  cityCompetencia: (c: string) => ({ title: `Gana a tu competencia en ${c}`, cta: "Revisar mi ficha de Google" }),
  cityAparece: (c: string) => ({ title: `Que te encuentren en ${c}`, cta: "Ver cómo me ve Google" }),
  cityLlamadas: (c: string) => ({ title: `Empieza a recibir llamadas en ${c}`, cta: "Hablar de mi negocio" }),
};
