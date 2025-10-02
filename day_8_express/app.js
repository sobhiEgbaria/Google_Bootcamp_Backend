import express from "express";

const app = express();

app.use("/games", (req, res, next) => {
  res.send("welcome in the game route");
});

app.use("/", (req, res, next) => {
  res.send("home route");
});

app.listen(3000);
