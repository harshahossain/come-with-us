import React, { useState } from "react";
import "./Header.css";

function Header(props) {
  return (
    <nav className="nav-bar">
      <p className="logo">
        <img className="main-logo" src={props.PNGlogo} alt={props.logoName} />
      </p>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contact-us">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
