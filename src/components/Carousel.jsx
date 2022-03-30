import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Carousell = () => {
  return (
    <div className='h-screen grid content-evenly'>
      <div className='h-[500px] bg-mainBanner bg-top bg-black rounded-xl'></div>
      <Carousel autoPlay infiniteLoop stopOnHover swipeable showStatus={false} showIndicators={false} interval={9000} transitionTime={2000}>
        <div className='h-[500px] bg-banner1 bg-cover rounded-xl'>
        </div>
        <div className='h-[500px] bg-banner2 bg-cover bg-bottom rounded-xl'>
        </div>
        <div className='h-[500px] bg-banner3 bg-cover bg-bottom rounded-xl'>
        </div>
      </Carousel>
    </div>
  )
}
