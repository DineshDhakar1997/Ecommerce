import express from "express";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";
const port = 4001;
connectDB();
const app = express();
// Middleware
app.use(express.json());
// importing all routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);
app.use("uploads", express.static("uploads"));
// error middleware function 
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
});
