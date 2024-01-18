// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store');
    next();
});

// Define a route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, Nayan here!',
  name: 'Nayan',
  country: 'USA',
  age: 21,
  married: true,
  identification: '1234567890',
  gender: 'male',
  address: '123 Main St, Anytown USA',
  timestamp: Date.now()
})
}).get('/about', (req, res) => {
  res.send('This is the About page');
})

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
console.log('Hello, Nayan here2!');
