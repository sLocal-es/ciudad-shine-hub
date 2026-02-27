import { Link } from "react-router-dom";

interface PlanCardProps {
  level: number;
  name: string;
  price: string;
  priceNote?: string;
  features: string[];
  featured?: boolean;
}

const planData: PlanCardProps[] = [
  {
    level: 1,
    name: "Ponte en el mapa",
    price: "197€",
    priceNote: "pago único",
    features: [
      "Web de 1 página optimizada para SEO",
      "Ficha de Google Business Profile configurada",
      "Alta en directorios locales principales",
      "Entrega en 10 días laborables",
    ],
  },
  {
    level: 2,
    name: "Que te encuentren primero",
    price: "247€/mes",
    priceNote: "mínimo 6 meses",
    featured: true,
    features: [
      "Todo lo del Nivel 1",
      "Web multipágina (hasta 20 páginas de servicios y áreas)",
      "2 artículos de blog al mes",
      "Optimización mensual de ficha Google",
      "Informe mensual de posiciones",
    ],
  },
  {
    level: 3,
    name: "El sistema completo",
    price: "497€/mes",
    priceNote: "mínimo 6 meses",
    features: [
      "Todo lo del Nivel 2",
      "Web completa (sin límite de páginas)",
      "4 artículos de blog al mes",
      "Estrategia de reseñas Google",
      "Optimización para IA y búsqueda por voz",
      "Informe mensual detallado",
    ],
  },
];

const PlanCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {planData.map((plan) => (
      <div
        key={plan.level}
        className={`rounded-xl p-6 border transition-all duration-200 hover:border-primary hover:-translate-y-[3px] ${
          plan.featured
            ? "bg-dark-bg text-dark-fg border-dark-bg"
            : "bg-card border-border"
        }`}
      >
        <p className={`text-sm font-body ${plan.featured ? "text-primary" : "text-muted-foreground"}`}>
          Nivel {plan.level}
        </p>
        <h3 className="font-heading text-xl mt-1 mb-3">{plan.name}</h3>
        <p className="font-heading text-3xl">
          {plan.price}
        </p>
        {plan.priceNote && (
          <p className={`text-sm mt-1 ${plan.featured ? "text-dark-fg/60" : "text-muted-foreground"}`}>
            {plan.priceNote}
          </p>
        )}
        <ul className="mt-5 space-y-2">
          {plan.features.map((f) => (
            <li key={f} className={`text-sm flex items-start gap-2 ${plan.featured ? "text-dark-fg/80" : "text-foreground/80"}`}>
              <span className="text-primary mt-0.5">✓</span>
              {f}
            </li>
          ))}
        </ul>
        <Link
          to="/contacto"
          className={`mt-6 block text-center rounded-lg py-3 font-heading text-sm transition-colors ${
            plan.featured
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "border border-border hover:border-primary hover:text-primary"
          }`}
        >
          Empezar →
        </Link>
      </div>
    ))}
  </div>
);

export { PlanCards, planData };
export default PlanCards;
