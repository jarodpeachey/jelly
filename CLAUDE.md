# Jelly Development: Project Context

## Who and what

- Owner: Jarod. Brand: Jelly Development, a flat-rate web design business at jellydevelopment.com.
- Market: small, owner-operated businesses in the Orlando, FL area. Focus on trades and local services (HVAC, roofing, plumbing, electrical, landscaping).
- Highest-fit target: solo operators and businesses under 10 employees with no site or a slow, outdated one.
- Secondary client project: frontend work for roxotranslations.com (certified translation company in Florida). Do not assume or invent any other prior client or project history.

## Offer (live on jellydevelopment.com)

- Starter $500, Growth $1,400, Premium $3,000, plus a $199/mo Care Plan add-on.
- Current push (Oct 2026): lead with the $500 Starter with a refund if unhappy. Give something free first (audit and a homepage mockup), then email.
- Preference: cheap and high volume over a few expensive clients. One $500 client a month is enough.
- Suggested refund structure (needs attorney review): $250 deposit, full deposit refund if the design is rejected at preview, final $250 at launch, 14-day post-launch refund window.

## Lead generation and outreach

- Cold calling and SMS outperform email for trades businesses.
- Sunbiz.org filings have no emails. Use a pull-then-enrich workflow (Apify scraper, then Hunter.io or Findymail). Sunbiz data is better for phone numbers.
- Possible workflow: filter Orange County LLC filings by industry code.
- Free audit uses PageSpeed Insights API (mobile speed score) and measured facts only. Never state anything about a business that was not measured.
- Mind DNC, FTSA, and TCPA rules for calls and texts. Include a physical address and an opt-out line in every email (CAN-SPAM).
- Copy rules: concise, friendly, conversational. No em dashes. No excessive line breaks. Emails under about 100 words. SMS under 320 characters with no link in the first message.

## Email infrastructure

- jellydevelopment.com: registered at Squarespace, DNS on Netlify, site built with Gatsby and deployed on Netlify.
- Cold email goes out from a separate lookalike domain, jelly-development.com, to protect the main domain's reputation.
- jelly-development.com is a Netlify domain alias that 301-redirects to jellydevelopment.com (host-specific rules for apex and www). Redirects only affect browsers. Replies still arrive through the MX records.
- jelly-development.com has its own Netlify DNS zone. Email records must exist there before nameservers are switched at Squarespace: 5 Google MX records, the google-site-verification TXT, SPF (`v=spf1 include:_spf.google.com ~all`), DMARC (`v=DMARC1; p=none; rua=mailto:<mailbox>`), and a DKIM TXT at `google._domainkey` generated in Google Admin.
- Google Workspace was bought through Squarespace. Use a secondary domain (separate mailboxes), not an alias domain.
- Warm-up: TrulyInbox (free tier), WarmupInbox, Warmbox, or Mailivery. Do not run two warm-ups on one mailbox. Instantly and Smartlead include their own.
- Sending: GMass (sends from Gmail), Instantly, Snov.io. Start around 20 emails per day per inbox and ramp to 40-50. Check with mail-tester.com.
- SMTP/IMAP into third-party tools needs a Google app password (requires 2-Step Verification), or use the tool's "Connect with Google" OAuth option.
- Email signature: plain text only (name, Jelly Development, one-line description, phone, site, mailing address, opt-out line). No images, logos, or social icons early on.

## Ads and creative

- Meta ads: Traffic or Leads objectives beat Awareness for a price-led offer. 4:5 portrait wins on mobile feed.
- Brand palette: navy, orange, sky blue.
- Typography: Bricolage Grotesque, DM Sans, IBM Plex Mono for the launch checklist. Playfair Display plus DM Sans was used on roxotranslations.com.

## Working style

- Iterative and direct. Refers to UI elements by visible label and gives precise layout instructions.
- Evaluates tools by cost-efficiency and fit for small volume (one to two inboxes, early-stage pipeline).
- Willing to pay for Claude Pro and other tools if they directly help get clients.

## Tracking

- Launch checklist artifact (11 steps, scripts, progress saved): https://claude.ai/artifact/FMQQK54buh73UQtBekycDn
- A four-tab Google Sheets tracker (Leads, Outreach log, Clients, Weekly numbers) is planned but not yet created in Drive.

---

# Website codebase (this repo)

## Reference docs

