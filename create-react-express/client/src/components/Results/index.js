import React from "react";
import "./style.css";


function Results(props) {
  return (
    <div className="container">

      <ul className="list-group search-results">
      {props.books.map(result => (
        <li key={result} className="list-group-item">
          
          <h2>{this.state.book.title}</h2>
          <h3>{this.state.book.authors}</h3>
          <button type="button" className="btn btn-outline-secondary" href="{this.state.book.link}">View</button>
          <button type="button" className="btn btn-outline-secondary">Delete</button>
          <img src="{this.state.book.image}" alt="book cover"></img>
          <p>{this.state.book.description}</p>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default Results;
