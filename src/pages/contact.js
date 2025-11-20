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
                            <div className="col-lg-6">
                                <p className="display">CONTACT US</p>
                                <h1>Let's get started on your new website</h1>
                                <p>Fill out the form, or schedule a call to discuss your project.</p>
                                <a
                                    className="btn"
                                    href="https://calendly.com/jarodpeachey/meeting-with-jarod-peachey"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textAlign: "center" }}
                                >
                                    Schedule a Call
                                </a>
                            </div>
                            <div className="col-lg-6">
                                <iframe
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSeBJ9gDrB2W_g1-jdVY0zwaXADjB17gx4OrXvhO6pv3Nmjd7g/viewform?embedded=true"
                                    width="640"
                                    height="3200"
                                    style={{ width: "100%" }}
                                    frameborder="0"
                                    marginheight="0"
                                    marginwidth="0"
                                >
                                    Loading…
                                </iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
