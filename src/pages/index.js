export default function Home() {
  return (
    <div className="min-h-screen bg-green-100 text-gray-800 font-sans">
      <header className="bg-green-600 text-white py-10 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold">NutriAI Advisor</h1>
          <p className="mt-3 text-lg">Your smart nutrition assistant</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-md">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">Welcome to NutriAI</h2>
        <p className="text-lg mb-4">
          NutriAI helps you track your meals and activities and recommends the best foods to meet your nutritional goals.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
          <p className="text-green-700 font-medium">
            Start by entering what you've eaten today, and NutriAI will suggest what to eat next!
          </p>
        </div>

        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg transition">
          Get Started
        </button>
      </main>

      <footer className="text-center mt-10 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} NutriAI. All rights reserved.
      </footer>
    </div>
  );
}
