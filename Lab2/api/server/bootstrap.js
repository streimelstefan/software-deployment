const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let counter = 0;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/increment', (req, res) => {
  counter++;
  res.json({ count: counter });
});

app.get('/count', (req, res) => {
  res.json({ count: counter });
});

module.exports = app;