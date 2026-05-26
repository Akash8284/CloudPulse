import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const MonitoringChart = ({ data }) => {
  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl border border-gray-800">
      <h2 className="text-white text-xl font-semibold mb-6">
        Live Infrastructure Monitoring
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid stroke="#334155" />

          <XAxis dataKey="time" stroke="#94a3b8" />

          <YAxis stroke="#94a3b8" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="apiRequests"
            stroke="#8b5cf6"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="cost"
            stroke="#22c55e"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonitoringChart;