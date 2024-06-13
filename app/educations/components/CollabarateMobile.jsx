"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const CollaborateMobile = ({ universities, pageContent }) => {
    const pageContent1 = pageContent.pageContent?.[3]
    const text = pageContent1?.text

    return (
        <div className="container mx-auto mt-12 ">
            <div className="flex flex-col items-center justify-center ">
                <p className=" rounded-full px-1 py-1  2xl:leading-[75px] leading-[64px] lg:text-[40px] font-normal uppercase  2xl:text-[50px] text-[30px] md:text-[40px] text-center ">
                    {text?.split(pageContent1?.borderText).map((splitText, index) => (
                        <div key={index} style={{ display: 'inline' }}>
                            {index > 0 && (
                                <span
                                    className="py-2 px-5 border rounded-[53px]"
                                    style={{
                                        color:
                                            pageContent1?.textColor?.trim().toLowerCase() === pageContent1.borderText.trim().toLowerCase() ||
                                                pageContent1?.textColor_1?.trim().toLowerCase() === pageContent1.borderText_1.trim().toLowerCase()
                                                ? '#FF8500'
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
                                                        ? '#FF8500'
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
                                                        ? '#FF8500'
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
