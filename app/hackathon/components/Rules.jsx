"use client"
import Image from "next/image";
import moment from "moment"
import { displayDateFormatShort } from "@/app/constant/index"
import { useEffect, useState } from "react";
import ViewFullRules from '@/app/shared/components/ViewFullRules'

const Rules = ({ hackathonData }) => {
    const [remainingDays, setRemainingDays] = useState(null);




    useEffect(() => {
        if (hackathonData && hackathonData.end_date) {
            const endDate = new Date(hackathonData.end_date);
            const today = new Date();
            const differenceMs = endDate - today;
            const daysRemaining = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
            setRemainingDays(daysRemaining);
        }
    }, [hackathonData]);
    const [active, setActive] = useState(false);

    const handleModalItem = () => {
        setActive(true);
    }
    const handleModalClose = () => {
        setActive(false);
    }
    return (
        <div className='flex flex-col justify-between gap-7 md:flex-row mt-16 md:p-3'>
            <div className='md:w-[45%] flex flex-col justify-center gap-12'>
                <div>
                    <h1 className='xl:text-[50px]  lg:text-[40px] text-[30px]  font-medium text-[#FF8500] uppercase'>{hackathonData?.ruleHeading}</h1>
                    <p className='xl:text-[50px]  lg:text-[40px] text-[30px] font-medium text-[#4C4C4D]'>{hackathonData?.ruleDescription}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-[16px] text-[#000000] font-medium'>Who can participate</p>
                    <p className='text-[#FF8500] text-[16px] md:hidden block ' style={{ textDecoration: 'underline' }}
                        onClick={handleModalItem}
                    >View full rules</p>
                </div>

                <div className='lg:flex flex-col gap-5 hidden'>
                    <ul className='flex gap-10 text-[16px] text-[#1C2126] list-disc  flex-col md:grid grid-cols-3 ml-4'>
                        {
                            hackathonData?.who_can_participate?.slice(0, 6).map((item, index) => (
                                <li key={index}>{item.points}</li>
                            ))
                        }

                    </ul>
                </div>

                <div className='lg:hidden flex-col gap-5 flex'>
                    <ul className='flex gap-7 text-[16px] text-[#1C2126] list-disc  flex-col  grid-cols-4 ml-4'>
                        {
                            hackathonData?.ruleList?.slice(0, 3).map((item, index) => (
                                <li key={index}>{item.rule_points}</li>
                            ))
                        }

                    </ul>
                </div>


                <div className='hidden md:block'><p className='text-[#FF8500] text-[16px] cursor-pointer' style={{ textDecoration: 'underline' }}
                    onClick={handleModalItem}
                >View full rules</p></div>

            </div>
            <div className='md:w-[45%]'>
                <div className='box-shadow rounded-[23px] flex flex-col justify-center md:p-5'>
                    {
                        remainingDays > 0 &&
                        <div className='flex flex-wrap gap-4 p-5 '>
                            <button className='border border-[#92D1FB] rounded-[40px] text-[16px] 2xl:p-3 p-2 hover:text-white hover:bg-[#FF8500] px-5'>{remainingDays}more days to deadline</button>
                        </div>
                    }
                    <div className='flex flex-col p-5'>
                        <p className='text-[16px] text-[#000000] font-medium'>Deadline</p>
                        <p>{hackathonData?.end_date ? moment(hackathonData?.end_date).format(displayDateFormatShort) : "--"} ‎  ‎ ‎{hackathonData?.time}  ‎ </p>
                    </div>
                    <div className='flex gap-20 p-5'>
                        <div className='flex gap-2' >
                            <Image src="/hackathone/globe1233.png" className="w-6 h-6" alt="" width={200} height={200}></Image>
                            <p className='text-[16px] text-[#000000] font-medium'>{hackathonData?.mode}</p>
                        </div>
                        <div className='flex gap-2'>
                            <Image src="/hackathone/home123.png" className="w-6 h-6" width={200} height={200} alt=""></Image>
                            <p className='text-[16px] text-[#000000] font-medium'>{hackathonData?.type}</p>
                        </div>
                    </div>
                    <div className='flex gap-10 p-5'>
                        <p className='text-[16px] #1C2126 '><span className='text-[#000000] font-medium'>{hackathonData?.prize}</span> in prizes</p>
                        <p className='text-[16px] #1C2126 '><span className='text-[#000000] font-medium'>{hackathonData?.participants}</span> {" "} participants</p>
                    </div>
                    <div className='flex gap-10 p-5'>
                        <Image src="/hackathone/flag.png" className="w-6 h-6" width={200} height={200} alt=""></Image>
                        <p className='text-[16px] border border-[#4C4C4D] rounded-[40px] px-5'>{hackathonData?.host}</p>
                    </div>
                    <div className='flex gap-2 p-5'>
                        <div className='pt-3 w-[90px]'>
                            <Image className="w-6 h-6" src="/hackathone/pin.png" alt="" width={200} height={200} />

                        </div>
                        <div className='grid grid-cols-3 gap-2' style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {hackathonData?.tags?.map((item, index) => (
                                <button key={index} className='border border-[#92D1FB] rounded-[40px] text-xs md:text-[16px] p-2'>{item.text}</button>
                            ))}
                        </div>

                    </div>

                    <div className='flex items-center pb-12'>
                        <Image src={hackathonData?.managedByimage} className='w-[100px]' alt="" width={200} height={200} />
                        <p className='text-[16px] text-[#1C2126] font-normal'>Managed by {hackathonData?.managedByname}</p>
                    </div>
                </div>

            </div>
            {active &&
                <ViewFullRules onClose={handleModalClose} item={hackathonData} />
            }
        </div>
    );
};

export default Rules;
