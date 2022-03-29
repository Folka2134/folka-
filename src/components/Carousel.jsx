import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Carousell = () => {
  return (
    <div className='h-screen grid content-evenly'>
      <div className='h-[500px] bg-mainBanner bg-cover bg-left-bottom'></div>
      <Carousel autoPlay infiniteLoop stopOnHover swipeable showStatus={false} showIndicators={false}>
        <div className='h-[500px] bg-banner1 bg-cover'>
        </div>
        <div className='h-[500px] bg-banner2 bg-cover bg-bottom'>
        </div>
        {/* <div className='h-[500px] bg-[#695CFA]'>
        </div> */}
      </Carousel>
    </div>
  )
}
