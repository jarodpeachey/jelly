import React from "react";
import { Link } from "gatsby";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Success = () => {
  return (
    <>
      <SEO bodyClass="success-page secondary-page" title="Thank You | Jelly Development" />

      <header>
        <Navigation />
      </header>

      <div id="wrapper" className="wrapper">
        <section className="secondary-hero">
          <div className="container">
            <span className="pill">Message Sent</span>
            <h1>Thanks for reaching out!</h1>
            <p>We got your message and will get back to you within 24 hours.</p>
            <Link to="/" className="btn">Back to homepage</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Success;
