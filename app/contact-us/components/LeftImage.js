import React from 'react'
import Image from 'next/image'

const LeftImage = ({ images }) => {
  return (
    
    // <div className=' pt-20 flex w-full'>
    //     <div className=' grid grid-cols-12 gap-4'>
    //         <div className=' col-span-3 h-full w-full'>
    //             <Image className='h-[80%] w-full rounded-3xl object-cover' blurDataURL='lazy' src={images[0]} alt="" width={200} height={200} />
    //         </div>
    //         <div className=' col-span-3 flex flex-col gap-4 w-full'>
    //             <Image className='w-[80%] h-[40%]  rounded-3xl object-cover' src={images[1]} alt="" width={200} height={200} />
    //             <Image className='w-full h-[60%]  rounded-3xl object-cover' src={images[2]} alt="" width={200} height={200} />

    //         </div>
        

    //     </div>

    // </div>
    <div className='flex gap-4'>
        <div className='w-[40%]'>
        <Image className='h-[80%] w-full rounded-3xl object-cover' src={images[0]} alt="" width={200} height={200} />

        </div>
        <div className='w-[60%] flex flex-col gap-3'>
        <Image className='  w-[80%] rounded-3xl object-cover' src={images[1]} alt="" width={200} height={200} />
        <Image className='w-full rounded-3xl object-cover' src={images[2]} alt="" width={200} height={200} />
            
        </div>
    </div>



  )
}

export default LeftImage
