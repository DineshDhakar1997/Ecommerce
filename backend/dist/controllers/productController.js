import { TryCatch } from "../middlewares/error.js";
import Product from "../models/productModel.js";
import ErrorHandler from "../utils/utility-class.js";
import { rm } from "fs";
import * as dotenv from "dotenv";
import { myCache } from "../app.js";
dotenv.config();
const newProduct = TryCatch(async (req, res, next) => {
    console.log(req.body);
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
const updateProduct = TryCatch(async (req, res, next) => {
    const { id } = req.params;
    const { name, price, stock, category } = req.body;
    const photo = req.file;
    const product = await Product.findById(id);
    if (!product)
        return next(new ErrorHandler("Product Not Found", 404));
    if (photo) {
        rm(product.photo, () => {
            console.log("Old Photo Deleted");
        });
        product.photo = photo.path;
    }
    if (name)
        product.name = name;
    if (price)
        product.price = price;
    if (stock)
        product.stock = stock;
    if (category)
        product.category = category;
    await product.save();
    return res.status(200).json({
        success: true,
        message: "Product Updated Successfully",
    });
});
const getAllProducts = TryCatch(async (req, res, next) => {
    const { search, sort, category, price } = req.query;
    const page = Number(req.query.page || 1);
    const limit = Number(process.env.PAGE_SIZE) || 8;
    const skip = (page - 1) * limit;
    const baseQuery = {};
    if (search) {
        baseQuery.name = { $regex: search, $options: "i" };
    }
    if (category) {
        baseQuery.category = category;
    }
    if (price) {
        baseQuery.price = { $lte: Number(price) };
    }
    const productsPromise = Product.find(baseQuery)
        .sort(sort && { price: sort === "asc" ? 1 : -1 })
        .limit(limit)
        .skip(skip);
    const [products, filteredOnlyProduct] = await Promise.all([
        productsPromise,
        Product.find(baseQuery),
    ]);
    const totalPage = Math.ceil(filteredOnlyProduct.length / limit);
    return res.status(200).json({
        success: true,
        data: products,
        totalPage: totalPage,
    });
});
const getLatestProducts = TryCatch(async (req, res, next) => {
    let products;
    if (myCache.has("latest-products"))
        products = JSON.parse(myCache.get("latest-products"));
    else {
        products = await Product.find({}).sort({ createdAt: -1 }).limit(5);
        myCache.set("latest-products", JSON.stringify(products));
    }
    return res.status(200).json({
        success: true,
        products,
    });
});
const getCategories = TryCatch(async (req, res, next) => {
    const categories = await Product.distinct("category");
    return res.status(200).json({
        success: true,
        data: categories,
    });
});
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
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    return res.status(200).json({
        success: true,
        data: product,
    });
});
export { newProduct, getAllProducts, getLatestProducts, updateProduct, deleteProduct, getOneProduct, getCategories, };
