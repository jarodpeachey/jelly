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

const Source = ({ n }) => (
    <sup>
        <a href={`#src-${n}`}>{n}</a>
    </sup>
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
                <h1>We build websites that make your business stand out - so you can focus on the real work.</h1>
                <p className="starter__lead">Get a fast, professional website designed to convert visitors into new customers for your business.</p>
                <p className="starter__lead">If you don't like it, we'll refund 100% of your money.</p>
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

                <section id="sound-familiar">
                    <p>We get it. Running a business is hard, and you just don't have the time to focus on maintaining a website.</p>
                    <p>It seems complicated, takes a lot of time, and just doesn't seem that important.</p>
                    <p>
                        <strong>Do any of these things sound familiar?</strong>
                    </p>
                    <ul>
                        <li>Your competitors are getting more business than you.</li>
                        <li>People can't find you on Google.</li>
                        <li>Your website is hard to use on your phone.</li>
                        <li>Your website looks outdated, and you're embarrassed to send people there.</li>
                        <li>You don't have time to manage your website.</li>
                    </ul>
                    <p>If any of these sound familiar, don't worry.</p>
                    <p>
                        Small business owners all over the Orlando area face the same problems - but a professional website can put you one step ahead of your
                        competitors.
                    </p>
                    <p>
                        <strong>But don't just take it from us</strong> - take a look at the numbers from studies done by companies like Google:
                    </p>
                    {/* </section> */}

                    {/* <section id="the-numbers"> */}
                    {/* <h3>Here's why a new website will improve your business:</h3> */}
                    <ul className="starter__stats">
                        <li>
                            <span className="starter__stat-number">98%</span> of consumers use the internet to find information about local businesses.
                            <Source n={1} />
                        </li>
                        <li>
                            <span className="starter__stat-number">75%</span> of people have skipped a purchase because a website looked outdated.
                            <Source n={3} />
                        </li>
                        <li>
                            <span className="starter__stat-number">50%</span> of people will <strong>leave</strong> your website if it takes longer than{" "}
                            <strong>3 seconds</strong> to load.
                            <Source n={4} />
                        </li>
                    </ul>
                    <p>3 seconds can be the difference between a new customer and a missed opportunity.</p>
                    <p>Don't let your website hold you back.</p>
                    <Cta>Get a better website for $500</Cta>
                </section>

                {/* <section id="what-it-does">
                    <h2>What makes a website "better"</h2>
                    <h3>1. It makes you look like the real deal</h3>
                    <p>
                        Clean design, real photos, your reviews and your services in one place. When someone is deciding between you and the other guy,
                        you look like the safer choice.
                    </p>
                    <h3>2. It gets found on Google</h3>
                    <p>Your site is set up so people searching for what you do in Orlando can find you, not just the big companies with big budgets.</p>
                    <h3>3. It turns a visit into a phone call</h3>
                    <p>
                        Built for phones first, with a tap-to-call button right where people look. Most of your customers will find you on their phone,
                        so that's where the site is designed to work best.
                    </p>
                </section> */}

                <section id="offer" className="starter__card">
                    <h2>Exactly what you get for $500</h2>
                    <p>You might think $500 can only get a crappy website that's thrown together in 5 minutes.</p>
                    <p>That's exactly what we want to prove wrong - here's everything you get for $500:</p>
                    <ul className="starter__checks">
                        <li>A custom-designed, one-page website that fits your business</li>
                        <li>Mobile-first design that loads fast</li>
                        <li>On-page SEO setup so people can find your business</li>
                        <li>Two rounds of revisions</li>
                        <li>Live within 14 days of getting your content</li>
                        <li>One month of free hosting included</li>
                    </ul>
                    <p>That's it. No hidden fees, no upsell on the call, and no long-term contract.</p>
                    <Cta>Book your free call</Cta>
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
                            <strong>Your website is live in 14 days.</strong> We build your website and launch it after you approve it. You get a brand new
                            website built to convert more people into customers.
                        </li>
                    </ol>
                </section>

                {/* <section id="who-for">
                    <h2>This is for you if…</h2>
                    <ul>
                        <li>
                            You run a local service business in the Orlando area (roofing, HVAC, plumbing, electrical, landscaping, cleaning, painting, and
                            more)
                        </li>
                        <li>Your website is slow, outdated, or hard to use on a phone, or you don't have one yet</li>
                        <li>You want more calls without paying an agency $5,000</li>
                        <li>You'd rather have someone handle it than learn it yourself</li>
                    </ul>
                </section> */}

                <section id="faq">
                    <h2>Frequently Asked Questions:</h2>
                    <h3>Is it really $500?</h3>
                    <p>Yes. A small business doesn't need a $5,000 agency project. You need one clean page that does its job, and that's what $500 gets you.</p>
                    <h3>I already have a website. Is this for me?</h3>
                    <p>Yes. Even if a website might look fine, it could load slowly, and there's always room for improvement.</p>
                    <h3>Do I have to be technical?</h3>
                    <p>No. All you need to bring us is your company logo and what you do - we'll turn it into a website that fits your business.</p>
                    <h3>What happens after the first month of hosting?</h3>
                    <p>
                        Hosting is $19.99/month after the free month. If you'd like monthly updates, analytics, and backups, there's an optional Monthly Care Plan. It can be cancelled at anytime, with no long-term contracts.
                    </p>
                    <h3>What if I don't like it?</h3>
                    <p>
                        If you don't love the preview, you get your deposit back. If you change your mind after launch, you have 14 days to ask for a full
                        refund, no questions asked.
                    </p>
                </section>

                <section id="final-cta" className="starter__card starter__final">
                    <h2>Your business needs a better website. Let's build it.</h2>
                    <Cta>Book a free 15-minute call</Cta>
                </section>

                <section id="sources" className="starter__sources">
                    <h2>Sources</h2>
                    <ol>
                        <li id="src-1">BrightLocal, Local Consumer Review Survey 2023 (1,117 U.S. consumers; figures refer to 2022).</li>
                        <li id="src-3">HostingAdvice, small business website survey (500 U.S. consumers, September 2024).</li>
                        <li id="src-4">Google (Think with Google): over half of mobile visits are abandoned if a page takes longer than 3 seconds to load.</li>
                    </ol>
                </section>
            </div>
        </main>

        <Footer />
    </>
);

export default Starter;
