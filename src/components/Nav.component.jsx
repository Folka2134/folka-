import React from 'react'

export const Nav = () => {
  return (
    <div className='h-26 bg-black text-white text-8xl cursor-pointer '>
      <ul className='h-full flex text-center font-tabloid transition-all'>
        <li className='rounded-xs hover:bg-gray-600 hover:bg-opacity-30 hover:text-purple-500 px-5 duration-300 '>Catalog</li>
        <li className='rounded-xs hover:bg-gray-600 hover:bg-opacity-30 hover:text-purple-500 px-5 duration-300'>News</li>
      </ul>
    </div>
  )
}
