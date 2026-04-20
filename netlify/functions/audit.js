const Anthropic = require("@anthropic-ai/sdk");
const { Resend } = require("resend");

// ─────────────────────────────────────────────────────────────
// ENV VARS NEEDED (set in Netlify dashboard → Site settings → Environment variables):
//   ANTHROPIC_API_KEY   — your Claude API key
//   PAGESPEED_API_KEY   — Google PageSpeed Insights API key (free at console.cloud.google.com)
//   RESEND_API_KEY      — your Resend API key (resend.com)
// ─────────────────────────────────────────────────────────────

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const resend = new Resend(process.env.RESEND_API_KEY);

// ── PageSpeed Insights ────────────────────────────────────────
async function runPageSpeed(url) {
    const apiKey = process.env.PAGESPEED_API_KEY;
    const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&category=performance&category=seo&category=accessibility${apiKey ? `&key=${apiKey}` : ""}`;

    const res = await fetch(endpoint);
    if (!res.ok) throw new Error(`PageSpeed API error: ${res.status}`);
    return res.json();
}

function extractPageSpeedData(data) {
    const cats = data.lighthouseResult?.categories ?? {};
    const audits = data.lighthouseResult?.audits ?? {};

    return {
        performance: Math.round((cats.performance?.score ?? 0) * 100),
        seo:         Math.round((cats.seo?.score ?? 0) * 100),
        mobile:      Math.round((cats.accessibility?.score ?? 0) * 100), // proxy for overall mobile UX
        coreWebVitals: {
            lcp: audits["largest-contentful-paint"]?.displayValue ?? "N/A",
            cls: audits["cumulative-layout-shift"]?.displayValue ?? "N/A",
            fid: audits["total-blocking-time"]?.displayValue ?? "N/A",
        },
        // Raw audit failures for the Claude prompt
        failedAudits: Object.values(audits)
            .filter(a => a.score !== null && a.score < 0.9 && a.details?.type !== "opportunity")
            .slice(0, 10)
            .map(a => `${a.title}: ${a.displayValue ?? a.description ?? ""}`.trim()),
        opportunities: Object.values(audits)
            .filter(a => a.details?.type === "opportunity" && a.score !== null && a.score < 1)
            .slice(0, 5)
            .map(a => `${a.title} — est. savings: ${a.displayValue ?? "unknown"}`),
    };
}

// ── Basic SEO scrape ──────────────────────────────────────────
async function scrapeSEO(url) {
    const res = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; JellyAuditBot/1.0)" },
        signal: AbortSignal.timeout(8000),
    });
    const html = await res.text();

    const get = (pattern) => (html.match(pattern) ?? [])[1]?.trim() ?? null;

    const title       = get(/<title[^>]*>([^<]+)<\/title>/i);
    const description = get(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)
                     ?? get(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i);
    const h1          = get(/<h1[^>]*>([^<]+)<\/h1>/i);
    const canonical   = get(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
    const ogImage     = get(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
    const robots      = get(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i);

    const imgTotal        = (html.match(/<img/gi) ?? []).length;
    const imgMissingAlt   = (html.match(/<img(?![^>]*\balt=["'][^"']+["'])[^>]*>/gi) ?? []).length;
    const hasHttps        = url.startsWith("https://");
    const hasViewport     = /<meta[^>]+name=["']viewport["']/i.test(html);

    return {
        title,
        titleLength:     title?.length ?? 0,
        description,
        descriptionLength: description?.length ?? 0,
        h1,
        canonical,
        ogImage:         !!ogImage,
        robots,
        hasHttps,
        hasViewport,
        imgTotal,
        imgMissingAlt,
    };
}

// ── Site type context for Claude ─────────────────────────────
const SITE_TYPE_CONTEXT = {
    local:     "a local business website trying to attract nearby customers and rank in local search results",
    ecommerce: "an e-commerce store trying to drive product sales and reduce cart abandonment",
    portfolio: "a portfolio or freelancer site trying to attract clients and showcase work credibly",
    startup:   "a startup or SaaS site trying to grow brand awareness, generate leads, and convert visitors",
};

// ── Claude recommendations ────────────────────────────────────
async function getRecommendations(url, pageSpeed, seo, siteType) {
    const siteContext = SITE_TYPE_CONTEXT[siteType] || "a business website trying to attract and convert visitors";

    const prompt = `You are a friendly website advisor helping a non-technical business owner understand how to improve their website. Analyze this audit data and return exactly 5 prioritized recommendations written in plain, everyday language.

This website is ${siteContext}.

IMPORTANT TONE AND LANGUAGE RULES:
- Write as if you're explaining to a small business owner who has never coded before
- Never use technical terms like LCP, CLS, TBT, render-blocking, minification, CDN, caching, alt attributes, meta tags, canonical, or similar developer jargon
- Instead of "your LCP is slow", say "your page takes too long to load"
- Instead of "add alt attributes to images", say "add descriptions to your images so search engines know what they show"
- Instead of "meta description is missing", say "your page is missing a short preview blurb that shows up in Google search results"
- Focus on WHAT to fix and WHY it helps their business — more customers, better Google ranking, more sales, etc.
- Keep it conversational, encouraging, and specific to their goals

Website: ${url}
Site type: ${siteType ?? "general"}

PERFORMANCE SCORES:
- Performance: ${pageSpeed.performance}/100
- SEO: ${pageSpeed.seo}/100
- Mobile/Accessibility: ${pageSpeed.mobile}/100

TOP ISSUES DETECTED:
${pageSpeed.failedAudits.join("\n") || "None detected"}

PERFORMANCE OPPORTUNITIES:
${pageSpeed.opportunities.join("\n") || "None detected"}

SEO DATA:
- Title tag: "${seo.title ?? "Missing"}" (${seo.titleLength} chars — ideal is 50–60)
- Meta description: "${seo.description ?? "Missing"}" (${seo.descriptionLength} chars — ideal is 120–160)
- H1 tag: "${seo.h1 ?? "Missing"}"
- Open Graph image: ${seo.ogImage ? "Present" : "Missing"}
- HTTPS: ${seo.hasHttps ? "Yes" : "NO — critical issue"}
- Viewport meta tag: ${seo.hasViewport ? "Present" : "Missing"}
- Images without alt text: ${seo.imgMissingAlt} of ${seo.imgTotal} total images

Return a JSON array of exactly 5 objects. No markdown, no code fences, just raw JSON.
Each object must have exactly two fields:
- "fix": one clear, direct action sentence in plain English (max 15 words, starts with a verb, no jargon)
- "explanation": exactly 2 sentences in plain language explaining what this means for their business — more customers, better Google ranking, more sales, etc. No technical terms.

Example format:
[{"fix":"Speed up your website so visitors don't leave before it loads.","explanation":"..."},...]`;

    const message = await anthropic.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 900,
        messages: [{ role: "user", content: prompt }],
    });

    const text = message.content[0].text.trim();

    // Strip any accidental markdown fences
    const cleaned = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();

    try {
        const parsed = JSON.parse(cleaned);
        return parsed.slice(0, 5);
    } catch {
        // Fallback: return raw text split as before
        return text
            .split(/\n/)
            .map(line => ({ fix: line.replace(/^\d+\.\s*/, "").trim(), explanation: "" }))
            .filter(r => r.fix.length > 10)
            .slice(0, 5);
    }
}

// ── Score label helpers ───────────────────────────────────────
const scoreLabel = (n) => n >= 90 ? "Great" : n >= 50 ? "Needs Work" : "Poor";
const scoreColor = (n) => n >= 90 ? "#0cce6b" : n >= 50 ? "#ffa400" : "#ff4e42";

// ── Send results email ────────────────────────────────────────
async function sendResultsEmail({ name, email, url, performance, seo, mobile, issueCount, recommendations }) {
    const recsHtml = recommendations.map((rec, i) => `
        <div style="display:flex;gap:16px;margin-bottom:20px;align-items:flex-start;">
            <div style="min-width:32px;height:32px;background:#385dd8;color:#fff;border-radius:2px;font-weight:700;font-size:14px;line-height:32px;text-align:center;margin-right:10px;">${i + 1}</div>
            <div>
                <p style="margin:0 0 4px;font-weight:600;color:#191a1c;font-size:15px;">${rec.fix}</p>
                ${rec.explanation ? `<p style="margin:0;color:#555;font-size:14px;line-height:1.5;">${rec.explanation}</p>` : ""}
            </div>
        </div>
    `).join("");

    const scoreCard = (label, score, borderBottom = true) => `
        <div style="padding:14px 0;${borderBottom ? "border-bottom:1px solid #eee;" : ""}">
            <div style="font-size:13px;font-weight:600;color:#555;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;">${label}</div>
            <div style="font-size:28px;font-weight:800;color:${scoreColor(score)};margin-bottom:4px;">${score}<span style="font-size:14px;font-weight:400;color:#aaa;">/100</span></div>
            <div style="font-size:12px;color:${scoreColor(score)};font-weight:700;text-transform:uppercase;letter-spacing:.05em;">${scoreLabel(score)}</div>
        </div>
    `;

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:'Helvetica Neue',Arial,sans-serif;">
    <div style="max-width:600px;margin:40px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08);">

        <!-- Header -->
        <div style="background:#385dd8;padding:32px 40px;">
            <p style="margin:0;color:rgba(255,255,255,.7);font-size:13px;letter-spacing:.08em;text-transform:uppercase;font-weight:600;">Jelly Development</p>
            <h1 style="margin:8px 0 0;color:#fff;font-size:26px;font-weight:800;">Your Free Website Audit</h1>
            <p style="margin:8px 0 0;color:rgba(255,255,255,.8);font-size:14px;">${url}</p>
        </div>

        <!-- Body -->
        <div style="padding:36px 40px;">
            <p style="margin:0 0 24px;color:#191a1c;font-size:16px;">Hey ${name},</p>
            <p style="margin:0 0 24px;color:#555;font-size:15px;line-height:1.6;">
                Here are the results from your free website audit. We found <strong>${issueCount} issues</strong> across your site — below are the scores and our top recommendations to help you fix them.
            </p>
            <p style="margin:0 0 32px;color:#555;font-size:15px;line-height:1.6;">
                Want to talk through what these mean for your site? <a href="https://calendly.com/jarod-peachey/30min" style="color:#385dd8;font-weight:600;">Book a free 30-minute call</a> and I'll walk you through exactly what needs to be done.
            </p>

            <!-- Scores -->
            <div style="background:#f4f6fb;border-radius:10px;padding:8px 24px;margin-bottom:32px;">
                ${scoreCard("Performance", performance)}
                ${scoreCard("SEO", seo)}
                ${scoreCard("Mobile", mobile, false)}
            </div>

            <!-- Recommendations -->
            <h2 style="margin:0 0 20px;color:#191a1c;font-size:18px;font-weight:700;">Your Top 5 Recommendations</h2>
            ${recsHtml}

            <!-- CTA -->
            <div style="background:#f4f6fb;border-radius:10px;padding:28px;margin-top:32px;text-align:center;">
                <p style="margin:0 0 8px;color:#191a1c;font-size:17px;font-weight:700;">Want these issues fixed?</p>
                <p style="margin:0 0 20px;color:#555;font-size:14px;line-height:1.6;">
                    I'd love to hop on a free 30-minute call to walk through your results and talk about what your site needs. No pressure — just an honest conversation.
                </p>
                <a href="https://calendly.com/jarod-peachey/30min" style="display:inline-block;background:#385dd8;color:#fff;text-decoration:none;padding:14px 28px;border-radius:8px;font-weight:700;font-size:15px;">
                    Book a Free Call →
                </a>
                <p style="margin:16px 0 0;color:#999;font-size:12px;">30 minutes. Free. No commitment.</p>
            </div>
        </div>

        <!-- Footer -->
        <div style="padding:20px 40px;border-top:1px solid #eee;text-align:center;">
            <p style="margin:0;color:#aaa;font-size:12px;">
                Jelly Development · <a href="https://jellydevelopment.com" style="color:#aaa;">jellydevelopment.com</a><br>
                You're receiving this because you requested a free audit at jellydevelopment.com.<br>
                <a href="mailto:jarod@jellydevelopment.com?subject=Unsubscribe" style="color:#aaa;">Unsubscribe</a>
            </p>
        </div>

    </div>
</body>
</html>`;

    await resend.emails.send({
        from: "Jarod at Jelly Development <jarod@jellydevelopment.com>",
        to: email,
        subject: `Your website audit results for ${url}`,
        html,
    });
}

