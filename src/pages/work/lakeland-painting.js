import React from "react";
import SEO from "../../components/SEO";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import "../../styles/partials/pages/_work.scss";

const JOTFORM_URL = "https://form.jotform.com/260614887108058";

const TECH = ["React", "HTML", "CSS", "Custom Hosting", "Analytics Dashboard"];

const LakelandPainting = () => (
    <>
        <SEO
            bodyClass="case-study"
            title="Lakeland Painting — Web Design Case Study | Jelly Development"
            description="How Jelly Development rebuilt Lakeland Painting's website — cut their monthly costs in half, improved mobile experience, and boosted local SEO."
        />
        <header>
            <Navigation />
        </header>
        <div id="wrapper" className="wrapper">
            {/* Hero */}
            <section className="case-hero">
                <div className="container">
                    <span className="pill">Case Study</span>
                    <h1>Lakeland Painting</h1>
                    <p className="case-hero__sub">
                        An outdated website, overpriced hosting, and zero mobile presence — we fixed all three and cut their monthly spend in half.
                    </p>
                    <div className="case-hero__meta">
                        <div className="case-hero__meta-item">
                            <span className="case-hero__meta-label">Industry</span>
                            <span className="case-hero__meta-value">Painting Contractor</span>
                        </div>
                        <div className="case-hero__meta-item">
                            <span className="case-hero__meta-label">Location</span>
                            <span className="case-hero__meta-value">Lakeland, FL</span>
                        </div>
                        <div className="case-hero__meta-item">
                            <span className="case-hero__meta-label">Live Site</span>
                            <span className="case-hero__meta-value">
                                <a href="https://lakelandpainting.com" target="_blank" rel="noopener noreferrer">
                                    lakelandpainting.com →
                                </a>
                            </span>
                        </div>
                        <div className="case-hero__meta-item">
                            <span className="case-hero__meta-label">Services</span>
                            <span className="case-hero__meta-value">Web Design, SEO, Hosting</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                {/* Preview image */}
                <div className="container">
                    <div className="case-preview">
                        <img src="/media/img/work/lakeland-painting/preview.png" alt="Lakeland Painting website" className="case-preview__img" />
                    </div>

                    {/* Problem */}
                    <div className="case-section">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h2>The Problem</h2>
                                <p>
                                    Lakeland Painting came to us with a website that hadn't been updated in years. It looked old, loaded slowly, and completely
                                    fell apart on mobile, which is a serious problem when most of their customers are searching from their phones.
                                </p>
                                <p>
                                    On top of that, they were paying far more than they should have been for hosting and maintenance through their previous
                                    provider. They were locked into an overpriced plan that wasn't delivering results, and their Google presence was nearly
                                    nonexistent.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Solution */}
                    <div className="case-section">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h2>What We Built</h2>
                                <p>
                                    We rebuilt their website from scratch using React, HTML and CSS. It's fast, clean, and designed mobile-first. Every page was
                                    structured for local SEO from the ground up, targeting painting-related searches in the Lakeland area.
                                </p>
                                <p>
                                    We moved them onto custom hosting with an analytics dashboard so they can see exactly how their site is performing,
                                    including traffic, top pages, and where leads are coming from.
                                </p>
                                <p>
                                    The result: a modern website that works on every device, a real analytics setup, and a monthly cost that's less than half of
                                    what they were paying before.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="case-section">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h2>Results</h2>
                                <div className="case-results">
                                    <div className="case-results__item">
                                        <div className="case-results__value">50%</div>
                                        <div className="case-results__label">Reduction in monthly costs</div>
                                    </div>
                                    <div className="case-results__item">
                                        <div className="case-results__value">100%</div>
                                        <div className="case-results__label">Mobile responsive</div>
                                    </div>
                                    <div className="case-results__item">
                                        <div className="case-results__value">↑ SEO</div>
                                        <div className="case-results__label">Improved local Google rankings</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tech stack */}
                    <div className="case-section">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h2>Technologies Used</h2>
                                <div className="case-tech">
                                    {TECH.map(t => (
                                        <span key={t} className="case-tech__tag">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Photos */}
                    <div className="case-section">
                        <div className="row">
                            <div className="col-12">
                                <h2>Screenshots</h2>
                                <div className="case-photos">
                                    <div className="case-photos__wrap">
                                        <img
                                            src="/media/img/work/lakeland-painting/screenshotone.png"
                                            alt="Lakeland Painting screenshot 1"
                                            className="case-photos__img"
                                        />
                                    </div>
                                    <div className="case-photos__wrap">
                                        <img
                                            src="/media/img/work/lakeland-painting/screenshottwo.png"
                                            alt="Lakeland Painting screenshot 2"
                                            className="case-photos__img"
                                        />
                                    </div>
                                    <div className="case-photos__wrap">
                                        <img
                                            src="/media/img/work/lakeland-painting/screenshotthree.png"
                                            alt="Lakeland Painting screenshot 3"
                                            className="case-photos__img"
                                        />
                                    </div>
                                    <div className="case-photos__wrap">
                                        <img
                                            src="/media/img/work/lakeland-painting/screenshotfour.png"
                                            alt="Lakeland Painting screenshot 4"
                                            className="case-photos__img"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="case-cta">
                        <span className="pill">Work With Us</span>
                        <h2>Want Results Like This?</h2>
                        <p>We build fast, modern websites for small businesses across Central Florida. Let's talk about what your site needs.</p>
                        <a href={JOTFORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn--white">
                            Book a Free Strategy Call →
                        </a>
                    </div>
                </div>
            </section>
        </div>
        <Footer />
    </>
);

export default LakelandPainting;
