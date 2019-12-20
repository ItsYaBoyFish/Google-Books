// Express Dependencies
const express = require('express');
const port = process.env.PORT || 5000;
const app = express();
const axios = require('axios');
const path = require('path');

// Mongoose Dependecies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbURI = 'mongodb://localhost:27017/googlebooksDB';
const dbConnection = mongoose.connect(process.env.MONGODB_URI || dbURI, {useNewUrlParser:true,useUnifiedTopology: true});

const BookSchema = new Schema({
  Title: String,
  Authors: Array,
  Description: String,
  Thumbnail: String,
  Link: String
})

var Book = mongoose.model('Book', BookSchema, 'books');


app.use(express.json());

app.post('/search/books', (req, res) => {
  // console.log(req.body)
  var query = req.body.search;
  // console.log({ query: query })
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then(data => dataConversion(data, res))
    .catch(err => {
      console.log(err)
      res.send({
        Successful: false,
        Results: "None To Display"
      })
    })
})

app.post('/save/book', (req, res) => {
  console.log('Saving a Book');
})

app.post('/books/save', (req, res) => {
  console.log('Save A Book Route')
  console.log({RequestParameters: req.body});
  Book.create(req.body, function(err, success) {
    console.log({successMessage: success});
  })
  res.send({
    Successful: true,
    Message: 'Save A Book Route'
  });
})

app.get('/saved/books', (req, res) => {
  Book.find(function(err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log(data);
      res.send(data);
    }
    
  })
})

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server Started On Port: ${port}`);
});

function dataConversion(data, response) {
      const books = data.data.items;
      console.log(books.length);

      const results = [];
      for (var i = 0; i < books.length; i++) {
        results.push({
          ID: books[i].id,
          Title: books[i].volumeInfo.title,
          Description: books[i].volumeInfo.description,
          Authors: books[i].volumeInfo.authors,
          Thumbnail: books[i].volumeInfo.imageLinks.smallThumbnail
        })
      }
      response.send({
        Successful: true,
        Results: results
      });
      console.log(results)
}




