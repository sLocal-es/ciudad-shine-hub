import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { posts, BlogPost } from "@/data/posts";

const categories = ["Todos", "Google Maps", "SEO Local", "Por sector", "Casos prácticos"] as const;

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

      <section className="bg-dark-bg text-dark-fg py-16">
        <div className="container">
          <BreadcrumbNav items={[
            { label: "Inicio", href: "/" },
            { label: "Blog" },
          ]} />
          <h1 className="font-heading text-3xl md:text-4xl mb-4">Blog de SEO Local</h1>
          <p className="text-dark-fg/70 text-base md:text-lg font-body font-light max-w-2xl">
            Artículos prácticos sobre cómo posicionar tu negocio en Google. Sin tecnicismos, con ejemplos reales.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-heading rounded-full px-5 py-2 border transition-colors ${
                  activeCategory === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Post grid */}
          {sorted.length === 0 ? (
            <p className="text-muted-foreground">No hay artículos en esta categoría todavía.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sorted.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

const PostCard = ({ post }: { post: BlogPost }) => {
  const dateFormatted = new Date(post.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group bg-card border border-border rounded-xl overflow-hidden transition-all duration-200 hover:border-primary hover:-translate-y-[3px]"
    >
      <img
        src={post.featuredImage}
        alt={post.altText}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-heading text-primary border border-primary/30 rounded-full px-3 py-0.5">
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground">{dateFormatted}</span>
        </div>
        <h2 className="font-heading text-base mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
};

export default BlogIndex;
