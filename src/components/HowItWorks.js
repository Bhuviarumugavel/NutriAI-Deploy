import React from 'react';

const HowItWorks = () => {
  return (
    <div className="mt-10 p-4 bg-gray-100 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">How It Works</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>Enter your food or activity</li>
        <li>NutriAI calculates your remaining nutrition</li>
        <li>Get personalized suggestions</li>
      </ol>
    </div>
  );
};

export default HowItWorks;
