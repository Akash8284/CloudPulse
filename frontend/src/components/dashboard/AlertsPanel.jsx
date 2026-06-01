import { useEffect, useState }
  from "react";

import {
  fetchAlerts,
} from "../../services/alertService";

const AlertsPanel = () => {

  const [alerts, setAlerts] =
    useState([]);

  useEffect(() => {

    const getAlerts = async () => {

      const data = await fetchAlerts();

      setAlerts(data);
    };

    getAlerts();

    const interval = setInterval(() => {
      getAlerts();
    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl border border-gray-800">

      <h2 className="text-white text-2xl font-semibold mb-6">
        Active Alerts
      </h2>

      <div className="space-y-4">

        {alerts.map((alert, index) => (

          <div
            key={index}
            className={`
              p-4 rounded-xl border
              ${
                alert.severity === "High"
                  ? "border-red-500"
                  : "border-yellow-500"
              }
              bg-[#0f172a]
            `}
          >

            <p className="text-white font-semibold">
              {alert.type}
            </p>

            <p className="text-gray-400 mt-2">
              {alert.message}
            </p>

            <p className="text-sm mt-3 text-red-400">
              {alert.severity}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default AlertsPanel;