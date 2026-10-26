import CityPageV2, { SevillaPosicionamientoSection } from "@/components/cityseo/CityPageV2";
import { seoLocalCities } from "@/data/seoLocalCities";

const SeoLocalSevilla = () => (
  <CityPageV2
    city={seoLocalCities.sevilla}
    seoTitleOverride="SEO Local en Sevilla | Agencia SEO Sevilla | slocal.es"
    heroSubtitleOverride="Agencia SEO en Sevilla especializada en SEO local. Optimizamos tu ficha de Google Business Profile y tu web para que aparezcas primero cuando alguien busca tu servicio en Sevilla."
    afterManifestoBefore={<SevillaPosicionamientoSection />}
  />
);

export default SeoLocalSevilla;
