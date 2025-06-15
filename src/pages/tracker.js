import React, { useState } from 'react';

export default function Tracker() {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userMessage: userInput })
    });
    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Nutrition Analyzer</h1>
      <textarea
        className="w-full max-w-xl h-32 p-4 border rounded shadow"
        placeholder="Describe your meal or condition..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        className="mt-4 bg-green-700 text-white px-6 py-2 rounded shadow"
        onClick={handleSend}
      >
        Analyze
      </button>

      {response && (
        <div className="mt-8 bg-white p-6 rounded shadow max-w-xl w-full">
          <h2 className="text-xl font-semibold text-green-800 mb-2">AI Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}


