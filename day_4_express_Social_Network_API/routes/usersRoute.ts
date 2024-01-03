import express, { Request, Response } from "express";
import User from "../models/User";
import InMemoryDB from "../utils/InMemoryDB";
import { UserBL } from "../BL/UserBL";

const db = InMemoryDB.getInstance();

const router = express.Router();
const userBL = new UserBL();

// Users API
router.post("/", (req: Request, res: Response) => {
  const userData = req.body;
  const user = new User(+userData.id, userData.username, userData.email);
  userBL.addUser(user);
  res.status(201).send(user);
});

router.get("/:id", (req: Request, res: Response) => {
  const user = db.getUser(+req.params.id);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send(+req.params.id);
  }
});

router.put("/:id", (req: Request, res: Response) => {
  const userId = +req.params.id; // Convert id to number
  const existingUser = db.getUser(userId);

  if (!existingUser) {
    return res.status(404).send("User not found");
  }

  // Assuming the request body contains the fields to be updated
  userBL.updateUser(userId, req.body);
  const updatedUser = db.getUser(userId);
  res.status(200).send(updatedUser);
});

router.delete("/:id", (req: Request, res: Response) => {
  const userId = +req.params.id; // Convert id to number
  const existingUser = db.getUser(userId);

  if (!existingUser) {
    return res.status(404).send("User not found");
  }

  userBL.deleteUser(userId);
  res.status(200).send({ message: `User ${userId} deleted successfully` });
});
export default router;
