"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import PageContents from '@/app/shared/components/PageContents';

const CollaborateMobile = ({ universities, pageContent }) => {
    const pageContent1 = pageContent.pageContent?.[3]
    const text = pageContent1?.text

    return (
        <div className="container mx-auto mt-12 ">
            <div className="flex flex-col items-center justify-center ">
                <p className=" rounded-full px-1 py-1  2xl:leading-[75px] leading-[64px] lg:text-[40px] font-normal uppercase  2xl:text-[50px] text-[30px] md:text-[40px] text-center ">
                    <PageContents item={pageContent1} index="3"/>
                </p>
            </div>


            <Swiper
                spaceBetween={15}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                className="flex justify-center px-2 py-10 pb-32 custom-scrollbar"
                style={{ paddingBottom: '40px' }}
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
                        slidesPerView: 3
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

export default CollaborateMobile;
