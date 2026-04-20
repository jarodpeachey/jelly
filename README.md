# Jelly Development — jellydevelopment.com

Gatsby static site with a free website audit tool powered by AI.

## Services & Dashboards

| Service | Purpose | Link |
|---|---|---|
| Netlify | Hosting, deployments, serverless functions, form submissions | https://app.netlify.com |
| Anthropic | Claude API for AI audit recommendations | https://console.anthropic.com |
| Google Cloud | PageSpeed Insights API key | https://console.cloud.google.com |
| Resend | Transactional email (audit results) | https://resend.com |
| Calendly | Booking link in audit emails | https://calendly.com/jarod-peachey/30min |

## Environment Variables

Set these in Netlify (Site settings → Environment variables) and locally in `.env`:

```
ANTHROPIC_API_KEY
PAGESPEED_API_KEY
RESEND_API_KEY
```

## Free Audit Tool

- Page: `src/pages/free-audit.js`
- Netlify function: `netlify/functions/audit.js`
- Flow: URL → site type → name/email → PageSpeed + SEO scrape + Claude → results page + email

## Local Development

```bash
npm run develop        # Gatsby dev server at localhost:8000
npm run functions      # Netlify functions at localhost:9999
```
