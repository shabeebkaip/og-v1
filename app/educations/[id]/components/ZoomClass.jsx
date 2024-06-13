"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Scrollbar } from 'swiper/modules';
import Image from 'next/image';

const ZoomClass = ({ educationDetail,pageContent }) => {
    const pageContent1 = pageContent.pageContent?.[5]
    const text = pageContent1?.text
    return (
        <div className="mt-14 container mx-auto">
            <div className="leading-[70px] uppercase md:text-[50px] text-[30px] font-medium text-[#4C4C4D]  text-center  md:p-2 flex justify-center">
                <div className='block leading-[64px] lg:w-[50%] '>
                    <p>
                    {text?.split(pageContent1?.borderText).map((splitText, index) => (
                            <div key={index} style={{ display: 'inline' }}>
                                {index > 0 && (
                                    <span
                                        className="py-2 px-5 border rounded-[53px]"
                                        style={{
                                            color:
                                                pageContent1?.textColor?.trim().toLowerCase() === pageContent1.borderText.trim().toLowerCase() ||
                                                    pageContent1?.textColor_1?.trim().toLowerCase() === pageContent1.borderText_1.trim().toLowerCase()
                                                    ? '#92D1FB'
                                                    : 'inherit',
                                            borderColor: '#6D6E71', // Apply border color based on borderText
                                            borderWidth: '1px',
                                        }}
                                    >
                                        {pageContent1?.borderText}
                                    </span>
                                )}
                                {splitText.split(pageContent1?.borderText_1).map((innerSplitText, innerIndex) => (

                                    <span key={innerIndex}>

                                        {innerSplitText.split(' ').map((word, wordIndex) => (
                                            <span
                                                key={wordIndex}
                                                style={{
                                                    color:
                                                        pageContent1?.textColor?.split(' ').includes(word.replace(/[.,]/g, '')) ||
                                                            pageContent1?.textColor_1?.split(' ').includes(word.replace(/[.,]/g, ''))
                                                            ? '#92D1FB'
                                                            : 'inherit',
                                                    border: 'none', // Remove border from words
                                                }}
                                            >
                                                {word}
                                                {wordIndex < innerSplitText.split(' ').length - 1 && ' '}
                                            </span>
                                        ))}
                                        {innerIndex < splitText.split(pageContent1?.borderText_1).length - 1 && (
                                            <span
                                                className="py-2 px-5 border rounded-[53px]"
                                                style={{
                                                    color:
                                                        pageContent1?.textColor?.trim().toLowerCase() === pageContent1.borderText_1?.trim().toLowerCase() ||
                                                            pageContent1?.textColor_1?.trim().toLowerCase() === pageContent1.borderText_1?.trim().toLowerCase()
                                                            ? '#92D1FB'
                                                            : 'inherit',
                                                    borderColor: '#6D6E71', // Apply border color based on borderText_1
                                                    borderWidth: '1px',
                                                }}
                                            >
                                                {pageContent1?.borderText_1}
                                            </span>
                                        )}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </p>
                </div>
            </div>

            <div className="flex justify-center p-2 mt-8 pb-16 ">
                <p className=" border rounded-full border-[#4C4C4D] p-1 px-4 text-center md:text-[50px] text-[30px] uppercase text-[#4C4C4D] ">course<span className="text-[#92D1FB]">&nbsp;experts</span></p>
            </div>
            <Swiper
                spaceBetween={15}
                modules={[Scrollbar]}
                scrollbar={{ draggable: true }}
                className="flex justify-center px-2 py-10 pb-32 custom-scrollbar"
                style={{ paddingBottom: '80px', paddingTop: '40px', paddingLeft: '10px', paddingRight: '10px' }}
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
                {educationDetail?.experts?.map((item, index) => (
                    <SwiperSlide key={index} className='p-2 bg-white rounded-2xl box-shadow'>

                        <div className="flex flex-col   bg-opacity-10 rounded-[24px] p-5 gap-[25px]">
                            <div className="flex md:flex-row flex-col text-[#4C4C4D] gap-[20px]">
                                <div className='md:w-[50%] h-[200px] object-cover '>
                                    <Image width={1000} height={500} src={item?.image} className='rounded-[23px] z-[100]  relative ' alt="" />
                                </div>
                                <div className="flex flex-col justify-center  md:w-[50%] text-left">
                                    <p className="xl:text-[28px] md:text-[25px] text-[22px] font-medium leading-[35.19px] ">{item.name} <span className="inline-block md:block">{item.lastName}</span></p>
                                    <p className="font-normal xl:text-[22px]  md:text-[20px] text-[18px] italic  flex ">{item.company}</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-normal xl:text-[23px] text-[20px] italic leading-[28.15px] text-left text-[#4C4C4D]">{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ZoomClass
