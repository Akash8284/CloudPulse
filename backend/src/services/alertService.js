import { mockMetrics }
  from "../data/mockMetrics.js";

export const generateAlerts = () => {
  const alerts = [];

  // High API traffic
  if (mockMetrics.apiRequests > 20000) {
    alerts.push({
      type: "Traffic Spike",
      severity: "High",
      message:
        "Abnormal API traffic detected.",
    });
  }

  // Storage anomaly
  if (mockMetrics.storageGrowth > 75) {
    alerts.push({
      type: "Storage Alert",
      severity: "Medium",
      message:
        "Rapid storage growth detected.",
    });
  }

  // Lambda performance issue
  if (mockMetrics.lambdaDuration > 8) {
    alerts.push({
      type: "Lambda Performance",
      severity: "High",
      message:
        "Lambda execution duration exceeded threshold.",
    });
  }

  // Cost threshold warning
  if (mockMetrics.estimatedMonthlyCost > 100) {
    alerts.push({
      type: "Budget Warning",
      severity: "Medium",
      message:
        "Estimated monthly cost nearing limit.",
    });
  }

  return alerts;
};