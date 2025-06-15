import { useState } from "react";

export default function ChatPage() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    healthCondition: "",
    inputText: "",
  });
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);
    if (data.result) setResponse(data.result);
    else setResponse("❌ Failed to fetch result.");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">NutriAI Advisor</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" className="w-full p-2 border" onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" className="w-full p-2 border" onChange={handleChange} required />
        <select name="gender" className="w-full p-2 border" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input name="healthCondition" placeholder="Health Condition (e.g. diabetes)" className="w-full p-2 border" onChange={handleChange} required />
        <textarea name="inputText" placeholder="Enter food description" className="w-full p-2 border" rows={3} onChange={handleChange} required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </form>

      {response && (
        <div className="mt-6 p-4 border bg-gray-50 rounded">
          <h2 className="text-xl font-semibold mb-2">Hello {form.name} 👋</h2>
          <pre className="whitespace-pre-wrap">{response}</pre>
        </div>
      )}
    </div>
  );
}


