import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [recipients, setRecipients] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const [status, setStatus] = useState('');

  const handleGenerate = async () => {
    setStatus('Generating email...');
    try {
      const res = await axios.post('https://gen-ai-task-lumio-partners.onrender.com:10000/api/generate', { prompt });
      setGeneratedEmail(res.data.email);
      setEmailContent(res.data.email);
      setStatus('Email generated! You can  below.');
    } catch (err) {
      setStatus('Failed to generate email.');
    }
  };

  const handleSend = async () => {
    setStatus('Sending email...');
    try {
      await axios.post('https://gen-ai-task-lumio-partners.onrender.com:10000/api/send', { recipients, email: emailContent  , prompt});
      setStatus('Email sent!');
    } catch (err) {
      setStatus('Failed to send email.');
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>AI Generated Email Sender</h2>
      <div>
        <label>Recipient:</label><br />
        <input
          type="text"
          value={recipients}
          onChange={e => setRecipients(e.target.value)}
          style={{ width: '100%', marginBottom: 12 }}
        />
      </div>
      <div>
        <label>Email Subject Prompt (Please write it properly it should be your email subject):</label><br />
        <textarea
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          rows={3}
          style={{ width: '100%', marginBottom: 12 }}
        />
      </div>
      <button onClick={handleGenerate} disabled={!prompt}>Generate Email</button>
      <div style={{ margin: '20px 0' }}>
        <label>Email Content (editable):</label><br />
        <textarea
          value={emailContent}
          onChange={e => setEmailContent(e.target.value)}
          rows={20}
          style={{ width: '100%' }}
        />
      </div>
      <button onClick={handleSend} disabled={!recipients || !emailContent}>Send Email</button>
      <div style={{ marginTop: 20, color: '#555' }}>{status}</div>
    </div>
  );
}
