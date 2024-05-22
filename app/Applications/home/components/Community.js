
import OrangeGradient from '../../../shared/components/OrangeGradient'
import { getGlobalCookie } from '@/app/utils'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import MotionDiv from '@/app/shared/components/MotionDiv'
import { baseURL } from '@/app/constant'


const Community = async () => {
    const communityResponse = await axios.get(`${baseURL}/our-community`)
    const community = communityResponse.data
    const language = getGlobalCookie('language')
    return (
        <div className='relative w-full mt-16 md:mt-28 font-Sans'>
            <div className='w-full absolute h-[300px] top-[1%] block md:hidden z-[-10] '><OrangeGradient /></div>
            <div className='flex justify-center w-full'>
                <h3 className=' sm:text-[50px] text-[38px] font-medium text-gray-700 text-center uppercase '>
                    Our <span className='border border-gray-700 text-[#FF8500] px-5 rounded-[30px]'>Community</span>
                </h3>
            </div>
            <div className='grid items-start grid-cols-1 gap-5 mt-20 lg:grid-cols-2 h-full '>
                <MotionDiv styles='w-full '>
                    <Image className=' w-full rounded-[23px] h-full' src={community?.image} alt="" width={1000} height={200} />
                </MotionDiv>
                <div className='flex flex-col items-start justify-center  w-full font-light  h-full rounded-lg gap-5 '>
                    <h1 className='md:px-[9%] font-light 2xl:text-[26px] xl:text-[22px] text-lg text-[#4C4C4D] leading-[150%]'>
                        {language === "ar" ? community?.ar_description : community?.description}
                    </h1>
                    <h1 className='md:px-[9%] font-light 2xl:text-[26px] xl:text-[22px] text-lg text-[#4C4C4D] leading-[150%]'>
                        {language === "ar" ? community?.ar_description_1 : community?.description_1}
                    </h1>
                </div>
            </div>
            <div className='flex justify-center w-full mt-20'>
                <Link href='/contact-us'>
                    <button className='border border-[#FF8500] text-[30px] font-medium px-10 py-2 rounded-[30px] text-[#4C4C4D]' >Explore more</button>
                </Link>
            </div>
            <div>
                <div className='absolute -mt-36 left-[28rem] h-[300px] w-[300px] block md:hidden z-[-1]'><OrangeGradient /></div>
                <div className='absolute mt-[185%] left-[28rem] h-[300px] w-[300px] block md:hidden z-[1000]'><OrangeGradient /></div>

            </div>
        </div>
    )
}

export default Community