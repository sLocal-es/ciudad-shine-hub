import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

const BreadcrumbNav = ({ items }: BreadcrumbNavProps) => (
  <nav aria-label="Breadcrumb" className="text-sm font-body text-muted-foreground mb-4">
    <ol className="flex flex-wrap items-center gap-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-1">
          {i > 0 && <span className="mx-1">›</span>}
          {item.href ? (
            <Link to={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default BreadcrumbNav;
