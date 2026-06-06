import { ArrowLeft, CheckCircle2, MessageCircle, ShieldCheck, Zap, Wallet, Users, Trophy, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import cricketLive from "@/assets/cricket-live-section.jpg";
import casinoBanner from "@/assets/casino-games-banner.jpg";

const whatsappUrl = "https://wa.link/reddyanna_";
const canonical = "https://www.lotus365ids.live/cricket-id";

const faqs = [
  { q: "What is an online cricket ID?", a: "An online cricket ID is a verified player account on a licensed betting exchange that lets you place real-money bets on live cricket matches, IPL, T20, and international fixtures. With Lotus365 IDs, your cricket ID is issued on WhatsApp in under 2 minutes and unlocks match odds, session markets, fancy bets, live casino, and instant UPI cashouts." },
  { q: "How fast can I get a new online cricket ID in India?", a: "Most new IDs from Lotus365 IDs are issued within 2 to 5 minutes on WhatsApp. Share your name and mobile number, choose a username, and our support team activates a verified online cricket ID with deposit and login details immediately." },
  { q: "Is it safe to create an online cricket ID with Lotus365 IDs?", a: "Yes. Every Lotus365 cricket ID is protected by SSL encryption, KYC verification, and segregated player wallets. No card details are stored, payments run through trusted UPI rails, and account access is locked behind a private username and password — never shared in public groups." },
  { q: "What is the minimum deposit on an online cricket ID?", a: "The minimum deposit is ₹100 through UPI, PhonePe, Google Pay, or Paytm. This keeps the platform accessible for beginners testing the best online sports betting platform for beginners while still letting pros scale up to large stakes." },
  { q: "How long do withdrawals take from a Lotus365 cricket ID?", a: "Verified withdrawals are processed in 5 to 30 minutes for UPI cashouts. Larger amounts may take up to 2 hours during peak IPL traffic, but there is no maximum withdrawal cap on a fully KYC-completed online cricket ID." },
  { q: "Can I use the same online cricket ID for IPL betting and live casino?", a: "Yes. One Lotus365 cricket ID unlocks IPL 2026, T20 leagues, international cricket, football, tennis, kabaddi, Teen Patti, Andar Bahar, roulette, and live casino games — all from one wallet." },
  { q: "What documents do I need for KYC on my online cricket ID?", a: "A clear photo of any Indian government ID (Aadhaar, PAN, voter ID, driving licence) and a selfie. KYC takes 5 to 30 minutes once submitted on WhatsApp and unlocks unlimited withdrawals." },
  { q: "How do I recover a lost or locked online cricket ID?", a: "Message lotus365ids.live on WhatsApp with your registered username — never share your password. Support runs a security check, resets access, and reactivates your cricket ID within minutes." },
  { q: "Are there any hidden charges on Lotus365 cricket ID deposits or withdrawals?", a: "No. Deposits and withdrawals on a Lotus365 online cricket ID are 100% free. No platform fee, no UPI charge, no withdrawal commission — what you win is what you receive." },
  { q: "Can I get a free trial online cricket ID before depositing?", a: "Yes — request a demo cricket ID on WhatsApp. You can explore the dashboard, market interface, live odds, and casino lobby before adding any funds." },
  { q: "Does Lotus365 offer a welcome bonus on a new cricket ID?", a: "Yes. New verified online cricket ID users receive a welcome bonus on the first deposit, plus ongoing cashback, refer-and-earn rewards, IPL leaderboards, and festival promotions through the Lotus 365 Club." },
  { q: "Is the Lotus365 cricket ID mobile friendly?", a: "Fully mobile-first. The Lotus365 online cricket ID runs as a fast progressive web experience on Android and iPhone browsers — no heavy app install, no storage hit, full live odds and cashout on the move." },
  { q: "What sports can I bet on with my online cricket ID?", a: "Cricket (IPL, T20, ODI, Test, BBL, PSL, county), football (Premier League, La Liga, ISL, World Cup), tennis Grand Slams, kabaddi (PKL), horse racing, basketball, and esports — all from a single Lotus365 cricket ID wallet." },
  { q: "Can I have more than one online cricket ID on Lotus365?", a: "Only one verified cricket ID is allowed per user to keep play fair and bonuses honest. If you need a separate account for a family member, support can guide them through a fresh KYC on their own mobile number." },
  { q: "Is online cricket betting legal in India?", a: "India has no central law that bans online cricket betting on offshore licensed platforms, and the activity is widely used by adult players across the country. Check your state-level rules, only play on licensed platforms, and treat your online cricket ID as entertainment — never as income." },
];

const steps = [
  { n: "01", title: "Open WhatsApp & message support", body: "Tap the WhatsApp button on this page. Send a single message: ‘I want a new online cricket ID’ along with your name and active mobile number. No forms, no captcha, no signup wall." },
  { n: "02", title: "Choose your username", body: "Pick a username you'll remember. Support checks availability instantly and reserves it for your verified online cricket ID along with a secure password." },
  { n: "03", title: "Receive ID, password & dashboard link", body: "Within 2 minutes you receive your Lotus365 cricket ID, password, and direct dashboard link. Login is one tap — bookmark it to your home screen for instant access." },
  { n: "04", title: "Deposit via UPI from ₹100", body: "Open the wallet, choose UPI / PhonePe / Google Pay / Paytm, scan or paste the QR, and confirm. Funds land in your cricket ID balance in under 60 seconds." },
  { n: "05", title: "Place your first cricket bet", body: "Pick a live IPL or T20 match, scan the odds, choose match winner, session runs, or a fancy market, set your stake, and confirm. Cash out anytime mid-play." },
  { n: "06", title: "Withdraw your winnings", body: "Tap withdraw, enter the UPI ID, confirm KYC if it's your first cashout, and watch the amount hit your bank in 5 to 30 minutes — no maximum cap, no hidden fees." },
];

const compare = [
  { feature: "ID creation time", us: "2 minutes on WhatsApp", them: "24–48 hours via signup form" },
  { feature: "Minimum deposit", us: "₹100 (UPI)", them: "₹500–₹1,000" },
  { feature: "Withdrawal speed", us: "5–30 minutes (UPI)", them: "1–3 working days" },
  { feature: "Withdrawal cap", us: "No maximum cap", them: "₹25,000 daily cap" },
  { feature: "KYC turnaround", us: "5–30 minutes", them: "2–5 days" },
  { feature: "Support channel", us: "24x7 WhatsApp + live chat", them: "Email only / ticket system" },
  { feature: "Welcome bonus", us: "Up to 400% on first deposit", them: "Flat ₹100 bonus" },
  { feature: "Sports & casino", us: "Cricket + 8 sports + live casino", them: "Cricket only" },
];

const trustSignals = [
  { icon: ShieldCheck, title: "SSL & KYC Protected", body: "256-bit SSL encryption on every session, segregated player wallets, and full KYC verification on every withdrawal." },
  { icon: Zap, title: "2-Minute ID Activation", body: "Verified online cricket ID issued on WhatsApp in under 2 minutes — the fastest cricket ID turnaround in India." },
  { icon: Wallet, title: "Instant UPI Cashouts", body: "Withdrawals settled in 5 to 30 minutes through UPI. Zero platform fee. No cap on a KYC-completed cricket ID." },
  { icon: Users, title: "Trusted by Lakhs of Players", body: "Active community across every Indian state, with thousands of verified IPL and T20 cashouts every week." },
  { icon: Trophy, title: "Big Wins, Real Payouts", body: "Verified ₹50K, ₹2L, even ₹15L IPL match wins paid out to UPI within the same evening." },
  { icon: Clock, title: "24x7 Human Support", body: "Real WhatsApp agents, not bots. Hindi and English support before, during, and after every match." },
];

const testimonials = [
  { name: "Rohit, Pune", quote: "Got my online cricket ID in 3 minutes, deposited ₹500 on MI vs CSK, walked away with ₹47,000 — UPI hit my bank before the post-match presentation ended.", win: "₹47,000 in 1 match" },
  { name: "Aakash, Delhi", quote: "I switched from another exchange because of the withdrawal delays. Lotus365 IDs paid me in 12 minutes. Now my whole IPL group uses it.", win: "12-minute payout" },
  { name: "Sneha, Bengaluru", quote: "Live Teen Patti from a real dealer, instant deposit, and friendly WhatsApp support that actually replies. Honestly nothing comes close.", win: "₹18,500 Teen Patti win" },
];

const internalLinks = [
  { href: "/signup", anchor: "create your free Lotus365 cricket ID" },
  { href: "/login", anchor: "Lotus365 login help" },
  { href: "/lotus365live-login-guide", anchor: "Lotus365 login guide step by step" },
  { href: "/lotus-cricket", anchor: "live IPL betting markets" },
  { href: "/lotusexchange", anchor: "Lotus 365 Club welcome bonuses" },
  { href: "/app-download", anchor: "Lotus365 mobile app download" },
  { href: "/blog/how-to-get-lotus365live-live-new-id-on-whatsapp-quickly", anchor: "how to get a new cricket ID on WhatsApp" },
  { href: "/blog/lotus365live-live-upi-payment-withdrawal-pending-help", anchor: "UPI deposit and withdrawal help" },
  { href: "/blog/lotus365live-live-kyc-document-issue-help-online-gaming", anchor: "KYC document verification guide" },
  { href: "/blog/how-to-bet-on-live-cricket-matches-online-step-by-step", anchor: "how to bet on live cricket matches online" },
  { href: "/blog/live-cricket-betting-tips-online-ipl-t20-india-2026", anchor: "live IPL & T20 betting tips" },
  { href: "/contact-us", anchor: "contact 24x7 WhatsApp support" },
];

const CricketId = () => (
  <main className="min-h-screen bg-muted text-foreground">
    <SEO
      title="Online Cricket ID in 2 Minutes | Lotus365 IDs India"
      description="Get a verified online cricket ID on WhatsApp in 2 minutes. ₹100 UPI deposit, 5-minute withdrawals, IPL 2026 markets, 24x7 support. Trusted by lakhs of Indian players."
      canonical={canonical}
      keywords="online cricket id, cricket id, online cricket betting id, cricket login, cricket exchange live, fastest cricket id online india, new cricket id whatsapp, ipl 2026 cricket id, lotus365 cricket id"
      schema={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Article",
            headline: "Online Cricket ID in 2 Minutes — The Complete 2026 Guide for Indian Players",
            description: "Create a verified online cricket ID on Lotus365 IDs in under 2 minutes. ₹100 UPI deposit, 5-minute withdrawals, IPL 2026 markets, live casino, and 24x7 WhatsApp support.",
            url: canonical,
            image: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/6d4d9b19-74ce-4cce-b064-9146234b15f0",
            mainEntityOfPage: canonical,
            articleSection: "Cricket ID Creation",
            inLanguage: "en-IN",
            author: { "@type": "Organization", name: "Lotus365 IDs", url: "https://www.lotus365ids.live/" },
            publisher: { "@type": "Organization", name: "Lotus365 IDs", url: "https://www.lotus365ids.live/" },
            datePublished: "2026-01-01",
            dateModified: "2026-06-01",
          },
          {
            "@type": "HowTo",
            name: "How to create an online cricket ID in India in under 2 minutes",
            description: "Step-by-step guide to create a verified Lotus365 online cricket ID on WhatsApp, deposit via UPI, place your first IPL bet, and withdraw winnings to your bank.",
            totalTime: "PT2M",
            step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.body })),
          },
          {
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lotus365ids.live/" },
              { "@type": "ListItem", position: 2, name: "Online Cricket ID", item: canonical },
            ],
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

      {/* HERO */}
      <section className="relative overflow-hidden bg-surface-strong px-5 py-10 text-center sm:px-8 lg:px-12 lg:py-16">
        <img src={cricketLive} alt="Online cricket ID hero — live IPL match betting dashboard on lotus365ids.live" className="absolute inset-0 h-full w-full object-cover opacity-30" loading="eager" />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative">
          <p className="text-sm font-black uppercase tracking-wide text-primary">India's Fastest Online Cricket ID</p>
          <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-light leading-[1.05] tracking-normal text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
            Get Your Online Cricket ID in 2 Minutes — IPL 2026 Ready
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base font-semibold leading-7 text-foreground sm:text-lg">
            Verified online cricket ID on WhatsApp in under 120 seconds. ₹100 UPI deposit. 5-minute withdrawals. No KYC delays. No hidden fees. Trusted by lakhs of Indian players across every IPL match week.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="gold" className="h-12 rounded-md px-8 text-base font-black">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">Get My Cricket ID Now</a>
            </Button>
            <Button asChild variant="whatsapp" className="h-12 rounded-md px-8 text-base font-black text-secondary-foreground">
              <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle className="!size-5" /> Chat on WhatsApp</a>
            </Button>
          </div>
          <p className="mt-4 text-xs font-black uppercase tracking-wide text-foreground/80">⚡ Only a few IDs left this IPL match week — activate yours before the next toss</p>
        </div>
      </section>

      {/* PAIN → AGITATE → SOLUTION */}
      <section className="bg-background px-5 pt-10 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-black leading-tight text-foreground lg:text-3xl">Tired of Slow IDs, UPI Failures, and Blocked Withdrawals?</h2>
        <p className="mt-4 text-base font-semibold leading-7 text-foreground/90">
          You came here because the last platform let you down. Maybe you waited two days for a cricket ID and the match was already over. Maybe your UPI deposit went through but the balance never showed up. Maybe you won big on an IPL final and then the withdrawal stayed “pending” for a week — until the account was quietly banned.
        </p>
        <p className="mt-3 text-base font-semibold leading-7 text-foreground/90">
          We hear this from new users every single day. The Indian online cricket betting space is full of fake agents, ghost websites, and exchanges that disappear the moment you win. That is exactly why we built Lotus365 IDs differently — one verified online cricket ID, one WhatsApp number, one team that picks up the phone when it matters most.
        </p>
        <p className="mt-3 text-base font-semibold leading-7 text-foreground/90">
          From the first message to the first cashout, the entire journey runs on real humans, licensed infrastructure, and UPI rails that settle in minutes. No fake bonuses. No mystery KYC delays. No banned-without-warning accounts. Just a clean online cricket ID built for Indian players who want to bet on live cricket without anxiety.
        </p>
      </section>

      {/* TRUST GRID */}
      <section className="bg-background px-5 pt-10 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-black leading-tight text-foreground lg:text-3xl">Why Lotus365 IDs Is the Most Trusted Online Cricket ID in India</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustSignals.map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-md bg-card p-5 shadow-panel">
              <Icon className="size-7 text-primary" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-black text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/85">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-background px-5 pt-10 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-black leading-tight text-foreground lg:text-3xl">How to Create Your Online Cricket ID — 6 Steps, 2 Minutes</h2>
        <p className="mt-3 text-base font-semibold leading-7 text-foreground/90">
          Follow this step-by-step process and you'll be betting on live IPL 2026 markets before the next over is bowled. No app install, no signup form, no waiting room.
        </p>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {steps.map((step) => (
            <li key={step.n} className="rounded-md bg-card p-5 shadow-panel">
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-md bg-primary text-base font-black text-primary-foreground">{step.n}</span>
                <h3 className="text-lg font-black text-foreground">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-foreground/85">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex justify-center">
          <Button asChild variant="gold" className="h-12 rounded-md px-8 text-base font-black">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">Start Step 1 — Open WhatsApp Now</a>
          </Button>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-background px-5 pt-10 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-black leading-tight text-foreground lg:text-3xl">Lotus365 Cricket ID vs. Other Online Cricket Betting Sites</h2>
        <p className="mt-3 text-base font-semibold leading-7 text-foreground/90">
          Real comparison, no marketing spin. Numbers verified against active player wallets and average competitor data from the Indian cricket exchange space in 2026.
        </p>
        <div className="mt-5 overflow-x-auto rounded-md bg-card shadow-panel">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-surface-strong text-xs font-black uppercase text-foreground">
              <tr>
                <th className="p-4">Feature</th>
                <th className="p-4 text-primary">Lotus365 Cricket ID</th>
                <th className="p-4">Typical Cricket Site</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-background" : ""}>
                  <td className="p-4 font-black text-foreground">{row.feature}</td>
                  <td className="p-4 font-semibold text-primary"><CheckCircle2 className="mr-1 inline size-4 align-text-bottom" />{row.us}</td>
                  <td className="p-4 text-foreground/80">{row.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background px-5 pt-10 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-black leading-tight text-foreground lg:text-3xl">Real Wins, Real Players, Real Online Cricket IDs</h2>
        <p className="mt-3 text-base font-semibold leading-7 text-foreground/90">
          Stories from verified Lotus365 IDs users across India. Names and cities shared with permission; payout amounts are real wallet records.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-md bg-card p-5 shadow-panel">
              <p className="text-sm leading-6 text-foreground/90">“{t.quote}”</p>
              <footer className="mt-4 flex items-center justify-between">
                <cite className="text-xs font-black uppercase not-italic text-foreground">{t.name}</cite>
                <span className="rounded-md bg-primary px-2 py-1 text-[0.65rem] font-black uppercase text-primary-foreground">{t.win}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* DEEP CONTENT */}
      <section className="bg-background px-5 pt-10 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-black leading-tight text-foreground lg:text-3xl">Everything You Can Do With Your Online Cricket ID</h2>

        <h3 className="mt-6 text-lg font-black leading-tight text-primary">Live IPL 2026 Markets at Your Fingertips</h3>
        <p className="mt-2 text-base font-semibold leading-7 text-foreground/90">
          Your Lotus365 online cricket ID unlocks every IPL 2026 fixture from the first ball of the season to the final. Match winner, top batsman, top bowler, powerplay totals, over-by-over session runs, fancy markets, and live cash-out are refreshed on every ball — exactly the toolkit serious cricket bettors need.
        </p>

        <h3 className="mt-5 text-lg font-black leading-tight text-primary">T20 Leagues, Internationals, and Domestic Cricket</h3>
        <p className="mt-2 text-base font-semibold leading-7 text-foreground/90">
          Beyond IPL, the same online cricket ID covers BBL, PSL, CPL, The Hundred, county cricket, ICC Men's and Women's World Cups, the WTC, ODI series, and domestic Ranji and Vijay Hazare tournaments. One wallet, one login, every cricket market that matters in India.
        </p>

        <h3 className="mt-5 text-lg font-black leading-tight text-primary">Live Casino, Teen Patti & Andar Bahar From One Wallet</h3>
        <p className="mt-2 text-base font-semibold leading-7 text-foreground/90">
          When the match ends, the night doesn't have to. Switch to live-dealer Teen Patti, Andar Bahar, roulette, blackjack, baccarat, Crazy Time, Lightning Roulette, and Aviator — all using the same online cricket ID balance. No second account, no reconciling wallets.
        </p>

        <h3 className="mt-5 text-lg font-black leading-tight text-primary">Instant UPI Deposits and 5-Minute Withdrawals</h3>
        <p className="mt-2 text-base font-semibold leading-7 text-foreground/90">
          UPI is the heartbeat of every Indian cricket ID. We support PhonePe, Google Pay, Paytm, BHIM, and direct bank UPI. Deposits land in your wallet inside 60 seconds. Withdrawals to a KYC-verified cricket ID settle in 5 to 30 minutes — no withdrawal cap, no slab tax, no platform charge.
        </p>

        <h3 className="mt-5 text-lg font-black leading-tight text-primary">A 24x7 WhatsApp Support Team That Picks Up</h3>
        <p className="mt-2 text-base font-semibold leading-7 text-foreground/90">
          Behind every Lotus365 online cricket ID is a real WhatsApp team available 24x7 — in Hindi and English — for new ID activation, login recovery, KYC, deposit issues, withdrawal status, bonus claims, and live match support. No bots, no IVR, no “your ticket is being reviewed.”
        </p>

        <h3 className="mt-5 text-lg font-black leading-tight text-primary">Responsible Play Built Into Every Cricket ID</h3>
        <p className="mt-2 text-base font-semibold leading-7 text-foreground/90">
          Your online cricket ID ships with deposit limits, session timeouts, loss caps, and self-exclusion. Use them. Cricket is entertainment — not a salary, not a loan-repayment plan. If betting ever stops feeling fun, message support and we'll pause your account, no questions asked.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-background px-5 pt-10 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-black leading-tight text-foreground lg:text-3xl">More Help Around Your Online Cricket ID</h2>
        <p className="mt-3 text-base font-semibold leading-7 text-foreground/90">
          New here? These guides walk you through every part of the Lotus365 IDs experience — from first signup to a fully verified online cricket betting workflow.
        </p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {internalLinks.map((link) => (
            <li key={link.href}>
              <Link to={link.href} className="block rounded-md bg-card px-4 py-3 text-sm font-black uppercase leading-snug text-foreground shadow-panel hover:text-primary">
                {link.anchor}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="bg-background px-5 pt-10 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-black leading-tight text-foreground lg:text-3xl">Online Cricket ID — Frequently Asked Questions</h2>
        <p className="mt-3 text-base font-semibold leading-7 text-foreground/90">
          The 15 questions Indian players ask most often before creating their first online cricket ID. Optimised for People Also Ask and Google rich-result eligibility.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-md bg-card p-4 shadow-panel">
              <summary className="cursor-pointer list-none text-base font-black leading-snug text-foreground group-open:text-primary">{f.q}</summary>
              <p className="mt-3 text-sm font-semibold leading-6 text-foreground/85">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-background px-5 pt-10 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-md border border-primary/40 bg-surface-strong p-6 text-center shadow-panel sm:p-8">
          <img src={casinoBanner} alt="Activate your Lotus365 online cricket ID before the next IPL toss" className="mx-auto mb-5 h-32 w-full rounded-md object-cover" loading="lazy" />
          <h2 className="text-3xl font-black leading-tight text-primary lg:text-4xl">The Next IPL Toss Is in Minutes. Be on the Right Side of It.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base font-semibold leading-7 text-foreground/90">
            Your online cricket ID is two messages away. Tap WhatsApp, send your name, and start placing live cricket bets before the powerplay ends. ₹100 minimum deposit. 5-minute withdrawals. Zero hidden charges.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="gold" className="h-12 rounded-md px-8 text-base font-black">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">⚡ Activate My Cricket ID</a>
            </Button>
            <Button asChild variant="whatsapp" className="h-12 rounded-md px-8 text-base font-black text-secondary-foreground">
              <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle className="!size-5" /> Chat With a Real Agent</a>
            </Button>
            <Button asChild variant="secondary" className="h-12 rounded-md px-8 text-base font-black text-secondary-foreground">
              <Link to="/signup">Create New ID</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs font-black uppercase tracking-wide text-foreground/80">⏱ IPL match-week IDs activate in under 2 minutes — claim yours before the next over</p>
        </div>
      </section>

      <Button asChild variant="secondary" className="fixed inset-x-0 bottom-0 z-50 mx-auto h-[70px] w-full max-w-[520px] rounded-t-md rounded-b-none text-xl font-black text-secondary-foreground shadow-panel sm:text-2xl">
        <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Lotus365 IDs now"><MessageCircle className="!size-[1.15em]" /> Get Cricket ID on WhatsApp</a>
      </Button>
    </div>
  </main>
);

export default CricketId;
