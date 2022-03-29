import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Carousell = () => {
  return (
    <div className='h-screen grid content-evenly'>
      <div className='h-[500px] bg-slate-500'></div>
      <Carousel autoPlay infiniteLoop stopOnHover swipeable showStatus={false} showIndicators={false}>
        <div className='h-[500px] bg-[#93E349]'>
        </div>
        <div className='h-[500px] bg-[#E059F0]'>
        </div>
        <div className='h-[500px] bg-[#695CFA]'>
        </div>
      </Carousel>
    </div>
  )
}
