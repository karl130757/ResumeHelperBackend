// backend/src/controllers/resumeController.js
const resumeService = require('../services/resumeService');

async function processResume(req, res, next) {
  const { file } = req;
  // const { job_description, job_title, job_skills, job_experience } = req.body;

  const job_description = null;
  const job_title = null;
  const job_skills = null;
  const job_experience = null;

  if (!file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    // Call the service to process the resume
    const result = await resumeService.processResume(file, job_description, job_title, job_skills, job_experience);
    res.json(result);
  } catch (error) {
    next(error);  // Pass errors to the error-handling middleware
  }
}

module.exports = { processResume };
