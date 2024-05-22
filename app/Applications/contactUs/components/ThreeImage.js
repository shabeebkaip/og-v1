import Image from 'next/image'
import React from 'react'

const Threeimage = ({ images }) => {
    return (
        <div className='flex flex-col gap-3'>

            <div className='flex justify-center h-full '>
                <Image width={1000} height={500} src={images[0]} alt='Image' className='w-[100%] rounded-[23px]   object-cover' />

            </div>
            <div className='flex justify-end h-full gap-3'>
                <Image width={1000} height={500} src={images[1]} alt='Image' className='w-[50%]  rounded-[23px] mb-[-3px]  object-cover' />
                <Image width={1000} height={500} src={images[2]} alt='Image' className='w-[50%]  rounded-[23px]  object-cover' />
            </div>

        </div>
       
    )
}

export default Threeimage
