import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Carousell = () => {
  return (
    <div className='h-screen grid content-evenly'>
      <div className='h-[500px] bg-slate-500'></div>
      <Carousel autoPlay infiniteLoop stopOnHover swipeable showStatus={false} showIndicators={false}>
        <div className='h-[500px] bg-[#93E349]'>
          {/* <img src="assets/1.jpeg" /> */}
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div className='h-[500px] bg-[#E059F0]'>
          {/* <img src="assets/2.jpeg" /> */}
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div className='h-[500px] bg-[#695CFA]'>
          {/* <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  )
}
