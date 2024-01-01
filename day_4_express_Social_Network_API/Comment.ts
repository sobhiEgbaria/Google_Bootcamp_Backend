class PostComment {
  id: number;
  content: string;
  commentedBy: number;

  constructor(id: number, content: string, commentedBy: number) {
    this.id = id;
    this.content = content;
    this.commentedBy = commentedBy;
    // initialize other properties
  }

  // business logic methods
  // ...
}
