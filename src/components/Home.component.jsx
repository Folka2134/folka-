import React from 'react'
import { Carousell } from './Carousel'

// import { Cover } from './Cover.component'
import { Nav } from './Nav.component'

export const Home = () => {
  return (
    <div className='h-full w-full px-12'>
      <Nav />
      <Carousell />
      <Products />
    </div>
  )
}

const Products = () => {
  return (
    <main className='h-screen bg-slate-500 m-20'>
      <div className='h-full grid grid-cols-4 grid-rows-4 gap-4'>
        <div className='border-2'>1</div>
        <div className='border-2'>1</div>
        <div className='border-2'>1</div>
        <div className='border-2'>1</div>
        <div className='border-2'>1</div>
        <div className='border-2'>1</div>
        <div className='border-2'>1</div>
        <div className='border-2'>1</div>
        <div className='border-2'>1</div>
        <div className='border-2'>1</div>
        <div className='border-2'>1</div>
        <div className='border-2'>1</div>
        <div className='border-2'>1</div>
        <div className='border-2'>1</div>
        <div className='border-2'>1</div>
        <div className='border-2'>1</div>
      </div>
    </main>
  )
}