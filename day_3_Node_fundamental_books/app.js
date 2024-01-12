import express from "express";
import booksRoute from "./routes/booksRoute.js";
import authorRouter from "./routes/authorRouter.js";
import mongoose from "mongoose";
import { logger } from "./middlewares/logger.js";
import "dotenv/config";

const app = express();
app.use(express.json());

// connect to the DB
try {
  () => async;
  {
    await mongoose.connect(process.env.mongo_URL);
    console.log(`connected to mongodb`);
  }
} catch (error) {
  console.log(`connection is fail: ${error}`);
}

//add middleware
app.use(logger);

// routes
app.use("/books", booksRoute);
app.use("/authors", authorRouter);

//run the server
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`the server run in port ${port}`);
});
