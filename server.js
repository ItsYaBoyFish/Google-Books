// Express Dependencies
const express = require('express');
const port = process.env.PORT || 3001;
const app = express();


app.use(express.json());


app.get('/', (req, res) => {
  res.send({Test: 123});
})







app.listen(port, () => {
  console.log(`Server Started On Port: ${port}`);
})