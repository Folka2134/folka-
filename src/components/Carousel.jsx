import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Carousell = () => {
  return (
    <div className='h-screen mt-36'>
      <div className='h-[500px] bg-mainBanner bg-top bg-black rounded-xl border-2 border-black flex flex-col justify-center p-6 cursor-pointer'>
        <div className='text-center text-9xl text-[#FFB433] font-tabloid'>
          <div className='overline'>Sale</div>
          <h2 className='underline'>23-26 feb</h2>
        </div>
      </div>
      {/* <Carousel autoPlay infiniteLoop stopOnHover swipeable showStatus={false} showIndicators={false} interval={9000} transitionTime={2000}>
        <div className='h-[500px] bg-banner1 bg-cover rounded-xl'>
        </div>
        <div className='h-[500px] bg-banner2 bg-cover bg-bottom rounded-xl'>
        </div>
        <div className='h-[500px] bg-banner3 bg-cover bg-bottom rounded-xl'>
        </div>
      </Carousel> */}
    </div>
  )
}
