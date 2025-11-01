const express = require('express');
const app = express();

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to Express Backend!');
});
 
app.get('/hello', (req, res) => {
  res.send('GET request received!');
});

app.post('/hello', (req, res) => {
  res.send('POST request received!');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
