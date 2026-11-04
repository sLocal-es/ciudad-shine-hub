import CityPageV2 from "@/components/cityseo/CityPageV2";
import { seoLocalCities } from "@/data/seoLocalCities";

const SeoLocalValencia = () => (
  <CityPageV2
    city={seoLocalCities.valencia}
    seoTitleOverride="Agencia SEO Local en Valencia | Posicionamiento Local Valencia"
  />
);
export default SeoLocalValencia;
