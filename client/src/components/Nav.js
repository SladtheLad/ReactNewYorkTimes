import React from "react";
import { Link } from "react-router-dom"

const Nav = () =>
  <nav className="navbar">
    <div className="container">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <Link to="/saved" className="navbar-brand">
          Saved
        </Link>
      </div>
    </div>
  </nav>;

export default Nav;