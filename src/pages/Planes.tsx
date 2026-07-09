import SEOHead from "@/components/SEOHead";
import PlanCards from "@/components/PlanCards";
import FAQSection from "@/components/FAQSection";

const Planes = () => {
  const faqs = [
    { q: "¿Hay permanencia?", a: "No. Puedes cancelar cuando quieras. Tu web y tu ficha siguen siendo tuyas." },
    { q: "¿De verdad no hay setup ni alta?", a: "Correcto. Pagas — + IVA al mes y ya está. La web multipágina y la configuración de tu ficha de Google están incluidas dentro del plan, sin pago inicial." },
    { q: "¿Hay algún coste adicional no incluido en el plan?", a: "No. El precio mensual incluye todo: web, contenido, optimización de ficha de Google, artículos de blog y seguimiento mensual. El único coste opcional sería el dominio y hosting si no los tienes (desde 10€/mes)." },
    { q: "¿Cuándo empiezo a ver resultados?", a: "Los primeros movimientos en Google se ven entre el mes 2 y el 4. A partir del mes 6, las posiciones se consolidan y el tráfico orgánico crece de forma sostenida." },
    { q: "¿Funciona para cualquier ciudad?", a: "Sí, trabajamos negocios locales en toda España. En ciudades muy competidas los resultados tardan algo más, pero la metodología es la misma." },
  ];

  return (
    <>
      <SEOHead
        title="Planes y Precios | SEO Local para Negocios | slocal.es"
        description="Un único plan claro para posicionar tu negocio en Google: consulta condiciones. Sin setup, sin permanencia, sin letra pequeña."
        canonical="/planes"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
            { "@type": "ListItem", position: 2, name: "Planes", item: "https://slocal.es/planes" },
          ],
        }}
      />

      {/* HERO */}
      <section className="bg-dark-bg text-dark-fg py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <h1 className="font-heading text-3xl md:text-5xl leading-tight mb-4">
            Un plan, todo incluido
          </h1>
          <p className="text-dark-fg/70 text-base md:text-lg">
            consulta condiciones. Sin setup. Sin permanencia. Sin letra pequeña.
          </p>
        </div>
      </section>

      {/* PLAN */}
      <section className="py-16 md:py-20">
        <div className="container">
          <PlanCards />

          {/* WHAT'S INCLUDED */}
          <div className="mt-16 max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl text-center mb-8">
              Qué incluye tu plan
            </h2>
            <table className="w-full text-sm border-collapse">
              <tbody className="text-muted-foreground">
                {[
                  ["Web multipágina optimizada SEO", "Incluida"],
                  ["Ficha Google Business Profile", "Configurada + optimización mensual"],
                  ["Alta en directorios locales", "Incluida"],
                  ["Artículos de blog", "4 al mes"],
                  ["Posts en ficha de Google", "8 al mes"],
                  ["Gestión continua de ficha", "Incluida"],
                  ["Informe mensual de resultados", "Incluido"],
                  ["Setup / alta inicial", "0€"],
                  ["Permanencia", "Ninguna"],
                  ["Precio", "— + IVA / mes"],
                ].map(([feature, value], i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 pr-4 text-foreground">{feature}</td>
                    <td className="text-right py-3 pl-4">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground mt-8 text-center max-w-2xl mx-auto">
            Precio sin IVA. Dominio y hosting no incluidos (opcional, desde 10€/mes si los necesitas).
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Preguntas frecuentes sobre el plan" items={faqs} />
    </>
  );
};

export default Planes;
