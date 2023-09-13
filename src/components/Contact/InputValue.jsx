import React, { useState } from "react";
import "./contact.css";

export default function InputValue(props) {
  const [style, setStyle] = useState("d-none");
  const [input, setInput] = useState();

  const handleChange = (inp) => {
    if (inp) {
      setStyle("d-flex");
    } else {
      setStyle("d-none");
    }
    setInput(inp);
  };
  return (
    <>
      <div className="input">
        <label className={style}>{props.title}</label>
        <input
          type="text"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          className="form-control "
          placeholder={props.title.toString()}
        />
      </div>
    </>
  );
}
