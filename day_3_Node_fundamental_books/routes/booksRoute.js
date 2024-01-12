import express from "express";
import { Book, validationUpdate, validationNewBook } from "../models/Book.js";
const booksRoute = express.Router();

// get all books
booksRoute.get("/", async (req, res) => {
  try {
    const books = await Book.find().populate("author", ["firstName"]);
    res.send(books);
  } catch (error) {
    res.status(200).send({ message: error });
  }
});

//get book by id
booksRoute.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Book.findById(id).populate("author", ["firstName"]);

    res.status(200).send(book);
  } catch (error) {
    res.status(400).send({ message: "book not found" });
  }
});

// add new book
booksRoute.post("/", async (req, res) => {
  const { error } = validationNewBook(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  try {
    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      description: req.body.description,
    });
    const result = await newBook.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

// update book By Id
booksRoute.put("/:id", async (req, res) => {
  const { error } = validationUpdate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  try {
    const id = req.params.id;

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        $set: {
          title: req.body.title,
          author: req.body.author,
          price: req.body.price,
          description: req.body.description,
        },
      },
      { new: true }
    );

    res.status(200).send(updatedBook);
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

booksRoute.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Book.findByIdAndDelete(id);

    res.status(200).send({ message: "book is deleted" });
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

export default booksRoute;
