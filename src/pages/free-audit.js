import React, { useState } from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/partials/pages/_free-audit.scss";

// ─────────────────────────────────────────────────────────────
// STEP CONSTANTS
// ─────────────────────────────────────────────────────────────
const STEP_URL       = 1;
const STEP_SITE_TYPE = 2;
const STEP_INFO      = 3;
const STEP_LOADING   = 4;
const STEP_RESULTS   = 5;

// ─────────────────────────────────────────────────────────────
// SITE TYPE OPTIONS
// ─────────────────────────────────────────────────────────────
const SITE_TYPES = [
    {
        id: "local",
        icon: "📍",
        label: "Local Business",
        desc: "Attract customers in my area",
    },
    {
        id: "ecommerce",
        icon: "🛒",
        label: "Online Store",
        desc: "Sell products or services online",
    },
    {
        id: "portfolio",
        icon: "🎨",
        label: "Portfolio / Freelancer",
        desc: "Showcase my work and get hired",
    },
    {
        id: "startup",
        icon: "🚀",
        label: "Startup / SaaS",
        desc: "Grow my product or brand",
    },
];

// ─────────────────────────────────────────────────────────────
// SCORE RING — circular progress indicator
// ─────────────────────────────────────────────────────────────
const ScoreRing = ({ score, label, color }) => {
    const radius = 44;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;

    return (
        <div className="score-ring">
            <svg viewBox="0 0 100 100" width="100" height="100">
                <circle
                    cx="50" cy="50" r={radius}
                    fill="none" stroke="#e8eeff" strokeWidth="8"
                />
                <circle
                    cx="50" cy="50" r={radius}
                    fill="none" stroke={color} strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                />
                <text x="50" y="57" textAnchor="middle" fontSize="26" fontWeight="800" fill="#191a1c">
                    {score}
                </text>
            </svg>
            <p className="score-ring__label">{label}</p>
        </div>
    );
};

