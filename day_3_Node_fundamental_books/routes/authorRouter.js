import express from "express";
import Joi from "joi";

const authorRouter = express.Router();

const authors = [
  {
    id: 1,
    firstName: "naseem",
    lastName: "wattd",
    nationally: "usa",
    image: "url.....",
  },
  {
    id: 2,
    firstName: "majd",
    lastName: "hamdi",
    nationally: "africa",
    image: "url.....",
  },
];

authorRouter.get("/", (req, res) => {
  res.json(authors);
});

//get author by id
authorRouter.get("/:id", (req, res) => {
  const id = parseInt(req.params.id); // convert the id to number
  const author = authors.find((author) => {
    return author.id === id;
  });
  if (author) {
    res.status(200).send(author);
  } else {
    res.status(400).send("author not found");
  }
});

// add new author
authorRouter.post("/", (req, res) => {
  const { error } = validationNewAuthor(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const newAuthor = {
    id: Date.now(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    nationally: req.body.nationally,
    image: req.body.image,
  };

  authors.push(newAuthor);
  res.send("author added successfully");
});

// update author details
authorRouter.put("/:id", (req, res) => {
  const id = parseInt(req.params.id); // convert the id to number

  const { error } = validationUpdate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const author = authors.find((author) => {
    return author.id === id;
  });
  if (author) {
    res.status(200).send({ message: "author not updated" });
  } else {
    res.status(400).send({ message: "author not found" });
  }
});

authorRouter.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id); // convert the id to number

  const author = authors.find((author) => {
    return author.id === id;
  });
  if (author) {
    res.status(200).send({ message: "author not deleted" });
  } else {
    res.status(400).send({ message: "author not found" });
  }
});

` 
id: 1,
firstName: "naseem",
lastName: "wattd",
nationally: "usa",
image: "url.....",`;

// validation function

const validationNewAuthor = (newBook) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(20).required().trim(),
    lastName: Joi.string().min(2).max(20).required().trim(),
    nationally: Joi.string().min(2).max(20).required().trim(),
    image: Joi.string(),
  });

  return schema.validate(newBook); // this line return error or null
};

const validationUpdate = (newBook) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(20).trim(),
    lastName: Joi.string().min(2).max(20).trim(),
    nationally: Joi.string().min(2).max(20).trim(),
    image: Joi.string(),
  });

  return schema.validate(newBook); // this line return error or null
};

export default authorRouter;
