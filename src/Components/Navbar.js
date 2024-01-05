import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


function Navbar({cart}){

    return(
        <nav>

            <div className="nav-heading">
                <h1>Quikmart</h1>
            </div>
            <div className="nav-container">
                <h4>Home</h4>
                <h4>Products</h4>
                <h4>About</h4>
                <NavLink to="/cart" className="cart">
                    <FontAwesomeIcon icon={faCartShopping}/>
                    Cart {cart.length}
                </NavLink> 
            </div>
        </nav>
    )
}

export default Navbar