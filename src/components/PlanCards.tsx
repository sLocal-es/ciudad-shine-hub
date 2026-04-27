import { Link } from "react-router-dom";

interface PlanCardProps {
  name: string;
  price: string;
  priceNote: string;
  features: string[];
  featured?: boolean;
}

const planData: PlanCardProps[] = [
  {
    name: "Plan único",
    price: "€147",
    priceNote: "+ IVA / mes · sin setup",
    featured: true,
    features: [
      "Web multipágina optimizada SEO incluida",
      "Ficha de Google Business Profile configurada y optimizada",
      "Alta en directorios locales relevantes",
      "4 artículos de blog al mes",
      "8 posts en tu ficha de Google al mes",
      "Gestión continua de tu ficha",
      "Informe mensual de resultados",
      "Sin permanencia · sin letra pequeña",
    ],
  },
];

const PlanCards = () => (
  <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
    {planData.map((plan) => (
      <div
        key={plan.name}
        className={`rounded-xl p-6 border transition-all duration-200 hover:border-primary hover:-translate-y-[3px] relative ${
          plan.featured
            ? "bg-dark-bg text-dark-fg border-primary"
            : "bg-card border-border"
        }`}
      >
        {plan.featured && (
          <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
            Todo incluido
          </div>
        )}
        <h3 className="font-heading text-xl mt-1 mb-3">{plan.name}</h3>
        <p className={`font-heading text-3xl ${plan.featured ? "text-primary" : ""}`}>
          {plan.price}
        </p>
        <p className={`text-sm mt-1 ${plan.featured ? "text-dark-fg/60" : "text-muted-foreground"}`}>
          {plan.priceNote}
        </p>
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
    <p className="text-xs text-muted-foreground text-center mt-2">
      Sin setup · sin permanencia · precio sin IVA.
    </p>
  </div>
);

export { PlanCards, planData };
export default PlanCards;
