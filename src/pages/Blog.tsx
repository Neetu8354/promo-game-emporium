import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { blogPosts, highIntentKeywords } from "@/data-blog-posts";

const whatsappUrl = "https://wa.link/reddyanna_";

const Blog = () => (
  <main className="min-h-screen bg-muted text-foreground">
    <SEO
      title="Lotus365 IDs Blog | Login, Cricket ID & Casino Help"
      description="Read Lotus365 IDs blog guides for login help, cricket ID support, casino access, KYC, bonus claims, withdrawals, and 24x7 gaming assistance."
      canonical="https://www.lotus365ids.live/blog"
      schema={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            name: "Lotus365 IDs Blog | Login, Cricket ID & Casino Help",
            url: "https://www.lotus365ids.live/blog",
            description: "Read Lotus365 IDs blog guides for login help, cricket ID support, casino access, KYC, bonus claims, withdrawals, and 24x7 gaming assistance.",
            inLanguage: "en-IN",
            isPartOf: { "@type": "WebSite", url: "https://www.lotus365ids.live/" },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lotus365ids.live/" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.lotus365ids.live/blog" },
              ],
            },
          },
          {
            "@type": "ItemList",
            name: "Lotus365 IDs Support Articles",
            itemListElement: blogPosts.map((post, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://www.lotus365ids.live/blog/${post.slug}`,
              name: post.title,
            })),
          },
        ],
      }}
    />
    <div className="mx-auto min-h-screen w-full max-w-[1180px] overflow-hidden bg-background pb-[86px] shadow-panel lg:pb-28">
      <header className="sticky top-0 z-40 flex min-h-[60px] items-center justify-between gap-3 border-b-[3px] border-border bg-background px-4 py-2 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" size="icon" className="rounded-md">
          <Link to="/" aria-label="Back to Lotus365 IDs home"><ArrowLeft className="size-6" /></Link>
        </Button>
        <Link to="/" className="text-xl font-black uppercase leading-none tracking-wide" aria-label="Lotus365 IDs home">
          <span className="text-foreground">LOTUS</span><span className="text-primary">365</span>
        </Link>
        <Button asChild variant="whatsapp" size="icon" className="rounded-md">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Lotus365 IDs"><MessageCircle className="size-6" /></a>
        </Button>
      </header>

      <section className="bg-background px-5 pb-2 pt-7 text-center sm:px-8 lg:px-12 lg:pt-12">
        <p className="text-sm font-black uppercase tracking-wide text-primary">Cricket & Casino Help Blog</p>
        <h1 className="mx-auto mt-2 max-w-4xl text-4xl font-light leading-[1.08] tracking-normal text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
          Lotus365 IDs Cricket ID and Casino Help Articles
        </h1>
        <p className="mx-auto max-w-3xl pt-7 text-base leading-[1.65] text-foreground sm:text-lg lg:text-xl">
          Find simple guidance here for cricket ID login, casino account access, new ID requests, KYC questions, withdrawal updates, and 24x7 WhatsApp support for players across India.
        </p>
      </section>

      <section className="grid gap-4 bg-background px-4 pt-7 sm:px-6 md:grid-cols-2 lg:px-8 xl:grid-cols-3">
        <h2 className="text-2xl font-black leading-tight text-foreground md:col-span-2 xl:col-span-3">Latest Lotus365 IDs Support Guides</h2>
        {blogPosts.map((post) => (
          <article key={post.title} className="overflow-hidden rounded-md bg-card shadow-panel">
            <img src={post.image} alt={post.imageAlt} loading="lazy" className="h-40 w-full object-cover sm:h-48" />
            <div className="p-4">
              <h3 className="text-xl font-black leading-tight text-foreground">{post.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-foreground/85">{post.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-md bg-background px-2 py-1 text-[0.65rem] font-black uppercase text-primary">{keyword}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-background px-5 pt-8 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-black leading-tight text-foreground">More Lotus365 IDs Help</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-black uppercase">
          <Link to="/" className="rounded-md bg-card px-3 py-3 text-foreground shadow-panel">Home Help</Link>
          <Link to="/lotus365live-login-guide" className="rounded-md bg-card px-3 py-3 text-foreground shadow-panel">Login Help</Link>
        </div>
      </section>

      <section className="bg-background px-5 pt-8 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-black leading-tight text-foreground">Popular Cricket and Casino Help Topics</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {highIntentKeywords.map((keyword) => (
            <Link key={keyword} to="/blog" className="rounded-md bg-card px-3 py-2 text-xs font-black uppercase leading-snug text-foreground shadow-panel">
              {keyword}
            </Link>
          ))}
        </div>
      </section>

      <Button asChild variant="secondary" className="fixed inset-x-0 bottom-0 z-50 mx-auto h-[70px] w-full max-w-[520px] rounded-t-md rounded-b-none text-xl font-black text-secondary-foreground shadow-panel sm:text-2xl">
        <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Lotus365 IDs now"><MessageCircle className="!size-[1.15em]" /> Whatsapp Us Now</a>
      </Button>
    </div>
  </main>
);

export default Blog;
