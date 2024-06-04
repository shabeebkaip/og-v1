"use client"
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Scrollbar } from 'swiper/modules';
import { getGlobalCookie } from '@/app/utils';
import Terms_conditions from './Terms_conditions';



const Slider = ({ packages }) => {
    const [selectedPackage, setSelectedPackage] = useState(packages[0])
    const swiperRef = useRef(null);

    
    // const termsRef = useRef(null); 




    useEffect(() => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;
            swiper.update();
        }
        setSelectedPackage(packages[1])
    }, []);

    const language = getGlobalCookie('language')

    const getBackgroundColor = (index) => {
        const colors = ['#d2d7e7', '#fdd8d8', '#f6f4bd'];
        return colors[index % 3];
    };

    const selectPackage = (item) => {
        setSelectedPackage(item)
        localStorage.setItem('selectedPackage', JSON.stringify(item))

        if (termsRef.current) {
            termsRef.current.scrollIntoView({ behavior: 'smooth' });
        }

    }

    return (
        <div className='flex justify-center w-full'>
            <Swiper
                spaceBetween={10}
                modules={[Scrollbar]}
                scrollbar={{ draggable: true }}
                className="flex justify-center pb-40 custom-scrollbar p-40"
                autoplay={{ delay: 3000 }}
                initialSlide={1}
                style={{ paddingBottom: "100px" }}
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

                {packages?.map((item, index) => (
                    <SwiperSlide key={index} className='rounded-2xl cursor-pointer '>
                        <div
                            key={index}
                            className={'flex w-full gap-[10%] hover:drop-shadow-lg hover:scale-100 duration-300 ease-in-out scale-95 box-shadow flex-col p-5 min-h-[800px]  rounded-[23px]'}
                            style={{ backgroundColor: getBackgroundColor(index), border: selectedPackage === item ? '6px solid #FF8500' : '2px solid transparent' }}
                            onClick={() => selectPackage(item)}
                        >
                            <h1 className='uppercase text-[36px] text-[#4C4C4D] font-medium text-left pl-3'>{language === "ar" ? item.ar_name : item.name}</h1>
                            <div className='px-6' >

                                <p className='border-2 box-shadow border-[#92D1FB] bg-white rounded-[45px] text-center font-semibold text-[40px] text-[#4C4C4D]'>KWD {item.price}</p>
                            </div>

                            <ul className='pl-6 text-left list-disc mt-4'>
                                {language === "ar" ? (
                                    item.ar_planDetails.map((detail, index) => (
                                        <li key={index} className='text-[26px] text-[#4C4C4D]'>{detail}</li>
                                    ))
                                ) : (
                                    item.planDetails.map((detail, index) => (
                                        <li key={index} className='text-[26px] text-[#4C4C4D]'>{detail}</li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <div onClick={termsRef}><Terms_conditions /></div> */}
        </div>
    );
};

export default Slider;