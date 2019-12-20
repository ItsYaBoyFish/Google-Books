import React, { Component } from 'react';
import DisplaySaved from "../DisplaySaved/DisplaySaved";

class BookSave extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    fetch('/saved/books')
      .then(data => data.json())
      .then(books => {
        this.setState({books: books})
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <DisplaySaved books={this.state.books}/>
      </div>
    )
  }
}

export default BookSave;
