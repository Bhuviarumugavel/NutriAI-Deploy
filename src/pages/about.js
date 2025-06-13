// pages/about.js
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-6">About NutriAI Advisor</h2>
        <ul className="text-left text-lg text-gray-800 leading-relaxed list-disc pl-6 space-y-4">
          <li>🧑 Enter personal details: name, age, gender, health condition.</li>
          <li>🍽️ Input meals (morning, afternoon, evening, night).</li>
          <li>📊 Analyze nutrition in consumed food.</li>
          <li>🥗 Get suggested food items based on diet and condition.</li>
          <li>💧 Receive water intake and food reminders.</li>
          <li>🎤 Upload meals using text, images, or voice input.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;