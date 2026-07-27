import heroVisual from "@/assets/fontaneros/hero-seo-para-fontaneros.webp";

const HeroVisual = () => {
  return (
    <img
      src={heroVisual}
      alt="Google Maps mostrando una empresa de fontanería posicionada en los primeros resultados de Google Business Profile"
      className="w-[160%] max-w-none h-auto relative lg:left-16"
      loading="eager"
      decoding="async"
    />
  );
};

export default HeroVisual;