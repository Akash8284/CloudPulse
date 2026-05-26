import { mockMetrics } from "../data/mockMetrics.js";

export const generateRecommendations = () => {
  const recommendations = [];

  // Idle resource detection
  if (mockMetrics.cpuUsage < 5) {
    recommendations.push({
      type: "Idle Resource",
      severity: "Medium",
      message:
        "Low CPU usage detected. Consider downsizing resources.",
    });
  }

  // API spike detection
  if (mockMetrics.apiRequests > 20000) {
    recommendations.push({
      type: "Traffic Spike",
      severity: "High",
      message:
        "Unusual API traffic spike detected.",
    });
  }

  // Lambda optimization
  if (mockMetrics.lambdaDuration > 5) {
    recommendations.push({
      type: "Lambda Optimization",
      severity: "Medium",
      message:
        "Lambda execution duration is high.",
    });
  }

  // Storage anomaly
  if (mockMetrics.storageGrowth > 70) {
    recommendations.push({
      type: "Storage Growth",
      severity: "Medium",
      message:
        "Rapid storage growth detected.",
    });
  }

  return recommendations;
};