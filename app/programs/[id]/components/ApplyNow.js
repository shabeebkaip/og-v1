'use client'
import BlueGradient from '@/app/shared/components/BlueGradient'
import OrangeGradient from '@/app/shared/components/OrangeGradient'
import MotionDiv from '@/app/shared/components/MotionDiv'
import FormSubmission from '@/app/shared/components/FormSubmission'
import { useState } from 'react'
import { authenticateUser } from '@/app/shared/api'

const ApplyNow = ({ pageContent1, programDetail }) => {
    const pageContent = pageContent1?.pageContent

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



    return (
        <MotionDiv
            styles='relative flex flex-col items-center justify-center pt-16 px-3 container mx-auto '>
            {
                programEndDate > currentDate ?
                    <>
                        {
                            token ?
                                programDetail?.btn_link && programDetail?.btn_link.trim() !== "" ? (
                                    <a href={programDetail?.btn_link} target='_blank'>
                                        <div className='border-2 border-solid rounded-[45px] lg:px-12 px-8 py-1 text-[#4C4C4D] lg:text-[30px] text-[24px] font-medium' style={{ borderColor: '#FF8500' }}>
                                            Apply now <span className=''>→</span>
                                        </div>
                                    </a>
                                ) : (
                                    <button onClick={() => {
                                        setPopup(true);
                                        setFormId(programDetail?.form_id);

                                    }} className='border-2 border-solid rounded-[45px] lg:px-12 px-8 py-1 text-[#4C4C4D] lg:text-[30px] text-[24px] font-medium' style={{ borderColor: '#FF8500' }}>
                                        Apply now <span className=''>→</span>
                                    </button>
                                )
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
                    {
                        pageContent?.map((item, index) => (
                            <h3 key={index} className='2xl:text-[50px] xl:leading-[70px] lg:leading-[60px] xl:text-[35px] md:text-[30px] text-center 2xl:w-[79%] text-[25px] xl:w-[70%]  font-medium text-gray-500 bg-white box-shadows p-5 rounded-3xl z-100 break-words '>
                                {item?.text?.split(item?.borderText).map((splitText, index) => (
                                    <div key={index} style={{ display: 'inline' }}>
                                        {index > 0 && (
                                            <span
                                                className="py-2 px-4 border border-red-500 rounded-[53px]"
                                                style={{
                                                    // If borderText and textColor are the same, also color the text
                                                    color:
                                                        item?.textColor.trim().toLowerCase() === item?.borderText.trim().toLowerCase()
                                                            ? '#FF8500'
                                                            : 'inherit',
                                                }}
                                            >
                                                {item?.borderText}
                                            </span>
                                        )}
                                        {splitText.split(' ').map((word, innerIndex) => (
                                            <span
                                                key={innerIndex}
                                                style={{
                                                    color: item?.textColor?.trim().toLowerCase() === word.trim().toLowerCase() ? '#FF8500' : 'inherit',
                                                    border:
                                                        item?.borderText?.trim().toLowerCase() === word.trim().toLowerCase()
                                                            ? '1px solid red'
                                                            : 'none',
                                                }}
                                            >
                                                {word}
                                                {innerIndex < splitText.split(' ').length - 1 && ' '}
                                            </span>
                                        ))}
                                    </div>
                                ))}
                            </h3>
                        ))
                    }

                </div>

            </div>
            {popup && <FormSubmission name={selected} orderHideHandler={hideHandler} id={formId} />}
            <div className='absolute  left-0 md:w-[25%] h-[50%]'><BlueGradient /></div>
            <div className='absolute  md:w-[22%] h-[40%] right-[1%]'><OrangeGradient /></div>
        </MotionDiv>

    )
}

export default ApplyNow
