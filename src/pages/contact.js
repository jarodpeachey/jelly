import React, { useState } from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_contact.scss";
import Footer from "../components/Footer";
import Form from "../components/Form";

const Contact = () => {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      setStatus("pending");
      setError(null);
      const myForm = event.target;
      const formData = new FormData(myForm);
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (res.status === 200) {
        setStatus("ok");
        window.location.href = "/success";
      } else {
        setStatus("error");
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus("error");
      setError(`${e}`);
      window.location.href = "/error";
    }
  };

  return (
    <>
      <SEO bodyClass="contact" />

      <header>
        <Navigation />
      </header>
      <div id="wrapper" className="wrapper">
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <p className="display">CONTACT US</p>
                <h1>Let's get started on your new website</h1>
                <p>Send us a message and we'll schedule a time to go over your goals and requirements for your new site.</p>
              </div>
            </div>
          </div>
        </section>
        <main>
          <section className="cta">
            <img role="presentation" src="/media/img/backgrounds/circle.svg" alt="" />
            <img role="presentation" alt="" className="blobs" src="/media/img/backgrounds/blobs.svg" />
            <div className="white">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2 max-560">
                    <div className="card">
                      <Form formName="contact" />
                    </div>
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

export default Contact;
