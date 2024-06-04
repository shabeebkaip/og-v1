import BlueGradient from '@/app/shared/components/BlueGradient';
import MobHeroSlider from '@/app/shared/components/MobHeroSlider';
import OrangeGradient from '@/app/shared/components/OrangeGradient';
import Image from 'next/image';


const YourGoal = ({findProgram}) => {
  const array = [
    findProgram?.image,
    findProgram?.image1
]
    return (
        <div className="container mx-auto p-[1rem]  lg:mt-24">
        <div className='lg:flex justify-center items-center  rounded-[23px]  shadow-xl sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl p-4 bg-white 2xl:pt-0 2xl:pb-0 2xl:pr-0 pb-0  pt-0 md:p-2 lg:pt-0 lg:pr-0 lg:pb-0 md:pb-0 '>
            <div className='flex items-center justify-center pt-0 pr-0 md:hidden sm:block '>
                <MobHeroSlider item={array} className='items-center object-fill ' />
            </div>
            <div className='flex flex-col items-start justify-center text-start 2xl:p-8 lg:p-7'>
                <p className='font-medium 2xl:text-[45px] lg:text-[32px]  text-[30px] leading-[44px] 2xl:leading-[58.65px] uppercase text-[#FF8500] md:text-[50px]'>{findProgram.heading}</p>
                <div className='2xl:max-w-[550px] lg:max-w-[450px] 2xl:mt-9 mt-6 md:mb-0 mb-16'>
                    {findProgram.description?.map((item, index) => (
                        <p key={index} className='font-light pb-4  2xl:text-[26px] 2xl:leading-[30.5px] w-full lg:text-[19px] md:text-[26px] text-[16px] leading-[30.5px] lg:leading-tight'>{item?.text}</p>
                    ))}

                </div>
            </div>
            <div className="hidden gap-3 md:flex md:flex-row">
                <div className='flex items-center justify-center '>
                    <Image width={1000} height={500} src={findProgram?.image} alt="" className='2xl:w-[482px] 2xl:h-[601px] lg:w-[380px] object-cover rounded-[23px] ' />
                </div>
                <div className=''>
                    <Image width={1000} height={500}  src={findProgram?.image1} alt="" className='2xl:w-[415px] 2xl:h-[770px] lg:w-[330px] object-cover rounded-[23px]' />
                </div>
            </div>
        </div>
        <div className='absolute -mt-28 right-0 h-[300px] w-[300px] md:block hidden -z-10'>
            <BlueGradient />
        </div>
        <div className='absolute -mt-36 -left-28 h-[300px] w-[300px] md:block hidden'>
            <OrangeGradient />
        </div>
    </div>
    )
}

export default YourGoal
