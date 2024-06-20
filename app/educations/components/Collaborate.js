"use client"
import { useEffect, useState } from 'react';
import { globalGetService } from '@/app/utils/apiServices';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Scrollbar } from 'swiper/modules';
import Image from 'next/image';
import PageContents from '@/app/shared/components/PageContents';

const Collaborate = ({ universities, pageContent }) => {

    const pageContent1 = pageContent?.pageContent?.[3]
    const text = pageContent1?.text

    return (
        <div className="container mx-auto mt-12 ">
            <div className="flex flex-col items-center justify-center ">
                <p className=" rounded-full px-1 py-  2xl:leading-[75px] leading-[74px] lg:text-[40px] font-normal uppercase 2xl:w-[80%] lg:w-[80%] 2xl:text-[50px] text-[34px] md:text-[40px] text-center ">
                    <span>
                       <PageContents item={pageContent1} index="3"/>
                    </span>
                </p>
            </div>


            <Swiper
                spaceBetween={15}
                modules={[Scrollbar]}
                scrollbar={{ draggable: true }}
                className="flex justify-center px-2 py-10 pb-32 custom-scrollbar"
                style={{ paddingBottom: '80px' }}
                autoplay={{ delay: 3000 }}
                initialSlide={1}
                breakpoints={{

                    1024: {
                        slidesPerView: 5
                    },

                    768: {
                        slidesPerView: 4
                    },

                    0: {
                        slidesPerView: 2
                    }
                }}
            >
                {universities.map((item, index) => (
                    <SwiperSlide key={index} className=''>


                        <Image className="object-contain w-20 h-20 " src={item?.image} alt={`img-${index}`} width={200} height={200} />

                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
    );
};

export default Collaborate;
