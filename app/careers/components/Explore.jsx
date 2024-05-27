

import { fadeIn } from '@/app/constant/motion'
import Image from 'next/image'
import { getGlobalCookie } from "@/app/utils"
import BlueGradient from "@/app/shared/components/BlueGradient";

const data = async ({ data }) => {
    const language = getGlobalCookie('language');

    return (
        <div className='relative flex flex-col w-full my-10 lg:flex-row md:gap-4 font-Sans '>
            <div
                variants={fadeIn("left", 0.1)}
                initial="hidden"
                whileInView={"show"}
                className='relative  flex lg:w-[55%]'>


                <div className='flex flex-col w-full rounded-[23px] justify-center items-center xl:py-8 md:bg-white mob_box_shadows' >
                    <Image width={1000} height={500} src={data?.image} alt='Image' className='w-full h-full rounded-[23px] md:hidden block' />

                    <div className='flex flex-col xl:w-[80%] xl:gap-10 w-[90%] gap-5 md:p-4 py-3'>
                        <h2 className='xl:text-[50px] lg:text-[38px] text-[30px] md:text-[#FF8500] text-[#4C4C4D] font-medium xl:leading-[58px] uppercase'>{language === "ar" ? data?.ar_heading : data?.heading}</h2>

                        {data?.description && data?.description.map((item, index) => (
                            <p className='text-[#4C4C4D] xl:text-[26px] lg:text-[20px] md:text-[20px] text-[16px] leading-[30px] font-normal ' key={index}>{language === "ar" ? item.ar_text : item.text}</p>
                        ))}
                    </div>
                </div>
            </div>

            <div
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView={"show"}
                className='lg:w-[45%]'>

                <Image width={1000} height={500} src={data?.image} alt='Image' className='w-full h-full rounded-[23px] hidden md:block object-cover' />
            </div>

            <div className='absolute right-0 top-[-14%] lg:w-[25%] h-[50%]'><BlueGradient /></div>


        </div>


    )
}

export default data
