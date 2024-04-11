import { TryCatch } from "../middlewares/error.js";
import { Order } from "../models/orderModel.js";
import { reduceStock } from "../utils/features.js";
import ErrorHandler from "../utils/utility-class.js";
export const newOrder = TryCatch(async (req, res, next) => {
    const { shippingInfo, orderItems, user, subtotal, tax, shippingCharges, discount, total } = req.body;
    if (!shippingInfo || !orderItems || !user || !subtotal || !tax || !total) {
        return next(new ErrorHandler("Input all fields", 400));
    }
    await Order.create({ shippingInfo, orderItems, user, subtotal, tax, shippingCharges, discount, total });
    await reduceStock(orderItems);
    res.status(201).json({
        success: true,
        message: "Order Placed Successfully",
        order: orderItems
    });
});
