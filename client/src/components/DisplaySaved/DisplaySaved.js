import React from 'react'
import "../DisplaySaved/DisplaySaved.css"
import BookCard from "../BookCard/BookCard"

function DisplayResults(props) {
  return (
    <div className="saved-container">
      {props.books.map((book, index) => 
        <BookCard key={index} Title={book.Title} Description={book.Description} Thumbnail={book.Thumbnail} Authors={book.Authors} />
      )}
    </div>
  )
}

export default DisplayResults;