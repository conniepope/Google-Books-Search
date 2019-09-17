import React from "react";
import "./style.css";


function Results(props) {
  console.log("results")
  return (
    <div className="container">

      <ul className="list-group search-results">
        <li key={props.id} className="list-group-item">
          
          <h2>{props.volumeInfo.title}</h2>
          <h3>{props.volumeInfo.authors.join(", ")}</h3>
          <button type="button" className="btn btn-outline-secondary" href={props.volumeInfo.infoLink}>View</button>
          <button type="button" className="btn btn-outline-secondary" onClick={() => this.handleBookSave(props.id)}>Save
          </button>
          <img src={props.volumeInfo.imageLinks.smallThumbnail} alt="book cover"></img>
          <p>{props.volumeInfo.description}</p>
        </li>
      </ul>
    </div>
  );
}

export default Results;
