"use strict";
class InMemoryDB {
    constructor() {
        this.users = new Map();
        this.posts = new Map();
        this.comments = new Map();
    }
}
