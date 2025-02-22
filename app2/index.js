const express = require('express');
const app = express();
const port = 4000;

app.get('/message', (req, res) => {
  res.send('Hello from App 2!');
});

app.listen(port, () => {
  console.log(`App 2 listening on port ${port}`);
});