import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
  return (
    <div className="navbar">
      <div className="brand">
        <h1>Google Books</h1>
      </div>
      <div className="nav-links">
        <a>
          <Link to="/">Search</Link>
        </a>
        <a>
          <Link to="/Saved">Saved</Link>
        </a>
      </div>
    </div>
  )
}

export default Navbar;