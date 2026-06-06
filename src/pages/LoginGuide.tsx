import { ArrowLeft, CheckCircle2, MessageCircle, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import casinoBanner from "@/assets/casino-games-banner.jpg";
import { blogPosts, highIntentKeywords } from "@/data-blog-posts";

const whatsappUrl = "https://wa.link/reddyanna_";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Login", href: "/login" },
  { label: "Sign Up", href: "/signup" },
  { label: "App Download", href: "/app-download" },
  { label: "About Us", href: "/about-us" },
  { label: "Lotusexchange", href: "/lotusexchange" },
  { label: "Lotus Cricket", href: "/lotus-cricket" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

const keywords = [
  "Lotus365 IDs new ID WhatsApp support",
  "Lotus365 IDs cricket betting login help India",
  "Lotus365 IDs casino account recovery support",
  "Lotus365 IDs fast withdrawal guidance online",
  "Lotus365 IDs bonus claim and KYC issue help",
];

const LoginGuide = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <main className="min-h-screen bg-muted text-foreground">
    <SEO
      title="Lotus365 IDs Login Guide | New ID & KYC Support"
      description="Lotus365 IDs login guide for new ID support, cricket betting account access, casino login help, KYC issues, bonus claims, and withdrawals."
      canonical="https://www.lotus365ids.live/lotus365live-login-guide"
      schema={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Lotus365 IDs Login Guide",
        description: "How to get Lotus365 IDs login, new ID, KYC, bonus, and withdrawal help through WhatsApp support.",
        step: keywords.map((keyword, index) => ({ "@type": "HowToStep", position: index + 1, name: keyword })),
      }}
    />
    <div className="mx-auto min-h-screen w-full max-w-[1180px] overflow-hidden bg-background pb-[86px] shadow-panel lg:pb-28">
      <header className="sticky top-0 z-40 flex min-h-[60px] items-center justify-between gap-3 border-b-[3px] border-border bg-background px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" className="rounded-md shrink-0">
            <Link to="/" aria-label="Back to Lotus365 IDs home"><ArrowLeft className="size-6" /></Link>
          </Button>
          <Link to="/" className="text-xl font-black uppercase leading-none tracking-wide" aria-label="Lotus365 IDs home">
            <span className="text-foreground">LOTUS</span><span className="text-primary">365</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-4 text-sm font-medium lg:flex" aria-label="Main navigation">
          {navItems.map((item) => <Link key={item.label} to={item.href} className="hover:text-primary">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="whatsapp" size="icon" className="rounded-md lg:hidden">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Lotus365 IDs"><MessageCircle className="size-6" /></a>
          </Button>
          <Button asChild variant="gold" className="hidden rounded-xl px-4 py-2 font-black lg:flex">
            <Link to="/login">Login</Link>
          </Button>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="grid size-10 shrink-0 place-items-center rounded-md bg-card lg:hidden" aria-label="Toggle mobile menu">
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="absolute right-3 top-16 grid w-[min(18rem,calc(100vw-1.5rem))] gap-1 rounded-md border border-border bg-card p-2 text-base font-medium shadow-panel lg:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => <Link key={item.label} to={item.href} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-2 hover:bg-background hover:text-primary">{item.label}</Link>)}
            <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-2 hover:bg-background hover:text-primary">WhatsApp Support</a>
          </nav>
        )}
      </header>

      <section className="relative min-h-[190px] overflow-hidden bg-surface-strong px-5 py-8 text-center sm:px-8 lg:min-h-[320px] lg:px-12 lg:py-16">
        <img src={casinoBanner} alt="Lotus365 login guide step by step — cricket ID and casino account help on lotus365ids.live" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative">
          <p className="text-sm font-black uppercase tracking-wide text-primary">Login Guide</p>
          <h1 className="mx-auto mt-2 max-w-4xl text-4xl font-light leading-[1.08] tracking-normal text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
            Lotus365 IDs Login Guide — New ID, Cricket Betting and Casino Help
          </h1>
        </div>
      </section>

      <section className="bg-background px-5 pt-7 sm:px-8 lg:px-12 lg:pt-10">
        <h2 className="text-2xl font-black leading-tight text-foreground">Lotus365 IDs 24x7 WhatsApp Login Support</h2>
        <p className="mt-4 text-base font-semibold leading-7 text-foreground/90">
          Use this page for Lotus365 IDs login support, new ID creation guidance, cricket betting account access, casino game login assistance, fast withdrawal queries, locked account recovery, and secure online gaming onboarding.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {keywords.map((keyword) => (
            <div key={keyword} className="flex items-start gap-3 rounded-md bg-card p-3 shadow-panel">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
              <h3 className="text-base font-black leading-snug text-foreground">{keyword}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background px-5 pt-8 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-black leading-tight text-foreground">Lotus365 IDs Fast Withdrawal and KYC Help</h2>
        <p className="mt-4 text-base font-semibold leading-7 text-foreground/90">
          Contact support for Lotus365 IDs withdrawal pending help, payment update support, KYC document guidance, bonus claim eligibility, casino login issues, and cricket match ID access assistance.
        </p>
        <Button asChild className="mt-5 h-11 w-full rounded-md text-base font-black">
          <a href={whatsappUrl} target="_blank" rel="noreferrer">Get Login Help Now</a>
        </Button>
      </section>

      <section className="bg-background px-5 pt-8 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-black leading-tight text-foreground">Related Lotus365 IDs Help Articles</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.slice(0, 5).map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="rounded-md bg-card p-3 text-sm font-black uppercase leading-snug text-foreground shadow-panel">
              {post.title}
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
};

export default LoginGuide;
