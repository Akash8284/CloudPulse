import express from "express";

import { generateRecommendations }
  from "../services/optimizationService.js";

const router = express.Router();

router.get("/", (req, res) => {
  const recommendations = generateRecommendations();

  res.json(recommendations);
});

export default router;