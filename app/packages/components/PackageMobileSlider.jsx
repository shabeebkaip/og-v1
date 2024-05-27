"use client"
import  { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination,Autoplay } from 'swiper/modules';


const PackageMobileSlider = ({packages}) => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;
            swiper.update();
        }
    }, []);


    return (
        <div className='flex justify-center w-full'>
            <Swiper
                spaceBetween={30}
                modules={[Pagination,Autoplay]}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                  }}
                className="flex justify-center pb-16 custom-scrollbar"
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
                {packages.map((item, index) => (
                    <SwiperSlide key={index} className='rounded-2xl'>
                        <div key={index} className='flex w-full gap-[10%] box-shadow drop-shadow-[35px] border-2  flex-col p-5 h-[800px] rounded-[23px]' style={{ backgroundColor: item.bg_color}}>
                            <h1 className='uppercase text-[36px] text-[#4C4C4D] font-semibold text-left pl-3'>{item.name}</h1>
                            <div className='px-6' >
                                <p className='border-2 border-[#92D1FB] bg-white rounded-[45px] text-center font-semibold text-[40px] text-[#4C4C4D]'>{item.price}</p>
                            </div>

                            <ul className='pl-6 text-left list-disc'>
                                {item?.planDetails?.map((feature, idx) => (
                                    <li key={idx} className='text-[26px] text-[#4C4C4D]'>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PackageMobileSlider;