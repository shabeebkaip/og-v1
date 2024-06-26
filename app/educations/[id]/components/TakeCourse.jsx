
"use client"
import MobHeroSlider from '@/app/shared/components/MobHeroSlider'
import OrangeGradient from '@/app/shared/components/OrangeGradient'
import Image from 'next/image'
import moment from "moment"
import { displayDateFormatShort } from '@/app/constant';
import React, { useEffect, useState } from 'react'
import { authenticateUser } from '@/app/shared/api'
import FormSubmission from '@/app/shared/components/FormSubmission'
import { SnackbarProvider, useSnackbar } from 'notistack'
import axios from 'axios'
import { getUserApi } from '@/app/shared/api'
import { globalGetService } from '@/app/utils/apiServices'


const TakeCourse = ({ educationDetail }) => {
    const [popup, setPopup] = useState(false);
    const courseName = { program_name: educationDetail?.heading, program_id: educationDetail?._id }
    const [userData, setUserData] = useState(null);
    const [orderHistory, setOrderHistory] = useState(null);
    const email = userData?.data?.email
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (token) {
            getUserApi(token).then(res => setUserData(res.data.user));
        }
    }, [token])
    useEffect(() => {
        if (email) {
            globalGetService('get-payment-history', { email: email, status: true, })
                .then(response => {
                    setOrderHistory(response.data?.map(item => item?.selected?.program_id));
                });
        }
    }, [email]);
    const enrollCheck = orderHistory?.find((order) => order === educationDetail?._id)



    const hideHandler = () => {
        setPopup(false)
    }
    const array = [
        educationDetail?.summary_image_1,
        educationDetail?.summary_image_2
    ]
    useEffect(() => {
        if (token) {
            getUserApi(token).then(res => setUserData(res.data?.user));

        }
    }, []);
    const handleInitiatePayment = () => {
        let data = {
            username: userData?.data?.given_name,
            email: userData?.data?.email,
            selected: {
                package_id: educationDetail?._id,
                package_name: "Education",
                amount: educationDetail?.prize,
                program_id: educationDetail?._id,
                program_name: educationDetail?.heading
            }
        };
        axios.post('https://api-one-global.code-ox.com/api/save-order', data, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
                "Access-Control-Allow-Credentials": true
            }
        })
            .then(response => {
                const referenceID = response.data.data.referenceID;
                const id = response.data.data._id;
                window.location.href = `/payment-method?ref=${referenceID}&id=${id}`;
            });

    };
    const authenticateUserFn = () => {
        authenticateUser();
    };
    return (
        <SnackbarProvider>

            <div className='rounded-[23px] w-full md:mt-24  md:grid md:grid-cols-2  items-center box-shadow z-10 md:bg-white p-4 md:p-0 container mx-auto' >
                <div className='absolute w-[66%] h-[4%] top-[20.5%] left-[-10%] z-[-1] md:hidden block'><OrangeGradient /></div>

                <MobHeroSlider item={array} />
                <div className='flex flex-col items-center justify-center w-full gap-4 py-5 md:py-10 md:gap-0 '>

                    <div
                        className='flex flex-col   xl:w-[80%] xl:gap-10 gap-5 md:w-[85%]' >
                        <h2 className='xl:text-[50px] lg:text-[40px] md:text-[20px] text-[30px] text-[#FF8500] font-medium xl:leading-[58px]'>{educationDetail?.summaryHeading}</h2>
                        <div className='flex flex-wrap text-[#4C4C4D] gap-3 py-3 '>
                            <button className=' bg-[#92D1FB] rounded-full md:px-4 px-1 lg:h-[33px] lg:w-[135px] '>{educationDetail?.reg_st_date ? moment(educationDetail?.reg_st_date).format(displayDateFormatShort) : ""}</button>
                            <button className=' bg-[#92D1FB] rounded-full md:px-4 px-1 lg:h-[33px] lg:w-[135px] '>{educationDetail?.reg_end_date ? moment(educationDetail?.reg_end_date).format(displayDateFormatShort) : ""}</button>
                            <button className='border border-[#92D1FB] rounded-full md:px-4 px-1 '>{educationDetail?.timezone}</button>

                        </div>
                        <p className='text-[#4C4C4D] xl:text-[26px]  lg:text-[18px] md:text-[12px] font-light xl:leading-[30px] text-[24px]'>{educationDetail?.summaryDescription}</p>
                        <div className='flex gap-4 md:flex-row flex-col px-6 md:px-0'>
                            <div className='border lg:h-[54px] flex items-center  md:h-[40px] h-[60px] rounded-[40px] border-[#FF8500] xl:text-[20px] lg:text-[18px] md:text-[14px] text-[20px] text-lg:px-8 px-4 text-[#FF8500]'   >
                                {educationDetail?.prize}{" "}

                                {educationDetail?.currency}

                            </div>
                            {
                                token ? enrollCheck ? null :
                                    educationDetail?.btnLink && educationDetail?.btnLink.trim() !== "" ? (
                                        <a href={educationDetail?.btnLink} target='_blank'>
                                            <button
                                                className='border xl:h-[54px] lg:h-[40px] md:h-[32px] h-[60px] rounded-[40px] bg-[#FF8500] xl:text-[20px] lg:text-[18px] md:text-[14px] text-[20px] text-white lg:px-8 px-4'  >
                                                Registration

                                            </button>
                                        </a>
                                    ) : (
                                        <button onClick={() => {
                                            setPopup(true)
                                        }}
                                            className='border xl:h-[54px] lg:h-[40px] md:h-[32px] h-[60px] rounded-[40px] bg-[#FF8500] xl:text-[20px] lg:text-[18px] md:text-[14px] text-[20px] text-white lg:px-8 px-4'  >
                                            Registration

                                        </button>
                                    ) :
                                    <button
                                        onClick={authenticateUserFn}
                                        className='border xl:h-[54px] lg:h-[40px] md:h-[32px] h-[60px] rounded-[40px] bg-[#FF8500] xl:text-[20px] lg:text-[18px] md:text-[14px] text-[20px] text-white lg:px-8 px-4'  >
                                        Registration

                                    </button>
                            }

                        </div>
                    </div>
                </div>
                <div

                    className='lg:grid items-center w-full grid-cols-2 gap-4 h-full hidden '>

                    <Image width={1000} height={500} alt="" src={educationDetail?.summary_image_1} className=' rounded-[26px] w-full h-[90%] md:block hidden object-cover'></Image>


                    <Image width={1000} height={500} alt="" src={educationDetail?.summary_image_2} className='rounded-[26px] w-full h-full md:block hidden object-cover'></Image>


                </div>
                {popup && <FormSubmission name={courseName} orderHideHandler={hideHandler} id={educationDetail.form_id} payment={true} userData={userData} handleInitiatePayment={handleInitiatePayment} />}

            </div>
        </SnackbarProvider>

    )
}

export default TakeCourse
