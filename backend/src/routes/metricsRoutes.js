import express from "express";

const router = express.Router();

router.get("/", (req, res) => {

  const metrics = {
    estimatedCost:
      Math.floor(Math.random() * 50) + 50,

    apiRequests:
      Math.floor(Math.random() * 10000) + 15000,

    lambdaInvocations:
      Math.floor(Math.random() * 5000) + 5000,

    storageUsed:
      Math.floor(Math.random() * 50) + 50,
  };

  res.json(metrics);
});

export default router;