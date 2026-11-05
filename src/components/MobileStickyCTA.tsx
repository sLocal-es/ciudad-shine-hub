import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

/** Barra CTA fija solo en móvil; aparece tras 600px de scroll. Oculta en /contacto. */
const MobileStickyCTA = () => {
  const [visible, setVisible] = useState(false);
  const pathname = useLocation({ select: (l) => l.pathname });
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (pathname.startsWith("/contacto")) return null;
  return (
    <>
      <div className="h-[72px] md:hidden" aria-hidden />
      <div
        className={`md:hidden fixed inset-x-0 bottom-0 z-40 bg-primary px-4 py-3 flex items-center gap-3 transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}
        aria-hidden={!visible}
      >
        <Link
          to="/contacto"
          tabIndex={visible ? 0 : -1}
          className="flex-1 inline-flex items-center justify-center rounded-full bg-white text-primary px-5 py-3 text-sm font-heading font-semibold"
        >
          Solicitar auditoría gratuita
        </Link>
        <a
          href="https://wa.me/34644147310"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          aria-label="Escribir por WhatsApp"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-primary"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
        </a>
      </div>
    </>
  );
};

export default MobileStickyCTA;
