// pages/about.js
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-6 py-12 text-center">
      <h2 className="text-3xl font-bold text-green-900 mb-6">About NutriAI Advisor</h2>
      <ul className="text-left text-lg text-gray-800 space-y-4 max-w-2xl list-disc list-inside">
        <li>🧑‍⚕️ Enter your name, age, gender, and health condition.</li>
        <li>📋 Specify any disease if not in normal condition.</li>
        <li>🍽️ Record meals: morning, afternoon, evening, and night.</li>
        <li>🧮 Calculates your meal's nutritional value.</li>
        <li>🥗 Suggests foods to meet daily nutrition goals.</li>
        <li>🔍 Recommendations based on diet and health issues.</li>
        <li>⏰ Sends water & meal time reminders for your health.</li>
      </ul>
    </div>
  );
};

export default About;
