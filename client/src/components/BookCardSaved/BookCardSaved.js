import React, { Component } from 'react';
import "../BookCardSaved/BookCard.css";


class BookCardSaved extends Component {
  state = {
    ID: this.props.ID,
    Title: this.props.Title,
    Thumbnail: this.props.Thumbnail,
    Authors: this.props.Authors,
    Description: this.props.Description
  }


  // saveButtonClicked = () => {
  //   const data = {
  //     ID: this.state.ID,
  //     Title: this.state.Title,
  //     Authors: this.state.Authors,
  //     Thumbnail: this.state.Thumbnail,
  //     Description: this.state.Description
  //   }

  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(data)
  //   }

  //   fetch('/books/save', options)
  //     .then(data => data.json())
  //     .then(message => console.log(message))
  //     .catch(err => console.log(err))

  //     alert("Book Submitted!")
  // }

  render() {
    return (
      <div className="book-card" key={this.state.ID}>
        <div className="book-card-title">
          <label>Title:</label>
          <p className="title-element">{this.state.Title ? this.props.Title : 'No Title Provided'}</p>
        </div>
        <div className="book-card-img">
          <img src={this.state.Thumbnail} alt="thumbnail"></img>
        </div>
        <div className="book-card-body">
          <div className="book-card-author">
            <label>Authors:</label>
            <p>{this.state.Authors ? this.state.Authors.map((Author, index) => <span key={index}>{Author}, </span>)  : 'No Authors To Display'}</p>
          </div>
          <div className="book-card-description">
            <label>Description:</label>
            <div className="book-card-description-container">
              <p>{this.state.Description ? this.state.Description : "No Description Provided"}</p>
            </div>
          </div>
        </div>
        {/* <div className="save-button" onClick={this.saveButtonClicked}>Save Book!</div> */}
      </div>
    )
  }
}

export default BookCardSaved;

// src="https://via.placeholder.com/200"

