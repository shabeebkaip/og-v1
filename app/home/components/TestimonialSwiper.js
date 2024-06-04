"use client"
import React from 'react'
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Scrollbar } from 'swiper/modules';
import Image from 'next/image';

const TestimonialSwiper = ({testimonials}) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current) {
        const swiper = swiperRef.current.swiper;
        swiper.update();
    }
}, []);
  return (
    <Swiper
      spaceBetween={30}
      modules={[Scrollbar, Autoplay]}
      scrollbar={{ draggable: true }}
      className="flex justify-center pb-40 custom-scrollbar h-full  "
      style={{paddingBottom:'80px'}}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      initialSlide={1}
      loop={true}
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
      {testimonials?.map((item, index) => (
        <SwiperSlide key={index} className='relative h-full min-h-[700px] rounded-2xl px-10 '>
          <div className='flex flex-col gap-5 '>
            <div>
              <p className='text-left text-[#4C4C4D] lg:text-[20px] xl:text-[22px] sm:text-[22px] text-[17px] 2xl:min-h-[550px] 2xl:text-[24px]   font-light'>{item.description}</p>
            </div>
            <div className='flex flex-col items-center justify-start w-full gap-5 md:flex-row bottom-10 '>
              <div className='md:w-20 md:h-20 '>
                <Image width={1000} height={500}  className='rounded-[150px] w-full h-full object-contain ' src={item.image} alt="" />
              </div>
              <div className='flex flex-col items-start'>
                <h3 className=' xl:text-[21px] lg:text-[20px] font-light text-black text-left'>{item.name}</h3>
                <h4 className='text-[#4C4C4D] xl:text-[20px] lg:text-[18px] font-light text-left'>{item.role}</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default TestimonialSwiper