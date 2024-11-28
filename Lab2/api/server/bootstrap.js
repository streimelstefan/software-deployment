const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/increment', (req, res) => {
  const incrementValue = parseInt(req.query.value, 10) || 1; // Default to 1 if no value is provided
  if (isNaN(incrementValue)) {
    return res.status(400).json({ error: 'Invalid increment value' });
  }

  res.json({ count: incrementValue + 1 });
});

module.exports = app;