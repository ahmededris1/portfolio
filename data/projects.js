/* ============================================================
   YOUR CONTENT LIVES HERE
   ------------------------------------------------------------
   This is the ONLY file you need to edit to change the words,
   projects, colours and links on the site. No coding needed.

   A few simple rules so nothing breaks:
     - Keep the quotes "" around every piece of text.
     - Keep the comma , at the end of each line.
     - Colours are hex codes like "#1c3a52" (pick any you like).
     - Anything after two slashes //  is a note to you and is ignored.

   TIP: before editing, make a copy of this file as a backup.
   ============================================================ */


/* ------------------------------------------------------------
   1) ABOUT YOU  +  CONTACT DETAILS
   ------------------------------------------------------------ */
const SITE = {
  name:  "Ahmed Edris",          // shown in the logo and footer
  title: "Interactive Designer", // your role, shown in the footer

  // ----- ABOUT PAGE -----
  // Everything on the About page lives in this object. Edit freely.
  about: {
    // Drop your cut-out photo here (PNG). Shown on the red block in the hero.
    photo: "images/about-portrait.webp",
    greeting: "Bonjour, I'm\nAhmed",
    subtitle: "I'm a senior product designer based in Riyadh.\nI'm available for full-time roles & freelance.",
    statement: "I design digital products and websites for startups, brands and enterprises — on projects I genuinely care about.",

    atWork: "I ask a lot of questions to understand the problems my clients want to solve and the goals they want to achieve. I turn that research and information architecture into high-fidelity interfaces — sometimes with subtle motion — then prototype and test them with real people before a line of code is written.",
    inLife: "Away from the screen, you'll find me out fishing and waiting patiently for a bite, planning my next trip somewhere new, or deep in a video game late into the night. Fishing, travelling and gaming are how I switch off — and, more often than not, where my best ideas sneak up on me.",

    // The scrolling ticker under IN LIFE — add anything you like.
    marquee: ["Interactive design", "UI design", "UX research", "Design systems", "Prototyping", "Usability testing", "Motion design", "Information architecture", "Wireframing", "Accessibility", "User flows", "Design thinking"],

    clientsHeading: "Trusted by teams big and small",
    clientsIntro: "I've had the privilege of designing for some of the region's biggest names across banking, telecom and government — from global brands to national institutions.",
    // Each client shows as a white wordmark on a dark card, turning to its
    // brand colour on hover. (Swap for real SVG logos any time.)
    clients: [
      { name: "e& by etisalat",     color: "#e30613" },
      { name: "vodafone",           color: "#e60000" },
      { name: "Al Rajhi Bank",      color: "#1a5fb4" },
      { name: "Suez Canal Bank",    color: "#0a4f96" },
      { name: "Riyadh Municipality",color: "#1a7a3d" },
      { name: "Fly Emirates",       color: "#d71921" },
      { name: "NEOM",               color: "#7b5cff" },
    ],

    expHeading: "7+ years turning research into products people trust",
    expIntro: "From global telecoms to the Kingdom's largest bank and government platforms, here's the path that shaped how I design today.",
    experience: [
      { mark: "T", org: "Tahakom",      role: "Senior Product Designer", place: "Riyadh, SA 🇸🇦", date: "Jul 2024 – Present" },
      { mark: "A", org: "Al Rajhi Bank",role: "Senior Product Designer", place: "Riyadh, SA 🇸🇦", date: "Aug 2023 – Jul 2024" },
      { mark: "F", org: "FriendyM",     role: "Product Designer",        place: "Egypt 🇪🇬",    date: "Mar 2023 – Apr 2024" },
      { mark: "N", org: "Noorybooks",   role: "UI/UX Designer",          place: "Remote 🌍",               date: "Jun 2022 – Mar 2023" },
      { mark: "E", org: "Etisalat UAE", role: "UI/UX Designer",          place: "UAE 🇦🇪",      date: "Sep 2021 – Jun 2022" },
      { mark: "V", org: "Vodafone",     role: "UI/UX Designer",          place: "Egypt 🇪🇬",    date: "Mar 2019 – Sep 2021" },
    ],

    closing: "Whenever, wherever.\nWe're meant to work together.",
    contactHeading: "Contact me for full-time jobs, freelance projects, design advice, or just to say hello.",
    contactIntro: "I have an inbox-zero rule, so I'll see your message for sure — and I'll reply with at least one smiley. I promise.",
  },

  // The email people can click to reach you
  email: "ahemdharvoc@gmail.com",

  // Social buttons on the Contact screen.
  // Leave the quotes empty ("") to hide a button.
  behance:  "https://www.behance.net/ahmededris1",
  linkedin: "https://www.linkedin.com/in/ahmed-edris1/",
};


/* ------------------------------------------------------------
   2) YOUR PROJECTS
   ------------------------------------------------------------
   Each { ... } block below is one project (one screen + one
   case study). To add a project, copy a whole block, paste it
   before the closing "];", and change the text inside.
   To remove a project, delete its whole { ... } block.
   ------------------------------------------------------------ */
