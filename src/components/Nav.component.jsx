import React from 'react'

export const Nav = () => {
  return (
    <div className='h-26 w-[700px] bg-black text-white text-8xl cursor-pointer absolute top-0 flex justify-center'>
      <ul className='h-full flex text-center font-tabloid transition-all'>
        <button className='rounded-xs hover:text-purple-500 px-5 duration-300 '>Catalog</button>
        <button className='rounded-xs hover:text-purple-500 px-5 duration-300'>News</button>
      </ul>
    </div>
  )
}
