"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../models/User"));
const InMemoryDB_1 = __importDefault(require("../utils/InMemoryDB"));
const UserBL_1 = require("../Services/UserBL");
const db = InMemoryDB_1.default.getInstance();
const router = express_1.default.Router();
const userBL = new UserBL_1.UserBL();
// Users API
router.post("/", (req, res) => {
    const userData = req.body;
    const user = new User_1.default(+userData.id, userData.username, userData.email);
    userBL.addUser(user);
    res.status(201).send(user);
});
router.get("/:id", (req, res) => {
    const user = db.getUser(+req.params.id);
    if (user) {
        res.status(200).send(user);
    }
    else {
        res.status(404).send(+req.params.id);
    }
});
router.put("/:id", (req, res) => {
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
router.delete("/:id", (req, res) => {
    const userId = +req.params.id; // Convert id to number
    const existingUser = db.getUser(userId);
    if (!existingUser) {
        return res.status(404).send("User not found");
    }
    userBL.deleteUser(userId);
    res.status(200).send({ message: `User ${userId} deleted successfully` });
});
exports.default = router;
