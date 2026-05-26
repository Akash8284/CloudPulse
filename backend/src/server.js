import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import metricsRoutes from "./routes/metricsRoutes.js";
import recommendationRoutes from "./routes/recommendationRoutes.js";
import alertRoutes from "./routes/alertRoutes.js";
import historyRoutes from "./routes/historyRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/metrics", metricsRoutes);
app.use("/api/recommendations", recommendationRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/history", historyRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "CloudPulse Backend Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});