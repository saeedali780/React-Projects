import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';

const apiKey = "";

const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]); // {role: 'user'|'ai', text: string}
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    try {
      const response = await axios({
        method: 'POST',
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          contents: [{
            parts: [{ text: input }]
          }]
        }
      });
      const aiText = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text || "[No response]";
      setMessages((prev) => [...prev, { role: 'ai', text: aiText }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'ai', text: "[Error: Could not get response]" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)',
      backgroundColor: '#0a0a23',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Orbitron, Inter, Roboto, Arial, sans-serif',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet" />
      <div style={{
        width: '100%',
        maxWidth: 540,
        height: '90vh',
        minHeight: 400,
        background: 'rgba(20, 20, 40, 0.95)',
        borderRadius: 22,
        boxShadow: '0 0 32px 0 #00f0ff55',
        border: '2px solid #00f0ff',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}>
        <Header />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          <ChatWindow messages={messages} loading={loading} />
        </div>
        <ChatInput
          value={input}
          onChange={setInput}
          onSend={sendMessage}
          loading={loading}
        />
      </div>
      <style>{`
        html, body, #root { height: 100%; margin: 0; padding: 0; }
        @media (max-width: 600px) {
          .chat-app-main-container {
            max-width: 100vw !important;
            min-height: 100vh !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }
        }
        @media (max-width: 600px) {
          .chatArea {
            max-height: 50vh !important;
            height: 50vh !important;
            padding: 8px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default App;