import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/images/logo.png";
import { useContext } from "react";
import Context from "./Context";

function Header() {
  const userData = useContext(Context);
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
        <li style={{ color: "white" }}>Cart: {userData.cartItems}</li>
      </ul>
    </nav>
  );
}

export default Header;
