import {FaPlus} from 'react-icons/fa';
type ProductsProps = {
    productId: string;
    photo: string;
    name: string;
    price: number;
    stock: number;
    handler:()=>void;
  };
const photo="vdhjbijsdbvi";
const ProductCard = ({
    productId,
    photo,
    name,
    price,
    stock,
    handler
  }: ProductsProps) => {
  return (
<div className="product-card">
    <img src={`${photo}`} alt={name} />
    <p>{name}</p>
    <p>₹{price}</p>
    <p>{stock}</p>
<div>
    <button >
        <FaPlus/>
    </button>
</div>

    </div> 

)
}

export default ProductCard