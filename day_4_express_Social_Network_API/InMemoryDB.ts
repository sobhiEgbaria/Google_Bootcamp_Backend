class InMemoryDB {
    private users: Map<number, User> = new Map();
    private posts: Map<number, Post> = new Map();
    private comments: Map<number, Comment> = new Map();
}