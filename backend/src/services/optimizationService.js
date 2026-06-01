import { mockMetrics } from "../data/mockMetrics.js";

export const generateRecommendations = () => {

  const recommendations = [];

  const cpuUsage =
    Math.floor(Math.random() * 100);

  const apiRequests =
    Math.floor(Math.random() * 30000);

  const lambdaDuration =
    Math.floor(Math.random() * 10);

  const storageGrowth =
    Math.floor(Math.random() * 100);

  if (cpuUsage < 20) {
    recommendations.push({
      type: "Idle Resource",
      severity: "Medium",
      message:
        "Low CPU usage detected.",
    });
  }

  if (apiRequests > 20000) {
    recommendations.push({
      type: "Traffic Spike",
      severity: "High",
      message:
        "High API traffic detected.",
    });
  }

  if (lambdaDuration > 7) {
    recommendations.push({
      type: "Lambda Optimization",
      severity: "Medium",
      message:
        "High Lambda duration detected.",
    });
  }

  if (storageGrowth > 75) {
    recommendations.push({
      type: "Storage Growth",
      severity: "Medium",
      message:
        "Rapid storage growth detected.",
    });
  }

  return recommendations;
};