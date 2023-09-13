import React from "react";

import "./portfolio.css";

export default function Card(props) {
  
  return (
    <div>
      <div className="image">
        <div className="layer">+</div>
        <img  src={props.src}  alt="" />
      </div>
    </div>
  );
}
