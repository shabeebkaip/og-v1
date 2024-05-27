
import MobHeroSlider from '@/app/shared/components/MobHeroSlider'
import OrangeGradient from '@/app/shared/components/OrangeGradient'
import BlueGradient from '@/app/shared/components/BlueGradient'
import { getGlobalCookie } from '@/app/utils'
import Image from 'next/image'
import axios from 'axios'
import MotionDiv from '@/app/shared/components/MotionDiv'
import { baseURL } from '@/app/constant'


const CommunityList =  ({communityList, pageContent}) => {
    const language = getGlobalCookie('language')
    const array = [
        pageContent?.community_image,
        pageContent?.community_image_1,
        pageContent?.community_image_2
    ]
    return (
        <div className='relative grid w-full grid-cols-10 gap-5 mt-20 font-Sans '>
            <div className=' lg:col-span-6 col-span-10 bg-white box-shadow rounded-[23px] flex flex-col justify-start 2xl:px-16 md:px-10 px-0 2xl:py-20 md:py-14 py-0 gap-10'>
                <div className="lg:hidden sm:block ">
                    <MobHeroSlider item={array} className='w-full' />
                </div>
                <div className='flex flex-col px-5 lg:px-0'>
                    <span className='text-[#FF8500] xl:text-[50px] sm:text-[38px] text-[25px] font-medium leading-8 uppercase'>Join a diverse</span>
                    <span className=' xl:text-[50px] sm:text-[38px] text-[25px] font-medium text-[#4C4C4D] uppercase'>community of:</span>
                </div>
                <div className='grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:gap-5'>
                    {communityList?.map((item, index) => (
                        <MotionDiv styles='px-5 pb-5 2xl:pr-5 lg:px-0 lg:pb-0' key={index}>
                            <h3 className='font-medium 2xl:text-[30px] xl:text-[26px] sm:text-xl text-[16px] text-[#4C4C4D]'>{language === "ar" ? item.ar_name : item.name}</h3>
                            <h4 className='font-light 2xl:text-[26px] xl:text-[22px] sm:text-xl text-[16px] text-[#4C4C4D]'>{language === "ar" ? item.ar_shortDescription : item.shortDescription}</h4>
                        </MotionDiv>
                    ))}
                </div>
            </div>
            <MotionDiv styles='flex-col hidden col-span-4 gap-3 lg:flex'>
                <MotionDiv styles='w-full h-1/2'>
                    <Image className='w-full h-full box-shadow rounded-[23px]' src={pageContent?.community_image} alt="" width={1000} height={200} />
                </MotionDiv>
                <MotionDiv
                    styles='flex items-center w-full gap-3 h-1/2'>
                    <Image className='w-1/2 h-full box-shadow rounded-[23px] object-cover' src={pageContent?.community_image_1} alt="" width={1000} height={200} />
                    <Image className='w-1/2 h-full box-shadow rounded-[23px] object-cover' src={pageContent?.community_image_2} alt="" width={1000} height={200} />
                </MotionDiv>
            </MotionDiv>
            <div className='w-[300px] h-[300px] absolute left-[39%] lg:block hidden'>
                <OrangeGradient />
            </div>
            <div className='w-[200px] h-[200px] absolute left-[45%] bottom-0 lg:block hidden'>
                <OrangeGradient />
            </div>
            <div className='w-[350px] h-[300px] absolute left-[16%] bottom-0 lg:block hidden'>
                <BlueGradient />
            </div>
        </div>
    )
}

export default CommunityList