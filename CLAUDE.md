# Working on this repository

A single-page portfolio at <https://ahmededris.com>. Plain HTML, CSS and
JavaScript. **No build step, no dependencies, no framework** — this is a
deliberate constraint, not an accident. See "Do not" below.

The owner is a designer, not a developer. He edits `data/projects.js` in a
plain text editor. Anything that breaks that is a regression.

## Layout of the code

```
index.html        structure, head metadata, structured data
404.html          self-contained; must work if the CSS or JS is what broke
css/styles.css    14 numbered sections, listed at the top of the file
js/main.js        sections A-D, listed at the top of the file
data/projects.js  ALL content: projects, colours, links, the About page
images/           every raster asset, WebP only (one PNG, see below)
```

## Do not

- **Add a build step, bundler, minifier or npm dependency.** Minifying the
  CSS and JS saves about 11KB. It is not worth a toolchain the owner cannot
  run, or a minified file that silently drifts from its source.
- **Redirect the 404 page to the homepage.** Google treats that as a soft
  404 and penalises it. `404.html` returns a real 404, carries `noindex`
  and offers a clear link back. That is the correct behaviour.
- **Use `100vw` for full-width elements.** It counts the scrollbar and
  pushes the page sideways by a few pixels. Use the grid described below.
- **Add a `CNAME` file.** Pages is published by a GitHub Actions workflow,
  and in that mode GitHub ignores one. The domain lives in the repository's
  Pages settings.
- **Add analytics or any third-party script** without being asked. The only
  third-party request is Google Fonts.

## Layout conventions

**Three breakpoints, and only three.** `640px`, `760px`, `860px`. They are
documented at the top of `css/styles.css`. Each media query sits next to the
rules it changes, not in a block at the bottom. Do not introduce a fourth —
solve it with `clamp()` instead, as `.ab-email` does.

**Full-width bands** use a three-track grid — gutter, content, gutter — on
`.cs-body` and `#aboutBody`. Ordinary blocks sit in the middle track;
edge-to-edge elements span all three with `grid-column: 1 / -1`.

Watch the specificity: `#csStory > *` and `#aboutBody > *` pin children to
the middle track and carry an ID. A full-bleed exception must include that
ID prefix or it silently loses. This has already caused one bug.

## Images

Everything is WebP except `images/social-preview.png`, which stays a PNG
because some social networks will not read a WebP sharing preview.

Re-encoding, using ffmpeg:

- **UI screenshots** — lossless (`-lossless 1`). For flat interface
  captures this is both smaller than lossy *and* pixel-perfect.
- **Photographs and gradients** — `-q:v 92`.
- When unsure, encode both and keep whichever is smaller. That rule picks
  correctly on its own.
- **Animated previews** (`*-thumb.webp`) — 448px wide, 18fps, `-q:v 72`,
  encoded forward then reversed so the loop turns around instead of cutting.
  Drop the first and last frame of the reversed half so neither is shown
  twice. **Never resample fps above the source rate** — one preview is
  natively 12fps and forcing it to 18 just duplicates frames.
- Do not upscale. Previews display at 190px; 448px already covers a 2x
  screen comfortably.

## Performance invariants

These were expensive to find. Do not undo them.

- **Slide imagery is deferred.** Register it through `deferToSlide()` in
  section 1 of `js/main.js`. The opening cascade is the one exception — it
  sweeps every project at once, so those images must load up front.
- **`rootMargin` is `"0px 0px -1px 0px"`.** Slides are exactly one screen
  tall, so the next begins on the pixel this one ends. At `0px` that counts
  as touching and a second preview — nearly a megabyte — downloads before
  the visitor scrolls. The negative pixel excludes it.
- **The intro letters live in `index.html`**, with their stagger in CSS
  `nth-child` rules. Building them from JavaScript delayed First Contentful
  Paint to 3.1s, because a background colour alone is not "content". The
  script only rebuilds them if `SITE.name` disagrees.
- **`index.html` preloads the first project's cover.** JavaScript applies it
  as a background, which the browser cannot discover on its own. Reordering
  projects makes the preload point at the wrong file.
- **Do not read layout geometry inside `render()`.** It runs every frame.
  `viewportH` is cached and refreshed on resize for exactly this reason.
- Cache lifetime is fixed at ten minutes by GitHub Pages. It cannot be set
  from the repository, so ignore that audit finding.

## Accessibility invariants

- Opening either overlay marks the other **and** the page behind it `inert`,
  moves focus inside, and restores focus on close.
- **Case-study images use `alt=""` on purpose.** Each sits in a `<figure>`
  with its label in a `<figcaption>`, which is already the text alternative.
  Repeating it in `alt` makes screen readers announce it twice.
- The logo's roll animation draws its second copy from a CSS
  `::after` + `attr(data-char)`, not a duplicated element, so the link's text
  reads "AHMED EDRIS" once and matches its accessible name.
- `prefers-reduced-motion` is honoured throughout. Check it still is.

## URLs and metadata

The live address appears in **three files**: `index.html` (canonical,
`og:url`, `og:image`, `twitter:image`, and the JSON-LD `url` and `image`),
`robots.txt`, and `sitemap.xml`. Change them together — social networks
fetch the preview by absolute URL, so a stale one fails silently.

The JSON-LD repeats the name, role, location, employer and links from
`data/projects.js` deliberately: crawlers read it before any JavaScript
runs. Keep the two in step and validate at <https://validator.schema.org>.

Bump the `?v=N` query on the CSS and script tags when changing those files.

## Verifying a change

There is no test suite. Before pushing anything visual or structural, drive
a real browser and check:

- Every width from **320px to 1920px**: no horizontal overflow on the reel,
  the case studies or the About page; no console errors.
- All six case studies open, scroll to the end, and return no 404s.
- Focus lands correctly in both overlays and returns on Escape.
- `prefers-reduced-motion` still dismisses the intro and reveals the story.
- Lighthouse mobile and desktop, before and after. Accessibility, best
  practices and SEO are all at 100 — keep them there.

Measure against a real deployment as well as localhost. Several problems
here were invisible locally because the network was instant, and the
run-to-run spread over a real connection is wide enough that one Lighthouse
run proves nothing. Take a median of three.

## Commits

Imperative subject under about 50 characters, blank line, then a body that
explains **why** — the measurement, the failure it fixes, or the constraint
it respects. State numbers where there are numbers.

Commits are authored as the repository owner; the identity is set in this
clone's local git config. Do not change it, and do not add any co-author or
tool attribution.
