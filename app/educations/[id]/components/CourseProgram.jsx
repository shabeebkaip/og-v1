"use client"
import { displayDateFormatShort } from '@/app/constant';
import moment from 'moment';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const CourseProgram = ({ educationDetail }) => {
    const [openStates, setOpenStates] = useState([0]);

    useEffect(() => {
        if (educationDetail?.experts) {
            setOpenStates(educationDetail.experts.map(expert => expert.topics.map((_, i) => i === 0)));
        }
    }, [educationDetail]);

    const toggleHandler = (expertIndex, topicIndex) => {
        const updatedStates = openStates.map((expertTopics, idx) => {
            if (idx === expertIndex) {
                return expertTopics.map((isOpen, i) => (i === topicIndex ? !isOpen : isOpen));
            }
            return expertTopics;
        });
        setOpenStates(updatedStates);
    };

    return (
        <div className="container p-2 mx-auto mt-16">
            <div className="flex items-center justify-center">
                <p className="border rounded-full border-[#4C4C4D] p-1 px-4 text-center text-[30px] lg:text-[50px] uppercase text-[#4C4C4D]">
                    course<span className="text-[#92D1FB]">&nbsp;program</span>
                </p>
            </div>
            <div className="leading-[25.81px] font-light text-[22px] text-center mt-14">
                <p>There are many variations of passages of Lorem Ipsum available, but </p>
                <p>the majority have suffered alteration in some form, by injected humour,</p>
                <p>{"or randomised words which don't look even slightly believable."}</p>
            </div>
            <div className='flex text-[#4C4C4D] gap-3 justify-center mt-9'>
                <button className='bg-[#92D1FB] rounded-full px-4 lg:h-[33px] lg:w-[135px]'>
                    {educationDetail?.date ? moment(educationDetail?.date).format(displayDateFormatShort) : ""}
                </button>
                <button className='border border-[#92D1FB] rounded-full px-4 lg:h-[33px] lg:w-[135px]'>112 hours</button>
                {educationDetail?.license && (
                    <button className="rounded-full px-4 border border-[#FF8500] lg:h-[33px] lg:w-[135px]">Licence</button>
                )}
            </div>
            <div className='py-10'>
                <div className="shadow-custom rounded-[23px] flex flex-col gap-5">
                    {educationDetail?.experts?.map((expert, expertIndex) => (
                        <div className="lg:flex p-2 px-9 gap-4 text-[#4C4C4D] justify-center box-shadow bg-[#f6f4f4] pt-10" key={expertIndex}>
                            <div className="block font-medium md:text-[30px] 2xl:text-[30px] custom-lg:text-[26px] lg:text-[24px] custom-lg:leading-8 2xl:leading-[35.19px] md:leading-[35.19px] w-[30%] lg:w-[20%]">
                                <Image width={1000} height={500} src={expert?.image} alt="" className="border rounded-[23px] md:w-[300px] w-full h-[250px] object-cover" />
                                <p className='xl:text-[28px] text-[#4C4C4D] font-medium text-[20px]'>{expert?.name}</p>
                                <p className='xl:text-[28px] text-[#4C4C4D] font-medium text-[20px]'>{expert?.lastName}</p>
                                <p className="italic font-normal text-[18px] lg:text-[16px]">{expert?.company}</p>
                            </div>
                            <div className="block w-[70%] lg:w-[80%] md:w-full gap-4">
                                <div className="p-2 flex flex-col gap-5 s-full">
                                    {expert.topics.map((topic, topicIndex) => (
                                        <div
                                            key={topicIndex}
                                            className="block border border-solid border-gray-300 rounded-[23px] custom-lg:text-[16px] lg:text-[14px] md:p-4 p-2 w-full"
                                            onClick={() => toggleHandler(expertIndex, topicIndex)}
                                        >
                                            <div className="flex justify-between">
                                                <div className="block">
                                                    <div className="flex md:gap-9 gap-3 leading-[18.77px] lg:ml-7 ml-0">
                                                        <p>{topic?.date ? moment(topic?.date).format(displayDateFormatShort) : ""}</p>
                                                        <p>{topic?.time}</p>
                                                    </div>
                                                    <div className="2xl:text-[30px] md:text-[30px] md:leading-[35.19px] custom-lg:text-[26px] lg:text-[21px] 2xl:leading-[35.19px] lg:leading-8 font-medium leading-tight md:w-[700px] uppercase mt-4 ml-0 lg:ml-6">
                                                        <p className="custom-lg:w-[780px] md:w-[590px]">{topic.heading}</p>
                                                    </div>
                                                </div>
                                                <div className="relative">
                                                    {openStates[expertIndex]?.[topicIndex] ? (
                                                        <IoMdArrowDropup className="h-6 w-6 md:h-8 md:w-8  md:-ml-36 custom-lg:ml-24 text-[#B0ABAB]" />
                                                    ) : (
                                                        <IoMdArrowDropdown className="h-6 w-6 md:h-8 md:w-8  md:-ml-36 custom-lg:ml-24 text-[#B0ABAB]" />
                                                    )}
                                                </div>
                                            </div>
                                            {openStates[expertIndex]?.[topicIndex] && (
                                                <div className="2xl:leading-[30px] md:leading-[30px] lg:leading-none mt-4">
                                                    <p className="font-light custom-lg:text-[20px] 2xl:text-[26px] md:text-[23px] md:w-[600px] lg:w-auto lg:text-[18px] p-0 lg:p-5">{topic.topicDescription}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseProgram;
