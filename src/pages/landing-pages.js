import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_home.scss";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <SEO
        bodyClass="home"
        title="High-Converting SaaS Landing Pages | Jelly Development"
        description="Get the perfect landing page for your SaaS, designed to be blazing fast, fully accessible and to increase your conversions and MRR."
      />

      <header>
        <Navigation />
      </header>
      <div id="wrapper" className="wrapper">
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-6">
                <h1>High-converting landing pages engineered to grow your SaaS</h1>
                <p className="section-description">We build landing pages that are tailored to your brand and designed to get you more customers.</p>
                {/* <p className="section-description">We combine design, branding, SEO and copywriting to craft the perfect website for you and your customers.</p> */}

                <a href="/get-started" className="btn">
                  Let’s build your landing page
                </a>
                <a href="#services" className="btn text">
                  Read more{" "}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="#1C2C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 5L19 12L12 19" stroke="#1C2C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
                <div className="proof">
                  <div className="stars">
                    <img src="/media/img/icons/icon--rating.svg" alt="" />
                    <img src="/media/img/icons/icon--rating.svg" alt="" />
                    <img src="/media/img/icons/icon--rating.svg" alt="" />
                    <img src="/media/img/icons/icon--rating.svg" alt="" />
                    <img src="/media/img/icons/icon--rating.svg" alt="" />
                  </div>
                  <p>Jelly Development knocked it out of the park.</p>
                  <p>- Josh Manders | <strong>CEO of Primcloud</strong></p>
                </div>
              </div>
              <div className="col-lg-4 col-xl-6">
                <img width="724" height="717" className="graphic" src="/media/img/hero-2.png" alt="Landing page preview" />
              </div>
            </div>
          </div>
          <img role="presentation" src="/media/img/backgrounds/wave.svg" alt="" className="wave" />
        </section>
        <main>
          <section className="services" id="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 max-560">
                  <p className="display">WHAT WE DO</p>
                  <h2>Let us do the hard stuff.</h2>
                  <p className="section-description">
                    We’ll build you an amazing landing page, so you can focus on what matters: keeping your users happy and increasing your MRR.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="feature">
                    <img width="83" height="64" src="/media/img/icons/icon--target.svg" alt="Target icon" />
                    <h3>Get more potential customers to your site</h3>
                    <p>Finding potential customers is a pain, and SEO isn't easy either.</p>
                    <p>We'll optimize your landing page so more people can find you, and convert them into new customers.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="feature">
                    <img width="74" height="70" src="/media/img/icons/icon--bolt.svg" alt="Thundercloud icon" />
                    <h3>Keep your visitors on your site longer</h3>
                    <p>46% of visitors don't come back if your landing page doesn't load fast.</p>
                    <p>We'll build your landing page to load in the blink of an eye, so you don't lose potential business.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="feature">
                    <img width="86" height="65" src="/media/img/icons/icon--badge.svg" alt="Badge icon" />
                    <h3>Showcase your brand to your visitors effortlessly</h3>
                    <p>Letting your visitors know what you're about is tough.</p>
                    <p>We'll make sure your landing page effectively communicates your brand - and looks great while doing it.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="chat">
            <img role="presentation" alt="" className="blob" src="/media/img/backgrounds/blob.svg" />
            <img role="presentation" alt="" className="blobs" src="/media/img/backgrounds/blobs.svg" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 max-560">
                  <h2>Ready to chat about your new landing page?</h2>
                  <div className="d-flex">
                    <a href="/get-started" className="btn mr-4">
                      I’m ready for a new landing page
                    </a>
                    <a href="/contact" className="btn text">
                      I've got questions{" "}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="#1C2C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 5L19 12L12 19" stroke="#1C2C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="testimonials">
            <div className="container">
              <div className="col-lg-8 offset-lg-2 max-560">
                <p className="display">WHAT PEOPLE SAY</p>
                <h2 className="section-heading">Don’t settle for anything less than incredible.</h2>
                <p className="section-description">
                  At Jelly Development, we’re proud to say we go all in to bring the best landing pages we can to our clients.
                </p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="testimonial">
                    <p>
                      I had hired Jelly Development to create a landing page for a new product of mine, I gave them minimal requirements and they knocked it out
                      of the ballpark with needing minimal changes. Definitely recommend and will be using them more often.
                    </p>
                    <p>- Josh Manders | CEO of Primcloud</p>
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <div className="testimonial">
                    <p>Working with Jelly Development was awesome. Here's something about how amazing they were. Truly awesome!</p>
                    <p>- Jarod Peachey | CEO of Jelly Development</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial">
                    <p>Working with Jelly Development was awesome. Here's something about how amazing they were. Truly awesome!</p>
                    <p>- Jarod Peachey | CEO of Jelly Development</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial">
                    <p>Working with Jelly Development was awesome. Here's something about how amazing they were. Truly awesome!</p>
                    <p>- Jarod Peachey | CEO of Jelly Development</p>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
          <section className="cta">
            <img role="presentation" src="/media/img/backgrounds/wave--dark.svg" alt="" className="wave" />
            <img role="presentation" alt="" className="blob" src="/media/img/backgrounds/blob--dark.svg" />
            <img role="presentation" alt="" className="blobs" src="/media/img/backgrounds/blobs--dark.svg" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 max-560">
                  <p className="display">CONTACT US</p>
                  <h2 className="section-heading">Let's discuss your new landing page.</h2>
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
                            <textarea required id="message" name="message" placeholder="I've got some questions about a new landing page" />
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <input
                            data-splitbee-event="Get Started Form"
                            data-splitbee-event-page="/landing-pages"
                            type="submit"
                            value="Let's chat!"
                            className="btn"
                          />
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
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