const PROJECTS = [

  {
    name:    "SC Bank",
    eyebrow: "Usability Research · 2025",
    desc:    "A usability study that turned real SME feedback into a friction-free business banking app.",

    img: "images/scb-hero.webp",
    thumb: "images/scb-thumb.webp",  // animated preview (slide + prev/next nav)

    bg:     "#0b1a2e",  // screen background colour — deep ink navy
    fg:     "#e9f0fa",  // text colour on this screen
    accent: "#5aa9f0",  // highlight colour on this screen
    dark:   true,       // true = dark background, false = light background

    // Colours used only for the generated placeholder artwork
    stops: ["#123253", "#08131f"],
    blobs: ["#5aa9e6", "#1f5f9e"],

    // Facts shown at the top of the case study
    role: "Senior UI/UX Designer — Usability Research",
    year: "2025",
    type: "iOS · Android · Web",

    timeline: "2 testing iterations",
    team:     "UX research + product design",
    tools:    "Moderated remote testing · Figma",

    // The case study writing (fallback if the rich story is removed)
    overview: "SCB Business needed evidence, not opinions. We ran moderated usability testing with SME customers to find where the app helped and where it fought them.",
    work:     "Nine sessions across two iterations surfaced concrete fixes across registration, the dashboard, transfers and account views — each validated against real customer behaviour.",

    // ----------------------------------------------------------
    // RICH CASE STUDY — usability study with before/after evidence
    // ----------------------------------------------------------
    story: [
      { type: "lead",
        body: "SCB Business is the SME banking app for Suez Canal Bank — the product a small manufacturer or trader opens to move money, check facilities and run the financial side of their company. After shipping release 1.0 we had a hunch, backed by earlier reviews, that usability issues were quietly costing customers time and confidence. Rather than redesign on instinct, I led a moderated usability study with real SME owners, then turned every finding into a specific, testable change — and validated it in a second round." },

      { type: "stats", items: [
        ["9", "moderated sessions"],
        ["2", "research iterations"],
        ["5", "journeys redesigned"],
        ["2", "platforms — web & mobile"],
      ]},

      { type: "section",
        kicker: "01 — Why we tested",
        title: "Hypotheses, not assumptions",
        body: [
          "Two things pushed us to run a formal study. First, earlier reviews of release 1.0 had already flagged usability issues we knew we needed to fix. Second, we strongly suspected there were more — problems subtle enough to survive internal testing but real enough to frustrate a business owner working under time pressure.",
          "So we set a clear goal: evaluate and optimise the product's usability, and make the experience seamless, efficient and intuitive for our SME customers across every platform they actually use. No redesign would ship on opinion alone; each change had to answer to something we watched a customer struggle with.",
        ]},

      { type: "principles",
        kicker: "02 — What we set out to learn",
        title: "Three questions to validate",
        items: [
          ["Web or mobile?", "Which platform do our SME customers genuinely prefer, and what drives that choice."],
          ["What gets used?", "Which features are used most often, and which ones customers actually value."],
          ["Where's the friction?", "Which journeys perform well, and which quietly create hesitation and drop-off."],
        ]},

      { type: "section",
        kicker: "03 — How we ran it",
        title: "Moderated, remote, and iterative",
        body: [
          "Participants were SME customers — with a deliberate focus on small businesses — drawn from manufacturing and trading, the two industries that make up the core of the book. We ran moderated, remote usability tests so we could set real tasks, watch them unfold, and probe the reasoning behind every pause.",
          "The first iteration covered six sessions: three with small businesses and three with mid-cap companies, so we could hear how needs shift with size. A second iteration added three more sessions on the revised designs to confirm the fixes landed — with further rounds ongoing as new modules are ready.",
        ]},

      { type: "quote",
        text: "We didn't want opinions on a screen. We wanted to watch a business owner try to get their work done, and see exactly where the product got in the way.",
        cite: "The research approach" },

      { type: "casework",
        kicker: "Finding 01 — Activation & Login",
        title: "Getting in shouldn't be the hardest part",
        tint: "#0c3357",
        body: [
          "Registration and internet-banking activation was where new customers stalled first. The wording didn't match customers' mental models, the flow was longer than it needed to be, and the activation email buried the one thing people were looking for — their username and how long they had to act.",
        ],
        quote: "Shorten the registration flow, rewrite the email content, and put the activation code on the same screen as the username.",
        quoteCite: "Design note",
        before: [
          ["images/scb-reg-b1.webp", "Before — two-step ‘Register Now’"],
        ],
        after: [
          ["images/scb-reg-a1.webp", "Clear entry: Log in / Subscribe"],
          ["images/scb-reg-a2.webp", "Activation on one screen"],
          ["images/scb-reg-a3.webp", "Branch or download options"],
          ["images/scb-reg-a4.webp", "Redesigned activation email"],
        ],
        changes: [
          "Renamed the “Register Now” button to “Subscribe to Online Banking” so its purpose is unmistakable.",
          "Added a hint that the mobile number must be the one registered at the bank.",
          "Let customers download the activation form directly, without an unnecessary validation check.",
          "Redesigned the activation email so the username is easy to find, and made it clear the code is valid for 48 hours only.",
        ]},

      { type: "casework",
        kicker: "Finding 02 — Dashboard",
        title: "A home screen people can read at a glance",
        tint: "#0a2f52",
        body: [
          "The dashboard packed real value but leaned on unlabelled icons and an order that didn't match how customers scanned it. Balance privacy — a genuine concern for business owners using the app in public — was hidden behind an icon few recognised.",
        ],
        quote: "Remove the separate customise button, add a clear ‘hide balance’ label, and make hiding work across every section — with a hide/unhide toggle on each secondary screen.",
        quoteCite: "Design note",
        before: [
          ["images/scb-dash-b1.webp", "Before — icon-only, dense"],
        ],
        after: [
          ["images/scb-dash-a1.webp", "Labelled actions, balance hidden"],
          ["images/scb-dash-a2.webp", "One tap to show balances"],
          ["images/scb-dash-a3.webp", "Hide-balance default in More"],
        ],
        changes: [
          "Labelled the balance-reveal control and moved “customise dashboard” into the More tab.",
          "Placed the Accounts section directly beneath the quick actions, as most customers expected.",
          "Gave the loan/overdraft figure a clear label — customers read it as the “utilised amount”.",
          "Made every section title more prominent for faster recognition.",
          "Extended hide-balance across all sections, with a per-screen toggle and a default in More.",
        ]},

      { type: "casework",
        kicker: "Finding 03 — Transfers",
        title: "Confidence at the moment money moves",
        tint: "#0c3357",
        body: [
          "Transfers worked, but the details eroded trust. The confirmation didn't clearly say it had gone through, offered no way to keep a receipt, and an “Instant transfer (coming soon)” option sat in the flow doing nothing but confusing people. The beneficiary step added filter tabs that created more doubt than clarity.",
        ],
        before: [
          ["images/scb-tr-b1.webp", "Before — select account"],
          ["images/scb-tr-b2.webp", "Before — success, ‘Home’ only"],
          ["images/scb-tr-b3.webp", "Before — ‘coming soon’ option"],
        ],
        after: [
          ["images/scb-tr-a1.webp", "Clearer ‘Transfer from’"],
          ["images/scb-tr-a2.webp", "Success label + Share receipt"],
          ["images/scb-tr-a3.webp", "Instant-transfer option removed"],
        ],
        changes: [
          "Added a clear success label on the confirmation page.",
          "Added a “Share” option so customers can keep or send a receipt.",
          "Partially revealed the beneficiary name on the revision page (e.g. Ahmed A** S****) to confirm accuracy.",
          "Removed the confusing “Instant transfer (coming soon)” option.",
          "Removed the filter tabs from the beneficiary sheet, and let customers filter by type instead — bank account, card, wallet or mobile number.",
        ]},

      { type: "casework",
        kicker: "Finding 04 — Accounts, CDs, TDs & Finances",
        title: "Rebuilding the information architecture",
        tint: "#0a2f52",
        body: [
          "This was the deepest problem we found. The structure of Accounts, Finances and CDs/TDs was actively causing confusion and stopping customers from completing tasks — flat, undifferentiated lists that gave no sense of hierarchy or grouping.",
          "The second- and third-level screens needed a comprehensive redesign, not a patch: consistent tabs, clearer grouping, and a hierarchy that matches how business owners actually think about their money — accounts, finance and deposits as distinct, navigable worlds.",
        ],
        before: [
          ["images/scb-acc-b1.webp", "Before — flat ‘Loans’ list"],
          ["images/scb-acc-b2.webp", "Before — flat deposits list"],
        ],
        after: [
          ["images/scb-acc-a1.webp", "Tabbed Finance view"],
          ["images/scb-acc-a2.webp", "Tabbed Deposits & Certificates"],
          ["images/scb-acc-a3.webp", "Redesigned account details"],
          ["images/scb-acc-a4.webp", "Card details"],
          ["images/scb-acc-a5.webp", "Time deposit detail"],
          ["images/scb-acc-a6.webp", "Loan details with schedule"],
        ]},

      { type: "casework",
        kicker: "Finding 05 — Personalisation",
        title: "A dashboard customers can make their own",
        tint: "#0c3357",
        body: [
          "Customers wanted the home screen to reflect how they work. We added a dedicated customise flow — but testing showed the interaction wasn't obvious, so we built in an illustration that demonstrates exactly how to arrange and hide sections.",
        ],
        after: [
          ["images/scb-custom-1.webp", "Customise your dashboard"],
          ["images/scb-custom-2.webp", "Drag to reorder, toggle to hide"],
        ]},

      { type: "section",
        kicker: "06 — Beyond the screens",
        title: "What customers told us",
        body: [
          "Most customers prefer the mobile app for its constant accessibility — it's always in their pocket. The ones who favour web raised security needs, like restricting employee logins to working hours, a concern that grew louder with company size, especially among mid-cap organisations.",
          "Many rate the app among the best business tools in the market — but some still read it as retail-oriented, missing business-specific features like a loan dashboard, spending insights and supplier management. We also heard concrete asks: OTP magic-copy across every process, adding suppliers directly in the app, and clearly displayed daily transfer limits so customers can track their usage.",
        ]},

      { type: "principles",
        kicker: "07 — Prioritised asks",
        title: "The backlog customers wrote for us",
        items: [
          ["OTP magic-copy everywhere", "Auto-copy the one-time code across activation, transfers and every other verified step."],
          ["Add suppliers in-app", "Let businesses onboard new suppliers directly, without leaving the app."],
          ["Visible transfer limits", "Show daily limits clearly so customers can monitor usage at a glance."],
          ["Business-first framing", "Add a loan dashboard, spending insights and supplier management to shed the retail perception."],
        ]},

      { type: "section",
        kicker: "08 — Where this goes next",
        title: "Validated, then shipped",
        body: [
          "We're finalising the proposed designs for the product catalogue and the Accounts, CDs & TDs and Finance modules, and continuing the usability rounds on the new changes to build solid validation before release.",
          "Throughout, we're aligning every redesigned module with the retail app so customers meet one consistent language across the whole bank — not two products wearing the same logo.",
        ]},
    ],
  },

  {
    name:    "Qatar Credit Bureau",
    eyebrow: "Fintech Platform · 2026",
    desc:    "A two-sided credit platform: a calm consumer app and a powerful bureau admin panel.",

    img: "images/qcb-hero.webp",
    thumb: "images/qcb-thumb.webp",

    bg:     "#1c0a12",  // deep burgundy
    fg:     "#f7e8ee",  // text colour on this screen
    accent: "#ec2f5b",  // crimson highlight
    dark:   true,       // dark background

    stops: ["#5e1330", "#12060c"],
    blobs: ["#e11d48", "#8a1a3a"],

    role: "Senior UI/UX Designer",
    year: "2026",
    type: "iOS · Android · Web",

    timeline: "End-to-end product design",
    team:     "Product design + engineering",
    tools:    "Figma · design system",

    overview: "Qatar Credit Bureau needed two products from one credit record: a consumer app that gives people control over their credit story, and an admin platform for the bureau's members. I designed both end to end.",
    work:     "A calm, reassurance-led mobile app for consumers, and a dense, accountable web platform for analytics, audit and management — held together by one bilingual design system.",

    // ----------------------------------------------------------
    // RICH CASE STUDY — two-sided product (consumer app + admin)
    // ----------------------------------------------------------
    story: [
      { type: "lead",
        body: "Qatar Credit Bureau (QCB) is the country's trusted source of credit information — the institution banks, insurers and telecoms rely on to decide who they can lend to and trust. I designed a two-sided product around it: a consumer mobile app that finally gives individuals and companies control over their own credit story, and an admin platform that gives the bureau's members the analytics, audit and management tools to run it. As senior UI/UX designer I owned both experiences end to end." },

      { type: "stats", items: [
        ["2", "sides — app + admin platform"],
        ["14+", "core screens designed"],
        ["EN · AR", "bilingual, RTL-ready"],
        ["QAR", "built for the Qatar market"],
      ]},

      { type: "section",
        kicker: "01 — The problem",
        title: "Credit runs on trust — but people rarely get to see it",
        body: [
          "Most people never see their own credit data until a loan is refused. QCB's mandate is the opposite: transparency. Give consumers and companies direct, secure access to their score, to every request made against their data, and to a way of disputing what's wrong.",
          "On the other side sit the bureau's members — banks, insurers, telecoms — who must query that data responsibly, and a bureau team that has to prove every single access was legitimate. One credit record, two very different jobs to design for.",
        ]},

      { type: "quote",
        text: "For consumers the job was reassurance. For the bureau's members it was control. The same credit record had to feel calm on a phone and powerful on a dashboard.",
        cite: "The core design principle" },

      { type: "gallery", tint: "#2a0f1a",
        kicker: "02 — The consumer app",
        title: "Your credit, in your pocket",
        body: [
          "The app opens with a Qatar ID login and biometrics, then leads with the one number people actually care about — their credit score — framed as reassurance rather than judgement. Personal and company profiles live under a single account, with pending consent requests and recent activity surfaced the moment you land.",
        ],
        shots: [
          ["images/qcb-m-login.webp",    "Qatar ID + biometric login"],
          ["images/qcb-m-home.webp",     "Credit score, front and centre"],
          ["images/qcb-m-activity.webp", "Consents, disputes & history"],
          ["images/qcb-m-more.webp",     "Profile & settings"],
        ]},

      { type: "section",
        kicker: "03 — Consent & control",
        title: "Every time a bank looks at your file, you know",
        body: [
          "The Credit Activity view turns invisible back-office queries into something a person can see and act on: which member requested access, exactly what they can see, and until when. Disputes and history sit right alongside, so raising a correction is a tap — not a phone call and a week of waiting.",
        ]},

      { type: "gallery", tint: "#240b16",
        kicker: "04 — Buying a report",
        title: "Official reports, without the bureaucracy",
        body: [
          "Consumers can purchase official credit reports — physical or digital — through a flow that feels as familiar as any shop: a clear cart with QAR pricing and vouchers, a checkout with local payment methods, an unambiguous success state with a direct download, and a light feedback prompt to keep improving.",
        ],
        shots: [
          ["images/qcb-m-cart.webp",     "Cart — physical or digital"],
          ["images/qcb-m-checkout.webp", "Local payment methods"],
          ["images/qcb-m-success.webp",  "Success + instant download"],
          ["images/qcb-m-feedback.webp", "Rate the experience"],
        ]},

      { type: "section",
        kicker: "05 — The other side",
        title: "A control room for the bureau",
        body: [
          "Behind the app sits a web platform for bureau staff and member institutions. Where the app optimises for calm, the platform optimises for density and control: real-time operations, deep analytics, a complete audit trail, and the reference-data management that keeps the whole system accurate.",
        ]},

      { type: "gallery", wide: true, tint: "#2a0f1a",
        kicker: "06 — Operations & analytics",
        title: "Everything the bureau needs, at a glance",
        body: [
          "The home dashboard answers ‘what's happening right now’ — inquiries, reports, disputes and active customers, with top-performing members and recent activity within reach. The analytics suite goes deeper: inquiry-purpose trends, credit-usage by member sub-category, peak inquiry times, and ID-volume breakdowns that help the bureau read demand.",
        ],
        quote: "A dashboard for a credit bureau isn't a vanity chart — it's how a regulator-grade institution watches its own heartbeat.",
        quoteCite: "On the admin platform",
        shots: [
          ["images/qcb-a-home.webp",      "Operations dashboard"],
          ["images/qcb-a-analytics.webp", "Credit usage analytics"],
        ]},

      { type: "gallery", wide: true, tint: "#240b16",
        kicker: "07 — Accountable by design",
        title: "In a credit bureau, every action is traceable",
        body: [
          "The System Audit module logs every access and change — across audit logs, data loads, email, file movement and SMS — all searchable, filterable and exportable. Around it, focused modals handle the careful work: adding records, editing products and pricing, and confirming any destructive action before it happens.",
        ],
        shots: [
          ["images/qcb-a-audit.webp",   "System audit logs"],
          ["images/qcb-a-record.webp",  "Add & edit records"],
          ["images/qcb-a-product.webp", "Product & pricing management"],
          ["images/qcb-a-popup.webp",   "Guarded confirmations"],
        ]},

      { type: "section",
        kicker: "08 — The system",
        title: "One product family, two scripts",
        body: [
          "Qatar is bilingual, so English and Arabic are first-class across both products, with layouts built to mirror into right-to-left cleanly rather than bolting Arabic onto a left-to-right skeleton.",
          "A shared design language — the QCB crimson, generous spacing and a consistent component set — keeps the calm consumer app and the dense admin platform recognisably one family, even though they serve completely different users.",
        ]},

      { type: "section",
        kicker: "09 — Reflection",
        title: "What I'd validate next",
        body: [
          "The design covers both products end to end, from a consumer's first login to a bureau admin editing a product. Taken further, my priorities would be usability-testing the consent-management flow with real consumers, pressure-testing the Arabic RTL layouts across the data-heavy admin tables, and instrumenting the report-purchase funnel to see exactly where buyers hesitate.",
        ]},
    ],
  },

  {
    name:    "Greenz",
    eyebrow: "Q-Commerce · 2025",
    desc:    "A 15-minute grocery run, rebuilt for the way people actually shop.",

    img: "images/greenz-hero.webp",
    thumb: "images/greenz-thumb.webp",

    bg:     "#10281f",
    fg:     "#eafff6",
    accent: "#38d39f",
    dark:   true,
    stops: ["#1c5f45", "#0a1f18"],
    blobs: ["#4affc0", "#1f8f6a"],
    role: "Senior UI/UX Designer",
    year: "2025",
    type: "iOS · Android",
    overview: "Q-commerce lives or dies on the first three minutes. Shoppers open a grocery app already impatient — they know what they want and they want it fast. Greenz set out to compress the full run, from craving to checkout, into a flow short enough to finish one-handed on the walk home, while still surfacing the fresh produce and daily deals that keep a grocery basket growing.",
    work:     "The design leads with location and search, so the app answers “can you deliver to me, now?” before anything else. A scannable category grid and a Best Sellers rail do the heavy lifting of discovery, while a rotating promo banner earns the impulse add-ons that lift basket size. Every product card keeps price, discount and a one-tap add within thumb reach, and the checkout path is kept deliberately short to protect conversion. A warm green system and generous food photography make a utilitarian errand feel fresh and appetising rather than transactional.",

    // Extra facts shown in the case-study meta row (optional)
    timeline: "6 weeks",
    team:     "Solo designer · 1 PM · 2 engineers",
    tools:    "Figma · ProtoPie",

    // ----------------------------------------------------------
    // RICH CASE STUDY (only Greenz has this for now).
    // Each block is one section of the long-scroll case study.
    // Types: lead, stats, section, principles, split, full,
    //        phones, quote. Add/remove/reorder freely.
    // ----------------------------------------------------------
    story: [
      { type: "lead",
        body: "Greenz is a quick-commerce grocery app built for Egypt — where a weekly shop competes with 40°C heat, dense traffic, and the growing expectation that anything can arrive in minutes. As senior UI/UX designer I turned a broad “order groceries fast” ambition into a focused product a first-time user could finish one-handed, in the language they read most comfortably, and trust enough to reorder." },

      { type: "stats", items: [
        ["15 min", "delivery target"],
        ["13", "core screens designed"],
        ["2", "languages — English & Arabic"],
        ["1", "reusable design system"],
      ]},

      { type: "section",
        kicker: "01 — The brief",
        title: "A grocery run that ends before the ice cream melts",
        body: [
          "Quick-commerce lives or dies in the first few minutes. People open a grocery app already impatient: they know what they want and they want it now. If the path from craving to checkout has friction, they close the app and message a local grocer instead.",
          "The brief was deliberately open — a logo, a promise of fast delivery, and a market. Everything from information architecture to the empty states was mine to define, which meant the product’s clarity was a design responsibility, not a spec I inherited.",
        ]},

      { type: "section",
        kicker: "02 — Who I designed for",
        title: "Two shoppers, one thumb",
        body: [
          "I anchored the work on two people: a busy parent restocking essentials on a lunch break, and a student ordering a few items late at night. Both shop on a phone, often one-handed, and frequently switch between Arabic and English mid-sentence.",
          "That framing drove three non-negotiables — every primary action within thumb reach, price and delivery time visible before any commitment, and genuine parity between the English and Arabic interfaces.",
        ]},

      { type: "principles",
        kicker: "03 — Principles",
        title: "Three rules I kept coming back to",
        items: [
          ["Answer ‘can you deliver to me, now?’ first", "Location and the delivery estimate lead the experience, before a single product is browsed."],
          ["One clear action per screen", "Each view has a single, obvious next step styled in the Greenz green, so the eye never has to hunt."],
          ["Bilingual by default", "Layouts are built to mirror cleanly into Arabic (RTL) so neither language ever feels like a bolted-on translation."],
        ]},

      { type: "split", side: "left", img: "images/greenz-location.webp", tint: "#123a2b",
        kicker: "04 — Getting started",
        title: "Location before everything",
        body: [
          "Onboarding opens with three quick, illustrated promises — on-time delivery, shop by category, pay your way — then hands over to a real map. The user confirms exactly where they are before browsing, so every price, delivery window and stock count is true for their address in Egypt.",
          "A ‘continue as guest’ option removes the classic sign-up wall: people can look before they commit, which matters enormously for a brand nobody has heard of yet.",
        ]},

      { type: "phones", tint: "#0f2b20",
        caption: "Onboarding — three promises, then straight to a live map and a low-friction way in.",
        shots: [
          ["images/greenz-ob1.webp",   "On-time delivery"],
          ["images/greenz-ob2.webp",   "Shop by category"],
          ["images/greenz-ob3.webp",   "Pay your way"],
          ["images/greenz-start.webp", "Sign up, sign in, or guest"],
        ]},

      { type: "split", side: "right", img: "images/greenz-promo.webp", tint: "#0e2c1f",
        kicker: "05 — Discovery & growth",
        title: "Discovery that grows the basket",
        body: [
          "The home screen carries the weight of discovery. Search answers intent-led shoppers; a category grid and a Best Sellers rail carry the browsers; a rotating promo banner earns the impulse add-ons that lift basket size.",
          "A first-order coupon — GRNZ14, free delivery — is surfaced as a friendly full-screen moment rather than buried in a menu. It hands a brand-new user a concrete reason to push through that risky first order.",
        ]},

      { type: "full", img: "images/greenz-home.webp", tint: "#10281f",
        caption: "Home: address and search pinned to the top, a rotating promo, scannable categories, and a Best Sellers rail — discovery without the scroll fatigue." },

      { type: "section",
        kicker: "06 — The moment of trust",
        title: "Watching it come to you",
        body: [
          "The single most important screen in any delivery app is the wait. I designed live tracking as the emotional peak: a clear 30–40 minute estimate, the rider’s name with a one-tap call, an itemised shipment summary, and the delivery address — all on one calm screen.",
          "Nothing here is decorative. Every element answers a question an anxious customer is already asking: where is it, who’s bringing it, what did I pay, and where is it going?",
        ]},

      { type: "full", img: "images/greenz-track.webp", tint: "#0c241a",
        caption: "Live order tracking — the screen that earns the second order." },

      { type: "quote",
        text: "Speed is a feeling, not just a number. The interface has to stay calm while everything behind it moves fast.",
        cite: "Design principle — Greenz" },

      { type: "section",
        kicker: "07 — Closing the loop",
        title: "The unglamorous screens matter most",
        body: [
          "Empty states, confirmations and rating flows are where most portfolios go quiet — and where real products win or lose trust. Greenz’s empty Orders screen points people back to shopping instead of stranding them.",
          "The post-delivery rating is a single tap on a star, with an optional review, so giving feedback costs the user almost nothing — and the thank-you screen closes the loop with a little warmth.",
        ]},

      { type: "phones", tint: "#0f2b20",
        caption: "Empty state, rating and thank-you — the details that make a product feel finished.",
        shots: [
          ["images/greenz-empty.webp",  "Empty orders, with a way forward"],
          ["images/greenz-rate.webp",   "One-tap rating"],
          ["images/greenz-thanks.webp", "A warm close"],
        ]},

      { type: "split", side: "left", img: "images/greenz-settings.webp", tint: "#123a2b",
        kicker: "08 — Built for Egypt",
        title: "Two languages, one product",
        body: [
          "Egypt is bilingual, so English and Arabic are both first-class citizens. Language lives in Settings as a clear, flag-marked switch, and the interface is structured to flip to right-to-left cleanly rather than bolting Arabic onto a left-to-right skeleton.",
          "Small decisions — icon-led navigation, EGP currency formatting, generous tap targets — keep the app legible across both scripts and a wide spread of devices.",
        ]},

      { type: "principles",
        kicker: "09 — The system",
        title: "A calm system behind a fast app",
        items: [
          ["A warm, single-minded green", "One accountable brand colour marks every primary action and progress state, so speed never reads as stress."],
          ["Food photography that sells", "Generous, appetising imagery turns a utilitarian errand into something fresh — the produce does the persuading."],
          ["Reusable components", "Cards, banners, buttons and states are built once and reused, keeping thirteen screens consistent and fast to extend."],
        ]},

      { type: "section",
        kicker: "10 — Reflection",
        title: "What I’d test next",
        body: [
          "Greenz is a complete, shippable design that covers the full journey — from first launch to a rated, delivered order. Taken further, my first priorities would be usability-testing the guest-to-signup moment, pressure-testing the Arabic RTL layouts with native readers, and instrumenting the home screen to learn which discovery pattern — search, categories or Best Sellers — actually drives the largest baskets.",
          "The design is built to answer those questions, not to hide from them.",
        ]},
    ],
  },

  {
    name:    "Cookster",
    eyebrow: "Social Platform · 2024",
    desc:    "A video-first social network for food lovers — share recipes, discover dishes, follow chefs.",

    img: "images/cookster-hero.webp",
    thumb: "images/cookster-thumb.webp",

    bg:     "#211710",  // screen background colour — warm espresso
    fg:     "#f7efe4",  // text colour on this screen
    accent: "#f5c518",  // highlight colour — Cookster gold
    dark:   true,

    stops: ["#3a2a16", "#160f08"],
    blobs: ["#f5c518", "#c8912a"],

    role: "Senior UI/UX Designer",
    year: "2024",
    type: "iOS · Android",

    timeline: "End-to-end product design",
    team:     "Product design + engineering",
    tools:    "Figma · prototyping",

    overview: "Cookster is a video-first social platform for food lovers — a place to share recipes, photos and cooking tips, discover new dishes, and follow a vibrant community of home cooks, chefs and restaurants.",
    work:     "I designed the full experience: a TikTok-style food feed, a frictionless record-to-post flow, discovery and community, chef and restaurant profiles, built-in restaurant advertising, and multi-language support.",

    // ----------------------------------------------------------
    // RICH CASE STUDY — social food platform (with live video)
    // ----------------------------------------------------------
    story: [
      { type: "lead",
        body: "Cookster is an engaging, video-first social platform for people who love food. Users upload recipes, photos and cooking tips, discover new dishes, plan meals and review restaurants — all while connecting with a vibrant community of home cooks, chefs and food lovers. As senior UI/UX designer I shaped the whole product: a scroll-and-watch feed, a frictionless create flow, rich community and discovery, and a built-in way for restaurants to advertise — wrapped in a warm, multi-language design." },

      { type: "stats", items: [
        ["Video-first", "feed at the core"],
        ["3", "account types"],
        ["Multi-lang", "Arabic & English"],
        ["Built-in", "restaurant advertising"],
      ]},

      { type: "section",
        kicker: "01 — The idea",
        title: "What if food had its own social network?",
        body: [
          "People already share food everywhere — but on platforms built for everything else. Cookster's bet was a home built specifically for food culture: short, appetising videos as the primary language, and a community where a home cook, a professional chef and a restaurant can all find their audience.",
          "The design had to make watching effortless, creating fast, and belonging obvious — appetising enough to make you hungry, simple enough to post from your kitchen.",
        ]},

      { type: "video", tint: "#160f08",
        kicker: "02 — In motion",
        title: "A feed you scroll with your thumb and your appetite",
        src: "videos/cookster-home.mp4",
        poster: "images/cook-video-poster.webp",
        caption: "The home feed in motion — full-bleed food video, creator front and centre, and like / comment / save / share always within thumb reach." },

      { type: "gallery", tint: "#2a1c10",
        kicker: "03 — First impressions",
        title: "Onboarding that sets the appetite",
        body: [
          "Three bright onboarding screens set expectations in seconds — share your passion, connect and engage, discover culinary delights — then hand over to a flexible sign-up. New users choose who they are on the platform: a personal food lover, a chef, or a restaurant, because each has different goals from day one.",
        ],
        shots: [
          ["images/cook-ob1.webp",     "Share your passion"],
          ["images/cook-ob2.webp",     "Connect & engage"],
          ["images/cook-ob3.webp",     "Discover culinary delights"],
          ["images/cook-account.webp", "Pick your account type"],
          ["images/cook-signin.webp",  "Fast social sign-in"],
        ]},

      { type: "section",
        kicker: "04 — Create",
        title: "From kitchen to feed in a few taps",
        body: [
          "The heart of a social platform is how easily people can post. Cookster's create flow mirrors the record-edit-share loop people already know — a full-screen camera with filters and voiceover, a light editor, and a post screen that captures the details that make food content discoverable: dish type, title, tags and location.",
        ]},

      { type: "gallery", tint: "#30210f",
        kicker: "04 — Create (cont.)",
        title: "Record, edit, post",
        body: [
          "Camera permission is asked in context, editing tools stay out of the way, and posting confirms with a clear success state — so the loop feels rewarding enough to do again tomorrow.",
        ],
        shots: [
          ["images/cook-record.webp", "Full-screen record"],
          ["images/cook-edit.webp",   "Voiceover, filters, text"],
          ["images/cook-post.webp",   "Add details & tags"],
          ["images/cook-posted.webp", "Published successfully"],
        ]},

      { type: "quote",
        text: "The best food content is made on impulse, in a kitchen, with one hand. If posting takes more than a minute, the moment — and the meal — is gone.",
        cite: "Design principle" },

      { type: "gallery", tint: "#2a1c10",
        kicker: "05 — Discover & community",
        title: "A place to find your next favourite dish",
        body: [
          "Discovery blends editorial and social: trending hashtags, sponsored highlights, and a search that filters across videos, users, live, restaurants and chefs. Messaging keeps the community talking, so following someone leads somewhere real.",
        ],
        shots: [
          ["images/cook-home.webp",     "Home feed"],
          ["images/cook-discover.webp", "Discover & trending"],
          ["images/cook-search1.webp",  "Search across everything"],
          ["images/cook-search2.webp",  "Filter by chefs & restaurants"],
          ["images/cook-messages.webp", "Community messaging"],
        ]},

      { type: "gallery", tint: "#30210f",
        kicker: "06 — Chefs & restaurants",
        title: "Where food businesses grow — and advertise",
        body: [
          "Chefs and restaurants get rich profiles with menus, followers and a direct way to be discovered. Crucially, Cookster builds monetisation in from the start: restaurants can buy advertising packages to promote their content, turning the community into a genuine growth channel rather than a billboard bolted on afterwards.",
        ],
        shots: [
          ["images/cook-chef.webp",       "Chef profile"],
          ["images/cook-restaurant.webp", "Restaurant profile & map"],
          ["images/cook-packages.webp",   "Advertising packages"],
        ]},

      { type: "gallery", tint: "#2a1c10",
        kicker: "07 — Built for everyone",
        title: "Multi-language by default",
        body: [
          "Cookster serves a bilingual, Arabic- and English-speaking audience, so language is a first-class setting rather than an afterthought, and the profile and settings are structured to switch cleanly. Food is universal — the interface should be too.",
        ],
        shots: [
          ["images/cook-language.webp",    "Change language anytime"],
          ["images/cook-editprofile.webp", "Profile & preferences"],
          ["images/cook-camperm.webp",     "Permissions in context"],
        ]},

      { type: "section",
        kicker: "08 — Reflection",
        title: "What I'd build and test next",
        body: [
          "Cookster is a complete, shippable design covering the full loop — from a first onboarding tap to a published video, a followed chef and a promoted restaurant. Taken further, my priorities would be usability-testing the record-to-post flow against real kitchen conditions, validating the Arabic RTL layouts with native speakers, and instrumenting the feed to learn what actually keeps food lovers watching.",
        ]},
    ],
  },

  {
    name:    "Alrajhi Bank",
    eyebrow: "Banking · Web & Mobile · 2023–24",
    desc:    "Multiple products for the Kingdom's largest bank — insurance, finance, and a payroll revamp.",

    img: "images/alrajhi-hero.webp",
    thumb: "images/alrajhi-thumb.webp",  // animated preview (slide + prev/next nav)

    bg:     "#082a52",  // Al Rajhi deep blue
    fg:     "#e9f1fb",
    accent: "#3a80e0",
    dark:   true,

    stops: ["#0f4a85", "#061d3a"],
    blobs: ["#3a80e0", "#1f5f9e"],

    role: "Senior UI/UX Designer",
    year: "2023–2024",
    type: "Web · iOS · Android",

    timeline: "2023 – 2024",
    team:     "Product design, research & engineering",
    tools:    "Figma · Mixpanel · Hotjar · usability testing",

    overview: "Across 2023–2024 I designed several products for Al Rajhi Bank's business platform — a Takaful medical-insurance module for web and mobile, a business finance application flow, and a ground-up revamp of the payroll experience.",
    work:     "The flagship was the payroll revamp: an evidence-led redesign that lifted completion from 45% to 78%, cut average time from 12 to 7 minutes, and dropped payroll support tickets by 60%.",

    // ==========================================================
    // RICH CASE STUDY — Al Rajhi Bank (three product streams)
    // ==========================================================
    story: [
      { type: "lead",
        body: "Al Rajhi Bank is one of the largest Islamic banks in the world, and its business platform serves companies across the Kingdom of Saudi Arabia. Over 2023 and 2024 I worked across several products on that platform — a Takaful (Islamic medical insurance) module on web and mobile, a business finance application flow, and a full, research-led revamp of the payroll experience. Everything was designed bilingually (Arabic and English) and in SAR, for a demanding, high-trust context where clarity and compliance matter as much as polish." },

      { type: "stats", items: [
        ["3", "product streams shipped"],
        ["Web + Mobile", "designed across both"],
        ["45 → 78%", "payroll completion"],
        ["−60%", "payroll support tickets"],
      ]},

      { type: "section",
        kicker: "01 — Overview",
        title: "One bank, several products, two platforms",
        body: [
          "Rather than a single screen, this was a body of work: distinct products that each had to fit inside Al Rajhi's business ecosystem while solving a very different problem. Some lived on the desktop business portal used by finance teams and HR; others were mobile-first, for owners running their company from their phone.",
          "Below I've grouped the work into its three streams — Takaful insurance, applying for finance, and the payroll revamp — with the payroll project covered in the most depth, because it's where research, design and measurable outcome came together most completely.",
        ]},

      /* ---------- STREAM A: TAKAFUL ---------- */
      { type: "section",
        kicker: "02 — Al Rajhi Takaful",
        title: "Medical insurance, from the whole company to a single employee",
        body: [
          "Takaful is Shariah-compliant insurance. This module lets an employer buy and manage medical coverage for their entire workforce — assigning plans, capturing the health declarations regulators require, and handling collections and government payments. It's a dense, rule-heavy process, and the design's job was to make it feel manageable.",
          "I designed it for two contexts: a web experience for HR and finance admins managing hundreds of employees, and a mobile experience for smaller businesses enrolling their team on the go.",
        ]},

      { type: "gallery", wide: true, tint: "#0b3a6b",
        kicker: "02 — Takaful · Web",
        title: "The admin side: manage coverage at scale",
        body: [
          "On web, the module surfaces the whole insurance operation — a dashboard entry point, employee management with single and bulk selection, plan and pricing (collection) management, government payments, and the Masdar registration overview — all inside Al Rajhi's business portal.",
        ],
        shots: [
          ["images/ar-tk-web-dashboard.webp",  "Takaful entry point"],
          ["images/ar-tk-web-employees.webp",  "Assign insurance to employees"],
          ["images/ar-tk-web-collection.webp", "Plans & pricing"],
          ["images/ar-tk-web-bulk.webp",       "Bulk employee selection"],
          ["images/ar-tk-web-govpay.webp",     "Government payment & policy"],
          ["images/ar-tk-web-masdar.webp",     "Masdar registration overview"],
        ]},

      { type: "gallery", tint: "#0a2f57",
        kicker: "02 — Takaful · Mobile",
        title: "The mobile side: enrol a team in minutes",
        body: [
          "On mobile, the flow guides a business owner from onboarding through choosing an insurance class, adding each employee with the required medical declarations, reviewing the quote, and confirming with an OTP — ending on a clear success state.",
        ],
        shots: [
          ["images/ar-tk-m-ob1.webp",    "Medical care bundle"],
          ["images/ar-tk-m-ob2.webp",    "Quick import tool"],
          ["images/ar-tk-m-assign.webp", "Choose an insurance class"],
          ["images/ar-tk-m-health.webp", "Health declarations"],
          ["images/ar-tk-m-review.webp", "Review the quote"],
          ["images/ar-tk-m-otp.webp",    "Confirm with OTP"],
          ["images/ar-tk-m-status.webp", "Request sent"],
        ]},

      /* ---------- STREAM B: APPLY FOR FINANCE ---------- */
      { type: "section",
        kicker: "03 — Apply for finance",
        title: "Business financing that fits in a lunch break",
        body: [
          "Applying for business finance is traditionally paperwork-heavy. This flow turns it into a guided request: the business chooses what they need financing for — cash, cars, invoice, real estate or payroll — accepts the Shariah and SIMAH terms, and signs a digital promissory note through Nafeth, with a clear promise that approval takes no longer than one business day.",
          "The design keeps each step small and legible, sets expectations honestly, and lives alongside the business dashboard where owners track balances, finance and cards.",
        ]},

      { type: "gallery", tint: "#0b3a6b",
        kicker: "03 — Apply for finance",
        title: "A guided, three-step request",
        body: [
          "From choosing a financing purpose to a digital promissory note via Nafeth and a clear review of amount, instalment and tenure — the flow removes ambiguity from a high-stakes decision.",
        ],
        shots: [
          ["images/ar-fin-purpose.webp",    "What do you need financing for?"],
          ["images/ar-fin-login.webp",      "Secure business login"],
          ["images/ar-fin-terms.webp",      "Terms & conditions"],
          ["images/ar-fin-promissory.webp", "Digital promissory note (Nafeth)"],
          ["images/ar-fin-review.webp",     "Review & approval expectation"],
          ["images/ar-fin-dashboard.webp",  "Business banking dashboard"],
        ]},

      /* ---------- STREAM C: PAYROLL REVAMP (flagship) ---------- */
      { type: "section",
        kicker: "04 — The flagship: Payroll revamp",
        title: "Rescuing the payroll flow",
        body: [
          "Payroll is the beating heart of a business banking platform — and Al Rajhi's was quietly failing its users. This is the project I'm proudest of, because it started with hard evidence, moved through real research, and ended in numbers we could stand behind.",
        ]},

      { type: "section",
        kicker: "04 — The challenge",
        title: "The numbers told us something was wrong",
        body: [
          "Through a combination of user surveys, backend analytics, and usability testing on Al Rajhi's business platform — specifically the payroll flow — we identified major usability issues affecting performance. Users were frequently dropping off due to unclear navigation, inconsistent design patterns, and a lack of guidance during critical steps.",
          "At the time, the conversion rate for completing the payroll process was around 45%, and roughly 30% of users dropped off during the employee data-entry stage. Average completion time was over 12 minutes, and payroll-related support tickets were consistently high. These insights pointed clearly to a need to redesign the flow to improve task success, reduce cognitive load, and increase efficiency.",
        ]},

      { type: "stats", items: [
        ["~45%", "completed payroll"],
        ["~30%", "dropped at data entry"],
        ["12+ min", "average completion"],
        ["High", "support-ticket volume"],
      ]},

      { type: "section",
        kicker: "05 — Understanding the problem",
        title: "We went looking for the ‘why’",
        body: [
          "To solve the problem we ran a set of activities to identify the pain points — and we spoke with our users directly, rather than guessing at their intent from dashboards alone.",
        ]},

      { type: "gallery", wide: true, plain: true, tint: "#0a2f57",
        kicker: "05 — User flow",
        title: "Mapping the whole journey",
        body: [
          "We mapped a full user-flow journey to visualise every step a user takes to complete key payroll tasks. Laying the path out end to end helped us understand how people navigate the interface — and exactly where the roadblocks were.",
        ],
        shots: [
          ["images/ar-pay-userflow.webp", "Payroll user-flow map"],
        ]},

      { type: "gallery", wide: true, plain: true, tint: "#0b3a6b",
        kicker: "05 — User interviews",
        title: "What users actually told us",
        body: [
          "We synthesised the interviews into key findings, common frustrations, and enhancement ideas — turning scattered feedback into a shared, prioritised picture of the problem.",
        ],
        shots: [
          ["images/ar-pay-insights.webp", "User-interview insights board"],
        ]},

      { type: "section",
        kicker: "06 — Heat map analysis",
        title: "Watching where attention (and friction) lived",
        body: [
          "To understand behaviour and interaction patterns, we tracked users' clicks, scrolls and cursor movement across the payroll screens. The heat maps revealed the areas of real engagement — and the friction points where people hesitated, hunted, or gave up.",
        ]},

      { type: "gallery", wide: true, plain: true, tint: "#0a2f57",
        kicker: "06 — Heat maps",
        title: "Evidence, not opinion",
        body: [
          "Overlaid on the live payroll screens, the heat maps made the problem areas impossible to argue with — and told us exactly where the redesign had to focus.",
        ],
        shots: [
          ["images/ar-pay-heat1.webp", "Payroll dashboard — heat map"],
          ["images/ar-pay-heat2.webp", "WPS payroll — heat map"],
          ["images/ar-pay-heat3.webp", "Payroll details — heat map"],
        ]},

      { type: "section",
        kicker: "07 — Solving it",
        title: "The journey into the solution",
        body: [
          "Now it was time to design a way out. I sketched solutions, built an interactive prototype, and put it in front of users — iterating before committing anything to high fidelity.",
        ]},

      { type: "gallery", wide: true, plain: true, tint: "#0b3a6b",
        kicker: "07 — Sketching",
        title: "Cheap, fast, disposable ideas",
        body: [
          "After identifying the main pain points, I needed a solution for a genuinely easy-to-use platform — so I sketched and validated the ideas on paper before moving into Figma, where changes are slower and feel more precious than they should.",
        ],
        shots: [
          ["images/ar-pay-sketches.webp", "Low-fidelity payroll sketches"],
        ]},

      { type: "section",
        kicker: "08 — Testing",
        title: "Putting the first iteration to the test",
        body: [
          "After building the first iteration, we ran remote usability testing with selected users to pressure-test our outputs and surface the early usability problems while they were still cheap to fix.",
        ]},

      { type: "gallery", wide: true, plain: true, tint: "#0a2f57",
        kicker: "08 — Testing results",
        title: "Listening, then adjusting",
        body: [
          "We captured each participant's struggles and successes, made adjustments based on their comments, and only then moved towards final outputs.",
        ],
        shots: [
          ["images/ar-pay-test1.webp", "Usability testing — user 2"],
          ["images/ar-pay-test2.webp", "Usability testing — user 1"],
        ]},

      { type: "section",
        kicker: "09 — Outcome",
        title: "The redesign paid off — measurably",
        body: [
          "We tracked the changes through a combination of Mixpanel funnel analysis and backend completion logs. Completion climbed from around 45% to roughly 78% over the first two months post-launch. Payroll-related support tickets dropped by about 60%, which matched the qualitative feedback we heard from users, and average completion time fell from over 12 minutes to about 7.",
        ]},

      { type: "stats", items: [
        ["78%", "completion — up from 45%"],
        ["−60%", "payroll support tickets"],
        ["7 min", "completion — down from 12"],
        ["2 months", "to reach the numbers"],
      ]},

      { type: "gallery", wide: true, tint: "#0b3a6b",
        kicker: "09 — The redesigned payroll",
        title: "Clear, consistent, and guided",
        body: [
          "The final experience gives payroll a proper home: a parent dashboard across WPS, Plus and Enterprise payroll, clean batch and history views, and a guided subscription flow — consistent patterns and visible guidance at every critical step.",
        ],
        shots: [
          ["images/ar-pay-dashboard.webp",     "Payroll dashboard"],
          ["images/ar-pay-wps.webp",           "WPS payroll"],
          ["images/ar-pay-enterprise.webp",    "Enterprise payroll"],
          ["images/ar-pay-batch.webp",         "Batch details"],
          ["images/ar-pay-history.webp",       "Payroll history"],
          ["images/ar-pay-subscription.webp",  "Subscription & products"],
          ["images/ar-pay-plus.webp",          "Plans & upgrade"],
        ]},

      { type: "quote",
        text: "We didn't ship a prettier payroll — we shipped a measurably better one. Starting from evidence meant we could prove the redesign worked, not just claim it.",
        cite: "On the payroll revamp" },

      { type: "section",
        kicker: "10 — Reflection",
        title: "Breadth, held together by rigour",
        body: [
          "Working across Al Rajhi's platform meant moving between very different problems — regulated insurance, high-stakes finance, and a metrics-driven payroll fix — on both web and mobile. What tied them together was a way of working: understand the real user, design from evidence, test before committing, and measure the result.",
          "The payroll revamp is the clearest proof of that approach, but the same discipline shaped every screen across these products.",
        ]},
    ],
  },

  {
    name:    "Design System",
    eyebrow: "Enterprise · 2024",
    desc:    "One design system powering a bilingual product, light and dark, for a large-scale technology platform in Saudi Arabia.",

    img: "images/ds-hero.webp",
    thumb: "images/ds-thumb.webp",  // app-screens preview (slide + prev/next nav)

    bg:     "#0d2019",  // deep green
    fg:     "#e9f5ef",
    accent: "#16b884",
    dark:   true,

    stops: ["#124a38", "#08160f"],
    blobs: ["#16b884", "#0f6b50"],

    role: "Senior Product Designer — Design Systems",
    year: "2024",
    type: "Design System · Web & Mobile",

    timeline: "Ongoing",
    team:     "Design system + multiple product teams",
    tools:    "Figma · Variables · Tokens",

    // This case study is password-protected. Its text and image list are
    // encrypted (AES-256-GCM, key derived from the password with PBKDF2), so
    // editing it here will not work — ask for it to be re-encrypted instead.
    overview: "",
    work:     "",
    locked: {
      iter: 600000,
      salt: "vseTt/wDHP3rHtCjEok8Pg==",
      iv:   "/TNqLhsPIHkl+86g",
      data: "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",
    },
  },

]; // <- keep this line. Add new projects ABOVE it.
