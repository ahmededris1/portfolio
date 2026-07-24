# Ahmed Edris — Portfolio

A fast, single-page interactive portfolio built with plain HTML, CSS and
JavaScript. There is no build step and nothing to install, so it is easy
to edit and it runs on any website host.

If you are not a coder, you only ever need one file: **`data/projects.js`**.
Everything below is written for you.

---

## 1. The golden rules (read this first)

When you edit `data/projects.js`, keep these three things true and you
will be fine:

1. Every piece of text stays inside its quotes: `"like this"`.
2. Every line still ends with a comma: `,`
3. Make a backup copy of the file before a big change.

If you make a small mistake, the site will not silently break. It shows a
friendly message telling you to check `data/projects.js`. Fix the typo and
reload.

---

## 2. How to make the most common changes

Open `data/projects.js` in any text editor (even Notepad works). You will
see two parts: `SITE` (your details, including the whole About page) and
`PROJECTS` (your work).

**Change your email or social links**
Find the `SITE` block at the top and edit the text in quotes:

```
email:    "you@example.com",
behance:  "https://www.behance.net/yourname",
linkedin: "https://www.linkedin.com/in/yourname",
```

To hide a social button, leave its quotes empty: `behance: "",`

**Change anything on the About page**
Everything there lives in the `about: { ... }` block inside `SITE` — your
photo, greeting, the big statement, the "At work" and "In life" text, the
scrolling ticker, the client cards and the experience list.

**Change a project's words**
Find the project and edit `name`, `desc`, `overview`, etc. Keep the quotes
and the comma.

**Change a project's colours**
Edit the `bg` (background), `fg` (text) and `accent` (highlight) colours.
They are hex codes like `"#1c3a52"`. Tip: pick colours where the text
clearly stands out from the background so everyone can read it.

**Add a new project**
Copy one whole project block (everything from `{` to `},` including the
braces) and paste it above the line that says `];`. Then change the text.

**Remove a project**
Delete its whole block, from `{` to the matching `},`.

**Swap a picture**
1. Put your file inside the `images` folder.
2. Find the line that names the old picture, for example
   `img: "images/scb-hero.webp",`
3. Change the file name in the quotes to yours.

Each project can use three kinds of picture, all optional:

| Key     | Where it shows                                    |
| ------- | ------------------------------------------------- |
| `img`   | the large cover on the project screen             |
| `thumb` | the small preview button, and prev/next at the end |
| inside `story` | the screenshots in the case study itself    |

If a project has no `img`, the site draws a coloured placeholder for it
using that project's `stops` and `blobs` colours.

---

## 3. See your changes

- Quick look: double-click `index.html` to open it in your browser.
- Better look (closer to the live site): open a terminal in this folder
  and run this, then visit the address it prints:
  ```
  python3 -m http.server 8000      # then open http://localhost:8000
  ```

After any edit, just reload the browser tab. If a change to the CSS or JS
does not show up, bump the `?v=4` number at the bottom of `index.html` —
that is there to push past the browser's cache.

---

## 4. Put it online

This repository already contains a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that publishes the site to GitHub Pages on
every push to `main`. Turn it on once under **Settings → Pages → Source →
GitHub Actions**, and every push after that deploys itself.

The site is only static files, so other hosts work too with no setup:

- **Netlify Drop**: go to app.netlify.com/drop and drag this folder in.
- **Vercel**: run `vercel` inside this folder, or import the repository.

**If you move to a different address**, update the URLs in three places:
the `og:`/`twitter:`/`canonical` tags near the top of `index.html`,
`robots.txt`, and `sitemap.xml`. Sharing previews break silently otherwise,
because social networks need the full `https://...` address of the image,
not a relative one.

---

## 5. What each file is (for the curious)

```
index.html          the page structure, tab title and sharing preview tags
pika.svg            the icon shown in the browser tab
robots.txt          tells search engines they may index the site
sitemap.xml         the list of pages for search engines
css/styles.css      all the visual styling
js/main.js          all the behaviour (you should not need to edit this)
data/projects.js    YOUR content: projects, colours, links, About page
images/             screenshots, the portrait, and the sharing preview
videos/             the inline clip used in the Cookster case study
```

---

## 6. Notes for whoever maintains the code

- **Pictures are WebP.** Screenshots are saved lossless (no quality lost,
  smaller than PNG); photographs and gradients are saved at quality 92.
  The animated previews are animated WebP rather than GIF — same thing on
  screen, about a tenth of the weight. Any modern browser handles both.
  `images/social-preview.png` stays a PNG on purpose: some social networks
  still will not read a WebP sharing preview.
- **Three breakpoints, and only three**, listed at the top of
  `css/styles.css`: 640px, 760px and 860px. Each media query sits directly
  beside the rules it changes rather than in one block at the bottom.
- **Full-width bands.** The case study and the About page are both laid out
  as a three-track grid — gutter, content column, gutter. Ordinary blocks
  sit in the middle track; tinted media bands and the sticky top bar span
  all three with `grid-column: 1 / -1`. Nothing uses `100vw`, which would
  count the scrollbar and push the page sideways by a few pixels.
- **Adding a new kind of story block**: add a `case` to `storyBlock()` in
  `js/main.js` and style it in section 10 of the CSS. If it should run edge
  to edge, add its class to the full-bleed selector list there too.

---

## 7. Built-in quality

You do not have to do anything for these; they are already handled:

- Works with a keyboard only: Tab to move, Enter to open, Esc to close.
- Respects the visitor's "reduce motion" setting.
- Labels for screen readers, a "skip to content" link, and clear focus
  outlines.
- Opening a project locks the page behind it so only the panel scrolls,
  and everything underneath is taken out of the tab order.
- Works on phones, tablets and very wide monitors.
