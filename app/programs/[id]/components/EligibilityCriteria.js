import OrangeGradient from '@/app/shared/components/OrangeGradient'
import { getGlobalCookie } from "@/app/utils"
import Image from "next/image"


const EligibilityCriteria = ({programDetail}) => {
    const language = getGlobalCookie('language')
    return (
        <div className='container relative px-6 mx-auto md:px-0 '>
        <div className='flex items-center justify-center '>
            <h1 className='text-[#4C4C4D] lg:text-[50px] md:text-[45px] text-[35px] font-medium text-center'><span className='text-[#FF8500] border-2 border-solid rounded-[45px] px-4' style={{ borderColor: '#4C4C4D' }}>ELIGIBILITY</span> CRITERIA</h1>
        </div>
        <div className=' w-[100%] h-[35%] absolute  top-0 right-0 md:hidden block'><OrangeGradient /></div>
        <div className=' pt-20'>
            <div className=' grid grid-cols-12 gap-4'>
                <div className=' col-span-3 h-full w-full'>
                    <Image className='h-[80%] w-full rounded-3xl object-cover' blurDataURL='lazy' src={programDetail?.eligibility_image} alt="" width={200} height={200} />
                </div>
                <div className=' col-span-3 flex flex-col gap-4 w-full'>
                    <Image className='w-[80%] h-[40%]  rounded-3xl object-cover' src={programDetail?.eligibility_image_1} alt="" width={200} height={200} />
                    <Image className='w-full h-[60%]  rounded-3xl object-cover' src={programDetail?.eligibility_image_2} alt="" width={200} height={200} />

                </div>
                <div className=' col-span-6 w-full flex flex-col justify-around gap-4 pl-7'>
                    <h2 className=' font-medium text-[#FF8500] xl:text-[46px] lg:text-[30px] md:text-[26px] text-[30px] xl:leading-[58px] pt-[8%] md:pt-0'>{language === "ar" ? programDetail.ar_eligibility_heading : programDetail.eligibility_heading}</h2>
                    {programDetail?.eligibility_steps?.map((item, index) => (
                        <ul key={index} className='text-[#4C4C4D] xl:text-[26px] lg:text-[18px] md:text-[13px] text-[20px] lg:leading-[30.5px] font-normal list-disc pl-4 flex  flex-col gap-5'>
                            <li>{language === "ar" ? item?.ar_text : item?.text}</li>
                        </ul>
                    ))}
                </div>

            </div>

        </div>


    </div>
    )
}

export default EligibilityCriteria
