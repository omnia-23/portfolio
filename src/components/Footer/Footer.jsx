import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="box">
          <h4>LOCATION</h4>
          <span>2215 John Daniel Drive</span>
          <span>Clark,MO 6521341</span>
        </div>
        <div className="box">
          <h4>AROUND THE WEB</h4>
          <div className="icon">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
            <i className="fa fa-globe"></i>
          </div>
        </div>
        <div className="box">
          <h4>ABOUT FREELANCER</h4>
          <p>
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
    </footer>
  );
}
