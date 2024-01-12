import express from "express";
import {
  Author,
  validationNewAuthor,
  validationUpdate,
} from "../models/Author.js";

const authorRouter = express.Router();

authorRouter.get("/", async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    res.status(500).send("something went wrong");
  }
});

//get author by id
authorRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const author = await Author.findById(id);

    res.status(200).send(author);
  } catch (error) {
    res.status(400).send("author not found");
  }
});

// add new author
authorRouter.post("/", async (req, res) => {
  const { error } = validationNewAuthor(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  try {
    const newAuthor = new Author({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      nationally: req.body.nationally,
      image: req.body.image,
    });

    const result = await newAuthor.save();
    res.send(result);
  } catch (error) {
    res.status(500);
  }
});

// update author details
authorRouter.put("/:id", async (req, res) => {
  const { err } = validationUpdate(req.body);
  if (err) {
    return res.status(400).send(err.details[0].message);
  }

  try {
    const id = req.params.id;
    const author = await Author.findByIdAndUpdate(
      id,
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          nationally: req.body.nationally,
          image: req.body.image,
        },
      },
      { new: true }
    );
    res.status(200).send(author);
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

authorRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await Author.findByIdAndDelete(id);

    res.status(200).send({ message: "author is deleted" });
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

export default authorRouter;
