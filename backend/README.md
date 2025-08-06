# AI Email Sender Backend

A Node.js backend server that provides AI-powered email generation capabilities using Google's Gemini API.

## Features

- AI-powered email generation using Google's Gemini API
- RESTful API endpoints for email generation
- CORS support for frontend integration
- Environment variable configuration

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Google Gemini API Key

## Installation

1. Clone the repository
2. Navigate to the backend directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the backend directory with the following content:
   ```
   PORT=5000
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

## Running the Server

1. Start the server:
   ```bash
   node index.js
   ```

2. The server will start on port 5000 (or the port specified in your .env file)
   ```
   Server running on port 5000
   ```

## API Endpoints

### GET /
- Returns a simple status message
- Response: "AI Email Sender Backend Running"

### POST /api/generate
- Generates an AI-powered email based on the provided prompt
- Request Body:
  ```json
  {
    "prompt": "Your email topic here"
  }
  ```
- Response:
  ```json
  {
    "email": "Generated email content"
  }
  ```

## Project Structure

```
backend/
├── index.js          # Main server file
├── .env              # Environment variables (create this)
└── package.json      # Project dependencies
```

## Environment Variables

- `PORT`: Port number for the server to run on (default: 5000)
- `GEMINI_API_KEY`: Your Google Gemini API key

## Security Notes

- Keep your API keys secure and never commit them to version control
- Always validate input data before processing
- The server uses CORS to allow requests from localhost:3000 by default

## Troubleshooting

1. If the server doesn't start:
   - Check if the required dependencies are installed
   - Verify that the .env file exists and contains the correct API key
   - Ensure no other process is using the specified port

2. If email generation fails:
   - Verify that your Gemini API key is valid
   - Check the network connection
   - Ensure the prompt is not empty

## License

[Add your license information here]

## Contributing

[Add contribution guidelines if applicable]
