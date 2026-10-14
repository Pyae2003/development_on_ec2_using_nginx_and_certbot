const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
// Define MONGO_URI from environment variables or fallback
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/my_database';

// Middleware
app.use(cors());
app.use(express.json());

// Sample API Route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the Express backend!' });
});

// Connect to MongoDB, then start the server
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB successfully!');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));