# AI Email Generator

A web application that uses AI to generate professional emails and send them directly to recipients. The application is built with a modern tech stack and leverages Google's Gemini AI for email generation.

## Features

- AI-powered email generation using Google's Gemini API
- User-friendly interface for entering email topics and recipients
- Real-time email preview
- Direct email sending capability
- Status tracking for generation and sending processes
- Modern and responsive UI

## Tech Stack

### Frontend
- React.js
- Axios for API communication
- Modern UI components
- Responsive design

### Backend
- Node.js with Express
- Google Gemini API integration
- CORS enabled for frontend communication
- Environment variable configuration

## Project Structure

```
project/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/
│   │   └── App.jsx
│   ├── package.json
│   └── ...
│
└── backend/          # Node.js backend server
    ├── index.js      # Main server file
    ├── package.json  # Backend dependencies
    └── vercel.json   # Vercel deployment configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Google Gemini API Key

### Installation

1. Clone the repository
2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
4. Create a `.env` file in the backend directory:
   ```
   PORT=5000
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```
2. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

The application will be available at `https://gen-ai-task-lumio-partners.vercel.app/`

## Deployment

The backend is configured for deployment on Vercel. The frontend can be deployed independently or integrated with the backend deployment.

### Backend Deployment

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. The backend will be automatically deployed using the configuration in `vercel.json`

## Environment Variables

The backend requires the following environment variables:

- `PORT`: Port number for the server to run on (default: 5000)
- `GEMINI_API_KEY`: Your Google Gemini API key

## API Endpoints

### Backend Endpoints

- `GET /`: Health check endpoint
- `POST /api/generate`: Generate AI-powered email
- `POST /api/send`: Send generated email

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Support

For support, please contact [your email here] or open an issue in the repository.
