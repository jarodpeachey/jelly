import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_home.scss";

const Home = ({ props }) => {
  return (
    <>
      <SEO bodyClass="home" />

      <header>
        <Navigation />
      </header>

      <section className="hero two">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
              <h1 className="">Custom websites that are tailored to your business.</h1>
              <p className="section-description">
                Stand out from your competition with a modern website that's blazing fast, SEO-friendly and looks great on all screen sizes.
              </p>
              <a href="" className="btn">
                Get your website
              </a>
              <a href="" className="btn outlined">
                View projects
              </a>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section className="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                <p className="display">SERVICES</p>
                <h2>Quality from top to bottom</h2>
                <p className="section-description">Our websites are crafted from top to bottom so that every aspect works for you and your business.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-xl-4 p-4">
                <div className="service">
                  <img src="/media/img/icons/icon--book.svg" alt="" />
                  <h3>Market Research</h3>
                  <p>
                    Your website needs to be tailored to your customers. That's why we research your market and competitors to design and build a website that
                    your customers will love.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4 p-4">
                <div className="service">
                  <img src="/media/img/icons/icon--search.svg" alt="" />
                  <h3>SEO Integration</h3>
                  <p>
                    A website isn't much help if people can't find it. After market research, we make sure to optimize your website for Google search results,
                    so your customers will come to you.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4 p-4">
                <div className="service">
                  <img src="/media/img/icons/icon--rocket.svg" alt="" />
                  <h3>Blazing Fast</h3>
                  <p>
                    A fast website not only helps your search rankings, it also increases your conversion rate. We make sure your website loads in the blink of
                    an eye, so you can turn your visitors into customers.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4 p-4">
                <div className="service">
                  <img src="/media/img/icons/icon--users.svg" alt="" />
                  <h3>Fully Accessible</h3>
                  <p>Not all of your customers are the same. We make sure that your website is usable by those with visual or other impairments.</p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4 p-4">
                <div className="service">
                  <img src="/media/img/icons/icon--database.svg" alt="" />
                  <h3>Modern Hosting</h3>
                  <p>
                    Hosting your website will never be easier. We set up and manage monthly hosting for you, so you don't have to worry about downtime or
                    issues.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4 p-4">
                <div className="service">
                  <img src="/media/img/icons/icon--headset.svg" alt="" />
                  <h3>Ongoing Support</h3>
                  <p>
                    We know that your website is going to run into some issues, and you'll want updates in the future. We offer ongoing maintenance for your
                    website, so you never have to struggle to fix something.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
