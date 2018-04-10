import React from "react";
import { Link } from "react-router-dom"

const Nav = () =>
  <div className="navbar navbar-expand-lg navbar-light container-fluid">
    <div className="navbar-brand">
      <a id="navbarlogo" href="/">
        <img
          src={require("../assets/images/nyt-t-logo.png")}
          alt="New York Times logo"
          height="55"
        />
      </a>
    </div>
    <h3>The New York Times Article Saver</h3>
    <div className="navbar-brand collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="nav">
        <Link to="/" className="nav-item nav-link">
          Home
        </Link>
        <Link to="/saved" className="nav-item nav-link">
          Saved
        </Link>
      </div>
    </div>
  </div>
  ;

export default Nav;