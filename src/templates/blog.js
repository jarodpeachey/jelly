import React from "react";
import "../styles/partials/pages/_blog.scss";
import Navigation from "../components/Navigation";
import SEO from "../components/SEO";

const Blog = ({ pageContext }) => {
  const {
    posts: { edges: posts },
  } = pageContext;

  console.log(posts);

  // posts = posts.edges

  return (
    <>
      <SEO
        title="Blog | Jelly Development"
        description="Tips, tricks and articles related to JAMstack and custom website design"
        image="/images/blog/seo.png"
        bodyClass="blog"
      />
      <header>
        <Navigation />
      </header>
      <div id="wrapper" className="wrapper">
        <section className="hero" id="home">
          <div className="background">
            <div></div>
          </div>
          <div className="container">
            <h1>Blog</h1>
          </div>
          <svg className="mobile" viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  id="Path-4"
                  opacity="0.200000003"
                ></path>
              </g>
              <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
            </g>
          </svg>

          <svg viewBox="-478.3 -139.38 1461.48 645.378">
            <path
              d="M -11.96 55.458 C 84.22 56.571 158.039 36.388 307.452 89.254 C 419.219 128.8 1056.789 133.729 1208.379 -64.85 C 1328.84 133.812 1305.901 115.169 1039.442 142.63 C 721.307 175.417 837.69 114.638 1.017 177.232"
              opacity="0.100000001"
              fill="#ffffff"
              fill-rule="nonzero"
              transform="matrix(1, 0, 0, 1.270042, -463.665992, 276.943852)"
            ></path>
            <path
              d="M 98 148.708 C 268.304 148.22 895.281 175.729 1037.956 25.719 C 1180.631 -124.291 1107.337 -179.73 1332.729 -288.574 C 1301.078 -289.092 1741.073 175.924 614.7 155.243 C -511.673 134.562 248.863 189.463 98 148.708 Z"
              opacity="0.100000001"
              fill="#ffffff"
              fill-rule="nonzero"
              transform="matrix(1, 0, 0, 1.270042, -463.665992, 276.943852)"
            ></path>
            <path
              d="M -0.966 44.118 C 101.196 6.142 236.629 11.947 327.299 19.208 C 454.192 29.369 600.068 61.928 650.528 68.811 C 779.522 86.407 979.201 57.604 1069.761 -13.225 C 1175.175 -95.671 1188.176 -188.655 1247.389 -295.345 C 1276.419 -347.652 1344.39 -395.114 1450.846 -403.803 L 1441.191 104.352 L 1.121 104.031 L -0.966 44.118 Z"
              fill="#ffffff"
              transform="matrix(1, 0, 0, 1.270042, -467.665992, 373.467041)"
            ></path>
          </svg>
        </section>
        <main>
          <section className="posts">
            <div className="container">
              <div className="infinite">
                <div className="row">
                  {posts.map(({ node }, index) => {
                    if (index <= 10) {
                      return (
                        <div className="col-sm-6 col-lg-4  infinite__item" data-index={index}>
                          <a href={`/blog/${node.slug}`} className="post-card">
                            <img src={node.metadata.featured_image.url} alt="" />
                            <h3>{node.title}</h3>
                            <p>{node.meta_description}</p>
                            <small>{node.published_at}</small>
                          </a>
                        </div>
                      );
                    } else {
                      return (
                        <div className="col-sm-6 col-lg-4  infinite__item hidden" data-index={index}>
                          <a href={`/blog/${node.slug}`} className="post-card">
                            <img src={node.metadata.featured_image.url} alt="" />
                            <h3>{node.title}</h3>
                            <p>{node.meta_description}</p>
                            <small>{node.published_at}</small>
                          </a>
                        </div>
                      );
                    }
                  })}
                </div>
                {posts.length > 11 && <div className="btn infinite__button outlined secondary">Load More</div>}
              </div>
            </div>
          </section>
          <section className="benefits">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                  <h2>Attract more customers</h2>
                  <p>With a custom website, you can reach more customers for your business with tailored SEO, accessibility and copywriting.</p>
                  <p>We research your target market before designing your website, so you can attract and convert new customers.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="cta">
            <div className="container" id="contact">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                  <div className="card">
                    <h3>Ready for your perfect custom website?</h3>
                    <form action="https://getform.io/f/33532d76-9ec0-4244-bd5a-fd210a4a2a96" method="POST">
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
                            What are you looking for? <span>*</span>
                            <textarea required id="message" name="message" placeholder="I'd like to chat about a website for my business" />
                          </label>
                        </div>
                        <div className="col-lg-12">
                          <input type="submit" value="Get in touch" className="btn" />
                        </div>
                      </div>
                      <p className="subtext">We'll get in touch with you within 24 hours, and we'll never spam you.</p>
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
          <p>© 2021 Jelly Development LLC</p>
        </div>
      </footer>
    </>
  );
};

export default Blog;