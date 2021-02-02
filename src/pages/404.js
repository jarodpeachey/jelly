import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_home.scss";

const Home = ({ props }) => {
  return (
    <>
      <SEO bodyClass="home" />

      <header>
        <Navigation noButton={true} />
      </header>

      <section className="hero">
        <div className="container">
          <div className="card">
            <h1 className="">This page doesn't exist.</h1>
            <p className="section-description">Well, it does, but it doesn't have anything cool on it.</p>
            <p className="section-description">You can go back to the homepage by clicking that button down there.</p>
            <a href="/" rel="noopener" className="btn">
              Back to home
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
