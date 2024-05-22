import Image from 'next/image'
import React from 'react'



const TwoImages = ({images}) => {
    return (
        <div className="flex-col hidden w-full h-full gap-4 md:flex md:p-5">
            <div className="flex justify-center h-1/2">
                <Image width={1000} height={500} src={images[0]} alt="Image" className="w-full rounded-[23px] object-cover  " />
            </div>
            <div className="flex justify-center h-1/2">
                <Image width={1000} height={500} src={images[1]} alt="Image" className="w-full rounded-[23px]  object-cover " />
            </div>
        </div>
    )
}

export default TwoImages