// ─────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────
const FreeAudit = () => {
    const [step, setStep]           = useState(STEP_URL);
    const [url, setUrl]             = useState("");
    const [siteType, setSiteType]   = useState(null);
    const [name, setName]           = useState("");
    const [email, setEmail]         = useState("");
    const [results, setResults]     = useState(null);
    const [error, setError]         = useState(null);

    // ── Step 1 → 2 ──────────────────────────────────────────
    const handleUrlSubmit = (e) => {
        e.preventDefault();
        const trimmed = url.trim();
        if (!trimmed) return;
        if (!/^https?:\/\//i.test(trimmed)) setUrl("https://" + trimmed);
        setStep(STEP_SITE_TYPE);
    };

    // ── Step 2 → 3 ──────────────────────────────────────────
    const handleSiteTypeSelect = (typeId) => {
        setSiteType(typeId);
        setStep(STEP_INFO);
    };

    // ── Step 3 → 4 → 5 ──────────────────────────────────────
    const handleInfoSubmit = async (e) => {
        e.preventDefault();
        setStep(STEP_LOADING);
        setError(null);

        // Submit lead to Netlify forms (fire-and-forget)
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                "form-name": "free-audit",
                name,
                email,
                url,
                siteType,
            }).toString(),
        }).catch(() => {});

        try {
            // ─────────────────────────────────────────────────────────────
            // AI CONNECTIVITY POINT
            // POST /.netlify/functions/audit
            // Body: { url, name, email, siteType }
            // Response: { performance, seo, mobile, coreWebVitals, recommendations }
            // ─────────────────────────────────────────────────────────────
            const apiBase = process.env.NODE_ENV === "development"
                ? "http://localhost:9999"
                : "";
            const res = await fetch(`${apiBase}/.netlify/functions/audit`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url, name, email, siteType }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || `Server error: ${res.status}`);

            setResults(data);
            setStep(STEP_RESULTS);
        } catch (err) {
            setError(err.message || "Something went wrong running your audit. Please try again.");
            setStep(STEP_INFO);
        }
    };

    const restart = () => {
        setStep(STEP_URL);
        setUrl("");
        setSiteType(null);
        setName("");
        setEmail("");
        setResults(null);
        setError(null);
    };

    // Lighthouse exact colors
    const scoreColor = (n) => {
        if (n >= 90) return "#0cce6b";
        if (n >= 50) return "#ffa400";
        return "#ff4e42";
    };

    const contactUrl = `https://form.jotform.com/260614887108058` +
        `?name=${encodeURIComponent(name)}` +
        `&email=${encodeURIComponent(email)}` +
        `&websiteUrl=${encodeURIComponent(url)}`;

    return (
        <>
            <SEO bodyClass="free-audit" />
            <header>
                <Navigation />
            </header>

            {/* Hidden form so Netlify detects it at build time */}
            <form name="free-audit" data-netlify="true" hidden>
                <input name="name" />
                <input name="email" />
                <input name="url" />
                <input name="siteType" />
            </form>

            <div id="wrapper" className="wrapper">

                {/* ── STEP 1 — URL ───────────────────────────────────── */}
                {step === STEP_URL && (
                    <section className="audit-hero">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <p className="display">FREE WEBSITE AUDIT</p>
                                    <h1>See how your website really performs</h1>
                                    <p className="audit-hero__sub">
                                        Get a free instant report on your site's speed, SEO health, and
                                        mobile experience — with AI-powered tips to improve it.
                                    </p>
                                    <form className="audit-form" onSubmit={handleUrlSubmit}>
                                        <div className="audit-form__url-row">
                                            <input
                                                type="text"
                                                placeholder="yourwebsite.com"
                                                value={url}
                                                onChange={(e) => setUrl(e.target.value)}
                                                required
                                                aria-label="Your website URL"
                                            />
                                            <button type="submit" className="btn">
                                                Analyze My Site
                                            </button>
                                        </div>
                                        <p className="audit-form__note">
                                            Free, instant, no credit card required.
                                        </p>
                                    </form>

                                    <div className="audit-trust">
                                        <div className="audit-trust__item">
                                            <span className="audit-trust__icon">⚡</span>
                                            Performance Score
                                        </div>
                                        <div className="audit-trust__item">
                                            <span className="audit-trust__icon">🔍</span>
                                            SEO Health Check
                                        </div>
                                        <div className="audit-trust__item">
                                            <span className="audit-trust__icon">📱</span>
                                            Mobile Readiness
                                        </div>
                                        <div className="audit-trust__item">
                                            <span className="audit-trust__icon">💡</span>
                                            AI Recommendations
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* ── STEP 2 — Site Type ─────────────────────────────── */}
                {step === STEP_SITE_TYPE && (
                    <section className="audit-hero audit-hero--type">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <button className="audit-back" onClick={() => setStep(STEP_URL)}>
                                        ← Back
                                    </button>
                                    <p className="audit-card__url">{url}</p>
                                    <h2>What kind of website is it?</h2>
                                    <p className="audit-hero__sub">
                                        This helps us tailor your recommendations to what actually matters for your goals.
                                    </p>
                                    <div className="audit-type-grid">
                                        {SITE_TYPES.map((type) => (
                                            <button
                                                key={type.id}
                                                className="audit-type-card"
                                                onClick={() => handleSiteTypeSelect(type.id)}
                                            >
                                                <span className="audit-type-card__icon">{type.icon}</span>
                                                <span className="audit-type-card__label">{type.label}</span>
                                                <span className="audit-type-card__desc">{type.desc}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* ── STEP 3 — Name + Email ──────────────────────────── */}
                {step === STEP_INFO && (
                    <section className="audit-hero audit-hero--info">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 offset-lg-3">
                                    <button className="audit-back" onClick={() => setStep(STEP_SITE_TYPE)}>
                                        ← Back
                                    </button>
                                    <div className="audit-card">
                                        <p className="audit-card__url">{url}</p>
                                        <h2>Almost there — where should we send your results?</h2>
                                        <p>We'll email you a full copy of your personalized report.</p>

                                        {error && <p className="audit-error">{error}</p>}

                                        <form onSubmit={handleInfoSubmit}>
                                            <label htmlFor="audit-name">
                                                Your name
                                                <input
                                                    id="audit-name"
                                                    type="text"
                                                    placeholder="Jane Smith"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    required
                                                />
                                            </label>
                                            <label htmlFor="audit-email">
                                                Email address
                                                <input
                                                    id="audit-email"
                                                    type="email"
                                                    placeholder="jane@example.com"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </label>
                                            <button type="submit" className="btn btn--full">
                                                Run My Free Audit
                                            </button>
                                            <p className="audit-form__note">
                                                No spam. We respect your privacy.
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* ── STEP 4 — Loading ───────────────────────────────── */}
                {step === STEP_LOADING && (
                    <section className="audit-hero audit-hero--loading">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 audit-loading">
                                    <div className="audit-spinner" aria-hidden="true" />
                                    <h2>Analyzing your website…</h2>
                                    <p>Running performance tests, checking SEO, and generating your personalized report. This takes about 15 seconds.</p>
                                    <div className="audit-loading__steps">
                                        <div className="audit-loading__step audit-loading__step--done">Fetching page data</div>
                                        <div className="audit-loading__step audit-loading__step--active">Running Lighthouse audit</div>
                                        <div className="audit-loading__step">Checking SEO signals</div>
                                        <div className="audit-loading__step">Generating AI recommendations</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* ── STEP 5 — Results ───────────────────────────────── */}
                {step === STEP_RESULTS && results && (
                    <section className="audit-results">
                        <div className="audit-results__header">
                            <div className="container">
                                <p className="pill pill-dark">Your Results</p>
                                <h1>Website Audit Report</h1>
                                <p className="audit-results__url">{url}</p>
                            </div>
                        </div>

                        <div className="container">

                            {/* Scores + issue count */}
                            <div className="audit-scores-row">
                                <div className="audit-scores">
                                    <ScoreRing score={results.performance} label="Performance" color={scoreColor(results.performance)} />
                                    <ScoreRing score={results.seo}         label="SEO"         color={scoreColor(results.seo)} />
                                    <ScoreRing score={results.mobile}      label="Mobile"      color={scoreColor(results.mobile)} />
                                </div>
                                <div className="audit-issue-count">
                                    <span className="audit-issue-count__num">{results.issueCount}</span>
                                    <span className="audit-issue-count__label">issues found</span>
                                </div>
                            </div>

                            {/* AI Recommendations */}
                            {/* ─────────────────────────────────────────────────────
                                AI CONNECTIVITY POINT
                                `results.recommendations` is [{fix, explanation}] from Claude,
                                tailored to the user's siteType and actual audit data.
                                ───────────────────────────────────────────────────── */}
                            <div className="audit-recs">
                                <h3>Top Recommendations</h3>
                                <p className="audit-recs__sub">
                                    Personalized fixes based on your site type and audit results, prioritized by impact.
                                </p>
                                <ol className="audit-recs__list">
                                    {results.recommendations.map((rec, i) => (
                                        <li key={i} className="audit-recs__item">
                                            <span className="audit-recs__num">{i + 1}</span>
                                            <div className="audit-recs__content">
                                                <p className="audit-recs__fix">{rec.fix}</p>
                                                {rec.explanation && (
                                                    <p className="audit-recs__explanation">{rec.explanation}</p>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* CTA */}
                            <div className="audit-cta">
                                <p className="pill pill-dark">Want these fixed?</p>
                                <h2>We build websites that actually perform.</h2>
                                <p>
                                    Jelly Development specializes in fast, SEO-optimized websites built to convert.
                                    Schedule a free call and we'll walk through exactly what your site needs.
                                </p>
                                <div className="audit-cta__buttons">
                                    <a href={contactUrl} className="btn" target="_blank" rel="noopener noreferrer">
                                        Get a Free Quote →
                                    </a>
                                </div>
                                <p className="audit-cta__note">
                                    No commitment. Just an honest conversation about your website.
                                </p>
                            </div>

                        </div>
                    </section>
                )}

            </div>

            <Footer />
        </>
    );
};

export default FreeAudit;
