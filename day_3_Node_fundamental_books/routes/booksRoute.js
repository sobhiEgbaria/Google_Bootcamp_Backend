import express from "express";
import Joi from "joi"; // npm package to add validation

const booksRoute = express.Router();

const books = [
  {
    id: 1,
    title: "game of thrones",
    author: "G.R.M",
    price: 20,
  },
  {
    id: 2,
    title: "house of dragon",
    author: "G.R.M",
    price: 20,
  },
];

booksRoute.get("/", (req, res) => {
  res.json(books);
});

//get book by id
booksRoute.get("/:id", (req, res) => {
  const id = parseInt(req.params.id); // convert the id to number
  const book = books.find((book) => {
    return book.id === id;
  });
  if (book) {
    res.status(200).send(book);
  } else {
    res.status(400).send("book not found");
  }
});

// add new book
booksRoute.post("/", (req, res) => {
  const { error } = validationNewBook(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const newBook = {
    id: Date.now(),
    title: req.body.title,
    author: req.body.author,
    price: req.body.price,
  };

  books.push(newBook);
  res.send("book added successfully");
});

booksRoute.put("/:id", (req, res) => {
  const id = parseInt(req.params.id); // convert the id to number

  const { error } = validationUpdate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const book = books.find((book) => {
    return book.id === id;
  });
  if (book) {
    res.status(200).send({ message: "book not updated" });
  } else {
    res.status(400).send({ message: "book not found" });
  }
});

booksRoute.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id); // convert the id to number

  const book = books.find((book) => {
    return book.id === id;
  });
  if (book) {
    res.status(200).send({ message: "book not deleted" });
  } else {
    res.status(400).send({ message: "book not found" });
  }
});

// validation function

const validationNewBook = (newBook) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(20).required().trim(),
    author: Joi.string().min(3).max(20).required().trim(),
    price: Joi.number().min(0).max(20).required(),
  });

  return schema.validate(newBook); // this line return error or null
};

const validationUpdate = (newBook) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(20).trim(),
    author: Joi.string().min(3).max(20).trim(),
    price: Joi.number().min(0).max(20),
  });

  return schema.validate(newBook); // this line return error or null
};

export default booksRoute;
