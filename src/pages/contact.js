import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_contact-page.scss";
import Footer, { PHONE, EMAIL } from "../components/Footer";

const Contact = ({ props }) => {
  return (
    <>
      <SEO
        bodyClass="contact-page secondary-page"
        title="Contact | Jelly Development"
        description="Get in touch with Jelly Development about a new website for your Orlando area business."
      />

      <header>
        <Navigation />
      </header>

      <div id="wrapper" className="wrapper">
        <section className="secondary-hero">
          <div className="container">
            <span className="pill">Contact</span>
            <h1>Let's Talk</h1>
            <p>Tell us about your business and what you need. We'll get back to you soon.</p>
          </div>
        </section>
        <div className="container contact-form-section">
          <div className="card contact-card">
            <form
              name="contact"
              method="POST"
              action="/success"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="contact-form"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>
              <label>
                Name <span>*</span>
                <input required type="text" name="name" placeholder="Name" />
              </label>
              <label>
                Email <span>*</span>
                <input required type="email" name="email" placeholder="Email" />
              </label>
              <label>
                Message <span>*</span>
                <textarea required name="message" placeholder="How can we help?" />
              </label>
              <button type="submit" className="btn">Send message</button>
            </form>
            <aside className="contact-card__info">
              <h3>Reach us directly</h3>
              <address className="contact-card__links">
                <a href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}>{PHONE}</a>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </address>
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
