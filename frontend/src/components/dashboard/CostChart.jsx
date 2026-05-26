import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { costData } from "../../data/costData";

const CostChart = () => {
  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl border border-gray-800">
      <h2 className="text-white text-xl font-semibold mb-6">
        Weekly Cost Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={costData}>
          <XAxis dataKey="day" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="cost"
            stroke="#8b5cf6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CostChart;