import { useEffect, useState } from "react";

import {
  fetchRecommendations,
} from "../../services/recommendationService";

const RecommendationsPanel = () => {
  const [recommendations, setRecommendations] =
    useState([]);

  useEffect(() => {
    const getRecommendations = async () => {
      const data = await fetchRecommendations();

      setRecommendations(data);
    };

    getRecommendations();
  }, []);

  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl border border-gray-800">
      <h2 className="text-white text-xl font-semibold mb-6">
        Optimization Recommendations
      </h2>

      <div className="space-y-4">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="bg-[#0f172a] p-4 rounded-xl border border-gray-700"
          >
            <p className="text-purple-400 font-semibold">
              {item.type}
            </p>

            <p className="text-gray-300 mt-2">
              {item.message}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Severity: {item.severity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsPanel;