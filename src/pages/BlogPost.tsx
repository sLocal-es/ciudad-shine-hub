import { useParams, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { posts } from "@/data/posts";
import { sectors } from "@/data/sectors";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="container py-20 text-center">Artículo no encontrado</div>;
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

  const schemas = [articleSchema, breadcrumbSchema];
  if (post.faqs && post.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    } as any);
  }

  return (
    <>
      <SEOHead
        title={`${post.title} | slocal.es`}
        description={post.metaDescription}
        canonical={`/blog/${post.slug}`}
        jsonLd={schemas}
      />

      {/* Hero */}
      <section className="bg-dark-bg text-dark-fg py-16">
        <div className="container max-w-3xl">
          <BreadcrumbNav items={[
            { label: "Inicio", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]} />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-heading text-primary border border-primary/30 rounded-full px-3 py-0.5">
              {post.category}
            </span>
            <span className="text-xs text-dark-fg/60">{dateFormatted}</span>
            <span className="text-xs text-dark-fg/60">· {readingTime} min de lectura</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Featured image */}
      <div className="container max-w-3xl -mt-4 mb-10">
        <img
          src={post.featuredImage}
          alt={post.altText}
          className="w-full rounded-xl border border-border"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <article className="container max-w-3xl pb-12">
        <div
          className="prose prose-sm md:prose-base max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-li:text-muted-foreground prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Related sector link */}
        {relatedSector && (
          <div className="mt-10 p-5 bg-warm-bg border border-border rounded-xl">
            <p className="text-sm text-muted-foreground mb-2">Artículo relacionado con:</p>
            <Link
              to={`/${relatedSector.slug}`}
              className="font-heading text-sm text-primary hover:underline"
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

      {/* CTA */}
      <CTASection title="¿Quieres que tu negocio aparezca primero en Google?" buttonText="Hablemos →" />
    </>
  );
};

export default BlogPostPage;
