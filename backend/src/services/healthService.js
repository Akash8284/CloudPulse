export const generateHealthScore = () => {

  let score = 100;

  const apiRequests =
    Math.floor(Math.random() * 30000);

  const storageGrowth =
    Math.floor(Math.random() * 100);

  const lambdaDuration =
    Math.floor(Math.random() * 10);

  const estimatedMonthlyCost =
    Math.floor(Math.random() * 200);

  if (apiRequests > 22000) {
    score -= 20;
  }

  if (storageGrowth > 80) {
    score -= 15;
  }

  if (lambdaDuration > 8) {
    score -= 20;
  }

  if (estimatedMonthlyCost > 120) {
    score -= 10;
  }

  return {
    score,
  };
};