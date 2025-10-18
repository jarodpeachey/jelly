import React, { useEffect, useState } from "react";
// removed GraphQL query - post data is provided via pageContext by gatsby-node
import ReactMarkdown from "react-markdown";
import "../styles/partials/pages/_post.scss";
import Navigation from "../components/Navigation";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import formatDate from "../utils/formatDate";

const PostTemplate = ({ pageContext }) => {
    let post = pageContext.post;
    const [toolbarVisible, setToolbarVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY || window.pageYOffset;
            setToolbarVisible(y > 200);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        // set initial
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <>
            <SEO
                title={`${post.title} | Jelly Development`}
                description={`${post.seo_description}`}
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
                            <div className="col-lg-10 offset-lg-1">
                                <h1>{post.title}</h1>
                                <br />
                                <p className="author">By Jarod Peachey</p>
                                <p className="date">{formatDate(post.published_at)}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <main>
                    <section className="content">
                        <div className="container">
                            <ReactMarkdown className="content__inner" source={post.metadata.markdown_content} />
                            <div className="chat">
                                <img role="presentation" alt="" className="blob" src="/media/img/backgrounds/blob--dark.svg" />
                                <img role="presentation" alt="" className="blobs" src="/media/img/backgrounds/blobs--dark.svg" />
                                <h2>Ready to chat about your new website?</h2>
                                <a href="/get-started" className="btn mx-auto">
                                    I'm ready for a new website
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="cta">
                        <img role="presentation" src="/media/img/backgrounds/wave--dark.svg" alt="" className="wave" />
                        <img role="presentation" alt="" className="blobs" src="/media/img/backgrounds/blobs--dark.svg" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 max-560">
                                    <p className="display">CONTACT US</p>
                                    <h2 className="section-heading">Let's discuss your new website.</h2>
                                    <div className="card">
                                        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                                            <p className="hidden">
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
                                                        <textarea
                                                            required
                                                            id="message"
                                                            name="message"
                                                            placeholder="I've got some questions about a new website"
                                                        />
                                                    </label>
                                                </div>
                                                <div className="col-lg-12">
                                                    <input type="submit" value="Let's chat!" className="btn secondary" />
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
            <div className={`post__toolbar ${toolbarVisible ? "is-visible" : ""}`}>
                <div className="toolbar-inner">
                    <h4 className="toolbar-text">Ready for your website?</h4>
                    <a
                        className="btn"
                        href="https://calendly.com/jarodpeachey/meeting-with-jarod-peachey"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Schedule a Call
                    </a>
                </div>
            </div>
        </>
    );
};

export default PostTemplate;

// previously used a GraphQL query to load cosmicjsPosts by slug; now the
// full post object is passed in pageContext from gatsby-node.
