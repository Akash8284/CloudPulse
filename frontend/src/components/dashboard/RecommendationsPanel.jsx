import { useEffect, useState } from "react";

import {
  fetchRecommendations,
} from "../../services/recommendationService";

const RecommendationsPanel = () => {

  const [recommendations,
    setRecommendations] = useState([]);

  useEffect(() => {

    const getRecommendations =
      async () => {

        const data =
          await fetchRecommendations();

        setRecommendations(data);
      };

    getRecommendations();

    const interval =
      setInterval(() => {
        getRecommendations();
      }, 5000);

    return () =>
      clearInterval(interval);

  }, []);

  return (

    <div className="bg-[#111c44] rounded-3xl p-6 border border-[#1e293b]">

      <h2 className="text-3xl font-bold text-white mb-6">
        Optimization Recommendations
      </h2>

      <div className="space-y-4">

        {recommendations.map(
          (recommendation, index) => (

            <div
              key={index}
              className="bg-[#0f172a] p-5 rounded-2xl border border-[#1e293b]"
            >

              <div className="flex items-center justify-between">

                <h3 className="text-white font-semibold text-lg">
                  {recommendation.title}
                </h3>

                <span className="
                  px-3 py-1 rounded-full text-sm bg-purple-600 text-white
                ">
                  {recommendation.impact}
                </span>

              </div>

              <p className="text-gray-400 mt-3">
                {recommendation.description}
              </p>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default RecommendationsPanel;