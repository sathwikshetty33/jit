const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON

let user = { name: "John", age: 20 };

// GET request
app.get('/user', (req, res) => {
  res.json(user);
});

// PUT request
app.put('/user', (req, res) => {
  user = req.body; // update user data
  res.json({ message: "User updated", newUser: user });
});

app.listen(3000, () => console.log('Server running on port 3000'));
