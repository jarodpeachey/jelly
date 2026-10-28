import "../styles/partials/_footer.scss";
import React from "react";
import { Link } from "gatsby";

// TODO: replace PHONE and MAILING_ADDRESS with real values before deploying
export const PHONE = "717-682-2910";
export const EMAIL = "jarod@jellydevelopment.com";

// Footer link columns. Internal links help Google find and connect every page.
const LINKS = [
    {
        heading: "Services",
        items: [
            { label: "Orlando SEO", to: "/services/orlando-seo/" },
            { label: "Mobile-First Web Design", to: "/services/mobile-first-web-design/" },
            { label: "Website Maintenance", to: "/services/website-maintenance/" },
            { label: "Landing Page Design", to: "/services/landing-page-design/" },
        ],
    },
    {
        heading: "Service Areas",
        items: [
            { label: "Orlando", to: "/" },
            { label: "Altamonte Springs", to: "/altamonte-springs/" },
            { label: "Apopka", to: "/apopka/" },
            { label: "Clermont", to: "/clermont/" },
            { label: "Deltona", to: "/deltona/" },
            { label: "Kissimmee", to: "/kissimmee/" },
            { label: "Lake Mary", to: "/lake-mary/" },
            { label: "Oviedo", to: "/oviedo/" },
            { label: "Sanford", to: "/sanford/" },
            { label: "Winter Garden", to: "/winter-garden/" },
            { label: "Winter Park", to: "/winter-park/" },
        ],
    },
    {
        heading: "Company",
        items: [
            { label: "Our Work", to: "/work/" },
            { label: "Pricing", to: "/#pricing" },
            { label: "Blog", to: "/blog/" },
            { label: "Free Website Audit", to: "/free-audit/" },
            { label: "Contact", to: "/contact/" },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__links">
                {LINKS.map((col) => (
                    <div key={col.heading} className="footer__col">
                        <h2 className="footer__heading">{col.heading}</h2>
                        <ul>
                            {col.items.map((item) => (
                                <li key={item.to}>
                                    <Link to={item.to}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="container">
                <img width="83" height="36" src="/media/img/Logo White.svg" alt="Jelly Development logo" />
                <address className="footer__contact">
                    <a href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}>{PHONE}</a>
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </address>
                <p>© 2026 Jelly Development LLC</p>
            </div>
        </footer>
    );
};

export default Footer;
