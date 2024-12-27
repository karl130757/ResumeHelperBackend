const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const resumeRoutes = require('./routes/resume');

dotenv.config();  // Load environment variables from .env

const app = express();

// Middleware setup
app.use(cors());              // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json());   // Parse incoming JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

// Routes setup
app.use('/api/resumes', resumeRoutes); // Mount the resume routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;
