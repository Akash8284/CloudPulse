const MetricCard = ({ title, value, unit }) => {
  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl border border-gray-800">
      <h2 className="text-gray-400 mb-3">
        {title}
      </h2>

      <p className="text-3xl font-bold text-white">
        {value}
        <span className="text-lg ml-1 text-gray-400">
          {unit}
        </span>
      </p>
    </div>
  );
};

export default MetricCard;