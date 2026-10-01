import { useEffect, useState } from "react";
import CityMasterTemplate from "@/components/cityseo/CityMasterTemplate";
import { AuditoriaLeadForm } from "@/components/sector/SectorMasterTemplate";
import SectorsGridSection from "@/components/home/SectorsGridSection";
import { seoLocalCities } from "@/data/seoLocalCities";
import { Link } from "@/lib/router-compat";

const city = seoLocalCities.sevilla;
const provinceMunicipalities = [
  "Dos Hermanas",
  "Alcalá de Guadaíra",
  "Utrera",
  "Mairena del Aljarafe",
  "Écija",
  "Los Palacios y Villafranca",
  "La Rinconada",
  "Coria del Río",
  "Camas",
  "Carmona",
];

const compactTimeframe = city.plazo.replace("-", "-");
const proseTimeframe = city.plazo.replace("-", " a ");

const CheckItem = ({ children }: { children: string }) => (
  <li className="flex items-center gap-2">
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span>{children}</span>
  </li>
);

const HeroAuditBand = () => (
  <section id="auditoria-hero" className="scroll-mt-24 bg-white py-12 md:py-20">
    <div className="container">
      <div className="rounded-3xl bg-primary text-primary-foreground px-6 py-10 md:px-14 md:py-14 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="font-heading font-semibold leading-[1.1] text-3xl md:text-4xl text-white max-w-[20ch]">
              Auditoría gratuita de tu ficha y tu web
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base font-body text-white/90">
              <CheckItem>Vídeo personalizado</CheckItem>
              <CheckItem>En menos de 24 horas</CheckItem>
            </ul>
          </div>
          <AuditoriaLeadForm formType="auditoria_sevilla_hero" compact />
        </div>
      </div>
    </div>
  </section>
);

