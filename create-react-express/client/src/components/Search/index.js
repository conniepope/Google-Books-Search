import React from "react";
import "./style.css";


function Search() {
  return (
    <div className="container">
      <form class="form-group">
          <label>Book Search</label>
          <input type="text" class="form-control" id="bookSearch"></input>
        
          <button type="submit" class="btn btn-primary">Search</button>
      </form>    
    </div>
  );
}

export default Search;