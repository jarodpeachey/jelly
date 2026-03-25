import React, { useState } from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/partials/pages/_free-audit.scss";

// ─────────────────────────────────────────────────────────────
// STEP CONSTANTS
// ─────────────────────────────────────────────────────────────
const STEP_URL     = 1;
const STEP_INFO    = 2;
const STEP_LOADING = 3;
const STEP_RESULTS = 4;

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
                <text x="50" y="54" textAnchor="middle" fontSize="20" fontWeight="700" fill="#191a1c">
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
    const [step, setStep]       = useState(STEP_URL);
    const [url, setUrl]         = useState("");
    const [name, setName]       = useState("");
    const [email, setEmail]     = useState("");
    const [results, setResults] = useState(null);
    const [error, setError]     = useState(null);

    // ── Step 1 → 2 ──────────────────────────────────────────
    const handleUrlSubmit = (e) => {
        e.preventDefault();
        const trimmed = url.trim();
        if (!trimmed) return;
        // Normalize: add https:// if no protocol present
        if (!/^https?:\/\//i.test(trimmed)) {
            setUrl("https://" + trimmed);
        }
        setStep(STEP_INFO);
    };

    // ── Step 2 → 3 → 4 ──────────────────────────────────────
    const handleInfoSubmit = async (e) => {
        e.preventDefault();
        setStep(STEP_LOADING);
        setError(null);

        try {
            // ─────────────────────────────────────────────────────────────
            // AI CONNECTIVITY POINT
            // This fetch call hits the serverless function that:
            //   1. Calls Google PageSpeed Insights API with `url`
            //   2. Fetches + scrapes basic SEO data from `url`
            //   3. Sends all data to Claude API and gets recommendations
            //   4. Returns a structured JSON payload (see shape below)
            //
            // Endpoint to build: POST /.netlify/functions/audit
            // Request body:  { url, name, email }
            // Response shape:
            // {
            //   performance: number (0–100),
            //   seo: number (0–100),
            //   mobile: number (0–100),
            //   coreWebVitals: {
            //     lcp: string,   // e.g. "2.4s"
            //     cls: string,   // e.g. "0.08"
            //     fid: string,   // e.g. "45ms"
            //   },
            //   recommendations: string[]  // 4–6 plain-English tips from Claude
            // }
            // ─────────────────────────────────────────────────────────────
            const res = await fetch("/.netlify/functions/audit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url, name, email }),
            });

            if (!res.ok) throw new Error(`Server error: ${res.status}`);

            const data = await res.json();
            setResults(data);
            setStep(STEP_RESULTS);
        } catch (err) {
            setError("Something went wrong running your audit. Please try again.");
            setStep(STEP_INFO);
        }
    };

    const restart = () => {
        setStep(STEP_URL);
        setUrl("");
        setName("");
        setEmail("");
        setResults(null);
        setError(null);
    };

    // ── Score color helper ───────────────────────────────────
    const scoreColor = (n) => {
        if (n >= 80) return "#22c55e";
        if (n >= 50) return "#f59e0b";
        return "#ef4444";
    };

    return (
        <>
            <SEO bodyClass="free-audit" />
            <header>
                <Navigation />
            </header>

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

                {/* ── STEP 2 — Name + Email ──────────────────────────── */}
                {step === STEP_INFO && (
                    <section className="audit-hero audit-hero--info">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 offset-lg-3">
                                    <button className="audit-back" onClick={() => setStep(STEP_URL)}>
                                        ← Back
                                    </button>
                                    <div className="audit-card">
                                        <p className="audit-card__url">{url}</p>
                                        <h2>Where should we send your results?</h2>
                                        <p>We'll also email you a full copy of your report.</p>

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

                {/* ── STEP 3 — Loading ───────────────────────────────── */}
                {step === STEP_LOADING && (
                    <section className="audit-hero audit-hero--loading">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 audit-loading">
                                    <div className="audit-spinner" aria-hidden="true" />
                                    <h2>Analyzing your website…</h2>
                                    <p>Running performance tests, checking SEO, and generating your AI report. This takes about 15 seconds.</p>
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

                {/* ── STEP 4 — Results ───────────────────────────────── */}
                {step === STEP_RESULTS && results && (
                    <section className="audit-results">
                        <div className="audit-results__header">
                            <div className="container">
                                <p className="display">YOUR RESULTS</p>
                                <h1>Website Audit Report</h1>
                                <p className="audit-results__url">{url}</p>
                            </div>
                        </div>

                        <div className="container">

                            {/* Scores */}
                            <div className="audit-scores">
                                <ScoreRing score={results.performance} label="Performance" color={scoreColor(results.performance)} />
                                <ScoreRing score={results.seo}         label="SEO"         color={scoreColor(results.seo)} />
                                <ScoreRing score={results.mobile}      label="Mobile"      color={scoreColor(results.mobile)} />
                            </div>

                            {/* Core Web Vitals */}
                            <div className="audit-vitals">
                                <h3>Core Web Vitals</h3>
                                <div className="audit-vitals__grid">
                                    <div className="audit-vitals__item">
                                        <span className="audit-vitals__val">{results.coreWebVitals.lcp}</span>
                                        <span className="audit-vitals__key">Largest Contentful Paint</span>
                                    </div>
                                    <div className="audit-vitals__item">
                                        <span className="audit-vitals__val">{results.coreWebVitals.cls}</span>
                                        <span className="audit-vitals__key">Cumulative Layout Shift</span>
                                    </div>
                                    <div className="audit-vitals__item">
                                        <span className="audit-vitals__val">{results.coreWebVitals.fid}</span>
                                        <span className="audit-vitals__key">First Input Delay</span>
                                    </div>
                                </div>
                            </div>

                            {/* AI Recommendations */}
                            {/* ─────────────────────────────────────────────────────
                                AI CONNECTIVITY POINT
                                `results.recommendations` is an array of plain-English
                                strings returned by Claude. Each item is one prioritized
                                fix generated by the serverless function.
                                ───────────────────────────────────────────────────── */}
                            <div className="audit-recs">
                                <h3>Top Recommendations</h3>
                                <p className="audit-recs__sub">
                                    AI-powered suggestions based on your audit results, prioritized by impact.
                                </p>
                                <ol className="audit-recs__list">
                                    {results.recommendations.map((rec, i) => (
                                        <li key={i} className="audit-recs__item">
                                            <span className="audit-recs__num">{i + 1}</span>
                                            <p>{rec}</p>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* CTA */}
                            <div className="audit-cta">
                                <h2>Ready to fix these issues?</h2>
                                <p>Jelly Development builds fast, SEO-friendly websites that convert. Let's talk.</p>
                                <div className="audit-cta__buttons">
                                    <a href="/contact" className="btn">Get a Free Quote</a>
                                    <button className="btn btn--outline" onClick={restart}>
                                        Audit Another Site
                                    </button>
                                </div>
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
