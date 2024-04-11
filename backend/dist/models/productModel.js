import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter the name"],
        trim: true,
        maxLength: [30, "name cannot exceed 20 characters"],
    },
    photo: {
        type: String,
        required: [true, "please provide the photo"],
    },
    price: {
        type: Number,
        required: [true, "Price field is required"],
    },
    stock: {
        type: Number,
        required: [true, "Stock field is required"],
    },
    category: {
        type: String,
        required: [true, "please enter the category"],
    },
    description: {
        type: String,
        default: "No description available"
    },
}, { timestamps: true });
export default mongoose.model("Product", Schema);
