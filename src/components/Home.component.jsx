import React from 'react'
import { Carousell } from './Carousel'

// import { Cover } from './Cover.component'
import { Nav } from './Nav.component'

export const Home = () => {
  return (
    <div className='h-full w-full p-12'>
      {/* <Cover /> */}
      <Carousell />
      <Nav />
      {/* <Carousell /> */}
    </div>
  )
}
