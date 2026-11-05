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
  title: "Product Designer",     // your role, shown in the footer

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
    marquee: ["Product design", "Interaction design", "UI design", "UX research", "Design systems", "Prototyping", "Usability testing", "Motion design", "Information architecture", "Wireframing", "Accessibility", "User flows", "Design thinking"],

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
    name:    "Cookster",
    eyebrow: "Social Platform · 2024",
    desc:    "A video-first social network for food lovers — share recipes, discover dishes, follow chefs.",

    img: "images/cookster-cover.webp",
    thumb: "images/cookster-thumb.webp",

    bg:     "#211710",  // screen background colour — warm espresso
    fg:     "#f7efe4",  // text colour on this screen
    accent: "#f5c518",  // highlight colour — Cookster gold
    dark:   true,

    stops: ["#3a2a16", "#160f08"],
    blobs: ["#f5c518", "#c8912a"],

    role: "Senior Product Designer",
    year: "2024",
    type: "iOS · Android",

    timeline: "End-to-end product design",
    team:     "Product design + engineering",
    tools:    "Figma · prototyping",

    overview: "Food content lived on platforms built for everything else, so cooks had no dedicated home and restaurants had no native way to reach hungry people. I led product design for Cookster end to end: a video-first food network for home cooks, chefs and restaurants, in Arabic and English.",
    work:     "I designed the feed, a record-to-post flow built for one-handed use in a kitchen, three account types with three different jobs, and restaurant advertising built into the product rather than bolted on. Each decision targets a clear goal: a faster first post, return visits, and ad revenue that doesn't erode trust in the feed.",

    // ----------------------------------------------------------
    // RICH CASE STUDY — social food platform (with live video)
    // ----------------------------------------------------------
    story: [
      { type: "lead",
        body: "Food is one of the most-shared subjects online, yet it lives on platforms built for everything else — where a recipe competes with news and memes, and a neighbourhood restaurant has no natural way to reach people deciding what to eat. Cookster set out to be the home built for food. I led the product design end to end, from the first onboarding screen to restaurant advertising, in Arabic and English."},

      { type: "principles",
        kicker: "At a glance",
        title: "The short version",
        items: [
          ["The problem", "Food creators and restaurants had no dedicated home: content was scattered across general platforms, and posting from a busy kitchen was slow."],
          ["My role", "Senior product designer. I owned the product end to end — information architecture, flows, UI, motion and the bilingual design language."],
          ["The approach", "Design for three users with three different jobs, and make posting fast enough to happen on impulse."],
          ["Success goals", "A first post in the first session, return visits driven by the feed, and restaurant ads that pay without eroding trust."],
        ]},

      { type: "stats", items: [
        ["3", "account types, three different jobs"],
        ["< 1 min", "target from camera to posted"],
        ["AR · EN", "bilingual from day one"],
        ["Built-in", "restaurant advertising"],
      ]},

      { type: "section",
        kicker: "01 — The problem",
        title: "Food had no home of its own",
        body: [
          "People already share food everywhere — on platforms built for everything else. A home cook's recipe competes with news and memes; a chef has no portfolio that shows how they actually cook; a neighbourhood restaurant can only reach hungry people by buying generic ads.",
          "The opportunity wasn't another feed. It was a place where food is the main language — short, appetising video — and where a home cook, a professional chef and a restaurant can each find their audience. It also had to earn money in a way that fits that community.",
        ]},

      { type: "section",
        kicker: "02 — Decision 1",
        title: "Three users, three jobs — not one generic profile",
        body: [
          "The first decision I made was not to design one profile for everybody. A home cook wants to share and be seen; a chef wants to build a reputation and a following; a restaurant wants customers through the door. Forcing all three into one model would have served none of them well.",
          "So account type is chosen at sign-up, and it shapes what comes next: the profile, the tools and how each is discovered. The trade-off is one extra onboarding step. I accepted it because every later screen becomes more relevant, and relevance is what brings people back.",
        ]},

      { type: "video", tint: "#160f08", src: "videos/cookster-home.mp4", poster: "images/cook-video-poster.webp",
        kicker: "03 — The feed",
        title: "A feed you scroll with your thumb and your appetite",
        caption: "The home feed in motion — full-bleed food video, creator front and centre, and like / comment / save / share always within thumb reach."},

      { type: "gallery", tint: "#2a1c10",
        kicker: "04 — First impressions",
        title: "Onboarding that sets the appetite",
        body: [
          "Three bright screens set expectations in seconds — share your passion, connect, discover — then hand over to fast social sign-in and the account-type choice. I kept onboarding to three promises and one decision, so a new user reaches real food content quickly.",
        ],
        shots: [
          ["images/cook-ob1.webp", "Share your passion"],
          ["images/cook-ob2.webp", "Connect & engage"],
          ["images/cook-ob3.webp", "Discover culinary delights"],
          ["images/cook-account.webp", "Pick your account type"],
          ["images/cook-signin.webp", "Fast social sign-in"],
        ]},

      { type: "section",
        kicker: "05 — Decision 2",
        title: "Posting speed is the whole product",
        body: [
          "A social platform lives or dies on how many people post, not how many watch. And food content is made in the worst possible conditions: in a kitchen, mid-recipe, with one clean hand.",
          "So I built the create flow on the record-edit-share loop people already know from mainstream video apps, rather than inventing a new one. It's less novel, but there's nothing to learn — and that familiarity is what makes posting from a kitchen realistic. Details like dish type, tags and location come after recording, so they never delay the moment of capture.",
        ]},

      { type: "gallery", tint: "#30210f",
        kicker: "05 — Create",
        title: "Record, edit, post",
        body: [
          "Camera permission is asked in context, at the moment it's needed rather than at launch. Editing tools stay out of the way, and posting ends on a clear success state — so the loop feels rewarding enough to do again tomorrow.",
        ],
        shots: [
          ["images/cook-record.webp", "Full-screen record"],
          ["images/cook-edit.webp", "Voiceover, filters, text"],
          ["images/cook-post.webp", "Add details & tags"],
          ["images/cook-posted.webp", "Published successfully"],
        ]},

      { type: "quote",
        text: "The best food content is made on impulse, in a kitchen, with one hand. If posting takes more than a minute, the moment — and the meal — is gone.",
        cite: "Design principle"},

      { type: "gallery", tint: "#2a1c10",
        kicker: "06 — Discover & community",
        title: "A place to find your next favourite dish",
        body: [
          "Discovery blends editorial and social: trending hashtags, sponsored highlights, and a search that filters across videos, people, live streams, restaurants and chefs. Messaging keeps the community talking, so following someone can lead to a real conversation.",
        ],
        shots: [
          ["images/cook-home.webp", "Home feed"],
          ["images/cook-discover.webp", "Discover & trending"],
          ["images/cook-search1.webp", "Search across everything"],
          ["images/cook-search2.webp", "Filter by chefs & restaurants"],
          ["images/cook-messages.webp", "Community messaging"],
        ]},

      { type: "gallery", tint: "#30210f",
        kicker: "07 — Decision 3",
        title: "Monetisation without breaking trust",
        body: [
          "Restaurants can buy advertising packages to promote their content, which turns the community into a real growth channel for food businesses — and gives Cookster revenue from day one.",
          "The risk is obvious: a feed full of ads stops feeling like a community. I designed promotion to use the same content formats as everything else and to be clearly marked as sponsored, so restaurants reach people in a form they already enjoy, and users always know what's paid for.",
        ],
        shots: [
          ["images/cook-chef.webp", "Chef profile"],
          ["images/cook-restaurant.webp", "Restaurant profile & map"],
          ["images/cook-packages.webp", "Advertising packages"],
        ]},

      { type: "gallery", tint: "#2a1c10",
        kicker: "08 — Built for everyone",
        title: "Arabic and English, both first-class",
        body: [
          "Cookster serves an Arabic- and English-speaking audience, so language is a first-class setting, not an afterthought, and layouts are structured to mirror cleanly between the two. Food is universal — the interface should be too.",
        ],
        shots: [
          ["images/cook-language.webp", "Change language anytime"],
          ["images/cook-editprofile.webp", "Profile & preferences"],
          ["images/cook-camperm.webp", "Permissions in context"],
        ]},

      { type: "principles",
        kicker: "09 — Success goals",
        title: "What the design is built to move",
        items: [
          ["Activation", "A new user publishes their first video in their first session."],
          ["Creation speed", "From opening the camera to posted in under a minute."],
          ["Retention", "People come back because the feed fits the account type they chose."],
          ["Ad health", "Restaurants renew their packages while sponsored posts keep engagement close to organic ones."],
        ]},

      { type: "section",
        kicker: "10 — Reflection",
        title: "What I'd do differently",
        body: [
          "Cookster covers the whole loop — from a first onboarding tap to a published video, a followed chef and a promoted restaurant. If I started again, I'd put the record-to-post flow in front of real cooks in real kitchens before high fidelity, not after. Everything depends on that flow, and kitchen conditions are hard to imagine at a desk.",
          "Next, I'd instrument the goals above so each one is measured rather than assumed, and test the Arabic layouts with native readers across the busiest screens.",
        ]},
    ],
  },

  {
    name:    "SC Bank",
    eyebrow: "Usability Research · 2025",
    desc:    "A usability study that turned real SME feedback into a friction-free business banking app.",

    img: "images/scb-cover.webp",
    thumb: "images/scb-thumb.webp",  // animated preview (slide + prev/next nav)

    bg:     "#0b1a2e",  // screen background colour — deep ink navy
    fg:     "#e9f0fa",  // text colour on this screen
    accent: "#5aa9f0",  // highlight colour on this screen
    dark:   true,       // true = dark background, false = light background

    // Colours used only for the generated placeholder artwork
    stops: ["#123253", "#08131f"],
    blobs: ["#5aa9e6", "#1f5f9e"],

    // Facts shown at the top of the case study
    role: "Senior Product Designer — Usability Research",
    year: "2025",
    type: "iOS · Android · Web",

    timeline: "2 testing iterations",
    team:     "UX research + product design",
    tools:    "Moderated remote testing · Figma",

    // This case study is password-protected. Its text and image list are
    // encrypted (AES-256-GCM, key derived from the password with PBKDF2), so
    // editing it here will not work — ask for it to be re-encrypted instead.
    overview: "",
    work:     "",
    locked: {
      iter: 600000,
      salt: "h6RTbc76Hy2G9UcoWB6BdA==",
      iv:   "8Od08wzGVHf5XcXa",
      data: "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"
    },
  },

  {
    name:    "Greenz",
    eyebrow: "Q-Commerce · 2025",
    desc:    "A 15-minute grocery run, rebuilt for the way people actually shop.",

    img: "images/greenz-cover.webp",
    thumb: "images/greenz-thumb.webp",

    bg:     "#10281f",
    fg:     "#eafff6",
    accent: "#38d39f",
    dark:   true,
    stops: ["#1c5f45", "#0a1f18"],
    blobs: ["#4affc0", "#1f8f6a"],
    role: "Senior Product Designer",
    year: "2025",
    type: "iOS · Android",
    overview: "In quick commerce, people decide within minutes whether an app can deliver to them, now — and close it if it can't say. I led the design of Greenz, a grocery delivery app for Egypt, around that one question, so a first-time shopper can finish an order one-handed in Arabic or English.",
    work:     "I put location before any product, removed the sign-up wall with guest browsing, gave first-time users a concrete reason to place a first order, and treated live tracking as the screen that earns the second order. Each decision targets a clear goal: a faster first order, larger baskets and repeat purchases.",

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
        body: "Greenz is a quick-commerce grocery app for Egypt, where a grocery run competes with 40°C heat, dense traffic and the expectation that anything can arrive in minutes. Shoppers open these apps already impatient: if the app can't quickly tell them whether it delivers to them, now, they close it and message a local grocer instead. As senior product designer I turned a broad “order groceries fast” ambition into a focused product a first-time user can finish one-handed, in the language they read most comfortably."},

      { type: "principles",
        kicker: "At a glance",
        title: "The short version",
        items: [
          ["The problem", "A grocery brand nobody knew yet, competing with a phone call to the corner shop. Every moment of doubt before the first order meant a lost customer."],
          ["My role", "Senior product designer and the only designer, working with a PM and two engineers for six weeks. I owned the IA, flows, UI and design system."],
          ["The approach", "Answer “can you deliver to me, now?” before anything else, remove every wall in front of the first order, and make the wait feel calm."],
          ["Success goals", "A first order in under three minutes, more guests converting to buyers, and customers coming back for a second order."],
        ]},

      { type: "stats", items: [
        ["6 weeks", "brief to handoff"],
        ["13", "core screens"],
        ["AR · EN", "bilingual, RTL-ready"],
        ["1", "reusable design system"],
      ]},

      { type: "section",
        kicker: "01 — The problem",
        title: "A grocery run that ends before the ice cream melts",
        body: [
          "Quick commerce lives or dies in the first few minutes. People open a grocery app already knowing what they want. If the path from craving to checkout has friction — a sign-up form, an unclear delivery area, a price that changes at checkout — they leave.",
          "Greenz had an extra disadvantage: nobody had heard of it. A new brand has to earn trust on the first order, with nothing but the interface to do it. The brief was deliberately open — a logo, a promise of fast delivery and a market — so the product's clarity was my responsibility, not a spec I inherited.",
        ]},

      { type: "section",
        kicker: "02 — Who I designed for",
        title: "Two shoppers, one thumb",
        body: [
          "I anchored the work on two people: a busy parent restocking essentials on a lunch break, and a student ordering a few items late at night. Both shop on a phone, often one-handed, and switch between Arabic and English mid-sentence.",
          "That framing set three non-negotiables: every primary action within thumb reach, price and delivery time visible before any commitment, and genuine parity between the English and Arabic interfaces.",
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
        kicker: "04 — Decision 1",
        title: "Location before products",
        body: [
          "Most grocery apps open on a shelf of products. I opened Greenz on a map instead. Showing products before knowing the address risks the worst moment in quick commerce: filling a basket, then learning at checkout that the app doesn't deliver there, or that half the items are out of stock.",
          "Confirming the address first costs one screen, but it makes every price, delivery window and stock count after it true for that shopper. Onboarding is kept to three quick promises — on-time delivery, shop by category, pay your way — before the map.",
        ]},

      { type: "phones", tint: "#0f2b20",
        caption: "Onboarding — three promises, then straight to a live map and a low-friction way in.",
        shots: [
          ["images/greenz-ob1.webp", "On-time delivery"],
          ["images/greenz-ob2.webp", "Shop by category"],
          ["images/greenz-ob3.webp", "Pay your way"],
          ["images/greenz-start.webp", "Sign up, sign in, or guest"],
        ]},

      { type: "split", side: "right", img: "images/greenz-promo.webp", tint: "#0e2c1f",
        kicker: "05 — Decision 2",
        title: "No wall in front of the first order",
        body: [
          "A sign-up form before browsing is the classic way to lose a curious first-time user, so I added “continue as guest”: people can look before they commit. The trade-off is that the business learns less about a user up front. I accepted it, because for an unknown brand the first order matters more than the first profile.",
          "To push that first order over the line, a first-order coupon — GRNZ14, free delivery — appears as a friendly full-screen moment instead of hiding in a menu. Search, a category grid and a Best Sellers rail then serve both kinds of shopper: the one who knows exactly what they want, and the one who's browsing.",
        ]},

      { type: "full", img: "images/greenz-home.webp", tint: "#10281f",
        caption: "Home: address and search pinned to the top, a rotating promo, scannable categories, and a Best Sellers rail — discovery without the scroll fatigue."},

      { type: "section",
        kicker: "06 — Decision 3",
        title: "Design the wait, not just the order",
        body: [
          "The most important screen in a delivery app comes after payment. The wait is when a first-time customer decides whether to trust the brand again. I designed live tracking as the calm centre of the product: a clear 30–40 minute estimate, the rider's name with a one-tap call, an itemised summary and the delivery address, all on one screen.",
          "Nothing on it is decorative. Every element answers a question an anxious customer is already asking: where is it, who's bringing it, what did I pay, and where is it going?",
        ]},

      { type: "full", img: "images/greenz-track.webp", tint: "#0c241a",
        caption: "Live order tracking — the screen that earns the second order."},

      { type: "quote",
        text: "Speed is a feeling, not just a number. The interface has to stay calm while everything behind it moves fast.",
        cite: "Design principle — Greenz"},

      { type: "section",
        kicker: "07 — Closing the loop",
        title: "The unglamorous screens matter most",
        body: [
          "Empty states, confirmations and rating flows are where most products go quiet — and where real products win or lose trust. Greenz's empty Orders screen points people back to shopping instead of leaving them stuck.",
          "The post-delivery rating is a single tap on a star, with an optional review, so giving feedback costs almost nothing, and the thank-you screen closes the loop with a little warmth.",
        ]},

      { type: "phones", tint: "#0f2b20",
        caption: "Empty state, rating and thank-you — the details that make a product feel finished.",
        shots: [
          ["images/greenz-empty.webp", "Empty orders, with a way forward"],
          ["images/greenz-rate.webp", "One-tap rating"],
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

      { type: "principles",
        kicker: "10 — Success goals",
        title: "What the design is built to move",
        items: [
          ["Time to first order", "A new user goes from opening the app to a placed order in under three minutes."],
          ["Guest conversion", "More guest browsers place an order without being forced to sign up first."],
          ["Basket size", "Categories, Best Sellers and promos add items beyond what the shopper came for."],
          ["Second order", "Customers who tracked their first delivery come back for another."],
        ]},

      { type: "section",
        kicker: "11 — Reflection",
        title: "What I'd do differently",
        body: [
          "With six weeks, I designed from strong assumptions about impatient shoppers rather than from research with them. If I did it again, I'd spend the first week watching five people order groceries on their phones, to test those assumptions before they shaped every screen.",
          "Next, I'd instrument the goals above and use them to settle the open question on the home screen: which discovery pattern — search, categories or Best Sellers — actually builds the biggest baskets.",
        ]},
    ],
  },

  {
    name:    "Qatar Credit Bureau",
    eyebrow: "Fintech Platform · 2026",
    desc:    "A two-sided credit platform: a calm consumer app and a powerful bureau admin panel.",

    img: "images/qcb-cover.webp",
    thumb: "images/qcb-thumb.webp",

    bg:     "#1c0a12",  // deep burgundy
    fg:     "#f7e8ee",  // text colour on this screen
    accent: "#ec2f5b",  // crimson highlight
    dark:   true,       // dark background

    stops: ["#5e1330", "#12060c"],
    blobs: ["#e11d48", "#8a1a3a"],

    role: "Senior Product Designer",
    year: "2026",
    type: "iOS · Android · Web",

    timeline: "End-to-end product design",
    team:     "Product design + engineering",
    tools:    "Figma · design system",

    overview: "Most people only see their credit data after a loan is refused. Qatar Credit Bureau needed the opposite: one credit record that consumers can see and control, and that member institutions can query accountably. I designed both sides end to end — a consumer app and an admin platform.",
    work:     "For consumers I designed for reassurance: the score first, every access request visible, disputes a tap away. For the bureau I designed for control and accountability: real-time operations, analytics and a full audit trail. One bilingual design system holds the two together.",

    // ----------------------------------------------------------
    // RICH CASE STUDY — two-sided product (consumer app + admin)
    // ----------------------------------------------------------
    story: [
      { type: "lead",
        body: "Qatar Credit Bureau (QCB) is the country's source of credit information — the institution banks, insurers and telecoms rely on to decide who they can lend to. Its mandate is transparency, yet credit is something most people only see when a loan is refused. I designed a two-sided product around one credit record: a consumer app that gives individuals and companies control over their credit story, and an admin platform that gives the bureau and its members analytics, audit and management tools. As senior product designer I owned both experiences end to end."},

      { type: "principles",
        kicker: "At a glance",
        title: "The short version",
        items: [
          ["The problem", "Credit data was invisible to the people it describes, and every access to it had to be provably legitimate."],
          ["My role", "Senior product designer, owning both products end to end — the consumer app, the admin platform and the shared bilingual system."],
          ["The approach", "Design the same record two ways: calm and reassuring on a phone, dense and accountable on a dashboard."],
          ["Success goals", "Consumers check their credit before applying for a loan, disputes move into the app, and every access is traceable in one place."],
        ]},

      { type: "stats", items: [
        ["2", "products — app + admin platform"],
        ["14+", "core screens"],
        ["AR · EN", "bilingual, RTL-ready"],
        ["1", "shared design system"],
      ]},

      { type: "section",
        kicker: "01 — The problem",
        title: "Credit runs on trust — but people rarely get to see it",
        body: [
          "Most people never see their own credit data until a loan is refused. QCB's mandate is the opposite: transparency. Give consumers and companies direct, secure access to their score, to every request made against their data, and to a way of disputing what's wrong.",
          "On the other side sit the bureau's members — banks, insurers, telecoms — who must query that data responsibly, and a bureau team that has to prove every single access was legitimate. One credit record, two very different jobs to design for.",
        ]},

      { type: "section",
        kicker: "02 — Decision 1",
        title: "Two products, not two permission levels",
        body: [
          "The two sides pull in opposite directions. A consumer looking at their credit score is often anxious: a number can feel like a verdict. The bureau's staff need the opposite — dense, precise information, fast, with nothing hidden for the sake of calm.",
          "The easy route was one product with two permission levels. I chose two products on one design system instead: a calm, focused mobile app and a data-rich web platform. It meant more design work, but it let each side serve what its users actually need.",
        ]},

      { type: "quote",
        text: "For consumers the job was reassurance. For the bureau's members it was control. The same credit record had to feel calm on a phone and powerful on a dashboard.",
        cite: "The core design principle"},

      { type: "gallery", tint: "#2a0f1a",
        kicker: "03 — The consumer app",
        title: "Your credit, in your pocket",
        body: [
          "The app opens with Qatar ID login and biometrics, then leads with the one number people care about — their credit score — framed as reassurance rather than judgement. Personal and company profiles live under one account, and pending consent requests and recent activity appear the moment you land.",
        ],
        shots: [
          ["images/qcb-m-login.webp", "Qatar ID + biometric login"],
          ["images/qcb-m-home.webp", "Credit score, front and centre"],
          ["images/qcb-m-activity.webp", "Consents, disputes & history"],
          ["images/qcb-m-more.webp", "Profile & settings"],
        ]},

      { type: "section",
        kicker: "04 — Decision 2",
        title: "Every time a bank looks at your file, you know",
        body: [
          "The most important decision on the consumer side was to turn invisible back-office queries into something a person can see and act on. The Credit Activity view shows which member requested access, exactly what they can see, and until when.",
          "Disputes and history sit right alongside, so raising a correction is a tap — not a phone call and a week of waiting. Visibility is what turns a credit bureau from something that happens to you into something you can check.",
        ]},

      { type: "gallery", tint: "#240b16",
        kicker: "05 — Buying a report",
        title: "Official reports, without the bureaucracy",
        body: [
          "Consumers can purchase official credit reports — physical or digital — through a flow that feels as familiar as any shop: a clear cart with QAR pricing and vouchers, a checkout with local payment methods, an unambiguous success state with a direct download, and a light feedback prompt to keep improving.",
        ],
        shots: [
          ["images/qcb-m-cart.webp", "Cart — physical or digital"],
          ["images/qcb-m-checkout.webp", "Local payment methods"],
          ["images/qcb-m-success.webp", "Success + instant download"],
          ["images/qcb-m-feedback.webp", "Rate the experience"],
        ]},

      { type: "section",
        kicker: "06 — The other side",
        title: "A control room for the bureau",
        body: [
          "Behind the app sits a web platform for bureau staff and member institutions. Where the app optimises for calm, the platform optimises for density and control: real-time operations, deep analytics, a complete audit trail, and the reference-data management that keeps the whole system accurate.",
        ]},

      { type: "gallery", tint: "#2a0f1a", wide: true,
        kicker: "07 — Operations & analytics",
        title: "Everything the bureau needs, at a glance",
        body: [
          "The home dashboard answers ‘what's happening right now’ — inquiries, reports, disputes and active customers, with top-performing members and recent activity within reach. The analytics suite goes deeper: inquiry-purpose trends, credit-usage by member sub-category, peak inquiry times, and ID-volume breakdowns that help the bureau read demand.",
        ],
        quote: "A dashboard for a credit bureau isn't a vanity chart — it's how a regulator-grade institution watches its own heartbeat.",
        quoteCite: "On the admin platform",
        shots: [
          ["images/qcb-a-home.webp", "Operations dashboard"],
          ["images/qcb-a-analytics.webp", "Credit usage analytics"],
        ]},

      { type: "gallery", tint: "#240b16", wide: true,
        kicker: "08 — Accountable by design",
        title: "In a credit bureau, every action is traceable",
        body: [
          "In a credit bureau, being able to prove who did what matters as much as the data itself. The System Audit module logs every access and change — audit logs, data loads, email, file movement and SMS — all searchable, filterable and exportable. Around it, focused modals handle the careful work, and any destructive action needs explicit confirmation before it happens.",
        ],
        shots: [
          ["images/qcb-a-audit.webp", "System audit logs"],
          ["images/qcb-a-record.webp", "Add & edit records"],
          ["images/qcb-a-product.webp", "Product & pricing management"],
          ["images/qcb-a-popup.webp", "Guarded confirmations"],
        ]},

      { type: "section",
        kicker: "09 — The system",
        title: "One product family, two scripts",
        body: [
          "Qatar is bilingual, so English and Arabic are first-class across both products, with layouts built to mirror into right-to-left cleanly rather than bolting Arabic onto a left-to-right skeleton.",
          "A shared design language — the QCB crimson, generous spacing and a consistent component set — keeps the calm consumer app and the dense admin platform recognisably one family, even though they serve completely different users.",
        ]},

      { type: "principles",
        kicker: "10 — Success goals",
        title: "What the design is built to move",
        items: [
          ["Checks before loans", "More consumers check their own credit before applying for a loan, not after a refusal."],
          ["Disputes in the app", "Corrections are raised and tracked in the app instead of by phone or at a branch."],
          ["Report purchase", "Buyers complete the report checkout without dropping off at payment."],
          ["Traceability", "Bureau staff can answer “who accessed this record, and why?” from one screen."],
        ]},

      { type: "section",
        kicker: "11 — Reflection",
        title: "What I'd validate next",
        body: [
          "Designing two products on one system was the right call, but it doubled what needs validating. My first priority would be usability-testing consent management with real consumers — it's the feature the product's promise of transparency rests on.",
          "After that, I'd test the Arabic layouts across the dense admin tables, where right-to-left problems hide, and instrument the report-purchase funnel to see exactly where buyers hesitate.",
        ]},
    ],
  },

  {
    name:    "Alrajhi Bank",
    eyebrow: "Banking · Web & Mobile · 2023–24",
    desc:    "Multiple products for the Kingdom's largest bank — insurance, finance, and a payroll revamp.",

    img: "images/alrajhi-cover.webp",
    thumb: "images/alrajhi-thumb.webp",  // animated preview (slide + prev/next nav)

    bg:     "#082a52",  // Al Rajhi deep blue
    fg:     "#e9f1fb",
    accent: "#3a80e0",
    dark:   true,

    stops: ["#0f4a85", "#061d3a"],
    blobs: ["#3a80e0", "#1f5f9e"],

    role: "Senior Product Designer",
    year: "2023–2024",
    type: "Web · iOS · Android",

    timeline: "2023 – 2024",
    team:     "Product design, research & engineering",
    tools:    "Figma · Mixpanel · Hotjar · usability testing",

    // This case study is password-protected. Its text and image list are
    // encrypted (AES-256-GCM, key derived from the password with PBKDF2), so
    // editing it here will not work — ask for it to be re-encrypted instead.
    overview: "",
    work:     "",
    locked: {
      iter: 600000,
      salt: "c9n4U5af0egV2BD65WuSsA==",
      iv:   "oBHw99Sf0Vc27XH3",
      data: "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"
    },
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
      salt: "v/nD2MZsN8Edi+0GbV/RKA==",
      iv:   "jfw1C+naiRjTpNbV",
      data: "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"
    },
  },

]; // <- keep this line. Add new projects ABOVE it.
