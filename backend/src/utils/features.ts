import mongoose from "mongoose";
const MONGO_URI = "mongodb+srv://user2:password1234@cluster0.eppckk2.mongodb.net/ECOM?retryWrites=true&w=majority&appName=Cluster0";
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};