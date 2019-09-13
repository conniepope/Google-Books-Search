import React from "react";
import "./style.css";

function Nav() {
  return ( 
  <div class="header">
    <ul class="nav">
      <li class="nav-item">
        <h1 class="title"> Google Books </h1>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../pages/Search">Search</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../pages/Saved">Saved</a>
      </li>
    </ul>
  </div>
  )
}

export default Nav;
