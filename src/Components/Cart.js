import React from "react";

function Cart({ cart, setCart, removeFromCart, totalAmount }) {

  

    return (
        <div>
            <h1>Selected Items</h1>
            {cart.length == 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div>
                            <div>

                                <img src={item.product.thumbnail} />
                            </div>
                            <div>
                                <h1>{item.product.title}</h1>
                                <p>Price: ${item.product.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>

                            <div>
                                <button onClick={() => removeFromCart(item.product)}>
                                    Remove Product
                                </button>
                            </div>

                            <div>
                                <button onClick={() => {
                                    setCart((prevcart) => {
                                        const updatedQuantity = prevcart.map(
                                            (prevItem) => prevItem.product.id == item.product.id ?{
                                                ...prevItem, quantity: item.quantity + 1
                                            } : prevItem
                                        )
                                        return updatedQuantity
                                    })
                                }}>
                                    +
                                </button>

                                <button onClick={() => {
                                    setCart((prevcart) => {
                                        const updatedQuantity = prevcart.map(
                                            (prevItem) => prevItem.product.id == item.product.id ? {
                                                ...prevItem, quantity:Math.max (item.quantity - 1, 0)
                                            } : prevItem
                                        )
                                        return updatedQuantity
                                    })
                                }}>
                                    -
                                </button>
                            </div>



                        </div>


                    ))}
                    <div>
                        <div>
                            <p>Total Amount: ${totalAmount()}</p>
                        </div>
                    </div>
                </div>


            )}

        </div>
    )
}

export default Cart