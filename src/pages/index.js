import React, { useState, useEffect, useRef } from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_home.scss";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Carousel from "../components/Carousel";
import { PopupProvider, usePopup } from "../context/PopupContext";

const JOTFORM_URL = "https://form.jotform.com/260614887108058";

const PROCESS_STEPS = [
    { step: "01", title: "Free Strategy Call", desc: "We learn about your business, goals, and local market — no pressure, no commitment." },
    { step: "02", title: "Design & Build", desc: "We craft a custom website optimized for conversions and local SEO, with your input throughout." },
    { step: "03", title: "Launch in 14 Days", desc: "Your site goes live and starts attracting leads. We support you every step of the way." },
];

const FAQS = [
    { q: "How long does it take to build my website?", a: "Your website will be live within 2-4 weeks of receiving your content and design approval." },
    { q: "Do I need to sign a long-term contract?", a: "Never. All packages are one-time fees, split 50/50 at the start and end of the project. The optional care plan is month-to-month — cancel anytime." },
    { q: "What if I already have a website?", a: "We'll audit it for free. If it needs a full rebuild, we'll handle it. If parts are salvageable, we'll tell you." },
    { q: "Do you handle hosting?", a: "Yes. Starter includes 1 month of free hosting, Growth includes 3 months, and Premium includes 6 months. After that, hosting is $19.99/mo — or included at no extra cost if you're on our monthly care plan." },
    { q: "Do you provide the domain name?", a: "No — you'll need to purchase and own your own domain. We'll guide you through the process if needed, but keeping the domain in your name ensures you always have full ownership of your online presence." },
    { q: "Will my site rank on Google?", a: "Every site we build includes on-page SEO setup. Rankings depend on your market and competition, but we give you the best possible foundation." },
];

const AREAS = [
    "Orlando", "Kissimmee", "Sanford", "Altamonte Springs", "Winter Park",
    "Lake Mary", "Oviedo", "Clermont", "Apopka", "Deltona",
];

