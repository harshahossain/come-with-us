import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/images/logo.png";

function Header(props) {
  return (
    <nav className="nav-bar">
      <p className="logo">
        <img className="main-logo" src={logo} alt="main-logo" />
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
