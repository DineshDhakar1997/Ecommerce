import {Link} from "react-router-dom";
import {FaTrash} from "react-icons/fa"
type cartItemProps = {
    cartItem: any;
}
// productId: "sfidusfhid",
// photo: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
// name: "macbook",
// price: 75000,
// quantity: 4,
// stock: 10
const CartItem = ({cartItem}:cartItemProps) => {
    const {productId,photo,name,price,quantity} = cartItem;
  return (
   <div className="cart-item">
    <img src={photo} alt={name} />
    <article>
        < Link to={`/product/${productId}`}>
            {name}
        </Link>
    </article>
    <span>₹{price}</span>
    <div>
        <button>-</button>
        <span>{quantity}</span>
        <button>+</button>
    </div>
    <button>
        <FaTrash/>
    </button>
    

   </div>)
}

export default CartItem