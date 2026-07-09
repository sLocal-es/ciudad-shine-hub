import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navCities = [
  { slug: "madrid", name: "SEO local en Madrid" },
  { slug: "barcelona", name: "SEO local en Barcelona" },
  { slug: "valencia", name: "SEO local en Valencia" },
  { slug: "sevilla", name: "SEO local en Sevilla" },
  { slug: "malaga", name: "SEO local en Málaga" },
  { slug: "zaragoza", name: "SEO local en Zaragoza" },
  { slug: "bilbao", name: "SEO local en Bilbao" },
  { slug: "murcia", name: "SEO local en Murcia" },
  { slug: "cordoba", name: "SEO local en Córdoba" },
];

const navSectors = [
  { path: "/seo-para-fontaneros", label: "SEO para fontaneros" },
  { path: "/seo-para-fisioterapeutas", label: "SEO para fisioterapeutas" },
  { path: "/seo-para-reformas", label: "SEO para empresas de reformas" },
  { path: "/seo-para-abogados", label: "SEO para abogados" },
  { path: "/seo-para-inmobiliarias", label: "SEO para inmobiliarias" },
  { path: "/seo-para-dentistas", label: "SEO para dentistas" },
  { path: "/seo-para-psicologos", label: "SEO para psicólogos" },
  { path: "/seo-para-gimnasios", label: "SEO para gimnasios" },
  { path: "/seo-para-autonomos", label: "SEO para autónomos" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const location = useLocation();

  const citiesRef = useRef<HTMLDivElement>(null);
  const sectorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (citiesRef.current && !citiesRef.current.contains(e.target as Node)) setCitiesOpen(false);
      if (sectorsRef.current && !sectorsRef.current.contains(e.target as Node)) setSectorsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const cityHref = (slug: string) => `/seo-local-${slug}`;

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-heading text-xl" onClick={() => setMobileOpen(false)}>
          s<span className="text-primary">local</span>.es
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-body">
          <Link to="/como-funciona" className={`hover:text-primary transition-colors ${location.pathname === "/como-funciona" ? "text-primary" : ""}`}>
            Cómo funciona
          </Link>
          <Link to="/seo-para-negocios-locales" className={`hover:text-primary transition-colors ${location.pathname === "/seo-para-negocios-locales" ? "text-primary" : ""}`}>
            SEO Local
          </Link>
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

        <Link to="/contacto" className="hidden md:inline-block bg-primary text-primary-foreground font-heading text-sm rounded-lg px-5 py-2.5 hover:bg-primary/90 transition-colors">
          Hablemos →
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
          <Link to="/como-funciona" className="block text-sm py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>Cómo funciona</Link>
          <Link to="/seo-para-negocios-locales" className="block text-sm py-2 hover:text-primary" onClick={() => setMobileOpen(false)}>SEO Local</Link>
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
