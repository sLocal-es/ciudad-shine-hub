import { useState, useCallback } from "react";
import { X, Quote, ArrowRight, CheckCircle2, Wrench, Hammer, Scale, HeartPulse, Brain, type LucideIcon } from "lucide-react";

const WA_URL =
  "https://wa.me/34644147310?text=Hola%2C%20quiero%20que%20Google%20me%20mande%20clientes";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface CaseStudy {
  id: string;
  logo: string;
  name: string;
  category: string;
  city: string;
  before: string;
  actions: string[];
  after: string;
  testimonial: string;
}

/* ------------------------------------------------------------------ */
/*  Data — historias reales en lenguaje humano                         */
/* ------------------------------------------------------------------ */

const cases: CaseStudy[] = [
  {
    id: "viviane",
    logo: logoViviane,
    name: "Viviane Custodio",
    category: "Psicóloga",
    city: "Valencia",
    before:
      "No tenía presencia en Google. Solo aparecía en directorios y dependía del boca a boca. Si alguien la buscaba directamente, casi no la encontraba.",
    actions: [
      "Reactivamos su ficha de Google desde cero",
      "Configuramos sus servicios y horarios",
      "Subimos fotos profesionales y empezamos a publicar",
    ],
    after:
      "En el segundo mes ya empezó a recibir llamadas directas desde Google sin pagar publicidad. Pacientes nuevos que la encontraron buscando psicóloga en su zona.",
    testimonial:
      "La ficha estaba completamente parada y ahora vuelve a generar contactos.",
  },
  {
    id: "tei",
    logo: logoTei,
    name: "Grupo TEI",
    category: "Reformas",
    city: "Madrid",
    before:
      "Tenían una web antigua que apenas posicionaba y no tenían ficha de Google. Dependían de captar clientes solo por la web vieja.",
    actions: [
      "Creamos y verificamos su ficha de Google",
      "La configuramos para que apareciese en búsquedas de reformas en Madrid",
      "Activamos llamadas directas desde el perfil",
    ],
    after:
      "En 3 meses empezaron a recibir llamadas directas desde Google sin tocar la web vieja. Clientes nuevos que llegan diciendo 'os he visto en Google'.",
    testimonial:
      "En pocos meses empezamos a recibir llamadas sin depender de la web.",
  },
  {
    id: "fontaneros",
    logo: logoFontaneros,
    name: "Fontaneros Económicos",
    category: "Fontanería",
    city: "Madrid",
    before:
      "Su ficha de Google estaba suspendida desde hacía meses. No aparecían en ningún sitio. Todo el negocio dependía de recomendaciones.",
    actions: [
      "Recuperamos la ficha suspendida y la verificamos otra vez",
      "Corregimos toda la información para cumplir las normas de Google",
      "Montamos web optimizada y empezamos a publicar contenido",
    ],
    after:
      "En mes y medio empezaron a recibir llamadas otra vez y mensajes por WhatsApp de clientes nuevos que les encontraron en Google.",
    testimonial:
      "Después de meses bloqueados, por fin volvemos a estar visibles y recibiendo llamadas.",
  },
  {
    id: "mva",
    logo: logoMva,
    name: "MVA Fontanería",
    category: "Fontanería",
    city: "Madrid",
    before:
      "No tenían absolutamente nada en Google. Ni ficha, ni web. Solo boca a boca y eso limitaba muchísimo el crecimiento del negocio.",
    actions: [
      "Creamos la ficha de Google desde cero",
      "Configuramos servicios, zonas y categorías",
      "Activamos chat y llamadas directas",
    ],
    after:
      "En 2 meses empezaron a recibir contactos nuevos solo desde la ficha de Google, sin tener todavía página web. Clientes que antes no sabían que existían.",
    testimonial:
      "No esperábamos movimiento sin tener ni web.",
  },
  {
    id: "despacho-extranjeria-valencia",
    logo: "/placeholder.svg",
    name: "Despacho de Extranjería en Valencia",
    category: "Abogados",
    city: "Valencia",
    before:
      "La ficha de Google tenía una categoría genérica ('Abogados') en vez de especializarse en extranjería, sin servicios definidos ni categorías secundarias, y con los datos de contacto sin coincidir con la web. Para 'abogado extranjería Valencia' estaban fuera del top 10 de Google.",
    actions: [
      "Definimos la categoría principal como especialista en extranjería y añadimos categorías secundarias",
      "Hicimos un estudio de palabras clave para detectar qué servicios buscaba realmente la gente",
      "Corregimos los datos de contacto para que coincidieran ficha y web",
      "Optimizamos la ficha al completo: descripción, servicios y fotos",
    ],
    after:
      "En 3 meses pasaron de estar fuera del top 10 a estar entre los 3 primeros resultados en el centro de Valencia. Las llamadas subieron cada mes y las visitas a la ficha crecieron un 42% de media frente al año anterior.",
    testimonial:
      "Notamos un incremento notable en la demanda de servicios de extranjería.",
  },
];

/* ------------------------------------------------------------------ */
/*  Icono por sector — mismo patrón que la sección de sectores de Home */
/* ------------------------------------------------------------------ */

const sectorIcon: Record<string, LucideIcon> = {
  "Psicóloga": Brain,
  "Reformas": Hammer,
  "Fontanería": Wrench,
  "Abogados": Scale,
};

