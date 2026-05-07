const partners = [
  { src: "/logos/google-business-profile.svg", alt: "Google Business Profile" },
  { src: "/logos/google-search-console.svg", alt: "Google Search Console" },
  { src: "/logos/google-analytics.svg", alt: "Google Analytics" },
  { src: "/logos/google-maps.svg", alt: "Google Maps" },
];

const TechPartnersSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
            Tecnologías que usamos
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Trabajamos directamente con las herramientas oficiales de Google para posicionar tu negocio en búsquedas locales y Google Maps.
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-16">
          {partners.map((p) => (
            <li key={p.alt} className="animate-fade-in">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-7 md:h-8 w-auto grayscale opacity-60 transition-all duration-300 ease-out hover:grayscale-0 hover:opacity-100 hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechPartnersSection;
