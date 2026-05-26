import express from "express";

import {
  generateAlerts,
} from "../services/alertService.js";

const router = express.Router();

router.get("/", (req, res) => {
  const alerts = generateAlerts();

  res.json(alerts);
});

export default router;