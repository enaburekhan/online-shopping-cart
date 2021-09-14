const express = require('express');
const mongoose = require('mongoose');

const app = express();

// middleware

// view engine


// database connection
const dbURI = 'mongodb+srv://shopping-cart:Eron1234@nodetuts.q7qx7.mongodb.net/shopping-cart';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
//  app.listen(3000);
 app.get('/', (req, res) => {
    res.send('hello world');
 });
// app.get('/smoothies', (req, res) => res.render('smoothies'));