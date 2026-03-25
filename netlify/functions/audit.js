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

// ── Claude recommendations ────────────────────────────────────
async function getRecommendations(url, pageSpeed, seo) {
    const prompt = `You are a professional web performance and SEO consultant. Analyze this website audit data and return exactly 5 prioritized, actionable recommendations. Be specific, practical, and avoid generic advice. Do not use markdown — plain sentences only. Number each recommendation on its own line like: 1. Your recommendation here

Website: ${url}

PERFORMANCE SCORES:
- Performance: ${pageSpeed.performance}/100
- SEO: ${pageSpeed.seo}/100
- Mobile/Accessibility: ${pageSpeed.mobile}/100

CORE WEB VITALS:
- LCP (Largest Contentful Paint): ${pageSpeed.coreWebVitals.lcp}
- CLS (Cumulative Layout Shift): ${pageSpeed.coreWebVitals.cls}
- TBT (Total Blocking Time): ${pageSpeed.coreWebVitals.fid}

TOP PERFORMANCE ISSUES:
${pageSpeed.failedAudits.join("\n") || "None detected"}

PERFORMANCE OPPORTUNITIES:
${pageSpeed.opportunities.join("\n") || "None detected"}

SEO DATA:
- Title tag: "${seo.title ?? "Missing"}" (${seo.titleLength} chars — ideal is 50–60)
- Meta description: "${seo.description ?? "Missing"}" (${seo.descriptionLength} chars — ideal is 120–160)
- H1 tag: "${seo.h1 ?? "Missing"}"
- Canonical URL: ${seo.canonical ?? "Not set"}
- Open Graph image: ${seo.ogImage ? "Present" : "Missing"}
- HTTPS: ${seo.hasHttps ? "Yes" : "NO — critical issue"}
- Viewport meta tag: ${seo.hasViewport ? "Present" : "Missing"}
- Images without alt text: ${seo.imgMissingAlt} of ${seo.imgTotal} total images
- Robots meta: ${seo.robots ?? "Not set"}

Return only the 5 numbered recommendations, nothing else.`;

    const message = await anthropic.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 600,
        messages: [{ role: "user", content: prompt }],
    });

    const text = message.content[0].text;

    // Parse numbered list into array
    const recs = text
        .split(/\n/)
        .map(line => line.replace(/^\d+\.\s*/, "").trim())
        .filter(line => line.length > 20);

    return recs.slice(0, 5);
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

    let url, name, email;
    try {
        ({ url, name, email } = JSON.parse(event.body));
        if (!url) throw new Error("Missing url");
        // Ensure URL has a protocol
        if (!/^https?:\/\//i.test(url)) url = "https://" + url;
    } catch {
        return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid request body" }) };
    }

    try {
        // Run PageSpeed and SEO scrape in parallel
        const [psRaw, seo] = await Promise.all([
            runPageSpeed(url),
            scrapeSEO(url),
        ]);

        const pageSpeed = extractPageSpeedData(psRaw);

        // Claude call (runs after we have all data)
        const recommendations = await getRecommendations(url, pageSpeed, seo);

        const response = {
            performance:    pageSpeed.performance,
            seo:            pageSpeed.seo,
            mobile:         pageSpeed.mobile,
            coreWebVitals:  pageSpeed.coreWebVitals,
            recommendations,
        };

        return { statusCode: 200, headers, body: JSON.stringify(response) };

    } catch (err) {
        console.error("Audit error:", err);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: "Audit failed. Please try again." }),
        };
    }
};
