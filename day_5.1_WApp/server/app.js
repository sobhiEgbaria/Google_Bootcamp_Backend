import express from "express";
import { apiData } from "../utils/weatherStackApi.js";

const app = express();
const port = 3000;

const data = await apiData("Umm al-Fahm");

app.get("/", (req, res) => {
  res.send(`<h1>weather App<h1>
  <h2>${data}<h1>
  
  `);
});

app.listen(port, () => {
  console.log(`your server run in port ${port}`);
});
