import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
// import { groq } from '@ai-sdk/groq';
// import { streamText } from 'ai';
// import OpenAI from "openai";
// Load environment variables
import { GoogleGenAI } from "@google/genai";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('AI Email Sender Backend Running');
});

// import axios, { formToJSON } from 'axios';
import nodemailer from 'nodemailer';
// Initialize OpenAI
// const client = new OpenAI({
//   apiKey: process.env.GROQ_API_KEY,
//   baseURL: "https://api.groq.com/openai/v1",
// });
// Generate email using OpenAI
const ai = new GoogleGenAI({ apiKey : process.env.GEMINI_API_KEY  });
// console.log(ai)
app.post('/api/generate', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt required' });
  const promptTemplate = `Write a professional, well-structured email about "[${prompt}]". The email should:

only give one template

don't create subject

Address the recipient politely (use their title or 'Dear [Name]')

Briefly explain the purpose of the email in the opening

Provide relevant details, context, or instructions as needed

Use concise and respectful language

Include a closing statement or call-to-action (if appropriate)

Sign off with a polite closing and sender’s name

The tone should match the context (formal or semi-formal, as appropriate).`;
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: promptTemplate,
    });
    console.log(response.text);
    const email = response.text;
    return res.status(200).json({ email });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to generate email', details: err.message });
  }
});


// Send email using nodemailer
app.post('/api/send', async (req, res) => {
  const { recipients, email , prompt} = req.body;
  console.log(recipients, email);
  if (!recipients || !email) return res.status(400).json({ error: 'Recipients and email content required' });

  try {
    const transporter =  nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port:Number(process.env.EMAIL_PORT),
      // secure : false,
      // debug:true,
      auth: {
        user: process.env.EMAIL_SERVICE,
        pass: process.env.EMAIL_PASS
      }
    });
    const mailOptions = {
      from:process.env.SENDER_EMAIL,
      to: recipients,
      subject: prompt,
      text: email
    };
    await transporter.sendMail(mailOptions);
    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to send email', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
