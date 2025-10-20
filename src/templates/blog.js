import React, { useMemo, useState } from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_blog.scss";
import Footer from "../components/Footer";

const Blog = ({ pageContext }) => {
    const {
        posts: { edges: posts },
    } = pageContext;

    const [inputValue, setInputValue] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    console.log(posts, searchQuery);
    const truncate = (text, max = 100) => {
        if (!text) return "";
        if (text.length <= max) return text;
        return text.slice(0, max).trimEnd() + "…";
    };

    return (
        <>
            <SEO
                title="Blog | Jelly Development"
                description="Actionable tutorials and expert articles on JAMstack, headless CMS, React, Gatsby, static site generators, web performance, accessibility, and custom website design."
                // image="/images/blog/seo.png"
                bodyClass="blog"
            />
            <header>
                <Navigation />
            </header>
            <div id="wrapper" className="wrapper">
                <section className="hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1>Blog</h1>
                                <form
                                    className="search-wrapper"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        setSearchQuery((inputValue || "").trim());
                                    }}
                                >
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="Search posts..."
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        aria-label="Search posts"
                                    />
                                    <button type="submit" className="btn">
                                        Search
                                    </button>
                                </form>
                                {searchQuery ? (
                                    <div className="search-clear">
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setInputValue("");
                                                setSearchQuery("");
                                            }}
                                        >
                                            Clear
                                        </a>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </section>
                <main>
                    <section className="posts">
                        <img role="presentation" src="/media/img/backgrounds/circle.svg" alt="" />
                        <div className="white">
                            <div className="container">
                                <div className="infinite">
                                    {useMemo(() => {
                                        const q = (searchQuery || "").trim().toLowerCase();

                                        // Sort posts by published_at (newest first). Use Date.parse fallback to 0.
                                        const sorted = posts.slice().sort((a, b) => {
                                            const aDate = Date.parse(a.node.published_at) || 0;
                                            const bDate = Date.parse(b.node.published_at) || 0;
                                            return bDate - aDate;
                                        });

                                        const filtered = !q
                                            ? sorted
                                            : sorted.filter(({ node }) => {
                                                  const title = (node.title || "").toLowerCase();
                                                  const meta = (node.metadata && node.metadata.meta_description) || "";
                                                  const seo = (node.metadata && node.metadata.seo_description) || "";
                                                  const desc = (meta || seo || "").toLowerCase();
                                                  return title.indexOf(q) !== -1 || desc.indexOf(q) !== -1;
                                              });

                                        return (
                                            <>
                                                {searchQuery ? (
                                                    <div className="search-results">Showing {filtered.length} results for "{searchQuery}"</div>
                                                ) : null}
                                                <div className="row">
                                                    {filtered.map(({ node }, index) => {
                                                        if (index <= 10) {
                                                            return (
                                                                <div className="col-sm-6 col-lg-4  infinite__item" data-index={index} key={node.slug}>
                                                                    <a href={`/blog/${node.slug}`} className="post-card">
                                                                        <img src={node.metadata.featured_image.url} alt="" />
                                                                        <h3>{node.title}</h3>
                                                                        <p>{truncate(node.metadata && node.metadata.meta_description, 100)}</p>
                                                                        <a href={`/blog/${node.slug}`}>Read More</a>
                                                                    </a>
                                                                </div>
                                                            );
                                                        } else {
                                                            return (
                                                                <div className="col-sm-6 col-lg-4  infinite__item hidden" data-index={index} key={node.slug}>
                                                                    <a href={`/blog/${node.slug}`} className="post-card">
                                                                        <img src={node.metadata.featured_image.url} alt="" />
                                                                        <h3>{node.title}</h3>
                                                                        <p>{truncate(node.metadata && node.metadata.meta_description, 100)}</p>
                                                                        <a href={`/blog/${node.slug}`}>Read More</a>
                                                                    </a>
                                                                </div>
                                                            );
                                                        }
                                                    })}
                                                </div>
                                            </>
                                        );
                                    }, [posts, searchQuery])}
                                    {posts.length > 11 && <div className="btn infinite__button outlined secondary">Load More</div>}
                                </div>
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
        </>
    );
};

export default Blog;
