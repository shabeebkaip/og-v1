"use client"
import FormSubmission from '@/app/shared/components/FormSubmission';
import MobHeroSlider from '@/app/shared/components/MobHeroSlider'
import Image from 'next/image'
import { useState } from 'react';
import { SnackbarProvider } from 'notistack'
import { authenticateUser } from '@/app/shared/api'


const PageContent = ({ pageContent, reverse }) => {
    const Datas = {
        program_name: reverse?.name,
        program_id: reverse?._id
    }
    const [popup, setPopup] = useState(false);

    const hideHandler = () => {
        setPopup(false)
    }

    const array = [
        pageContent?.image,
        pageContent?.image_1,
        pageContent?.image_2
    ]

    const token = localStorage.getItem('token');

    const authenticateUserFn = () => {
        authenticateUser();
    };



    return (
        <SnackbarProvider>
            <div className='md:px-3 px-6'>
                <div className='flex items-center justify-center my-20 '>
                   
                    {
                        token ?
                            reverse?.btnLink && reverse?.btnLink.trim() !== "" ? (
                                <a href={reverse?.btnLink} target='_blank'>
                                    <button className='border rounded-[40px] border-[#FF8500] text-[20px] text-[#1C2126] px-6 py-2'>Join hackathon</button>
                                </a>
                            ) : (
                                <button onClick={() => {
                                    setPopup(true);
                                }} className='border rounded-[40px] border-[#FF8500] text-[20px] text-[#1C2126] px-6 py-2'>
                                    Join Reverse Pitch<span className='pl-4'>&rarr;</span>
                                </button>
                            ) :
                            <button
                                onClick={authenticateUserFn}
                                className='border rounded-[40px] border-[#FF8500] text-[20px] text-[#1C2126] px-6 py-2'>
                                Join Reverse Pitch<span className='pl-4'>&rarr;</span>
                            </button>
                    }


                </div>

                <div className='flex flex-col gap-8 pt-20 xl:gap-16 lg:flex-row'>
                    <div className='hidden gap-5 lg:flex lg:w-1/2 '>

                        <div className='flex flex-col items-center justify-center gap-[20px] '>
                            <Image src={pageContent?.image} className='rounded-[23px] w-full h-[50%] object-cover' width={200} height={200} alt=''></Image>
                            <Image src={pageContent?.image_1} className='rounded-[23px] w-full h-[50%] object-cover' width={200} height={200} alt=''></Image>
                        </div>
                        <div className='flex items-center justify-center'>
                            <Image src={pageContent?.image_2} className='rounded-[23px]  lg:h-full w-full  h-[50%] object-cover ' width={200} height={200} alt=''></Image>
                        </div>


                    </div>
                    <MobHeroSlider item={array} />

                    <div className='flex flex-col items-center justify-center lg:w-1/2'>
                        <h1 className='uppercase text-[#FF8500] 2xl:text-[50px]  xl:text-[30px] text-[34px]   font-medium '>{pageContent?.text}</h1>
                        <p className='2xl:text-[26px] xl:text-[18px] text-[24px] text-[#4C4C4D] font-light pt-4'>{pageContent?.text_1}</p>
                        <p className='2xl:text-[26px] xl:text-[18px] text-[24px] text-[#4C4C4D] font-light pt-4'>{pageContent?.text_2}</p>
                    </div>
                </div>
                {popup && <FormSubmission name={Datas} orderHideHandler={hideHandler} id={reverse?.form_id} />}

            </div>
        </SnackbarProvider>

    )
}

export default PageContent
