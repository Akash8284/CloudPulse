const HealthScoreCard = ({ score }) => {

  let color = "text-green-400";

  if (score < 80) {
    color = "text-yellow-400";
  }

  if (score < 60) {
    color = "text-red-400";
  }

  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl border border-gray-800">

      <h2 className="text-white text-lg font-semibold mb-4">
        Infrastructure Health
      </h2>

      <div className={`text-5xl font-bold ${color}`}>
        {score}/100
      </div>

      <p className="text-gray-400 mt-3">
        Overall infrastructure stability
      </p>

    </div>
  );
};

export default HealthScoreCard;