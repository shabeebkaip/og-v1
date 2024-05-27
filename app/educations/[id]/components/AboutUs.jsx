import BlueGradient from '@/app/shared/components/BlueGradient'
import OrangeGradient from '@/app/shared/components/OrangeGradient'
import Image from 'next/image'
import React from 'react'

const AboutUs = ({ educationDetail }) => {
    return (
        <div className='p-3 mt-20 relative'>
            <p className='flex justify-center items-center uppercase text-[#4C4C4D] md:text-[50px] text-[30px] font-medium leading-[50.73px] '><span className="text-[#92D1FB] border rounded-full border-[#4C4C4D] md:h-[54px] md:w-[200px] text-center">about</span> the course</p>
            <div className='absolute h-[300px] w-[300px] right-0 bottom-[-30%]   z-40 md:block hidden'><BlueGradient /></div>
            <div className="flex">
                <div className=' container mx-auto lg:flex  rounded-[23px] drop-shadow-xl  p-4  bg-white 2xl:pt-0 2xl:pb-0 2xl:pr-0 h-auto pt-0 md:p-2 lg:pt-0 lg:pr-0 lg:pb-0 md:pb-0 mt-14  '>
                    <div className='relative flex flex-col w-full overflow-hidden font-sans lg:flex-row '>
                        <div className='flex  lg:w-[80%] w-full '>
                            <div className='md:p-8 p-2 rounded-[23px] flex  flex-col ' >
                                <div className='block w-full mt-6 md:hidden'>
                                    <Image width={1000} height={500} src={educationDetail?.about_img} alt="Image" className="object-cover w-full h-auto rounded-lg" />
                                </div>
                                <div className=' text-[20px]   font-medium text-[#4C4C4D] mt-4 lg:mt-0 w-full '>
                                    <p className="font-medium">{educationDetail?.aboutDescription1}</p>
                                    <p className="mt-5  text-[#4C4C4D] font-light">{educationDetail?.aboutDescription2}</p>
                                </div>
                                <div className="grid grid-cols-2 mt-6 w-full xl:gap-4 gap-4 text-[17px] lg:text-[15px] xl:text-[20px] lg:gap-10">
                                    <div className="block  w-full font-medium">
                                        {educationDetail?.aboutus_point?.filter((item, index) => index % 2 !== 0).map((item, index) => (
                                            <li className='font-light break-words  ' key={index} > <span className="font-medium">{item?.text}</span>: {item?.pointDescription} </li>

                                        ))}
                                    </div>
                                    <div className="block w-full font-medium">
                                        {educationDetail?.aboutus_point?.filter((item, index) => index % 2 === 0).map((item, index) => (
                                            <li className='font-light break-words  ' key={index} > <span className="font-medium">{item?.text}</span>: {item?.pointDescription} </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-[40%] md:flex hidden justify-end  '>
                            <Image src={educationDetail?.about_img} alt='Image' className='lg:w-[400px] w-full h-auto rounded-lg object-cover' width={100} height={100} />
                            <div className='absolute hidden transform -translate-x-1/2 -translate-y-1/2 bottom-8 md:block '>
                                <button className='text-white px-4 py-2 rounded-full border border-[#FF8500]  bg-[#FF8500] text-[20px] 2xl:text-[30px]  lg:text-[25px]  lg:w-[220px] w-auto 2xl:w-[250px] 2xl:-ml-24 lg:-ml-28 md:text-[30px] md:-ml-24 md:w-[400px] '>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute h-[300px] w-[300px] left-0 bottom-[-30%]  hidden lg:block'><OrangeGradient /></div>
        </div>
    )
}

export default AboutUs
