"use client"
import OrangeGradient from '@/app/shared/components/OrangeGradient'
import BlueGradient from '@/app/shared/components/BlueGradient'
import ProgramCard from '@/app/home/components/ProgramCard'
import EducationCard from '@/app/home/components/EducationCard'
import { getGlobalCookie } from '@/app/utils'
import moment from 'moment'
import { displayDateFormatShort } from '@/app/constant'
import Image from 'next/image'
import Link from 'next/link'
import PageContents from '@/app/shared/components/PageContents'

const ProgramList = ({ programs, hackathon, courses, reversePitch, pageContent }) => {
    const language = getGlobalCookie('language')
    const pageContent1 = pageContent.pageContent?.[2]
    const text = pageContent1?.text
    return (
        <>
            <div className='w-full mt-16 font-Sans md:mt-28'>
                <div className='relative flex flex-col items-center w-full '>

                    <div className='absolute  left-[2%] w-[20%] h-[90%] hidden md:block'><BlueGradient /></div>
                    <div className='absolute  w-[20%] h-[90%] right-[2%] hidden md:block'><OrangeGradient /></div>


                    <div className=' font-medium md:text-[50px] sm:text-[40px] text-[24px] px-3 border-gray-500  flex justify-center text-center'>
                        <PageContents item={pageContent1} index="2" head={true} />
                    </div>
                </div>
                <div className='grid w-full h-full grid-cols-1 gap-5 mt-20 lg:grid-cols-3'>
                    {
                        programs?.map((item, index) => (
                            <ProgramCard item={item} key={index} index={index} />
                        ))
                    }

                    {/* educations */}
                    {
                        courses?.length ?
                            <EducationCard courses={courses} />: null
                    }

                    {/* hackathon */}
                    {
                        hackathon && hackathon?.status && Object.keys(hackathon).length ?
                            <div className='bg-white rounded-[23px] box-shadow w-full h-full flex flex-col justify-between cursor-pointer hover:scale-105 duration-300 ' onClick={() => window.location.href = "/hackathon"}>
                                <div className={`w-full   p-4 flex justify-center items-center rounded-t-[23px] z-10 h-[130px]`} style={{ backgroundColor: '#92D1FB' }}>
                                    <h3 className={` sm:text-[40px] text-2xl font-medium text-center w-[70%] text-white  `} >Hackathon</h3>
                                </div>
                                <div className='flex items-baseline justify-center w-full px-10'>
                                    <h5 className=' sm:text-[30px] text-[16px] font-normal text-gray-500 text-center'>{language === "ar" ? hackathon?.ar_short_desc : hackathon?.short_desc}</h5>
                                </div>
                                <div className='grid grid-cols-10 gap-1  items-center justify-between w-full px-10 p-3'>
                                    {hackathon?.start_date ?
                                        <h4 className='font-bold text-[#4C4C4D] sm:text-[24px] text-[20px] col-span-9'>
                                            <span className={`${moment() > moment(hackathon?.end_date) ? "text-[#B0ABAB]" : ''}`}>
                                                {moment() > moment(hackathon?.end_date) ? 'Applications are closed' :
                                                    `Applications are open from  ${moment(hackathon?.start_date).format(displayDateFormatShort)} to ${moment(hackathon?.end_date).format(displayDateFormatShort)}`
                                                }
                                            </span>
                                        </h4> :
                                        <h4 className='font-semibold text-[#4C4C4D] sm:text-[24px] text-[20px] col-span-9'>

                                            <span className={`${moment() > moment(hackathon?.end_date) ? "text-[#B0ABAB]" : ''}`}>
                                                {
                                                    moment() > moment(hackathon?.end_date) ?
                                                        'Applications are closed' :
                                                        `Applications are open until ${moment(hackathon?.end_date).format(displayDateFormatShort)}`
                                                }
                                            </span>
                                        </h4>
                                    }
                                    <div className='col-span-1 flex justify-end' >
                                        <Image width={40} height={40} className=' h-10 object-contain' src={"/Home/shareIcon.png"} alt="" />
                                    </div>
                                </div>

                            </div> : null
                    }

                    {/* {Reverse Pitch} */}
                    {
                        reversePitch && reversePitch?.status && Object.keys(reversePitch).length ?
                            <div className='bg-white rounded-[23px] box-shadow w-full h-full flex flex-col justify-between cursor-pointer hover:scale-105 duration-300 ' onClick={() => window.location.href = "/reverse-pitch"}>
                                <div className={`w-full   p-4 flex justify-center items-center rounded-t-[23px] z-10 h-[130px]`} style={{ backgroundColor: '#92D1FB' }}>
                                    <h3 className={` sm:text-[40px] text-2xl font-medium text-center w-[70%] text-white  `} >Reverse Pitch</h3>
                                </div>
                                <div className='flex items-baseline justify-center w-full px-10'>
                                    <h5 className=' sm:text-[30px] text-[16px] font-normal text-gray-500 text-center'>{language === "ar" ? reversePitch.ar_short_desc : reversePitch?.short_desc}</h5>
                                </div>
                                <div className='grid grid-cols-10 gap-1  items-center justify-between w-full px-10 p-3'>
                                    {reversePitch?.st_date ?
                                        <h4 className='font-semibold text-[#4C4C4D] sm:text-[24px] text-[20px] col-span-9'>
                                            <span className={`${moment() > moment(reversePitch?.end_date) ? "text-[#B0ABAB]" : ''}`}>
                                                {moment() > moment(reversePitch?.end_date) ? 'Applications are closed' :
                                                    `Applications are open from  ${moment(reversePitch?.st_date).format(displayDateFormatShort)} to ${moment(reversePitch?.end_date).format(displayDateFormatShort)}`
                                                }
                                            </span>
                                        </h4> :
                                        <h4 className='font-bold text-[#4C4C4D] sm:text-[24px] text-[20px]'>

                                            <span className={`${moment() > moment(reversePitch.end_date) ? "text-[#B0ABAB]" : ''}`}>
                                                {
                                                    moment() > moment(reversePitch?.end_date) ?
                                                        'Applications are closed' :
                                                        `Applications are open until ${moment(reversePitch?.end_date).format(displayDateFormatShort)}`
                                                }
                                            </span>
                                        </h4>
                                    }
                                    <Link href='/reverse-pitch' className='col-span-1 flex justify-end' >
                                        <Image width={40} height={40} className=' h-10 object-contain' src={"/Home/shareIcon.png"} alt="" />
                                    </Link>
                                </div>

                            </div> : null
                    }
                </div>

            </div>
        </>
    )
}

export default ProgramList