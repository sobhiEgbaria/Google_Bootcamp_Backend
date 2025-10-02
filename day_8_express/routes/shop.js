import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("home route");
});

export default router;
