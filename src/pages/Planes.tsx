import SEOHead from "@/components/SEOHead";
import PlanCards from "@/components/PlanCards";
import FAQSection from "@/components/FAQSection";

const Planes = () => {
  const faqs = [
    { q: "¿Puedo empezar con el Nivel 1 y subir después?", a: "Sí. Muchos clientes empiezan con el Nivel 1 para tener presencia básica y luego pasan al Nivel 2 o 3 cuando ven los primeros resultados y quieren acelerar el crecimiento." },
    { q: "¿Qué pasa si quiero cancelar el servicio mensual?", a: "Los Niveles 2 y 3 tienen un mínimo de 6 meses porque el SEO necesita ese tiempo para consolidar resultados. Después de ese periodo, puedes cancelar cuando quieras. Tu web y tu ficha siguen siendo tuyas." },
    { q: "¿El precio incluye la creación de la web?", a: "Sí. Todos los niveles incluyen la creación de la web desde cero, optimizada para SEO. En el Nivel 1 es una landing page. En el Nivel 2 hasta 5 páginas. En el Nivel 3 hasta 10 páginas." },
    { q: "¿Hay algún coste adicional no incluido en el plan?", a: "No. El precio incluye todo: diseño web, contenido, optimización de ficha de Google, artículos de blog y seguimiento mensual. El único coste adicional sería el dominio y hosting si no los tienes (desde 10€/mes)." },
    { q: "¿Cuándo empiezo a ver resultados?", a: "Los primeros movimientos en Google se ven entre el mes 2 y el 4. A partir del mes 6, las posiciones se consolidan y el tráfico orgánico crece de forma sostenida." },
  ];

  return (
    <>
      <SEOHead
        title="Planes y Precios | SEO Local para Negocios | slocal.es"
        description="Precios claros para posicionar tu negocio en Google. Desde 197€ pago único. Sin letra pequeña. Sin permanencia en el Nivel 1."
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
            Elige tu nivel de visibilidad
          </h1>
          <p className="text-dark-fg/70 text-base md:text-lg">
            Precios claros. Sin letra pequeña. Sin permanencia en el Nivel 1.
          </p>
        </div>
      </section>

      {/* PLANS */}
      <section className="py-16 md:py-20">
        <div className="container">
          <PlanCards />

          {/* COMPARISON TABLE */}
          <div className="mt-16 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-heading">Característica</th>
                  <th className="text-center py-3 px-4 font-heading">Nivel 1</th>
                  <th className="text-center py-3 px-4 font-heading bg-dark-bg text-dark-fg rounded-t-lg">Nivel 2</th>
                  <th className="text-center py-3 px-4 font-heading">Nivel 3</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Web optimizada SEO", "1 página", "Hasta 5 páginas", "Hasta 10 páginas"],
                  ["Ficha Google Business Profile", "✓", "✓ + optimización mensual", "✓ + optimización mensual"],
                  ["Alta en directorios", "✓", "✓", "✓"],
                  ["Artículos de blog", "—", "2/mes", "4/mes"],
                  ["Informe mensual", "—", "✓", "✓ detallado"],
                  ["Estrategia de reseñas", "—", "—", "✓"],
                  ["Optimización para IA", "—", "—", "✓"],
                  ["Precio", "197€ único", "247€/mes", "497€/mes"],
                  ["Compromiso mínimo", "Ninguno", "6 meses", "6 meses"],
                ].map(([feature, n1, n2, n3], i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 pr-4 text-foreground">{feature}</td>
                    <td className="text-center py-3 px-4">{n1}</td>
                    <td className="text-center py-3 px-4 bg-dark-bg/5">{n2}</td>
                    <td className="text-center py-3 px-4">{n3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground mt-8 text-center max-w-2xl mx-auto">
            * La visibilidad en IA depende de la antigüedad y autoridad del dominio. Diseñamos para estar listos — no prometemos posición, prometemos preparación.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Preguntas frecuentes sobre los planes" items={faqs} />
    </>
  );
};

export default Planes;
