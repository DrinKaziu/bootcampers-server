const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World'));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server is listening on port ${port}`));
