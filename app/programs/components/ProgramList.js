

"use client"
import OrangeGradient from '@/app/shared/components/OrangeGradient';
import { fadeIn } from '@/app/constant/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getGlobalCookie } from '@/app/utils';
import Link from 'next/link';


const ProgramList = ({ program }) => {
    let language = getGlobalCookie('language')
    return (
        <>
            {program &&
                program?.map((item, index) => (
                    <div key={index} className='relative w-full pt-20 md:grid-cols-2 gap-7 font-Sans'>
                        {index % 2 == 0 ? (
                            <div div className='grid md:grid md:grid-cols-2 gap-[20px]'>
                                <motion.div
                                    variants={fadeIn('left', 0.1)}
                                    initial='hidden'
                                    whileInView={'show'}
                                    className='items-center w-full gap-4 md:grid md:grid-cols-2'>
                                    <Image src={item?.show_image_1} alt='' className=' rounded-[26px] w-full h-[90%] md:block hidden object-cover' width={200} height={100} />
                                    <Image src={item?.show_image_2} alt='' className='rounded-[26px] w-full h-full object-cover' width={200} height={100} />
                                </motion.div>
                                <motion.div
                                    variants={fadeIn('right', 0.1)}
                                    initial='hidden'
                                    whileInView={'show'}
                                    className='flex w-full rounded-[23px] justify-center items-center xl:py-10 py-5 mob_box_shadows  md:bg-white'>
                                    <div className='flex flex-col xl:w-[80%] xl:gap-10 gap-5 md:w-[85%]'>
                                        <h2 className='xl:text-[50px] lg:text-[40px] md:text-[20px] text-[30px] text-[#FF8500] font-medium xl:leading-[58px]'>
                                            {language === "ar" ? item?.ar_programName : item?.programName}
                                        </h2>
                                        <p className='text-[#4C4C4D] xl:text-[26px] lg:text-[18px] md:text-[12px] font-light xl:leading-[30px] text-[16px]'>
                                            {language === "ar" ? item?.ar_description : item?.description}
                                        </p>
                                        <div>
                                            <Link href={`/programs/${item?._id}`} >
                                                <button
                                                    className='border xl:h-[54px] lg:h-[40px] md:h-[32px] h-[40px] rounded-[40px] border-[#FF8500] xl:text-[20px] lg:text-[18px] md:text-[14px] text-[20px] text-[#1C2126] lg:px-8 px-4'
                                                >
                                                    Read More
                                                    <span className='pl-4'>&rarr;</span>
                                                </button>
                                            </Link>

                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ) : (
                            <div className='flex flex-col-reverse md:grid md:grid-cols-2 gap-[20px]'>
                                <motion.div
                                    variants={fadeIn('right', 0.1)}
                                    initial='hidden'
                                    whileInView={'show'}
                                    className='flex w-full rounded-[23px] justify-center items-center xl:py-10 py-5 mob_box_shadows  md:bg-white'>
                                    <div className='flex flex-col xl:w-[80%] xl:gap-10 gap-5 md:w-[85%]'>
                                        <h2 className='xl:text-[50px] lg:text-[40px] md:text-[20px] text-[30px] text-[#FF8500] font-medium xl:leading-[58px]'>
                                            {language === "ar" ? item?.ar_programName : item?.programName}
                                        </h2>
                                        <p className='text-[#4C4C4D] xl:text-[26px] lg:text-[18px] md:text-[12px] font-light xl:leading-[30px] text-[16px]'>
                                            {language === "ar" ? item?.ar_description : item?.description}
                                        </p>
                                        <div>
                                            <Link href={`/programs/${item?._id}`} >
                                                <button
                                                    className='border xl:h-[54px] lg:h-[40px] md:h-[32px] h-[40px] rounded-[40px] border-[#FF8500] xl:text-[20px] lg:text-[18px] md:text-[14px] text-[20px] text-[#1C2126] lg:px-8 px-4'
                                                >
                                                    Read More
                                                    <span className='pl-4'>&rarr;</span>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={fadeIn('left', 0.1)}
                                    initial='hidden'
                                    whileInView={'show'}
                                    className='items-center w-full gap-4 md:grid md:grid-cols-2'>
                                    <Image src={item?.show_image_1} className=' rounded-[26px] w-full h-[90%] md:block hidden' alt='' width={200} height={100}></Image>
                                    <Image src={item?.show_image_2} className='rounded-[26px] w-full h-full' alt='' width={200} height={100}></Image>
                                </motion.div>
                            </div>
                        )}
                        <div className='absolute w-[66%] h-[12%] top-[-23px] left-[-10%] z-[-1] md:hidden block'>
                            <OrangeGradient />
                        </div>
                    </div>
                ))}
        </>
    )
}

export default ProgramList
