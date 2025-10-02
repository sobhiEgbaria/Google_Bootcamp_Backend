import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("the first mid");
  next();
});

app.use((req, res, next) => {
  res.send("hi the second mid");
});

app.listen(3000);
