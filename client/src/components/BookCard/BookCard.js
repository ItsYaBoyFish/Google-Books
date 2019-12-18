import React, { Component } from 'react';
import "../BookCard/BookCard.css";


class BookCard extends Component {
  render() {
    return (
      <div className="book-card">
        <div className="book-card-title">
          <label>Title:</label><br></br>
        </div>
        <div className="book-card-img">
          <img src="https://via.placeholder.com/200"></img>
        </div>
        <div className="book-card-body">
          <div className="book-card-author">
            <label>Authors:</label>
            <p>Author 1, Author 2, Author 3</p>
          </div>
          <div className="book-card-description">
            <label>Description:</label>
            <div className="book-card-description-container">
              <p>
              "Coding For Dummies, (9781119293323) was previously published as Coding For Dummies, (9781118951309). While this version features a new Dummies cover and design, the content is the same as the prior release and should not be considered a new or updated product. Hands-on exercises help you learn to code like a pro No coding experience is required for Coding For Dummies, your one-stop guide to building a foundation of knowledge in writing computer code for web, application, and software development. It doesn't matter if you've dabbled in coding or never written a line of code, this book guides you through the basics. Using foundational web development languages like HTML, CSS, and JavaScript, it explains in plain English how coding works and why it's needed. Online exercises developed by Codecademy, a leading online code training site, help hone coding skills and demonstrate results as you practice. The site provides an environment where you can try out tutorials built into the text and see the actual output from your coding. You'll also gain access to end-of-chapter challenges to apply newly acquired skills to a less-defined assignment. So what are you waiting for? The current demand for workers with coding and computer science skills far exceeds the supply Teaches the foundations of web development languages in an easy-to-understand format Offers unprecedented opportunities to practice basic coding languages Readers can access online hands-on exercises and end-of-chapter assessments that develop and test their new-found skills If you're a student looking for an introduction to the basic concepts of coding or a professional looking to add new skills, Coding For Dummies has you covered."
              </p>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default BookCard;

// src="https://via.placeholder.com/200"