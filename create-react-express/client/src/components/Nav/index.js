import React from "react";
import "./style.css";

function Nav() {
  return ( 
  <div className="header">
    <ul className="nav">
      <li className="nav-item">
        <h1 className="title"> Google Books </h1>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="../pages/SearchPage">Search</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="../pages/SavedPage">Saved</a>
      </li>
    </ul>
  </div>
  )
}

export default Nav;
