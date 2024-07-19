import React from 'react'

function section() {
  return (
    <div className='mt-16 w-full h-screen flex flex-col-reverse gap-6 xl:gap-4 xl:flex-row justify-center xl:justify-normal items-center'>
        <div className='flex flex-col gap-8 w-[347px] md:w-[618px] xl:w-[711px]'>
            <h3 className="text-gray-50 uppercase font-['Space Grotesk']  text-2xl font-medium font-['Space Grotesk'] uppercase leading-[33.60px]">
            Creating impactful strategies and 
            creative solutions for {<span className='text-lime-200'>purpose-driven</span>} organizations
             and {<span className='text-green-200'>clients</span>} dedicated to making a positive impact.
            </h3>
            <button className="w-[200px] h-[64px] flex justify-center items-center  text-white hover:text-black px-6 py-4 rounded-lg border bg-transparent border-amber-300 gap-2.5 hover:bg-amber-300">
                            <h4 className="text-xl font-bold font-['Space Grotesk'] leading-normal">
                                Book Meeting
                            </h4>
                        </button>
        </div>
        <div className='relative xl:absolute right-0'>
            <img className=' w-[298px] md:w-[506px] xl:w-[863px]' src="/heroimage.png" alt="" />
        </div>
    </div>
  )
}

export default section