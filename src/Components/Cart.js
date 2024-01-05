import React from "react";

function Cart({ cart, setCart, removeFromCart, totalAmount }) {

  

    return (
        <div>
            <h1>Selected Items:</h1>
            {cart.length == 0 ? (
                <p>Your cart is empty</p>
            ) : (

                <div className="table-container">
                    
                    <table className="table">
                        
                        <thead>

                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td> <img className="table-img" src={item.product.thumbnail}/></td>
                                    <td>{item.product.title}</td>
                                    <td> ${item.product.price}</td>
                                    <td className="quantity">
                                        <button onClick={() => {
                                            setCart((prevdata) => {
                                                const updatedQuantity = prevdata.map(
                                                    (previtem) => previtem.product.id == item.product.id ? {
                                                        ...previtem, quantity:Math.max(item.quantity - 1, 0)
                                                    } : previtem
                                                )
                                                return updatedQuantity
                                            })
                                        }}>
                                            -
                                        </button>

                                        {item.quantity}

                                        <button onClick={() => {
                                            setCart((prevdata) => {
                                                const updatedQuantity = prevdata.map(
                                                    (previtem) => previtem.product.id == item.product.id ? {
                                                        ...previtem, quantity: item.quantity + 1
                                                    } : previtem
                                                )
                                                return updatedQuantity
                                            })
                                        }}>
                                            +
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => removeFromCart(item.product)}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                                
                            ))}
                            <tr className="totalAmount">
                                <td className="empty"></td>
                                <td className="empty"></td>
                                <td className="empty"></td>
                                <td className="empty"></td>
                                <td>
                                    Total: ${totalAmount()}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            )}

        </div>
    )
}

export default Cart