'use client'
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import OrangeGradientLeft from '@/app/shared/components/OrangeGradientLeft';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { globalGetService } from '@/app/utils/apiServices';


const JudgeMobile = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;
            swiper.update();
        }
    }, []);
    const [hackathonData, setHackathonData] = useState([])


    useEffect(() => {
        globalGetService('hackathon')
            .then(response => {
                setHackathonData(response.data)
            })
    }, [])

    return (
        <div className='mt-20  px-6  relative '>
            <div className=' absolute right-0 bottom-[-3%] w-[280px] h-[280px]'>
                <OrangeGradientLeft />
            </div>
            <div className='text-[30px] font-medium flex flex-col justify-center items-center gap-4'>
                <h3 className='text-[#FF8500] border-2 rounded-[45px] border-[#4C4C4D] px-4'>JUDGES</h3>
                <h3 className='lowercase text-[#4C4C4D]'>and JUDGING CRITERIA</h3>
            </div>
            <div className='flex flex-col justify-center w-full h-full mt-10'>
                <Swiper
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                    }}
                    className="flex flex-col justify-center pb-16 custom-scrollbar overflow-hidden"
                    autoplay={{ delay: 3000 }}
                    initialSlide={1}
                    slidesPerView={1}
                >
                    {hackathonData?.judges?.reduce((slides, item, index) => {
                        if (index % 4 === 0) {
                            slides.push(
                                <SwiperSlide key={index} className='w-full px-3 overflow-hidden pb-10'>
                                    <div className='flex flex-col justify-center box-shadow rounded-[23px]'>
                                        {hackathonData?.judges?.slice(index, index + 4).map((judge, subIndex) => (
                                            <div className='flex text-[#4C4C4D] flex-col p-2' key={subIndex}>
                                                <div>
                                                    <Image width={1000} height={500} src={judge.photo} alt={"jj"} className='rounded-[23px] object-cover' />
                                                </div>
                                                <div className='flex flex-col flex-start'>
                                                    <h3 className='text-[27px]   text-left font-medium'>{judge.name} {judge.lastName}</h3>
                                                    <p className='sm:text-[24px]  text-[16px] italic text-left'>{judge.qualification} {judge.companyName}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            );
                        }
                        return slides;
                    }, [])}
                </Swiper>
            </div>

            <div className='col-span-4 box-shadow rounded-[23px] p-8 box-shadow bg-white mt-8 mb-16 relative z-10'>
                <h3 className='text-[30px]   text-[#FF8500] font-normal'>JUDGING  CRITERIA</h3>
                <div className='lg:w-[80%]'>
                    <ul className='list-disc text-[#000000] sm:text-[24px] text-[16px]  lg:pl-8 pl-4'>
                        {
                            hackathonData?.judging_criteria?.map((item, index) => (
                                <li key={index}>{item.text}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default JudgeMobile;
