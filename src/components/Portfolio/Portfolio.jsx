import React, { useState } from "react";
import Card from "./Card.jsx";
import "./portfolio.css";
import img1 from "./img/port1.png";
import img2 from "./img/port2.png";
import img3 from "./img/port3.png";

export default function Portfolio() {
  const [display, setDisplay] = useState("d-none");
  const [layerImg, setlayerImg] = useState(img1);

  const hide = () => {
    setDisplay("d-none");
  };
  function show(e) {
    setlayerImg(e);
    setDisplay("bigLayer position-fixed");
  }
  return (
    <>
      <div onClick={hide} className={display}>
        <img src={layerImg} className="w-50"></img>
      </div>

      <div className="portfolio">
        <div className="header">
          <h1>PORTFOLIO COMPONENT</h1>
          <div className="d-flex w-25 justify-content-center align-items-center">
            <div className="bar"></div>
            <span className="px-4">
              <i className="fa fa-star fs-5"></i>
            </span>
            <div className="bar"></div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row g-5">
            <div
              className="col-md-4"
              onClick={() => {
                show(img1);
              }}
            >
              <Card src={img1} />
            </div>
            <div
              className="col-md-4"
              onClick={() => {
                show(img2);
              }}
            >
              <Card src={img2} />
            </div>
            <div
              className="col-md-4"
              onClick={() => {
                show(img3);
              }}
            >
              <Card src={img3} />
            </div>
            <div
              className="col-md-4"
              onClick={() => {
                show(img1);
              }}
            >
              <Card src={img1} />
            </div>
            <div
              className="col-md-4"
              onClick={() => {
                show(img2);
              }}
            >
              <Card src={img2} />
            </div>
            <div
              className="col-md-4"
              onClick={() => {
                show(img3);
              }}
            >
              <Card src={img3} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
