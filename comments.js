// Create web server
const express = require('express');
const app = express();
// Use middleware to parse the body of the request
app.use(express.json());
// Use middleware to serve static files
app.use(express.static('public'));

// Create a new array to store comments
const comments = [];

// Create a new comment
app.post('/comments', (req, res) => {
  // Get the comment from the request body
  const comment = req.body;
  // Add the comment to the comments array
  comments.push(comment);
  // Send the comment back as the response
  res.json(comment);
});

// Get all comments
app.get('/comments', (req, res) => {
  // Send the comments array back as the response
  res.json(comments);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});