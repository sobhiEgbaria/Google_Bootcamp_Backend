import express from "express";
import booksRoute from "./routes/booksRoute.js";
import authorRouter from "./routes/authorRouter.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

// connect to the DB
try {
  () => async;
  {
    await mongoose.connect(`mongodb://localhost/booksDB`);
    console.log(`connected to mongodb`);
  }
} catch (error) {
  console.log(`connection is fail: ${error}`);
}

// routes
app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});
app.use("/books", booksRoute);
app.use("/authors", authorRouter);

//run the server
const port = 3000;
app.listen(port, () => {
  console.log(`the server run in port ${port}`);
});
