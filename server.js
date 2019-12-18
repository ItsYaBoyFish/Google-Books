// Express Dependencies
const express = require('express');
const port = process.env.PORT || 5000;
const app = express();

// Mongoose Dependecies
const mongoose = require('mongoose');

app.use(express.json());

app.get("/api/books", (req, res) => {
  const books = [
    {id: 1, Title: 'Harry Potter', Authors: ['JK Rowling'], Description: 'Harry Potter Book', Image: 'image source goes here.', Link: 'google.com'},
    {id: 2, Title: 'Dr. Suess', Authors: ['Author 2'], Description: 'Dr. Suess', Image: 'image source goes here.', Link: 'google.com'},
    {id: 3, Title: 'Hunger Games', Authors: ['Author 3'], Description: 'Hunger Games Book', Image: 'image source goes here.', Link: 'google.com'}
  ]
  res.json(books);
});





// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksDB",{useNewUrlParser:true,useUnifiedTopology: true});

app.listen(port, () => {
  console.log(`Server Started On Port: ${port}`);
});