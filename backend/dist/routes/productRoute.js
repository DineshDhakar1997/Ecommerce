import express from "express";
import { newProduct, getAllProducts, getLatestProducts, updateProduct, deleteProduct, getOneProduct, addToCart, removeFromCart, emptyCart, getUserCart, getCategories, } from "../controllers/productController.js";
import { singleUpload } from "../middlewares/multer.js";
const productRouter = express.Router();
// route /api/v1/product
productRouter.post("/new", singleUpload, newProduct);
productRouter.get("/all", getAllProducts);
productRouter.get("/latest", getLatestProducts);
productRouter.get("/categories", getCategories);
productRouter.post("/add-to-cart", addToCart);
productRouter.delete("/remove-from-cart", removeFromCart);
productRouter.delete("/empty-cart", emptyCart);
productRouter.get("/get-user-cart", getUserCart);
productRouter
    .route("/:id")
    .get(getOneProduct)
    .delete(deleteProduct)
    .put(updateProduct);
export default productRouter;
