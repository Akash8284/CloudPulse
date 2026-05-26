import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    estimatedCost: 42,
    apiRequests: 15420,
    lambdaInvocations: 8421,
    storageUsed: 78,
  });
});

export default router;