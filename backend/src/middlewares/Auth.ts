import { User } from "../models/userModel.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "./error.js";

export const AdminOnly = TryCatch(async (req, res, next) => {
  const { id } = req.query;
  if (!id){
    return  next (new ErrorHandler("Login first", 401));
  }
  const user= await User.findById(id);
if (!user) {
    return  next (new ErrorHandler("Give valid user Id", 401));
  }
  if (user.role !== 'admin') {
    return next(new ErrorHandler("Admin access only", 403));
  }
  next();

});
