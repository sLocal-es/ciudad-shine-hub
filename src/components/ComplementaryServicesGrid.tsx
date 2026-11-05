import { Megaphone, PhoneCall } from "lucide-react";

export const complementaryServices = [
  {
    id: "ads",
    Icon: Megaphone,
    title: <><span className="text-primary">Google</span> Ads</>,
    description: "Para negocios con más volumen que quieren acelerar: campañas en la red de búsqueda de Google que trabajan junto al SEO local, gestionadas con criterio y revisadas cada mes.",
  },
  {
    id: "lsa",
    Icon: PhoneCall,
    title: <>Anuncios de <span className="text-primary">Servicios Locales</span> de Google</>,
    description: "Anuncios de pago por contacto (llamada) que aparecen por encima de los resultados locales de Google. Están disponibles para negocios de servicios que cumplen los requisitos de Google.",
  },
];

/** Cards de servicios complementarios (Google Ads + Anuncios de Servicios Locales), mismo diseño que la Home. */
const ComplementaryServicesGrid = ({ className = "mt-12" }: { className?: string }) => (
  <div className={`${className} grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch`}>
    {complementaryServices.map(({ id, Icon, title, description }) => (
      <article key={id} className="group transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 focus-within:-translate-y-1 hover:border-primary hover:shadow-[0_0_0_2px_hsl(var(--primary)/0.35),0_18px_60px_-10px_hsl(var(--primary)/0.65)] flex h-full overflow-hidden rounded-3xl border border-transparent bg-white">
        <div className="flex w-28 md:w-36 shrink-0 items-center justify-center bg-primary">
          <Icon className="h-12 w-12 md:h-14 md:w-14 text-primary-foreground" strokeWidth={1.75} aria-hidden="true" />
        </div>
        <div className="p-6 md:p-7">
          <h3 className="font-heading font-semibold text-warm-fg text-xl md:text-2xl leading-tight">{title}</h3>
          <p className="mt-3 text-sm md:text-base font-body text-warm-fg/75 leading-relaxed">{description}</p>
        </div>
      </article>
    ))}
  </div>
);

export default ComplementaryServicesGrid;
