import express from "express";

const router = express.Router();

router.get("/", (req, res) => {

  const score =
    Math.floor(Math.random() * 40) + 60;

  res.json({
    score,
  });
});

export default router;