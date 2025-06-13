const FeaturesCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Track Your Meals</h3>
        <p className="text-gray-600">Easily log and manage your daily food intake.</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-2">AI Recommendations</h3>
        <p className="text-gray-600">Receive personalized meal suggestions powered by AI.</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Nutritional Goals</h3>
        <p className="text-gray-600">Stay on track with your health and fitness targets.</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
