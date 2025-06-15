import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, age, gender, healthCondition, meal } = req.body;

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: "Missing Gemini API Key" });
  }

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `The user ${name}, age ${age}, gender ${gender}, health condition: ${healthCondition} submitted this meal description: ${meal}. 
    Provide a nutritional summary and food suggestions for the next meal.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ result: text });
  } catch (error) {
    console.error("Gemini error:", error);
    res.status(500).json({ error: "Failed to get response from Gemini API: " + error });
  }
}
