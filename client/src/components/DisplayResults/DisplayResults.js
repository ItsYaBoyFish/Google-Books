import React, { Component } from 'react'
import "../DisplayResults/DisplayResults.css";
import BookCard from "../BookCard/BookCard";

class DisplayResults extends Component {

  com

  render() {
    return (
      <div className="results-container">
        <div className="results-header">
          {this.props.books.map(book => 
            <BookCard key={book.ID} Title={book.Title} Description={book.Description} Thumbnail={book.Thumbnail} Authors={book.Authors}/>
          )}
        </div>
      </div>
    )
  }
}


export default DisplayResults;
 