import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_home.scss";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <SEO bodyClass="home" />

      <header>
        <Navigation />
      </header>
      <div id="wrapper" className="wrapper">
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-6">
                <h1>Orlando Website Design for Small Businesses</h1>
                <p className="section-description">Stand out in the Orlando market with a professional website that attracts local customers and grows your business.</p>
                <p className="section-description">As your Orlando web design partner, we create beautiful, high-converting websites tailored specifically for small businesses in Central Florida.</p>

                <a href="/get-started" className="btn">
                  Get a Free Website Consultation
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
                  <p>
                    - Josh Manders | <strong>CEO of Primcloud</strong>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-xl-6">
                {/* <img width="724" height="717" className="graphic" src="/media/img/hero-2.png" alt="Landing page preview" /> */}
              </div>
            </div>
          </div>
          <img className="hero__background" src="/media/img/backgrounds/hero.svg" />

          <img role="presentation" src="/media/img/backgrounds/wave.svg" alt="" className="wave" />
        </section>
        <main>
          <section className="services" id="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 max-560">
                  <p className="display">WHAT WE DO</p>
                  <h2>Growing your business</h2>
                  <p className="section-description">We help you grow your business online with all-in-one website solution that handles everything you need to succeed.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="feature">
                    <img width="83" height="64" src="/media/img/icons/icon--target.svg" alt="Target icon" />
                    <h3>Attract More Local Customers</h3>
                    <p>Your website should be your best salesperson, working 24/7 to bring in new business.</p>
                    <p>We'll optimize your site to rank higher in local searches and convert visitors into paying customers.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="feature">
                    <img width="74" height="70" src="/media/img/icons/icon--bolt.svg" alt="Thundercloud icon" />
                    <h3>Lightning-Fast Performance</h3>
                    <p>Every second of load time costs you money. Most visitors leave if a site takes over 3 seconds to load.</p>
                    <p>Our websites are built for speed from the ground up, ensuring visitors stay engaged with your content.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="feature">
                    <img width="86" height="65" src="/media/img/icons/icon--badge.svg" alt="Badge icon" />
                    <h3>Build a Memorable Brand</h3>
                    <p>Your website is often the first impression potential customers have of your business.</p>
                    <p>We create distinctive designs that showcase your unique value and help build lasting customer relationships.</p>
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
                  <h2>Ready to chat about your new website?</h2>
                  <div className="d-flex">
                    <a href="/get-started" className="btn mr-4">
                      Get a Free Website Consultation
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
                <h2 className="section-heading">Don't settle for anything less than incredible.</h2>
                <p className="section-description">At Jelly Development, we're proud to say we go all in to bring the best websites we can to our clients.</p>
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
                  <h2 className="section-heading">Let's discuss your new website.</h2>
                  <div className="card">
                    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                      <p class="hidden">
                        <label>
                          Don't fill this out if you're human: <input name="bot-field" />
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
                            <textarea required id="message" name="message" placeholder="I've got some questions about a new website" />
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <input type="submit" value="Let's chat!" className="btn" />
                        </div>
                      </div>
                      <p className="subtext">
                        or email us at <a href="mailto:jarod@jellydevelopment.com">jarod@jellydevelopment.com</a>
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