function SectorIcon({ category }: { category: string }) {
  const Icon = sectorIcon[category] ?? HeartPulse;
  return (
    <Icon
      className="w-16 h-16 md:w-20 md:h-20 text-primary"
      strokeWidth={1.25}
      aria-hidden
    />
  );
}

/* ------------------------------------------------------------------ */
/*  CaseStudyModal — Antes → Qué hicimos → Después                     */
/* ------------------------------------------------------------------ */

function CaseStudyModal({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-xs" />

      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-foreground/10 shadow-xl animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full p-2 text-foreground/50 hover:text-foreground hover:bg-foreground/5 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="p-8 pb-6">
          <div className="flex items-center gap-5 mb-5">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary/10">
              <SectorIcon category={study.category} />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                {study.name}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="inline-block text-[10px] font-medium uppercase tracking-widest rounded-full px-3 py-1 bg-primary/10 text-primary">
                  {study.category}
                </span>
                <span className="inline-block text-[10px] font-medium uppercase tracking-widest rounded-full px-3 py-1 bg-primary/10 text-primary">
                  {study.city}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-8 h-px bg-foreground/10" />

        {/* Antes */}
        <div className="p-8 pb-5">
          <span className="block font-heading text-[11px] font-semibold uppercase tracking-widest text-foreground/60 mb-3">
            Antes
          </span>
          <p className="text-sm leading-relaxed text-foreground/70">
            {study.before}
          </p>
        </div>

        {/* Qué se hizo */}
        <div className="px-8 pb-5">
          <span className="block font-heading text-[11px] font-semibold uppercase tracking-widest text-primary mb-3">
            Qué hicimos
          </span>
          <ul className="space-y-2.5">
            {study.actions.map((action, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-sm text-foreground/70">{action}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Después */}
        <div className="px-8 pb-6">
          <span className="block font-heading text-[11px] font-semibold uppercase tracking-widest text-foreground/60 mb-3">
            Después
          </span>
          <p className="text-sm leading-relaxed text-foreground font-medium">
            {study.after}
          </p>
        </div>

        {/* Testimonio */}
        <div className="px-8 pb-6">
          <blockquote className="rounded-xl p-5 bg-primary/5 border-l-[3px] border-primary">
            <Quote className="w-4 h-4 mb-2 text-primary/60" />
            <p className="text-sm leading-relaxed italic text-foreground/80">
              "{study.testimonial}"
            </p>
            <footer className="block mt-2 text-[11px] font-medium text-foreground/50">
              — {study.name}
            </footer>
          </blockquote>
        </div>

        {/* CTA WhatsApp */}
        <div className="px-8 pb-8">
          <a
            href={WA_URL}
            className="block w-full text-center rounded-lg py-3.5 text-sm font-semibold bg-primary text-primary-foreground transition-opacity hover:opacity-90"
          >
            Quiero algo así para mi negocio
          </a>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CaseCard — visual grande arriba, pills de sector y ciudad, nombre  */
/* ------------------------------------------------------------------ */

function CaseCard({ study, onClick }: { study: CaseStudy; onClick: () => void }) {
  return (
    <article
      className="group cursor-pointer transition-transform duration-300 hover:-translate-y-1 flex flex-col"
      onClick={onClick}
    >
      {/* Visual: panel tint naranja con icono del sector */}
      <div
        className="relative flex items-center justify-center rounded-2xl overflow-hidden bg-primary/10 aspect-[4/3] transition-colors duration-300 group-hover:bg-primary/15"
        aria-hidden
      >
        <SectorIcon category={study.category} />
      </div>

      <div className="pt-5 px-1 pb-2 flex flex-col flex-1">
        {/* Pills: sector + ciudad */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-flex items-center text-xs font-medium rounded-full px-3 py-1 bg-primary/10 text-primary">
            {study.category}
          </span>
          <span className="inline-flex items-center text-xs font-medium rounded-full px-3 py-1 bg-primary/10 text-primary">
            {study.city}
          </span>
        </div>

        <h3 className="font-heading text-lg font-bold text-foreground leading-snug mb-3">
          {study.name}
        </h3>

        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5 mt-auto">
          Ver caso <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Section                                                       */
/* ------------------------------------------------------------------ */

export default function ResultadosSection() {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  const handleOpen = useCallback((study: CaseStudy) => setActiveStudy(study), []);
  const handleClose = useCallback(() => setActiveStudy(null), []);

  return (
    <>
      {activeStudy && <CaseStudyModal study={activeStudy} onClose={handleClose} />}

      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest bg-primary/10 text-primary mb-7">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
            Casos reales
          </div>

          <h2 className="font-heading text-2xl md:text-4xl font-extrabold leading-tight text-foreground mb-3 max-w-xl">
            Negocios reales,{" "}
            <span className="text-primary">resultados reales.</span>
          </h2>
          <p className="text-sm md:text-base max-w-lg leading-relaxed text-foreground/60 mb-14">
            Haz clic en cada caso para ver cómo pasaron de no aparecer en Google a recibir llamadas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {cases.map((c) => (
              <CaseCard key={c.id} study={c} onClick={() => handleOpen(c)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
