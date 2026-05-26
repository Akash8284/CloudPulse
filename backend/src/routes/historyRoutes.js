import express from "express";

import {
  historicalMetrics,
} from "../data/historicalMetrics.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(historicalMetrics);
});

export default router;