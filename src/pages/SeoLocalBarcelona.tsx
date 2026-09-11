import CityMasterTemplate from "@/components/cityseo/CityMasterTemplate";
import ServicesCTABlock from "@/components/sector/ServicesCTABlock";
import { seoLocalCities } from "@/data/seoLocalCities";

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
  />
);

export default SeoLocalBarcelona;
