import Image from 'next/image'
import React from 'react'


const FourImages = ({images}) => {
   
    return (
       
         <div >
                    <div className='flex justify-end gap-3'>
                    <Image width={1000} height={500} src={images[0]} alt='Image' className='w-[80%] h-[280px] rounded-[23px] mb-[-3px] lg:w-[40%] lg:h-[280px]' />
                    <Image width={1000} height={500} src={images[1]} alt='Image' className='w-[60%] h-[280px] rounded-[23px] lg:w-[60%] lg:h-[280px]' />
                    </div>
                    <div className='flex justify-end gap-3 mt-4'>
                        <Image width={1000} height={500} src={images[2]} alt='Image' className='w-[60%] h-[280px] rounded-[23px] lg:w-[60%] lg:h-[280px]' />
                        <Image width={1000} height={500} src={images[3]} alt='Image' className='w-[80%] h-[280px] rounded-[23px] mb-[-3px] lg:w-[40%] lg:h-[280px]' />
                    </div>
                </div>
    )
}

export default FourImages
