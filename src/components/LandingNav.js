import React from "react";
import { Link } from "gatsby";
import "../styles/partials/_landing-nav.scss";

// Minimal nav for ad landing pages: centered logo linking home, no menu items.
const LandingNav = () => (
    <nav aria-label="Jelly Development" className="landing-nav">
        <Link to="/" aria-label="Jelly Development home">
            <img src="/media/img/Logo White.svg" alt="Jelly Development" width="83" height="36" />
        </Link>
    </nav>
);

export default LandingNav;
