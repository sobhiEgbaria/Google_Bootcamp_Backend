import User from "../models/User";
import Post from "../models/Post";
import PostComment from "../PostComment";

class InMemoryDB {
  private static instance: InMemoryDB;
  private users: Map<number, User> = new Map();
  private posts: Map<number, Post> = new Map();
  private comments: Map<number, PostComment> = new Map();

  private constructor() {}

  public static getInstance(): InMemoryDB {
    if (!InMemoryDB.instance) {
      InMemoryDB.instance = new InMemoryDB();
    }
    return InMemoryDB.instance;
  }

  // User Methods
  addUser(user: User) {
    this.users.set(user.id, user);
  }

  getUser(id: number): User | undefined {
    return this.users.get(id);
  }

  updateUser(id: number, userData: Partial<User>) {
    let user = this.users.get(id);
    if (user) {
      // Update attributes of the user
      user = { ...user, ...userData };
      this.users.set(id, user);
    }
  }

  deleteUser(id: number) {
    this.users.delete(id);
  }

  // Post Methods
  addPost(post: Post) {
    this.posts.set(post.id, post);
  }

  getPost(id: number): Post | undefined {
    return this.posts.get(id);
  }

  updatePost(id: number, postData: Partial<Post>) {
    let post = this.posts.get(id);
    if (post) {
      // Update attributes of the post
      post = { ...post, ...postData };
      this.posts.set(id, post);
    }
  }

  deletePost(id: number) {
    this.posts.delete(id);
  }

  // Comment Methods
  addComment(comment: PostComment) {
    this.comments.set(comment.id, comment);
  }

  getComment(id: number): PostComment | undefined {
    return this.comments.get(id);
  }

  updateComment(id: number, commentData: Partial<PostComment>) {
    let comment = this.comments.get(id);
    if (comment) {
      // Update attributes of the comment
      comment = { ...comment, ...commentData };
      this.comments.set(id, comment);
    }
  }

  deleteComment(id: number) {
    this.comments.delete(id);
  }
}
export default InMemoryDB;
