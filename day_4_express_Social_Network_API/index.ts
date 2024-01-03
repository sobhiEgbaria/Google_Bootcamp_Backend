import express from "express";
import activityLogger from "./middlewares/activityLogger";
import usersRoute from "./routes/usersRoute";
import postRoute from "./routes/postRoute";
import commentRoute from "./routes/commentRoute";

const app = express();
app.use(express.json());
app.use(activityLogger);

app.use("/users", usersRoute);
app.use("/posts", postRoute);
app.use("/posts/:postId/comments", commentRoute);

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
