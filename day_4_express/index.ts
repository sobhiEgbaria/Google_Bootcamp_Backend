import express from "express";

const app = express();
const port = 3000;
app.use(express.json()); // to get json log of req.body not undefine

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send("Done");
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
