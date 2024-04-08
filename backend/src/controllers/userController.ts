import { Request, Response, NextFunction } from "express";
import { User } from "../models/userModel.js";
import { NewUserRequestBody } from "../types/types.js";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/utility-class.js";

export const newUser = TryCatch(async (
  req: Request<{}, {}, NewUserRequestBody>,
  res:Response,
  next: NextFunction) => {
  const { name, email, photo, gender, _id, dob } = req.body;
  if (!name || !email || !photo || !gender || !_id || !dob) {
    return next(new ErrorHandler("Provide all fields", 400));
  }
  let user = await User.findById(_id);

  if (user) {
    return res.status(200).json({ message: `Welcome back! ${name}` });
  }
  user = await User.create({ name, email, photo, gender, _id, dob });
  return res
    .status(200)
    .json({ message: `Welcome! new user ${name} with userId : ${user._id}` });
});

export const getAllUsers = TryCatch(async (req, res, next) => {
  const users = await User.find({});
  return res.status(200).json({ users });
});

export const getUser = TryCatch(async (req, res, next) => {
  const userId = String(req.params.id);
  console.log(userId);

  // const users = await User.find({ _id: userId });
  const users = await User.findById(userId);

  if (!users) {
    return next(new ErrorHandler(`No user with id=${userId}`, 404));
  } else {
    return res.status(200).json(users);
  }
});

export const deleteUser = TryCatch(async (req, res, next) => {
  const userId = req.params.id;

  // const users = await User.find({ _id: userId });
  const users = await User.findById(userId);

  if (!users) {
    return next(new ErrorHandler(`No user with id=${userId}`, 404));
  } else {
    await User.deleteOne({ _id: userId });
    return res.status(200).json({ message: `Deleted user with id=${userId}` });
  }
});
