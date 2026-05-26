import { useEffect, useState } from "react";

import { fetchMetrics } from "../services/metricsService";

import MetricCard from "../components/dashboard/MetricCard";
import CostChart from "../components/dashboard/CostChart";
import RecommendationsPanel from "../components/dashboard/RecommendationsPanel";
import AlertsPanel from "../components/dashboard/AlertsPanel";
import MonitoringChart from "../components/dashboard/MonitoringChart";

import {
fetchHistory,
} from "../services/historyService";

const Dashboard = () => {
  const [metrics, setMetrics] = useState(null);
  const [history, setHistory] = useState([]);


  useEffect(() => {
    const getMetrics = async () => {
      const data = await fetchMetrics();
      const historyData = await fetchHistory();

      setMetrics(data);
      setHistory(historyData);
    };

    getMetrics();
  }, []);

  if (!metrics) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-2">
        CloudPulse Dashboard
      </h1>

      <p className="text-gray-400 mb-8">
        Intelligent Cloud Monitoring & Optimization Platform
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Estimated Cost"
          value={metrics.estimatedCost}
          unit="$"
        />

        <MetricCard
          title="API Requests"
          value={metrics.apiRequests}
        />

        <MetricCard
          title="Lambda Invocations"
          value={metrics.lambdaInvocations}
        />

        <MetricCard
          title="Storage Used"
          value={metrics.storageUsed}
          unit="GB"
        />

      </div>

      <div className="mb-8">
         <MonitoringChart data={history} />
        </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
        <CostChart />

        <RecommendationsPanel />
      </div>

      <AlertsPanel />
    </div>
  );
};

export default Dashboard;