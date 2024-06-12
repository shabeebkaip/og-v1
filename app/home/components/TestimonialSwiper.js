"use client"
import React from 'react'
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Scrollbar } from 'swiper/modules';
import Image from 'next/image';

const TestimonialSwiper = ({ testimonials }) => {
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
      className="flex justify-center pb-40 custom-scrollbar h-full"
      style={{ paddingBottom: '80px' }}
      initialSlide={1}
      loop={true}
      breakpoints={{
        1024: {
          slidesPerView: 2.2
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
        <SwiperSlide key={index} className="h-auto min-h-[500px] flex items-center justify-center p-4 rounded-md">
          <div className="flex flex-col gap-5 h-full  rounded-2xl  p-6">
            <div className="flex-grow">
              <p className="text-left text-[#4C4C4D] lg:text-[20px] xl:text-[22px] sm:text-[22px] text-[17px] 2xl:text-[24px] font-light">{item.description}</p>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-5 md:flex-row">
              <div className="md:w-20 md:h-20">
                <Image width={1000} height={500} className="rounded-full w-full h-full object-contain" src={item.image} alt={item.name} />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="xl:text-[21px] lg:text-[20px] font-light text-black text-left">{item.name}</h3>
                <h4 className="text-[#4C4C4D] xl:text-[20px] lg:text-[18px] font-light text-left">{item.role}</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TestimonialSwiper;
