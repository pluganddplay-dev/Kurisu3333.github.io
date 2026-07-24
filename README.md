# Pro Sound Vision — Landing Page

Marketing site for Pro Sound Vision / Plug & Play (Kuching, Sarawak), built with
[Eleventy](https://www.11ty.dev/). The page is split into small, editable pieces
instead of one giant `index.html`.

## Where things live

```
src/
├── index.html                  ← page map: the order sections appear in
├── _includes/
│   ├── base.njk                ← the HTML shell (<head>, fonts, script tags)
│   └── sections/               ← ONE FILE PER SECTION — edit these
│       ├── navbar.html         ← top navigation + mobile menu
│       ├── hero.html           ← headline / hero banner
│       ├── services.html       ← the three service cards
│       ├── why-us.html         ← "Why Pro Sound Vision" + stats (our About Us)
│       ├── projects.html       ← project gallery tiles
│       ├── testimonials.html   ← client quotes
│       ├── contact.html        ← contact details, enquiry form, map
│       └── footer.html         ← footer
├── css/
│   └── styles.css              ← all custom CSS
├── js/
│   ├── tailwind-config.js      ← Tailwind theme (colours, fonts, shadows)
│   ├── main.js                 ← nav, scroll animations, counters, carousel
│   ├── contact-form.js         ← contact form submission (Formspree)
│   └── aos-init.js             ← scroll-animation library setup
└── image/                      ← logo and images
```

**Want to edit the "About Us" text?** Open `src/_includes/sections/why-us.html`.
**Change a service or price?** `src/_includes/sections/services.html`. And so on —
the file name matches the section.

## Editing & previewing locally

You need [Node.js](https://nodejs.org/) installed (one-time).

```bash
npm install      # first time only — installs Eleventy
npm start        # live preview at http://localhost:8080 (auto-reloads on save)
```

To produce the final site once (into the `_site/` folder):

```bash
npm run build
```

## How it goes live

Pushing to the `main` branch triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub
Pages automatically. You do **not** commit the `_site/` folder — it is generated.

> One-time setup: in the repo on GitHub, go to **Settings → Pages** and set
> **Source** to **GitHub Actions**.
