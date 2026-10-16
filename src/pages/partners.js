import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import Footer, { PHONE, EMAIL } from "../components/Footer";
import "../styles/partials/pages/_partners.scss";

// Referral commission. Change the rate here and the payouts below update with it.
const RATE = 0.15;
const PACKAGES = [
    { name: "Starter", price: 500 },
    { name: "Growth", price: 1400 },
    { name: "Premium", price: 3000 },
];

const money = (n) => `$${n.toLocaleString("en-US")}`;

const Partners = () => (
    <>
        <SEO
            bodyClass="partners-page secondary-page"
            title="Partner Program | Jelly Development"
            description={`Refer small businesses to Jelly Development and earn ${RATE * 100}% of every website project you send our way.`}
        />

        <header>
            <Navigation />
        </header>

        <div id="wrapper" className="wrapper">
            <section className="secondary-hero">
                <div className="container">
                    <span className="pill">Partner Program</span>
                    <h1>Send us a client. Get paid.</h1>
                    <p>Earn {RATE * 100}% of every website project you refer to Jelly Development.</p>
                </div>
            </section>

            <div className="container partners">
                <h2>How it works</h2>
                <p>
                    You know small business owners who need a better website. We build them one. When a business you refer signs on and pays for
                    their website, you get {RATE * 100}% of the build fee. That's it.
                </p>

                <h2>What you earn</h2>
                <p>Your commission is based on the package your referral picks:</p>
                <ul>
                    {PACKAGES.map((p) => (
                        <li key={p.name}>
                            <strong>{p.name}</strong> ({money(p.price)} website): you earn <strong>{money(p.price * RATE)}</strong>
                        </li>
                    ))}
                </ul>
                <p>There's no limit. Refer five businesses, get paid five times.</p>

                <h2>When you get paid</h2>
                <p>
                    You get paid once your referral's website is live and paid in full, and their 14-day refund window has closed. That way you're
                    only ever paid on finished projects, and you never have to give anything back.
                </p>

                <h2>How to refer someone</h2>
                <p>
                    Introduce us by email or text, or have them mention your name when they reach out. As long as we know you sent them, the
                    referral is yours.
                </p>

                <h2>The fine print</h2>
                <ul>
                    <li>Commission is paid on the one-time website build fee only, not on hosting or the Monthly Care Plan.</li>
                    <li>The business has to be new to Jelly Development. Existing clients don't count.</li>
                    <li>It's free to join. No sign-up forms, no quotas, no contracts.</li>
                </ul>

                <h2>Let's talk</h2>
                <p>Have someone in mind, or just want to ask a question? Give me a call or send me an email.</p>
                <address className="partners__contact">
                    <span>
                        Phone: <a href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}>{PHONE}</a>
                    </span>
                    <span>
                        Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    </span>
                </address>
            </div>
        </div>
        <Footer />
    </>
);

export default Partners;
