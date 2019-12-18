import React from 'react';
import "../SearchBox/SearchBox.css";

function SearchBox(props) {
  return (
    <div className="searchBox-container">
      <h1>Search For A Book!</h1>
      <div className="input-field">
        <label>Book:</label>
        <input onChange={props.handleSearchInput} type="text" placeholder="Please Enter A Book: Example - Harry Potter"/>
      </div>
      <button onClick={props.searchAPI}>Search!</button>
    </div>
  )
}

export default SearchBox;