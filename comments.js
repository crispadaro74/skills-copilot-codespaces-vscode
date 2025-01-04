// Create web server
// 1. Create a web server that listens on port 3000
// 2. Create a route for GET /comments
// 3. When the route is hit, read the comments.json file and respond with the contents of the file
// 4. If there is an error reading the file, respond with a 500 status code and an error message
// 5. Test the route with Postman

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.get('/comments', (req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading comments file');
    } else {
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});