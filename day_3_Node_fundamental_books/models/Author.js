import mongoose from "mongoose";
import Joi from "joi";

const AuthorSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    nationally: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

// validation function

export const validationNewAuthor = (newBook) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(20).required().trim(),
    lastName: Joi.string().min(2).max(20).required().trim(),
    nationally: Joi.string().min(2).max(20).required().trim(),
    image: Joi.string(),
  });

  return schema.validate(newBook); // this line return error or null
};

export const validationUpdate = (newBook) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(20).trim(),
    lastName: Joi.string().min(2).max(20).trim(),
    nationally: Joi.string().min(2).max(20).trim(),
    image: Joi.string(),
  });

  return schema.validate(newBook); // this line return error or null
};

export const Author = mongoose.model("Author", AuthorSchema);
