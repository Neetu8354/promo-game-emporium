import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import casinoBanner from "@/assets/casino-games-banner.jpg";
import { blogPosts, highIntentKeywords } from "@/data-blog-posts";

const whatsappUrl = "https://wa.link/reddyanna_";

const keywords = [
  "Lotus365 IDs new ID WhatsApp support",
  "Lotus365 IDs cricket betting login help India",
  "Lotus365 IDs casino account recovery support",
  "Lotus365 IDs fast withdrawal guidance online",
  "Lotus365 IDs bonus claim and KYC issue help",
];

const LoginGuide = () => (
  <main className="min-h-screen bg-muted text-foreground">
    <SEO
      title="Lotus365 IDs Login Guide | New ID & KYC Support"
      description="Lotus365 IDs login guide for new ID support, cricket betting account access, casino login help, KYC issues, bonus claims, and withdrawals."
      canonical="https://lotus365ids.live/lotus365live-login-guide"
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

export default LoginGuide;
