import CityMasterTemplate from "@/components/cityseo/CityMasterTemplate";
import ServicesCTABlock from "@/components/sector/ServicesCTABlock";
import { seoLocalCities } from "@/data/seoLocalCities";

const WhyUsBarcelona = () => (
  <section className="bg-white py-24 md:py-32 border-t border-warm-fg/10">
    <div className="container">
      <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">
        — Por qué Slocal
      </p>
      <h2 className="font-heading font-semibold text-warm-fg leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl max-w-[22ch] mb-10">
        ¿Por qué somos la mejor agencia de SEO local en{" "}
        <span className="text-primary">Barcelona</span>?
      </h2>
      <div className="max-w-3xl space-y-6 text-base md:text-lg font-body text-warm-fg/80 leading-relaxed">
        <p>
          En Slocal posicionamos negocios de Barcelona para las búsquedas locales que de verdad generan clientes, no solo tráfico. Cubrimos tanto las búsquedas de intención inmediata — como{" "}
          <em>fontanero urgente Barcelona</em> o{" "}
          <em>abogado extranjería cerca de mí</em> — como las búsquedas de marca y ficha, cuando alguien busca tu negocio + Barcelona en Google Maps. El objetivo es que, en cualquiera de esos momentos, seas tú el que reciba la llamada.
        </p>
        <p>
          El tejido comercial de Barcelona cambia de una zona a otra, y trabajamos entendiendo esas diferencias. En Eixample y Sarrià-Sant Gervasi predominan clínicas y despachos profesionales que compiten por reputación y especialización. En Gràcia y Poblenou encontramos comercio de proximidad, hostelería y negocios con mucha vida de barrio. En Sants y Les Corts los servicios técnicos, reformas y mantenimiento son especialmente demandados. Por eso no aplicamos la misma receta a todos: adaptamos la estrategia a la zona, al tipo de cliente y a la competencia real que hay en cada barrio.
        </p>
        <p>
          También cubrimos el área metropolitana de Barcelona — Baix Llobregat, Barcelonès y Maresme — para negocios cuya zona de servicio se extiende más allá de la ciudad. Si tu cliente potencial busca en Hospitalet, Badalona, Cornellà o cualquier punto de la corona metropolitana, la estrategia SEO local se ajusta para que aparezcas donde realmente puedes atender.
        </p>
      </div>
    </div>
  </section>
);

const SeoLocalBarcelona = () => (
  <CityMasterTemplate
    city={seoLocalCities.barcelona}
    servicesCta={
      <ServicesCTABlock
        headline="En menos de 60 días puedes empezar a recibir más llamadas, más visitas y más clientes. El momento de ocupar tu lugar en Google es ahora."
        ctaText="Solicita tu consulta y te diremos exactamente qué pasos seguir para ser el primero en tu zona."
        buttonText="Solicitar consulta"
        buttonTo="/contacto"
      />
    }
    whyUsSection={<WhyUsBarcelona />}
  />
);

export default SeoLocalBarcelona;
