import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_default.scss";
import Footer from "../components/Footer";

const NotFound = ({ props }) => {
  return (
    <>
      <SEO bodyClass="default" />

      <header>
        <Navigation noButton={true} />
      </header>

      <section className="hero">
        <div className="container">
          <div className="card">
            <h1 className="">This page doesn't exist.</h1>
            <p className="section-description">Well, it does, but it doesn't have anything cool on it.</p>
            <a href="/" className="btn">Go back to our homepage</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
