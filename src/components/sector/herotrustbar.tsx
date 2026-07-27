import herotrustBar from "@/assets/imagenes/logos-hero-slocal.webp"

interface HeroTrustBarProps {
  className?: string;
}

export function HeroTrustBar({ className = "" }: HeroTrustBarProps) {
  return (
    <img
      src={herotrustBar}
      alt="Google Business Profile Expert, más llamadas y más clientes desde Google"
      className={`w-full max-w-3xl h-auto select-none ${className}`}
      loading="eager"
      decoding="async"
      draggable={false}
    />
  );
}