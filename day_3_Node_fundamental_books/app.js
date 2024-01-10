import express from "express";
import booksRoute from "./routes/booksRoute.js";
import authorRouter from "./routes/authorRouter.js";

const app = express();
app.use(express.json());

// routes
app.use("/books", booksRoute);
app.use("/authors", authorRouter);

// get home page
app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

// get all the books

//run the server
const port = 3000;
app.listen(port, () => {
  console.log(`the server run in port ${port}`);
});
