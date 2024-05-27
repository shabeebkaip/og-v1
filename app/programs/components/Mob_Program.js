import React from 'react'
import OrangeGradient from '@/app/shared/components/OrangeGradient'
import Image from 'next/image'

const Mob_Program = ({ data }) => {
  return (
    <div className='relative flex flex-col w-full font-Sans lg:flex-row '>
      <div className='flex justify-center w-full '>
        <div className='rounded-[23px] flex justify-center items-center mt-2 flex-col bg-white w-full' style={{ boxShadow: '0px 4px 20px 0px #00000026' }}>
          <div className=' w-full'>
            <Image width={1000} height={500} src={data?.image} alt='Image' className='w-full h-auto rounded-[23px] object-cover' />
          </div>
          <div className='flex items-center justify-center md:w-[50%] w-full py-10'>
            <p className='text-[#656565]  px-8 md:px-0 font-medium leading-[44px] text-[35px] md:text-[44px]'>{data?.text}</p>
          </div>
        </div>
      </div>
      <div className='absolute bottom-[-17%] w-full h-[9rem] z-[-1] md:hidden block'><OrangeGradient /></div>

    </div>
  )
}

export default Mob_Program
