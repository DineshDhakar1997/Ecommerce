import { TryCatch } from "../middlewares/error.js";
import Product from "../models/productModel.js";
import ErrorHandler from "../utils/utility-class.js";
import { rm } from "fs";
// create const for these function
//    newProduct, getAllProducts, updateProduct,
// deleteProduct, getOneProduct, addToCart, removeFromCart,
// emptyCart, getUserCart
const newProduct = TryCatch(async (req, res, next) => {
    const { name, price, stock, category, description } = req.body;
    const photo = req.file;
    if (!photo) {
        return next(new ErrorHandler("Please provide a product image", 400));
    }
    if (!name || !price || !stock || !category) {
        rm(photo?.path, () => {
            console.log("photo removed!");
        });
        return next(new ErrorHandler("Please provide all required fields", 400));
        // Check if all required fields are provided in the request body
    }
    const product = await Product.create({
        name,
        photo: photo?.path,
        price,
        stock,
        category: category.toLowerCase(),
        description,
    });
    return res.status(201).json({
        success: true,
        product: `Product created successfully`,
        data: product,
    });
});
const getAllProducts = TryCatch(async (req, res, next) => {
    const products = await Product.find();
    return res.status(200).json({
        success: true,
        data: products,
    });
});
const getLatestProducts = TryCatch(async (req, res, next) => {
    const products = await Product.find().sort({ createdAt: -1 }).limit(5);
    return res.status(200).json({
        success: true,
        data: products,
    });
});
const getCategories = TryCatch(async (req, res, next) => {
    const categories = await Product.distinct("category");
    return res.status(200).json({
        success: true,
        data: categories,
    });
});
const updateProduct = TryCatch(async (req, res, next) => { });
const deleteProduct = TryCatch(async (req, res, next) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    await Product.findByIdAndDelete(id);
    rm(product.photo, () => {
        console.log("Photo removed!");
    });
    return res.status(200).json({
        success: true,
        message: `Product deleted successfully`,
    });
});
const getOneProduct = TryCatch(async (req, res, next) => {
    const prodId = req.params.id;
    const product = await Product.findById(prodId);
    if (product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    return res.status(200).json({
        success: true,
        data: product
    });
});
const addToCart = TryCatch(async (req, res, next) => { });
const removeFromCart = TryCatch(async (req, res, next) => { });
const emptyCart = TryCatch(async (req, res, next) => { });
const getUserCart = TryCatch(async (req, res, next) => { });
export { newProduct, getAllProducts, getLatestProducts, updateProduct, deleteProduct, getOneProduct, addToCart, removeFromCart, emptyCart, getUserCart, getCategories };
