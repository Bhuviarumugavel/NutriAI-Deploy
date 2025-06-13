// pages/index.js
import React from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-green-50">
      {/* Centered Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-green-900 mb-4">
          NutriAI Advisor
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Welcome to NutriAI Advisor, your smart dietary companion.
        </p>

        <button
          className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 mb-8"
          onClick={() => router.push('/tracker')}
        >
          Get Started
        </button>

        <p className="font-semibold text-md text-gray-800 mb-2">
          To know more about this app
        </p>

        <button
          className="bg-white hover:bg-green-100 text-green-800 border border-green-600 font-semibold px-6 py-2 rounded-md shadow-md transition duration-300"
          onClick={() => router.push('/about')}
        >
          About
        </button>
      </main>

      <footer className="bg-green-800 text-white text-center text-sm py-4">
        <p>© 2025 NutriAI Advisor. All rights reserved.</p>
        <p>Created by Bhuvaneshwari A</p>
      </footer>
    </div>
  );
};

export default HomePage;