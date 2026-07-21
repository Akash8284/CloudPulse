import express from "express";
import cors from "cors";

import metricsRoutes from "./routes/metricsRoutes.js";
import alertRoutes from "./routes/alertRoutes.js";
import recommendationRoutes from "./routes/recommendationRoutes.js";
import healthRoutes from "./routes/healthRoutes.js";

import awsRoutes from "./routes/awsRoutes.js";

const app = express();

app.use(cors());
  
app.use("/api/metrics", metricsRoutes);

app.use("/api/alerts", alertRoutes);

app.use("/api/aws", awsRoutes);

app.use(
  "/api/recommendations",
  recommendationRoutes
);

app.use(
  "/api/health",
  healthRoutes
);

const PORT = 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );
});