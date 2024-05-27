import Image from 'next/image'
import React from 'react'

const Organizer = ({ educationDetail }) => {
  return (
    <div className='container px-6 mx-auto mt-20 md:px-0'>
      <div className='md:text-[40px] font-medium flex flex-col justify-center items-center gap-4 text-[30px]'>
        <h3 className='text-[#FF8500] border  rounded-[45px] border-[#4C4C4D] px-4 uppercase' >Organizer - </h3>
        <h3 className='uppercase text-[#4C4C4D] '>{educationDetail?.organizerName}</h3>

      </div>
      <div className='gap-10 pt-10 w-full md:flex justify-center items-start'>
        <div className='md:w-[30%] md:justify-end justify-center flex items-center'>
          <Image src={educationDetail?.organizer_img} className=' w-[400px] object-cover' alt="" width={200} height={500} />
        </div>
        <div className='md:w-[70%] my-6 md:my-0'>
          <p className='text-[#4C4C4D] xl:text-[24px] text-[20px] leading-[30px] font-light'>{educationDetail?.orgDescription1}</p>
          <p className='text-[#4C4C4D]  xl:text-[24px] text-[20px] leading-[30px] font-light'>{educationDetail?.orgDescription2}</p>
        </div>
      </div>
    </div>
  )
}

export default Organizer