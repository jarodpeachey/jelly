import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_home.scss";

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
                <h1>Custom websites designed to grow your SaaS</h1>
                <p className="section-description">We build websites that are tailored to your brand and designed to get you more customers.</p>
                {/* <p className="section-description">We combine design, branding, SEO and copywriting to craft the perfect website for you and your customers.</p> */}

                <a href="/get-started" className="btn">
                  Let’s build your website
                </a>
                <a href="#services" className="btn text">
                  Read more{" "}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="#1C2C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 5L19 12L12 19" stroke="#1C2C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
              <div className="col-lg-4 col-xl-6">
                <img className="graphic" src="/media/img/hero.png" alt="" />
              </div>
            </div>
          </div>
          <img src="/media/img/backgrounds/wave.svg" alt="" className="wave" />
        </section>
        <main>
          <section className="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 max-560">
                  <p className="display">WHAT WE DO</p>
                  <h2>Let us do the hard stuff.</h2>
                  <p className="section-description">
                    We’ll build you an amazing website, so you can focus on what matters: keeping your users happy and growing your business.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="feature">
                    <img src="/media/img/icons/icon--target.svg" alt="Target icon" />
                    <h3>Get more potential customers to your site</h3>
                    <p>Finding potential customers is a pain, and SEO isn't easy either.</p>
                    <p>We'll optimize your website so more people can find you, and convert them into new customers.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="feature">
                    <img src="/media/img/icons/icon--bolt.svg" alt="Target icon" />
                    <h3>Keep your visitors on your site longer</h3>
                    <p>46% of visitors don't come back if your website doesn't load fast.</p>
                    <p>We'll build your website to load in the blink of an eye, so you don't lose potential business.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="feature">
                    <img src="/media/img/icons/icon--badge.svg" alt="Target icon" />
                    <h3>Showcase your brand to your visitors effortlessly</h3>
                    <p>Letting your visitors know what you're about is tough.</p>
                    <p>We'll make sure your website effectively communicates your brand - and looks great while doing it.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="chat">
            <img className="blob" src="/media/img/backgrounds/blob.svg" role="presentation" />
            <img className="blobs" src="/media/img/backgrounds/blobs.svg" role="presentation" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 max-560">
                  <h2>Ready to chat about your new website?</h2>
                  <div className="d-flex">
                    <a href="/get-started" className="btn mr-4">
                      I’m ready for a new website
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
                <p className="section-description">At Jelly Development, we’re proud to say we go all in to bring the best websites we can to our clients.</p>
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
                </div>
                <div className="col-md-6">
                  <div className="testimonial">
                    <p>Working with Jelly Development was awesome. Here's something about how amazing they were. Truly awesome!</p>
                    <p>- Jarod Peachey | CEO of Jelly Development</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="cta">
            <img src="/media/img/backgrounds/wave--dark.svg" alt="" className="wave" />
            <img className="blob" src="/media/img/backgrounds/blob--dark.svg" role="presentation" />
            <img className="blobs" src="/media/img/backgrounds/blobs--dark.svg" role="presentation" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 max-560">
                  <p className="display">CONTACT US</p>
                  <h2 className="section-heading">Let's discuss your new website.</h2>
                  <div className="card">
                    <form name="contact" method="POST" data-netlify="true">
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
      <footer className="footer">
        <div className="container">
          <div className="d-flex">
            <img src="/media/img/Logo White.svg" alt="Jelly Development logo" />
          </div>
          <div className="d-flex">
            <a target="_blank" rel="noreferrer" href="https://twitter.com/jellydevelop">
              <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23 1.9998C22.0424 2.67528 20.9821 3.19191 19.86 3.5298C19.2577 2.83731 18.4573 2.34649 17.567 2.12373C16.6767 1.90096 15.7395 1.957 14.8821 2.28426C14.0247 2.61151 13.2884 3.1942 12.773 3.95352C12.2575 4.71283 11.9877 5.61214 12 6.5298V7.5298C10.2426 7.57537 8.50127 7.18561 6.93101 6.39525C5.36074 5.60488 4.01032 4.43844 3 2.9998C3 2.9998 -1 11.9998 8 15.9998C5.94053 17.3978 3.48716 18.0987 1 17.9998C10 22.9998 21 17.9998 21 6.4998C20.9991 6.22126 20.9723 5.9434 20.92 5.6698C21.9406 4.6633 22.6608 3.39251 23 1.9998V1.9998Z"
                  stroke="white"
                  stroke-opacity="0.8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a target="_blank" rel="noreferrer" href="https://linkedin.com/company/jelly-development/">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                  stroke="white"
                  stroke-opacity="0.8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M6 9H2V21H6V9Z" stroke="white" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  stroke="white"
                  stroke-opacity="0.8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="d-flex">
            <p>© 2021 Jelly Development LLC</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