- @COMPANY.md: website brand tokens (colors, fonts, type scale, spacing, radii, shadows), packages, add-ons, payment policies
- @README.md: services and dashboards, env vars, free audit tool flow
- [LOCAL_POSTS.md](LOCAL_POSTS.md): how markdown blog posts work
- [static/website_packages.html](static/website_packages.html): standalone pricing/packages doc

When pricing or package details change, update COMPANY.md, the homepage pricing section in `src/pages/index.js`, and `static/website_packages.html` together.

Note: the website itself uses Poppins and primary blue `#385dd8` (see COMPANY.md). The navy/orange/sky blue palette and Bricolage Grotesque / DM Sans fonts above are for ads and creative. Use the site tokens for anything in this repo unless told otherwise.

## Stack

- Gatsby 5, React 18, deployed on Netlify (`netlify.toml`)
- Styling: global SCSS partials in `src/styles/` via `gatsby-plugin-sass` (no CSS-in-JS)
- Font: Poppins, self-hosted, weights 300-900
- Netlify function `netlify/functions/audit.js` powers the free audit (PageSpeed Insights API, Claude via `@anthropic-ai/sdk`, Resend email). Env vars: `ANTHROPIC_API_KEY`, `PAGESPEED_API_KEY`, `RESEND_API_KEY`.
- `static/_redirects` holds the jelly-development.com (apex and www) 301 rules to jellydevelopment.com.

## Commands

- `npm run develop`: Gatsby dev server
- `npm run functions` or `netlify dev`: run with Netlify functions (port 8888)
- `npm run build`: production build
- `npm run format`: Prettier

## Pages on the site

- `/` (`src/pages/index.js`): homepage. Sections in order: hero, pain points (dark), services (`#services`), process (`#process`), pricing (`#pricing`), FAQ (`#faq`), local/contact (`#contact`), final CTA. Some older sections (themes, pain-points, results) are commented out.
- `/work` (`src/pages/work/`): portfolio index and case studies (e.g. `lakeland-painting.js`)
- `/contact` (`src/pages/contact.js`)
- `/free-audit` (`src/pages/free-audit.js`): free audit tool. Flow: URL, site type, name/email, then PageSpeed + SEO scrape + Claude, results page and email.
- `/blog` and `/blog/<slug>`: generated in `gatsby-node.js` from markdown in `src/content/posts/` using `src/templates/blog.js` and `post.js`
- City landing pages built on `src/components/LocationPage.js`: altamonte-springs, apopka, clermont, deltona, kissimmee, lake-mary, oviedo, sanford, winter-garden, winter-park
- Other: `landing-pages.js`, `success.js`, `error.js`, `404.js`
- Navigation links: Work, Pricing (`/#pricing`), Contact

## Code layout

- `src/components/`: Navigation, Footer, SEO, Form/JotForm/Select/Option, Carousel, LocationPage, and `Icon*.js` SVG icons
- `src/context/PopupContext.js`: popup state
- `src/utils/`: `formatDate.js`, `log.js`
- `src/styles/partials/`: design tokens and shared styles
  - `_colors.scss`, `_typography.scss`, `_spacing.scss` (spacing and border radius), `_shadows.scss`, `_breakpoints.scss`
  - `_buttons.scss`, `_cards.scss`, `_sections.scss`, `_inputs.scss`, `_navigation.scss`, `_footer.scss`, `_carousel.scss`
  - `pages/`: per-page styles (`_home.scss`, `_contact-page.scss`, `_free-audit.scss`, `_work.scss`, `_blog.scss`, `_post.scss`, etc.)
- `static/media/img/`: images, including portfolio screenshots in `Portfolio/`
- `static/*.html`: standalone docs (packages, business card, quotes, contracts) served as-is

## Conventions

- Use the existing SCSS tokens (colors, spacing, radii, shadows) instead of hard-coded values.
- New page styles go in `src/styles/partials/pages/_<page>.scss`.
- "Secondary page style": the dark navy hero with the blue grid, defined once as `.secondary-hero` in `src/styles/partials/_secondary-page.scss`. Used on `/work`, the case study pages, and `/contact`. Put a pill, h1, and p inside it; add page-specific modifiers alongside (e.g. `secondary-hero case-hero`). Also add `secondary-page` to the page's SEO `bodyClass` so the desktop nav links turn white (90% opacity, 100% on hover).
- Match the site's type: headings weight 800, body weight 300, pills 13px/600 uppercase. Full specs in COMPANY.md.
- Site copy follows the same copy rules as outreach: concise, friendly, conversational, no em dashes.
