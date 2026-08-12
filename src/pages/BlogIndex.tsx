import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/servicios/ServiciosUI";
import { posts, BlogPost } from "@/data/posts";

const categories = ["Todos", "Google Maps", "SEO Local", "Por sector", "Casos prácticos"] as const;

export const readingTimeOf = (html: string) => {
  const words = html.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
};

const BlogIndex = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const filtered = activeCategory === "Todos"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://slocal.es/blog" },
    ],
  };

  return (
    <>
      <SEOHead
        title="Blog de SEO Local para Negocios | slocal.es"
        description="Artículos prácticos sobre SEO local, Google Maps, Google Business Profile y estrategias para que tu negocio aparezca primero en Google."
        canonical="/blog"
        jsonLd={breadcrumbSchema}
      />

      {/* HERO */}
      <section className="bg-white pt-12 pb-14 md:pt-20 md:pb-20">
        <div className="container">
          <BreadcrumbNav items={[{ label: "Inicio", href: "/" }, { label: "Blog" }]} />
          <Reveal>
            <Eyebrow>— Blog</Eyebrow>
            <h1 className="mt-6 font-heading font-semibold text-warm-fg leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-6xl max-w-[22ch]">
              Estrategias reales de <span className="text-primary">SEO Local</span>
            </h1>
            <p className="mt-7 max-w-2xl font-body font-light text-warm-fg/75 text-base md:text-lg leading-relaxed">
              Aquí compartimos lo que aplicamos cada día: Google Business Profile, páginas web que convierten,
              posicionamiento en Google Maps y captación de clientes locales. Sin tecnicismos y con ejemplos reales.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contacto#formulario"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-heading text-sm font-medium rounded-xl px-7 py-3.5 shadow-[0_14px_36px_-16px_hsl(var(--primary))] hover:bg-primary/90 transition-colors"
              >
                Solicitar análisis gratuito
              </Link>
              <Link
                to="/servicios"
                className="inline-flex items-center justify-center border border-warm-fg/15 text-warm-fg font-heading text-sm font-medium rounded-xl px-7 py-3.5 hover:border-primary hover:text-primary transition-colors"
              >
                Ver servicios
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LISTADO */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-10 md:mb-14" role="tablist" aria-label="Categorías del blog">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-heading text-[13px] font-medium rounded-full px-5 py-2.5 border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  activeCategory === cat
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_14px_36px_-20px_hsl(var(--primary))]"
                    : "border-warm-fg/15 bg-white text-warm-fg/80 hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {sorted.length === 0 ? (
            <p className="font-body text-warm-fg/60">No hay artículos en esta categoría todavía.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {sorted.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 90} className="h-full">
                  <PostCard post={post} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="container">
          <Reveal>
            <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-14 text-center">
              <h2 className="font-heading font-semibold text-3xl md:text-4xl leading-[1.1] tracking-tight max-w-[24ch] mx-auto">
                ¿Quieres saber cómo te ve Google hoy?
              </h2>
              <p className="mt-5 font-body font-light text-primary-foreground/85 max-w-xl mx-auto leading-relaxed">
                Te enviamos un análisis gratuito de tu ficha y tu web con los puntos concretos a mejorar.
              </p>
              <Link
                to="/contacto#formulario"
                className="mt-8 inline-flex items-center justify-center bg-white text-primary font-heading text-sm font-medium rounded-xl px-7 py-3.5 hover:bg-white/90 transition-colors"
              >
                Solicitar análisis gratuito
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export const PostCard = ({ post }: { post: BlogPost }) => {
  const dateFormatted = new Date(post.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="h-full">
      <Link
        to={`/blog/${post.slug}`}
        className="group h-full flex flex-col rounded-3xl border border-warm-fg/10 bg-white overflow-hidden shadow-[0_18px_50px_-38px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-40px_rgba(0,0,0,0.35)] hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <div className="aspect-[16/10] w-full overflow-hidden bg-white border-b border-warm-fg/10">
          <img
            src={post.featuredImage}
            alt={post.altText}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex flex-col flex-1 p-6 md:p-7">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-body text-warm-fg/55">
            <span className="font-heading text-[11px] tracking-[0.14em] uppercase text-primary">{post.category}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>{dateFormatted}</time>
            <span aria-hidden>·</span>
            <span>{readingTimeOf(post.content)} min de lectura</span>
          </div>
          <h2 className="mt-4 font-heading font-semibold text-warm-fg text-xl md:text-[22px] leading-[1.22] tracking-tight group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="mt-3 font-body font-light text-warm-fg/70 text-[15px] leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          <span className="mt-6 pt-5 border-t border-warm-fg/10 inline-flex items-center gap-2 font-heading text-[13px] font-medium text-primary">
            Leer artículo
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </article>
  );
};

export default BlogIndex;
