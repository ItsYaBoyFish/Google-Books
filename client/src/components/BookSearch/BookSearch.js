import React, { Component } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import SearchBox from "../SearchBox/SearchBox";
import DisplayResults from "../DisplayResults/DisplayResults";
import axios from "axios";

class BookSearch extends Component {

  //TODO: I need the Link and Authors Data

  state = {
    books: [],
    search: ''
  }

  componentDidMount() {
    fetch('/books')
      .then(data => data.json())
      .then(books => console.log(books))
      .catch(err => console.log(err))
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
      .then(results => results.json())
      .then(books => {
        console.log(books)
        this.setState({books: books.Results})
      })
      .catch(err => console.log(err))
  }

  render() {  
    return (
      <div>
        {/* <Jumbotron /> */}
        <SearchBox searchAPI={this.searchAPI} handleSearchInput={this.handleSearchInput}/>
        <DisplayResults books={this.state.books}/>
        
      </div>
    )
  }
}

export default BookSearch;


