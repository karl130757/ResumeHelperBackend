
# ResumeHelperBackend

## Overview
**ResumeHelperBackend** is a backend service designed to manage and streamline the interaction between users and the **ResumeHelperMicroService**. Built on the MEVN stack (MongoDB, Express.js, Vue.js, Node.js), this backend service facilitates request handling and API integration for an enhanced user experience. 

This backend serves as the intermediary, handling communication with the microservice, managing user data, and ensuring secure and efficient data processing.

## Features
- **Resume Upload and Storage**: Supports file uploads and stores resume metadata in MongoDB.
- **Integration with ResumeHelperMicroService**: Sends resume and job description data to the microservice and processes its feedback.
- **RESTful API**: Exposes endpoints for resume analysis requests and feedback retrieval.
- **Error Handling and Logging**: Robust error handling with descriptive responses and logging for debugging.

## Technologies Used
- **Express.js**: Framework for building RESTful APIs.
- **Node.js**: Runtime environment for building scalable backend logic.
- **Axios**: For seamless API requests to the ResumeHelperMicroService.
- **Multer**: Middleware for handling file uploads.

## API Endpoints
Below are the core API endpoints exposed by the backend:

### Resume Analysis Endpoints
- **POST /api/resume/upload**: Upload a resume and job description for analysis.
  - Request type: `multipart/form-data`
  - Parameters:
    - `resume` (file): The resume file.
    - `job_description` (file): The job description file.

- **POST /api/resume/analyze**: Submit resume and job description data to the ResumeHelperMicroService.
  ```json
  {
    "resume": "Python developer with 5 years of experience...",
    "job_description": "Looking for a Python developer..."
  }
  ```

- **GET /api/resume/results/:id**: Retrieve the analysis feedback for a given request.

### User Management Endpoints
- **GET /api/user/profile**: Retrieve the logged-in user's profile.
- **PUT /api/user/update**: Update user profile information.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ResumeHelperBackend.git
    cd ResumeHelperBackend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Configure environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    MICRO_SERVICE_URL=http://127.0.0.1:5000/api/analyze
    UPLOAD_DIR=./uploads
    PORT=3000
    ```
4. Start the server:
    ```bash
    npm start
    ```
5. Access the backend locally at: [http://127.0.0.1:5000](http://127.0.0.1:5000)

## Integration with ResumeHelperMicroService
The backend interacts with **ResumeHelperMicroService** by sending requests to its `/analyze` endpoint. The data is pre-processed and formatted before being sent, and the response is stored in MongoDB for easy retrieval.

### Example Request to the Microservice
```javascript
const axios = require('axios');

async function analyzeResume(resume, jobDescription) {
  const response = await axios.post(`${process.env.MICRO_SERVICE_URL}`, {
    resume,
    job_description: jobDescription
  });
  return response.data;
}
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
