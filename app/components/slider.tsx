import React from 'react'

function slider() {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
<div className='flex gap-8'>
<img className='w-[160px] h-20 md:w-[260px] md:h-40' src="slider/voosol.png" alt="" />
<img className='w-[160px] h-20 md:w-[260px] md:h-40' src="slider/deaftawk.png" alt="" />
</div>
<div className='flex gap-8'>
<img className='w-[160px] h-20 md:w-[260px] md:h-40' src="slider/dubdubai.png" alt="" />
<img className= 'w-[160px] h-20 md:w-[260px] md:h-40' src="slider/cic.png" alt="" />
</div>
    </div>
  )
}

export default slider