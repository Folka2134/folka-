import React from 'react'
import { Carousell } from './Carousel'

// import { Cover } from './Cover.component'
import { Nav } from './Nav.component'
import { Products } from './Products'

export const Home = () => {
  return (
    <div className='h-full w-full px-12'>
      <Nav />
      <Carousell />
      <Products />
    </div>
  )
}

