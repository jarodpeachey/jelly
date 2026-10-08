import React from "react";
import { Link } from "gatsby";
import SEO from "../../components/SEO";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import "../../styles/partials/pages/_work.scss";

// TODO: add concept designs (one per trade: HVAC, roofing, plumbing, electrical, landscaping)
// once the trade templates exist. Do not add sample sites until then.
const PROJECTS = [
    {
        slug: "lakeland-painting",
        category: "Web Design & SEO",
        title: "Lakeland Painting",
        desc: "Rebuilt an outdated painting company website — cut their monthly costs in half, improved mobile experience, and boosted their local SEO.",
        image: "/media/img/work/lakeland-painting/preview.png",
    },
];

const WorkIndex = () => (
    <>
        <SEO
            bodyClass="work"
            title="Our Work | Jelly Development"
            description="See how Jelly Development has helped small businesses across Central Florida with fast, modern websites that rank on Google and convert visitors into leads."
        />
        <header>
            <Navigation />
        </header>
        <div id="wrapper" className="wrapper">
            <section className="work-hero">
                <div className="container">
                    <span className="pill">Our Work</span>
                    <h1>Projects We're Proud Of</h1>
                    <p>Real websites built for real businesses. See the problems we solved and the results we delivered.</p>
                </div>
            </section>
            <div className="container">
                <div className="work-grid">
                    {PROJECTS.map((p) => (
                        <Link key={p.slug} to={`/work/${p.slug}`} className="work-card">
                            {p.image
                                ? <img src={p.image} alt={p.title} className="work-card__image" />
                                : <div className="work-card__image--placeholder">🎨</div>
                            }
                            <div className="work-card__body">
                                <div className="work-card__category">{p.category}</div>
                                <div className="work-card__title">{p.title}</div>
                                <p className="work-card__desc">{p.desc}</p>
                                <span className="work-card__link">View Case Study →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
    </>
);

export default WorkIndex;
