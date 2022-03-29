import React from 'react'
import { Carousel } from './Carousel'

// import { Cover } from './Cover.component'
import { Nav } from './Nav.component'

export const Home = () => {
  return (
    <div className='h-screen w-full'>
      {/* <Cover /> */}
      <Carousel />
      <Nav />
    </div>
  )
}
