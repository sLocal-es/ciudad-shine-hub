import { Link } from "@/lib/router-compat";
import {
  BriefcaseBusiness,
  Dumbbell,
  Hammer,
  HeartPulse,
  House,
  Scale,
  Stethoscope,
  UserRoundCog,
} from "lucide-react";

const sectores = [
  { to: "/seo-para-fontaneros", label: "SEO para fontaneros", description: "Posicionamos servicios de fontanería para búsquedas urgentes y trabajos locales en su zona.", icon: UserRoundCog },
  { to: "/seo-para-fisioterapeutas", label: "SEO para fisioterapeutas", description: "Mejoramos la visibilidad de clínicas y consultas para atraer pacientes cercanos.", icon: HeartPulse },
  { to: "/seo-para-abogados", label: "SEO para abogados", description: "Destacamos despachos legales en búsquedas locales de clientes que necesitan asesoramiento.", icon: Scale },
  { to: "/seo-para-dentistas", label: "SEO para dentistas", description: "Ayudamos a clínicas dentales a ganar presencia en Google Maps y búsquedas de tratamientos.", icon: Stethoscope },
  { to: "/seo-para-psicologos", label: "SEO para psicólogos", description: "Conectamos consultas de psicología con personas que buscan atención profesional en su ciudad.", icon: HeartPulse },
  { to: "/seo-para-gimnasios", label: "SEO para gimnasios", description: "Aumentamos la visibilidad de centros deportivos ante usuarios que buscan entrenar cerca.", icon: Dumbbell },
  { to: "/seo-para-reformas", label: "SEO para empresas de reformas", description: "Posicionamos empresas de reformas para proyectos de vivienda y servicios por zona.", icon: Hammer },
  { to: "/seo-para-inmobiliarias", label: "SEO para inmobiliarias", description: "Impulsamos agencias inmobiliarias en búsquedas locales de compra, venta y alquiler.", icon: House },
  { to: "/seo-para-autonomos", label: "SEO para autónomos", description: "Damos visibilidad a profesionales independientes que captan clientes en un área concreta.", icon: BriefcaseBusiness },
];

const SectorsGridSection = () => (
  <section className="bg-white py-14 md:py-16">
    <div className="mx-auto w-full max-w-[1200px] px-6">
      <div className="text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/70 px-4 py-1.5 text-[11px] font-heading uppercase tracking-[0.18em] text-warm-fg"><span className="h-2 w-2 rounded-full bg-primary" />Sectores</p>
      </div>
      <h2 className="mx-auto mt-4 text-center font-heading font-semibold text-warm-fg text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-tight max-w-[26ch]">
        SEO Local para <span className="text-primary">cada tipo</span> de negocio
      </h2>
      <p className="mx-auto mt-4 text-center text-base font-body text-warm-fg/70 leading-relaxed max-w-2xl">
        Cada sector tiene sus propias búsquedas y su propia competencia local. Por eso trabajamos de forma específica en cada uno.
      </p>
      <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {sectores.map((s) => {
          const SectorIcon = s.icon;
          return (
            <li key={s.to}>
              <Link
                to={s.to}
                title={s.description}
                className="flex h-full min-h-[120px] flex-col items-center justify-center text-center rounded-2xl border border-primary/15 bg-white p-4 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 focus-visible:-translate-y-1 hover:border-primary hover:shadow-[0_0_0_2px_hsl(var(--primary)/0.35),0_18px_60px_-10px_hsl(var(--primary)/0.65)] focus-visible:border-primary focus-visible:shadow-[0_0_0_2px_hsl(var(--primary)/0.35),0_18px_60px_-10px_hsl(var(--primary)/0.65)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground" aria-hidden>
                  <SectorIcon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-3 font-heading text-sm font-semibold text-warm-fg leading-tight">{s.label}</h3>
                <span className="mt-1 text-xs font-heading text-primary">Ver →</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default SectorsGridSection;
