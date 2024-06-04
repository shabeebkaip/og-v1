
"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import FormSubmission from '@/app/shared/components/FormSubmission';
import { SnackbarProvider } from 'notistack';



const ComingSoon = ({ courseList }) => {
    const [chunkedCourses, setChunkedCourses] = useState([]);
    const [courseName, setCourseName] = useState(null)
    const [popup, setPopup] = useState(false);
    useEffect(() => {
        const chunkArray = (array, chunkSize) => {
            const chunks = [];
            for (let i = 0; i < array.length; i += chunkSize) {
                chunks.push(array.slice(i, i + chunkSize));
            }
            return chunks;
        };

        const chunks = chunkArray(courseList?.filter(item => item.status === false), 3);
        setChunkedCourses(chunks);
    }, [courseList]);
    const hideHandler = () => {
        setPopup(false)
    }


    return (
        <SnackbarProvider>

        <div className="container mx-auto ">
            <div className="flex flex-col justify-center items-center mt-9 p-2">
                <div className="flex flex-col 2xl:text-[50px] text-[30px] md:text-[50px] font-medium 2xl:leading-[84px] uppercase leading-[44px] lg:leading-[70px] md:leading-[50px] text-center">
                    <p className="text-[#656565]">one global hub</p>
                    <p className="text-[#FF8500] border rounded-full px-5 border-[#656565] md:block hidden ">coming soon courses</p>
                    <div className="md:hidden flex  flex-col justify-center items-center">
                        <p className="text-[#FF8500]">coming soon </p>
                        <p className="text-[#FF8500] border rounded-full w-[220px] border-[#656565] "> courses</p>
                    </div>
                </div>
                {
                    chunkedCourses?.map((item, index) => (
                        <div className={`flex lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} flex-col mt-9 gap-3 w-full`} key={index}>
                            {
                                item[0] ?
                                    <div className="flex lg:flex-row flex-col justify-center items-center rounded-[23px] md:shadow-lg bg-[#D9D9D9] bg-opacity-10 lg:w-[37%] w-full" id="1">
                                        <Image src={item[0]?.image} alt="" className="rounded-[23px] 2xl:w-[230px] lg:w-[40%] w-full lg:h-full min-h-fit  md:p-0 p-2 object-cover" width={100} height={100} />

                                        <div className="flex flex-col p-4 2xl:w-[390px] lg:w-[55%] ">
                                            <p className="font-medium md:text-[30px] 2xl:text-[30px] lg:text-[23px] text-[26px] text-[#4C4C4D] uppercase lg:leading-[26px] 2xl:leading-[35.19px] leading-[30.5px]">{item[0]?.heading}</p>
                                            <p className="2xl:w-[280px] font-light 2xl:text-[26px] text-[24px] lg:text-[19px] leading-[30.5px] text-[#4C4C4D] mt-9 2xl:leading-[30.5px] lg:leading-tight">{item[0]?.description}</p>
                                            <button onClick={() => {
                                                setPopup(true)
                                                setCourseName(item[0]?.heading)
                                            }}
                                                className="text-[20px] 2xl:text-[20px] lg:text-[17px] text-[#4C4C4D] 2xl:w-[208px] 2xl:h-[52px] w-[208px] h-[52px] lg:w-[180px] lg:h-[45px] border rounded-full border-[#FF8500] mt-20 bg-white">Apply now <span className="ml-2">&rarr;</span></button>
                                        </div>
                                    </div> : null}
                            <div className="flex flex-col gap-3 lg:w-[63%] w-full">
                                {
                                    item[1] ?
                                        <div className='flex lg:flex-row flex-col lg:bg-[#FF8500] rounded-[23px] gap-3 h-[50%]' id="2">
                                            <div className='lg:w-[40%] relative w-full'>
                                                <Image src={item[1]?.image} alt="" className='h-full w-full object-cover rounded-3xl ' width={100} height={100} />
                                                <div className='absolute bottom-1 left-24 transform -translate-x-1/2 -translate-y-1/2 hidden md:block'>
                                                    <button className='text-[#4C4C4D] bg-white px-4 py-2 rounded-full border  border-[#FF8500] text-[20px] 2xl:text-[20px]  lg:text-[17px]  lg:w-[170px] w-auto 2xl:w-auto'>Apply now <span className="ml-2">&rarr;</span></button>
                                                </div>
                                            </div>
                                            <div className='flex flex-col p-2 justify-center lg:w-[60%] w-full'>
                                                <p className=" font-medium md:text-[30px]  2xl:text-[30px]  lg:text-[23px] text-[26px] text-[#4C4C4D] lg:text-white uppercase lg:leading-[26px] 2xl:leading-[35.19px] leading-[30.5px]">{item[1]?.heading}</p>
                                                <p className='2xl:w-[550px]  font-light 2xl:text-[26px]  text-[24px] lg:text-[19px] 2xl:leading-[30.5px] lg:leading-tight leading-[30.5px] text-[#4C4C4D] lg:text-white mt-5'>{item[1]?.description}</p>
                                                <button onClick={() => {
                                                    setPopup(true)
                                                    setCourseName(item[1]?.heading)
                                                }}
                                                    className='text-[#4C4C4D] bg-white px-4 py-2 rounded-full border  border-[#FF8500] text-[20px] w-[210px] h-[59px]  md:hidden sm:block mt-8'>Apply now <span className="ml-2">&rarr;</span></button>
                                            </div>
                                        </div> : null}
                                {
                                    item[2] ?
                                        <div className='flex lg:flex-row flex-col-reverse  rounded-[23px] shadow-lg  gap-3 h-[50%] ' id="3">
                                            <div className='flex flex-col p-2 justify-center  lg:w-[60%] w-full'>
                                                <p className="mt-4 font-medium md:text-[30px]  2xl:text-[30px]  lg:text-[23px] text-[26px] text-[#4C4C4D] uppercase lg:leading-[26px] 2xl:leading-[35.19px] leading-[30.5px] ml-2">{item[2]?.heading}</p>
                                                <p className='2xl:w-[570px]  font-light 2xl:text-[26px]  text-[24px] lg:text-[19px] leading-[30.5px] 2xl:leading-[30.5px] lg:leading-tight text-[#4C4C4D] mt-5 ml-2'>{item[2]?.description}</p>
                                                <button className='text-[#4C4C4D] bg-white px-4 py-2 rounded-full border  border-[#FF8500] text-[20px] w-[210px] h-[59px]  md:hidden sm:block mt-8'>Apply now <span className="ml-2">&rarr;</span></button>
                                            </div>
                                            <div className='relative lg:w-[40%]  w-full'>
                                                <Image width={1000} height={500} src={item[2]?.image} alt="" className='h-full w-full object-cover rounded-3xl' />
                                                <div className='absolute bottom-1 left-24 transform -translate-x-1/2 -translate-y-1/2 hidden md:block'>
                                                    <button onClick={() => {
                                                        setPopup(true)
                                                        setCourseName(item[2]?.heading)
                                                    }}
                                                        className='text-[#4C4C4D] bg-white px-4 py-2 rounded-full border  border-[#FF8500] text-[20px] 2xl:text-[20px] lg:text-[17px]  lg:w-[170px] w-auto 2xl:w-auto'>Apply now <span className="ml-2">&rarr;</span></button>
                                                </div>
                                            </div>
                                        </div> : null
                                }

                            </div>
                        </div>
                    ))
                }
            </div>
            {popup && <FormSubmission name={courseName} orderHideHandler={hideHandler} id="education" />}

        </div>
        </SnackbarProvider>
    )
}

export default ComingSoon;

