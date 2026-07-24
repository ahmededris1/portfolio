/* ============================================================
   Ahmed Edris — Portfolio behaviour
   ------------------------------------------------------------
   You should not need to edit this file to update the site.
   All of your content lives in  data/projects.js.

   What this file does, top to bottom:
     A.  Small helpers
     B.  Friendly error screen (if data/projects.js has a typo)
     C.  Placeholder artwork (drawn with canvas)
     D.  Everything else runs inside start(), guarded so a
         content typo can never leave a blank screen:
           1.  Build the project reel and dot navigation
           2.  Build the About page
           3.  Build the floating background artwork (desktop)
           4.  Build the rolling logo and the intro loader
           5.  Scroll animation loop + theme colours
           6.  Open / close the case study (focus + scroll handling)
           6b. Open / close the About page
           7.  Header navigation actions
   ============================================================ */
"use strict";

/* ---------- A. Small helpers ---------- */
const $  = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

// Respect the visitor's "reduce motion" system setting
const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;

// Cap the pixel density so the artwork stays sharp without wasting memory
const DPR = Math.min(window.devicePixelRatio || 1, 2);

// How a smooth scroll should behave (instant when motion is reduced)
const SCROLL_BEHAVIOR = REDUCE ? "auto" : "smooth";

// Make text safe to drop into HTML, so a "<" or a quote in your content
// cannot break the page layout or an attribute.
function esc(value){
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}


/* ---------- B. Friendly error screen ---------- */
// Shown only if data/projects.js cannot be read (usually a small typo).
// It hides the intro loader so the visitor never gets a stuck black screen.
function showContentError(err){
  if(err) console.error("Portfolio could not start:", err);

  const intro = document.getElementById("intro");
  if(intro){ intro.classList.add("hide"); intro.style.pointerEvents = "none"; }

  const box = document.createElement("div");
  box.setAttribute("role", "alert");
  box.style.cssText =
    "position:fixed;inset:0;z-index:300;display:grid;place-items:center;" +
    "text-align:center;padding:24px;background:#0e0e0e;color:#f4f1ea;" +
    "font-family:system-ui,sans-serif";
  box.innerHTML =
    '<div style="max-width:540px">' +
      '<h1 style="font-size:24px;margin-bottom:14px">This portfolio could not load</h1>' +
      '<p style="font-size:16px;line-height:1.6;opacity:.85">' +
        'There is most likely a small typo in <strong>data/projects.js</strong>. ' +
        'Check that every line ends with a comma <code>,</code> and every quote ' +
        '<code>"</code> is closed, then reload the page.' +
      '</p>' +
    '</div>';
  document.body.appendChild(box);
}


/* ---------- C. Placeholder artwork (canvas) ---------- */

// Draw a rounded rectangle path (helper used by paintArt)
function roundRect(ctx, x, y, w, h, r){
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y,     x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x,     y + h, r);
  ctx.arcTo(x,     y + h, x,     y,     r);
  ctx.arcTo(x,     y,     x + w, y,     r);
  ctx.closePath();
}

// Paint a generated placeholder image for a project into the element `el`.
// `quality` lets small previews (like the thumbnail) use a smaller canvas.
function paintArt(el, project, quality = 1){
  const W = 800, H = 520;                 // drawing coordinate space
  const canvas = document.createElement("canvas");
  canvas.width  = Math.round(W * DPR * quality);
  canvas.height = Math.round(H * DPR * quality);
  canvas.style.width = "100%";
  canvas.style.height = "100%";

  const ctx = canvas.getContext("2d");
  ctx.scale(canvas.width / W, canvas.height / H); // work in the 800x520 space

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, project.stops[0]);
  grad.addColorStop(1, project.stops[1]);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Two soft glowing blobs
  project.blobs.forEach((colour, i) => {
    const cx = W * (i ? 0.78 : 0.28);
    const cy = H * (i ? 0.72 : 0.30);
    const rg = ctx.createRadialGradient(cx, cy, 0, cx, cy, W * 0.5);
    rg.addColorStop(0, colour + "cc"); // "cc" = ~80% opacity
    rg.addColorStop(1, colour + "00"); // "00" = fully transparent
    ctx.fillStyle = rg;
    ctx.fillRect(0, 0, W, H);
  });

  // A floating UI card in the middle
  ctx.save();
  ctx.translate(W * 0.5, H * 0.52);
  ctx.rotate(-0.04);
  const cw = W * 0.34, ch = H * 0.62;
  ctx.shadowColor = "rgba(0,0,0,.28)";
  ctx.shadowBlur = 40;
  ctx.shadowOffsetY = 24;
  ctx.fillStyle = project.dark ? "rgba(255,255,255,.94)" : "rgba(20,18,16,.92)";
  roundRect(ctx, -cw / 2, -ch / 2, cw, ch, 18);
  ctx.fill();
  ctx.shadowColor = "transparent";

  // Content inside the card: an accent tile and a few text lines
  const ink = project.dark ? "rgba(20,20,25," : "rgba(245,240,235,";
  ctx.fillStyle = project.accent;
  roundRect(ctx, -cw / 2 + 22, -ch / 2 + 24, cw * 0.32, cw * 0.32, 14);
  ctx.fill();
  [0.62, 0.42, 0.7].forEach((lineWidth, i) => {
    ctx.fillStyle = ink + (0.85 - i * 0.2) + ")";
    roundRect(ctx, -cw / 2 + 22, -ch / 2 + (0.5 + i * 0.14) * ch, cw * lineWidth, 12, 6);
    ctx.fill();
  });
  ctx.restore();

  el.replaceChildren(canvas);
}

