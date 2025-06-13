import React from 'react';
import { useRouter } from 'next/router';

const CTA = () => {
  const router = useRouter();

  return (
    <section className="bg-green-100 py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Start Your Nutrition Journey Today</h2>
      <p className="mb-6 text-gray-700">Track your meals and reach your health goals with AI guidance.</p>
      <button
        className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
        onClick={() => router.push('/tracker')}
      >
        Start Your Journey
      </button>
    </section>
  );
};

export default CTA;