// ── Lambda handler ────────────────────────────────────────────
exports.handler = async (event) => {
    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
    };

    if (event.httpMethod === "OPTIONS") {
        return { statusCode: 204, headers, body: "" };
    }

    if (event.httpMethod !== "POST") {
        return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
    }

    let url, name, email, siteType;
    try {
        ({ url, name, email, siteType } = JSON.parse(event.body));
        if (!url) throw new Error("Missing url");
        if (!/^https?:\/\//i.test(url)) url = "https://" + url;
    } catch {
        return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid request body" }) };
    }

    try {
        console.log(`[audit] Starting audit for: ${url}`);

        // Run PageSpeed and SEO scrape in parallel
        let psRaw, seo;
        try {
            [psRaw, seo] = await Promise.all([
                runPageSpeed(url),
                scrapeSEO(url),
            ]);
            console.log(`[audit] PageSpeed + SEO complete`);
        } catch (err) {
            console.error(`[audit] PageSpeed/SEO error:`, err.message);
            throw new Error(`Failed to fetch site data: ${err.message}`);
        }

        const pageSpeed = extractPageSpeedData(psRaw);

        // Claude call (runs after we have all data)
        let recommendations;
        try {
            recommendations = await getRecommendations(url, pageSpeed, seo, siteType);
            console.log(`[audit] Claude recommendations complete`);
        } catch (err) {
            console.error(`[audit] Claude error:`, err.message);
            throw new Error(`AI recommendations failed: ${err.message}`);
        }

        // Count distinct issues: failed audits + SEO problems
        const seoIssues = [
            !seo.title,
            seo.titleLength > 60 || seo.titleLength < 10,
            !seo.description,
            seo.descriptionLength > 160 || seo.descriptionLength < 50,
            !seo.h1,
            !seo.hasHttps,
            !seo.hasViewport,
            !seo.ogImage,
            seo.imgMissingAlt > 0,
        ].filter(Boolean).length;
        const issueCount = pageSpeed.failedAudits.length + seoIssues;

        const response = {
            performance:    pageSpeed.performance,
            seo:            pageSpeed.seo,
            mobile:         pageSpeed.mobile,
            issueCount,
            recommendations,
        };

        console.log(`[audit] Attempting to send email to: ${email}`);
        console.log(`[audit] RESEND_API_KEY present: ${!!process.env.RESEND_API_KEY}`);
        try {
            await sendResultsEmail({ name, email, url, ...response });
            console.log(`[audit] Email sent successfully to: ${email}`);
        } catch (err) {
            console.error("[audit] Email send failed:", err.message, err.stack);
        }

        return { statusCode: 200, headers, body: JSON.stringify(response) };

    } catch (err) {
        console.error("[audit] Fatal error:", err.message);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: err.message || "Audit failed. Please try again." }),
        };
    }
};
