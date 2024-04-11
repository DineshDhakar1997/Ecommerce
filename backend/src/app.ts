import express,{ NextFunction, Request } from "express";
import { connectDB } from "./utils/features.js";
import {errorMiddleware}  from "./middlewares/error.js"
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";
import orderRouter from "./routes/orderRoutes.js";
import NodeCache from "node-cache";
import { config } from "dotenv";
import morgan from "morgan";
config();
const PORT = process.env.PORT || 4001;
const uri=process.env.MONGO_URI || "";

connectDB(uri);
export const myCache = new NodeCache({maxKeys: 5, checkperiod: 120});

const app = express();


// Middleware
app.use(express.json());
app.use(morgan("dev"));


// importing all routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/order", orderRouter);



app.use("uploads",express.static("uploads"));
// error middleware function 
app.use(errorMiddleware);
app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});