import React from "react";

const JOTFORM_URL = "https://form.jotform.com/260614887108058";

// Navy "Ready to Get More Customers" section used at the bottom of the homepage, city pages, and service pages.
const FinalCta = ({ city = "Orlando" }) => (
    <section className="final-cta">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>Ready to Get More Customers From Your Website?</h2>
                    <p className="final-cta__subtitle">
                        Join {city} businesses that are finally getting real results online. Your free homepage preview is waiting.
                    </p>
                    <a href={JOTFORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn--white">
                        Get Your Free Homepage Preview →
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default FinalCta;
