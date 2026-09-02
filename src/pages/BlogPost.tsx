import { useParams, Link } from "@/lib/router-compat";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/servicios/ServiciosUI";
import { PostCard } from "@/pages/BlogIndex";
import { posts } from "@/data/posts";
import { sectors } from "@/data/sectors";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="container py-20 text-center font-body text-warm-fg/70">Artículo no encontrado</div>;
  }

  // Reading time estimate
  const wordCount = post.content.replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const dateFormatted = new Date(post.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Related sector link
  const relatedSector = post.relatedSectorSlug
    ? sectors.find((s) => s.slug === post.relatedSectorSlug)
    : null;

  // Related posts: same category first, then most recent
  const related = [
    ...posts.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...posts.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Javi Soriano",
    },
    publisher: {
      "@type": "Organization",
      name: "slocal.es",
      url: "https://slocal.es",
    },
    image: post.featuredImage,
    mainEntityOfPage: `https://slocal.es/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://slocal.es/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://slocal.es/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://slocal.es/blog/${post.slug}` },
    ],
  };

  const schemas: any[] = [articleSchema, breadcrumbSchema];
  if (post.faqs && post.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  if (post.extraSchema) {
    schemas.push(post.extraSchema);
  }

  return (
    <>
      <SEOHead
        title={`${post.title} | slocal.es`}
        description={post.metaDescription}
        canonical={`/blog/${post.slug}`}
        jsonLd={schemas}
      />

      {/* HERO */}
      <section className="bg-white pt-12 pb-10 md:pt-16 md:pb-12">
        <div className="container max-w-3xl">
          <BreadcrumbNav items={[
            { label: "Inicio", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]} />
          <Reveal>
            <Eyebrow>— {post.category}</Eyebrow>
            <h1 className="mt-6 font-heading font-semibold text-warm-fg leading-[1.08] tracking-tight text-3xl md:text-[44px]">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-[13px] text-warm-fg/55">
              <time dateTime={post.date}>{dateFormatted}</time>
              <span aria-hidden>·</span>
              <span>{readingTime} min de lectura</span>
              <span aria-hidden>·</span>
              <span>Por Javi Soriano</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured image */}
      <div className="container max-w-4xl mb-12 md:mb-16">
        <Reveal>
          <div className="rounded-3xl overflow-hidden border border-warm-fg/10 bg-white shadow-[0_24px_70px_-45px_rgba(0,0,0,0.4)]">
            <img
              src={post.featuredImage}
              alt={post.altText}
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>
      </div>

      {/* Content */}
      <article className="container max-w-[46rem] pb-16 md:pb-20">
        <div
          className="blog-article font-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Inline CTA */}
        <div className="mt-14 rounded-3xl border border-warm-fg/10 bg-white p-7 md:p-9 shadow-[0_18px_50px_-38px_rgba(0,0,0,0.35)]">
          <Eyebrow>— Análisis gratuito</Eyebrow>
          <h2 className="mt-4 font-heading font-semibold text-warm-fg text-2xl md:text-3xl leading-[1.15] tracking-tight">
            Descubre cómo <span className="text-primary">te ve Google</span> hoy
          </h2>
          <p className="mt-4 font-body font-light text-warm-fg/70 leading-relaxed">
            Revisamos tu ficha de Google Business Profile y tu web y te decimos qué falta para aparecer entre los
            primeros en tu zona. Sin compromiso.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
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
              Conocer los servicios
            </Link>
          </div>
        </div>

        {/* Related sector link */}
        {relatedSector && (
          <div className="mt-8 rounded-2xl border border-warm-fg/10 bg-white p-6">
            <p className="font-body text-[13px] text-warm-fg/55 mb-2">Artículo relacionado con:</p>
            <Link
              to={`/${relatedSector.slug}`}
              className="font-heading text-[15px] font-medium text-primary hover:underline"
            >
              {relatedSector.metaTitle.split("|")[0].trim()} →
            </Link>
          </div>
        )}
      </article>

      {/* FAQ */}
      {post.faqs && post.faqs.length > 0 && (
        <FAQSection title="Preguntas frecuentes" items={post.faqs} />
      )}

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-white py-20 md:py-28 border-t border-warm-fg/10">
          <div className="container">
            <Reveal>
              <Eyebrow>— Sigue leyendo</Eyebrow>
              <h2 className="mt-6 font-heading font-semibold text-warm-fg leading-[1.08] tracking-tight text-3xl md:text-4xl max-w-[22ch]">
                Artículos <span className="text-primary">relacionados</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 90} className="h-full">
                  <PostCard post={p} />
                </Reveal>
              ))}
            </div>
            <div className="mt-12">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-heading text-sm font-medium text-primary hover:underline"
              >
                Ver todos los artículos <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="container">
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-14 text-center">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl leading-[1.1] tracking-tight max-w-[26ch] mx-auto">
              Mejora tu posicionamiento local
            </h2>
            <p className="mt-5 font-body font-light text-primary-foreground/85 max-w-xl mx-auto leading-relaxed">
              Cuéntanos tu caso y te decimos exactamente qué hace falta para que te encuentren y te llamen.
            </p>
            <Link
              to="/contacto#formulario"
              className="mt-8 inline-flex items-center justify-center bg-white text-primary font-heading text-sm font-medium rounded-xl px-7 py-3.5 hover:bg-white/90 transition-colors"
            >
              Contactar con Slocal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
