"use strict";
class Book {
    constructor(title, author, isbn = "") {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class BookShelf {
    constructor() {
        this.books = [];
    }
    getLength() {
        return this.books.length;
    }
    addBook(book) {
        this.books.push(book);
    }
    getBookAt(index) {
        return this.books[index];
    }
    createIterator() {
        return new BookShelfIterator(this);
    }
}
class BookShelfIterator {
    constructor(bookShelf) {
        this.bookShelf = bookShelf;
        this.currentIndex = 0;
    }
    hasNext() {
        return this.currentIndex < this.bookShelf.getLength();
    }
    hasPrevious() {
        return this.currentIndex > 0;
    }
    next() {
        this.currentIndex += 1;
        return this.bookShelf.getBookAt(this.currentIndex);
    }
    previous() {
        this.currentIndex -= 1;
        return this.bookShelf.getBookAt(this.currentIndex);
    }
}
// 6. Client code
const shelf = new BookShelf();
shelf.addBook(new Book("Design Patterns", "Gang of Four"));
shelf.addBook(new Book("Clean Code", "Robert C. Martin"));
shelf.addBook(new Book("You Don't Know JS", "Kyle Simpson"));
const MyIterator = shelf.createIterator();
while (MyIterator.hasNext()) {
    const book = MyIterator.next();
    console.log(`${book.title} by ${book.author}`);
}
