import React from "react";
import ServicePage from "../../components/ServicePage";

const SeoPage = () => (
    <ServicePage
        pill="SEO"
        title="Orlando SEO for Small Businesses"
        intro="Get found on Google by the people already searching for what you do."
        metaTitle="Orlando SEO Services for Small Businesses | Jelly Development"
        metaDescription="SEO built into every website we make. On-page setup, local SEO, and keyword research to help Orlando small businesses get found on Google."
        serviceType="Search engine optimization"
    >
        <p>
            Every website we build comes with on-page SEO setup: page titles, meta descriptions, headings, and fast, clean code that Google
            can read. It's the foundation that tells Google what you do and where you do it.
        </p>
        <p>
            Want to go further? Our Growth package adds advanced local SEO to help you show up in Orlando-area searches, and Premium adds
            keyword and competitor research so we know exactly which searches to target and who you're up against.
        </p>
        <p>
            We won't promise you the #1 spot. Rankings depend on your market and your competition. What we will do is give your site the best
            possible foundation to compete.
        </p>
    </ServicePage>
);

export default SeoPage;
