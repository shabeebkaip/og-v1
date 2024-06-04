"use client"
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import OrangeGradientLeft from '@/app/shared/components/OrangeGradientLeft';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';




const MobileProffesionalSlider = ({testimonial}) => {
   
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;
            swiper.update();
        }
    }, []);

    return (

        <div className='container relative flex flex-col justify-center w-full px-6 mx-auto my-10 md:px-0'>
            <div className=" md:text-[50px] text-[#4C4C4D] text-center mt-10 md:leading-[50px] lg:leading-[75px] flex flex-col text-[30px] leading-[44px] font-medium justify-center items-center">
                <p className="flex flex-col lg:flex-row"><span className="uppercase md:border rounded-full  text-[#FF8500] border-[#4C4C4D] px-3 ">Over 100 <span className="md:border-none border rounded-full  text-[#FF8500] border-[#4C4C4D] px-2">professionals</span></span>have already</p>
                <p>graduated from our <span className="uppercase">courses!</span></p>
            </div>

            <Swiper
                spaceBetween={15}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                style={{ paddingBottom: '40px' }}
                className="flex justify-center px-2  custom-scrollbar"
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
                    <SwiperSlide key={index} className='p-2 bg-white flex items-baseline rounded-2xl box-shadow' style={{display:'flex',alignItems:'baseline'}}>
                        <div className="flex flex-col justify-start   bg-opacity-10 rounded-[24px]  ">
                            <div className="flex md:flex-row flex-col text-[#4C4C4D] ">
                                <div className='md:w-[50%] h-[300px] '>
                                    <Image src={item?.image} className='rounded-[23px] h-full object-cover  relative  ' alt="" width={100} height={100} />
                                </div>
                                <div className="flex flex-col justify-center  md:w-[50%] text-left">
                                    <p className="xl:text-[28px] md:text-[25px] text-[22px] font-medium leading-[35.19px] ">{item.name} <span className="inline-block md:block">{item.lastName}</span></p>
                                    <p className="font-normal xl:text-[22px]  text-[14px] italic  flex ">{item.companyName}</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-normal xl:text-[23px] text-[16px] italic leading-[28.15px] text-left text-[#4C4C4D]">{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='absolute  sm:h-[350px] sm:w-[350px] w-[300px] h-[300pX] block md:hidden top-[60px] right-0  '><OrangeGradientLeft /></div>
        </div>
    );
};

export default MobileProffesionalSlider;