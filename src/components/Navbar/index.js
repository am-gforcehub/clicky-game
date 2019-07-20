import React from "react";
import "./style.css";

const Navbar = props => (
  <div className="navbar">
    <div className="header">{props.children}</div>
    <div className="scores">
      Score: {props.score} Top Score: {props.topScore}
    </div>
  </div>
);

export default Navbar;
