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
  email: "ahmedharvoc@gmail.com",

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
    name:    "Design System",
    eyebrow: "Design Systems · 2026",
    desc:    "One token-based system for a bilingual product: Arabic and English, light and dark.",

    // This project has its own page, at ahmededris.com/design-system/.
    // "link" sends the button, the preview images and the previous/next
    // links there, instead of opening the case-study overlay.
    link: "design-system/",

    img: "images/design-system-cover.webp",
    thumb: "images/design-system-thumb.webp",  // the table in four contexts

    bg:     "#0b1d18",  // deep green, matching the case-study page
    fg:     "#f1ebe2",
    accent: "#f4b8cf",  // the page's pink
    dark:   true,

    stops: ["#163329", "#071510"],
    blobs: ["#1fae7a", "#f4b8cf"],

    role: "Senior Product Designer — design system lead",
    year: "2026",
    type: "Web and mobile",

    overview: "Every team was solving the same problems in its own way. I led one token-based design system end to end, from audit and research to a 49-component library, documentation, testing and handoff.",
    work:     "Arabic and English, light and dark, from the same components: three token layers, a Direction property on every component, and tables rebuilt around columns so nobody has to detach them.",
  },

  {
    name:    "everlean",
    eyebrow: "Product Redesign · 2026",
    desc:    "A continuous improvement platform, redesigned for the shop floor: landing page, web portal and native app.",

    // This project has its own page, at ahmededris.com/everlean/.
    link: "everlean/",

    img: "images/everlean-cover.webp",
    thumb: "images/everlean-thumb.webp",  // landing, portal and app, cross-fading

    bg:     "#0b0e13",  // the case study's near-black
    fg:     "#f2f4f7",
    accent: "#a4b3ff",  // everlean's light indigo
    dark:   true,

    stops: ["#1d2160", "#06080c"],
    blobs: ["#4d51de", "#007974"],

    role: "Lead Product Designer",
    year: "2026",
    type: "Landing · Portal · iOS/Android",

    overview: "everlean helps factories collect improvement ideas and safety observations from every employee, but its desktop form was built for office desks and used on noisy shop floors.",
    work:     "A voice-first app for the line, a board-first portal for the 9:00 meeting, and a landing page that sells the product — on one token-based design system, light and dark.",
  },

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
      salt: "zdnokVpL0BgTqdKi4EZelw==",
      iv:   "PbnufkUR80G7ar/h",
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
    desc:    "Multiple products for the Kingdom's largest bank — insurance and business finance.",

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
    name:    "Vehicle Route Management",
    eyebrow: "Government · Mobility · 2024",
    desc:    "A route management platform for a Saudi government transport authority, from fleet tracking to approvals.",

    img: "images/vrm-cover.webp",
    thumb: "images/vrm-thumb.webp",  // animated app-screens preview (slide + prev/next nav)

    bg:     "#0b1730",  // deep route blue
    fg:     "#e8eeff",
    accent: "#6ea8ff",
    dark:   true,

    stops: ["#173a7a", "#060d1f"],
    blobs: ["#4d8dff", "#1d3f8f"],

    role: "Senior Product Designer — Design Systems",
    year: "2024",
    type: "Web platform",

    timeline: "Ongoing",
    team:     "Design system + multiple product teams",
    tools:    "Figma",

    // This case study is password-protected. Its text and image list are
    // encrypted (AES-256-GCM, key derived from the password with PBKDF2), so
    // editing it here will not work — ask for it to be re-encrypted instead.
    overview: "",
    work:     "",
    locked: {
      iter: 600000,
      salt: "eo3LXBVwqNtfHhrcyrGkqw==",
      iv:   "WCGbf9eajQFl64BV",
      data: "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"
    },
  },

]; // <- keep this line. Add new projects ABOVE it.
