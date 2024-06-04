
import Image from "next/image";
import { getGlobalCookie } from "@/app/utils";
import MotionDiv from "@/app/shared/components/MotionDiv";


const AboutUs = ({ aboutus }) => {
    const language = getGlobalCookie('language')
    return (
        <div className='relative grid w-full grid-cols-1 gap-5 mt-16 lg:grid-cols-2 font-Sans'>
            <MotionDiv styles='grid w-full grid-cols-1 gap-4 md:grid-cols-2'>
                <Image className='w-full rounded-[23px] box-shadow mt-3 h-full object-cover  hidden md:block' src={aboutus?.image} alt="" width={1000} height={200} />
                <Image className='w-full rounded-[23px] box-shadow mt-3 h-full  object-cover' src={aboutus?.image1} alt="" width={1000} height={200} />
            </MotionDiv>
            <MotionDiv styles='w-full md:bg-white md:box-shadow md:rounded-[23px] flex flex-col justify-center md:items-center box-shadow '>
                <div className='flex flex-col md:w-[80%] w-full xl:gap-7 gap-3  py-5 px-3 md:px-0'>
                    <h3 className='text-[#FF8500] 2xl:text-[50px] lg:text-[40px] text-[34px] '>{language === "ar" ? aboutus?.ar_heading : aboutus?.heading}</h3>
                    {aboutus?.description && aboutus?.description.map((item, index) => (
                        <h4 className='2xl:text-[24px] xl:text-lg md:text-[17px] sm:text-[20px] text-[16px] font-light leading-6	' key={index}>{language === "ar" ? item.ar_text : item.text}</h4>
                    ))}
                    <Image className='w-full rounded-[23px] box-shadow h-full  md:hidden object-cover' src={aboutus?.image} alt="" width={1000} height={200} />
                    <h3 className='text-[#FF8500] 2xl:text-[50px] xl:text-[40px] text-[34px]'>{language === "ar" ? aboutus?.ar_heading1 : aboutus?.heading1}</h3>
                    {aboutus?.description_1 && aboutus?.description_1.map((item, index) => (
                        <h4 className='2xl:text-[24px] xl:text-lg md:text-[17px] text-[20px] font-light leading-6 ' key={index}>{language === "ar" ? item.ar_text : item.text}</h4>
                    ))}

                </div>

            </MotionDiv>

        </div>

    );
}

export default AboutUs;