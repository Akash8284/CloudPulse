import express from "express";
import { testCloudWatch } from "../services/cloudwatchService.js";
import { fetchEC2 } from "../controllers/ec2Controller.js";

const router = express.Router();

router.get("/test", async (req, res) => {
    const result = await testCloudWatch();
    res.json(result);
});

router.get("/ec2", fetchEC2);

export default router;