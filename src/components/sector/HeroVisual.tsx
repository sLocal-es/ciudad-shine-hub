import heroVisual from "@/assets/fontaneros/hero-seo-para-fontaneros.webp";

const DEFAULT_ALT = "Google Maps mostrando una empresa de fontanería posicionada en los primeros resultados de Google Business Profile";

const HeroVisual = ({ alt = DEFAULT_ALT }: { alt?: string }) => {
  return (
    <img
      src={heroVisual}
      alt={alt}
      className="w-full max-w-[34rem] md:w-[140%] md:max-w-none h-auto mx-auto relative lg:left-16"
      loading="eager"
      decoding="async"
    />
  );
};

export default HeroVisual;