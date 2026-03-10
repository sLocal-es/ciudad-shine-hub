import { Link } from "react-router-dom";
import { sectors } from "@/data/sectors";

const Footer = () => (
  <footer className="bg-dark-bg text-dark-fg pt-16 pb-8">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
        {/* Brand */}
        <div>
          <Link to="/" className="font-heading text-xl">
            s<span className="text-primary">local</span>.es
          </Link>
          <p className="text-sm text-dark-fg/60 mt-3 leading-relaxed">
            El sistema de visibilidad local para negocios españoles.
          </p>
        </div>

        {/* Servicio */}
        <div>
          <h4 className="font-heading text-sm mb-4">Servicio</h4>
          <ul className="space-y-2 text-sm text-dark-fg/60">
            <li><Link to="/aparecer-en-google-maps" className="hover:text-primary transition-colors">Aparecer en Google Maps</Link></li>
            <li><Link to="/seo-para-negocios-locales" className="hover:text-primary transition-colors">SEO para negocios locales</Link></li>
            <li><Link to="/ficha-google-mi-negocio" className="hover:text-primary transition-colors">Ficha Google Mi Negocio</Link></li>
            <li><Link to="/como-salir-primero-en-google" className="hover:text-primary transition-colors">Cómo salir primero en Google</Link></li>
          </ul>
        </div>

        {/* Sectores */}
        <div>
          <h4 className="font-heading text-sm mb-4">Sectores</h4>
          <ul className="space-y-2 text-sm text-dark-fg/60">
            {sectors.map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`} className="hover:text-primary transition-colors">
                  {s.relatedLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Ciudades */}
        <div>
          <h4 className="font-heading text-sm mb-4">Ciudades</h4>
          <ul className="space-y-2 text-sm text-dark-fg/60">
            {["Madrid", "Barcelona", "Valencia", "Sevilla", "Málaga", "Zaragoza", "Bilbao", "Murcia"].map((c) => (
              <li key={c}>
                <Link to={`/seo-local-${c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="hover:text-primary transition-colors">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h4 className="font-heading text-sm mb-4">Empresa</h4>
          <ul className="space-y-2 text-sm text-dark-fg/60">
            <li><Link to="/como-funciona" className="hover:text-primary transition-colors">Cómo funciona</Link></li>
            <li><Link to="/como-ve-google-mi-web" className="hover:text-primary transition-colors">Analiza tu web</Link></li>
            <li><Link to="/planes" className="hover:text-primary transition-colors">Planes</Link></li>
            <li><Link to="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-dark-fg/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-dark-fg/40">
        <span>© 2025 slocal.es</span>
        <span>hola@slocal.es</span>
      </div>
    </div>
  </footer>
);

export default Footer;
