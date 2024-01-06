import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import About from "./About";


function Navbar({cart}){

    return(
        <nav>

            <div className="nav-heading">
                <h1>Quikmart</h1>
            </div>
            <div className="nav-container">
                <Link to="/">
                    Home
                </Link>
                <h4>Products</h4>
                <Link to='/about'>
                    About
                </Link>
                <NavLink to="/cart" className="cart">
                    <FontAwesomeIcon icon={faCartShopping}/>
                    Cart {cart.length}
                </NavLink> 
            </div>
        </nav>
    )
}

export default Navbar