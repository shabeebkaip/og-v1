'use client'
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';



const PrizeMobile = ({hackathonData}) => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;
            swiper.update();
        }
    }, []);


    return (
        <>
            <div className='text-[30px] font-medium flex flex-col justify-center items-center gap-4 px-6'>
                <h3 className='text-[#FF8500] border-2  rounded-[45px] border-[#4C4C4D] px-4'>PRIZES</h3>
                <h3 className=' text-[#4C4C4D] text-center '>$120,000  in prizes </h3>
            </div>

            <div className='flex justify-center w-full h-full mt-10 px-3'>

                <Swiper
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                    }}
                    style={{paddingBottom:"40px"}}
                    className="flex justify-center pb-16 custom-scrollbar"
                    autoplay={{ delay: 3000 }}
                    initialSlide={1}
                    slidesPerView={1}

                >
                    {hackathonData?.prizes?.map((item, index) => (
                        <SwiperSlide key={index} className=' rounded-2xl h-full'>
                            <div className=' box-shadow h-full' style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '28px' }}>
                                <div className="py-10">

                                    <div className='pb-10'>
                                        <ul className=' lg:text-[26px] sm:text-[24px] text-[16px] pl-5 '>
                                            {
                                                item?.List?.map((prize, key) => (
                                                    <li className=' flex-col items-start justify-start flex list-disc ' key={key}><span className='font-normal'>{item.category} {prize.heading}</span>
                                                        {
                                                            prize.prices?.map((reward, ind) => (
                                                                <span key={ind} className='text-[#4C4C4D] font-light'>
                                                                    <div>
                                                                        {reward}
                                                                    </div>
                                                                </span>
                                                            ))
                                                        }
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default PrizeMobile;