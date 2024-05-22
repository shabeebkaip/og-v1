"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/style.css'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';



const MobHeroSlider = ({ item }) => {
    return (
        <div className="lg:hidden sm:flex flex-col items-start rounded-[23px] p   overflow-hidden">
            <div className="relative w-full aspect-w-16 aspect-h-9 " >
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    style={{ paddingBottom: '40px' }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper pb-10"
                >
                    {
                        item?.map((image, index) => (
                            <SwiperSlide key={index} className='h-full  '>
                                <div className='h-[400px] w-full'>
                                    <Image width={1000} height={500} src={image} alt="" className=" rounded-[23px] h-full w-full object-cover" />
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>

        </div>

    )
}

export default MobHeroSlider