const WhyLocalSeoSection = () => (
  <section className="bg-white py-24 md:py-32 border-t border-warm-fg/10">
    <div className="container">
      <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— Por qué importa</p>
      <h2 className="font-heading font-semibold text-warm-fg leading-[1.05] text-4xl md:text-5xl lg:text-6xl max-w-[22ch]">
        ¿Por qué es importante el SEO local en Sevilla?
      </h2>
      <p className="mt-8 max-w-3xl text-base md:text-lg font-body text-warm-fg leading-relaxed">
        El SEO local decide qué negocios aparecen cuando alguien en Sevilla busca un servicio cerca de él. Esas búsquedas se hacen por servicio y por zona, y aparecer en las primeras posiciones de Google Maps y de los resultados locales pone tu negocio delante de personas que ya quieren contratar.
      </p>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <h3 className="font-heading text-xl text-warm-fg">Datos clave del SEO local en Sevilla</h3>
          <div className="mt-6 border-t border-warm-fg/15 pt-6">
            <p className="font-body text-warm-fg">Plazo orientativo de los primeros resultados: {compactTimeframe}.</p>
            <p className="mt-3 font-body text-sm text-warm-fg/70">El plazo es orientativo y depende del sector, de la competencia y del punto de partida de cada negocio.</p>
          </div>
        </div>
        <div>
          <h3 className="font-heading text-xl text-warm-fg">Tipos de búsquedas que captamos en Sevilla</h3>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {[
              "Servicio + ciudad: «abogado en Sevilla»",
              "Servicio + zona: «fisioterapeuta en Triana», «fontanero en Macarena Sevilla»",
              "Cerca de mí: «clínica dental cerca de mí»",
              "Urgencias y alta intención: «fontanero urgente Sevilla»",
            ].map((item) => (
              <li key={item} className="rounded-full border border-warm-fg/20 px-4 py-2 font-heading text-sm text-warm-fg">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const SevillaCoverageSection = () => (
  <section className="bg-white py-24 md:py-32 border-t border-warm-fg/10">
    <div className="container">
      <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-6">— Cobertura local</p>
      <h2 className="font-heading font-semibold text-warm-fg leading-[1.05] text-4xl md:text-5xl lg:text-6xl max-w-[22ch]">
        Zonas de <span className="text-primary">Sevilla</span> donde trabajamos
      </h2>
      <p className="mt-8 max-w-3xl text-base md:text-lg font-body text-warm-fg leading-relaxed">
        Trabajamos el SEO local de negocios de Sevilla y de su provincia, porque las búsquedas se hacen por barrio o por municipio y cada zona tiene su propia competencia.
      </p>

      <h3 className="mt-14 font-heading text-xl text-warm-fg">Barrios de Sevilla</h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {city.barriosBusquedas.map(({ barrio, busqueda }) => (
          <article key={barrio} className="bg-white rounded-2xl border border-warm-fg/10 p-6 shadow-[0_8px_30px_-15px_rgba(26,26,36,0.08)] transition-all duration-[250ms] hover:-translate-y-1 hover:border-primary/40">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <h3 className="mt-5 font-heading font-semibold text-xl text-warm-fg">{barrio}</h3>
            <p className="mt-5 font-heading text-[10px] tracking-[0.22em] uppercase text-primary">Búsqueda tipo</p>
            <p className="mt-2 font-body font-light text-sm text-warm-fg/70">«{busqueda}»</p>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-3xl bg-[hsl(var(--dark-bg))] text-white p-8 md:p-12 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <p className="font-heading text-[11px] tracking-[0.22em] uppercase text-primary">— Provincia</p>
          <h3 className="mt-5 text-white font-heading text-2xl">Municipios de la provincia de Sevilla</h3>
        </div>
        <div className="md:col-span-8 flex flex-wrap gap-2.5 content-start">
          {provinceMunicipalities.map((municipality) => (
            <span key={municipality} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-heading text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              {municipality}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const GoogleMapsGuideSection = () => (
  <section className="bg-white py-24 md:py-32 border-t border-warm-fg/10">
    <div className="container">
      <h2 className="font-heading font-semibold text-warm-fg leading-[1.05] text-4xl md:text-5xl lg:text-6xl max-w-[22ch]">
        ¿Cómo aparecer en Google Maps en Sevilla?
      </h2>
      <div className="mt-8 max-w-3xl space-y-6 text-base md:text-lg font-body text-warm-fg leading-relaxed">
        <p>Para aparecer en Google Maps en Sevilla, tu negocio necesita una ficha de Google Business Profile verificada y bien configurada, datos coherentes en la web y en los directorios, y reseñas reales de clientes. Google decide qué negocios muestra según tres factores: relevancia, distancia y prominencia.</p>
        <p>Si quieres ver cómo se trabaja paso a paso, consulta nuestra guía para <Link to="/aparecer-en-google-maps" className="text-primary hover:underline">aparecer en Google Maps</Link>.</p>
      </div>
    </div>
  </section>
);

const SevillaServicesCta = () => (
  <>
    <SevillaCoverageSection />
    <GoogleMapsGuideSection />
  </>
);

const SevillaMobileAuditButton = () => {
  const [bandPassed, setBandPassed] = useState(false);
  const [auditReached, setAuditReached] = useState(false);

  useEffect(() => {
    const band = document.getElementById("auditoria-hero");
    const audit = document.getElementById("auditoria");
    if (!band || !audit) return;

    const bandObserver = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      setBandPassed(entry.boundingClientRect.bottom < 0);
    }, { rootMargin: "0px 0px 100% 0px" });
    const auditObserver = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      setAuditReached(entry.isIntersecting || entry.boundingClientRect.top <= 0);
    });

    bandObserver.observe(band);
    auditObserver.observe(audit);
    return () => {
      bandObserver.disconnect();
      auditObserver.disconnect();
    };
  }, []);

  if (!bandPassed || auditReached) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 md:hidden px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] bg-white/95 border-t border-warm-fg/10">
      <a href="#auditoria" className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 font-heading text-sm text-primary-foreground">
        Auditoría gratuita
      </a>
    </div>
  );
};

const SeoLocalSevilla = () => (
  <>
    <CityMasterTemplate
      city={city}
      afterHero={<HeroAuditBand />}
      afterManifesto={<WhyLocalSeoSection />}
      comoPosicionamos={{
        titleSuffix: "con SEO local en Sevilla",
        intro: "En Sevilla, la relevancia por servicio y zona, la coherencia de los datos del negocio y una reputación local sólida determinan qué empresas compiten por las posiciones visibles de Google.",
        texts: [
          "Creamos una arquitectura de páginas que conecta cada servicio con la zona donde existe demanda. Así, búsquedas concretas como «fisioterapeuta en Triana» o «fontanero en Macarena Sevilla» encuentran una página útil que responde a esa necesidad y ayuda a Google a entender dónde y para qué debe mostrar el negocio.",
          `Revisamos que el nombre, la dirección y el teléfono del negocio coincidan en Google Business Profile, la web y los directorios relevantes. En una ciudad de ${city.population} con demanda repartida por barrios, esta consistencia ayuda a diferenciar cada ubicación y evita señales contradictorias entre zonas y áreas de servicio.`,
          `Sevilla tiene una competencia digital ${city.competition.toLowerCase()}. Trabajamos la obtención y respuesta de reseñas reales, su relación con los servicios prestados y la autoridad de la web para reforzar la confianza del usuario y la capacidad del negocio para competir en su zona.`,
        ],
        closing: "La estrategia combina relevancia por zona, datos coherentes y autoridad local para que Google identifique el negocio como una respuesta fiable dentro de Sevilla.",
      }}
      queIncluye={{
        titleSuffix: "en Sevilla",
        texts: [
          "Auditamos la ficha, la web y la visibilidad actual por zonas de Sevilla. El diagnóstico compara categorías, servicios, contenido, reseñas, citaciones y competidores para detectar qué limita la presencia en Google Maps y en los resultados orgánicos.",
          "Analizamos búsquedas con intención de contratación y las agrupamos por servicio y zona. Consultas como «abogado en Nervión» o «reformas en San Pablo» permiten construir una estrategia basada en cómo buscan los usuarios de Sevilla, no en términos genéricos sin contexto local.",
          "Configuramos categorías, servicios, descripción, zonas de cobertura, fotografías y publicaciones de Google Business Profile. La ficha se trabaja para representar correctamente la actividad del negocio y ganar relevancia en las búsquedas próximas a su ubicación real.",
          "Desarrollamos páginas específicas para los servicios y zonas prioritarias de Sevilla, con información útil y diferenciada. La web conecta cada necesidad local con una vía clara de contacto y refuerza la relación entre el negocio, su especialidad y el área donde trabaja.",
          "Corregimos y ampliamos las menciones del negocio en directorios locales y temáticos que aportan contexto. Mantener los mismos datos en estas fuentes refuerza la identidad de la empresa y su vinculación con Sevilla ante los buscadores.",
          `El informe mensual reúne posiciones, llamadas, formularios y evolución de la ficha por las búsquedas trabajadas. En un mercado de competencia ${city.competition.toLowerCase()}, estos datos permiten ajustar zonas, servicios y contenidos durante el plazo orientativo de ${proseTimeframe} para los primeros resultados visibles, sin depender de impresiones generales.`,
        ],
      }}
      servicesCta={<SevillaServicesCta />}
      additionalFaq={{
        index: 2,
        item: {
          q: "¿Funciona el SEO local en Sevilla para mi sector?",
          a: "Sí. El SEO local funciona para negocios que atienden a clientes de una zona concreta de Sevilla, como fontaneros, abogados, dentistas, fisioterapeutas, psicólogos, gimnasios, inmobiliarias o empresas de reformas. Lo que cambia de un sector a otro son las búsquedas, la competencia y el tiempo hasta los primeros resultados, por eso la estrategia se adapta a cada caso.",
        },
      }}
      hideCase
      casesBeforeAudit
      auditoriaSectionId="auditoria"
      auditoriaScrollMargin
      heroPrimaryCtaTo="#auditoria-hero"
      finalCtaTo="#auditoria"
      otherSectorsSection={<SectorsGridSection />}
    />
    <SevillaMobileAuditButton />
  </>
);

export default SeoLocalSevilla;