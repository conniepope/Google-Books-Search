import React from "react";
import "./style.css";


function Saved(props) {
  return (
    <div className="container">
    <h2>{props.state.book.title}</h2>
    <h3>{props.state.book.authors}</h3>
    <button type="button" class="btn btn-outline-secondary" href="{this.state.book.link}">View</button>
    <button type="button" class="btn btn-outline-secondary" onClick={() => this.deleteBook(this.book._id)}>Delete</button>
    <img src="{this.state.book.image}" alt="book cover"></img>
    <p>{this.state.book.description}</p>
  
  </div>
  );
}

export default Saved;