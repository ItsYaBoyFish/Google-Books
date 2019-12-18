import React, { Component } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import SearchBox from "../SearchBox/SearchBox";
import DisplayResults from "../DisplayResults/DisplayResults";

class BookSearch extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    fetch('/api/books')
      .then(response => response.json())
      .then(books => this.setState({books: books}))
  }

  render() {  
    return (
      <div>
        {/* <Jumbotron /> */}
        <SearchBox />
        <DisplayResults />
        <ul>
          {this.state.books.map(book =>
          <li key={book.id}>
            <p>{book.Title}</p>
            <p>{book.Authors}</p>
            <p>{book.Description}</p>
            <p>{book.Image}</p>
            <p>{book.Link}</p>
          </li>
          )}
        </ul>
      </div>
    )
  }
}

export default BookSearch;
