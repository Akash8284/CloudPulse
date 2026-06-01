import express from "express";

import {
  generateRecommendations,
} from "../services/recommendationEngine.js";

const router = express.Router();

router.get("/", (req, res) => {

  const apiRequests =
    Math.floor(Math.random() * 35000);

  const estimatedCost =
    Math.floor(Math.random() * 200);

  const lambdaInvocations =
    Math.floor(Math.random() * 10000);

  const healthScore =
    Math.floor(Math.random() * 100);

  const recommendations =
    generateRecommendations({
      apiRequests,
      estimatedCost,
      lambdaInvocations,
      healthScore,
    });

  res.json(recommendations);
});

export default router;