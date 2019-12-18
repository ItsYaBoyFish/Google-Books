import React, { Component } from 'react'
import "../DisplayResults/DisplayResults.css"

class DisplayResults extends Component {
  render() {
    return (
      <div className="results-container">
        <div className="results-header">
          <ul>
          {this.props.books.map(book => 
            <li key={book.ID}>
              <p>{book.Title}</p>
            </li>)}
          </ul>
        </div>
      </div>
    )
  }
}


export default DisplayResults;
    {/* {props.books.map(book =>
      <li key={book.ID}>
        <p>{book.Title}</p>
        <p>{book.Description}</p>
        <p>{book.Thumbnail}</p>
      </li> */}
 