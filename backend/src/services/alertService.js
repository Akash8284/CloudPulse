import { mockMetrics }
  from "../data/mockMetrics.js";

export const generateAlerts = () => {

  const alerts = [];

  const apiRequests =
    Math.floor(Math.random() * 30000);

  const storageGrowth =
    Math.floor(Math.random() * 100);

  const lambdaDuration =
    Math.floor(Math.random() * 10);

  const estimatedMonthlyCost =
    Math.floor(Math.random() * 200);

  if (apiRequests > 22000) {
    alerts.push({
      type: "Traffic Spike",
      severity: "High",
      message:
        "Abnormal API traffic detected.",
    });
  }

  if (storageGrowth > 80) {
    alerts.push({
      type: "Storage Alert",
      severity: "Medium",
      message:
        "Rapid storage growth detected.",
    });
  }

  if (lambdaDuration > 8) {
    alerts.push({
      type: "Lambda Performance",
      severity: "High",
      message:
        "Lambda duration exceeded threshold.",
    });
  }

  if (estimatedMonthlyCost > 120) {
    alerts.push({
      type: "Budget Warning",
      severity: "Medium",
      message:
        "Monthly cost nearing threshold.",
    });
  }

  return alerts;
};