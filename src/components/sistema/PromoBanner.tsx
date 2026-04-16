import { useState, useEffect } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "slocal_promo_banner_dismissed_apr_28";

export default function PromoBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  return (
    <div className="sticky top-0 z-50 bg-primary text-primary-foreground py-2.5 px-4">
      <div className="flex items-center justify-center gap-4 text-sm">
        <span className="text-center">
          ⚡ Setup completo a €297 + IVA — solo hasta el viernes 28 de marzo
        </span>
        <a
          href="https://wa.me/34684780063"
          className="underline font-medium hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          Quiero este precio →
        </a>
        <button
          onClick={dismiss}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
          aria-label="Cerrar"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
