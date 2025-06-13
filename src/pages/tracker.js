// pages/tracker.js
import React from 'react';

const Tracker = () => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">Start Your Journey</h2>

        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
          <input type="number" placeholder="Age" className="w-full p-2 border rounded" />

          <select className="w-full p-2 border rounded">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <select className="w-full p-2 border rounded">
            <option value="normal">Normal</option>
            <option value="condition">Health Condition (Specify Below)</option>
          </select>
          <input type="text" placeholder="Specify Disease (if any)" className="w-full p-2 border rounded" />

          <div className="text-sm text-gray-600">Upload meal via:</div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="text" placeholder="Meal as text" className="flex-1 p-2 border rounded" />
            <input type="file" accept="image/*" className="flex-1 p-2 border rounded" />
            <button className="flex-1 p-2 bg-green-600 text-white rounded">Voice Input</button>
          </div>

          <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg mt-6">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tracker;


