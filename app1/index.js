const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello from App 1!');
});

app.get('/backend-message', async (req, res) => {
  try {
    const response = await axios.get('http://app2:4000/message');
    res.send(`App 1 says: I got this from App 2 - ${response.data}`);
  } catch (error) {
    res.status(500).send('Error contacting App 2');
  }
});

app.listen(port, () => {
  console.log(`App 1 listening on port ${port}`);
});