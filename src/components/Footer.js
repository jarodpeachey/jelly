import "../styles/partials/_footer.scss";
import React from "react";

// TODO: replace PHONE and MAILING_ADDRESS with real values before deploying
export const PHONE = "717-682-2910";
export const EMAIL = "jarod@jellydevelopment.com";

const Footer = () => {
    return (
        <footer className="footer">
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
