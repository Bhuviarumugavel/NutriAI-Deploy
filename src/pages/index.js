export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-white to-green-50 text-gray-900">
      {/* Header */}
      <header className="text-center py-16 bg-green-100 shadow-lg">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">NutriAI Advisor</h1>
        <p className="text-xl font-medium">Smart Nutrition for a Healthier Life</p>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <ul className="flex justify-center gap-10 py-4 text-lg font-semibold text-green-700">
          <li><a href="#about" className="hover:text-green-500">About</a></li>
          <li><a href="#features" className="hover:text-green-500">Features</a></li>
          <li><a href="#how-it-works" className="hover:text-green-500">How It Works</a></li>
          <li><a href="#cta" className="hover:text-green-500">Download</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="px-6 py-16 max-w-6xl mx-auto space-y-24">

        {/* About Section */}
        <section id="about" className="text-center">
          <h2 className="text-3xl font-bold mb-4">🌱 About NutriAI Advisor</h2>
          <p className="text-lg max-w-3xl mx-auto">
            NutriAI Advisor is your intelligent nutrition companion. It analyzes your food intake,
            understands your health needs, and delivers personalized recommendations using AI.
            Whether you're focused on fitness, managing diabetes, or just eating better, NutriAI adapts to you.
          </p>
        </section>

        {/* Features */}
        <section id="features">
          <h2 className="text-3xl font-bold text-center mb-12">✨ Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: '📸 Multi-Mode Food Logging',
                desc: 'Log meals with voice, photo, or text. Simple, fast, and intuitive.'
              },
              {
                title: '📊 Smart Nutrition Insights',
                desc: 'Track calories, macros, and micros tailored to your lifestyle.'
              },
              {
                title: '❤️ Health-Focused Advice',
                desc: 'Receive food suggestions for conditions like diabetes or hypertension.'
              },
              {
                title: '🔔 Daily Reminders',
                desc: 'Stay on track with hydration, meal, and sleep alerts.'
              }
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-700">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="text-center">
          <h2 className="text-3xl font-bold mb-6">⚙️ How It Works</h2>
          <ol className="text-left max-w-2xl mx-auto space-y-4 list-decimal list-inside text-lg">
            <li><strong>Set Up Profile:</strong> Input age, goals, and health data.</li>
            <li><strong>Log Meals:</strong> Speak, type, or snap your food.</li>
            <li><strong>Review Stats:</strong> Understand what you’re eating.</li>
            <li><strong>Follow Guidance:</strong> Use AI tips and health suggestions.</li>
            <li><strong>Stay Consistent:</strong> Get nudges to eat well daily.</li>
          </ol>
        </section>

        {/* CTA */}
        <section id="cta" className="bg-green-100 text-center py-16 rounded-xl shadow-inner">
          <h2 className="text-3xl font-bold mb-4">🎯 Start Your Health Journey</h2>
          <p className="text-lg mb-6">Join thousands taking control of their nutrition.</p>
          <a href="#" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition">
            Download Now
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-600 border-t mt-12">
        © 2025 NutriAI Advisor · Created by Bhuvaneshwari A
      </footer>
    </div>
  );
}
