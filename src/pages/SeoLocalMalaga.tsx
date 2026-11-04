import CityPageV2 from "@/components/cityseo/CityPageV2";
import { seoLocalCities } from "@/data/seoLocalCities";

const SeoLocalMalaga = () => (
  <CityPageV2
    city={seoLocalCities.malaga}
    seoTitleOverride="Agencia SEO Local en Málaga | Posicionamiento Local Málaga"
  />
);
export default SeoLocalMalaga;
