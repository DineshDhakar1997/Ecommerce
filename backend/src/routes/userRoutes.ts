import express, { NextFunction } from "express";
import {
  newUser,
  getAllUsers,
  getUser,
  deleteUser,
} from "../controllers/userController.js";
import { AdminOnly } from "../middlewares/Auth.js";
const userRouter = express.Router();

// route /api/v1/user
userRouter.post("/new", newUser);
userRouter.get("/all",AdminOnly, getAllUsers);

userRouter.route("/:id").get(AdminOnly,getUser).delete(AdminOnly,deleteUser);
export default userRouter;
