// backend/src/services/resumeService.js
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const path = require('path');

async function processResume(file, job_description, job_title, job_skills, job_experience) {
  const formData = new FormData();
  formData.append('resume', fs.createReadStream(file.path));
  formData.append('job_description', job_description || '');
  formData.append('job_title', job_title || '');
  formData.append('job_skills', job_skills || '');
  formData.append('job_experience', job_experience || 0);

  

  try {
    // Make request to the Python microservice
    const response = await axios.post(process.env.MICRO_SERVICE_URL, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error contacting Python microservice:', error.message);
    throw new Error('Error processing resume');
  }
}

module.exports = { processResume };
