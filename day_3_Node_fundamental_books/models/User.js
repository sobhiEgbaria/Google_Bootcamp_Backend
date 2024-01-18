import mongoose from "mongoose";
import Joi from "joi";

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      term: true,
      minlength: 3,
      maxlength: 200,
    },
    email: {
      type: String,
      required: true,
      term: true,
      minlength: 3,
      maxlength: 200,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      term: true,
      minlength: 8,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//validation register user

export const validationRegisterUser = (user) => {
  const schema = Joi.object({
    userName: Joi.string().min(3).max(200).required().trim(),
    email: Joi.string().min(3).max(200).required().trim().email(),
    password: Joi.string().required().trim().min(8),
    isAdmin: Joi.bool(),
  });

  return schema.validate(user); // this line return error or null
};

//validation login user

export const validationLoginUser = (user) => {
  const schema = Joi.object({
    email: Joi.string().min(3).max(200).required().trim().email(),
    password: Joi.string().required().trim().min(8),
  });

  return schema.validate(user); // this line return error or null
};

//validation update user

export const validationNewBook = (user) => {
  const schema = Joi.object({
    userName: Joi.string().min(3).max(200).trim(),
    email: Joi.string().min(3).max(200).trim().email(),
    password: Joi.string().trim().min(8),
    isAdmin: Joi.bool(),
  });

  return schema.validate(user); // this line return error or null
};

export const User = mongoose.model("User", UserSchema);
