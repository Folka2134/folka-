import React from 'react'

import { Cover } from './Cover.component'
import { Nav } from './Nav.component'

export const Home = () => {
  return (
    <div className='h-screen w-full'>
      <Cover />
      <Nav />
    </div>
  )
}
