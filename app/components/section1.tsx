import React from 'react'
import Slider from "./slider"
function section1() {
  return (
    <div className='mt-16'>
        <div className='flex flex-col gap-12'>
            <h2 className="text-gray-50 text-4xl text-center font-bold font-['Space Grotesk'] uppercase leading-[48px]">
            Our top clients
            </h2>
            <Slider />
        </div>
    </div>
  )
}

export default section1


