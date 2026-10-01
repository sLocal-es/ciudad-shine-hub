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

const compactTimeframe = city.plazo.replace(/\s*meses?$/i, "");
const proseTimeframe = city.plazo.replace("-", " a ");

const CheckItem = ({ children }: { children: string }) => (
  <li className="flex items-center gap-2">
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span>{children}</span>
  </li>
);

const SearchBar = ({ children }: { children: string }) => (
  <div className="flex min-w-0 items-center gap-2 rounded-full border border-warm-fg/20 bg-white px-4 py-2.5">
    <svg className="h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
    <span className="min-w-0 font-body text-[15px] text-warm-fg">{children}</span>
  </div>
);

const SearchTypeIcon = ({ type }: { type: "city" | "zone" | "nearby" | "urgent" }) => {
  const paths = {
    city: <><path d="M4 21V7l8-4 8 4v14" /><path d="M9 21v-5h6v5M8 9h.01M12 9h.01M16 9h.01M8 12h.01M12 12h.01M16 12h.01" /></>,
    zone: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    nearby: <><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="2" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></>,
    urgent: <><path d="M13 2 4.5 13H11l-1 9 8.5-11H12l1-9Z" /></>,
  };

  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden>
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {paths[type]}
      </svg>
    </span>
  );
};

const HeroAuditBand = () => (
  <section id="auditoria-hero" className="scroll-mt-24 bg-white py-6 md:py-8">
    <div className="container">
      <div className="rounded-2xl bg-primary px-5 py-5 text-primary-foreground md:px-8 md:py-6">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="lg:w-[17rem] lg:shrink-0">
            <p className="font-heading text-xl font-semibold leading-tight text-white md:text-2xl">
              Auditoría gratuita de tu ficha y tu web
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm font-body text-white md:text-[15px]">
              <CheckItem>Vídeo personalizado</CheckItem>
              <CheckItem>En menos de 24 horas</CheckItem>
            </ul>
          </div>
          <div className="mt-5 min-w-0 flex-1 lg:mt-0">
            <AuditoriaLeadForm formType="auditoria_sevilla_hero" compact inline />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ManifestoCardIcon = ({ type }: { type: "pin" | "browser" }) => (
  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden>
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {type === "pin" ? (
        <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>
      ) : (
        <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 14h8M8 17h5" /></>
      )}
    </svg>
  </span>
);

const SevillaManifestoSection = () => (
  <section className="bg-white py-24 md:py-32 border-t border-warm-fg/10">
    <div className="container">
      <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— El punto de partida</p>
      <h2 className="font-heading font-semibold text-warm-fg leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl max-w-[22ch]">
        ¿Cómo conseguir <span className="text-primary">más clientes</span> desde Google en Sevilla?
      </h2>

      <div className="mt-10 max-w-4xl">
        <p className="font-heading font-semibold text-xl md:text-2xl text-warm-fg leading-snug">
          En Slocal conseguimos que más clientes contacten con tu negocio en Sevilla optimizando tu ficha de Google Business Profile y posicionando tu web para búsquedas locales de alta intención.
        </p>
        <p className="mt-7 border-l-4 border-primary pl-5 text-base leading-relaxed text-warm-fg md:pl-6 md:text-lg">
          Sevilla tiene {city.population} y una competencia digital {city.competition.toLowerCase()}: aparecer en el <span className="text-primary font-semibold">top 3 de Google Maps</span> multiplica los contactos porque esos tres negocios se llevan la mayoría de las llamadas.
        </p>
        <div className="mt-7 flex items-start gap-3 rounded-xl bg-primary/10 px-4 py-3 text-[15px] leading-relaxed text-warm-fg">
          <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="m12 3 1.3 4.2L17.5 8.5l-4.2 1.3L12 14l-1.3-4.2-4.2-1.3 4.2-1.3L12 3Z" /><path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14ZM5 14l.7 1.8 1.8.7-1.8.7L5 19l-.7-1.8-1.8-.7 1.8-.7L5 14Z" />
          </svg>
          <p>La optimización también contempla cómo aparece y se entiende tu negocio en respuestas de ChatGPT, Gemini y AI Overviews, una línea de posicionamiento GEO que Slocal ya integra en su trabajo en Sevilla.</p>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-warm-fg/10 bg-white p-6 shadow-[0_8px_30px_-15px_rgba(26,26,36,0.08)]">
          <ManifestoCardIcon type="pin" />
          <h3 className="mt-5 font-heading font-semibold text-xl text-warm-fg">Tu ficha de <span className="text-primary">Google Business Profile</span> genera llamadas en Sevilla</h3>
          <p className="mt-4 text-[15px] leading-relaxed text-warm-fg/85 md:text-base">Google Business Profile es donde el cliente de Sevilla decide llamarte. Optimizamos tu ficha para aparecer antes que otros negocios de tu zona y convertir búsquedas en contactos reales.</p>
        </article>
        <article className="rounded-2xl border border-warm-fg/10 bg-white p-6 shadow-[0_8px_30px_-15px_rgba(26,26,36,0.08)]">
          <ManifestoCardIcon type="browser" />
          <h3 className="mt-5 font-heading font-semibold text-xl text-warm-fg">Una web que <span className="text-primary">convierte</span> visitas en clientes</h3>
          <p className="mt-4 text-[15px] leading-relaxed text-warm-fg/85 md:text-base">Mientras Google Business Profile genera la llamada, tu web convierte las visitas en contactos cualificados. Trabajamos páginas específicas por servicio y por barrio de Sevilla.</p>
        </article>
      </div>
    </div>
  </section>
);

const WhyLocalSeoSection = () => (
  <section className="bg-white py-24 md:py-32 border-t border-warm-fg/10">
    <div className="container">
      <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— Por qué importa</p>
      <h2 className="font-heading font-semibold text-warm-fg leading-[1.05] text-4xl md:text-5xl lg:text-6xl max-w-[22ch]">
        ¿Por qué es <span className="text-primary">importante</span> el SEO local en Sevilla?
      </h2>

      <div className="mt-12 grid lg:grid-cols-12 gap-10 items-stretch">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="font-heading font-semibold text-2xl md:text-3xl leading-snug text-warm-fg">
            El SEO local decide qué negocios aparecen cuando alguien en Sevilla busca un servicio cerca de él.
          </p>
          <p className="mt-6 text-base md:text-lg font-body text-warm-fg leading-relaxed">
            Esas búsquedas se hacen por servicio y por zona, y aparecer en las primeras posiciones de Google Maps y de los resultados locales pone tu negocio delante de personas que ya quieren contratar.
          </p>
        </div>
        <div className="lg:col-span-5 rounded-3xl bg-[hsl(var(--dark-bg))] text-white p-8 md:p-10">
          <h3 className="text-white font-heading text-lg">Datos clave del SEO local en Sevilla</h3>
          <div className="mt-8 flex items-end gap-3">
            <span className="font-heading font-semibold text-6xl md:text-7xl text-primary leading-none">{compactTimeframe}</span>
            <span className="pb-1 font-heading text-2xl text-white">meses</span>
          </div>
          <p className="mt-5 text-base text-white">Plazo orientativo de los primeros resultados</p>
          <p className="mt-4 text-[15px] leading-relaxed text-white/80">El plazo es orientativo y depende del sector, de la competencia y del punto de partida de cada negocio.</p>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="font-heading text-2xl text-warm-fg">Tipos de búsquedas que captamos en Sevilla</h3>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <article className="bg-white rounded-2xl border border-warm-fg/10 p-6 shadow-[0_8px_30px_-15px_rgba(26,26,36,0.08)]">
            <SearchTypeIcon type="city" />
            <h3 className="mt-5 font-heading font-semibold text-lg text-warm-fg">Servicio + ciudad</h3>
            <div className="mt-4"><SearchBar>«abogado en Sevilla»</SearchBar></div>
          </article>
          <article className="bg-white rounded-2xl border border-warm-fg/10 p-6 shadow-[0_8px_30px_-15px_rgba(26,26,36,0.08)]">
            <SearchTypeIcon type="zone" />
            <h3 className="mt-5 font-heading font-semibold text-lg text-warm-fg">Servicio + zona</h3>
            <div className="mt-4 space-y-3">
              <SearchBar>«fisioterapeuta en Triana»</SearchBar>
              <SearchBar>«fontanero en Macarena Sevilla»</SearchBar>
            </div>
          </article>
          <article className="bg-white rounded-2xl border border-warm-fg/10 p-6 shadow-[0_8px_30px_-15px_rgba(26,26,36,0.08)]">
            <SearchTypeIcon type="nearby" />
            <h3 className="mt-5 font-heading font-semibold text-lg text-warm-fg">Cerca de mí</h3>
            <div className="mt-4"><SearchBar>«clínica dental cerca de mí»</SearchBar></div>
          </article>
          <article className="bg-white rounded-2xl border border-warm-fg/10 p-6 shadow-[0_8px_30px_-15px_rgba(26,26,36,0.08)]">
            <SearchTypeIcon type="urgent" />
            <h3 className="mt-5 font-heading font-semibold text-lg text-warm-fg">Urgencias y alta intención</h3>
            <div className="mt-4"><SearchBar>«fontanero urgente Sevilla»</SearchBar></div>
          </article>
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
            <p className="mt-5 font-heading text-[11px] tracking-[0.22em] uppercase text-primary">Búsqueda tipo</p>
            <p className="mt-2 font-body font-light text-[15px] text-warm-fg/80">«{busqueda}»</p>
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
            <span key={municipality} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[15px] font-heading text-white">
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
      <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">— Google Maps</p>
      <h2 className="font-heading font-semibold text-warm-fg leading-[1.05] text-4xl md:text-5xl lg:text-6xl max-w-[22ch]">
        ¿Cómo aparecer en <span className="text-primary">Google Maps</span> en Sevilla?
      </h2>

      <div className="mt-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="font-heading font-semibold text-xl md:text-2xl text-warm-fg">Para aparecer en Google Maps en Sevilla, tu negocio necesita:</p>
          <ul className="mt-7 space-y-5">
            {["una ficha de Google Business Profile verificada y bien configurada", "datos coherentes en la web y en los directorios", "reseñas reales de clientes"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base md:text-lg text-warm-fg">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden>
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <p className="text-base md:text-lg text-warm-fg">Google decide qué negocios muestra según tres factores:</p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Relevancia", icon: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="m15 9 5-5M16 4h4v4" /></> },
              { label: "Distancia", icon: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></> },
              { label: "Prominencia", icon: <path d="m12 2 3 6.1 6.7 1-4.9 4.7 1.2 6.7-6-3.2-6 3.2 1.2-6.7-4.9-4.7 6.7-1L12 2Z" /> },
            ].map(({ label, icon }) => (
              <div key={label} className="rounded-2xl bg-primary/10 p-5 text-center">
                <svg className="mx-auto h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{icon}</svg>
                <p className="mt-4 font-heading font-semibold text-lg text-warm-fg">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-warm-fg/10 bg-white p-6 text-base md:text-lg text-warm-fg">
        Si quieres ver cómo se trabaja paso a paso, consulta nuestra guía para{" "}
        <Link to="/ficha-google-mi-negocio" className="font-semibold text-primary hover:underline">aparecer en Google Maps →</Link>.
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
      manifestoSection={<SevillaManifestoSection />}
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
      otherSectorsAfterAudit
    />
    <SevillaMobileAuditButton />
  </>
);

export default SeoLocalSevilla;