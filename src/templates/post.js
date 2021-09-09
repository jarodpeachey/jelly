import React from "react";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import "../styles/partials/pages/_post.scss";
import Navigation from "../components/Navigation";
import SEO from "../components/SEO";
import Footer from "../components/Footer";

const PostTemplate = ({ data, pageContext }) => {
  let post = data.post;
  return (
    <>
      <SEO
        title="Blog | Jelly Development"
        description="Tips, tricks and articles related to JAMstack and custom website design"
        // image="/images/blog/seo.png"
        bodyClass="post"
      />
      <header>
        <Navigation />
      </header>
      <div id="wrapper" className="wrapper">
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h1>{post.title}</h1>
                <p className="author">By Jarod Peachey</p>
                <p className="date">{post.published_at}</p>
              </div>
            </div>
          </div>
        </section>
        <main>
          <section className="content">
            <img role="presentation" alt="" src="/media/img/backgrounds/circle.svg" alt="" />
            <div className="white">
              <div className="container">
                <ReactMarkdown source={post.metadata.markdown_content} />
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
      <Footer />
    </>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: cosmicjsPosts(slug: { eq: $slug }) {
      metadata {
        meta_description
        markdown_content
        featured_image {
          url
        }
      }
      title
      published_at(formatString: "DD/MM/YYYY")
      status
      slug
    }
  }
`;
