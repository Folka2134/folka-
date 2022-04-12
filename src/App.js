import React, { useState, useEffect } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { commerce } from './lib/commerce'

import { Badge, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import { AiFillInstagram } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { BsSnapchat } from 'react-icons/bs'

import { Home } from "./components/Home.component";
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/CheckoutForm/Checkout/Checkout.component';



const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const [activeCart, setActiveCart] = useState(false)

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve()

    setCart(cart)
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const cart = await commerce.cart.update(productId, { quantity })
    setCart(cart.cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const cart = await commerce.cart.remove(productId)
    setCart(cart.cart)
  }
  const handleEmptyCart = async () => {
    const cart = await commerce.cart.empty()
    setCart(cart.cart)
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh()

    setCart(newCart)
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)

      setOrder(incomingOrder)
      refreshCart()
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }

  const openCart = () => {
    if (activeCart === false) {
      setActiveCart(true)
    } else {
      setActiveCart(false)
    }
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, []);

  return (
    <Router>
      <main className="flex flex-col h-screen">
        <div className="grid grid-cols-1 grid-rows-6 lg:flex lg:flex-1 overflow-hidden ">
          {/* <div className={activeCart ? '' : 'hidden'} >
            <Cart
              cart={cart}
              handleEmptyCart={handleEmptyCart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleUpdateCartQty={handleUpdateCartQty}
            />
          </div> */}
          {/* Customer Bar */}
          <div className="bg-black flex justify-evenly w-[250px] text-white bg-contain bg-no-repeat absolute z-30 mt-5 lg:mt-0 right-5 lg:right-auto">
            <div className='flex text-lg font-tabloid'>
              <button className='pr-5 hover:text-blue-600'>Account</button>
              <button className='hover:text-blue-600'>Sign-Out</button>
              <div >
                <IconButton aria-label='Show cart items' color="primary" onClick={() => openCart()}>
                  <Badge badgeContent={cart.total_items} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </div>
              <div className={activeCart ? '' : 'hidden'} >
                <Cart
                  cart={cart}
                  handleEmptyCart={handleEmptyCart}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleUpdateCartQty={handleUpdateCartQty}
                />
              </div>
            </div>
          </div>

          {/* Left Bar */}
          <div className="bg-yellow-500 bg-sidebar1 bg-center border-2 border-black h-56 row-span-1 lg:h-auto lg:w-[250px] lg:flex lg:flex-col lg:justify-end">
            <div className="min-h-[246px] bg-logo2invert bg-contain bg-no-repeat hidden lg:block"></div>
          </div>

          {/* Main section */}
          <div className="flex flex-1 flex-col row-span-6">
            <div className="flex flex-col bg-main bg-cover bg-fixed overflow-y-auto paragraph">
              <Routes>
                <Route path='/' element={<Home products={products} handleAddToCart={handleAddToCart} />} />
                <Route path='/checkout' 
                  element={
                    <Checkout 
                      cart={cart} 
                      order={order} 
                      handleCaptureCheckout={handleCaptureCheckout} 
                      error={errorMessage}
                    />
                  }
                />
              </Routes>
            </div>
          </div>

          {/* Right Bar */}
          <div className="bg-black h-32  lg:h-auto lg:w-[250px] lg:flex lg:flex-col lg:justify-between">
            <div className="hidden lg:block lg:min-h-[246px] bg-logo2yellow bg-contain bg-no-repeat animate-pulse-slow"></div>
            <div className=" bg-black bg-opacity-80 text-[#FFB433] font-tabloid border-2 border-[#FFB433] m-5 hidden lg:h-[500px] lg:flex lg:justify-center">
              <h1 className="text-6xl">Events</h1>
              <ul></ul>
            </div>
            <div className="md:h-[250px] bg-black text-[#FFB433] font-tabloid text-center">
              <div>
                <h2 className="bg-[#FFB433] text-black text-3xl">-folka- 2022©</h2>
                {/* <div class="text-3xl animate-shimmer bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-[length:400%_100%] rounded-lg">-folka- 2022©</div> */}
              </div>
              Contact: folka2134@gmail.com
              <div className="flex grid-cols-2 justify-center transition-all">
                <AiFillInstagram size={55} className="cursor-pointer hover:text-white duration-500" />
                <AiFillFacebook size={55} className="cursor-pointer hover:text-white duration-500" />
                <BsSnapchat size={50} className="cursor-pointer hover:text-white duration-500" />
              </div>
            </div>
          </div>
        </div>
      </main >
    </Router>
  );
}

export default App;
