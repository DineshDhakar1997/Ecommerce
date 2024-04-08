import { useState, useEffect } from "react";
import { VscError } from "react-icons/vsc";
import {Link} from "react-router-dom";
import CartItem from "../components/cart-item";
const CartItems = [
    {
        productId: "sfidusfhid",
        photo: "https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg",
        name: "macbook",
        price: 75000,
        quantity: 4,
        stock: 10
    },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges;
const discount = 400;

const Cart = () => {
    const [couponcode, setCouponCode] = useState<string>("");
    const [validcoupon, setValidCoupon] = useState<Boolean>(false);
    useEffect(() => {
        const timeOutID = setTimeout(() => {
            if (Math.random() > 0.5) setValidCoupon(true);
            else setValidCoupon(false);
        }, 2000);

        return () => clearTimeout(timeOutID);
        setValidCoupon(false);

    }, [couponcode]);




    return (
        <div className="cart">
            <main>
                {
                    CartItems.length>0 ? (CartItems.map((i, idx )=>
                    <CartItem key={idx} cartItem={i} />
                )): 
                <p>Cart is Empty
                    <Link to="/">Go Home</Link>
                </p>
}
            </main>
            <aside>
                <p>Subtotal: {subtotal}</p>
                <p>ShippingCharges: {shippingCharges}</p>
                <p>tax: {tax}</p>
                <p>
                    Discount <em className="red">- {discount}</em>:
                </p>
                <b>total: {total}</b>
                <input
                    type="text"
                    placeholder="Coupon Code"
                    value={couponcode}
                    onChange={(e) => setCouponCode(e.target.value)}
                />
                {
                    couponcode && (validcoupon ?
                        <span className="green">{discount} applied using coupon {couponcode}</span>
                        : <span className="red">coupon not valid
                            <VscError />
                        </span>)
                }

{CartItems.length>0 && <Link to="/checkout">Checkout</Link>}

            </aside>
        </div>
    );
}

export default Cart;