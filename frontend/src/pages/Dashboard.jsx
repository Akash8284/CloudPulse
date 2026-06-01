import { useEffect, useState } from "react";

import MetricCard from "../components/dashboard/MetricCard";

import MonitoringChart from "../components/dashboard/MonitoringChart";

import AlertsPanel from "../components/dashboard/AlertsPanel";

import RecommendationsPanel from "../components/dashboard/RecommendationsPanel";

import { fetchMetrics } from "../services/metricsService";

import { fetchHistory } from "../services/historyService";

import { fetchHealth } from "../services/healthService";

const Dashboard = () => {

  const [metrics, setMetrics] = useState({});

  const [history, setHistory] = useState([]);

  const [health, setHealth] = useState(null);

  useEffect(() => {

    const getMetrics = async () => {

      const data = await fetchMetrics();

      const historyData = await fetchHistory();

      const healthData = await fetchHealth();

      setMetrics(data);

      setHistory(historyData);

      setHealth(healthData);
    };

    getMetrics();

    const interval = setInterval(() => {
      getMetrics();
    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="p-8 bg-[#020617] min-h-screen">

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-5xl font-bold text-white">
            Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Real-time overview of your cloud infrastructure
          </p>

        </div>

        <div className="flex items-center gap-4">

          <div className="bg-[#111c44] px-5 py-3 rounded-2xl border border-[#1e293b]">

            <p className="text-white">
              ● Live
            </p>

            <p className="text-gray-400 mt-1">
              Auto-refresh:
              <span className="text-green-400 ml-2">
                On
              </span>
            </p>

          </div>

          <div className="bg-[#111c44] px-5 py-4 rounded-2xl border border-[#1e293b] text-white">
            Notifications: 3
          </div>

        </div>

      </div>

      <div
        id="metrics"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8"
      >

        <MetricCard
          title="Estimated Cost"
          value={`$${metrics.estimatedCost || 0}`}
          change="4.2%"
        />

        <MetricCard
          title="API Requests"
          value={metrics.apiRequests || 0}
          change="12.5%"
        />

        <MetricCard
          title="Lambda Invocations"
          value={metrics.lambdaInvocations || 0}
          change="8.1%"
        />

        <MetricCard
          title="Infrastructure Health"
          value={`${health?.score || 0}/100`}
          change={
            health?.score > 80
              ? "Healthy"
              : health?.score > 60
              ? "Warning"
              : "Critical"
          }
        />

      </div>

      <div id="dashboard">

        <MonitoringChart data={history} />

      </div>

      <div
        id="alerts"
        className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8"
      >

        <AlertsPanel />

        <div id="recommendations">

          <RecommendationsPanel />

        </div>

      </div>

    </div>
  );
};

export default Dashboard;