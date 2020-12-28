import React from "react";
import { NavLink } from "react-router-dom";
import { GiBookmark } from "react-icons/gi";

function Navbar() {
  return (
    <header id="header">
      <div className="container">
        <a href="/" id="logo">
          <GiBookmark />
          ElearnApp
        </a>
        <nav id="menu">
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/schools">Schools</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">Register</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
