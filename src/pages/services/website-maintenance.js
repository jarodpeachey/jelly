import React from "react";
import ServicePage from "../../components/ServicePage";

const MaintenancePage = () => (
    <ServicePage
        pill="Website Maintenance"
        title="Website Maintenance in Orlando"
        intro="Keep your site fast, secure, and up to date without lifting a finger."
        metaTitle="Website Maintenance in Orlando | Jelly Development"
        metaDescription="Monthly website care for Orlando small businesses: hosting, security, backups, updates, analytics, and content edits for $59.99/month. Cancel anytime."
        serviceType="Website maintenance"
    >
        <p>
            Our Monthly Care Plan is $59.99/month and covers everything your site needs after launch: hosting, SSL, security monitoring,
            weekly backups, plugin and software updates, Google Analytics reporting, and up to 5 hours of content edits each month.
        </p>
        <p>It's month-to-month, so there's no long-term contract. Cancel anytime.</p>
        <p>
            Don't need the full plan? Hosting on its own is $9.99/month after your free hosting period, and edits outside the Care Plan are
            billed at $30/hour.
        </p>
    </ServicePage>
);

export default MaintenancePage;
