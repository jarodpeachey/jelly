import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_contact.scss";
import Footer from "../components/Footer";

const GetStarted = () => {
  return (
    <>
      <SEO bodyClass="contact" />

      <header>
        <Navigation />
      </header>
      <div id="wrapper" className="wrapper">
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <p className="display">CONTACT US</p>
                <h1>Let’s get started on your new website</h1>
                <p>Send us a message and we'll schedule a time to go over your goals and requirements for your new site.</p>
              </div>
            </div>
          </div>
        </section>
        <main>
          <section className="cta">
            <img role="presentation" src="/media/img/backgrounds/circle.svg" alt="" />

            <img role="presentation" alt="" className="blob" src="/media/img/backgrounds/blob.svg" />
            <img role="presentation" alt="" className="blobs" src="/media/img/backgrounds/blobs.svg" />
            <div className="white">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2 max-560">
                    <div className="card">
                      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                                              <p class="hidden">
                        <label>
                          Don’t fill this out if you’re human: <input name="bot-field" />
                        </label>
                      </p>
                        <div className="row">
                          <div className="col-lg-12">
                            <label name="name">
                              Name <span>*</span>
                              <input required type="text" id="name" name="name" placeholder="Name" />
                            </label>
                          </div>
                          <div className="col-lg-12">
                            <label name="email">
                              Email <span>*</span>
                              <input required type="email" id="email" name="email" placeholder="Email" />
                            </label>
                          </div>
                          <div className="col-lg-12">
                            <label name="message">
                              Message? <span>*</span>
                              <textarea required id="message" name="message" placeholder="I need a new website or landing page" />
                            </label>
                          </div>
                          <div className="col-lg-12">
                            <input data-splitbee-event="Get Started Form" data-splitbee-event-page="/get-started" type="submit" value="Let's get started!" className="btn" />
                          </div>
                        </div>
                        <p className="subtext">
                          or email us at <a href="mailto:sales@jellydevelopment.com">sales@jellydevelopment.com</a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default GetStarted;
