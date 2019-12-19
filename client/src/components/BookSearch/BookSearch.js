import React, { Component } from 'react';
import SearchBox from "../SearchBox/SearchBox";
import DisplayResults from "../DisplayResults/DisplayResults";

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

  saveButtonClicked= () => {
    console.log('Button Clicked')
  }

  render() {  
    return (
      <div>
        {/* <Jumbotron /> */}
        <SearchBox searchAPI={this.searchAPI} handleSearchInput={this.handleSearchInput}/>
        <DisplayResults saveButtonClicked={this.saveButtonClicked} books={this.state.books}/>
        
      </div>
    )
  }
}

export default BookSearch;


