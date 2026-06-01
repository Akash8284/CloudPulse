const MetricCard = ({
  title,
  value,
  change,
}) => {

  return (

    <div className="bg-[#111c44] rounded-3xl p-6 border border-[#1e293b] hover:border-purple-500 transition duration-300">

      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h2 className="text-5xl font-bold text-white mt-4">
        {value}
      </h2>

      <div className="flex items-center justify-between mt-6">

        <p className="text-green-400 font-medium">
          ↑ {change}
        </p>

        <div className="w-20 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-30"></div>

      </div>

    </div>
  );
};

export default MetricCard;