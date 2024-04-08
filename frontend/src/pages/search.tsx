import React, { useState } from 'react'
import ProductCard from "../components/product-card"
const Search = () => {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [maxPrice, setMaxPrice] = useState(100000);
    const [category, setCategory] = useState("'");
    const [Page, setPage] = useState(1);
    const addToCartHandler = () => {};
    const isPreviousPage=Page>1;
    const isNextPage=Page<4;
    return (

        <div className="product-search-page">
            <aside>
                <h3>Filters</h3>
                <div>

                    <h4>Sort</h4>
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}>
                        <option value="">None</option>
                        <option value="asc">price (low to high)</option>
                        <option value="dsc">price (high to low)</option>
                    </select>
                    </div>
                    <div>

                    <h4>Max Price: {maxPrice || ""}</h4>
                    <input type="range"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))} />
        </div>
        <div>

                    <h4>Category</h4>

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                        <option value="">All</option>
                        <option value="electronics">electronics</option>
                        <option value="shoes">shoes</option>
                    </select>
                    </div>

            </aside>
            <main>
                <h1>Products</h1>
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                <div className="search-product-list">
                    <ProductCard
                        productId="1"
                        name="macbook 1"
                        price={75000}
                        stock={10}
                        photo="https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg"
                        handler={addToCartHandler}
                        />
                <article>
                    <button 
                    disabled={!isPreviousPage}
                    onClick={() => setPage((prev) => prev - 1)}>Prev</button>
                    <span>{Page} of 4</span>
                    <button
                    disabled={!isNextPage} 
                    onClick={() => setPage((next) => next + 1)}>Next</button>

                    </article>
                </div>
            </main>
            </div>


    )
}

export default Search