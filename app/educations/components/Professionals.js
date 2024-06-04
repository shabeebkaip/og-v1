"use client"
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Scrollbar } from 'swiper/modules';
import OrangeGradientLeft from '@/app/shared/components/OrangeGradientLeft';
import { globalGetService } from '@/app/utils/apiServices';
import Image from 'next/image';



const Professionals = ({testimonial}) => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;
            swiper.update();
        }
    }, []);

    return (
        <div className='container relative flex flex-col justify-center w-full px-6   mx-auto  md:px-0'>
        <div className=" md:text-[50px] text-[#4C4C4D] text-center mt-10 md:leading-[50px] lg:leading-[75px] flex flex-col text-[34px] leading-[44px] font-medium justify-center items-center py-12">
            <p className="flex flex-col lg:flex-row"><span className="uppercase md:border rounded-full  text-[#FF8500] border-[#4C4C4D] px-3 ">Over 100 <span className="md:border-none border rounded-full  text-[#FF8500] border-[#4C4C4D] px-2">professionals</span></span>have already</p>
            <p>graduated from our <span className="uppercase">courses!</span></p>
        </div>

        <Swiper
            spaceBetween={15}
            modules={[Scrollbar]}
            scrollbar={{ draggable: true }}
            className="flex justify-center bg-white px-2 py-10 pb-32 custom-scrollbar relative  "
            style={{paddingBottom:'80px'}}
            autoplay={{ delay: 3000 }}
            initialSlide={1}
            breakpoints={{

                1024: {
                    slidesPerView: 3
                },

                768: {
                    slidesPerView: 2
                },

                0: {
                    slidesPerView: 1
                }
            }}
        >
            {testimonial?.map((item, index) => (
                <SwiperSlide key={index} className='p-2 bg-white  rounded-2xl box-shadow ' style={{display:'flex',alignItems:'baseline'}}>

                    <div className="flex flex-col   bg-opacity-10 rounded-[24px] p-5 gap-[25px]">
                        <div className="flex md:flex-row flex-col text-[#4C4C4D] gap-[20px]">
                            <div className='md:w-[50%] xl:h-[200px] h-[150px]'>
                                <Image src={item?.image} className='rounded-[23px] z-[100] relative  object-cover' alt="" width={100} height={100} />
                            </div>
                            <div className="flex flex-col justify-center  md:w-[50%] text-left">
                                <p className="xl:text-[28px] md:text-[25px] text-[22px] font-medium leading-[35.19px] ">{item.name} <span className="inline-block md:block">{item.lastName}</span></p>
                                <p className="font-normal xl:text-[22px]  md:text-[20px] text-[18px] italic  flex ">{item.companyName}</p>
                            </div>
                        </div>
                        <div>
                            <p className="font-normal xl:text-[23px] text-[20px] italic leading-[28.15px] text-left text-[#4C4C4D]">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        <div className='absolute  sm:h-[350px] sm:w-[350px] w-[300px] h-[300pX] block md:hidden top-[60px] right-0  '><OrangeGradientLeft /></div>
    </div>
    );
};

export default Professionals;