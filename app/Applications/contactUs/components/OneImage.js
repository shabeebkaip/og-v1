import Image from 'next/image'
import React from 'react'

export const Oneimage = ({ images }) => {
  return (
    <div>
      <div className='hidden w-full md:flex md:p-5'>
        <Image width={1000} height={500} src={images[0]} alt='Image' className='object-fill w-full  rounded-[23px]' />
      </div>
    </div>
  )
}
