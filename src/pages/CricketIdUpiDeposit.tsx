import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Menu,
  X,
  Zap,
  ShieldCheck,
  Wallet,
  Clock,
  Trophy,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SEO from "@/components/SEO";
import hero from "@/assets/official-lotus365/cricket-id-upi-hero.jpg";

const whatsappUrl = "https://wa.link/reddyanna_";
const canonical =
  "https://www.lotus365ids.live/cricket-id-upi-deposit-ipl-2026";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Cricket ID", href: "/cricket-id" },
  { label: "Sign Up", href: "/signup" },
  { label: "About Us", href: "/about-us" },
  { label: "Lotusexchange", href: "/lotusexchange" },
  { label: "Lotus Cricket", href: "/lotus-cricket" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

const steps = [
  {
    n: "01",
    title: "Ping us on WhatsApp — bhai, ek line bas",
    body: "Tap the WhatsApp button, type ‘Mujhe IPL 2026 ke liye naya cricket ID chahiye’ with your name and mobile number. No long form, no OTP loop.",
  },
  {
    n: "02",
    title: "Lock your username in seconds",
    body: "Pick a username you'll remember at 11 PM during a Powerplay. Support checks availability live and reserves it on a verified online cricket ID.",
  },
  {
    n: "03",
    title: "Receive your ID, password & dashboard link",
    body: "Within 120 seconds you get a private message with your Lotus365 cricket ID, password, and one-tap dashboard link. Bookmark it to your home screen.",
  },
  {
    n: "04",
    title: "Deposit with UPI from just ₹100",
    body: "Open the wallet → choose UPI / PhonePe / Google Pay / Paytm → scan QR or paste VPA → confirm. Funds reflect in your cricket ID balance in under 60 seconds.",
  },
  {
    n: "05",
    title: "Place your first IPL 2026 bet",
    body: "Open the live match, scan match odds, session runs, or fancy markets, set your stake, confirm. Cash out mid-over if the game flips.",
  },
  {
    n: "06",
    title: "Instant UPI withdrawal of winnings",
    body: "Tap withdraw → enter UPI ID → confirm KYC (first time only) → money lands in your bank in 5 to 30 minutes. No cap, no hidden cut.",
  },
];

const longTailGroups = [
  {
    label: "Voice search (conversational)",
    items: [
      "Hey Google, how do I create a cricket ID for IPL 2026?",
      "Ok Google, kaunsa cricket ID UPI deposit accept karta hai instantly?",
      "Hey Siri, what is the fastest way to deposit on a cricket betting ID?",
      "Hey Google, is online cricket ID safe with UPI in India?",
      "Ok Google, how to withdraw IPL winnings to PhonePe instantly?",
    ],
  },
  {
    label: "How-to & instant",
    items: [
      "how to create cricket id and deposit with UPI instantly",
      "how to make cricket betting id with PhonePe in 2 minutes",
      "instant UPI deposit on online cricket id for IPL 2026",
      "how to add money to cricket id using Google Pay",
      "fastest UPI cricket id for IPL 2026 live betting",
    ],
  },
  {
    label: "Safety & trust (PAA)",
    items: [
      "is it safe to deposit on cricket id with UPI in India",
      "which cricket id is 100% safe for UPI withdrawals",
      "is online cricket id legal in India 2026",
      "how to verify a genuine cricket betting id on WhatsApp",
      "can my UPI be blocked for cricket id deposits",
    ],
  },
  {
    label: "Withdrawal & speed",
    items: [
      "instant cricket id UPI withdrawal in 5 minutes",
      "minimum withdrawal limit on Lotus365 cricket id",
      "no maximum withdrawal cap cricket id UPI 2026",
      "how long does cricket id UPI withdrawal take",
      "best cricket id for fast PhonePe withdrawal",
    ],
  },
  {
    label: "IPL 2026 & live betting",
    items: [
      "best online cricket id for IPL 2026 live betting",
      "lowest minimum deposit cricket id for IPL 2026",
      "cricket id with live session and fancy markets IPL 2026",
      "cricket id with cashout option for IPL 2026",
      "IPL 2026 cricket id with welcome bonus and UPI deposit",
    ],
  },
];

const compare = [
  { feature: "ID creation time", us: "120 seconds on WhatsApp", them: "24–48 hours signup form" },
  { feature: "Minimum UPI deposit", us: "₹100", them: "₹500 – ₹1,000" },
  { feature: "Deposit speed", us: "Under 60 seconds", them: "5 – 30 minutes" },
  { feature: "Withdrawal speed", us: "5 – 30 minutes (UPI)", them: "1 – 3 working days" },
  { feature: "Withdrawal cap", us: "No maximum cap", them: "₹25,000 daily cap" },
  { feature: "KYC turnaround", us: "5 – 30 minutes", them: "2 – 5 days" },
  { feature: "Support", us: "24×7 WhatsApp + live chat", them: "Email ticket only" },
  { feature: "IPL 2026 markets", us: "Match, session, fancy, cashout", them: "Match odds only" },
];

const faqs = [
  {
    q: "How do I create a cricket ID and deposit with UPI instantly?",
    a: "Message Lotus365 IDs on WhatsApp with your name and mobile number, pick a username, and you'll get your verified online cricket ID within 120 seconds. Open the wallet, choose UPI / PhonePe / Google Pay / Paytm, scan the QR, confirm — funds reflect in your cricket ID balance in under 60 seconds.",
  },
  {
    q: "Is creating an online cricket ID for IPL 2026 safe?",
    a: "Yes. Lotus365 IDs uses SSL encryption, KYC verification, and segregated player wallets. Your UPI runs through trusted bank rails, no card data is stored, and your account is locked behind a private username and password — never shared in public groups.",
  },
  {
    q: "What is the minimum UPI deposit on a Lotus365 cricket ID?",
    a: "The minimum UPI deposit is ₹100. You can use PhonePe, Google Pay, Paytm, BHIM, or any UPI-enabled bank app. There is no upper cap for verified players.",
  },
  {
    q: "How fast is the UPI withdrawal from a cricket ID?",
    a: "Verified UPI withdrawals are processed in 5 to 30 minutes. During peak IPL 2026 traffic some cashouts may take up to 2 hours, but there is no maximum withdrawal cap on a fully KYC-completed cricket ID.",
  },
  {
    q: "Will my UPI app work for cricket ID deposits in 2026?",
    a: "Yes. PhonePe, Google Pay, Paytm, Cred, Amazon Pay, BHIM, and direct bank UPI all work on Lotus365 cricket IDs. If one app shows a delay, support shares an alternate VPA so your deposit never gets stuck.",
  },
  {
    q: "Is online cricket betting legal in India in 2026?",
    a: "There is no central Indian law that bans betting on offshore licensed platforms, and adult players use them across the country. Check your state-level rules, only play on licensed cricket IDs, and treat the activity as entertainment — not income.",
  },
  {
    q: "How long does it take to get a new cricket ID for IPL 2026?",
    a: "Most new IDs are issued within 2 minutes on WhatsApp. You receive your username, password, and dashboard link in a single private message — no waiting for email verification, no captcha loops.",
  },
  {
    q: "Can I withdraw IPL 2026 winnings directly to PhonePe?",
    a: "Yes. Tap withdraw, enter your PhonePe / Google Pay / bank UPI ID, confirm KYC if it is your first cashout, and the amount lands in 5 to 30 minutes. No conversion, no commission.",
  },
  {
    q: "What documents are needed for KYC on a cricket betting ID?",
    a: "Any Indian government photo ID (Aadhaar, PAN, voter ID, driving licence) and a selfie. KYC is completed on WhatsApp in 5 to 30 minutes and unlocks unlimited withdrawals.",
  },
  {
    q: "Is there a welcome bonus on a new cricket ID for IPL 2026?",
    a: "Yes. New verified cricket IDs receive a first-deposit welcome bonus, IPL leaderboards, cashback on losses, and refer-and-earn credits through the Lotus 365 Club.",
  },
  {
    q: "Can I bet on live cricket sessions and fancy markets?",
    a: "Yes. Every Lotus365 cricket ID unlocks match odds, session runs, fancy markets, over-by-over lines, dismissal markets, and live cashout for all IPL 2026, T20, ODI, and Test fixtures.",
  },
  {
    q: "What is the cashout option in IPL 2026 cricket betting?",
    a: "Cashout lets you settle an open bet early — locking in a partial win or limiting a loss before the match ends. It's available on most pre-match and in-play IPL 2026 markets on your Lotus365 cricket ID.",
  },
  {
    q: "Can I use one cricket ID for cricket, football and casino?",
    a: "Yes. One Lotus365 cricket ID wallet covers IPL 2026, T20 leagues, international cricket, football, tennis, kabaddi, Teen Patti, Andar Bahar, roulette, and live casino — single login, single balance.",
  },
  {
    q: "What if my UPI deposit fails or gets stuck?",
    a: "Screenshot the failed transaction and send it on WhatsApp. Support reconciles with the payment partner and credits your cricket ID within 10 to 20 minutes — or refunds your UPI instantly if reconciliation fails.",
  },
  {
    q: "Is there a charge on cricket ID UPI deposits or withdrawals?",
    a: "No. Every UPI deposit and withdrawal on a Lotus365 cricket ID is 100% free. No platform fee, no UPI charge, no withdrawal commission. What you win is what you receive.",
  },
  {
    q: "How do I recover a locked or lost cricket ID?",
    a: "Message support on WhatsApp with your registered username — never share your password. A security check is run and access is restored within minutes on the same cricket ID.",
  },
  {
    q: "Can I get a free demo cricket ID before depositing?",
    a: "Yes — request a demo cricket ID on WhatsApp. Explore the live dashboard, market interface, IPL 2026 odds, and casino lobby before adding any funds.",
  },
  {
    q: "How many cricket IDs can I create on Lotus365?",
    a: "One verified cricket ID per user. This keeps play fair and bonuses honest. Family members can open separate IDs from their own mobile number and KYC.",
  },
  {
    q: "What is the minimum withdrawal amount from a cricket ID?",
    a: "₹500 minimum withdrawal via UPI. There is no maximum cap on a fully KYC-completed cricket ID, even during IPL 2026 finals.",
  },
  {
    q: "Does Lotus365 cricket ID work on Android and iPhone?",
    a: "Yes. The cricket ID runs as a fast progressive web app on Android and iPhone browsers — no heavy install, no storage hit, full live odds and instant UPI cashout on the move.",
  },
  {
    q: "Which is the best cricket ID for IPL 2026 with instant UPI?",
    a: "Lotus365 IDs is built specifically for IPL 2026 — 120-second ID creation, ₹100 UPI deposit, 5–30 minute UPI withdrawal, live session and fancy markets, no withdrawal cap, and 24×7 WhatsApp support.",
  },
];

const trust = [
  { icon: Zap, title: "120-second activation", body: "Verified cricket ID issued in under 2 minutes on WhatsApp — fastest in India." },
  { icon: Wallet, title: "₹100 UPI deposit", body: "Lowest entry in the market. PhonePe, Google Pay, Paytm, BHIM — all live." },
  { icon: Clock, title: "5–30 min withdrawals", body: "UPI cashouts hit your bank inside 30 minutes, with no maximum cap." },
  { icon: ShieldCheck, title: "Bank-grade safety", body: "SSL, KYC, segregated wallets. Your card data is never stored." },
  { icon: Trophy, title: "IPL 2026 ready", body: "Match odds, session runs, fancy markets, live cashout — every fixture." },
  { icon: Smartphone, title: "Mobile-first PWA", body: "No heavy app install. Works on every Android and iPhone browser." },
];

const internalLinks = [
  { href: "/cricket-id", label: "official cricket ID page" },
  { href: "/signup", label: "sign up for a new Lotus365 ID" },
  { href: "/login", label: "Lotus365 login" },
  { href: "/lotus-cricket", label: "Lotus Cricket live markets" },
  { href: "/lotusexchange", label: "Lotusexchange platform" },
  { href: "/lotus365live-login-guide", label: "Lotus365 login guide" },
  { href: "/about-us", label: "about Lotus365 IDs" },
  { href: "/contact-us", label: "24x7 contact & support" },
  { href: "/blog", label: "cricket & casino blog" },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lotus365ids.live/" },
        { "@type": "ListItem", position: 2, name: "Cricket ID", item: "https://www.lotus365ids.live/cricket-id" },
        { "@type": "ListItem", position: 3, name: "Cricket ID + UPI Deposit IPL 2026", item: canonical },
      ],
    },
    {
      "@type": "HowTo",
      name: "How to create a cricket ID and deposit with UPI instantly for IPL 2026",
      description:
        "Step-by-step guide to create a verified Lotus365 online cricket ID on WhatsApp in 2 minutes and deposit instantly via UPI for IPL 2026.",
      totalTime: "PT2M",
      estimatedCost: { "@type": "MonetaryAmount", currency: "INR", value: "100" },
      step: steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.title,
        text: s.body,
      })),
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
      "@type": "WebPage",
      "@id": canonical,
      url: canonical,
      name: "Cricket ID + UPI Deposit Instantly for IPL 2026 | Lotus365 IDs",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#hero-answer", "#voice-summary", "#faq-voice"],
      },
    },
  ],
};

