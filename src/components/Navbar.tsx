import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/seo-para-negocios-locales", label: "Servicios" },
  { to: "/seo-para-fontaneros#caso-real", label: "Casos de éxito" },
  { to: "/blog", label: "Blog" },
  { to: "/contacto", label: "Contacto" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-heading text-xl" onClick={() => setMobileOpen(false)}>
          s<span className="text-primary">local</span>.es
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-body">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-primary transition-colors ${location.pathname === l.to ? "text-primary" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/como-ve-google-mi-web"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading text-sm font-medium rounded-lg px-5 py-2.5 shadow-[0_10px_30px_-14px_hsl(var(--primary))] hover:bg-primary/90 transition-colors"
        >
          Solicitar análisis gratuito
        </Link>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          <span className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-6 py-4 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="block text-sm py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link
            to="/como-ve-google-mi-web"
            className="block bg-primary text-primary-foreground font-heading text-sm rounded-lg px-5 py-2.5 text-center mt-3"
            onClick={() => setMobileOpen(false)}
          >
            Solicitar análisis gratuito
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
