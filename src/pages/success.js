import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_default.scss";
import Footer from "../components/Footer";

const Thanks = ({ props }) => {
  return (
    <>
      <SEO bodyClass="default" />

      <header>
        <Navigation noButton={true} />
      </header>

      <section className="hero">
        <div className="container">
          <div className="card">
            <h1 className="">Thanks for contacting us!</h1>
            <p className="section-description">We'll get back to you within 24 hours.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Thanks;
