const Anthropic = require("@anthropic-ai/sdk");

// ─────────────────────────────────────────────────────────────
// ENV VARS NEEDED (set in Netlify dashboard → Site settings → Environment variables):
//   ANTHROPIC_API_KEY   — your Claude API key
//   PAGESPEED_API_KEY   — Google PageSpeed Insights API key (free at console.cloud.google.com)
// ─────────────────────────────────────────────────────────────

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

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
- "explanation": 2-3 sentences in plain language explaining what this means for their business — more customers, better Google ranking, more sales, etc. No technical terms.

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
