// backend/src/routes/resume.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const resumeController = require('../controllers/resumeController');

const router = express.Router();

// Set up multer for file upload
const upload = multer({ dest: path.join(__dirname, '../../uploads') });

// Route for uploading and processing the resume
router.post('/upload', upload.single('resume'), resumeController.processResume);

module.exports = router;
