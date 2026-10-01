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
  <section className="bg-white py-24 md:py-32 border-t border-warm-fg/10">
    <div className="container">
      <p className="text-center font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Sectores</p>
      <h2 className="mx-auto text-center font-heading font-semibold text-warm-fg text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-[22ch] mb-6">
        SEO Local para <span className="text-primary">cada tipo</span> de negocio
      </h2>
      <p className="mx-auto text-center text-base md:text-lg font-body text-warm-fg/70 leading-relaxed mb-16 max-w-3xl">
        Cada sector tiene sus propias búsquedas y su propia competencia local. Por eso trabajamos de forma específica en cada uno.
      </p>
      <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-20">
        {sectores.map((s) => {
          const SectorIcon = s.icon;
          return (
            <article key={s.to} className="group flex flex-col items-center text-center">
              <SectorIcon className="h-10 w-10 text-warm-fg/65 transition-colors duration-200 group-hover:text-primary" strokeWidth={1.35} aria-hidden />
              <h3 className="mt-6 font-heading text-lg font-semibold text-warm-fg">
                <Link to={s.to} className="transition-colors duration-200 hover:text-primary">
                  {s.label}
                </Link>
              </h3>
              <p className="mt-3 max-w-[34ch] font-body text-[15px] font-light leading-relaxed text-warm-fg/65">
                {s.description}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default SectorsGridSection;