import express from "express";
import { newProduct, getAllProducts, getLatestProducts, updateProduct, deleteProduct, getOneProduct, getCategories, } from "../controllers/productController.js";
import { singleUpload } from "../middlewares/multer.js";
const productRouter = express.Router();
// route /api/v1/product
productRouter.post("/new", singleUpload, newProduct);
productRouter.get("/all", getAllProducts);
productRouter.get("/latest", getLatestProducts);
productRouter.get("/categories", getCategories);
productRouter
    .route("/:id")
    .get(getOneProduct)
    .delete(deleteProduct)
    .put(singleUpload, updateProduct);
// export the router
export default productRouter;
