const express = require('express');
//const bodyParser = require('body-parser');

const app = express();
const SERVER_PORT = process.env.PORT || 3000;

// Use body-parser middleware to parse incoming request bodies
//app.use(bodyParser.urlencoded({ extended: true }));

// Serve an HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/products', (req, res) => {
  res.sendFile(__dirname + '/views/products.html');
});

/*
// Handle form submission
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const id = req.body.id;
  const location = req.body.location;
  const year = req.body.year;

  // You can now use the extracted form data (name and email) as needed
  res.send(`Received form submission! Name: ${name}, Email: ${email}, ID: ${id}, Location: ${location}, Year: ${year}`);
});

*/

// Start the server
//const PORT = 3000;
app.listen(SERVER_PORT, () => {
  console.log(`Server is running at http://localhost:${SERVER_PORT}`);
});

