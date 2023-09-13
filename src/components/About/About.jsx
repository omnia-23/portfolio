import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="about">
      <h1>ABOUT COMPONENT</h1>
      <div className="d-flex w-25 justify-content-center align-items-center">
        <div className="bar"></div>
        <span className="px-4">
          <i className="fa fa-star fs-5"></i>
        </span>
        <div className="bar"></div>
      </div>

      <div className="container w-75">
        <div className="row w-100 g-5">
          <div className="col-md-6">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>

          <div className="col-md-6">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
        </div>
      </div>
    </div>
  );
}
