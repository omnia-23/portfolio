import React from "react";
import "./Home.css";
import img from "./avataaars.svg";
export default function Home() {
  return (
    <div className="home">
      <img src={img} alt="img"/>
      <h1>START FRAMEWORK</h1>
      <div className="d-flex w-25 justify-content-center align-items-center">
        <div className="bar"></div>
        <span className="px-4">
          <i className="fa fa-star fs-5"></i>
        </span>
        <div className="bar"></div>
      </div>
      <p className="m-3">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}
