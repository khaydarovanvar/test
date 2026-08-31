# STEMCO Website

Awwwards-style static marketing site for STEMCO olympiads.

## Pages
- `index.html` — main page (hero 3D, stats, story & milestones, subjects, participation, timeline, prices, gallery, partners, contact)
- `mathematics.html` / `science.html` / `biology.html` / `chemistry.html` / `physics.html` / `english.html` — subject pages, each theme-flooded with its brand color
- `rules.html` — Rules & Regulations 2026/27
- `register.html` — interest + partner forms (HubSpot)
- `sitemap.xml`, `robots.txt`

## Configure before launch
1. **HubSpot forms** — in `assets/js/main.js` set:
   - `HUBSPOT_PORTAL_ID` (HubSpot → Settings → Account ID)
   - `HUBSPOT_FORM_GUID.register` and `.partner` (Marketing → Forms → Share → Embed code)
   Until configured, forms show the success state but only log to console.
2. **Domain** — `sitemap.xml`, `robots.txt` and the JSON-LD assume `https://www.stemco.org/`.
3. **Sample papers** — subject pages currently link sample papers to a request email; swap in real PDF links when ready.

## Stack
Static HTML/CSS/JS. CDN: GSAP + ScrollTrigger, Lenis (smooth scroll), Three.js (hero scene).
No build step — deploy the folder as-is (GitHub Pages / Netlify / any static host).
`?noanim` on any URL disables all animation (also honored via prefers-reduced-motion).

## Media
Gallery photos are hotlinked from stemco.org uploads; videos embed from the
@stemco_global YouTube channel. Local assets in `assets/img/` come from the old
site package plus the brandbook (logos, favicons, school logos, English logo).
