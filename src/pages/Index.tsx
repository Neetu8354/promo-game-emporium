import { Menu, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SEO from "@/components/SEO";
import heroResponsive from "@/assets/official-lotus365/hero-responsive.jpg";
import trustImage from "@/assets/official-lotus365/trust.png";
import worksImage from "@/assets/official-lotus365/how-it-works.png";
import bettingImage from "@/assets/official-lotus365/betting-site.png";
import exploreImage from "@/assets/official-lotus365/explore.png";
import bonusImage from "@/assets/official-lotus365/bonuses.png";
import safeImage from "@/assets/official-lotus365/safe.png";
import whatsappScreen from "@/assets/official-lotus365/whatsapp-screen.png";

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

const actionOptions = [
  { title: "Member Login", text: "Already registered? Jump into login support and pick up right where you left off.", href: "/login", cta: "Login" },
  { title: "Create New ID", text: "New here? Request a fresh Lotus365 ID from the signup page and start playing in minutes.", href: "/signup", cta: "Sign Up" },
  { title: "App Download", text: "Play on the go — Android or iPhone setup with app install guidance, all in one place.", href: "/app-download", cta: "Download Help" },
  { title: "WhatsApp Support", text: "Questions about login, deposits, withdrawals, bonuses, or KYC? Talk to our team directly.", href: whatsappUrl, cta: "Chat Now", external: true },
];

const introParagraphs = [
  "Lotus365 ID is a popular destination for users looking to explore online cricket betting, sports betting, live casino games, Teen Patti, and Aviator in India. With growing interest in IPL betting, international cricket matches, and live gaming experiences, many players search for reliable platforms that provide access to multiple gaming categories in one place.",
  "Cricket remains one of the most followed sports in India, making online cricket betting and live cricket betting among the most searched gaming topics. Alongside cricket, users can enjoy a variety of casino games, including roulette, blackjack, baccarat, and live dealer experiences. Popular Indian card games such as Teen Patti and modern crash-style games like Aviator continue to attract players seeking engaging online entertainment.",
  "Lotus365 offers access to a wide range of sports and gaming options through a user-friendly platform designed for desktop and mobile users. Whether you are interested in cricket betting markets, live casino action, Teen Patti online, or exploring the Aviator game, you can find dedicated sections and helpful guides covering each category.",
  "Explore our Cricket Betting, Casino Games, Teen Patti, and Aviator pages to learn more about game rules, betting markets, popular features, and the latest trends in online gaming and sports betting in India.",
];

const trustCards = [
  { title: "Licensed & Verified Play", text: "Every bet, game round, and payout follows strict global licensing standards. Zero shady tricks, zero rigged outcomes — only clean, regulated, and transparent play." },
  { title: "Round-the-Clock Customer Care", text: "24/7 live chat, email, and WhatsApp support in both English and Hindi. Issues are resolved in minutes, not days." },
  { title: "Complete Transparency", text: "Crystal-clear terms, real-time odds updates, independent audits, and zero hidden charges. What you see is exactly what you get." },
  { title: "Active Community Trust", text: "Lakhs of happy Indian players win big every day. Genuine reviews — never paid promotions." },
];

const steps = [
  { icon: "👤", title: "1. Create an Account in Just 2 Minutes", points: ["Visit Lotus365 com or Lotus 365 India, tap Sign Up, and enter your mobile number, name, and password.", "OTP verification happens within seconds — no long forms or paperwork.", "After registration, users can pick up a new cricket ID, IPL ID, or a dedicated all-cricket ID for IPL betting markets."] },
  { icon: "💳", title: "2. Deposit Funds Securely", points: ["Choose your preferred Indian payment method — UPI (Google Pay/PhonePe), Paytm wallet, bank transfer, or crypto.", "The minimum deposit is just ₹100 and is credited instantly to your Lotus365 bet account.", "Bonus: Lotus 365 Club regularly offers deposit bonuses that boost your betting power instantly."] },
  { icon: "🏏", title: "3. Start Betting Right Away", points: ["Browse live cricket, IPL, football leagues, or Lotus365 club casino games. Odds refresh in real time and a cash-out option is available mid-play.", "Cricket fans often use their online cricket id ipl, ipl online cricket id, or online id for ipl to bet on live IPL matches and tournaments."] },
  { icon: "💰", title: "4. Withdraw Winnings Quickly", points: ["Request payouts anytime using the same secure methods. Lotus365 wins are processed in 5-30 minutes — with no maximum cap, perfect for huge IPL match wins.", "Take advantage of quick withdrawal payments, zero hidden charges, and lock in your winnings without delay."] },
];

const featureCards = [
  { title: "Diverse Betting Markets", text: "Built specifically for Indian punters — full coverage of IPL cricket, the ICC World Cup, top football leagues, Pro Kabaddi, horse racing, and tennis Grand Slams." },
  { title: "Live Casino Thrills", text: "Live casino action across Teen Patti, Andar Bahar, roulette, Blackjack, and Baccarat with professional dealers. HD streaming makes every card flip and wheel spin feel natural." },
  { title: "Safe Payments", text: "Lotus 365 prioritises betting safety — encrypted UPI, IMPS, PhonePe, Paytm wallets, and bank transfers." },
  { title: "Huge Welcome Bonuses", text: "New members receive a generous welcome bonus, ongoing cashback, and Lotus 365 original loyalty points that can be redeemed for free bets and tournament entries." },
  { title: "Mobile-First Design", text: "Bet on the go — through the dedicated Lotus betting app or the responsive Lotus betting website — with zero lag." },
  { title: "Responsible Gaming Tools", text: "Responsible play features such as deposit limits, time-outs, self-exclusion, and 24/7 support — Lotus Bet is entertainment, not risk." },
];

const sports = ["Cricket", "Football", "Tennis", "Kabaddi", "Horse Racing", "More"];
const casino = ["Casinos", "Themes", "Table Games", "Live Shows"];
const bonuses = ["Welcome Bonus", "Deposit Rewards", "Referral Program", "Weekly Contests", "Festival Specials", "Lotus 365 Club VIP"];

const paymentOptions = ["UPI", "PhonePe", "Google Pay", "Paytm", "Bank Transfer", "IMPS"];
const chatPrompts = ["I need a new Lotus365 ID", "Help me login", "Withdrawal support", "Bonus details", "KYC help"];
const loginBenefits = ["Fast Approval", "Smooth Service", "24x7 Support"];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="home" className="min-h-screen scroll-smooth bg-background text-foreground">
      <SEO
        title="Lotus365 ID | Online Cricket Betting, Casino Games & Sports Betting India"
        description="Explore Lotus365 ID for online cricket betting, live casino games, Teen Patti, Aviator, and sports betting in India. Discover gaming guides, betting markets, and popular game categories."
        canonical="https://www.lotus365ids.live/"
        keywords="Lotus365 ID, online cricket betting India, live casino games, Teen Patti, Aviator, sports betting India, IPL betting, cricket betting markets"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "name": "Lotus365 ID",
              "url": "https://www.lotus365ids.live/",
              "alternateName": "www.lotus365ids.live",
              "sameAs": ["https://www.lotus365ids.live/"],
              "description": "Explore Lotus365 ID for online cricket betting, live casino games, Teen Patti, Aviator, and sports betting in India.",
              "inLanguage": "en-IN",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.lotus365ids.live/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lotus365ids.live/" }
              ]
            }
          ]
        }}
      />

      <div className="min-h-screen bg-background pb-28 text-foreground">
        <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
          <div className="relative mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-2 px-3 sm:px-4 lg:px-8">
            <Link to="/" className="shrink-0 text-xl font-black uppercase leading-none tracking-normal sm:text-2xl">
              <span>LOTUS </span><span className="text-primary">365</span>
            </Link>

            <nav className="hidden items-center gap-4 text-sm font-medium xl:gap-6 lg:flex" aria-label="Main navigation">
              {navItems.map((item) => <Link key={item.label} to={item.href} className="hover:text-primary">{item.label}</Link>)}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Button asChild variant="gold" className="rounded-xl px-4 py-2 font-black">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild variant="secondary" className="rounded-xl px-4 py-2 font-black text-secondary-foreground">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>

            <div className="ml-auto mr-1 flex items-center gap-1.5 lg:hidden">
              <Button asChild variant="gold" size="sm" className="h-9 px-2.5 font-black sm:px-3">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild variant="secondary" size="sm" className="h-9 px-2.5 font-black text-secondary-foreground sm:px-3">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>

            <button type="button" onClick={() => setMenuOpen((open) => !open)} className="grid size-10 shrink-0 place-items-center rounded-md bg-card lg:hidden" aria-label="Open mobile menu"><Menu className="size-6" /></button>
            {menuOpen && (
              <nav className="absolute right-3 top-16 grid w-[min(18rem,calc(100vw-1.5rem))] gap-1 rounded-md border border-border bg-card p-2 text-base font-medium shadow-panel lg:hidden" aria-label="Mobile navigation">
                {navItems.map((item) => <Link key={item.label} to={item.href} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-2 hover:bg-background hover:text-primary">{item.label}</Link>)}
                <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-2 hover:bg-background hover:text-primary">WhatsApp Support</a>
              </nav>
            )}
          </div>
        </header>

        <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            <div className="order-2 w-full text-center lg:order-1 lg:w-1/2 lg:text-left">
              <h1 className="text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
                Lotus365 ID – Online Cricket Betting, Casino Games & Sports Betting in India
              </h1>
              <div className="mt-4 space-y-4 text-base leading-7 text-foreground/85 lg:text-xl">
                {introParagraphs.map((text) => <p key={text}>{text}</p>)}
              </div>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
                <Button asChild variant="gold" className="rounded-xl px-6 py-3 font-black">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild variant="secondary" className="rounded-xl px-6 py-3 font-black text-secondary-foreground">
                  <Link to="/signup">Sign Up</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-xl px-6 py-3 font-black">
                  <Link to="/about-us">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="order-1 w-full lg:order-2 lg:w-1/2">
              <div className="block aspect-[5/3] w-full overflow-hidden rounded-xl bg-card shadow-panel">
                <img src={heroResponsive} alt="Online cricket and casino gameplay banner on the lotus365ids.live homepage" width={1600} height={960} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 pb-10 sm:px-6 lg:px-8" aria-labelledby="quick-actions-heading">
          <h2 id="quick-actions-heading" className="mb-5 text-center text-3xl font-light text-primary">Lotus365 Login, Signup, and Support Options</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {actionOptions.map((option) => (
              <article key={option.title} className="rounded-md bg-card p-5 shadow-panel">
                <h3 className="text-xl font-black text-primary">{option.title}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-foreground/85">{option.text}</p>
                {option.external ? (
                  <Button asChild variant="whatsapp" className="mt-4 w-full font-black text-secondary-foreground"><a href={option.href} target="_blank" rel="noreferrer">{option.cta}</a></Button>
                ) : (
                  <Button asChild variant="secondary" className="mt-4 w-full font-black text-secondary-foreground"><Link to={option.href}>{option.cta}</Link></Button>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20" aria-labelledby="trust-heading">
          <h2 id="trust-heading" className="mb-5 text-center text-3xl font-light text-primary">Why Players Choose Lotus365 IDs</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trustCards.map((card) => <InfoCard key={card.title} {...card} />)}
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-4 py-8 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-primary">Live Cricket Match Schedule on Lotus365 IDs</h2>
          <div className="mt-5 overflow-hidden rounded-md bg-card shadow-panel">
            <div className="grid grid-cols-3 border-b border-border text-sm font-black"><span className="p-3">RECENT</span><span className="p-3">LIVE</span><span className="p-3">UPCOMING</span></div>
            <div className="grid gap-2 p-3 text-left text-sm sm:grid-cols-2 lg:grid-cols-3">
              {["KKR vs LSG", "CSK vs GT", "RAJ vs SRH", "DC vs KXIP", "GT vs RCB", "CSK vs MI"].map((match, index) => <div key={match} className="rounded-md bg-background p-3"><span className="block text-xs">Match {38 - index}, IPL 2026</span><strong>{match}</strong><span className="mt-1 block text-xs text-foreground/80">DETAILS</span></div>)}
            </div>
          </div>
        </section>

        <section id="login-vip" className="mx-auto max-w-[1160px] scroll-mt-20 px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-md border border-border bg-card shadow-panel lg:grid-cols-[1fr_0.72fr]">
            <div className="px-4 py-7 text-center sm:px-8 lg:px-10 lg:py-10">
              <p className="text-sm font-black uppercase tracking-normal text-primary">Lotus365 Login / VIP</p>
              <h2 className="mx-auto mt-3 max-w-[680px] text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Log In to Lotus365 and Get Your Online Cricket ID
              </h2>
              <p className="mx-auto mt-4 max-w-[720px] text-base leading-7 text-foreground/90">
                Enter your details to continue with Lotus365 support — for login help, new ID setup, bonus information, deposit guidance, and quick account access.
              </p>
              <div className="mx-auto mt-6 grid max-w-[680px] gap-3 sm:grid-cols-3">
                {loginBenefits.map((item) => <span key={item} className="rounded-md border border-border bg-background px-3 py-3 text-sm font-black text-primary">✓ {item}</span>)}
              </div>
            </div>
            <form className="grid gap-4 border-t border-border bg-background p-4 sm:p-6 lg:border-l lg:border-t-0" onSubmit={(event) => event.preventDefault()}>
              <div className="text-center">
                <h3 className="text-2xl font-black text-primary">Member Login</h3>
                <p className="mt-1 text-sm leading-6 text-foreground/85">Fill in your details and continue on WhatsApp.</p>
              </div>
              <Input className="h-12 border-border bg-card text-center font-medium text-foreground placeholder:text-foreground/70" placeholder="Username / Mobile Number" aria-label="Username or mobile number" />
              <Input className="h-12 border-border bg-card text-center font-medium text-foreground placeholder:text-foreground/70" type="password" placeholder="Password" aria-label="Password" />
              <Button asChild variant="gold" className="h-12 text-base font-black">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">Login Now</a>
              </Button>
              <Button asChild variant="whatsapp" className="h-12 text-base font-black text-secondary-foreground">
                <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle className="!size-5" />Create New ID</a>
              </Button>
            </form>
          </div>
        </section>

        <ContentSection id="signup" title="How the Lotus 365 Club Works — Join, Bet, and Win!" image={worksImage} imageAlt="Join the lotus365ids.live online sports gaming platform and start winning" button="Join Lotus 365 Club Now">
          <p>Getting started is incredibly easy — built for speed and convenience for every Indian gamer. The Lotus365 club site offers an intuitive interface and blazing-fast usability — whether you visit Lotus365 com, Lotus 365 India, or the mobile application.</p>
          <div className="mt-6 grid gap-4 text-left md:grid-cols-2">{steps.map((step) => <StepCard key={step.title} {...step} />)}</div>
        </ContentSection>

        <ContentSection title="Lotus 365 Betting Site — Everything Indian Bettors Look For, All in One Place" image={bettingImage} imageAlt="Live cricket and casino gameplay interface — bet on lotus365ids.live" button="Start Betting on Lotus 365">
          <p>This is the very best Lotus bet and Lotus betting hub, redefining online entertainment. As a genuine platform, we bundle every need of Indian bettors into one Lotus betting website and Lotus 365 original experience.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">{featureCards.map((card) => <InfoCard key={card.title} {...card} />)}</div>
        </ContentSection>

        <section id="app-download" className="mx-auto max-w-[1160px] scroll-mt-20 px-4 py-8 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light leading-tight text-primary">Fast Account Help Through WhatsApp</h2>
          <p className="mx-auto mt-4 max-w-[880px] leading-7">Pick your issue and open WhatsApp support directly. The team will guide you with new ID setup, login problems, deposit confirmation, withdrawal updates, KYC help, and bonus details.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {chatPrompts.slice(0, 3).map((prompt) => <a key={prompt} href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-md bg-card p-5 text-left shadow-panel transition hover:-translate-y-1"><span className="text-2xl">💬</span><h3 className="mt-3 text-xl font-black text-primary">{prompt}</h3><p className="mt-2 text-sm leading-6">Tap to continue this request directly with the support team on WhatsApp.</p></a>)}
          </div>
        </section>

        <ContentSection id="lotus-cricket" title="Explore Lotus 365 India — Cricket, Casino, and Much More" image={exploreImage} imageAlt="Explore live cricket betting and casino games on lotus365ids.live India" button="Play Casino & Bet on Cricket">
          <p>Starting on the Lotus 365 club is incredibly simple — an experience built around speed and ease for Indian gamers. Every Lotus 365 win becomes epic with the HD-quality streaming of Lotus365 online.</p>
          <ListGrid title="Top Sports Betting Options We Offer" items={sports} />
          <ListGrid title="Casino Highlights — Exciting Games With Safe and Fair Play" items={casino} />
        </ContentSection>

        <ContentSection id="lotusexchange" title="Exclusive Lotus 365 Club Bonuses for Indian Players" image={bonusImage} imageAlt="Claim the exclusive Lotus 365 Club welcome bonus and win rewards" button="Claim Your Lotus365 Bonus Now">
          <p>Winning never stops — every Lotus365 win begins with uniquely designed offers built for Indian punters. While you play on Lotus365 online, our bonus package delivers genuine value that enhances your gaming experience from the very first deposit.</p>
          <ListGrid title="Ready for More Rewards? Unlock Exclusive Bonuses With Us" items={bonuses} />
        </ContentSection>

        <section className="mx-auto max-w-[1160px] px-4 py-8 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light leading-tight text-primary">Instant Deposit and Withdrawal Options</h2>
          <p className="mx-auto mt-4 max-w-[880px] leading-7">Indian players can ask support for quick payment guidance, deposit confirmation, withdrawal status, and account verification before cashing out.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">{paymentOptions.map((item) => <div key={item} className="rounded-md bg-card p-4 font-black shadow-panel">{item}</div>)}</div>
        </section>

        <ContentSection title="Safe, Secure, and Transparent Betting on Our Official Platform" image={safeImage} imageAlt="Safe online sports betting website 2026 — lotus365ids.live for Indian players" button="Start Secure Betting Now">
          <p>Security on the original site is never compromised — which is exactly why Lotus365 betting site users trust our fortress-like safety. As the official Lotus 365 site and Lotus365 official website, we deploy 256-bit SSL encryption, two-factor authentication, and blockchain-verified transactions.</p>
        </ContentSection>

        <ContentSection id="contact-us" title="Chat With Our Team on WhatsApp to Get Your Official Lotus365 ID" image={whatsappScreen} imageAlt="Chat with lotus365ids.live on WhatsApp and get your cricket ID in 2 minutes" button="Contact Us on WhatsApp">
          <p>Get started in the easiest and most secure way — by talking directly to our support team on WhatsApp. Simply send a message and our experienced representatives will arrange your official ID within minutes.</p>
          <p>Whether you need help with ID creation, account verification, bonus details, or platform features, our team provides quick and personalised support.</p>
        </ContentSection>

        <section id="blogs" className="mx-auto max-w-[1160px] scroll-mt-20 px-4 py-8 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-primary">What Indian Users Really Say About the Lotus 365 Platform</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {["Lotus365 completely changed my IPL betting game! Deposited through UPI, won ₹50K on MI vs CSK, and withdrew it within 10 minutes. Absolutely reliable!", "The Live Casino wins your heart — real-dealer Teen Patti that genuinely feels like Goa. Support is incredibly fast too.", "A Lotus365 win is my daily-bettor secret. Cricket markets are razor sharp and the rewards keep rolling in."].map((quote) => <blockquote key={quote} className="rounded-md bg-card p-4 text-left shadow-panel">“{quote}”</blockquote>)}
          </div>
        </section>

        <footer className="border-t border-border px-4 py-8 text-center text-sm">
          <p className="font-black"><span>LOTUS </span><span className="text-primary">365</span></p>
          <p className="mt-2 text-foreground/80">Lotus365 ID – Online Cricket Betting, Casino Games &amp; Sports Betting in India</p>
        </footer>

        <Button asChild style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }} className="fixed inset-x-0 bottom-0 z-50 mx-auto h-[70px] w-full rounded-none border-t border-primary/40 text-xl font-semibold tracking-wide text-primary-foreground hover:brightness-110 sm:max-w-[520px] sm:rounded-t-md sm:text-2xl">
          <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle className="!size-6" />Whatsapp Us Now</a>
        </Button>
      </div>
    </main>
  );
};

const ContentSection = ({ id, title, image, imageAlt, button, children }: { id?: string; title: string; image: string; imageAlt?: string; button?: string; children: ReactNode }) => (
  <section id={id} className="mx-auto max-w-[1160px] scroll-mt-20 px-4 py-8 text-center sm:px-6 lg:px-8">
    <h2 className="text-3xl font-light leading-tight text-primary lg:text-5xl">{title}</h2>
    <div className="mx-auto mt-5 max-w-[1080px] space-y-4 text-base leading-7">{children}</div>
    {button && <Button asChild className="mt-6 rounded-md px-8 py-6 font-black"><a href={whatsappUrl} target="_blank" rel="noreferrer">{button}</a></Button>}
    <div className="mt-6 block overflow-hidden rounded-md"><img src={image} alt={imageAlt ?? `${title} — Lotus365 IDs cricket ID, casino, and sports betting in India`} loading="lazy" className="mx-auto aspect-[16/10] w-full max-w-[900px] object-cover sm:aspect-[16/9]" /></div>
  </section>
);

const InfoCard = ({ title, text }: { title: string; text: string }) => <article className="rounded-md bg-card p-4 text-left shadow-panel"><h3 className="text-xl font-black text-primary">{title}</h3><p className="mt-2 text-sm leading-6">{text}</p></article>;

const StepCard = ({ icon, title, points }: { icon: string; title: string; points: string[] }) => <article className="rounded-md bg-card p-4 shadow-panel"><h3 className="text-lg font-black text-primary"><span className="mr-2">{icon}</span>{title}</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">{points.map((point) => <li key={point}>{point}</li>)}</ul></article>;

const ListGrid = ({ title, items }: { title: string; items: string[] }) => <div className="mt-7"><h3 className="text-2xl font-light text-primary">{title}</h3><div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{items.map((item) => <div key={item} className="rounded-md bg-card p-4 text-left font-black shadow-panel">{item}</div>)}</div></div>;

export default Index;
