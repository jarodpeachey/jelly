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
            <h1 className="">There was an error submitting your form. Please send an email to <a href="mailto:jarod@jellydevelopment.com">jarod@jellydevelopment.com</a> and we'll get back to you as soon as possible.</h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Thanks;
