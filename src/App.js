import './App.css';
import { useEffect, useState } from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Cart from './Components/Cart';


function App() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])


  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then((data) => data.json())
    .then((data) => {
      setProducts(data.products)
    })
    .catch((error) => {
      console.log("This is the error: ", error)
    })
  }, [])


  const addProduct = (newCartProduct) => {
    const existingProduct = cart.find((item) => item.product.id == newCartProduct.id)

    if (existingProduct){
      const latestCart = cart.map((item) => 
        item.product.id === newCartProduct.id ? {
          ...item, quantity: item.quantity + 1} : item
      )
      setCart(latestCart)
    } 
    else{
      setCart([...cart, {product: newCartProduct, quantity: 1}])
    }
  }

  const removeFromCart = (newCartProduct) => {
    const updatedCart = cart.filter((item) => item.product.id !== newCartProduct.id)
    setCart(updatedCart)
  }

  // const totalAmount = () => {
  //   return cart.reduce((total, item) => 
  //               total + item.product.price * item.quantity, 0)
  // }
  const totalAmount = () => {
    let total = 0

    for (const item of cart){
      total += item.product.price * item.quantity

    }
    return total
  }

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar cart={cart} />
        <Routes>

          <Route path='/' element={<Home products={products} addToCart={addProduct}/>}/>
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} totalAmount = {totalAmount}/>}/>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
