// pages/api/chat.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { name, age, gender, healthCondition, inputText } = req.body;

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'Missing OpenAI API Key' });
  }

  const prompt = `
User Info:
- Name: ${name}
- Age: ${age}
- Gender: ${gender}
- Health Condition: ${healthCondition}

Food Input: ${inputText}

Please analyze the nutrition of the food and suggest what to eat next.
`;

  try {
    const completion = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful nutrition assistant.' },
          { role: 'user', content: prompt },
        ],
      }),
    });

    const data = await completion.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    const result = data.choices?.[0]?.message?.content ?? 'No response from OpenAI.';
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ error: 'OpenAI request failed.', detail: err.message });
  }
}


