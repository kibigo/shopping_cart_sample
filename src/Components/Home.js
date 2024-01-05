import React from "react";

function Home({ products, addToCart }) {

    return (
        <div className="home">
            <div className="heading">
                <h1>Welcome</h1>
            </div>
            <div className="container">

                <div className="products">

                    {products.map((product) => (
                        <div key={product.id}>
                            <h3>{product.title}</h3>
                            <img src={product.thumbnail}></img>
                            <p>Price: ${product.price}</p>
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home