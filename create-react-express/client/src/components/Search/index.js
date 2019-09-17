import React from "react";
import "./style.css";


function Search({ title, handleInputChange, handleFormSubmit }) {
  console.log(title)
  return (
    <div className="container">
      <form className="form-group"> 
          <label>Book Search</label>
          <input type="text" 
                 className="form-control" id="bookSearch" 
                 value={title} 
                 placeholder="Title of Book..."
                 name="title"
                 onChange={handleInputChange}>
          </input>
          <button type="submit" 
                  onClick={handleFormSubmit}
                  className="btn btn-primary">Search
          </button>
      </form>    
    </div>
  );
}

export default Search;