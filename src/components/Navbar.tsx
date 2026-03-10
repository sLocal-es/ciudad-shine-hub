import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cities } from "@/data/cities";
import { sectors } from "@/data/sectors";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="font-heading text-xl" onClick={() => setMobileOpen(false)}>
          s<span className="text-primary">local</span>.es
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-body">
          <Link to="/como-funciona" className={`hover:text-primary transition-colors ${location.pathname === "/como-funciona" ? "text-primary" : ""}`}>
            Cómo funciona
          </Link>
          <div className="relative" onMouseEnter={() => setCitiesOpen(true)} onMouseLeave={() => setCitiesOpen(false)}>
            <button className="hover:text-primary transition-colors flex items-center gap-1">
              Localidades <span className="text-[10px]">▾</span>
            </button>
            {citiesOpen && (
              <div className="absolute top-full left-0 bg-card border border-border rounded-lg shadow-lg py-2 min-w-[180px]">
                {cities.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/seo-local-${c.slug}`}
                    className="block px-4 py-2 text-sm hover:bg-secondary hover:text-primary transition-colors"
                    onClick={() => setCitiesOpen(false)}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="relative" onMouseEnter={() => setSectorsOpen(true)} onMouseLeave={() => setSectorsOpen(false)}>
            <button className="hover:text-primary transition-colors flex items-center gap-1">
              Sectores <span className="text-[10px]">▾</span>
            </button>
            {sectorsOpen && (
              <div className="absolute top-full left-0 bg-card border border-border rounded-lg shadow-lg py-2 min-w-[220px]">
                {sectors.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className="block px-4 py-2 text-sm hover:bg-secondary hover:text-primary transition-colors"
                    onClick={() => setSectorsOpen(false)}
                  >
                    {s.pillBadge}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/como-ve-google-mi-web" className={`hover:text-primary transition-colors ${location.pathname === "/como-ve-google-mi-web" ? "text-primary" : ""}`}>
            Analiza tu web
          </Link>
          <Link to="/planes" className={`hover:text-primary transition-colors ${location.pathname === "/planes" ? "text-primary" : ""}`}>
            Planes
          </Link>
          <Link to="/contacto" className={`hover:text-primary transition-colors ${location.pathname === "/contacto" ? "text-primary" : ""}`}>
            Contacto
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link to="/contacto" className="hidden md:inline-block bg-primary text-primary-foreground font-heading text-sm rounded-lg px-5 py-2.5 hover:bg-primary/90 transition-colors">
          Hablemos →
        </Link>

        {/* Mobile hamburger */}
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-6 py-4 space-y-3">
          <Link to="/como-funciona" className="block text-sm py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>Cómo funciona</Link>
          <p className="text-xs text-muted-foreground mt-2">Localidades</p>
          {cities.map((c) => (
            <Link key={c.slug} to={`/seo-local-${c.slug}`} className="block text-sm py-1 pl-3 hover:text-primary" onClick={() => setMobileOpen(false)}>
              {c.name}
            </Link>
          ))}
          <p className="text-xs text-muted-foreground mt-2">Sectores</p>
          {sectors.map((s) => (
            <Link key={s.slug} to={`/${s.slug}`} className="block text-sm py-1 pl-3 hover:text-primary" onClick={() => setMobileOpen(false)}>
              {s.pillBadge}
            </Link>
          ))}
          <Link to="/como-ve-google-mi-web" className="block text-sm py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>Analiza tu web</Link>
          <Link to="/planes" className="block text-sm py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>Planes</Link>
          <Link to="/contacto" className="block text-sm py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>Contacto</Link>
          <Link to="/contacto" className="block bg-primary text-primary-foreground font-heading text-sm rounded-lg px-5 py-2.5 text-center mt-3" onClick={() => setMobileOpen(false)}>
            Hablemos →
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
