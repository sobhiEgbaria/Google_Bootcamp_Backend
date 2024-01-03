import express, { Request, Response } from "express";
import Comment from "../PostComment";
import InMemoryDB from "../utils/InMemoryDB";

const db = InMemoryDB.getInstance();
const commentRoute = express.Router();

// Comments API
commentRoute.post("/", (req: Request, res: Response) => {
  const commentData = req.body;
  const comment = new Comment(
    commentData.id,
    commentData.content,
    commentData.commentedBy
  );
  db.addComment(comment);
  res.status(201).send(comment);
});

export default commentRoute;
