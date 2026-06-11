import { MessageCircle, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SEO from "@/components/SEO";
import trustImage from "@/assets/official-lotus365/trust.png";
import worksImage from "@/assets/official-lotus365/how-it-works.png";
import bettingImage from "@/assets/official-lotus365/betting-site.png";
import exploreImage from "@/assets/official-lotus365/explore.png";
import bonusImage from "@/assets/official-lotus365/bonuses.png";
import whatsappScreen from "@/assets/official-lotus365/whatsapp-screen.png";

const whatsappUrl = "https://wa.link/reddyanna_";
const siteUrl = "https://www.lotus365ids.live";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Sign Up", href: "/signup" },
  { label: "About Us", href: "/about-us" },
  { label: "Lotusexchange", href: "/lotusexchange" },
  { label: "Lotus Cricket", href: "/lotus-cricket" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

const pages = {
  login: {
    title: "Lotus365 Login Help | Member Access & ID Support",
    description: "Lotus365 login help for member access, username support, password reset guidance, cricket ID, VIP help, and quick WhatsApp assistance.",
    canonical: `${siteUrl}/login`,
    eyebrow: "Lotus365 Login / VIP",
    heading: "Log In to Lotus365 and Activate Your Online Cricket ID",
    text: "Enter your details to continue with Lotus365 support — login help, new ID setup, bonus information, deposit guidance, and quick account access.",
    image: bettingImage,
    imageAlt: "Log in on lotus365ids.live and start playing online cricket instantly",
    form: true,
  },
  signup: {
    title: "Lotus365 Sign Up | Create New Cricket ID Online",
    description: "Lotus365 signup support to create a new cricket ID with mobile verification guidance, deposit help, bonus details, and 24x7 WhatsApp assistance.",
    canonical: `${siteUrl}/signup`,
    eyebrow: "Create New ID",
    heading: "Lotus365 Sign Up and New ID Support",
    text: "Start your Lotus365 account request — simple guidance for mobile number registration, ID creation, verification, deposits, bonus details, and first login support.",
    image: worksImage,
    imageAlt: "Get your free cricket ID on lotus365ids.live and start playing",
  },
  "about-us": {
    title: "About Lotus365 IDs | Platform & Support Info",
    description: "Learn about Lotus365 IDs support for Lotus365 India, safety guidance, cricket ID help, casino access, payments, and gaming assistance.",
    canonical: `${siteUrl}/about-us`,
    eyebrow: "About Us",
    heading: "Get to Know the Official Lotus365 Platform",
    text: "Lotus365 India is built for real Indian players who need fast account help, safe payments, responsive gaming access, and clear support for both cricket and casino play.",
    image: trustImage,
    imageAlt: "lotus365ids.live — a trusted online sports gaming platform for Indian players",
  },
  lotusexchange: {
    title: "Lotusexchange Bonus Help | Lotus365 Offers Support",
    description: "Lotusexchange bonus help for welcome offers, deposit rewards, referral support, weekly contests, festival specials, and VIP club information.",
    canonical: `${siteUrl}/lotusexchange`,
    eyebrow: "Lotusexchange",
    heading: "Exclusive Lotus 365 Club Bonuses for Indian Players",
    text: "Welcome bonuses, deposit rewards, referral offers, weekly contests, festival specials, and Lotus 365 Club VIP details — find support for all of them here.",
    image: bonusImage,
    imageAlt: "Claim a welcome bonus on Lotusexchange and win bigger rewards",
  },
  "lotus-cricket": {
    title: "Lotus Cricket – Live Cricket Experience, Match Insights & Real-Time Updates",
    description: "Lotus Cricket is a dedicated destination for cricket enthusiasts — live updates, IPL betting markets, match schedules, real-time scores, player insights, and secure cricket ID support.",
    canonical: `${siteUrl}/lotus-cricket`,
    eyebrow: "Lotus Cricket",
    heading: "Lotus Cricket – Live Cricket Experience, Match Insights & Real-Time Updates",
    text: "Lotus Cricket is a dedicated destination for cricket enthusiasts who want to stay connected with every moment of the game. From international tournaments and T20 leagues to ODI and Test matches, Lotus Cricket offers live updates, match information, team statistics, player insights, and real-time score tracking.",
    image: exploreImage,
    imageAlt: "Bet online on live IPL matches with a lotus365ids.live cricket ID",
  },
  "contact-us": {
    title: "Contact Lotus365 IDs | Cricket ID & Casino Support",
    description: "Contact Lotus365 IDs on WhatsApp for cricket ID support, Lotus365 login help, casino account access, KYC, withdrawals, bonuses, and deposits.",
    canonical: `${siteUrl}/contact-us`,
    eyebrow: "Contact Us",
    heading: "Chat With Our Team on WhatsApp to Get Your Official Lotus365 ID",
    text: "Contact Lotus365 IDs support on WhatsApp for new cricket ID requests, Lotus365 login help, casino account access, KYC document guidance, deposit confirmation, withdrawal updates, bonus claim questions, and mobile support.",
    image: whatsappScreen,
    imageAlt: "Chat with lotus365ids.live on WhatsApp and get a cricket ID instantly",
  },
};

const cricketFaqs = [
  { q: "What is Lotus365IDs Cricket?", a: "Lotus365IDs Cricket is a dedicated platform where cricket enthusiasts can access live cricket betting markets, real-time odds, match updates, and secure betting services. The platform covers major cricket tournaments from around the world, including the IPL, ICC Cricket World Cup, T20 World Cup, Champions Trophy, Asia Cup, Big Bash League, Pakistan Super League, and many other domestic and international competitions." },
  { q: "How can I get a Lotus365IDs Cricket ID?", a: "Getting a Lotus365IDs Cricket ID is quick and straightforward. Simply contact our support team through WhatsApp or the official registration channels, provide the required basic information, complete the verification process, and receive your login credentials. Once your account is activated, you can deposit funds and start accessing live cricket markets immediately." },
  { q: "Why should I choose Lotus365IDs for cricket betting?", a: "Lotus365IDs offers a secure and user-friendly betting environment with competitive odds, instant account activation, fast withdrawals, live match tracking, and reliable customer support. The platform is designed specifically for Indian cricket fans who want a smooth and efficient betting experience." },
  { q: "Does Lotus365IDs cover IPL betting?", a: "Yes, Lotus365IDs provides extensive IPL betting markets throughout the season. Users can place bets on match winners, top batsmen, top bowlers, session results, total runs, player performances, and many other betting options." },
  { q: "Can I bet on international cricket matches through Lotus365IDs?", a: "Absolutely. Lotus365IDs covers international cricket events including ICC tournaments, bilateral series, Test matches, One Day Internationals (ODIs), and T20 Internationals. Users can access betting markets before and during live matches." },
  { q: "Is Lotus365IDs available on mobile devices?", a: "Yes, Lotus365IDs is fully optimized for mobile users. Whether you use Android, iPhone, or a tablet, you can access your account, place bets, monitor odds, and manage transactions directly from your device." },
  { q: "How secure is Lotus365IDs?", a: "Security is a top priority at Lotus365IDs. The platform uses advanced encryption technologies, secure payment gateways, and strict verification procedures to protect user information and financial transactions." },
  { q: "What payment methods are supported on Lotus365IDs?", a: "Lotus365IDs supports a variety of payment options commonly used in India, including UPI, bank transfers, digital wallets, and other secure online payment methods." },
  { q: "How quickly are withdrawals processed?", a: "Withdrawal requests on Lotus365IDs are processed as quickly as possible. The platform is known for fast settlements and smooth transaction handling." },
  { q: "Does Lotus365IDs offer live cricket betting?", a: "Yes, live cricket betting is one of the key features of Lotus365IDs. Users can place bets while the match is in progress, with odds updating in real time based on match situations." },
  { q: "What cricket betting markets are available on Lotus365IDs?", a: "Lotus365IDs offers a wide range of cricket betting markets including match winner, toss winner, session betting, total runs, total wickets, player performance bets, top batsman, top bowler, partnership runs, over-by-over betting, and many other specialized markets." },
  { q: "Can beginners use Lotus365IDs?", a: "Yes. Lotus365IDs is designed to accommodate both new and experienced users. The platform offers a simple interface, easy navigation, and support assistance to help beginners understand the betting process." },
  { q: "Is customer support available 24/7?", a: "Yes, Lotus365IDs provides round-the-clock customer support. Users can contact the support team through WhatsApp and other official channels for assistance with registration, account management, deposits, withdrawals, and general inquiries." },
  { q: "How do I log in to my Lotus365IDs Cricket account?", a: "After receiving your Cricket ID and password, simply visit the official Lotus365IDs website, enter your login credentials, complete any required verification steps, and access your account." },
  { q: "What makes Lotus365IDs different from other cricket betting platforms?", a: "Lotus365IDs stands out because of its quick account approval process, competitive cricket odds, reliable payment systems, fast withdrawals, secure infrastructure, and dedicated customer support tailored to Indian users." },
  { q: "Can I track live scores on Lotus365IDs?", a: "Yes, Lotus365IDs provides real-time cricket score updates, live match information, and ongoing match statistics. Users can stay informed about match developments while accessing betting opportunities simultaneously." },
  { q: "Does Lotus365IDs provide betting options for ICC tournaments?", a: "Yes, users can access betting markets for major ICC events including the ICC Cricket World Cup, ICC T20 World Cup, ICC Champions Trophy, and other international cricket competitions." },
  { q: "Is registration mandatory to use Lotus365IDs?", a: "Yes, users must register and obtain a valid Cricket ID before accessing betting services. Registration helps maintain account security and ensures a safe betting environment." },
  { q: "Can I use Lotus365IDs throughout the year?", a: "Yes, Lotus365IDs operates year-round and provides access to cricket betting markets across multiple tournaments and international series. There is always cricket action available." },
  { q: "How can I contact Lotus365IDs support?", a: "You can contact Lotus365IDs support through the official WhatsApp channel or the customer support section on the website. The support team is available to help with account setup, verification, transactions, and technical assistance." },
];

const contactHelpTopics = [
  { title: "New Cricket ID Support", text: "Ask for help on WhatsApp with creating a Lotus365 cricket ID, mobile verification, first login steps, and account setup guidance." },
  { title: "Lotus365 Login Help", text: "Get support for username login, password issues, locked account problems, mobile login errors, and secure account recovery." },
  { title: "Casino Account Access", text: "Contact support for casino login help, Teen Patti access, live casino account issues, bonus questions, and fast response guidance." },
  { title: "KYC and Verification Help", text: "Clearly mention the type of KYC issue — pending document, rejected document, account verification, or details mismatch — to get clear guidance." },
  { title: "Deposit and Withdrawal Updates", text: "Ask about UPI deposit confirmation, withdrawal pending status, payment update support, and account-related cashout checks." },
  { title: "Bonus Claim Assistance", text: "Get help understanding welcome offers, promotion eligibility, bonus claim questions, referral rewards, and VIP club support." },
];

type PageKey = keyof typeof pages;

const LotusPage = ({ pageKey }: { pageKey: PageKey }) => {
  const page = pages[pageKey];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background pb-28 text-foreground">
      <SEO title={page.title} description={page.description} canonical={page.canonical} />
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-2xl font-black uppercase leading-none tracking-normal"><span>LOTUS </span><span className="text-primary">365</span></Link>
          <nav className="hidden items-center gap-4 text-sm font-medium lg:flex" aria-label="Main navigation">
            {navItems.map((item) => <Link key={item.label} to={item.href} className="hover:text-primary">{item.label}</Link>)}
          </nav>
          <div className="flex items-center gap-2">
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
            </nav>
          )}
        </div>
      </header>

      <section className="mx-auto grid max-w-[1180px] gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8 lg:py-12 xl:py-16">
        <div className="text-center lg:text-left">
          <p className="text-sm font-black uppercase tracking-normal text-primary">{page.eyebrow}</p>
          <h1 className="mt-3 text-4xl font-light leading-[1.08] text-primary sm:text-5xl lg:text-6xl xl:text-7xl">{page.heading}</h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-foreground/90 sm:text-lg lg:mx-0">{page.text}</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button asChild variant="gold" className="h-12 rounded-md px-8 font-black"><a href={whatsappUrl} target="_blank" rel="noreferrer">Get ID Now</a></Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-md bg-card shadow-panel">
          <img src={page.image} alt={page.imageAlt} className="aspect-[4/3] h-full w-full object-cover sm:aspect-[16/9] lg:aspect-[4/3]" />
        </div>
      </section>

      {"form" in page && page.form && (
        <section className="mx-auto max-w-[720px] px-4 pb-8 sm:px-6 lg:px-8">
          <form className="grid gap-4 rounded-md border border-border bg-card p-4 shadow-panel sm:p-6" onSubmit={(event) => event.preventDefault()}>
            <h2 className="text-center text-2xl font-black text-primary">Lotus365 Member Login Form</h2>
            <Input className="h-12 border-border bg-background text-center font-medium text-foreground placeholder:text-foreground/70" placeholder="Username / Mobile Number" aria-label="Username or mobile number" />
            <Input className="h-12 border-border bg-background text-center font-medium text-foreground placeholder:text-foreground/70" type="password" placeholder="Password" aria-label="Password" />
            <Button asChild variant="gold" className="h-12 text-base font-black"><a href={whatsappUrl} target="_blank" rel="noreferrer">Login Now</a></Button>
          </form>
        </section>
      )}

      <section className="mx-auto max-w-[1180px] px-4 pb-10 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light leading-tight text-primary">{page.heading} — Important Topics</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-md bg-card p-4 shadow-panel">
            <h3 className="text-xl font-black text-primary">Account Guidance</h3>
            <p className="mt-2 text-sm leading-6">Get help with login steps, new ID requests, mobile verification, and secure account access.</p>
          </article>
          <article className="rounded-md bg-card p-4 shadow-panel">
            <h3 className="text-xl font-black text-primary">Payment Support</h3>
            <p className="mt-2 text-sm leading-6">Receive support for deposit confirmation, withdrawal status, UPI payments, bonus details, and KYC guidance.</p>
          </article>
          <article className="rounded-md bg-card p-4 shadow-panel">
            <h3 className="text-xl font-black text-primary">WhatsApp Help</h3>
            <p className="mt-2 text-sm leading-6">Continue your support request directly on WhatsApp for quick answers and account assistance.</p>
          </article>
        </div>
      </section>

      {pageKey === "lotus-cricket" && (
        <section className="mx-auto max-w-[1180px] px-4 pb-12 sm:px-6 lg:px-8">
          <div className="border-t border-border pt-8">
            <h2 className="text-3xl font-light leading-tight text-primary">Frequently Asked Questions — Lotus365IDs Cricket</h2>
            <p className="mt-4 max-w-[900px] text-base leading-7 text-foreground/90">
              Whether you follow the IPL, ICC tournaments, bilateral series, or domestic cricket competitions, Lotus Cricket provides easy access to match schedules, scorecards, player performances, and detailed cricket analysis. The platform is optimized for mobile and desktop users, ensuring a smooth experience across all devices.
            </p>
            <div className="mt-6 grid gap-3">
              {cricketFaqs.map((faq) => (
                <details key={faq.q} className="group rounded-md border border-border bg-card p-4 shadow-panel">
                  <summary className="cursor-pointer text-base font-black text-primary">{faq.q}</summary>
                  <p className="mt-3 text-sm leading-6 text-foreground/85">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {pageKey === "contact-us" && (
        <section className="mx-auto max-w-[1180px] px-4 pb-12 sm:px-6 lg:px-8">
          <div className="border-t border-border pt-8">
            <h2 className="text-3xl font-light leading-tight text-primary">Lotus365 IDs Contact Support — Login, Cricket ID and Casino Help</h2>
            <p className="mt-4 max-w-[900px] text-base leading-7 text-foreground/90">
              Use this contact page whenever you need quick WhatsApp support — how to login Lotus365 with username, how to use Lotus365 online, new cricket ID setup, casino login help, KYC document issues, deposit confirmation, withdrawal pending help, or bonus claim assistance. Describe your issue clearly and choose the right support topic.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {contactHelpTopics.map((topic) => (
                <article key={topic.title} className="rounded-md bg-card p-4 shadow-panel">
                  <h3 className="text-xl font-black text-primary">{topic.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/85">{topic.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-7 rounded-md bg-card p-5 shadow-panel">
              <h2 className="text-2xl font-black text-primary">Before You Message Lotus365 IDs Support</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div>
                  <h3 className="font-black text-foreground">Mention Your Issue</h3>
                  <p className="mt-1 text-sm leading-6 text-foreground/85">Tell us whether you need login help, new ID support, casino access, KYC, deposit, withdrawal, or bonus help.</p>
                </div>
                <div>
                  <h3 className="font-black text-foreground">Keep Details Simple</h3>
                  <p className="mt-1 text-sm leading-6 text-foreground/85">Share only the issue type — never send sensitive account or payment details outside official support links.</p>
                </div>
                <div>
                  <h3 className="font-black text-foreground">Use WhatsApp Support</h3>
                  <p className="mt-1 text-sm leading-6 text-foreground/85">Open the Lotus365 IDs WhatsApp button for direct contact and faster account guidance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default LotusPage;