// Show a real screenshot if the project has one, otherwise draw the placeholder.
function setArt(el, project, quality){
  if(project.img){
    el.replaceChildren();
    el.style.background = `#000 url("${project.img}") center / cover no-repeat`;
  } else {
    el.style.background = "";
    paintArt(el, project, quality);
  }
}


/* ---------- D. Start everything (guarded) ---------- */
try {
  start();
} catch (err) {
  showContentError(err);
}

function start(){

  // Make sure the content file actually loaded and has projects.
  // (`typeof` is safe even if the variable was never defined.)
  if(typeof SITE === "undefined" || !SITE){
    throw new Error("SITE is missing in data/projects.js");
  }
  if(typeof PROJECTS === "undefined" || !Array.isArray(PROJECTS) || PROJECTS.length === 0){
    throw new Error("PROJECTS is missing or empty in data/projects.js");
  }

  /* ---------- 1. Build the project reel and dot navigation ---------- */
  const reel    = $("#reel");
  const dotsNav = $("#dots");

  // Deferred imagery.
  // The animated previews are over a megabyte each, so fetching all of them
  // up front costs several seconds on a phone before anything is readable.
  // Each project registers its pictures here instead, and they are fetched
  // when that slide comes within a screen of the viewport. The opening
  // cascade is deliberately NOT deferred — it sweeps through every project
  // at once, so those images have to be there from the start.
  const deferred = PROJECTS.map(() => []);
  const deferToSlide = (i, load) => deferred[i].push(load);

  // Nothing behind the opening overlay is visible, so slide imagery waits for
  // it to lift. That leaves the whole of the first second to the cover image,
  // which is the one thing the visitor is actually waiting to see.
  let introLifted = false;
  const heldBack = [];
  const afterIntro = load => introLifted ? load() : heldBack.push(load);
  function releaseHeldMedia(){
    introLifted = true;
    heldBack.splice(0).forEach(load => load());
  }

  function watchSlides(){
    const slides = $$(".slide");
    const flush = i => deferred[i].splice(0).forEach(afterIntro);

    // Without IntersectionObserver, just load everything rather than risk
    // a slide that never fills in.
    if(!("IntersectionObserver" in window)){
      slides.forEach((_, i) => flush(i));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        flush(Number(entry.target.dataset.index));
        io.unobserve(entry.target);
      });
    // Each slide is exactly one screen tall, so the next one begins on the
    // very pixel this one ends. At a plain "0px" margin that counts as
    // touching, and a second preview — nearly a megabyte — downloads before
    // the visitor has scrolled at all. Pulling the bottom edge up by a pixel
    // excludes it. A preview then starts loading as its slide first appears,
    // long before it is scrolled to.
    }, { rootMargin: "0px 0px -1px 0px" });
    slides.forEach(slide => io.observe(slide));
  }

  PROJECTS.forEach((project, i) => {
    // One full-screen slide per project
    const slide = document.createElement("section");
    slide.className = "slide";
    slide.dataset.index = String(i);
    slide.setAttribute("aria-label", project.name + " project");
    slide.innerHTML = `
      <div class="slide-inner">
        <div class="slide-text">
          <p class="eyebrow">${esc(project.eyebrow)}</p>
          <h2 class="slide-title">${esc(project.name)}</h2>
          <p class="slide-desc">${esc(project.desc)}</p>
          <button class="cta" type="button" data-open="${i}">
            Open case study<span class="visually-hidden"> for ${esc(project.name)}</span>
            <span class="arrow" aria-hidden="true">&rarr;</span>
          </button>
          <button class="thumb" type="button" data-open="${i}" aria-label="Open ${esc(project.name)} case study">
            <span class="art thumbart" aria-hidden="true"></span>
          </button>
        </div>
        <div class="slide-media" aria-hidden="true">
          <div class="hero"><div class="art"></div></div>
        </div>
      </div>`;
    reel.appendChild(slide);

    // The inline hero (used instead of the floating reel on narrow screens).
    const heroArt = $(".hero .art", slide);
    if(i === 0) setArt(heroArt, project, 1);              // first screen: immediately
    else deferToSlide(i, () => setArt(heroArt, project, 1));

    // The small preview can use its own image (project.thumb); otherwise it
    // falls back to the project's cover / generated artwork.
    const thumbEl = $(".thumbart", slide);
    deferToSlide(i, () => {
      if(project.thumb){
        thumbEl.style.background = `#000 url("${project.thumb}") center / cover no-repeat`;
      } else {
        setArt(thumbEl, project, 0.5);
      }
    });

    // Matching dot in the side navigation
    const dot = document.createElement("button");
    dot.className = "dot";
    dot.type = "button";
    dot.innerHTML = `<span class="label">${esc(project.name)}</span><span class="bead" aria-hidden="true"></span>`;
    dot.addEventListener("click", () => scrollToSlide(i));
    dotsNav.appendChild(dot);
  });

  // Every slide exists now, so the deferred imagery can start watching.
  watchSlides();

  /* ---------- 2. Build the About page (a full overlay, not a reel slide) ---------- */
  (function buildAbout(){
    const A = SITE.about || {};
    const nl = s => esc(s || "").replace(/\n/g, "<br>");

    // Small inline icons
    const ICON = {
      mail:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>`,
      linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95C20.4 8.75 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.56-2.3 3.2V21H9z"/></svg>`,
      behance:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.2 6.5c1.9 0 3.2.9 3.2 2.7 0 1-.5 1.7-1.3 2.1 1.1.3 1.8 1.2 1.8 2.5 0 2-1.6 2.9-3.6 2.9H3V6.5zM5.4 10.6h2.4c.8 0 1.3-.4 1.3-1.1S8.6 8.4 7.8 8.4H5.4zm0 4.9h2.6c.9 0 1.4-.4 1.4-1.2s-.5-1.2-1.4-1.2H5.4zM21 13.2c0 .2 0 .4-.03.6h-5.2c.1 1 .8 1.5 1.7 1.5.7 0 1.2-.3 1.5-.8h1.9c-.4 1.4-1.7 2.3-3.4 2.3-2.2 0-3.7-1.5-3.7-3.7s1.5-3.8 3.6-3.8c2.2 0 3.6 1.6 3.6 3.9zm-5.2-.7h3.2c-.1-.9-.7-1.4-1.6-1.4-.8 0-1.4.5-1.6 1.4zM15.5 7h4v1.2h-4z"/></svg>`,
      dribbble: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M5 7c4 5 9 6 14 5M8.5 3.5C13 8 15 14 15.5 20.5M3.2 13c6-1.5 11 .5 14.5 5"/></svg>`,
    };
    const link = (href, icon, label, ext) => href
      ? `<a class="ab-ico" href="${esc(href)}"${ext ? ` target="_blank" rel="noopener noreferrer"` : ""} aria-label="${esc(label)}">${icon}</a>` : "";
    const socials = () => [
      link("mailto:" + (SITE.email || ""), ICON.mail, "Email", false),
      SITE.linkedin && link(SITE.linkedin, ICON.linkedin, "LinkedIn", true),
      SITE.behance  && link(SITE.behance,  ICON.behance,  "Behance",  true),
    ].filter(Boolean).join("");

    const clients = (A.clients || []).map(c =>
      `<div class="ab-logo" style="--brand:${esc(c.color || "#e30613")}"><span>${esc(c.name)}</span></div>`).join("");

    const expItems = (A.experience || []).map(e => `
      <div class="ab-exp-item">
        <div class="ab-exp-mark">${esc(e.mark || (e.org || "?")[0])}</div>
        <div class="ab-exp-info">
          <span class="ab-exp-date">${esc(e.date || "")}</span>
          <strong class="ab-exp-org">${esc(e.org || "")}</strong>
          <span class="ab-exp-role">${esc(e.role || "")}${e.place ? ` · ${esc(e.place)}` : ""}</span>
        </div>
      </div>`).join("");

    // marquee: duplicate the list so the loop is seamless
    const mq = (A.marquee || []);
    const sep = `<span class="ab-mq-sep" aria-hidden="true"></span>`;
    const mqRun = mq.map(m => `<span class="ab-mq-item">${esc(m)}</span>`).join(sep);
    const marquee = mq.length ? `<div class="ab-marquee" aria-hidden="true"><div class="ab-mq-track"><span class="ab-mq-set">${mqRun}${sep}</span><span class="ab-mq-set">${mqRun}${sep}</span></div></div>` : "";

    // The portrait is only ever seen on the About page, which is hidden until
    // it is opened — but the overlay still occupies the viewport, so a plain
    // src would download it during the first paint, competing with the cover
    // image. It is fetched on first open instead (see openAbout).
    const photo = A.photo
      ? `<img data-src="${esc(A.photo)}" alt="${esc(SITE.name)}">` : "";

    const aboutBody = $("#aboutBody");
    aboutBody.innerHTML = `
      <div class="ab-topbar">
        <div class="ab-topbar-inner">
          <button class="ab-back" type="button" data-about-close><span aria-hidden="true">&larr;</span> Back</button>
          ${SITE.email ? `<a class="ab-email" href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>` : ""}
        </div>
      </div>

      <div class="ab-hero">
        <div class="ab-hero-photo">${photo}</div>
        <div class="ab-hero-text">
          <h2 class="ab-greeting" id="aboutTitle">${nl(A.greeting || "Hi, I'm " + SITE.name)}</h2>
          <p class="ab-sub">${nl(A.subtitle)}</p>
          <div class="ab-socials">${socials()}</div>
        </div>
      </div>

      ${A.statement ? `<section class="ab-statement"><p>${esc(A.statement)}</p></section>` : ""}

      <section class="ab-rows">
        ${A.atWork ? `<div class="ab-row"><span class="ab-row-label">At work</span><p>${esc(A.atWork)}</p></div>` : ""}
        ${A.inLife ? `<div class="ab-row"><span class="ab-row-label">In life</span><p>${esc(A.inLife)}</p></div>` : ""}
      </section>

      ${marquee}

      <section class="ab-block ab-clients">
        <div class="ab-block-head">
          <h3>${esc(A.clientsHeading || "Clients")}</h3>
          <p>${esc(A.clientsIntro || "")}</p>
        </div>
        <div class="ab-logos">${clients}</div>
      </section>

      <section class="ab-block ab-exp">
        <div class="ab-block-head">
          <h3>${esc(A.expHeading || "Experience")}</h3>
          <p>${esc(A.expIntro || "")}</p>
        </div>
        <div class="ab-exp-grid">${expItems}</div>
      </section>

      ${A.closing ? `<section class="ab-closing"><h2>${nl(A.closing)}</h2></section>` : ""}

      <section class="ab-block ab-contact">
        <div class="ab-block-head">
          <h3>${esc(A.contactHeading || "Get in touch")}</h3>
          <p>${esc(A.contactIntro || "")}</p>
        </div>
        <div class="ab-contact-foot">
          <a class="mail" href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>
          <div class="ab-socials">${socials()}</div>
        </div>
      </section>

      <div class="about-foot">&copy; ${new Date().getFullYear()} ${esc(SITE.name)} &mdash; ${esc(SITE.title)}</div>`;

    // If the portrait filename is wrong, hide the broken image and leave the
    // plain colour block behind it, rather than showing a broken-image icon.
    const photoEl = $(".ab-hero-photo img", aboutBody);
    if(photoEl){
      photoEl.addEventListener("error", () => { photoEl.style.display = "none"; }, { once: true });
    }
  })();

  /* ---------- 3. Build the floating background artwork (desktop) ---------- */
  const stage = document.createElement("div");
  stage.id = "stage";
  stage.setAttribute("aria-hidden", "true"); // purely decorative
  document.body.appendChild(stage);

  const reelImgs = PROJECTS.map((project) => {
    const img = document.createElement("div");
    img.className = "reel-img";
    const art = document.createElement("div");
    art.className = "art";
    img.appendChild(art);
    stage.appendChild(img);
    setArt(art, project, 1);
    return img;
  });

  /* ---------- 4. Rolling logo and intro loader ---------- */

  // Logo: each letter rolls over to a copy of itself on hover.
  // The second copy is drawn by CSS from the data-char attribute rather than
  // being a second element, so the logo's text reads "AHMED EDRIS" once. A
  // duplicated letter in the markup would spell "AAHHMMEEDD", which no longer
  // matches the link's accessible name and trips accessibility checks.
  (function buildLogo(){
    const logo = $("#logo");
    const words = SITE.name.trim().split(/\s+/);
    words.forEach((word, wordIndex) => {
      const wordEl = document.createElement("span");
      wordEl.className = "word";
      [...word.toUpperCase()].forEach((char, charIndex) => {
        const letter = document.createElement("span");
        letter.className = "ltr";
        const stack = document.createElement("span");
        stack.className = "stack";
        stack.dataset.char = char;                 // CSS paints the rolled-to copy
        stack.style.animationDelay = ((wordIndex * 5 + charIndex) * 0.04) + "s";
        stack.innerHTML = `<b>${esc(char)}</b>`;
        letter.appendChild(stack);
        wordEl.appendChild(letter);
      });
      logo.appendChild(wordEl);
      // A real space so the logo's text matches the link's accessible name.
      // The visual gap between words comes from the CSS "gap" on .logo.
      if(wordIndex < words.length - 1) logo.appendChild(document.createTextNode(" "));
    });
  })();

  // Intro loader: hide the overlay once the name has finished rising.
  // The letters are already in index.html, so they paint without waiting for
  // this script. Rebuild them only if the content file names someone else.
  (function intro(){
    const mark = $("#introMark");
    // Word gaps are non-breaking spaces: a plain space alone in an
    // inline-block collapses to nothing, and the name ran together.
    const shown = mark.textContent.replace(/\u00a0/g, " ").trim();
    if(shown !== SITE.name.trim()){
      mark.replaceChildren();
      [...SITE.name].forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00a0" : char;
        span.style.animationDelay = (i * 0.03) + "s";
        mark.appendChild(span);
      });
    }
    // Long enough for the last letter to finish rising (0.30s stagger +
    // 0.55s rise), and no longer: every extra moment here is a moment the
    // visitor spends looking at an empty screen.
    // The main stylesheet is fetched without blocking the first paint, so it
    // may still be in flight. Lifting the overlay before it lands would show
    // the reel unstyled for a moment.
    function whenStylesReady(then){
      const sheet = document.getElementById("mainCss");
      if(!sheet || sheet.media === "all") return then();
      const go = () => { sheet.removeEventListener("load", go); clearTimeout(bail); then(); };
      const bail = setTimeout(go, 3000);   // never wait forever on a stalled file
      sheet.addEventListener("load", go);
    }

    const wait = REDUCE ? 300 : 900;
    setTimeout(() => whenStylesReady(() => {
      $("#intro").classList.add("hide");
      releaseHeldMedia();       // the reel is about to be visible
      playIntroReel();          // sweep the project images up from the bottom
    }), wait);
  })();

  /* ---------- 5. Scroll animation loop + theme colours ---------- */
  const slides    = $$(".slide");
  const dotEls    = $$(".dot");
  const themeMeta = $('meta[name="theme-color"]');
  let current = -1;

  // Opening cascade state.
  // While `introActive` is true, the reel images are driven by the intro
  // cascade (a fast reel of all projects that settles on the first) instead of
  // the scroll position. `neighborFade` fades the neighbours back in at handoff.
  let introReel   = 0;
  let introActive = !REDUCE;
  let neighborFade = REDUCE ? 1 : 0;

  // Browse mode: hovering the project nav flattens the reel into centred
  // bands, reveals the full project list, and hides the hero text.
  let browsing = false;

  // Apply a project's colours to the whole page
  function applyTheme(project){
    if(!project) return;
    const root = document.documentElement.style;
    root.setProperty("--bg", project.bg);
    root.setProperty("--fg", project.fg);
    root.setProperty("--accent", project.accent);
    if(themeMeta) themeMeta.setAttribute("content", project.bg); // browser UI colour
  }

  // The viewport height, cached. render() runs on every animation frame, and
  // reading window.innerHeight there forces the browser to recompute layout
  // it had just invalidated by writing the previous frame's transforms. The
  // height only changes on resize, so it is read there instead.
  let viewportH = window.innerHeight;

  // Position everything based on the current scroll position.
  // `t` is a timestamp used only for the gentle floating motion.
  function render(t){
    const vh = viewportH;
    const p  = window.scrollY / vh + introReel;   // fractional slide index (+ opening cascade)
    const spacing = vh * 0.55;

    // Floating background images: neighbours tilt in above and below.
    // While the opening cascade is running, it positions the images itself.
    if(!introActive){
      const bspacing = vh * 0.72;   // roomier stack when browsing
      reelImgs.forEach((el, i) => {
        const off = i - p;
        const lim = browsing ? 2.8 : 2.1;
        if(Math.abs(off) > lim){ el.style.opacity = "0"; el.style.visibility = "hidden"; return; }
        el.style.visibility = "visible";

        if(browsing){
          // Browse mode: flat, centred bands stacked vertically
          const y  = off * bspacing;
          const sc = 1 - Math.min(Math.abs(off), 2) * 0.05;
          el.style.transform = `translate(-50%,-50%) translateY(${y}px) scale(${sc})`;
          el.style.opacity   = String(Math.max(0, 1 - Math.max(0, Math.abs(off) - 0.4) * 0.55));
          el.style.zIndex    = String(100 - Math.round(Math.abs(off) * 10));
          return;
        }

        const float = REDUCE ? 0 : Math.sin(t * 0.0009 + i * 1.3) * 9;
        const y   = off * spacing + float;
        const rot = Math.max(-46, Math.min(46, -off * 34));
        const sc  = 1 - Math.min(Math.abs(off), 2) * 0.09;
        // Constant rotateY/rotateZ give the resting stack the tilted, "not
        // straight" look — the right edge leans away and the frame rolls slightly.
        el.style.transform = `translate(-50%,-50%) translateY(${y}px) rotateX(${rot}deg) rotateY(-9deg) rotateZ(-2deg) scale(${sc})`;
        // Fade the neighbours back in after the cascade hands off (focused image stays put)
        const fade = Math.abs(off) < 0.5 ? 1 : neighborFade;
        el.style.opacity   = String(Math.max(0, 1 - Math.max(0, Math.abs(off) - 0.25) * 0.7) * fade);
        el.style.zIndex    = String(100 - Math.round(Math.abs(off) * 10));
      });
    }

    // Per-slide text fade and the inline hero tilt used on mobile
    slides.forEach((slide, i) => {
      const off = i - p;
      const text = $(".slide-text", slide);
      if(text){
        text.style.opacity   = String(Math.max(0, 1 - Math.abs(off) * 1.3));
        text.style.transform = `translateY(${off * 36}px)`;
      }
      const hero = $(".hero", slide);
      if(hero){
        hero.style.transform = `rotateX(${Math.max(-28, Math.min(28, -off * 28))}deg)`;
        hero.style.opacity   = String(Math.max(0.15, 1 - Math.abs(off) * 0.8));
      }
    });

    // Theme colour and active dot follow the nearest slide
    const idx = Math.max(0, Math.min(slides.length - 1, Math.round(p)));
    if(idx !== current){
      current = idx;
      applyTheme(idx < PROJECTS.length ? PROJECTS[idx] : PROJECTS[PROJECTS.length - 1]);
      dotEls.forEach((dot, k) => {
        const on = k === idx;
        dot.classList.toggle("active", on);
        if(on) dot.setAttribute("aria-current", "true");
        else   dot.removeAttribute("aria-current");
      });
    }
  }

  // Run render continuously only when it is worth it (motion allowed, tab
  // visible, no case study open). Otherwise render once per scroll/resize.
  let running = false;
  let rafId = 0;

  function frame(t){
    if(!running) return;
    render(t);
    rafId = requestAnimationFrame(frame);
  }
  function startLoop(){
    if(running || REDUCE) return;
    running = true;
    rafId = requestAnimationFrame(frame);
  }
  function stopLoop(){
    running = false;
    if(rafId) cancelAnimationFrame(rafId);
    rafId = 0;
  }

  let renderQueued = false;
  function scheduleRender(){
    if(running || renderQueued) return; // continuous loop already covers it
    renderQueued = true;
    requestAnimationFrame(t => { renderQueued = false; render(t); });
  }

  function scrollToSlide(i){
    slides[i].scrollIntoView({ behavior: SCROLL_BEHAVIOR, block: "start" });
  }

  // Position the reel images during the opening cascade. The images form a
  // tilted 3-D column. `prog` runs 0 → 1: at 0 the last project sits in the
  // centre with the rest stacked below; as it advances the whole column sweeps
  // UPWARD, each project flying past, until the first project lands centred.
  function introFrame(prog, t){
    const N = reelImgs.length;
    const q = prog * (N - 1);            // 0 → N-1  (which project is centred)
    const vh = viewportH;
    const spacing = vh * 0.52;
    reelImgs.forEach((el, i) => {
      const off = (N - 1 - i) - q;       // reversed: first project starts at the bottom
      const ad  = Math.abs(off);
      if(ad > 2.6){ el.style.opacity = "0"; el.style.visibility = "hidden"; return; }
      el.style.visibility = "visible";
      const float = Math.sin(t * 0.0009 + i * 1.3) * 6;
      const y   = off * spacing + float;
      const rot = Math.max(-52, Math.min(52, -off * 36));
      const sc  = 1 - Math.min(ad, 2) * 0.09;
      el.style.transform = `translate(-50%,-50%) translateY(${y}px) rotateX(${rot}deg) rotateY(-9deg) rotateZ(-2deg) scale(${sc})`;
      let op = Math.max(0, 1 - Math.max(0, ad - 0.25) * 0.62);
      // Near the end, fade everything except the first project so the hand-off
      // to the resting layout (neighbours below) is invisible.
      if(prog > 0.82 && i !== 0){ op *= Math.max(0, 1 - (prog - 0.82) / 0.18); }
      el.style.opacity = String(op);
      el.style.zIndex  = String(100 - Math.round(ad * 10));
    });
  }

  // Opening cascade: a fast reel of every project image scrolling upward,
  // decelerating, and settling on the first project — then the neighbours
  // fade into their resting positions.
  function playIntroReel(){
    if(REDUCE){ introActive = false; neighborFade = 1; introReel = 0; scheduleRender(); return; }
    const dur = 1650;
    const t0 = performance.now();
    (function step(now){
      const k = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - k, 3);              // ease-out
      introFrame(e, now);
      if(k < 1){ requestAnimationFrame(step); return; }
      // Cascade done — settle firmly on the first project, hand control back to
      // render, and fade the neighbours in.
      introActive = false;
      introReel = 0;
      window.scrollTo(0, 0);   // ensure the page is on the first project (SC Bank)
      current = -1;            // force the theme/dots to re-sync to project 0
      const f0 = performance.now();
      (function fadeIn(n){
        neighborFade = Math.min(1, (n - f0) / 520);
        render(n);
        if(neighborFade < 1) requestAnimationFrame(fadeIn);
      })(performance.now());
    })(t0);
  }

  // First paint, then start the loop and listen for changes
  render(performance.now());
  startLoop();
  window.addEventListener("scroll", scheduleRender, { passive: true });
  window.addEventListener("resize", () => {
    viewportH = window.innerHeight;   // the one place this is read
    scheduleRender();
  }, { passive: true });

  // Hover the project nav → enter "browse" mode (flat centred bands + name list)
  if(!REDUCE){
    const setBrowsing = on => {
      if(browsing === on) return;
      browsing = on;
      document.body.classList.toggle("browsing", on);
      scheduleRender();
    };
    dotsNav.addEventListener("mouseenter", () => setBrowsing(true));
    dotsNav.addEventListener("mouseleave", () => setBrowsing(false));
    // Leaving browse mode after clicking a project is handled by mouseleave;
    // also exit if a case study opens.
  }
  document.addEventListener("visibilitychange", () => {
    if(document.hidden) stopLoop();
    else if(!document.body.classList.contains("case-open")) startLoop();
  });

  /* ---------- 6. Open / close the case study ---------- */
  // The two full-screen overlays. Only one is ever open; whichever is closed
  // is marked `inert` so it stays out of the tab order.
  const caseEl    = $("#case");
  const aboutEl   = $("#about");
  const caseClose = $("#caseClose");
  const csStory   = $("#csStory");
  const csDefault = $("#csDefault");
  const csNav     = $("#csNav");
  let storyObserver = null;

  // Turn one story block from data/projects.js into HTML.
  function storyBlock(b){
    const k  = b.kicker ? `<p class="cs-kicker">${esc(b.kicker)}</p>` : "";
    const h  = b.title  ? `<h3 class="cs-h">${esc(b.title)}</h3>` : "";
    const ps = Array.isArray(b.body) ? b.body.map(p => `<p class="cs-p">${esc(p)}</p>`).join("") : "";
    // Screenshots carry alt="" on purpose. Each one that needs describing
    // sits in a <figure> with its label in a <figcaption>, so the caption is
    // already its text alternative — repeating it in alt would make a screen
    // reader announce the same words twice.
    const phone = src => `<div class="cs-phone"><img loading="lazy" src="${esc(src)}" alt=""></div>`;

    switch(b.type){
      case "lead":
        return `<p class="cs-lead reveal">${esc(b.body)}</p>`;
      case "stats":
        return `<div class="cs-stats reveal">${b.items.map(([n,l]) =>
          `<div class="cs-stat"><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join("")}</div>`;
      case "section":
        return `<section class="cs-sec reveal">${k}${h}${ps}</section>`;
      case "principles":
        return `<section class="cs-sec reveal">${k}${h}<div class="cs-princ">${b.items.map(([t,d]) =>
          `<div class="cs-princ-item"><b>${esc(t)}</b><p>${esc(d)}</p></div>`).join("")}</div></section>`;
      case "quote":
        return `<blockquote class="cs-quote reveal"><p>${esc(b.text)}</p>${
          b.cite ? `<cite>${esc(b.cite)}</cite>` : ""}</blockquote>`;
      case "full":
        return `<figure class="cs-full reveal" style="--tint:${esc(b.tint || "#10281f")}"><div class="cs-inner">${
          phone(b.img)}${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ""}</div></figure>`;
      case "phones":
        return `<figure class="cs-phones reveal" style="--tint:${esc(b.tint || "#10281f")}"><div class="cs-inner"><div class="cs-phones-row">${
          b.shots.map(([src,label]) => `<div class="cs-phone-wrap">${phone(src)}${
            label ? `<span>${esc(label)}</span>` : ""}</div>`).join("")
        }</div>${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ""}</div></figure>`;
      case "split":
        return `<section class="cs-split reveal ${b.side === "right" ? "is-right" : ""}" style="--tint:${esc(b.tint || "#10281f")}"><div class="cs-inner cs-split-grid"><div class="cs-split-media">${
          phone(b.img)}</div><div class="cs-split-text">${k}${h}${ps}</div></div></section>`;
      case "compare": {
        const changes = Array.isArray(b.changes) && b.changes.length
          ? `<ol class="cs-changes">${b.changes.map(c => `<li>${esc(c)}</li>`).join("")}</ol>` : "";
        return `<section class="cs-compare reveal" style="--tint:${esc(b.tint || "#0c3357")}"><div class="cs-inner">${k}${h}${ps}<div class="cs-ba"><figure class="cs-ba-item"><span class="cs-tag before">Before</span><div class="cs-shot"><img loading="lazy" src="${
          esc(b.before)}" alt=""></div></figure><figure class="cs-ba-item"><span class="cs-tag after">After</span><div class="cs-shot"><img loading="lazy" src="${
          esc(b.after)}" alt=""></div></figure></div>${changes}</div></section>`;
      }
      case "video": {
        const poster = b.poster ? ` poster="${esc(b.poster)}"` : "";
        return `<figure class="cs-video reveal" style="--tint:${esc(b.tint || "#1a120a")}"><div class="cs-inner">${
          k}${h}${ps}<div class="cs-vid-wrap"><video src="${esc(b.src)}"${poster} autoplay loop muted playsinline preload="metadata"></video></div>${
          b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ""}</div></figure>`;
      }
      case "gallery": {
        const wide = !!b.wide;
        const plain = !!b.plain;   // wide image with no browser chrome (flows, heat maps, sketches)
        const cells = (b.shots || []).map(([src, label]) => {
          const img = `<img loading="lazy" src="${esc(src)}" alt="">`;
          const media = wide
            ? (plain
                ? `<div class="cs-plate">${img}</div>`
                : `<div class="cs-browser"><div class="cs-bar"><i></i><i></i><i></i></div>${img}</div>`)
            : `<div class="cs-dev">${img}</div>`;
          return `<figure class="cs-gcell">${media}${label ? `<figcaption>${esc(label)}</figcaption>` : ""}</figure>`;
        }).join("");
        const quote = b.quote
          ? `<blockquote class="cs-note"><p>${esc(b.quote)}</p>${b.quoteCite ? `<cite>${esc(b.quoteCite)}</cite>` : ""}</blockquote>` : "";
        return `<section class="cs-gal reveal ${wide ? "is-wide" : ""}" style="--tint:${esc(b.tint || "#7a1436")}"><div class="cs-inner">${
          k}${h}${ps}${quote}<div class="cs-ggrid">${cells}</div></div></section>`;
      }
      case "casework": {
        const gal = arr => `<div class="cs-gallery">${(arr || []).map(([src, label]) =>
          `<figure class="cs-g-item"><div class="cs-dev"><img loading="lazy" src="${esc(src)}" alt=""></div>${
            label ? `<figcaption>${esc(label)}</figcaption>` : ""}</figure>`).join("")}</div>`;
        const grp = (arr, tag) => (Array.isArray(arr) && arr.length)
          ? `<div class="cs-group"><span class="cs-tag ${tag}">${tag === "before" ? "Before" : "After"}</span>${gal(arr)}</div>` : "";
        const quote = b.quote
          ? `<blockquote class="cs-note"><p>${esc(b.quote)}</p>${b.quoteCite ? `<cite>${esc(b.quoteCite)}</cite>` : ""}</blockquote>` : "";
        const changes = Array.isArray(b.changes) && b.changes.length
          ? `<ol class="cs-changes">${b.changes.map(c => `<li>${esc(c)}</li>`).join("")}</ol>` : "";
        return `<section class="cs-work reveal" style="--tint:${esc(b.tint || "#0c3357")}"><div class="cs-inner">${
          k}${h}${ps}${quote}${grp(b.before, "before")}${grp(b.after, "after")}${changes}</div></section>`;
      }
      default:
        return "";
    }
  }

  // Small preview image for a project — its own thumb, else its cover, else a
  // gradient built from the project's colours.
  function projectThumb(p){
    const src = p.thumb || p.img;
    if(src) return `<span class="cs-nav-thumb"><img loading="lazy" src="${esc(src)}" alt=""></span>`;
    const a = (p.stops && p.stops[0]) || p.bg || "#222";
    const b = (p.stops && p.stops[1]) || p.accent || "#111";
    return `<span class="cs-nav-thumb" style="background:linear-gradient(135deg,${esc(a)},${esc(b)})"></span>`;
  }

  // Previous / Next project navigation, shown at the end of every case study.
  function projectNavBlock(project){
    const idx = PROJECTS.indexOf(project);
    if(idx < 0 || PROJECTS.length < 2) return "";
    const prevIdx = (idx - 1 + PROJECTS.length) % PROJECTS.length;
    const nextIdx = (idx + 1) % PROJECTS.length;
    const prev = PROJECTS[prevIdx], next = PROJECTS[nextIdx];
    return `<nav class="cs-nav reveal" aria-label="More projects">
        <button class="cs-nav-item cs-nav-prev" type="button" data-open="${prevIdx}">
          <span class="cs-nav-label"><span aria-hidden="true">&larr;</span>&nbsp; Previous</span>
          <span class="cs-nav-name">${esc(prev.name)}</span>
          ${projectThumb(prev)}
        </button>
        <button class="cs-nav-item cs-nav-next" type="button" data-open="${nextIdx}">
          <span class="cs-nav-label">Next &nbsp;<span aria-hidden="true">&rarr;</span></span>
          <span class="cs-nav-name">${esc(next.name)}</span>
          ${projectThumb(next)}
        </button>
      </nav>`;
  }

  // Render the rich story (if the project has one) or fall back to the
  // simple Overview / The work pair, and wire up the scroll-reveal.
  function renderStory(project){
    // If the page HTML is out of date (e.g. cached), these may be missing —
    // never let that stop the case study from opening.
    if(!csStory || !csDefault) return;
    if(storyObserver){ storyObserver.disconnect(); storyObserver = null; }

    if(Array.isArray(project.story) && project.story.length){
      csDefault.hidden = true;
      csStory.hidden   = false;
      csStory.innerHTML = project.story.map(storyBlock).join("");
    } else {
      csStory.hidden = true;
      csStory.innerHTML = "";
      csDefault.hidden = false;
    }

    // Previous / Next lives in its own container so it shows on every project
    if(csNav) csNav.innerHTML = projectNavBlock(project);

    // Scroll-reveal across the story and the nav footer
    const reveals = [...$$(".reveal", csStory), ...(csNav ? $$(".reveal", csNav) : [])];
    if(REDUCE){
      reveals.forEach(el => el.classList.add("in"));
    } else {
      storyObserver = new IntersectionObserver((entries) => {
        entries.forEach(en => {
          if(en.isIntersecting){ en.target.classList.add("in"); storyObserver.unobserve(en.target); }
        });
      }, { root: caseEl, threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
      reveals.forEach(el => storyObserver.observe(el));
    }
  }

  // Everything behind the overlay. We switch these off (`inert`) while the
  // case study is open so keyboard focus stays inside the dialog.
  // The skip link is a direct child of <body>, so it must be listed too.
  const background = [reel, dotsNav, stage, $("header"), $(".skip-link")];
  let lastFocused = null; // where to send focus back to when we close

  function setBackgroundInert(off){
    background.forEach(el => { if(el) el.inert = off; });
  }

  function openCase(i){
    const project = PROJECTS[i];
    if(!project) return;
    lastFocused = document.activeElement;

    $("#csTitle").textContent    = project.name;
    $("#csOverview").textContent = project.overview;
    $("#csWork").textContent     = project.work;

    // Meta row — the optional facts only appear when present in the data.
    const metaRow = [
      ["Role", project.role],
      ["Year", project.year],
      ["Platform", project.type],
      ["Timeline", project.timeline],
      ["Team", project.team],
      ["Tools", project.tools],
    ].filter(([, v]) => v)
     .map(([k, v]) => `<div><span>${esc(k)}</span><strong>${esc(v)}</strong></div>`)
     .join("");
    $("#csMeta").innerHTML = metaRow;

    // Rich story vs. simple fallback
    renderStory(project);

    setArt($("#csArt"), project, 1);

    caseEl.style.setProperty("--case-bg", project.bg);
    caseEl.style.setProperty("--case-fg", project.fg);
    caseEl.scrollTop = 0;

    caseEl.inert = false;
    setBackgroundInert(true);
    aboutEl.inert = true;                      // keep the About overlay out of the tab order
    document.body.classList.add("case-open");  // locks page scroll (see CSS)
    stopLoop();                                // no need to animate a hidden reel
    caseClose.focus();                         // move focus into the dialog
  }

  function closeCase(){
    if(!document.body.classList.contains("case-open")) return;

    caseEl.classList.add("closing");
    document.body.classList.remove("case-open");
    document.body.classList.add("case-closing"); // keep header/dots hidden until the panel is gone
    caseEl.inert = true;
    setBackgroundInert(false);
    setTimeout(() => {
      caseEl.classList.remove("closing");
      document.body.classList.remove("case-closing");
    }, REDUCE ? 0 : 700);

    if(!document.hidden) startLoop();
    if(lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  // Any element with data-open="N" opens project N
  document.addEventListener("click", e => {
    if(e.target.closest("[data-about-close]")){ closeAbout(); return; }
    const opener = e.target.closest("[data-open]");
    if(opener){
      if(document.body.classList.contains("about-open")) closeAbout();
      openCase(Number(opener.dataset.open));
    }
  });
  caseClose.addEventListener("click", closeCase);

  // The bobbing arrow scrolls down to the written details
  $("#csScroll").addEventListener("click", () => {
    const body = caseEl.querySelector(".cs-body");
    if(body) body.scrollIntoView({ behavior: SCROLL_BEHAVIOR, block: "start" });
  });

  // Escape key closes whichever overlay is open
  document.addEventListener("keydown", e => {
    if(e.key !== "Escape") return;
    if(document.body.classList.contains("case-open")) closeCase();
    else if(document.body.classList.contains("about-open")) closeAbout();
  });

  /* ---------- 6b. Open / close the About page ---------- */
  // The way out of the About page is the "Back" button in its own top bar,
  // built by buildAbout() above. It is also where focus lands on open.
  const aboutBack = $("[data-about-close]", aboutEl);

  function openAbout(){
    lastFocused = document.activeElement;
    // Fetch the portrait the first time the page is opened, not before.
    const photoEl = $(".ab-hero-photo img[data-src]", aboutEl);
    if(photoEl){
      photoEl.src = photoEl.dataset.src;
      delete photoEl.dataset.src;
    }
    aboutEl.scrollTop = 0;
    aboutEl.inert = false;
    setBackgroundInert(true);
    caseEl.inert = true;                          // keep the case overlay out of the tab order
    document.body.classList.add("about-open");    // reveals #about, locks scroll (see CSS)
    stopLoop();
    aboutBack.focus();                            // move focus into the dialog
  }

  function closeAbout(){
    if(!document.body.classList.contains("about-open")) return;
    aboutEl.classList.add("closing");
    document.body.classList.remove("about-open");
    document.body.classList.add("about-closing");
    aboutEl.inert = true;
    setBackgroundInert(false);
    setTimeout(() => {
      aboutEl.classList.remove("closing");
      document.body.classList.remove("about-closing");
    }, REDUCE ? 0 : 700);
    if(!document.hidden) startLoop();
    if(lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  // The Back button is handled by the delegated [data-about-close] click
  // listener in section 6, so it needs no listener of its own.

  /* ---------- 7. Header navigation actions ---------- */
  $("#aboutLink").addEventListener("click", () => {
    if(document.body.classList.contains("case-open")) closeCase();
    openAbout();
  });

  $("#logo").addEventListener("click", e => {
    e.preventDefault();
    if(document.body.classList.contains("case-open")) closeCase();
    if(document.body.classList.contains("about-open")) closeAbout();
    window.scrollTo({ top: 0, behavior: SCROLL_BEHAVIOR });
  });
}