const CricketIdUpiDeposit = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-muted text-foreground">
      <SEO
        title="Cricket ID + UPI Deposit Instant | IPL 2026 | Lotus365"
        description="Create a cricket ID in 120 seconds and deposit via UPI instantly for IPL 2026. ₹100 minimum, 5–30 min withdrawals, 24×7 WhatsApp support."
        canonical={canonical}
        keywords="how to create cricket id and deposit with UPI instantly, IPL 2026 cricket id, instant UPI cricket id, PhonePe cricket id, online cricket id India 2026"
        schema={schema}
        ogImage={hero}
        ogType="article"
      />

      <div className="mx-auto min-h-screen w-full max-w-[1180px] overflow-hidden bg-background pb-[86px] shadow-panel lg:pb-28">
        <header className="sticky top-0 z-40 flex min-h-[60px] items-center justify-between gap-3 border-b-[3px] border-border bg-background px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" className="rounded-md shrink-0">
              <Link to="/" aria-label="Back to Lotus365 IDs home">
                <ArrowLeft className="size-6" />
              </Link>
            </Button>
            <Link
              to="/"
              className="text-xl font-black uppercase leading-none tracking-wide"
              aria-label="Lotus365 IDs home"
            >
              <span className="text-foreground">LOTUS</span>
              <span className="text-primary">365</span>
            </Link>
          </div>
          <nav className="hidden items-center gap-4 text-sm font-medium lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.label} to={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="gold" className="hidden rounded-xl px-4 py-2 font-black lg:flex">
              <Link to="/signup">Get my ID</Link>
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="grid size-10 shrink-0 place-items-center rounded-md bg-card lg:hidden"
              aria-label="Toggle mobile menu"
            >
              {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
          {menuOpen && (
            <nav
              className="absolute right-3 top-16 grid w-[min(18rem,calc(100vw-1.5rem))] gap-1 rounded-md border border-border bg-card p-2 text-base font-medium shadow-panel lg:hidden"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-2 hover:bg-background hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </header>

        {/* HERO */}
        <section className="relative overflow-hidden bg-surface-strong px-5 py-10 sm:px-8 lg:px-12 lg:py-16">
          <img
            src={hero}
            alt="Smartphone showing instant UPI deposit confirmation for an IPL 2026 cricket ID at a floodlit stadium"
            width={1600}
            height={900}
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
          <div className="relative max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
              IPL 2026 · Instant UPI · 120-second ID
            </p>
            <h1
              id="hero-answer"
              className="mt-3 font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              How to create a cricket ID and deposit with UPI instantly for IPL 2026
            </h1>
            <p className="mt-5 text-base leading-7 text-foreground/85 sm:text-lg">
              Short answer: message Lotus365 IDs on WhatsApp, pick a username, get your verified
              cricket ID in <strong className="text-primary">under 120 seconds</strong>, then deposit
              from <strong className="text-primary">₹100 via PhonePe, Google Pay, Paytm or any UPI app</strong> —
              funds land in your wallet in under 60 seconds. Withdrawals hit your bank in 5 to 30 minutes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="gold" className="h-12 rounded-xl px-6 font-black">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-5" /> Get my cricket ID in 2 minutes
                </a>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-xl px-6 font-bold">
                <Link to="/cricket-id">See full cricket ID page</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* VOICE SUMMARY */}
        <section id="voice-summary" className="border-b border-border bg-background px-5 py-8 sm:px-8 lg:px-12">
          <h2 className="text-2xl font-black leading-tight">Quick answer for voice search & AI overviews</h2>
          <p className="mt-3 text-base leading-7 text-foreground/90">
            To create a cricket ID and deposit with UPI instantly for IPL 2026, open WhatsApp,
            message Lotus365 IDs with your name and mobile number, and choose a username. You
            receive a verified online cricket ID in 120 seconds. From the wallet, select UPI,
            scan the QR or paste the VPA on PhonePe, Google Pay, or Paytm, confirm the ₹100
            minimum deposit, and your cricket ID balance updates within 60 seconds. Withdrawals
            land in your bank in 5 to 30 minutes through the same UPI rail.
          </p>
        </section>

        {/* TRUST GRID */}
        <section className="bg-background px-5 py-10 sm:px-8 lg:px-12">
          <h2 className="text-2xl font-black leading-tight">Why players pick a Lotus365 cricket ID for IPL 2026</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {trust.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-border/60 bg-card p-4 shadow-panel">
                <Icon className="size-6 text-primary" />
                <h3 className="mt-3 text-base font-black">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-foreground/80">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* STEP BY STEP HOWTO */}
        <section className="bg-background px-5 py-10 sm:px-8 lg:px-12">
          <h2 className="text-2xl font-black leading-tight">
            How do I create a cricket ID and deposit with UPI instantly? — 6 steps
          </h2>
          <p className="mt-3 text-base leading-7 text-foreground/85">
            Bhai, the whole flow takes less than 5 minutes end to end. Here's exactly what
            happens — short, voice-friendly, and in the order support walks you through it.
          </p>
          <ol className="mt-5 grid gap-3">
            {steps.map((s) => (
              <li
                key={s.n}
                className="rounded-xl border border-border/60 bg-card p-4 shadow-panel sm:flex sm:gap-4"
              >
                <span className="font-serif text-3xl font-light text-primary">{s.n}</span>
                <div className="mt-2 sm:mt-0">
                  <h3 className="text-base font-black">{s.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-foreground/85">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* COMPARISON TABLE */}
        <section className="bg-background px-5 py-10 sm:px-8 lg:px-12">
          <h2 className="text-2xl font-black leading-tight">
            How is Lotus365 cricket ID different from a regular signup site?
          </h2>
          <div className="mt-5 overflow-x-auto rounded-xl border border-border/60 shadow-panel">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead className="text-primary">Lotus365 IDs</TableHead>
                  <TableHead>Regular signup site</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {compare.map((row) => (
                  <TableRow key={row.feature}>
                    <TableCell className="font-semibold">{row.feature}</TableCell>
                    <TableCell className="font-black text-primary">{row.us}</TableCell>
                    <TableCell className="text-foreground/70">{row.them}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* SAFETY */}
        <section className="bg-background px-5 py-10 sm:px-8 lg:px-12">
          <h2 className="text-2xl font-black leading-tight">Is it safe to deposit on a cricket ID using UPI?</h2>
          <p className="mt-3 text-base leading-7 text-foreground/85">
            Short answer — yes, when you use a licensed cricket ID like Lotus365. Your UPI
            payment never leaves the bank-grade rails of PhonePe, Google Pay, Paytm, BHIM or
            your bank's app. We don't store card data, we don't ask for OTPs, and we don't
            share your username in any public group. Every cricket ID is locked behind your
            own password, KYC, and a segregated player wallet — so your IPL 2026 balance is
            ring-fenced from operating funds.
          </p>
          <h3 className="mt-6 text-lg font-black">What to check before any UPI deposit</h3>
          <ul className="mt-2 space-y-2 text-sm leading-6 text-foreground/85">
            {[
              "The VPA / QR code is shared by the verified Lotus365 IDs WhatsApp number only",
              "The dashboard URL starts with https:// and shows lotus365ids.live",
              "Your username is private — never paste it in any Telegram or public group",
              "Withdrawal UPI ID is in your own name (matches KYC) to keep cashouts instant",
              "Enable UPI app limits and 2-factor login on your bank app for extra safety",
            ].map((line) => (
              <li key={line} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* KEYWORD CLUSTER */}
        <section className="bg-background px-5 py-10 sm:px-8 lg:px-12">
          <h2 className="text-2xl font-black leading-tight">
            What people actually ask Google & voice assistants about cricket IDs in 2026
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {longTailGroups.map((group) => (
              <div key={group.label} className="rounded-xl border border-border/60 bg-card p-4 shadow-panel">
                <h3 className="text-sm font-black uppercase tracking-wide text-primary">{group.label}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground/85">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* DEEP GUIDE */}
        <section className="bg-background px-5 py-10 sm:px-8 lg:px-12">
          <h2 className="text-2xl font-black leading-tight">
            Full guide — picking, funding, and winning on a cricket ID for IPL 2026
          </h2>

          <h3 className="mt-6 text-lg font-black">What is an online cricket ID, in plain Hinglish?</h3>
          <p className="mt-2 text-base leading-7 text-foreground/85">
            Soch lo, ek online cricket ID is your personal player account on a licensed betting
            exchange. It stores your wallet, your IPL 2026 bets, your cashouts, and your bonus
            ledger. The difference between a good ID and a random one? Speed, safety, and the
            quality of markets. A Lotus365 cricket ID gives you live match odds, session runs,
            fancy markets, dismissal lines, and a one-tap cashout on every IPL fixture.
          </p>

          <h3 className="mt-6 text-lg font-black">Why UPI is the best way to deposit on a cricket ID</h3>
          <p className="mt-2 text-base leading-7 text-foreground/85">
            UPI is instant, free, and works directly from your bank — no card numbers, no OTPs
            for cricket ID deposits, no waiting. PhonePe, Google Pay, Paytm, BHIM, Amazon Pay,
            and Cred all push the same UPI message to your bank in under a second. That's why
            every serious Indian player uses UPI for cricket ID deposits in 2026: zero friction,
            zero leakage.
          </p>

          <h3 className="mt-6 text-lg font-black">Best UPI apps for cricket ID deposits in 2026</h3>
          <ul className="mt-2 space-y-2 text-sm leading-6 text-foreground/85">
            {[
              "PhonePe — fastest in our internal logs, best for ₹100 to ₹50,000 deposits",
              "Google Pay — reliable, clean failure handling, great for repeat deposits",
              "Paytm — solid backup if your primary UPI app shows a daily limit warning",
              "BHIM — direct NPCI rail, the safest fallback during IPL 2026 traffic spikes",
              "Cred — works smoothly for premium players doing larger one-shot deposits",
            ].map((line) => (
              <li key={line} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-lg font-black">How to withdraw IPL 2026 winnings to your UPI in 5 minutes</h3>
          <p className="mt-2 text-base leading-7 text-foreground/85">
            Tap withdraw inside your cricket ID dashboard, enter the UPI ID that matches your
            KYC name, confirm the amount (minimum ₹500), and tap submit. You'll see a payout
            reference on WhatsApp instantly, and the money will hit your bank in 5 to 30
            minutes. No cap, no commission, no wait for working days.
          </p>

          <h3 className="mt-6 text-lg font-black">Common deposit & withdrawal mistakes to avoid</h3>
          <ul className="mt-2 space-y-2 text-sm leading-6 text-foreground/85">
            {[
              "Using a UPI ID in a different name than your KYC — withdrawals get delayed",
              "Sending UPI to a number shared outside the official Lotus365 IDs WhatsApp",
              "Hitting your bank's daily UPI cap — split deposits across two UPI apps",
              "Forgetting to take a screenshot of failed UPI — needed for instant reconciliation",
              "Sharing your cricket ID username in any public group — never do this",
            ].map((line) => (
              <li key={line} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-lg font-black">IPL 2026 betting markets unlocked by your cricket ID</h3>
          <ul className="mt-2 space-y-2 text-sm leading-6 text-foreground/85">
            {[
              "Match winner odds — pre-match and in-play, refreshed every 2 seconds",
              "Session runs — over 6, over 10, over 15, innings totals",
              "Fancy markets — top batter, top bowler, total fours/sixes, lunch/dinner lines",
              "Dismissal markets — method of next wicket, fall of wicket, partnership runs",
              "Live cashout — settle any open IPL 2026 bet early to lock profit or limit loss",
            ].map((line) => (
              <li key={line} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* INTERNAL LINKS */}
        <section className="bg-background px-5 py-10 sm:px-8 lg:px-12">
          <h2 className="text-2xl font-black leading-tight">Related Lotus365 pages worth bookmarking</h2>
          <p className="mt-3 text-base leading-7 text-foreground/85">
            Once your cricket ID is live, these pages help you go deeper — from the{" "}
            {internalLinks.slice(0, 4).map((l, i, arr) => (
              <span key={l.href}>
                <Link to={l.href} className="text-primary underline-offset-4 hover:underline">
                  {l.label}
                </Link>
                {i < arr.length - 1 ? ", " : ""}
              </span>
            ))}{" "}
            to the{" "}
            {internalLinks.slice(4).map((l, i, arr) => (
              <span key={l.href}>
                <Link to={l.href} className="text-primary underline-offset-4 hover:underline">
                  {l.label}
                </Link>
                {i < arr.length - 1 ? ", " : ""}
              </span>
            ))}
            .
          </p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {internalLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="rounded-md border border-border/60 bg-card p-3 text-sm font-black uppercase leading-snug shadow-panel hover:border-primary/40 hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq-voice" className="bg-background px-5 py-10 sm:px-8 lg:px-12">
          <h2 className="text-2xl font-black leading-tight">
            Cricket ID + UPI FAQ — answers optimised for voice & AI overviews
          </h2>
          <Accordion type="single" collapsible className="mt-5">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`q-${i}`} className="border-border/60">
                <AccordionTrigger className="text-left text-base font-black hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-foreground/85">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* FINAL CTA */}
        <section className="bg-surface-strong px-5 py-10 text-center sm:px-8 lg:px-12">
          <h2 className="font-serif text-3xl font-light leading-tight sm:text-4xl">
            Your IPL 2026 cricket ID is two minutes away
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-foreground/85">
            Bhai, IPL 2026 is loading. Ping us on WhatsApp now — verified ID in 120 seconds,
            ₹100 UPI deposit, 5–30 minute withdrawals, full live markets on every match.
          </p>
          <Button asChild variant="gold" className="mt-6 h-12 rounded-xl px-8 font-black">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="size-5" /> Create my cricket ID now
            </a>
          </Button>
        </section>

        <Button
          asChild
          variant="secondary"
          className="fixed inset-x-0 bottom-0 z-50 mx-auto h-[70px] w-full max-w-[520px] rounded-t-md rounded-b-none text-xl font-black text-secondary-foreground shadow-panel sm:text-2xl"
        >
          <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Lotus365 IDs now">
            <MessageCircle className="!size-[1.15em]" /> Whatsapp Us Now
          </a>
        </Button>
      </div>
    </main>
  );
};

export default CricketIdUpiDeposit;
