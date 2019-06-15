import React from "react";
import "./Button1.css";

export default props => (
  <button onClick={props.onClick} style={props.style}>
    {props.label}
  </button>
);
