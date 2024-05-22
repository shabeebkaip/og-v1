"use client"
import BlueGradient from '@/app/shared/components/BlueGradient';
import OrangeGradient from '@/app/shared/components/OrangeGradient';
import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

const AskQuestion = ({ educationDetail }) => {
    const [openIndices, setOpenIndices] = useState(Array(educationDetail?.faq?.length).fill(false));

    const clickHandlerOne = (index) => {
        const updatedIndices = [...openIndices];
        updatedIndices[index] = !updatedIndices[index];
        setOpenIndices(updatedIndices);
    };

    return (
        <div className="mt-20">
            <p className="md:flex hidden justify-center items-center uppercase text-[#4C4C4D] md:text-[40px] 2xl:text-[30px] font-medium leading-[50.73px] ">
                <span className="text-[#FF8500] border rounded-full border-[#4C4C4D] md:h-[54px] md:w-[370px] text-center">Frequently</span>
                &nbsp; Asked Questions
            </p>
            <div className="md:hidden block uppercase text-[20px] font-medium">
                <div className="flex items-center justify-center">
                    <p className="text-[#FF8500] border rounded-full border-[#4C4C4D] w-[170px] text-center  ">Frequently</p>
                </div>
                <p className="text-[#4C4C4D] flex justify-center items-center"> Asked Questions</p>
            </div>
            <div className="container mx-auto mt-10 relative">
                <div className=' w-[300px] h-[300px] absolute top-[8%] right-[1%]'>
                    <OrangeGradient/>
                </div>
                <div className=' h-[300px] w-[300px] absolute top-[15%] left-[1%]'>
                    <BlueGradient/>
                </div>
                <div className="flex items-center justify-center">
                    <div className="grid grid-rows w-full lg:justify-center">
                        <div className="flex flex-col items-center h-auto  p-3 mt-4">
                            {educationDetail?.faq?.map((item, ind) => (
                                <div key={ind} className="w-full lg:w-[700px] px-4  xl:w-[1000px] border rounded-2xl border-[#242222] mb-4 bg-white">
                                    <div
                                        onClick={() => clickHandlerOne(ind)}
                                        className="h-20 xl:h-28 flex justify-between items-center p-3 cursor-pointer"
                                    >
                                        <p className="w-full lg:text-[20px] text-[18px] text-[#4C4C4D] md:text-[30px] 2xl:text-[30px] font-medium">
                                           Q: {item.question}
                                        </p>
                                        <p>
                                            {openIndices[ind] ? <IoMdArrowDropup className="w-6 h-6" /> : <IoMdArrowDropdown className="w-6 h-6" />}
                                        </p>
                                    </div>
                                    {openIndices[ind] && (
                                        <div className="p-3 text-[#4C4C4D] md:text-[14px] text-[13px] 2xl:text-[24px]">
                                            <p>A: {item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        {/* <div className="flex flex-row items-center justify-center mt-8">
                            {educationDetail?.faq?.length > visible && (
                                <button onClick={handleClick} className="text-[26px] font-light leading-[30.44px] flex gap-5 lg:text-[25px] 2xl:text-[30px] md:text-[20px]">
                                    Show More <span className="text-[#FF8500] w-[27.22px] h-[30.01px] md:mt-1"><SlReload /></span>
                                </button>
                            )}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AskQuestion
