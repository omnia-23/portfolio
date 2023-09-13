import React from "react";
import "./contact.css";
import InputValue from "./InputValue";

export default function Contact() {
  return (
    <div className="contact">
      <div className="header">
        <h1>CONTACT SECTION</h1>
        <div className="d-flex w-25 justify-content-center align-items-center">
          <div className="bar"></div>
          <span className="px-4">
            <i className="fa fa-star fs-5"></i>
          </span>
          <div className="bar"></div>
        </div>
      </div>

      <div className="container w-50 p-3 mt-1 mx-auto">
        <InputValue title="useName" />
        <InputValue title="useAge" />
        <InputValue title="usaEmail" />
        <InputValue title="usePassword" />
        <InputValue title="usePassword" />
        <button className="btn">Send Message</button>
      </div>
    </div>
  );
}
