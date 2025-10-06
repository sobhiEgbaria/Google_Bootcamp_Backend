import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/", "navbar-app/index.html"));
});

app.all("*", (req, res, next) => {
  res.status(404).send(" <h1>Page Not Found!</h1>");
});

app.listen(3001, () => {
  console.log("the server up in port 3001");
});
