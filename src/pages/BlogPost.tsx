import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { blogPosts, getPostBySlug } from "@/data-blog-posts";

const whatsappUrl = "https://wa.link/reddyanna_";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const internalPosts = post.internalLinks
    .map((internalSlug) => blogPosts.find((item) => item.slug === internalSlug))
    .filter((item): item is (typeof blogPosts)[number] => Boolean(item));

  return (
    <main className="min-h-screen bg-muted text-foreground">
      <SEO
        title={`${post.seoTitle} | Lotus365 IDs`}
        description={post.description}
        canonical={`https://www.lotus365ids.live/blog/${post.slug}`}
        keywords={post.keywords.join(", ")}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              url: `https://www.lotus365ids.live/blog/${post.slug}`,
              image: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/6d4d9b19-74ce-4cce-b064-9146234b15f0",
              mainEntityOfPage: `https://www.lotus365ids.live/blog/${post.slug}`,
              articleSection: "Lotus365 IDs support",
              keywords: post.keywords,
              inLanguage: "en-IN",
              author: { "@type": "Organization", name: "Lotus365 IDs", url: "https://www.lotus365ids.live/" },
              publisher: { "@type": "Organization", name: "Lotus365 IDs", url: "https://www.lotus365ids.live/" },
              datePublished: "2026-01-01",
              dateModified: "2026-06-01",
            },
            {
              "@type": "FAQPage",
              mainEntity: post.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ],
        }}
      />
      <article className="mx-auto min-h-screen w-full max-w-[1180px] overflow-hidden bg-background pb-[86px] shadow-panel lg:pb-28">
        <header className="sticky top-0 z-40 flex min-h-[60px] items-center justify-between gap-3 border-b-[3px] border-border bg-background px-4 py-2 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" size="icon" className="rounded-md">
            <Link to="/blog" aria-label="Back to Lotus365 IDs blog"><ArrowLeft className="size-6" /></Link>
          </Button>
          <Link to="/" className="text-xl font-black uppercase leading-none tracking-wide" aria-label="Lotus365 IDs home">
            <span className="text-foreground">LOTUS</span><span className="text-primary">365</span>
          </Link>
          <Button asChild variant="whatsapp" size="icon" className="rounded-md">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Lotus365 IDs"><MessageCircle className="size-6" /></a>
          </Button>
        </header>

        <section className="grid gap-6 bg-background px-5 pt-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12 lg:pt-10">
          <img src={post.image} alt={post.imageAlt} loading="eager" className="h-44 w-full rounded-md object-cover shadow-panel sm:h-64 lg:h-full lg:min-h-[340px]" width={700} height={440} />
          <div>
          <p className="mt-5 text-sm font-black uppercase tracking-wide text-primary">Lotus365 IDs Support Blog</p>
          <h1 className="mt-2 text-4xl font-light leading-[1.08] tracking-normal text-primary sm:text-5xl lg:text-6xl xl:text-7xl">{post.title}</h1>
          <p className="mt-5 text-base font-semibold leading-7 text-foreground/90">{post.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {post.keywords.map((keyword) => (
              <Link key={keyword} to="/blog" className="rounded-md bg-card px-3 py-2 text-xs font-black uppercase text-foreground shadow-panel">{keyword}</Link>
            ))}
          </div>
          </div>
        </section>

        <section className="grid gap-6 bg-background px-5 pt-8 sm:px-8 lg:grid-cols-2 lg:px-12">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-black leading-tight text-foreground">{section.heading}</h2>
              <h3 className="mt-2 text-lg font-black leading-tight text-primary">{section.subheading}</h3>
              <p className="mt-3 text-base font-semibold leading-7 text-foreground/90">{section.body}</p>
            </section>
          ))}
        </section>

        <section className="bg-background px-5 pt-8 sm:px-8 lg:px-12">
          <h2 className="text-2xl font-black leading-tight text-foreground">Frequently Asked Questions</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {post.faqs.map((faq) => (
              <section key={faq.question} className="rounded-md bg-card p-4 shadow-panel">
                <h3 className="text-lg font-black leading-tight text-foreground">{faq.question}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-foreground/85">{faq.answer}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="bg-background px-5 pt-8 sm:px-8 lg:px-12">
          <h2 className="text-2xl font-black leading-tight text-foreground">Related Lotus365 IDs Support Articles</h2>
          <div className="mt-4 grid gap-3">
            <Link to="/" className="rounded-md bg-card p-3 text-sm font-black uppercase leading-snug text-foreground shadow-panel">Lotus365 IDs Home Support Page</Link>
            <Link to="/lotus365live-login-guide" className="rounded-md bg-card p-3 text-sm font-black uppercase leading-snug text-foreground shadow-panel">Login Guide & Fast Withdrawal Help</Link>
            {internalPosts.map((item) => (
              <Link key={item.slug} to={`/blog/${item.slug}`} className="rounded-md bg-card p-3 text-sm font-black uppercase leading-snug text-foreground shadow-panel">{item.title}</Link>
            ))}
            {relatedPosts.map((item) => (
              <Link key={item.slug} to={`/blog/${item.slug}`} className="rounded-md bg-card p-3 text-sm font-black uppercase leading-snug text-foreground shadow-panel">{item.title}</Link>
            ))}
          </div>
          <Button asChild className="mt-5 h-11 w-full rounded-md text-base font-black">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">Ask Lotus365 IDs Support</a>
          </Button>
        </section>

        <Button asChild variant="secondary" className="fixed inset-x-0 bottom-0 z-50 mx-auto h-[70px] w-full max-w-[520px] rounded-t-md rounded-b-none text-xl font-black text-secondary-foreground shadow-panel sm:text-2xl">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Lotus365 IDs now"><MessageCircle className="!size-[1.15em]" /> Whatsapp Us Now</a>
        </Button>
      </article>
    </main>
  );
};

export default BlogPost;
