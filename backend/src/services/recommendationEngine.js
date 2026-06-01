export const generateRecommendations = ({
  apiRequests,
  estimatedCost,
  lambdaInvocations,
  healthScore,
}) => {

  const recommendations = [];

  if (apiRequests > 25000) {

    recommendations.push({
      title: "Scale Lambda Concurrency",
      impact: "Performance",
      description:
        "High API traffic detected. Increase Lambda concurrency limits.",
    });
  }

  if (estimatedCost > 120) {

    recommendations.push({
      title: "Enable Cost Optimization",
      impact: "Cost",
      description:
        "Cloud spending is increasing. Enable cost monitoring policies.",
    });
  }

  if (lambdaInvocations > 7000) {

    recommendations.push({
      title: "Optimize Lambda Memory",
      impact: "Performance",
      description:
        "High Lambda execution detected. Tune memory allocation.",
    });
  }

  if (healthScore < 70) {

    recommendations.push({
      title: "Investigate Infrastructure Health",
      impact: "Critical",
      description:
        "Infrastructure stability is degrading. Review system metrics.",
    });
  }

  if (recommendations.length === 0) {

    recommendations.push({
      title: "Infrastructure Running Optimally",
      impact: "Healthy",
      description:
        "No optimization actions currently required.",
    });
  }

  return recommendations;
};