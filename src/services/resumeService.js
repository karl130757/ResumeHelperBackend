// backend/src/services/resumeService.js
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const path = require('path');

async function processResume(file, jobDescription) {
  const formData = new FormData();
  formData.append('resume_file', fs.createReadStream(file.path));
  formData.append('job_description', jobDescription || '');

  

  try {
    // Make request to the Python microservice
    const response = await axios.post(process.env.MICRO_SERVICE_URL, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

   
    return { analysisResult: response.data};
  } catch (error) {
    console.error('Error contacting Python microservice:', error.message);
    throw new Error('Error processing resume');
  }
}

module.exports = { processResume };
