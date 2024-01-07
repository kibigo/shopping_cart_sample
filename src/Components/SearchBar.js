import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar ({products, setProducts}){

    const [search, setSearch] = useState('')

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSearch = () => {
        const searchProduct = products.filter((product) => 
            product.title.toLowerCase().includes(search.toLowerCase())
        )
        setProducts(searchProduct)
    }

    return(
        <div className="search">
            <input 
                
                type="text"
                placeholder="what are you looking for?"
                value={search}
                onChange={handleChange}
                
            /> 
            <button onClick={handleSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
        </div>
    )
}

export default SearchBar