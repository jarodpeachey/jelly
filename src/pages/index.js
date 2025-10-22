import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_home.scss";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Carousel from "../components/Carousel";

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
                            <div className="col-md-10 col-lg-6 col-xl-7">
                                <h1>Affordable Websites for Orlando Businesses</h1>
                                <p className="section-description hero__paragraph">
                                    We design, build, and manage SEO-optimized websites for Orlando's business owners — so you can focus on your clients, not
                                    your website.
                                </p>

                                <a
                                    className="btn"
                                    href="https://calendly.com/jarodpeachey/meeting-with-jarod-peachey"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Schedule a Call
                                </a>
                                <a href="#packages" className="btn text">
                                    See Packages & Pricing{" "}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19" stroke="#1C2C5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 5L19 12L12 19" stroke="#1C2C5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                                <div className="proof">
                                    <div className="stars">
                                        <img src="/media/img/icons/icon--rating.svg" alt="Star icon" />
                                        <img src="/media/img/icons/icon--rating.svg" alt="Star icon" />
                                        <img src="/media/img/icons/icon--rating.svg" alt="Star icon" />
                                        <img src="/media/img/icons/icon--rating.svg" alt="Star icon" />
                                        <img src="/media/img/icons/icon--rating.svg" alt="Star icon" />
                                    </div>
                                    <p>Jelly Development knocked it out of the park.</p>
                                    <p>
                                        - Josh Manders | <strong>CEO of Primcloud</strong>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-5">
                                <div className="hero__services">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-12">
                                            <div className="hero__service">
                                                <img width={48} height={46} src="/media/img/icons/icon--design.svg" alt="Web Design icon" title="Web Design" />
                                                <div className="hero__service-content">
                                                    <h2 className="h4">Web Design</h2>
                                                    <p>Beautiful, modern websites that help your business stand out online.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-12">
                                            <div className="hero__service">
                                                <img
                                                    width={48}
                                                    height={48}
                                                    src="/media/img/icons/icon--seo.svg"
                                                    alt="Magnifying glass icon"
                                                    title="SEO Services"
                                                />
                                                <div className="hero__service-content">
                                                    <h2 className="h4">SEO Services</h2>
                                                    <p>Get found by local customers searching for your services.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-12">
                                            <div className="hero__service">
                                                <img
                                                    width={48}
                                                    height={48}
                                                    src="/media/img/icons/icon--hosting.svg"
                                                    alt="Database icon"
                                                    title="Website Hosting"
                                                />
                                                <div className="hero__service-content">
                                                    <h2 className="h4">Website Hosting</h2>
                                                    <p>Fast, secure hosting to keep your website running smoothly.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-12">
                                            <div className="hero__service">
                                                <img
                                                    width={48}
                                                    height={48}
                                                    src="/media/img/icons/icon--maintenance.svg"
                                                    alt="Tools icon"
                                                    title="Website Maintenance"
                                                />
                                                <div className="hero__service-content">
                                                    <h2 className="h4">Website Maintenance</h2>
                                                    <p>Regular updates and support to maintain and improve your online presence.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="technologies mt-5 mt-lg-5">
                                    <div className="row">
                                        <div className="col-3 technology">
                                            <img width={54} height={54} src="/media/img/icons/icon--wordpress.svg" alt="WordPress icon" title="WordPress" />
                                            <p className="d-none d-sm-block" style={{ fontSize: "12px", marginTop: "8px", width: "100%", textAlign: "center" }}>
                                                WordPress Development
                                            </p>
                                        </div>
                                        <div className="col-3 technology">
                                            <img
                                                width={54}
                                                height={54}
                                                src="/media/img/icons/icon--squarespace.svg"
                                                alt="Squarespace icon"
                                                title="Squarespace"
                                            />
                                            <p className="d-none d-sm-block" style={{ fontSize: "12px", marginTop: "8px", width: "100%", textAlign: "center" }}>
                                                Squarespace Design
                                            </p>
                                        </div>
                                        <div className="col-3 technology">
                                            <img width={54} height={62} src="/media/img/icons/icon--shopify.svg" alt="Shopify icon" title="Shopify" />
                                            <p className="d-none d-sm-block" style={{ fontSize: "12px", marginTop: "8px", width: "100%", textAlign: "center" }}>
                                                Shopify Stores
                                            </p>
                                        </div>
                                        <div className="col-3 technology">
                                            <img
                                                width={54}
                                                height={43}
                                                src="/media/img/icons/icon--code.svg"
                                                alt="Custom Development icon"
                                                title="Custom Development"
                                            />
                                            <p className="d-none d-sm-block" style={{ fontSize: "12px", marginTop: "8px", width: "100%", textAlign: "center" }}>
                                                Custom Solutions
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="hero__background" src="/media/img/backgrounds/hero.svg" alt="Background image" />

                    <img role="presentation" src="/media/img/backgrounds/wave.svg" alt="Background image" className="wave" />
                </section>
                <main>
                    <section className="themes">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 max-560">
                                    <p className="display">OUR WORK</p>
                                    <h2 style={{textAlign: 'center'}}>Featured Website Designs</h2>
                                </div>
                            </div>
                            <Carousel
                                slides={[
                                    {
                                        name: "Chime Social",
                                        image: "/media/img/chime-work.webp",
                                        link: "https://chime-staging.netlify.app"
                                    },
                                    {
                                        name: "Contenda",
                                        image: "/media/img/contenda-work.webp",
                                        link: "https://contenda-staging.netlify.app/"
                                    },
                                    {
                                        name: "Glitter",
                                        image: "/media/img/glitter-work.webp",
                                        link: "https://get-glitter.netlify.app"
                                    },
                                    {
                                        name: "Launch Outreach",
                                        image: "/media/img/launch-work.webp",
                                        link: "https://launchoutreach.netlify.app"
                                    },
                                    {
                                        name: "Dad's Den Media",
                                        image: "/media/img/media-work.webp",
                                        link: "https://dadsdenmedia.com/"
                                    },
                                    {
                                        name: "Chime Social",
                                        image: "/media/img/chime-work.webp",
                                        link: "https://chime-staging.netlify.app"
                                    },
                                    {
                                        name: "Contenda",
                                        image: "/media/img/contenda-work.webp",
                                        link: "https://contenda-staging.netlify.app/"
                                    },
                                    {
                                        name: "Glitter",
                                        image: "/media/img/glitter-work.webp",
                                        link: "https://get-glitter.netlify.app"
                                    },
                                    {
                                        name: "Launch Outreach",
                                        image: "/media/img/launch-work.webp",
                                        link: "https://launchoutreach.netlify.app"
                                    },
                                    {
                                        name: "Dad's Den Media",
                                        image: "/media/img/media-work.webp",
                                        link: "https://dadsdenmedia.com/"
                                    },
                                    {
                                        name: "Chime Social",
                                        image: "/media/img/chime-work.webp",
                                        link: "https://chime-staging.netlify.app"
                                    },
                                    {
                                        name: "Contenda",
                                        image: "/media/img/contenda-work.webp",
                                        link: "https://contenda-staging.netlify.app/"
                                    },
                                    {
                                        name: "Glitter",
                                        image: "/media/img/glitter-work.webp",
                                        link: "https://get-glitter.netlify.app"
                                    },
                                ]}
                            />
                        </div>
                        {/* <a href="/themes" className="btn">View all themes</a> */}
                    </section>
                    {/* <section className="pain-points">
                        <div className="container">
                            <p className="display" style={{ textAlign: "left" }}>
                                WHY JELLY DEVELOPMENT
                            </p>
                            <h2>Your Website Is Losing You Customers</h2>
                            <p className="section-description">
                                <em>Or Maybe You Don't Have One Yet</em>
                            </p>

                            <ul className="pain-points-list">
                                <li>
                                    <img width="50" height="50" src="/media/img/icons/icon--x.svg" alt="x icon" />{" "}
                                    <span>
                                        Slow or <span style={{ fontWeight: "900", whiteSpace: "nowrap" }}>broken websites</span> turn potential customers away
                                    </span>
                                </li>
                                <li>
                                    <img width="50" height="50" src="/media/img/icons/icon--x.svg" alt="x icon" />{" "}
                                    <span>
                                        <span style={{ fontWeight: "900", whiteSpace: "nowrap" }}>80%</span> of people Google your business before calling
                                    </span>
                                </li>
                                <li>
                                    <img width="50" height="50" src="/media/img/icons/icon--x.svg" alt="x icon" />{" "}
                                    <span>
                                        You're <span style={{ fontWeight: "900", whiteSpace: "nowrap" }}>invisible</span> in the digital age without a modern
                                        website
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section> */}
                    <section className="services" id="services">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 max-560">
                                    <p className="display">WHAT WE DO</p>
                                    <h2>Websites Designed to Get You Noticed</h2>
                                    <p className="section-description">
                                        As your Orlando web design partner, we create beautiful, high-converting websites that help you grow your business
                                        online with an all-in-one website solution that handles everything you need.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-md-4">
                                    <div className="feature">
                                        <img width="83" height="64" src="/media/img/icons/icon--target.svg" alt="Target icon" />
                                        <h3>Search Engine Optimization</h3>
                                        <p>Show up in Google searches when potential customers are looking for your services.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <div className="feature">
                                        <img width="74" height="70" src="/media/img/icons/icon--bolt.svg" alt="Thundercloud icon" />
                                        <h3>Lightning-Fast Performance</h3>
                                        <p>Fast, mobile-friendly websites that are optimized for conversions.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <div className="feature">
                                        <img width="86" height="65" src="/media/img/icons/icon--badge.svg" alt="Badge icon" />
                                        <h3>Brand Identity</h3>
                                        <p>Distinctive designs that showcase your unique value and help build lasting customer relationships.</p>
                                    </div>
                                </div>
                                {/* <div className="col-sm-6 col-md-4">
                  <div className="feature">
                    <img width="86" height="65" src="/media/img/icons/icon--headset.svg" alt="Badge icon" />
                    <h3>Hands-Free Support</h3>
                    <p>Fully-managed websites, so you can stay focused on your clients and growing your business.</p>
                  </div>
                </div> */}
                            </div>
                        </div>
                    </section>
                    <section className="packages" id="packages">
                        <div className="container">
                            <p className="display" style={{ textAlign: "center" }}>
                                PACKAGES & PRICING
                            </p>
                            <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Affordable Website Solutions for Small Businesses</h2>
                            <p className="section-description" style={{ textAlign: "center", marginBottom: "2rem", marginRight: "auto", marginLeft: "auto" }}>
                                All packages include a fully-custom website, SEO and performance optimization, and free maintenance and support for a month
                            </p>
                            <div className="row">
                                {/* Starter Package */}
                                <div className="col-md-4">
                                    <div className="card packages__card">
                                        <h3 className="display">Starter</h3>
                                        <p className="price">$850</p>
                                        <ul>
                                            <li>One page</li>
                                            <li>Basic SEO optimization</li>
                                            <li>Hosting included</li>
                                            <li>3-4 week turnaround</li>
                                            <li style={{ borderBottom: "none" }}>2 rounds of revisions</li>
                                        </ul>

                                        <a href="/get-started" className="btn">
                                            Get Started
                                        </a>
                                    </div>
                                </div>

                                {/* Growth Package */}
                                <div className="col-md-4">
                                    <div className="card packages__card">
                                        <h3 className="display">Growth</h3>
                                        <p className="price">$2,500</p>
                                        <ul>
                                            <li>Everything in Starter</li>
                                            <li>Up to 5 pages</li>
                                            <li>Advanced SEO and analytics</li>
                                            <li>Free maintenance and support for 1 month</li>
                                            <li style={{ borderBottom: "none" }}>3 rounds of revisions</li>
                                        </ul>

                                        <a href="/get-started" className="btn">
                                            Get Started
                                        </a>
                                    </div>
                                </div>

                                {/* Premium Package */}
                                <div className="col-md-4">
                                    <div className="card packages__card">
                                        <h3 className="display">Premium</h3>
                                        <p className="price">$4,750</p>

                                        <ul>
                                            <li>Everything in Growth</li>
                                            <li>Up to 10 pages</li>
                                            <li>Brand identity research</li>
                                            <li>Logo design</li>
                                            <li>Free maintenance and support for 6 months</li>
                                            <li style={{ borderBottom: "none" }}>Unlimited rounds of revisions</li>
                                        </ul>

                                        <a href="/get-started" className="btn">
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <section className="chat">
            <img role="presentation" alt="" className="blobs" src="/media/img/backgrounds/blobs.svg" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 max-560">
                  <h2>Ready to chat about your new website?</h2>
                  <div className="d-flex">
                    <a href="/get-started" className="btn">
                      Get a Free Website Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
                    <section className="testimonials">
                        <div className="container">
                            <div className="col-lg-8 offset-lg-2 max-560">
                                <p className="display">WHAT PEOPLE SAY</p>
                                <h2 className="section-heading">Don't settle for anything less than incredible.</h2>
                                <p className="section-description">
                                    At Jelly Development, we're proud to say we go all in to bring the best websites we can to our clients.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="testimonial">
                                        <p>
                                            I had hired Jelly Development to create a landing page for a new product of mine, I gave them minimal requirements
                                            and they knocked it out of the ballpark with needing minimal changes. Definitely recommend and will be using them
                                            more often.
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
                        <img role="presentation" src="/media/img/backgrounds/wave--dark.svg" alt="Background image" className="wave" />
                        <img role="presentation" alt="Background image" className="blobs" src="/media/img/backgrounds/blobs--dark.svg" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 max-560">
                                    <p className="display">CONTACT US</p>
                                    <h2 className="section-heading">Let's discuss your new website.</h2>
                                    <div className="card">
                                        <Form formName="homepage" />
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
