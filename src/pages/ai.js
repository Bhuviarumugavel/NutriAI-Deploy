// pages/chat.js (or ai.js)

import { useState } from 'react';

export default function ChatPage() {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    setResponse('');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userInput }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.reply) {
      setResponse(data.reply);
    } else {
      setResponse(`Error: ${data.error}`);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>💬 Chat with NutriAI</h1>
      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        rows={4}
        cols={50}
        placeholder="Ask something about nutrition..."
      />
      <br />
      <button onClick={sendMessage} disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </button>
      <div style={{ marginTop: '1rem', whiteSpace: 'pre-wrap' }}>
        <strong>Response:</strong> <br /> {response}
      </div>
    </div>
  );
}

