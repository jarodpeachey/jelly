# Jelly Development — jellydevelopment.com

Marketing site for Jelly Development, a web design agency run by Jarod Peachey (jarod@jellydevelopment.com). Targets local businesses in the Central Florida / Orlando area.

## Reference docs (read these first when relevant)

- @COMPANY.md — company info, brand colors, fonts, type scale, spacing, radii, shadows, website packages and pricing
- @README.md — services/dashboards, env vars, free audit tool flow
- [LOCAL_POSTS.md](LOCAL_POSTS.md) — how markdown blog posts work
- [static/website_packages.html](static/website_packages.html) — standalone pricing/packages doc

When pricing or package details change, update COMPANY.md, the homepage pricing section, and static/website_packages.html together so they stay in sync.

## Stack

- Gatsby 5 static site, React 18, deployed on Netlify
- Styling: global SCSS partials in `src/styles/` (not CSS-in-JS), compiled with `gatsby-plugin-sass`
- Font: Poppins, self-hosted, weights 300–900
- Primary color: `#385dd8`
- Netlify function `netlify/functions/audit.js` powers the free audit tool (PageSpeed API + Claude via `@anthropic-ai/sdk` + Resend email)

## Commands

- `npm run develop` — Gatsby dev server
- `npm run functions` / `netlify dev` — run with Netlify functions (port 8888)
- `npm run build` — production build
- `npm run format` — Prettier

## Project layout

- `src/pages/` — pages: `index.js` (homepage), `contact.js`, `free-audit.js`, `work/` (portfolio case studies), and city landing pages (`winter-park.js`, `oviedo.js`, `kissimmee.js`, etc.) that use `src/components/LocationPage.js`
- `src/components/` — Navigation, Footer, SEO, forms, carousel, and `Icon*.js` SVG icon components
- `src/templates/` — blog list and post templates; posts live in `src/content/posts/`
- `src/styles/partials/` — design tokens and shared styles:
  - `_colors.scss` — color tokens
  - `_typography.scss` — type scale
  - `_spacing.scss` — spacing and border-radius tokens
  - `_shadows.scss`, `_buttons.scss`, `_cards.scss`, `_sections.scss`, `_inputs.scss`
  - `pages/` — per-page stylesheets (e.g. `_home.scss`, `_contact-page.scss`)
- `static/media/img/` — images, including portfolio screenshots

## Conventions

- Use the existing SCSS tokens (colors, spacing, radii, shadows) instead of hard-coded values.
- New page styles go in `src/styles/partials/pages/_<page>.scss`.
- Match the brand: headings weight 800, body weight 300, pills 13px/600 uppercase. See COMPANY.md for full specs.
