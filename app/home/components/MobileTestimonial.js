"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules';
import OrangeGradient from '@/app/shared/components/OrangeGradient';
import Image from 'next/image';

const MobileTestimonial = ({ testimonials }) => {
    return (
        <div className='flex justify-center w-full px-6 md:px-0 relative'>
            <div className='w-full h-[200px] top-[-10%] absolute md:hidden block '>
                <OrangeGradient />
            </div>
            <Swiper
                spaceBetween={30}
                modules={[Pagination, Autoplay]}
                className="flex justify-center pb-20"
                autoplay={{ delay: 3000 }}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                initialSlide={1}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                }}
            >
                {testimonials?.map((item, index) => (
                    <SwiperSlide key={index} className='rounded-2xl'>
                        <div className='flex flex-col gap-5 px-10 py-14'>
                            <div>
                                <p className='text-left text-[#4C4C4D] xl:text-[26px] sm:text-[22px] text-[16px]  font-light'>{item.description}</p>
                            </div>
                            <div className='flex flex-col items-center justify-start w-full gap-5 md:justify-center md:flex-row'>
                                <div className='w-20 h-20 '>
                                    <Image width={1000} height={500} className='rounded-[150px] object-contain' src={item.image} alt="" />
                                </div>
                                <div className='flex flex-col items-start'>
                                    <h3 className='xl:text-[24px] lg:text-[20px] font-light text-black text-left'>{item.name}</h3>
                                    <h4 className='text-[#4C4C4D] xl:text-[24px] lg:text-[20px]font-light text-left'>{item.role}</h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MobileTestimonial;
