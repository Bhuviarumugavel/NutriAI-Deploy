require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent("Say hello from NutriAI using Gemini!");
    const response = await result.response;
    const text = response.text();
    console.log("✅ Gemini Response:", text);
  } catch (err) {
    console.error("❌ Gemini Error:", err);
  }
}

run();







