import express from "express";
// import activityLogger from "./activityLogger";
import usersRoute from "./usersRoute";
import postRoute from "./postRoute";
import commentRoute from "./commentRoute";

const app = express();
app.use(express.json());
// app.use(activityLogger);

app.use("/users", usersRoute);
app.use("/posts", postRoute);
app.use("/posts/:postId/comments", commentRoute);

const port = 3000;
// const db = InMemoryDB.getInstance();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
