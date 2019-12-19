import React, { Component } from 'react';
import "../BookCard/BookCard.css";


class BookCard extends Component {
  render() {
    console.log(this.props.Authors)
    return (
      <div className="book-card" key={this.props.ID}>
        <div className="book-card-title">
          <label>Title:</label>
          <p>{this.props.Title ? this.props.Title : 'No Title Provided'}</p>
        </div>
        <div className="book-card-img">
          <img src={this.props.Thumbnail} alt="thumbnail"></img>
        </div>
        <div className="book-card-body">
          <div className="book-card-author">
            <label>Authors:</label>
            <p>{this.props.Authors ? this.props.Authors.map(Author => <span>{Author}, </span>)  : 'No Authors To Display'}</p>
          </div>
          <div className="book-card-description">
            <label>Description:</label>
            <div className="book-card-description-container">
              <p>{this.props.Description ? this.props.Description : "No Description Provided"}</p>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default BookCard;

// src="https://via.placeholder.com/200"

