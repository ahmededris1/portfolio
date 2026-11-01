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
    role: "Senior UI/UX Designer — Usability Research",
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
      salt: "gjoNJxbHcoWNq/qX9OMU5g==",
      iv:   "HSgY3bYWFHmxRoVM",
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

    role: "Senior UI/UX Designer",
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
      salt: "MXb1BR7OpFozVMRxdk2E/Q==",
      iv:   "qcxqLOWT8oPtVIVx",
      data: "7fE7GIYAK95eCQ9L2ZRufbmmiug+99Bi7ISzGQXAA2KNOMmtPUxEMoVhsuUcykXKsiqRttwh1sSl4yWxF/whgxEplvwqNYnZ4F9bAabOIGoO4SYUDFf+zqHbovQI2BuhyRo39jmI5vbKCXjRaM5NyrA5Qr+OsnLQmcB7FWA3OzXXnFqfPcVVlXU8k+S3enSqEBGlrvolXg6bkVA4nYfY3gfTQwXFKc4Any1a8b8FKz5vzCVx2vXSqgUy9P2h0UVK2u85UvEnwKnFKkft0Uj6s8Xm+Bi6YRn5Am2reHnWH0h4mYNInpyfJPn9MDwhTbDnI9lMHmrIKKDrpTCb4nbil5KLt06qKCtBoRZNYrz40vLavQ+6PGDgD9iDTiey0DEiGD/QkeXpUW1dAkWb3Y4REEB+4Zg/9esHktL3f44wjK41OM6xQQnBWYTsp2cn7ktvVrZoMJolYrmR7kA31bgBWVcexch/op5FxgLkIMR/Bi0K+Iw6toNTf3wr3eSgcJB3/KAn4A6zI54cIJJK+aBxwaveeF9q1Z0kA/YTMrzy8mHs4B1ouyHBriA+TUle7IFnOPbmE1VNOQRHYhuZV6NhThN+RtTZF/qOCjWoMl0GMIVUFYmdDx0ZMu3ZrqqLcEHyEPuNaclyKCGjncrElinZNj3gQncZQbqCLXwWnkRQMYKnBPyl5rVRc1ZsPHEpkJ7r7MBOreaVUDbtAPlTun7Gcce7sLkHlf3pf3Uj1Nwhf8UX9zIbLW/bYp+hCitykCbCn6yIvm3KmlX2oJRQnqJHYM6xJ7gbmNCH0WlvVgepUyVRk80uhB0E4zbf8egyFifWZZ83+Peh5ihE4Uw4AcgU06c7jDj2eczZrSz0YmBaeN3YcqwuFS7HY2s7+JGFjtsYhksjrFRHsJ5bzOVZRjgKlsizuYkp6iLrgKbt9IhK8l6x2cxwT2r1OEOEQ/RUBd2xZYYh6/mBHHL2hsjPig6nmIsxW7pf0OHudO+2MQgxHs1uFDVVuK5iqY82oD+AW7kG455r9wIvOeVZSEnmPN7crKfHJyrAr+rE+qk69yiTiwFrGAHI60e8+XQGqOYeKLmFxleEO4+IZZ49zS43QMFQLk/DFQXcWK8lwEuLbDt+0t61EMd+wKEmvBK3rrozAsb0Q7E6usGrhYWwdslQiIJfT+ResV3w68bCT+NxtdPjpBGQrEl2ZUG6oki/kmg6mxm3DldrZNdjGpbXKpK7eNCtHFv6tjUCSABJMQDIBknT1X+C0W8N25ORChbkF6b9154zRIgHhJlXT3eKzQfC7HWxhsbwevMlt62Buogzh15xWVitpSm/r2/8J55xo1U82EBbxd5X/bFIb6EQsce32ObSurNCl2mqCubP34wfDIHs/ww+iQi5my/K2NyxYriJNq3RDWjZRoIZ1cG5GnUAaRV//aF4u3cjHWaktjzROs8Ch9gwWwEcLSq6TEFwh3z5silrgdHI2guXt9qE51zq6+5BZtvj8sqLdaxbJUlsqEYTxfsWqK0pA+p2hST601qt/JVLfJC0TJEswf+stOd/MbcFs2DutERDTyyKKfkTnThUvtlr0/pBTJ/TRmU4ZMQBkaBGkxyK3cD1NHjWvqoSQ4sUOjyNEil1rRbU8ifDS4GHo+RbmupEeVw3k0aTsYMg6tw2HPaDStke9jSk8EF/D+N7WjpmwEwRxdIYYHH1Dlyos/zBWJpDmRVH1t6zii4JlArb/p07ma46if3NkHu0h7rSlrnpuYc+gt7Yfv0DRNaJV5p5ea8T77EGImfMPSg5b5ucNrTwXprQfStE0SRb9C97FEeJvtGWxm9CFfAfgkiliTfblmBnGRmqS0qkzkBcKvyFcyB5Be6IGZOGr7U09+0UCiVgeJXBWrBY7lUmdMYC9Gh1vuplWr0Y9D24I48N9EhhVNRqN1RXKpS1OF4CJbe7Gvl+/HGCmH07uFXOqLx/BWe9HR2XT0nUTOsY2BjknnzJx0lxnrVhBoMkKzsvU7I6Dnb4Vh/E2Jk60P3Ml0T12Q2wn2EjPzux/EtjI3urXnJLx5dhQBJsO+WVouGZZ+09o583FioY4hVQIIq6Mws9Fk5rjgPmjguhsM4llqJqJJZ8HjmcRRgvSPIzx0au7P+AlF9jGux+LaJar781OvTCsHgY7bVtwtGZUytftaoQyoYGI3AVGMYXTPBNoABK2dpMsCX+w/Jlw12fODEU1TYs1eeJPpTm5Vlt5JIvk0ARBggxU9WyAWaFw9qUwVrkqNhrG8qVpHh38slTbncxKAmEKPz0GFGQ4gLgXfvidLES1Vx7BdRC8MXzj8yxbMrVMmcRI0bVZ2aABLCf0Lt6lhb7Unvh9lD8bAZz4xkGZTfuibvJqsVg9C5LKKPIzkio1cGBVWuDLwfz+J+Os2yIxmI8odu3dhrWYFpy8MWCr5ezr5P4EGN0gvDN+d4SlKaL5IbBFprS7yhRd3yv4r/v7st1K57yCXzjCmYBb8BQs2OXlyEuh0pxjoHXDS28rjM6OcBBcneKrlTQc1U3mJN/9kevE5xQ1yzNjKT04rpfi3e7u5M3u+CyRkTLJZ9jLvLVqCLA15PcSFE9/c7+rapmJJgdFiKaB+F8UY2Vk7hxtigmnYd45fuC7cemtFLeKmqlu8gx3FF3stzRvXUN/F1fF5aUmMWk/biG+r9YpSofFpG8LBpgKJvy/MZu9J8gK5zelC+j6prso6qrtVspz07ACRoHSdFtMalhBGM8caWMFqUSNrQc/huoRzMdZrY5CWMLPBw1AxE0Gt6Op6SE/lL/ViUIfJwCC7n3mGZExpTAnTZ0L8GSrysrs/ytwNZ1lEJ4cU3EIRCzG1usqW93x0CK/mBHPZwmz6rnGoRSrXk4eOV+Tg4gN8lOEVKAhL04q0K8L9iXLezB568St6Wkue00gl3lVDOQnQmtmIBLyURqkSwgbWs9LP4jf/goMfNgHNuRuXUQU664/HSePYm+qDuWFK9/7VhkA0MrDkYWHBChr6OR87D1SckF0yc6oYIrw6mcA3HzRVYYkFzIBFehWG15azDGcDbImayYrO0lCdG0CvSZQhuk17SNoDa+qK2LXeFvHM8BoGVGGg0M/5QSs80aopCqnhr3CsR5OGzbAsoDlHT4xsycViyYcuZIFxJkXAKXz7hjYYV5t4ZVt5WPPtZN+Zg5GWtBy6jDERTS6fP7KmjcvUtrmVJ617rfNTBf3yxpmJMdL/p4SjD76t62Ax5aSx/70/F1Hq1ESws5GLC/wI+M1LdaFIt7sjno+ZOOlwv1aYsEHBINXuHP4mlXfQNGriXInYVSN35b+ahxY/Wk+E6rxbZtarPDzLl7o/GJgs6AXgQhyBxru4NQz44tFIJJDav8Rcef8PPlc/dkV12nLdhwUQwv3tM28v3jlZ/ncsdRgLP5F9BY//TxLiCzsd2Wa+f9Wkn64ZLLkPofQ7jIH/umxnUdZcE+VPQKlCLdEVdVYaaqdefgX9vlfr1wLqelApmj2IPDIJcNICdFUL9I/gfYBY3YXUCKBD6ievYs8WZw4GbvoT0iLggFTUClAx58gzfL3KqiH+Ghy7HQ8AkduUvtDzTijze4XO31EL45knSIDg3t3ze0ZVzncQHDHhd3h2AeaKKIgOtoGwZVLlQINL5yqP/+8hJA3pEogoVX3hrRiYH8Rosl+aAwtuJYAta5I17t/JjAQftffp2LjOme0V0IG92G7pHlXIljmf7pQ4lQkNrXSCNXxf8WnYNGhWd5HeeKjcLbs57/LFfqCvec3akIVTGZMUzkMlh151B6ZdqtMr0/2xeYVzTasCXFGYbyHuQKVPV4+f+ffK1TiGzRqqdSEz/nn4x6nw2qgzcJpbkpXPNzAR77Y6bLMlVp+ccNBYioVfCsSvxRxMJanv7RD+qWDDBUBytEpC9w1iCM4m0mIxHcNGhsoDCMdHUt6sxWmhnbxco6M4klnTdQglD/Jc+RDhliJvtYtxz7aPKzhnXptqAOd1++wRwxD49rPx0xt9L2hGPTTeaM646z/+QBwKy0lAkx9utoMf68OMCfeB3F82pMNb0sHhSN8U6NYXkmF6x3fVHaCgn6SPZl4ekNtKbGs3U0Q8RqPboXGKdMQyakg+xuhFZNXf8i/FeEGI5q4sJvcXJb95lSoDqEGymFhiQwpowIqujjssIAH51HqOq+7Poc2NBzthHKwCYo+TXidy9Fc6pusqSToEJboMc7uFR17agr2j5kD6dvXdK4gjqSCL/qwwpSCd52uC7kRyLoks9EtC/8Gaa8Lidz8QZXqSS432kMJUGqEhsDSVa57jnwi6NcZv36kQjcMNBGQ2UXku0eIoZ+HKS+UkMyeRLivTaLgNWPTa0Yp+0xKLf6ypTtOkYf8BXms0c9T+pYzEA2HBh9nZmeSL4Z4Yo3MggF3TzZQ3X6zI5krGRPo36OhJxk8CklZ/HvMpMsQfvyHtohP8w3HKBV14ywGqXMJirnvDSNfSQTj8uoT/rxawrMY/B6wmd6cQot43vd8xJe2E/gT8EAnZvHy6xD0Rve6uw50z+6n9Tfur1yFyaNOiwF9+NCM9FPMe5slIO7iahK71IlQFXXq8+jZQAT+JWi8TwhekthBPXAuBTHI/9hJadgLVcGt/77RgYCOEJ38ahEogNJb3dj9d/Tpuep67LcqSK+Xvcbs9CnMYB6sKAFU1WzUi3v8mC5i0hkhIsD78aOkAeMzuqBkYWu82++Niuk9QjtssYR/JO+qHa6cCo4bltqgbc4mB/8WDh/XzzxvtwKhebT7As549NKHN8K4Cyp9aq0C/GqNwcae/dUjtx0WeQpGf9YfFvKy5psPXZHuYsIxH1+ZnVSNNh5C3svgMVK4rtsH4XYqcKHQ9Hbqrb/PYoXiUEVmQh2WZmQAjs1aP+isDEzKdFR3VuQzwHcC062QNrhy2PFIRCiJOKpYYM5f/CfXZ9iPlJO8fpZp16Z0nWVpP/EXZmwXxSBjIUiXj85qLxEVEfY90/CFOOI+sa+R+p7upOY9d2mvkZxB327+wAd0ZN3a/VtrAdk/osmfrPUU3YeUsZKSqnvPBaPcRplBa9U+ShQmxsbU2Y/oLFwnJjQxTVwvaan359vvuqzHtsNGIjmA/ImHOawdSF1cvoC+iyY79zHZ8Y8im/FaSPfqDU/9v7MEYvhQfYJNyy5OSawNy6aaKweo2bv4ffbuLHGcMv6lHjIGflO0JS6ScFmOw4bywk1pEmVE8djOeP5qjvSCCMSI73e8TC0kvsyAGXsV5Db85FBvHDr654gGLi/ZzpwkHzg/eskS7WHOC3k3heUjz4dmrpaNeNJJWFrK/mzd5xyTWz1gDfdKFKEmIDcXVXK8m8V5jBseBh0NcBQoL0PdPmjnzqHb6CsKutT9FWfB0BmD3xDRpQKEZzQQRHxEbE6SeM6AjYzYCHf63thmlXRddYmZDZTgqmtkE1zziJtfgMHLSnGpJ0ukWkTMw3Hn0ZM4wijTEBo3H1OGMG25Xn3uW49EFVB5BzvceDeQs4CpQP/95vbHLFt4UpA/X6IKzAVxFGs0nF4NAjLSObeMpKwQQy1IEJapx7aTbAhnm+bmAUh6JDELz+T5opH1iqrVt95jGGbd2QPGMoOkQ8U96IvE4yzv/yAA71fVmIaw7XgPP4vo/Y2mcPjOYz1+/0D/7+Tekkx4bCkvlsvV26ZQZizpIvAjX+mhUWmRY7EjAe5yLB2Ng4KMb4MmL9pMiSAmahv0wrdRwZK4eSejrcHLOO6HqXlNPDU4scC51zsjtQV/aq7n0geuNPthMoIXd1dUbF1BMufHoXXdJlaCzEwvNcWF7ymfTt2bx2F5tsBJQJzIfWeaFBqrQTha+dcUFD3izFmM8XdOxFwOSzgMTf1tWeC826j3wlTZjvIHcM29dc6BdBWQHC5JsbJCRRyCtig4pDcOfxueF0Ue2zpwHKnBGx6mclUvyCT7+Su6tHt5lbxoeKokvk7YZHEAtJeaql6tyOsAALIQejG+JWD97KzCdJZ/CRcWYajzu/wVGxo3g7lUm4HIvWXZayI8tB4cVA/xqQjlGryHwil+va38UIiXOqPEGoQFglqUGf/r0rKCiRTYSrLmM6UfUddJTvMglMeXd7GJNzN6M0banQWt4mFCqsKeRMbIpEWC/X7cygw1ERV3DtOAECJ4IxuPiLVavMb5bIXADttI3UJlECTZ6CO+RJPcl09Mq/4DhoDJ80mZvOaAWAaE9bcw8uD9Odt2CHFwI6Rejpozg4XINox//I4Dd7UoxIUGhH4zbq/k03hmD0WEaCPpZMklkK1omHDakeAUH80GjvPDG34ZBlbxYnXFv0ReDujs6wnh0N/H/IunR7n0JYtJRIcPxO88Vf7PfBXHWbNKvqhpSM4kYSir/1RHleYo8p6Jk7KJLxkXA2OPlpUi9ShjPiAbjb5XvfxH8ehZIna2XOJINJePdU8KldW6vaIkjqYFGuzJlL2EbDgOD5+BBIPmDZSHwa/xk/ZA+tjIQV529Xd5OnurWtMpWYST/M1sAjBG+eAPH4ykY2l8qvQlP49yphpWTTKBeOeOuvs/e636X3ijo37tcFvlZ1layQ7n41mzxQfJRswWvdBZ0DTlCt4R3P836U1gypyrxj0CIHmLf8S1SRrkXrfI92Zu8Id3mV/l4oZO3WkpO/h4QZN9Bd64EIZHDCWez8eB33IoqJn1PDNNaHexFH3I5fJCqQarD66BZWDlrUTnXa2uRYGMFZYLqM/G92spfviM4WOehBFfzwFcgfRNSPaRW4GEL4TM4UgldgpEYDgWb2WzTyfdcwGXB0xU4PKAOyrwr/cygI4RV7im7ULol3Sgy8hVkg/Qqu/z/YOJp+RXrwQRoQi/dDkBOgXNkMvguq31/a9ZYQRMxqHkLVrCJZb4mEpsxlxgYytASiVXVc57oeRAmUwpqCzQEaHYP2qATewKUtcCecwMVWLxl5XHAp11XsHqzoMI5zxBf+DAmPuQpuLND2C3Mr4VeU+qAMHwcd31EbGRfrAZnjjZX4mL5lIb62DHIpwUxl8+uSanqZDXPyURfckAQ/YsVSRWsNdI3GpB6P+ObauF9zlAmhszZyEMlJaC6wFYXCdAzpqmUWbpWFZGIXmWvXt/x6P5jiVOkJKDXZKR0rhDiMVkTRjZl6ahU5IbnK2eAqvtdeh+cA+/dwcWHNWpTqsnD9IgfSpIQ7zPd/lb+8faaRyKfhC/CS5EmQuLini//A1Im05wRK1LOOFnz/IegZro86XwlWFE7+8cX/1TOzLagFtkEk49JMIMzCrZS8N5AvgWOu7yEwtQOa6KYdlvqMKVTw8s098LI4xYkq2wbUq4pqEy+nM8H5gIWV9ZJCCpLHmt4cfyovgan3nCrmjFhGvf0KXWho9EldbZk/Jnk8PqAKOZ/X6XbZ3Lp95EAdg9OlLXcnyOdS1i/g3+gCe7JKUunNjIEYITaoNRtElZEQ8trUL8gTwjDYwFj+BNg+QMb0/v8+dPHHNMT7GO9gMV21Cenpx3eQBTqaMXujvwIaw1h0mpQSjTNsLOpryv9vMhutu1gVgfTPN5bcPj7Nu9x1zbhFHLVIlf2RtV7t9Qlk4zwNbCUcGMYBpg5FJAxBg5tpj5/aicZo8IPCeX05vuVSojBAl5pOyq86blepRqbiKu0MQF60xbaL9KQhaMCtrqXr1qdFQlycYfw8FWFrcryWgAID0IRKR2ExEEw46gE7kcKUgX2TXYqJZ0PaMgm1H7FlpIy6xk9xZ0Qdogiu7lksnmejwIzSX3CXPH+L8fpVn5AbpKZGHWvfmVQclhMrgytomlgKE9h0FltfP9DacGV5u8CmjTakeu3xKIWmy9/m0xCXX+wZEgrQJsyBjBmp5Zf4YFMQSZGx7CEZWWMKkINVfS8xW5TJSCU2S7r6YKO7288/YO790AHYy4m0neo7G7hcWv+lyozueg/iL4Nu6v5t+YYt5Id4C1wtyEAOYB5jBMuSG2sYcnd1pwA4eVoYOmnZSqBBNKTkIg5gVraZfYW3Z9ZlN5IZCPmnNPziRKvMkwJiO+7am3UpVm5fAXFnKIe5hWmAjBzIeYA/SisVzXdNX50MC6DgSQTnONa8ZiqRMzadVr3jgyWWe3dPuNikGF9UAQh29/HK9IPwWgQusoLWps/u7EbKPygfjH8yq0oVthKjyJp7e1fGsTb+FZPs7BWhaLodz5UuvVsnhGDcIM+pz3TjN2eymynH/ohkKHNzoukQbYJG4NTEJ2JTPurFg0om2noXljD9fhU66xP7Xn/snhTRU11rlSOYSPjevnztvRSofypKfaF3mQaNT3gHNHVKG9A3lwwDQkdn2Le5TnvKP8DHrSR08jzQmo2x/k3lKOU23mkYLlk3ZQS3qUntxWeWIJyQbHiyfseDZj2AZUgBnr6EzdFwtkdyYa81yMn9Ol9Lz2Fh6Mtxn5vYhmteYBxgl3CL0VbXAj7HgVYHFCoXPGp4WGLKxUPz5a0I7ork7gPzK0ac/qa4LnFszZL97VFfSIFuY812PLcMAHzcZm+0a1TvQI4iOfJYlnhrpHefLURXXUa7Td3o7ki4sfWFUCDebiThw7cJieP5mLXWwjuo/o1dF+d6Ta7D2VpAq8By/u/Y4n6frqSvZbLFu+9vHSqMoe74tU8euf3fQdsQI6uJK7EqxvUxNJZoeGb632P7uR8DfPFW/iOQnCfnMaHj9nLtOHB8lwczD5bNIjkb7q3B3t7Fw+I8KjOuTVZyuKX118/yiWYPELeNsB4Pcn1Q9WHCo8yktJO+BeWZfrTVqjEk7nailWAg8o7CeZv9iJtVuOkFGKfw4Vj2eL4OYWiRBM1nqu5xEU7dgmoB6cHTXYF1Euh3Iom9XiWbIAnvVMXF0f5i/LfhGC496+R6dvRFg+YmgO+rm6XkVREVKgepjc0l55UefBzqvH4VYcFi5ehjYkNxEQUVofvZTdkp5pj7EG/kIawIH2mJ6ac9zFrcVxsQ61OobU9QhzsITsRF9l/yrfBCM1vi1G3/FD/jHP4SLaBgGeueGM7U+Ud6RH3oJtuo7i/xWBRSvqz6ut4rJz+DShvqklb8D+wViLzVY3albfrPiLxpQGP7ruZFoiNZDuWNboREdRxNF5nm2fuXhx59Idx76RhHwcnONAflzVzD0XOSEpsILofKEgp5f3KL2cJwbWqD4ryfNjK/3PNyOXbonz5tXEpoTq5OBGZKuMOukawvQqoVquxq2u67eu62k76v/+pItknvgpDHLHxEv5rYvMlGWcWCVqde2fh7DTCjwIsrZlLmMVKFaISAxEYSUsAuxF7cnJY+6+0dAXTbIcKzbIkhP+xyqDBbYH+jzVnKycIdtfsLFE/ziYEpl6Xo744KMJJmYd/lE0Wfc6MHoEe/9EDQMOpohohAZd9NU6v975Ed5P8U0k98Lm/+B+G1O4fC1zFYVTWT6mYCo5LMoemvnbus45gqWS/cpqi1wz0WLtNEbJHd4I1zghLMC7gXWfNud5XnpPq0CRWf/x+FcfKPG0uZmEH4qvUTz2gH/M5fdIv1GfQOB76XsnoQ7f1cj/o9uBv+Sc/F3NLG1mziM/Q1rtT90yVPEAr/ZCIOJQJ6gfNyui8zfptKrlhlIrA+Mk+LEYJ7Wy1pkdosKp0/3DebMTQ18V40w+M67YLEWeOWIPHh59dXK2YME/PzQYTWLGDHh3VFXpZx8LENxs5UWPNnfLaXa7/857aTsX4/iYQmL3zSPqUU14N4AYc//Di5Ut6NuOROopxjjnwp/r1P2wdF2rMI9+WuBsjW317jO8zPRo3Al1RnyWKGiDgkKrAhpMNdedhfpKz+K4W5YC2d5vyBOuUvHu+ibPPGHcoIkFrJF1VCNfwo7QgbSRz7euRJ6Ns80pSrYc5UX5DChg1XxivYuBujmPYTOcb2c5FiLQ7ZPKkhlh/UrpTb8iNPTObebniB09D38cn+wlVLJbi+OE0rbpYs4j7l2iGuxK07CKa1uN8zkVa5eGqLbt2fHDF8Rh71Z+v74CCd+1syuR4gBl/B6+QzcfcXLj+QeCEgarILYlsHj9pheyBxdLU25jOaQAATnAt41nENDQ2+d8Ev+xjIAS8dRfQaPT6HSLfmQ/kL45osKpZkUJzV34TzVkEhaBWSu6nK/OT4apfeo2x3AMiao+UceL+8GRf/vm3U9J6ecdhHDw0obdDbOua5dfekKsY13Z2zEJsmqe2C1f1wEuG282Vi8eoo+10LE2rmRoosOYxHeLAWX8kRV92/IgjwAgsH97NK1aiU4mY2vFYiaCNtQ/6xjMik4QKiG/annFL+N9YGeYOb4k9Qj8Ebg8RCUZxkIY0j7aoT0TZE5wL5ImRJaZx9Au8ykHYa2bhZqVGLL6Qbg/GTNwvPINDmR8jxRxi87DMp8gzdZYhblfiTKmroKlbtgCsK+mWDzQwh8kOIMpVwyAShI6bwK0MojDSaLzq8bvGkHRqXhhv4u7h+eN3MTy88OJyfBD4+rvkVFZABXJ1VA+gjJWbmrIzDA0WLygmt1T7Yss+aRs8nlr32QMYnjJhjAkzvZGOfmzlXpxt1+fhzcTdfneLcU9q4MObreQyNNYAV3E3N8Xzo7wUPpicSrB8BKxJfaqaFJ7HPRcUtQm798YTphcXrggMPjKtUNKBy3bObPw4YxfhF1Xh9PhrMDPcHpWpyR4DOQyfik0PHOcG/CbRCLqZgz0ZV7eBp1Ak0WCEC77lNTvTNky+Dq7CqFNe0sHBo9yR2oLoKhJOtV22wIoEt/2W1rwZ80jnnG6AiLuMgCc++wHFFUFeUokN0LcxxsYBC4cEM1sgW5RaYPnAizKsqN/n21k/cwyjIhuVJ+6cCfl7EDidYRRJY6+L3j+/e84kgnfaV+4DwXZZfVzKcxx6jEMvYSNz2DsReSEQssFB+4zjHn+pR0LRW7Rt4PvLE0HWMXohI2sP5VWWcnOlXktJ4IFzmEFjeRl4l6dOa9OA9fElbdrxtoyQqV4U2PqJsykd7FOo82WdQfNR51exW9XeNaHO5CGLvAG1Jv6XU9CGanxQyUO/hqNHQGjwyTJdISEEReoL75NDy/ZeuY+8fUuMI41nT9+SOKenI8/lnD5NYnql2beZdxJEAcg0+KAQwPzKpCU/qIbN46SI4DmfkuR0g80JZKcL6SoOtyFfUdr/79qPOzvsBxw3Ckc1NuMa3l6XSbLKgGCOOFJ9pqN7vlALXDRWNdUAIPezyXH1c12Sk5x2fPXmE589e5lx4p0EHhKwdaJf29h4y61wubnavZqVb3AMpnMKWzn6EkIh1EBvv4TijnEMojiEsRETh/uhkkARzpAGjqVr0aEGugXhyRdExwUyIRWvhqv4j8tXx1BysvPA4ykOup6KpFm/nVNc6uvy4ofUA+BSYIquUJ2ybOmWV7XaPpWWpiwqs59JVV6yc9sBUNVZrDrIu8xxV1yYZ+A6ELh84mqJdMGmMWnWSM99jwkZtnW0yGlXJo+ZI+cC2daEDoJnE/yRw2M81QhBmfFhQhuG6kIsgzQs1BE90jzgwpU6I/I1/ryqr8blx+yewgPqJET+YDqORum17NLNio2kxBnarfal4vgG2MuizSFOHZvbJyfNo80bv2E1nWumUuZ2Chuv5TJkmifB4rAW0g2MJmqzAhvhvwfDZvDfJUQfH6o/NSc8CEglMq5HzmGyIgYIzYSIuZ6dHcUGfFJ/IRhRU8K9P3P1jft3jJVMjOfJ0FRGWa8OSz6MnyuyBhERUSKK7moEyBQyHayOaLEuH8YGjHv6wW4bf5bi2Wtlm7GQTPKwUvNX6OxmavnJXBZxK0WQwhF7QO2iJoMvCWC77bSCxHHz5/PNy12QqE0b3Vjn6/6MdrJzrHDNsRGmCkER6A3Jxbag8vGW4JwiyXJgn6r5/WPz9HYnevX/+2tKvRG4cqEWUsInkykjTZL9jy7FfFe7GnoaN4W/crYREZUi+aOuDYT3O6IVh6M1A9XqYvh/4PG6WKZiysssJ3SEYhhX/M2YZrK/p9QERibiqTfI5C8w6q37+jV3JaaKH3VxfBZ3ff96eRNeYzwxbloNa5d2RevkRqgvvSb96jbBiPxZWUD9wpUZPnbSK+0+F6UKjF3Rgsd5PE3LXRYpZqlJeh4+92DJAjFklaVpLNBgjY6fgour50dSaYPV6gntS6h8yKo6JYNZ3pfywEWMwd4hIzP0B1DUVO5v/PomtpnwMOQe2kGcm1bjkcjWvPTYKqPgLD2y6+68GnA1tsybvPSwCgn1PDXRUzRKtE1itSHocvRxJITsDl+6k2QciJc9jVfRj7JXojlXOUy5s1UiZ8qg/KKE8bw+2NsGJVk9lgL210jZK04wSWuDQXvpUsE+TSMezyy9xxTAvx7HYKd6bzUueMfCNPDCnaixWgQEY95DwzBZ1Au6lGGNjrqp7dn0J389pVB7nmSvxGfKZ6UToSsHpRzWuBoQUjXg/vcPfiI9HWC5V5vTQFEpkqkJ29IxsdMYz/dnpSkWA/f9p1Le6fRUV7QNBHA22KJtqlbUcKJzguFYELc0IL2OMwZ3YIDRI2+FRp/QUVsQd5C1MiRIRQ0Psqg/jG4CMwd7wQYY5gIiM4VDivOKtKgXtY2NWYYRpfYrHqiqFBm3gFgZ2Y2NwEQSGJ7o/kbVuD1J2rgXkHZ1/20RwH52mMcvaoRt9gukBNHJka/ToKb8/bdztXt/5cf1SpHeQF7Yb6n78PH+sGwzM5t6g4pdLDtjpwmFKSYIVp8rJaeMGaKeu6Pb/JLs1N3BEt4EI8P2KUD0k8B+miPBPKK/JrOtAxKwaMtiuKybK7+z8PLKwBTKVSXtuzrMT964bUdAghsrSt/he9f2wia+DovBv32jq+e4/9KZfu+nAda9PeXk/5ggbdB6vIgW8o1gxBFuZjmO7F6xEhNkmqgpkk79uU/KnF2eh7KPrCFNM5a1p+ey/jWvRFMAJgxlC8Qfsygs04aLyRUxphyg6MnjQywMETrFC9qrxzHLc/C8NPxOR+hoFv/61H8LRBeJJhdAeo9B4yBG/b+4DZYySGijmnJpJD5mYdi3ghwEs5M87TOr4HUbDifNEthKWUxHFbdlxu4blmTA/rc3rUMlSZkfNLexDwchjQMRVM5uA4Y/5E4I1zl5GtmeUW1VKuIqIcpKnk1bzuQyBW1cVuoNqkxl1xWHh0cIiax3CxYgEtvGv4m8khHLqM2x8SKcE6Zd4y3goQUh/D7BiEQT8x/2SumLayPyyELMP6mvexVczuh2khdzNv0lh6bUXhRw2q+Egi79OI/LnR9sMP94D5sS8vW92E4uForq+luzBl+azjgMlzoUeJbJ+KRaHYRutO8b8ZvVrLjtINuCwvfkTEi6zHsrooKXz/BORC4gEEJtVZUzqbRaRPfoEdLXe/d1rXQr8BQXG7k+znJ1fqyXZEbiV2jVc+0vCaF2ZdypMudBrwVPnfJyVIxb1CjUmDi7uzeOEaSUOulerigIXE2W6gtjeUSPi8rPGcI7xpZ7EPNp2Men4F+k1YH7dcNvMMAig62wYouPWTNXoHwm51IXE/n3ujRk6Vo9iEY0xVLXNpzUq6skSAzzNs4p0PoGeg9stlNg8HXZKliQCpj8paYlNypPo27eNbbR+pXMOXUj0stpaM7ItzSnxL2ypDfFydZUBeCsDvXsWhnw6Pd9TrOsmexNFwaZbZSoxPpkI9RzKwtNZmwb2uS8anPn/6FNWAAUDjyEMPEnhM7leH81w+z3inpMiL4kpbMkuCOM5UO3/SJ81GjgXAQcT0dWoGjW44o0MpTD+hY9cKSaTUE35RBx43gzPNarh7qLB50qmS+yMYV3ozOx+x4ejRIDhv0eqL04bItpqC5oqX/kNQ4C5rvsj8aZnVAxhT68SAsaVZi6j5reO4vw33Ujv2XlpgluwPEg/wlKpxJKHCqMIXN5vDmFYI32rs0SWI0HHgh7q3rFgSjDsITlOd5xJarC4nDXKqUXESsB+ipPgC5XRXO8JOGm/jnM1N6vJE1u7CwJUmLr9MxQXoAP57RK1JgJh/P9TioNWgu/1rWOl+NbQRP8yQUnySLS4x27ipV/bJNzg/O4ZAJYyS0KRfyZf+toP/1rqB+GpyIZJCd9bIA+7jCf2UR1UCExliXIo0vSX4xnUIFYki2aWzeVuHxi0e7wi2CXov0mfo0SxhxpezhFOzETCa86bx+CdG8tfN69l+cAUMs8kN3X0qDK+Pb6eoUnyg/aZQxe0YcYDq9kLrK8zJ82sl11exAr/Jnu1v4tXF9QjfisBwJ60shPqIao63730+B+Nyl60pJUHf6NQPIA7tJ++9FMWHqh8P+why2UN70+E9daU7+bvYeN+VmhXiSn4aobVWX2ZwAfpjWEaROwfPNxGd0dlOVPRb/YBb2qk4GIJr2uVbTyrjK/rf6odg8p4KS+wVhIg6xU72YSwhy2m299zT57vZR6v56HKtjih5N9eyJJ93K+3bITKjVWkwhE7A0hbAQ62lbFwVcBlWfkfok0jJo2D9AywLpezXEUmfd0T53jnPLbJVFzU7bDnigedNzec0ypzCy7cnlSBLPegwsJWxAt69JRGhu9rWjC1BqJ5d+8e1+YDoBygo6KZgRnHCYXS3P/putqJzUfI4K2iPC9TqzYZB83Gc8cWnPSU/4a7MuiOdRriVy3GtvNgwf69nFLX1CUl+HaIe3uiGn68sIeHpfZ8nQ6s6yrw/xLRY3+y6zQMD3Ky+q3fl2eXIIAerkNO1EH0dfbc7lsnq9W5ycFQjAD72uG0H94sdFlfCE3UroBh2SZ+7tN9Al5bFsDP+g+B5xwOlaRGR5EfhDY7gKUBrVNJEu5H6cZ1kvL2JCKiuQu11TInDPZvRTn7p8kankyqyGJaWk3ND9OoyoAqCNNKxtR1GTKH8gCzVdolyAPrmiiuRgIonccAiX4kihx6HtrODq/qpAPte4RL8UqfCl30Td9gBl4cDIyr7e9RVKCFJH7t9T8cYehzL7CNrYpvB3PX89Yej64K02oVoKAXJllkjbs3M6ShwtzgOpvJ4nlFdswv5jLYD14U/ZrLi/s3s26R0nGqwdcIdy0P3BKtPm3iMrY7m2qjP36YF+18XLVmJP7S/XxUUN98C406M7MdtAfgwUM/nEQMAHzZr4SREcu7lPX8YkDokpZkXHDfF9yf2HY9PJSXWsiw8HFgJRj2+LKGKj6mQ9K8oLN7JGRcm3kW6PKt6LramU8MPl9fwMTc6j/vZpzsnFU9anXvlWEaOkkG2R/I3IX7ApU2OqC/9tCI7oHqvCsVYzk3+i42zWeubuZnJnAv8eRY/IFen0V+apFdHbkrHzCkpQ8z5oKIjEtjS/1HPpjokuQVNSQI/fJEZxensFu52JfX4Kw0aKP3il1RUXYIdTXhOlW4JpcNvs4I/uOglCWnfminOgptZIbz9VMONZDlJgwEKk0qjf68eu9P7TBkgY5zpyT5YeubYL4N0TskFb6kWDKxDQ8ewNgXBWaLNKAgRkmMYzEOIlWXUFNH3c/Zq1Phb0F1GxlCUvX1n3zQwzWPfgkqa1eDD71Jglgjtu8zdr2dpN1RnF0jTF9hifQJBasZzKAHDxPJmPbmtaO5SW/OZXd85Y0bMhiLR+A1WiXGmkc7qUiS5NpeQ/D4WclBkx0TOGMaN8uthmZfrkNSF40/YgusrTJOIuIGyWMJxzR7vBG27Dj443CyXwUkLx8kYVtw/nncmzdwmMD1IqID8YyNWSqpE22WrO/MAycSRe0xHnb6PUPYQv3/qwqcIFaU9L81cbKsjE92jGpcbKVUYClQW6O23jIwGrkQ9F87DGG4A9RUQuoqgLqhCDWPKKgvPJyfZT/FQmtYbeBhEZqFhJm4LO2PbUQf5PDV4pUCFUx2w/gfUFN5+mtjKAvIUUnAUeGBKEswfiGF4PhDMUWbu5F9gKJhbFyMR8V4/5EvcccbUG/iF0Zo9nDMy79KJy06xr+bsz8/T5Gr90qKTW0hXFj2xaNdfxXaGB7wutj9POcM1GS3B/GjltsVfSCpcnjbhbVJpCd/6I4dCVyfgzFbjwMyEjFnotB8U1FYpqiJSGflrUL4tQpWpto3Xe4JVj37+inf2Iv5M9FvDl5FqYZkd21eKQo2Dxoqo0SCkMlDIRQ8JC5sZ4flymISgzjtJiDQMYm2jWdRYHgF42ReM4sXYCKdWlC0/WVQhJRWBSKmk1dqVjz9j7SDhzPppBJsr4HOESb1kIPRJpqGI6qQffQN8nu9kRp2SSz/X69Uo+7SNcLmQxg5/1i8HtkgEiog0AgNk0hGx3dnh043Yh64a0vxbN7NO2VWwyPVQ0rmWIPe+Jf4beKXuI7UxLaAjz2IvYtlqJgljw7t7pKfABjA5u7oa65nG3Upqpu2azk89lIZQ1VnxDgIWjMvmoaFmPcxmeWqzoArIYF1y3J0I/iTUb2QbrG/fu/13qvqoFgpcXc8RdJpEY18kefEf/4WRT8HVAsh1YPPfs3bUkTZerDatB9ijb2jqTCTsehC+3iH/KY8FzdOv7vkq9gWL4+EC7WunaHdMYdXkeMr72k2e7d1LptlO3K6SH6D+sbn2GgIF1VRN5mZrIvNMoPSBgzYyckwTCTuOx2MXh2PUYSX0wEp205W58b0en4825OQCdT3SOTQO6cOeNmhsNRLrHeeTEm0vQd7eOKxXlWdlztw4ZkbP31p77+qmgzWGpqw6PGdR4pNglSwhbxAY1LdCFxzjwMpdrNUQel0I52DzUg6uhq3eHjGG"
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
      salt: "vseTt/wDHP3rHtCjEok8Pg==",
      iv:   "/TNqLhsPIHkl+86g",
      data: "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",
    },
  },

]; // <- keep this line. Add new projects ABOVE it.
