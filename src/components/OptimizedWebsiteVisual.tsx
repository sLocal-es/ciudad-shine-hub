import optimizedWebsiteAsset from "@/assets/web-optimizada-slocal.png.asset.json";

type OptimizedWebsiteVisualProps = {
  className?: string;
  alt?: string;
  eager?: boolean;
};

const OptimizedWebsiteVisual = ({
  className = "",
  alt = "Ilustración de una página web optimizada para captar clientes locales",
  eager = false,
}: OptimizedWebsiteVisualProps) => (
  <div
    className={`w-full overflow-hidden rounded-3xl border border-warm-fg/10 bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)] ${className}`}
  >
    <img
      src={optimizedWebsiteAsset.url}
      alt={alt}
      className="block h-auto w-full object-contain"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  </div>
);

export default OptimizedWebsiteVisual;