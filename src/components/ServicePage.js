import React from "react";
import SEO from "./SEO";
import Navigation from "./Navigation";
import FinalCta from "./FinalCta";
import Footer from "./Footer";
import "../styles/partials/pages/_service-page.scss";

const SITE_URL = "https://jellydevelopment.com";

// Short service page: secondary page header, 2-3 paragraphs, then the homepage's final CTA.
const ServicePage = ({ pill, title, intro, metaTitle, metaDescription, serviceType, children }) => (
    <>
        <SEO
            bodyClass="service-page secondary-page"
            title={metaTitle}
            description={metaDescription}
            schema={{
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType,
                provider: { "@id": `${SITE_URL}/#business` },
                areaServed: { "@type": "City", name: "Orlando, FL" },
            }}
        />

        <header>
            <Navigation />
        </header>

        <div id="wrapper" className="wrapper">
            <section className="secondary-hero">
                <div className="container">
                    <span className="pill">{pill}</span>
                    <h1>{title}</h1>
                    <p>{intro}</p>
                </div>
            </section>

            <div className="container service-page__body">{children}</div>

            <FinalCta />
        </div>
        <Footer />
    </>
);

export default ServicePage;
