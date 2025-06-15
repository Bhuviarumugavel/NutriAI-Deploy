// src/pages/index.js
import { useState } from 'react';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [healthCondition, setHealthCondition] = useState('');
  const [meal, setMeal] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handleSubmit = async () => {
  setLoading(true);
  setResult('');
  try {
    const res = await fetch('/api/analyze', {
      method: 'POST', // ✅ THIS is how you set POST method
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        age,
        gender,
        healthCondition,
        meal,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setResult(data.result); // ✅ Display result
    } else {
      alert('Something went wrong: ' + (data.error || 'Unknown error'));
    }
  } catch (error) {
    alert('Something went wrong.');
    console.error('Frontend error:', error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#eaffea' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#004d1a', color: 'white', padding: '1rem', textAlign: 'center' }}>
        <h1>NutriAI Advisor</h1>
      </header>

      {/* Subheader */}
      <div style={{ backgroundColor: '#66bb6a', padding: '1rem', textAlign: 'center' }}>
        <p>Your personal AI nutrition assistant for a healthier life.</p>
      </div>

      {/* Main content */}
      <main style={{ flex: 1, padding: '2rem', textAlign: 'center' }}>
        {!showForm && (
          <>
            <h2 style={{ color: '#2e7d32' }}>Start Your Journey</h2>
            <button onClick={() => setShowForm(true)} style={{ margin: '1rem' }}>Start Now</button>
            <button onClick={() => setShowAbout(!showAbout)}>About</button>
            {showAbout && (
              <ul style={{ marginTop: '1rem', textAlign: 'left', maxWidth: '600px', marginInline: 'auto' }}>
                <li>Analyzes your meal and gives nutritional breakdown</li>
                <li>Personalized suggestions based on your health</li>
                <li>AI-powered recommendations for balanced diet</li>
              </ul>
            )}
          </>
        )}

        {/* Form Section */}
        {showForm && (
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
            <label>Name:</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} style={{ width: '100%' }} />
            <br />

            <label>Age:</label>
            <input type="number" value={age} onChange={e => setAge(e.target.value)} style={{ width: '100%' }} />
            <br />

            <label>Gender:</label>
            <select value={gender} onChange={e => setGender(e.target.value)} style={{ width: '100%' }}>
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <br />

            <label>Health Condition:</label>
            <select value={healthCondition} onChange={e => setHealthCondition(e.target.value)} style={{ width: '100%' }}>
              <option value="">Select Health Condition</option>
              <option>Normal</option>
              <option>Diabetes</option>
              <option>Hypertension</option>
              <option>Obesity</option>
            </select>
            <br />

            <label>Describe your meal:</label>
            <textarea value={meal} onChange={e => setMeal(e.target.value)} rows="5" style={{ width: '100%' }} />
            <br />

            <button onClick={handleSubmit} style={{ marginTop: '1rem' }}>Calculate</button>

            {loading && <p style={{ color: 'gray' }}>⏳ AI is analyzing your meal...</p>}

            {result && (
              <div style={{ backgroundColor: '#c8e6c9', marginTop: '1rem', padding: '1rem', borderRadius: '5px', whiteSpace: 'pre-wrap' }}>
                <strong>AI Feedback:</strong>
                <p>{result}</p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#004d1a', color: 'white', textAlign: 'center', padding: '1rem' }}>
        © 2025 NutriAI Advisor. All rights reserved. CREATED BY BHUVANESHWARI A
      </footer>
    </div>
  );
}
