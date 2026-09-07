import googleBusinessProfileAsset from "@/assets/google-business-profile.webp.asset.json";

type GoogleBusinessProfileVisualProps = {
  className?: string;
  alt?: string;
  eager?: boolean;
};

const GoogleBusinessProfileVisual = ({
  className = "",
  alt = "Ilustración de una ficha de Google Business Profile con ubicación, reseñas y versión móvil",
  eager = false,
}: GoogleBusinessProfileVisualProps) => (
  <div
    className={`w-full overflow-hidden rounded-3xl border border-warm-fg/10 bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)] ${className}`}
  >
    <img
      src={googleBusinessProfileAsset.url}
      alt={alt}
      className="block h-auto w-full object-contain"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  </div>
);

export default GoogleBusinessProfileVisual;