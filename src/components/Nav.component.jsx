import React from 'react'

export const Nav = () => {
  return (
    <div className='h-26 w-[250px] bg-black text-white text-6xl cursor-pointer absolute top-20 lg:top-5 flex justify-center z-20'>
      <ul className='h-full flex text-center font-tabloid transition-all'>
        <button className='rounded-xs hover:text-[#8353DC] px-5 duration-300 '>Catalog</button>
        {/* <button className='rounded-xs hover:text-purple-500 px-5 duration-300'>News</button> */}
      </ul>
    </div>
  )
}
