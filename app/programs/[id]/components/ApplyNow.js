'use client'
import BlueGradient from '@/app/shared/components/BlueGradient'
import OrangeGradient from '@/app/shared/components/OrangeGradient'
import MotionDiv from '@/app/shared/components/MotionDiv'
import FormSubmission from '@/app/shared/components/FormSubmission'
import { useEffect, useState } from 'react'
import { authenticateUser, getUserApi } from '@/app/shared/api'
import PageContents from '@/app/shared/components/PageContents'
import { globalGetService } from '@/app/utils/apiServices'


const ApplyNow = ({ pageContent, programDetail }) => {
    const pageContent1 = pageContent.pageContent?.[0]
    const text = pageContent1?.text
    const [userData, setUserData] = useState(null);
    const [orderHistory, setOrderHistory] = useState(null);
    const email = userData?.data?.email


    const [formId, setFormId] = useState(null)
    const [selected, setSelected] = useState(null)

    const [popup, setPopup] = useState(false)

    const hideHandler = () => {
        setPopup(false)
    }

    const token = localStorage.getItem('token');

    const authenticateUserFn = () => {
        authenticateUser();
    };
    const currentDate = Date.now()
    const programEndDate = new Date(programDetail?.end_date)
    useEffect(() => {
        if (token) {
            getUserApi(token).then(res => setUserData(res.data.user));
        }

    }, [token]);

    useEffect(() => {

        if (email) {
            globalGetService('get-payment-history', { email: email, status: true })
                .then(response => {
                    setOrderHistory(response.data?.map(item => item?.selected?.program_id));
                });

        }

    }, [email]);
    console.log(orderHistory)
    console.log(programDetail._id)
    return (
        <MotionDiv
            styles='relative flex flex-col items-center justify-center pt-16 px-3 container mx-auto '>
            {
                programEndDate > currentDate ?
                    <>
                        {
                            token ?
                             orderHistory?.includes(programDetail._id) ? null : 
                                <a href={programDetail?.btnLink} target='_blank'>
                                    <div className='border-2 border-solid rounded-[45px] lg:px-12 px-8 py-1 text-[#4C4C4D] lg:text-[30px] text-[24px] font-medium' style={{ borderColor: '#FF8500' }}>
                                        Apply now <span className=''>→</span>
                                    </div>
                                </a>
                                :
                                <button onClick={authenticateUserFn} className='border-2 border-solid rounded-[45px] lg:px-12 px-8 py-1 text-[#4C4C4D] lg:text-[30px] text-[24px] font-medium' style={{ borderColor: '#FF8500' }}>
                                    Apply now <span className=''>→</span>
                                </button>
                        }
                    </>
                    :
                    <div className='border-2 border-solid rounded-[45px] lg:px-12 px-8 py-1 text-[#4C4C4D] lg:text-[30px] text-[24px] font-medium' style={{ borderColor: '#FF8500' }}>
                        Application  Closed <span className=''></span>
                    </div>
            }
            <div className='flex justify-center w-full md:pt-28 pt-20'>
                <div className='md:w-[90%] text-center pb-8 w-full flex justify-center '>

                    <h3 className='2xl:text-[50px] xl:leading-[70px] lg:leading-[60px] xl:text-[35px] md:text-[30px] text-center 2xl:w-[90%] text-[25px] xl:w-[70%]  font-medium text-gray-500 bg-white box-shadows p-5 rounded-3xl z-100 break-words '>
                        <PageContents text={text} pageContent1={pageContent1} />

                    </h3>
                </div>

            </div>
            {popup && <FormSubmission name={selected} orderHideHandler={hideHandler} id={formId} />}
            <div className='absolute  left-0 md:w-[25%] h-[50%]'><BlueGradient /></div>
            <div className='absolute  md:w-[22%] h-[40%] right-[1%]'><OrangeGradient /></div>
        </MotionDiv>

    )
}

export default ApplyNow
