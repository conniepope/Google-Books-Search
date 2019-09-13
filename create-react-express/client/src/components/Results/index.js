import React from "react";
import "./style.css";


function Results() {
  return (
    <div className="container">
      <h2>{this.state.book.title}</h2>
      <h3>{this.state.book.authors}</h3>
      <button type="button" class="btn btn-outline-secondary" href="{this.state.book.link}">View</button>
      <button type="button" class="btn btn-outline-secondary">Delete</button>
      <img src="{this.state.book.image}" alt="book cover"></img>
      <p>{this.state.book.description}</p>
    </div>
  );
}

export default Results;
