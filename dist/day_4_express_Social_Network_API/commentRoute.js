"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PostComment_1 = __importDefault(require("./PostComment"));
const InMemoryDB_1 = __importDefault(require("./InMemoryDB"));
const db = InMemoryDB_1.default.getInstance();
const commentRoute = express_1.default.Router();
// Comments API
commentRoute.post("/", (req, res) => {
    const commentData = req.body;
    const comment = new PostComment_1.default(commentData.id, commentData.content, commentData.commentedBy);
    db.addComment(comment);
    res.status(201).send(comment);
});
exports.default = commentRoute;
