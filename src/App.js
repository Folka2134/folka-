import React, { useState, useEffect } from 'react'

import { commerce } from './lib/commerce'

import { Home } from "./components/Home.component";

import { Badge, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import { AiFillInstagram } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { BsSnapchat } from 'react-icons/bs'
import { Cart } from './components/Cart/Cart';



const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

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

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, []);

  return (
    <main className="flex flex-col h-screen min-w-[450px]">
      <div className="grid grid-cols-1 grid-rows-6 lg:flex lg:flex-1 overflow-hidden ">

        {/* Left Bar */}
        <div className="bg-yellow-500 bg-sidebar1 bg-center border-2 border-black h-56 row-span-1 lg:h-auto lg:w-[250px] lg:flex lg:flex-col lg:justify-between">
          <div className="bg-black text-white bg-contain bg-no-repeat">
            <IconButton aria-label='Show cart items' color="primary">
              <Badge badgeContent={cart.total_items} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            {/* <Cart cart={cart}/> */}
          </div>
          <div className="h-[246px] bg-logo2invert bg-contain bg-no-repeat hidden lg:block"></div>
        </div>
        
        {/* Main section */}
        <div className="flex flex-1 flex-col row-span-6">
          <div className="flex flex-col bg-main bg-cover bg-fixed overflow-y-auto paragraph">
            <Home products={products} handleAddToCart={handleAddToCart}/>
          </div>
        </div>

        {/* Right Bar */}
        <div className="bg-black h-32  lg:h-auto lg:w-[250px] lg:flex lg:flex-col lg:justify-between">
          <div className="hidden lg:block lg:h-[250px] bg-logo2yellow bg-contain bg-no-repeat animate-pulse-slow"></div>
          <div className=" bg-black bg-opacity-80 text-[#FFB433] font-tabloid border-2 border-[#FFB433] m-5 hidden lg:h-[500px] lg:flex lg:justify-center">
            <h1 className="text-6xl">-</h1>
            <ul></ul>
          </div>
          <div className="md:h-[250px] bg-black text-[#FFB433] font-tabloid text-center">
            <div>
              <h2 className="bg-[#FFB433] text-black text-3xl">-folka- 2022©</h2>
              {/* <div class="text-3xl animate-shimmer bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-[length:400%_100%] rounded-lg">-folka- 2022©</div> */}

            </div>
            Contanct: folka2134@gmail.com
            <div className="flex grid-cols-2 justify-center transition-all">
              <AiFillInstagram size={55} className="cursor-pointer hover:text-white duration-500" />
              <AiFillFacebook size={55} className="cursor-pointer hover:text-white duration-500" />
              <BsSnapchat size={50} className="cursor-pointer hover:text-white duration-500" />
            </div>
          </div>
        </div>
      </div>
      {/* <div class="flex">Footer</div> */}
    </main>
  );
}

export default App;
