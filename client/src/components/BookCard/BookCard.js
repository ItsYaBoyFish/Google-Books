import React, { Component } from 'react';
import "../BookCard/BookCard.css";


class BookCard extends Component {
  state = {
    ID: this.props.ID,
    Title: this.props.Title,
    Thumbnail: this.props.Thumbnail,
    Authors: this.props.Authors,
    Description: this.props.Description
  }


  saveButtonClicked = () => {
    fetch('/test')
      .then(data => data.json())
      .then(message => console.log(message))
      .catch(err => console.log(err))
  }

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
            <p>{this.state.Authors ? this.state.Authors.map(Author => <span>{Author}, </span>)  : 'No Authors To Display'}</p>
          </div>
          <div className="book-card-description">
            <label>Description:</label>
            <div className="book-card-description-container">
              <p>{this.state.Description ? this.state.Description : "No Description Provided"}</p>
            </div>
          </div>
        </div>
        <div className="save-button" onClick={this.saveButtonClicked}>Save Book!</div>
      </div>
    )
  }
}

export default BookCard;

// src="https://via.placeholder.com/200"

