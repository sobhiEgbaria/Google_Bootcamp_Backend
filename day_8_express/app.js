import express from "express";
import adminRouter from "./routes/admin.js";
import shopRouter from "./routes/shop.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).send("go drunk you are home");
});

app.listen(3000);
