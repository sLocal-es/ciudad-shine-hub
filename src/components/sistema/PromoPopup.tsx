import { useState, useEffect } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "slocal_promo_popup_dismissed_apr_28";

export default function PromoPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const close = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4"
      onClick={close}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-dark-bg border border-dark-fg/10 p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 text-dark-fg/40 hover:text-dark-fg transition-colors"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>

        <div className="text-xs font-medium uppercase tracking-widest text-primary mb-4">
          Oferta hasta el viernes 28 de marzo
        </div>

        <h3 className="font-heading text-2xl md:text-3xl font-bold text-dark-fg mb-3">
          El setup baja esta semana
        </h3>

        <p className="text-dark-fg/50 text-sm leading-relaxed mb-6">
          La configuración inicial — web SEO + ficha de Google desde cero — está a €297 + IVA esta semana. El viernes 28 vuelve a €497.
        </p>

        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-dark-fg/30 text-xl line-through">€497</span>
          <span className="font-heading text-4xl font-bold text-primary">€297 + IVA</span>
        </div>

        <a
          href="https://wa.me/34684780063"
          className="block w-full text-center bg-primary text-primary-foreground font-heading font-medium py-4 rounded-lg hover:bg-primary/90 transition-colors mb-3"
        >
          Quiero aprovechar este precio →
        </a>

        <p className="text-xs text-dark-fg/30 text-center">
          Sin permanencia. Cancelas cuando quieras.
        </p>
      </div>
    </div>
  );
}
