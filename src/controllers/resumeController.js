// backend/src/controllers/resumeController.js
const resumeService = require('../services/resumeService');

async function processResume(req, res, next) {
  const { file } = req;
  const { jobDescription } = req.body;

  if (!file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    // Call the service to process the resume
    const result = await resumeService.processResume(file,  jobDescription);
    res.json(result);
  } catch (error) {
    console.log(error);
    next(error);  // Pass errors to the error-handling middleware
  }
}

module.exports = { processResume };
