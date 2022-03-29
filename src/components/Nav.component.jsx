import React from 'react'

export const Nav = () => {
  return (
    <div className='h-26 bg-black text-white text-8xl cursor-pointer sticky top-0'>
      <ul className='h-full flex text-center font-tabloid transition-all'>
        <li className='rounded-xs hover:text-purple-500 px-5 duration-300 '>Catalog</li>
        <li className='rounded-xs hover:text-purple-500 px-5 duration-300'>News</li>
      </ul>
    </div>
  )
}
