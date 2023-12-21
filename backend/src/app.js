const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// const api = require('./api');
const shopping_listRouter = require('./routes/shoppingList');

app.use('/api/shoppingList', shopping_listRouter);

// Define a route for the root URL '/'
app.get('/', (req, res) => {
  res.send('🦄🌈✨👋🌎 Hello Autumn🌏✨🌈🦄');
});

// Define a route for the '/api' endpoint http://localhost:4000/api
app.get('/api', (req, res) => {
  res.send('My Shopping List!!');
});

// Export the Express application to be used in other modules
module.exports = app;
