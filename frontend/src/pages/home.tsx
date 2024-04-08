import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"
const Home = () => {
    const addToCartHandler = () => {

    }
    return (
        <div className='home'>
            <section>

            </section>
            <h1>Latest Products</h1>

            <Link to="/search" className="findmore"> More</Link>
            <main>
                <ProductCard productId="1" name="macbook 1" price={75000} stock={10} photo="https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg" handler={addToCartHandler} />
                <ProductCard productId="2" name="shoes" price={5000} stock={5} photo="https://m.media-amazon.com/images/I/71iyUKrqZYL._SY695_.jpg" handler={addToCartHandler} />

            </main>
        </div>
    )
}

export default Home