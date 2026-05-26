const Sidebar = () => {
  return (
    <div className="w-64 bg-[#111827] border-r border-gray-800 p-6">
      <h1 className="text-2xl font-bold text-white mb-10">
        CloudPulse
      </h1>

      <nav className="space-y-4">
        <div className="text-gray-300 hover:text-white cursor-pointer">
          Dashboard
        </div>

        <div className="text-gray-300 hover:text-white cursor-pointer">
          Metrics
        </div>

        <div className="text-gray-300 hover:text-white cursor-pointer">
          Recommendations
        </div>

        <div className="text-gray-300 hover:text-white cursor-pointer">
          Alerts
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;