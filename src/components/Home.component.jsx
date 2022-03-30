import React from 'react'
import { Carousell } from './Carousel'

// import { Cover } from './Cover.component'
import { Nav } from './Nav.component'
import { Products } from './Product/Products.component'

export const Home = ({ products }) => {
  return (
    <div className='h-screen w-full px-12'>
      <Nav />
      <Carousell />
      <Products products={products} />
    </div>
  )
}

