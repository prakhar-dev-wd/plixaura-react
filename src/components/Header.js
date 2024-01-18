import React from "react";
import "./App.css";
import Svg from "./SVG";

function Header(props) {
  return (
    <nav className="nav">
      <h1 className="heading">{props.text}</h1>
        <Svg />
    </nav>
  );
}
export default Header;
