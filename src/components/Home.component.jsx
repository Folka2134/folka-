import React from 'react'
import { Carousell } from './Carousel'

// import { Cover } from './Cover.component'
import { Nav } from './Nav.component'
import { Products } from './Product/Products.component'

export const Home = ({ products, handleAddToCart }) => {
  return (
    <div className='h-screen min-w-[250px] lg:w-full lg:px-12'>
      <Nav />
      <Carousell />
      <Products products={products} handleAddToCart={handleAddToCart} />
    </div>
  )
}

