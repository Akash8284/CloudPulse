import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const MonitoringChart = ({ data }) => {

  return (

    <div className="bg-[#111c44] rounded-3xl p-6 border border-[#1e293b]">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-bold text-white">
            Live Infrastructure Monitoring
          </h2>

          <p className="text-gray-400 mt-2">
            Real-time cloud activity tracking
          </p>

        </div>

        <div className="bg-[#1e293b] px-4 py-2 rounded-xl text-gray-300">
          Last 10 Updates
        </div>

      </div>

      <ResponsiveContainer width="100%" height={420}>

        <LineChart data={data}>

          <CartesianGrid
            stroke="#1e293b"
            strokeDasharray="4 4"
          />

          <XAxis
            dataKey="time"
            stroke="#94a3b8"
          />

          <YAxis stroke="#94a3b8" />

          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "12px",
              color: "white",
            }}
          />

          <Legend />

          <Line
            type="monotone"
            dataKey="apiRequests"
            stroke="#8b5cf6"
            strokeWidth={4}
            dot={false}
            animationDuration={800}
          />

          <Line
            type="monotone"
            dataKey="cost"
            stroke="#22c55e"
            strokeWidth={4}
            dot={false}
            animationDuration={800}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
};

export default MonitoringChart;