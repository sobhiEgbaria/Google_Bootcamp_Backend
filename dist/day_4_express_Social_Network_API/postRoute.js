"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Post_1 = __importDefault(require("./Post"));
const InMemoryDB_1 = __importDefault(require("./InMemoryDB"));
const db = InMemoryDB_1.default.getInstance();
const postRoute = express_1.default.Router();
// Posts API
postRoute.post("/", (req, res) => {
    const postData = req.body;
    const post = new Post_1.default(postData.id, postData.content, postData.postedBy);
    db.addPost(post);
    res.status(201).send(post);
});
postRoute.get("/:id", (req, res) => {
    const post = db.getPost(+req.params.id);
    if (post) {
        res.status(200).send(post);
    }
    else {
        res.status(404).send("Post not found");
    }
});
postRoute.delete("/:id", (req, res) => {
    const postId = +req.params.id;
    const existingPost = db.getPost(postId);
    if (!existingPost) {
        return res.status(404).send("Post not found");
    }
    db.deletePost(postId);
    res.status(200).send({ message: `Post ${postId} deleted successfully` });
});
postRoute.put("/:id", (req, res) => {
    const postId = +req.params.id;
    const existingPost = db.getPost(postId);
    if (!existingPost) {
        return res.status(404).send("Post not found");
    }
    // Assuming the request body contains the updated fields for the post
    db.updatePost(postId, req.body);
    const updatedPost = db.getPost(postId);
    res.status(200).send(updatedPost);
});
exports.default = postRoute;
