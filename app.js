// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Shrek is forever alone');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
