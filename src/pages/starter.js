import React from "react";
import { Helmet } from "react-helmet";
import SEO from "../components/SEO";
import LandingNav from "../components/LandingNav";
import Footer from "../components/Footer";
import "../styles/partials/pages/_starter.scss";

// Ad landing page for the $500 Starter. Every CTA uses this link.
const CALENDLY_URL = "https://calendly.com/jarod-peachey/30min";

// Drop a square photo at static/media/img/jarod.jpg and set this to "/media/img/jarod.jpg".
// Until then a "J" placeholder shows.
const HEADSHOT = null;

const Cta = ({ children }) => (
    <p>
        <a className="btn mx-auto" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    </p>
);

const Starter = () => (
    <>
        <SEO
            bodyClass="starter-page"
            title="A Better Website for $500 | Jelly Development"
            description="Your business needs a better website. Jelly Development will build you one for $500. Love the design or get your money back."
        />

        <Helmet>
            <link rel="preload" href="/media/fonts/mont/mont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
            <link rel="preload" href="/media/fonts/nunito-sans/nunitosans-regular-webfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        </Helmet>

        <header>
            <LandingNav />
        </header>

        <main className="starter">
            <section id="hero" className="starter__hero">
                <h1>A professional website shouldn't cost thousands of dollars.</h1>
                <p className="starter__lead">At Jelly Development, we build high-quality websites designed to convert visitors into new customers for your business.</p>
                <p className="starter__lead">The best part? Only $500.</p>
                <Cta>Book a free 15-minute call</Cta>
            </section>

            <div className="starter__content">
                {/* <section id="meet-jarod" className="starter__card starter__intro">
                    <div className="starter__photo">
                        {HEADSHOT ? <img src={HEADSHOT} alt="Jarod, founder of Jelly Development" /> : <span aria-hidden="true">J</span>}
                    </div>
                    <div>
                        <p>
                            Hi, I'm Jarod. I run Jelly Development here in Orlando, and I'll be the one personally building your website, from the first call
                            all the way through to launch.
                        </p>
                    </div>
                </section> */}

                <section id="agency-pains">
                    <h2>Are you looking for a website, but keep getting quoted $1,000s of dollars from an agency?</h2>
                    <p>You're not alone. Here's what we hear from small business owners all the time:</p>
                    <ul className="starter__pains">
                        <li>They quoted you $1,000s of dollars for a few pages.</li>
                        <li>The project took months, and they kept ghosting you for updates.</li>
                        <li>They charged hidden fees for every change you requested.</li>
                        <li>You got locked into a long contract with monthly fees you didn't fully understand.</li>
                        <li>You paid for a website you didn't even like, and had no way out.</li>
                    </ul>
                    <p>
                        <strong>That's why we build our websites for just $500.</strong> One flat price, no long-term contracts, and a full refund if you're not happy with our work.
                    </p>
                </section>

                <section id="offer" className="starter__card">
                    <h2>Exactly what you get for $500</h2>
                    <p>No vague packages or surprise add-ons. Here's the whole list:</p>
                    <ul className="starter__checks starter__checks--detailed">
                        <li>
                            <strong>A custom website with up to 3 pages</strong>
                            <span>Designed around your business, your services, and your customers. Not a generic template with your logo dropped in.</span>
                        </li>
                        <li>
                            <strong>Mobile-first design that loads fast</strong>
                            <span>Most of your customers will find you on their phone, so that's where it's built to look and work best.</span>
                        </li>
                        <li>
                            <strong>On-page SEO setup</strong>
                            <span>Your website is set up so customers can find you on Google.</span>
                        </li>
                        <li>
                            <strong>Two rounds of revisions</strong>
                            <span>You review the design and tell us what to change.</span>
                        </li>
                        <li>
                            <strong>Live within 14 days</strong>
                            <span>From the day we get your content to the day your site is live.</span>
                        </li>
                        <li>
                            <strong>One month of free hosting</strong>
                            <span>After that, hosting is $9.99/month, with no long-term contracts.</span>
                        </li>
                    </ul>
                    <Cta>Book your free call</Cta>
                </section>

                <section id="compare">
                    <h2>How it compares</h2>
                    <div className="starter__compare-wrap">
                        <table className="starter__compare">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Typical agency</th>
                                    <th scope="col">Jelly Development</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Price</th>
                                    <td>Thousands, often with add-ons</td>
                                    <td>$500 flat</td>
                                </tr>
                                <tr>
                                    <th scope="row">Timeline</th>
                                    <td>Weeks or months</td>
                                    <td>Live in 14 days</td>
                                </tr>
                                <tr>
                                    <th scope="row">Changes</th>
                                    <td>Billed by the hour</td>
                                    <td>Two rounds of revisions included</td>
                                </tr>
                                <tr>
                                    <th scope="row">Contract</th>
                                    <td>Often 12 months or more</td>
                                    <td>None</td>
                                </tr>
                                <tr>
                                    <th scope="row">Ongoing cost</th>
                                    <td>Bundled monthly fees</td>
                                    <td>$9.99/month hosting after the free month</td>
                                </tr>
                                <tr>
                                    <th scope="row">Don't like it?</th>
                                    <td>You already paid</td>
                                    <td>Get your deposit back</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* <section id="guarantee">
                    <h2>The risk is on me, not you</h2>
                    <p>
                        <strong>Love your site or get a full refund. No hoops.</strong>
                    </p>
                    <ul>
                        <li>
                            <strong>Pay half up front, half at launch.</strong> You never pay the full price for something you haven't seen.
                        </li>
                        <li>
                            <strong>Don't love the design preview?</strong> You get your deposit back.
                        </li>
                        <li>
                            <strong>Changed your mind after launch?</strong> You have 14 days to ask for a full refund.
                        </li>
                    </ul>
                </section> */}

                <section id="how-it-works">
                    <h2>How it works</h2>
                    <ol>
                        <li>
                            <strong>Book a free call.</strong> We talk for 15 minutes about your business and what you need, and figure out if this is a good
                            fit for your company.
                        </li>
                        <li>
                            <strong>We design your website.</strong> You send us the basics (logo, photos, what you do). We send you a full-page design preview
                            for you to review and request changes.
                        </li>
                        <li>
                            <strong>Your website is live in 14 days.</strong> We build your website and launch it after you approve it.
                        </li>
                    </ol>
                </section>

                <section id="faq">
                    <h2>Frequently Asked Questions</h2>
                    <h3>Is it really $500?</h3>
                    <p>Yes. One flat price for everything listed above. The only other cost is hosting at $9.99/month after your free month.</p>
                    <h3>Why is it so much cheaper than an agency?</h3>
                    <p>
                        Because you're getting exactly what a small business needs: a clean, fast website that does its job. No layers of account
                        managers, no padded hours, no long contract to pay for.
                    </p>
                    <h3>What if I need more than three pages?</h3>
                    <p>We can do that too. Our Growth package covers up to 5 pages for $1,400. We'll talk through what makes sense on the call.</p>
                    <h3>Do I have to be technical?</h3>
                    <p>No. Send us your logo, a few photos, and what you do. We handle the design, the build, and the launch.</p>
                    <h3>What happens after the first month of hosting?</h3>
                    <p>
                        Hosting is $9.99/month. If you'd like monthly updates, analytics, and backups, there's an optional Monthly Care Plan. It can be
                        cancelled anytime, with no long-term contract.
                    </p>
                    <h3>What if I don't like it?</h3>
                    <p>
                        If you don't love the preview, you get your deposit back. If you change your mind after launch, you have 14 days to ask for a full
                        refund.
                    </p>
                </section>

                <section id="final-cta" className="starter__card starter__final">
                    <h2>A professional website for $500. Live in 14 days.</h2>
                    <p>Book a free 15-minute call and we'll tell you exactly what your site will include.</p>
                    <Cta>Book a free 15-minute call</Cta>
                </section>
            </div>
        </main>

        <Footer />
    </>
);

export default Starter;