const HomeContent = () => {
    const { popupShown, setPopupShown } = usePopup();
    const [showPopup, setShowPopup] = useState(false);
    const pricingRef = useRef(null);

    useEffect(() => {
        if (popupShown) return;

        const trigger = () => {
            setShowPopup(true);
            setPopupShown();
        };

        const isMobile = window.matchMedia("(max-width: 991px)").matches;

        if (isMobile) {
            if (!pricingRef.current) return;
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) { trigger(); observer.disconnect(); } },
                { threshold: 0.25 }
            );
            observer.observe(pricingRef.current);
            return () => observer.disconnect();
        } else {
            const handleMouseLeave = (e) => { if (e.clientY <= 0) trigger(); };
            document.addEventListener("mouseleave", handleMouseLeave);
            return () => document.removeEventListener("mouseleave", handleMouseLeave);
        }
    }, [popupShown, setPopupShown]);

    return (
        <>
            <SEO bodyClass="home" />

            <header>
                <Navigation />
            </header>
            <div id="wrapper" className="wrapper">
                <section className="hero">
                    <div className="hero__blob hero__blob--tr"></div>
                    <div className="hero__blob hero__blob--bl"></div>
                    <div className="hero__grid-lines"></div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-6 hero__left">
                                <span className="pill pill-dark">Orlando Web Design</span>
                                <h1>
                                    Websites That Bring More Customers to <span>Orlando Small Businesses</span>
                                </h1>
                                <p className="section-description hero__paragraph">
                                    Fast, mobile-optimized websites built to rank on Google and convert visitors into real leads — no tech jargon, no fluff.
                                </p>
                                <div className="hero__cta-row">
                                    <a className="btn" href="/contact" target="_blank" rel="noopener noreferrer">
                                        Get a Free Website Audit
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 d-none d-lg-flex align-items-center hero__right">
                                <div className="hero__visual">
                                    <div className="hero__proof-card hero__proof-card--business">
                                        <div className="hero__proof-card__header">
                                            <div className="hero__proof-card__g">G</div>
                                            <div>
                                                <div className="hero__proof-card__biz-name">Jelly Development</div>
                                                <div className="hero__proof-card__category">Web Design Agency · Orlando, FL</div>
                                            </div>
                                        </div>
                                        <div className="hero__proof-card__rating">
                                            <span className="hero__proof-card__stars">★★★★★</span>
                                            <span className="hero__proof-card__score">5.0</span>
                                            <span className="hero__proof-card__count">(1 review)</span>
                                        </div>
                                        <div className="hero__proof-card__maps-badge">
                                            📍 Listed on Google Maps
                                        </div>
                                    </div>
                                    <div className="hero__proof-card hero__proof-card--review">
                                        <div className="hero__proof-card__review-top">
                                            <div className="hero__proof-card__g">G</div>
                                            <span className="hero__proof-card__stars">★★★★★</span>
                                        </div>
                                        <p className="hero__proof-card__quote">"I had hired Jelly Development to create a landing page for a new product of mine, I gave them minimal requirements and they knocked it out of the ballpark with needing minimal changes. Definitely recommend and will be using them more often."</p>
                                        <div className="hero__proof-card__reviewer">
                                            <div className="hero__proof-card__avatar">J</div>
                                            <div>
                                                <div className="hero__proof-card__reviewer-name">Josh M.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="hero__strip">
                        <span className="hero__strip__item"><span className="hero__strip__dot"></span>Custom Design</span>
                        <span className="hero__strip__item"><span className="hero__strip__dot"></span>SEO Included</span>
                        <span className="hero__strip__item"><span className="hero__strip__dot"></span>Mobile-First</span>
                        <span className="hero__strip__item"><span className="hero__strip__dot"></span>Fast Delivery</span>
                        <span className="hero__strip__item"><span className="hero__strip__dot"></span>Orlando, FL</span>
                    </div> */}
                </section>
                <div className="industries-ticker">
                    <div className="industries-ticker__track">
                        {[
                            "Plumbers", "Electricians", "Personal Trainers", "Landscapers", "Photographers",
                            "Painters", "Roofers", "HVAC Technicians", "Dentists", "Chiropractors",
                            "Attorneys", "Real Estate Agents", "General Contractors", "Pool Services",
                            "Pest Control", "Auto Repair Shops", "House Cleaners", "Dog Groomers",
                            "Wedding Planners", "Pressure Washers", "Yoga Studios", "Accountants",
                            "Therapists", "Flooring Companies", "Fence Installers",
                        ].flatMap((industry, i) => [
                            <span key={industry} className="industries-ticker__item">{industry}</span>,
                            <span key={`sep-${i}`} className="industries-ticker__sep" aria-hidden="true">·</span>,
                        ]).concat(
                            [
                                "Plumbers", "Electricians", "Personal Trainers", "Landscapers", "Photographers",
                                "Painters", "Roofers", "HVAC Technicians", "Dentists", "Chiropractors",
                                "Attorneys", "Real Estate Agents", "General Contractors", "Pool Services",
                                "Pest Control", "Auto Repair Shops", "House Cleaners", "Dog Groomers",
                                "Wedding Planners", "Pressure Washers", "Yoga Studios", "Accountants",
                                "Therapists", "Flooring Companies", "Fence Installers",
                            ].flatMap((industry, i) => [
                                <span key={`b-${industry}`} className="industries-ticker__item">{industry}</span>,
                                <span key={`b-sep-${i}`} className="industries-ticker__sep" aria-hidden="true">·</span>,
                            ])
                        )}
                    </div>
                </div>
                <img role="presentation" src="/media/img/backgrounds/wave.svg" alt="" className="hero-wave" />
                <main>
                    <section className="pain-points-dark">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <span className="pill pill-dark">Sound Familiar?</span>
                                    <h2>Is your website costing you customers?</h2>
                                    <p className="section-description">Most Orlando small business websites have the same problems. Here's the honest truth:</p>
                                </div>
                            </div>
                            <div className="row">
                                {[
                                    { icon: "💀", text: "Your website looks like it was built in 2009" },
                                    { icon: "👻", text: "You don't show up anywhere on Google" },
                                    { icon: "🐢", text: "It loads so slowly visitors leave before seeing anything" },
                                    { icon: "📵", text: "It looks broken on mobile — where 70% of your customers are" },
                                    { icon: "🔇", text: "You're not getting calls, leads, or new customers from it" },
                                    { icon: "💸", text: "You paid for a website that isn't actually working for you" },
                                ].map(({ icon, text }) => (
                                    <div key={text} className="col-12 col-sm-6 col-lg-4">
                                        <div className="pain-card card--sm">
                                            <span className="pain-card__icon" aria-hidden="true">{icon}</span>
                                            <p className="pain-card__text">{text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    {/* <section className="themes">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 max-560">
                                    <p className="display">OUR WORK</p>
                                    <h2 style={{ textAlign: "center" }}>Featured Website Designs</h2>
                                </div>
                            </div>
                            <Carousel
                                slides={[
                                    {
                                        name: "Chime Social",
                                        image: "/media/img/chime-work.webp",
                                        link: "https://chime-staging.netlify.app",
                                    },
                                    {
                                        name: "Contenda",
                                        image: "/media/img/contenda-work.webp",
                                        link: "https://contenda-staging.netlify.app/",
                                    },
                                    {
                                        name: "Glitter",
                                        image: "/media/img/glitter-work.webp",
                                        link: "https://get-glitter.netlify.app",
                                    },
                                    {
                                        name: "Launch Outreach",
                                        image: "/media/img/launch-work.webp",
                                        link: "https://launchoutreach.netlify.app",
                                    },
                                    {
                                        name: "Dad's Den Media",
                                        image: "/media/img/media-work.webp",
                                        link: "https://dadsdenmedia.com/",
                                    },
                                    {
                                        name: "Chime Social",
                                        image: "/media/img/chime-work.webp",
                                        link: "https://chime-staging.netlify.app",
                                    },
                                    {
                                        name: "Contenda",
                                        image: "/media/img/contenda-work.webp",
                                        link: "https://contenda-staging.netlify.app/",
                                    },
                                    {
                                        name: "Glitter",
                                        image: "/media/img/glitter-work.webp",
                                        link: "https://get-glitter.netlify.app",
                                    },
                                    {
                                        name: "Launch Outreach",
                                        image: "/media/img/launch-work.webp",
                                        link: "https://launchoutreach.netlify.app",
                                    },
                                    {
                                        name: "Dad's Den Media",
                                        image: "/media/img/media-work.webp",
                                        link: "https://dadsdenmedia.com/",
                                    },
                                    {
                                        name: "Chime Social",
                                        image: "/media/img/chime-work.webp",
                                        link: "https://chime-staging.netlify.app",
                                    },
                                    {
                                        name: "Contenda",
                                        image: "/media/img/contenda-work.webp",
                                        link: "https://contenda-staging.netlify.app/",
                                    },
                                    {
                                        name: "Glitter",
                                        image: "/media/img/glitter-work.webp",
                                        link: "https://get-glitter.netlify.app",
                                    },
                                ]}
                            />
                        </div>
                    </section> */}
                    {/* <section className="pain-points">
                        <div className="container">
                            <p className="display" style={{ textAlign: "left" }}>
                                WHY JELLY DEVELOPMENT
                            </p>
                            <h2>Your Website Is Losing You Customers</h2>
                            <p className="section-description">
                                <em>Or Maybe You Don't Have One Yet</em>
                            </p>

                            <ul className="pain-points-list">
                                <li>
                                    <img width="50" height="50" src="/media/img/icons/icon--x.svg" alt="x icon" />{" "}
                                    <span>
                                        Slow or <span style={{ fontWeight: "900", whiteSpace: "nowrap" }}>broken websites</span> turn potential customers away
                                    </span>
                                </li>
                                <li>
                                    <img width="50" height="50" src="/media/img/icons/icon--x.svg" alt="x icon" />{" "}
                                    <span>
                                        <span style={{ fontWeight: "900", whiteSpace: "nowrap" }}>80%</span> of people Google your business before calling
                                    </span>
                                </li>
                                <li>
                                    <img width="50" height="50" src="/media/img/icons/icon--x.svg" alt="x icon" />{" "}
                                    <span>
                                        You're <span style={{ fontWeight: "900", whiteSpace: "nowrap" }}>invisible</span> in the digital age without a modern
                                        website
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section> */}
                    <section className="services" id="services">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <span className="pill">The Solution</span>
                                    <h2>We Build Websites That Turn<br /> <span className="color-primary">Traffic Into Customers</span></h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-md-4">
                                    <div className="feature card">
                                        <div className="feature__icon feature__icon--red"><img width="62" height="48" src="/media/img/icons/icon--target.svg" alt="Target icon" /></div>
                                        <h3>Built To Convert</h3>
                                        <p>Every page is designed with one goal — turning visitors into calls, bookings and real customers.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <div className="feature card">
                                        <div className="feature__icon feature__icon--blue"><img width="56" height="53" src="/media/img/icons/icon--seo.svg" alt="Magnifying glass icon" /></div>
                                        <h3>Local SEO Optimized</h3>
                                        <p>Structured from day one to rank in Orlando Google searches so customers find you first.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <div className="feature card">
                                        <div className="feature__icon feature__icon--amber"><img width="56" height="53" src="/media/img/icons/icon--bolt.svg" alt="Lightning bolt icon" /></div>
                                        <h3>Fast &amp; Mobile-First</h3>
                                        <p>Lightning fast on every device. Most of your customers are on their phones.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <section className="results">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <span className="pill">Results</span>
                                    <h2>Real Results for Real Businesses</h2>
                                </div>
                            </div>
                            <div className="row results__stats">
                                {[
                                    { metric: "14 Days", label: "Average Launch Time", icon: "🚀" },
                                    { metric: "3x", label: "Average Lead Increase", icon: "📈" },
                                    { metric: "100%", label: "Mobile Optimized", icon: "📱" },
                                ].map((s, i) => (
                                    <div key={i} className="col-sm-4">
                                        <div className="stat-card card">
                                            <div className="stat-card__icon">{s.icon}</div>
                                            <div className="stat-card__metric">{s.metric}</div>
                                            <div className="stat-card__label">{s.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="proof-quote card">
                                        <div className="proof-quote__icon">💬</div>
                                        <div className="proof-quote__body">
                                            <p className="proof-quote__text">
                                                "We went from zero calls from our website to getting 3–5 leads a week within the first month. Jelly Development completely transformed our online presence."
                                            </p>
                                            <div className="proof-quote__author">
                                                <div className="proof-quote__avatar">MR</div>
                                                <div>
                                                    <div className="proof-quote__name">Marcus R.</div>
                                                    <div className="proof-quote__role">Orlando HVAC Business Owner</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    {/* PROCESS */}
                    <section className="process" id="process">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <span className="pill pill-dark">How It Works</span>
                                    <h2>Simple 3-Step Process</h2>
                                </div>
                            </div>
                            <div className="row">
                                {PROCESS_STEPS.map((p, i) => (
                                    <div key={i} className="col-md-4">
                                        <div className="process-card card">
                                            <div className="process-card__step">{p.step}</div>
                                            <h3>{p.title}</h3>
                                            <p>{p.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* PRICING */}
                    <section className="pricing" id="pricing" ref={pricingRef}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <span className="pill">Transparent Pricing</span>
                                    <h2>Simple, Honest Packages</h2>
                                    <p className="pricing__subtitle">No hidden fees. No long-term contracts. Pick the package that fits where your business is today.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="pricing__note">
                                        💡 All packages include a free strategy call
                                    </div>
                                </div>
                            </div>
                            <div className="row pricing__cards">
                                <div className="col-lg-4">
                                    <div className="pricing-card card">
                                        <span className="pricing-card__tier">Starter</span>
                                        <div className="pricing-card__price">$1,200</div>
                                        <p className="pricing-card__billing">One-time project fee</p>
                                        <p className="pricing-card__desc">Perfect for new businesses that need a fast, professional online presence without the bloat.</p>
                                        <ul className="pricing-card__features">
                                            {[
                                                "1-page website",
                                                "On-page SEO setup",
                                                "Performance optimization",
                                                "Mobile-first design",
                                                "2 revision rounds",
                                                "14-day delivery guarantee",
                                                "1 month free hosting & support",
                                            ].map((item, i) => (
                                                <li key={i}><span className="pricing-card__check">✓</span>{item}</li>
                                            ))}
                                        </ul>
                                        <a href={JOTFORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--full">Get Started →</a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="pricing-card pricing-card--featured card card--dark">
                                        <div className="pricing-card__badge">⭐ Best Value</div>
                                        <span className="pricing-card__tier">Growth</span>
                                        <div className="pricing-card__price">$2,800</div>
                                        <p className="pricing-card__billing">One-time project fee</p>
                                        <p className="pricing-card__desc">For established businesses ready to compete seriously in Orlando search results and convert more visitors into paying customers.</p>
                                        <ul className="pricing-card__features">
                                            {[
                                                "Everything in Starter",
                                                "Up to 5 pages",
                                                "Advanced local SEO",
                                                "Custom logo design",
                                                "3 revision rounds",
                                                "Priority 14-day delivery",
                                                "3 months free hosting & support",
                                            ].map((item, i) => (
                                                <li key={i}><span className="pricing-card__check">✓</span>{item}</li>
                                            ))}
                                        </ul>
                                        <a href={JOTFORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn--full">Get Started →</a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="pricing-card card">
                                        <span className="pricing-card__tier">Premium</span>
                                        <div className="pricing-card__price">$4,500</div>
                                        <p className="pricing-card__billing">One-time project fee</p>
                                        <p className="pricing-card__desc">The full-service buildout for businesses serious about dominating their local market and building a brand that lasts.</p>
                                        <ul className="pricing-card__features">
                                            {[
                                                "Everything in Growth",
                                                "Up to 10 pages",
                                                "Keyword + competitor research SEO",
                                                "Full brand identity",
                                                "Competitor & market research",
                                                "Unlimited revisions",
                                                "6 months free hosting & support",
                                            ].map((item, i) => (
                                                <li key={i}><span className="pricing-card__check">✓</span>{item}</li>
                                            ))}
                                        </ul>
                                        <a href={JOTFORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--full">Get Started →</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="pricing-addon">
                                        <div className="pricing-addon__info">
                                            <div className="pricing-addon__label pill">Add-On</div>
                                            <h3>Monthly Care Plan — $199/mo</h3>
                                            <p>Keep your site fast, secure, and ranking. Includes hosting, SSL, security monitoring, weekly backups, plugin/software updates, Google Analytics reporting, and up to 2 hours of content edits per month.</p>
                                        </div>
                                        <div className="pricing-addon__cta">
                                            <a href={JOTFORM_URL} target="_blank" rel="noopener noreferrer" className="btn">Add to My Package →</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <p className="pricing__hosting-note">* Hosting is $19.99/mo after the free period — or included at no extra cost with our Monthly Care Plan.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="faq" id="faq">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <span className="pill pill-dark">FAQ</span>
                                    <h2>Common Questions</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="faq__list">
                                        {FAQS.map((faq, i) => (
                                            <details key={i} className="faq-item card card--sm">
                                                <summary className="faq-item__question">{faq.q}</summary>
                                                <p className="faq-item__answer">{faq.a}</p>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* LOCAL */}
                    <section className="local" id="contact">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <span className="pill">📍 Local &amp; Proud</span>
                                    <h2>Proudly Serving Central Florida</h2>
                                    {/* <p className="local__description">We're embedded in the Orlando business community — we know the local market and know how to help you win it.</p> */}
                                    <div className="local__areas">
                                        {AREAS.map((area, i) => (
                                            <span key={i} className="area-tag">📍 {area}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FINAL CTA */}
                    <section className="final-cta">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h2>Ready to Get More Customers From Your Website?</h2>
                                    <p className="final-cta__subtitle">Join Orlando businesses that are finally getting real results online. Your free audit is waiting.</p>
                                    <a href={JOTFORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn--white">
                                        Book Your Free Website Strategy Call →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <Footer />

            {showPopup && (
                <div className="exit-popup" onClick={() => setShowPopup(false)}>
                    <div className="exit-popup__card" onClick={e => e.stopPropagation()}>
                        <button className="exit-popup__close" onClick={() => setShowPopup(false)}>×</button>
                        <span className="pill exit-popup__pill">Wait — Before You Go!</span>
                        <h2>Free Website Audit — No Strings Attached</h2>
                        <p className="exit-popup__desc">We'll review your current website and show you exactly what's holding you back from more leads. No pressure, no commitment.</p>
                        <div className="exit-popup__grid">
                            {["Free Homepage Mockup", "14-Day Launch Guarantee", "No Long-Term Contracts", "Local SEO Roadmap Included"].map((item, i) => (
                                <div key={i} className="exit-popup__item">
                                    <span className="exit-popup__check">✓</span>
                                    <span className="exit-popup__item-text">{item}</span>
                                </div>
                            ))}
                        </div>
                        <a href={JOTFORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn--white">Claim My Free Website Audit</a>
                    </div>
                </div>
            )}
        </>
    );
};

const Home = () => (
    <PopupProvider>
        <HomeContent />
    </PopupProvider>
);

export default Home;
