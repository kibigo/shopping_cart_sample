import React from "react";

function Home({products, addToCart}){

    return(
        <div>
            <h1>Welcome to QuickMart</h1>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <img src={product.thumbnail}></img>
                    <p>Price: ${product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    )
}

export default Home