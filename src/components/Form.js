import React, { useState } from "react";

const Form = ({ formName = "get-started" }) => {
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus("pending");
      setError(null);
      const myForm = e.target;
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
    <form name={formName} onSubmit={handleFormSubmit}>
      <input type="hidden" name="form-name" value={formName} />
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
            <textarea required id="message" name="message" placeholder="I need a new website or landing page" />
          </label>
        </div>
        <div className="col-lg-12">
          <input type="submit" value="Let's get started!" className="btn secondary" />
        </div>
      </div>
      <p className="subtext">
        or email us at <a href="mailto:jarod@jellydevelopment.com">jarod@jellydevelopment.com</a>
      </p>

      {status === "ok" && <p>Submitted!</p>}
      {status === "error" && <p>{error}</p>}
    </form>
  );
};

export default Form;
