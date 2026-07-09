const logos = [
  { name: "Google Business Profile", src: "/logos/google-business-profile.svg" },
  { name: "Google Maps", src: "/logos/google-maps.svg" },
  { name: "Google Search Console", src: "/logos/google-search-console.svg" },
  { name: "Google Analytics", src: "/logos/google-analytics.svg" },
  { name: "ChatGPT", src: "/logos/chatgpt.svg" },
  { name: "WordPress", src: "/logos/wordpress.svg" },
  { name: "Semrush", src: "/logos/semrush.svg" },
];

/**
 * Barra infinita de logos con desplazamiento continuo. Duplica la lista para
 * que el keyframe de -50% (definido inline) genere un loop sin costuras.
 */
const LogoMarquee = ({ dark = false }: { dark?: boolean }) => {
  const items = [...logos, ...logos];
  return (
    <div className={`relative overflow-hidden py-8 md:py-10 ${dark ? "bg-dark-bg" : "bg-white"}`}>
      <style>{`@keyframes slocal-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 z-10 ${dark ? "bg-gradient-to-r from-dark-bg to-transparent" : "bg-gradient-to-r from-white to-transparent"}`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 z-10 ${dark ? "bg-gradient-to-l from-dark-bg to-transparent" : "bg-gradient-to-l from-white to-transparent"}`}
      />
      <div
        className="flex gap-14 md:gap-20 w-max"
        style={{ animation: "slocal-marquee 40s linear infinite" }}
      >
        {items.map((l, i) => (
          <img
            key={`${l.name}-${i}`}
            src={l.src}
            alt={l.name}
            loading="lazy"
            className={`h-8 md:h-10 w-auto shrink-0 ${dark ? "opacity-80 brightness-0 invert" : "opacity-70"} hover:opacity-100 transition-opacity`}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
