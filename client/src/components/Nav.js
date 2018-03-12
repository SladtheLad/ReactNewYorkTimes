import React from "react";
import { Link } from "react-router-dom"

const Nav = () =>
  <div className="container-fluid bg-danger">
    <div className="navbar-header">
      <a className="navbar-brand" id="navbarlogo" href="/">
        <img
          src={require("../assets/images/The_New_York_Times_logo.png")}
          alt="NewYorkTimes"
          height="55"
        />
      </a>
      Article Saver
    </div>
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarNavAltMarkup"
    >
      <div className="nav navbar-nav navbar-right">
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