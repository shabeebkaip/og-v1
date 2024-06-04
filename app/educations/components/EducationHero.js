import BlueGradient from "@/app/shared/components/BlueGradient"
import OrangeGradient from "@/app/shared/components/OrangeGradient"
import MobHeroSlider from '@/app/shared/components/MobHeroSlider';
import Image from "next/image";




const EducationHero = async ({ hero }) => {


    const array = [
        hero?.image,
        hero?.image_1,
        hero?.image_2
    ]
    return (
        <div className="container mx-auto overflow-hidden font-Sans relative">
            <div className="flex flex-col gap-2 p-2 2xl:flex-row lg:flex-row lg:p-2 md:flex-col md:p-2 sm:flex-col ">
                <div className='flex w-full 2xl:w-[50%] lg:w-[50%]  flex-col bg-white box-shadow rounded-[23px] md:justify-center 2xl:justify-center 2xl:items-center md:p-1 relative   '>
                    <div className="lg:hidden sm:block ">
                        <MobHeroSlider item={array} className='w-full' />
                    </div>
                    <div className='absolute -bottom-10 right-0 h-[300px] w-[300px] md:block hidden'>
                        <BlueGradient />
                    </div>
                    <div className='2xl:p-6 rounded-[23px] flex flex-col 2xl:justify-start 2xl:items-start lg:justify-center lg:p-9 lg:ml-43  md:p-4 p-1 '>
                        <div>
                            <p className='text-[#656565] text-[30px] md:pl-6 font-medium 2xl:leading-[84px] lg:leading-tight 2xl:text-[70px] lg:text-[45px] uppercase lg:text-start md:text-[60px] md:leading-[55px] leading-[44px] text-center'>{hero?.text}</p>
                        </div>
                        <div className="lg:mt-5 mt-7 ">
                            <h3 className="flex flex-col items-center xl:text-[70px] lg:text-[50px] text-center md:text-[37px] text-[24px] text-[#656565] font-normal  ">
                                {hero?.text_1?.split(hero?.borderText).map((splitText, index) => (
                                    <div key={index} style={{ display: 'inline' }}>
                                        {index > 0 && (
                                            <span
                                                className="py-2 px-5 border border-black rounded-[50px]"
                                                style={{
                                                    // If ar_borderText and ar_textColor are the same, apply both border and text color
                                                    color:
                                                        hero?.textColor?.trim().toLowerCase() ===
                                                            hero?.borderText?.trim().toLowerCase()
                                                            ? '#FF8500'
                                                            : 'inherit',
                                                }}
                                            >
                                                {hero?.borderText}
                                            </span>
                                        )}
                                        {splitText?.split(' ').map((word, innerIndex) => (
                                            <span
                                                key={innerIndex}
                                                style={{
                                                    color:
                                                        hero?.textColor?.trim().toLowerCase() === word.trim().toLowerCase()
                                                            ? '#FF8500'
                                                            : 'inherit',
                                                    border:
                                                        hero?.borderText?.trim().toLowerCase() === word.trim().toLowerCase()
                                                            ? '1px solid red'
                                                            : 'none',
                                                    borderRadius: hero?.borderText?.trim().toLowerCase() === word.trim().toLowerCase() ? '50px' : '0',
                                                }}
                                            >
                                                {word}
                                                {innerIndex < splitText?.split(' ').length - 1 && ' '}
                                            </span>
                                        ))}
                                    </div>
                                ))}

                            </h3>
                        </div>
                        <div className="hidden lg:block">
                            <button className='border px-5 2xl:px-6 py-2 2xl:p-1 rounded-full border-[#FF8500] text-[20px] 2xl:text-[30px] lg:text-[27px] font-medium text-[#656565] mt-9 ml-4 md:text-[30px] md:leading-[30px]'>
                                lorem ipsum
                            </button>
                        </div>
                        <div className="flex items-center justify-center pl-6 lg:hidden">
                            <button className='border px-5 2xl:px-6 py-2 rounded-full border-[#FF8500] text-[20px]  font-medium text-[#656565] mt-[85px] '>
                                lorem ipsum <span>&rarr;</span>
                            </button>
                        </div>
                    </div>
                    <div className='absolute top-0 left-0 h-[300px] w-[300px] hidden lg:flex '>
                        <OrangeGradient className='w-full' />
                    </div>
                </div>
                <div className="flex-col hidden gap-1 lg:flex 2xl:flex-row lg:flex-row   w-[50%]">
                    <div className="flex flex-col w-1/2 gap-2 ">
                        <Image src={hero?.image} alt="" className="rounded-[23px] w-full h-2/3   object-cover " width={200} height={200} />
                        <Image src={hero?.image_1} alt="" className="rounded-[23px] w-full h-1/3  object-cover " width={200} height={200} />
                    </div>
                    <div className=" w-1/2">
                        <Image src={hero?.image_2} alt="" className="rounded-[23px] w-full h-full   md:object-fill object-cover" width={200} height={200} />
                    </div>
                </div>
                <div className="md:hidden sm:flex justify-center items-center  h-[300px] w-[300px] absolute -mt-48 ml-9 -z-10">
                    <OrangeGradient className='w-full' />
                </div>
            </div>
        </div >

    )
}

export default EducationHero



