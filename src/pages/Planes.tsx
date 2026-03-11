import SEOHead from "@/components/SEOHead";
import PlanCards from "@/components/PlanCards";
import FAQSection from "@/components/FAQSection";

const Planes = () => {
  const faqs = [
    { q: "¿Puedo empezar con el plan Esencial y subir después?", a: "Sí. Muchos clientes empiezan con el Esencial para tener una gestión básica y luego pasan al Pro cuando quieren acelerar resultados en ciudades más competidas." },
    { q: "¿Qué pasa si quiero cancelar el servicio mensual?", a: "No hay permanencia mínima. Puedes cancelar cuando quieras. Tu web y tu ficha siguen siendo tuyas." },
    { q: "¿El setup inicial incluye la creación de la web?", a: "Sí. El setup inicial (€397 + IVA este mes) incluye la creación de la web multipágina desde cero, optimizada para SEO, más la configuración profesional de tu ficha de Google." },
    { q: "¿Hay algún coste adicional no incluido en el plan?", a: "No. El precio mensual incluye todo: contenido, optimización de ficha de Google, artículos de blog y seguimiento mensual. El único coste adicional sería el dominio y hosting si no los tienes (desde 10€/mes)." },
    { q: "¿Cuándo empiezo a ver resultados?", a: "Los primeros movimientos en Google se ven entre el mes 2 y el 4. A partir del mes 6, las posiciones se consolidan y el tráfico orgánico crece de forma sostenida." },
  ];

  return (
    <>
      <SEOHead
        title="Planes y Precios | SEO Local para Negocios | slocal.es"
        description="Precios claros para posicionar tu negocio en Google. Dos planes mensuales + setup inicial desde €397. Sin letra pequeña. Sin permanencia."
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
            Elige tu plan de visibilidad
          </h1>
          <p className="text-dark-fg/70 text-base md:text-lg">
            Precios claros. Sin letra pequeña. Sin permanencia.
          </p>
        </div>
      </section>

      {/* PLANS */}
      <section className="py-16 md:py-20">
        <div className="container">
          <PlanCards />

          {/* COMPARISON TABLE */}
          <div className="mt-16 overflow-x-auto max-w-3xl mx-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-heading">Característica</th>
                  <th className="text-center py-3 px-4 font-heading">Esencial</th>
                  <th className="text-center py-3 px-4 font-heading bg-dark-bg text-dark-fg rounded-t-lg">Pro</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Web multipágina optimizada SEO", "✓", "✓"],
                  ["Ficha Google Business Profile", "✓ configurada", "✓ + optimización mensual"],
                  ["Alta en directorios", "✓", "✓"],
                  ["Artículos de blog", "2/mes", "4/mes"],
                  ["Posts en ficha de Google", "4/mes", "8/mes"],
                  ["Gestión continua de ficha", "✓", "✓"],
                  ["Informe mensual", "✓", "✓ detallado"],
                  ["Precio mensual", "€150 + IVA", "€250 + IVA"],
                  ["Permanencia", "Ninguna", "Ninguna"],
                ].map(([feature, n1, n2], i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 pr-4 text-foreground">{feature}</td>
                    <td className="text-center py-3 px-4">{n1}</td>
                    <td className="text-center py-3 px-4 bg-dark-bg/5">{n2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground mt-8 text-center max-w-2xl mx-auto">
            * Setup inicial (web + ficha): <span className="line-through opacity-60">€497</span>{" "}
            <strong className="text-green-600">€397 + IVA</strong> este mes · pago único. Precios sin IVA.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Preguntas frecuentes sobre los planes" items={faqs} />
    </>
  );
};

export default Planes;
