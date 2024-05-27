// import '../../../styles/style.css'
// import required modules
import BlueGradient from '@/app/shared/components/BlueGradient';
import OrangeGradient from '@/app/shared/components/OrangeGradient';
import MobHeroSlider from '@/app/shared/components/MobHeroSlider';
import Image from 'next/image';


const ContactHero = async ({ data }) => {
    const array = [
        data?.image,
        data?.image_1
    ]

    return (
        <>
            <div className=" bg-white px-5 md:px-0">
                <div className='flex sm:flex-col lg:flex-row gap-4 font-Sans mt-4 container mx-auto'>
                    <div className='lg:flex w-full md:max-w-[40%] gap-4 items-center md:flex-row-reverse hidden'>
                        <div className="lg:w-[50%] lg:h-[55vh] flex">
                            <Image src={data?.image} alt='Image' className='w-full h-auto rounded-[23px]' width={200} height={200} priority />
                        </div>
                        <div className="lg:w-[50%] lg:h-[55vh] flex">
                            <Image src={data?.image_1} alt='Image' className='w-full h-auto rounded-[23px]' width={200} height={200} />
                        </div>
                    </div>
                    <div className='flex  w-full lg:w-[60%] lg:h-[55vh] flex-col bg-white box-shadow rounded-[23px] md:justify-center md:p-1 relative '>
                        <MobHeroSlider item={array} />
                        <div className='absolute top-0 right-0 h-[300px] w-[300px] '>
                            <BlueGradient />
                        </div>
                        <div className='p-4 rounded-[23px] flex lg:justify-center lg:items-center sm:mr-'>
                            <p className='text-[#656565] text-[34px]  lg:text-[70px] font-medium leading-[84px] text-center uppercase'>{data?.text}</p>
                        </div>
                        <div className='absolute -bottom-7 -left-8 h-[300px] w-[200px] hidden lg:flex'>
                            <OrangeGradient className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default ContactHero