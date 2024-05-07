const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require("./routes/route");
require("dotenv").config();

const connectionString = process.env.Mongo_Connection_String;

// MongoDB connection
mongoose
  .connect(connectionString)
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(bodyParser.json());

// For loggin on server for debugging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Logging middleware for response
app.use((req, res, next) => {
  const start = Date.now();
  const originalSend = res.send;
  res.send = function (body) {
    const resTime = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${res.statusCode} ${req.method} ${req.url} res Time: ${resTime}ms res:`, body);
    originalSend.call(this, body);
  };
  next();
});

// To clear terminal
console.clear();

app.use("/", routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});