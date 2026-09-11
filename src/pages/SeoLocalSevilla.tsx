import CityMasterTemplate from "@/components/cityseo/CityMasterTemplate";
import { seoLocalCities } from "@/data/seoLocalCities";

const WhyUsSevilla = () => (
  <section className="bg-white py-24 md:py-32 border-t border-warm-fg/10">
    <div className="container">
      <p className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-8">
        — Por qué Slocal
      </p>
      <h2 className="font-heading font-semibold text-warm-fg leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl max-w-[22ch] mb-10">
        Por qué somos la mejor agencia de SEO local en{" "}
        <span className="text-primary">Sevilla</span>
      </h2>
      <div className="max-w-3xl space-y-6 text-base md:text-lg font-body text-warm-fg/80 leading-relaxed">
        <p>
          En Slocal posicionamos negocios de Sevilla para las búsquedas locales que de verdad generan clientes, no solo tráfico. Cubrimos tanto las búsquedas de intención inmediata — como{" "}
          <em>fontanero urgente Sevilla</em> o{" "}
          <em>gestoría cerca de mí</em> — como las búsquedas de ficha y marca, cuando alguien busca tu negocio + Sevilla en Google Maps. El objetivo es que, en cualquiera de esos momentos, seas tú el que reciba la llamada.
        </p>
        <p>
          El tejido comercial de Sevilla cambia de una zona a otra, y trabajamos entendiendo esas diferencias. En Triana y Los Remedios predominan el comercio de proximidad y la hostelería, negocios que viven del cliente de barrio y del turismo. En Nervión y Sevilla Este encontramos clínicas, despachos profesionales y servicios que compiten por reputación y especialización. En Macarena, San Bernardo y Bellavista los servicios técnicos, reformas y mantenimiento son especialmente demandados. Por eso no aplicamos la misma receta a todos: adaptamos la estrategia a la zona, al tipo de cliente y a la competencia real que hay en cada barrio.
        </p>
        <p>
          También trabajamos con negocios de la provincia de Sevilla — Dos Hermanas, Alcalá de Guadaíra, Mairena del Aljarafe — cuando su zona de servicio se extiende más allá de la capital. Si tu cliente potencial busca en cualquiera de esos municipios, la estrategia SEO local se ajusta para que aparezcas donde realmente puedes atender.
        </p>
        <p>
          Cada cliente lo gestionamos de forma directa, sin traspasos a junior ni equipos externos que desconozcan el negocio. Quien diseña la estrategia es la misma persona que la ejecuta y la revisa mes a mes.
        </p>
      </div>
    </div>
  </section>
);

const SeoLocalSevilla = () => (
  <CityMasterTemplate city={seoLocalCities.sevilla} whyUsSection={<WhyUsSevilla />} />
);

export default SeoLocalSevilla;
