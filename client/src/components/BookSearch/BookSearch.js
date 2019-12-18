import React, { Component } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import SearchBox from "../SearchBox/SearchBox";
import DisplayResults from "../DisplayResults/DisplayResults";
import axios from "axios";

class BookSearch extends Component {

  state = {
    books: [],
    search: ''
  }

  componentDidMount() {
    fetch('/books')
      .then(data => data.json())
      .then(books => console.log(books))
  }

  handleSearchInput = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  searchAPI = (e) => {
    const paramaters = {
      search: this.state.search
    }
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paramaters)
    };

    fetch(`/search/books`, options)
      .then(results => console.log(results))
      .catch(err => console.log(err))
  }

  render() {  
    return (
      <div>
        {/* <Jumbotron /> */}
        <SearchBox searchAPI={this.searchAPI} handleSearchInput={this.handleSearchInput}/>
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
