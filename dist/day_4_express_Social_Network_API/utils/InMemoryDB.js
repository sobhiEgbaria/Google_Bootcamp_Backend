"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InMemoryDB {
    constructor() {
        this.users = new Map();
        this.posts = new Map();
        this.comments = new Map();
    }
    static getInstance() {
        if (!InMemoryDB.instance) {
            InMemoryDB.instance = new InMemoryDB();
        }
        return InMemoryDB.instance;
    }
    // User Methods
    addUser(user) {
        this.users.set(user.id, user);
    }
    getUser(id) {
        return this.users.get(id);
    }
    updateUser(id, userData) {
        let user = this.users.get(id);
        if (user) {
            // Update attributes of the user
            user = Object.assign(Object.assign({}, user), userData);
            this.users.set(id, user);
        }
    }
    deleteUser(id) {
        this.users.delete(id);
    }
    // Post Methods
    addPost(post) {
        this.posts.set(post.id, post);
    }
    getPost(id) {
        return this.posts.get(id);
    }
    updatePost(id, postData) {
        let post = this.posts.get(id);
        if (post) {
            // Update attributes of the post
            post = Object.assign(Object.assign({}, post), postData);
            this.posts.set(id, post);
        }
    }
    deletePost(id) {
        this.posts.delete(id);
    }
    // Comment Methods
    addComment(comment) {
        this.comments.set(comment.id, comment);
    }
    getComment(id) {
        return this.comments.get(id);
    }
    updateComment(id, commentData) {
        let comment = this.comments.get(id);
        if (comment) {
            // Update attributes of the comment
            comment = Object.assign(Object.assign({}, comment), commentData);
            this.comments.set(id, comment);
        }
    }
    deleteComment(id) {
        this.comments.delete(id);
    }
}
exports.default = InMemoryDB;
