import React from "react";
import ServicePage from "../../components/ServicePage";

const MobileFirstPage = () => (
    <ServicePage
        pill="Mobile-First Design"
        title="Mobile-First Web Design in Orlando"
        intro="Websites built for the phone first, because that's where most of your customers find you."
        metaTitle="Mobile-First Web Design in Orlando | Jelly Development"
        metaDescription="Websites designed for phones first, then scaled up. Fast, easy to use, and built to turn mobile visitors into calls for Orlando small businesses."
        serviceType="Mobile-first web design"
    >
        <p>
            Most people looking for a local business are doing it on their phone. So we design for the small screen first, then scale up to
            tablets and desktops, instead of squeezing a desktop site down after the fact.
        </p>
        <p>
            That means big, easy-to-tap buttons, text you can read without zooming, a phone number customers can tap to call, and pages that
            load fast on a cellular connection.
        </p>
        <p>Mobile-first design is included in every package, starting with the $500 Starter.</p>
    </ServicePage>
);

export default MobileFirstPage;
