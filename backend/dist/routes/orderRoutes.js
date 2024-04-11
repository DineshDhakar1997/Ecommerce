import express from "express";
import { newOrder } from "../controllers/orderController.js";
const orderRouter = express.Router();
// route /api/v1/user
orderRouter.post("/new", newOrder);
export default orderRouter;
