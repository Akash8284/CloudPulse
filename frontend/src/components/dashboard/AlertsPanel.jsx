import { useEffect, useState }
  from "react";

import {
  fetchAlerts,
} from "../../services/alertService";

const AlertsPanel = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const getAlerts = async () => {
      const data = await fetchAlerts();

      setAlerts(data);
    };

    getAlerts();
  }, []);

  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl border border-gray-800">
      <h2 className="text-white text-xl font-semibold mb-6">
        Active Alerts
      </h2>

      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="bg-[#0f172a] p-4 rounded-xl border border-red-500"
          >
            <p className="text-red-400 font-semibold">
              {alert.severity} Alert
            </p>

            <p className="text-white mt-2">
              {alert.type}
            </p>

            <p className="text-gray-400 mt-2">
              {alert.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsPanel;