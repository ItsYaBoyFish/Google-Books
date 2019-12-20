import React from 'react'
import "../DisplaySaved/DisplaySaved.css"
import BookCardSaved from "../BookCardSaved/BookCardSaved"

function DisplayResults(props) {
  return (
    <div className="saved-container">
      {props.books.map((book, index) => 
        <BookCardSaved key={index} Title={book.Title} Description={book.Description} Thumbnail={book.Thumbnail} Authors={book.Authors} />
      )}
    </div>
  )
}

export default DisplayResults;