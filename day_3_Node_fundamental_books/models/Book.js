import mongoose from "mongoose";
import Joi from "joi";

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      term: true,
      minlength: 3,
      maxlength: 200,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
    description: {
      type: String,
      required: true,
      term: true,
      minlength: 3,
      maxlength: 200,
    },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

// validation function

export const validationNewBook = (newBook) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(200).required().trim(),
    description: Joi.string().min(3).max(200).required().trim(),
    author: Joi.string().required().trim(),
    price: Joi.number().required(),
  });

  return schema.validate(newBook); // this line return error or null
};

export const validationUpdate = (newBook) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(200).trim(),
    description: Joi.string().min(3).max(200).required().trim(),
    author: Joi.string().trim(),
    price: Joi.number(),
  });

  return schema.validate(newBook); // this line return error or null
};

export const Book = mongoose.model("Book", BookSchema);
