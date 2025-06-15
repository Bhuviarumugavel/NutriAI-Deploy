// src/pages/api/gemini.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { userInfo, foodInput } = req.body;

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const prompt = `
You are NutriAI. Analyze the following food input: "${foodInput}" 
for user: Name: ${userInfo.name}, Age: ${userInfo.age}, Gender: ${userInfo.gender}, Condition: ${userInfo.condition}.
Return:
1. Nutrition analysis (calories, protein, carbs, fat, etc)
2. Remaining nutrition needed for today
3. Suggestions for next meal based on their health condition.
`;

    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + apiKey, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini';
    res.status(200).json({ reply });

  } catch (error) {
    console.error('Gemini API error:', error);
    res.status(500).json({ error: 'Failed to connect to Gemini' });
  }
}
