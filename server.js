// Express Dependencies
const express = require('express');
const port = process.env.PORT || 5000;
const app = express();
const axios = require('axios');

// Mongoose Dependecies
const mongoose = require('mongoose');

app.use(express.json());

// app.get("/api/books", (req, res) => {
//   const books = [
//     {id: 1, Title: 'Harry Potter', Authors: ['JK Rowling'], Description: 'Harry Potter Book', Image: 'image source goes here.', Link: 'google.com'},
//     {id: 2, Title: 'Dr. Suess', Authors: ['Author 2'], Description: 'Dr. Suess', Image: 'image source goes here.', Link: 'google.com'},
//     {id: 3, Title: 'Hunger Games', Authors: ['Author 3'], Description: 'Hunger Games Book', Image: 'image source goes here.', Link: 'google.com'}
//   ]
//   res.json(books);
// });



app.get('/books', (req, res) => {
  console.log("Home Route Hit")
  axios.get('https://www.googleapis.com/books/v1/volumes?q=potter')
     .then(data => dataConversion(data, res))
     .catch(err => {
       res.send({
         Successful: false,
         Results: "None To Display"
       })
     })
})

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

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksDB",{useNewUrlParser:true,useUnifiedTopology: true});

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