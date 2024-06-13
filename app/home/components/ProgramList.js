"use client"
import OrangeGradient from '@/app/shared/components/OrangeGradient'
import BlueGradient from '@/app/shared/components/BlueGradient'
import ProgramCard from '@/app/home/components/ProgramCard'
import { getGlobalCookie } from '@/app/utils'
import moment from 'moment'
import { displayDateFormatShort } from '@/app/constant'
import Image from 'next/image'
import Link from 'next/link'

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


                    <h3 className=' font-medium md:text-[50px] sm:text-[40px] text-[24px] px-3 border-gray-500  flex justify-center text-center'>
                        {text?.split(pageContent1?.borderText).map((splitText, index) => (
                            <div key={index} style={{ display: 'inline' }}>
                                {index > 0 && (
                                    <span
                                        className="py-2 px-5 border rounded-[53px]"
                                        style={{
                                            color:
                                                pageContent1?.textColor?.trim().toLowerCase() === pageContent1.borderText.trim().toLowerCase() ||
                                                    pageContent1?.textColor_1?.trim().toLowerCase() === pageContent1.borderText_1.trim().toLowerCase()
                                                    ? '#FF8500'
                                                    : 'inherit',
                                            borderColor: '#6D6E71', // Apply border color based on borderText
                                            borderWidth: '1px',
                                        }}
                                    >
                                        {pageContent1?.borderText}
                                    </span>
                                    
                                )}
                                <br/>
                                {splitText.split(pageContent1?.borderText_1).map((innerSplitText, innerIndex) => (

                                    <span key={innerIndex}>

                                        {innerSplitText.split(' ').map((word, wordIndex) => (
                                            <span
                                                key={wordIndex}
                                                style={{
                                                    color:
                                                        pageContent1?.textColor?.split(' ').includes(word.replace(/[.,]/g, '')) ||
                                                            pageContent1?.textColor_1?.split(' ').includes(word.replace(/[.,]/g, ''))
                                                            ? '#FF8500'
                                                            : 'inherit',
                                                    border: 'none', // Remove border from words
                                                }}
                                            >
                                                {word}
                                                {wordIndex < innerSplitText.split(' ').length - 1 && ' '}
                                            </span>
                                        ))}
                                        {innerIndex < splitText.split(pageContent1?.borderText_1).length - 1 && (
                                            <span
                                                className="py-2 px-5 border rounded-[53px]"
                                                style={{
                                                    color:
                                                        pageContent1?.textColor?.trim().toLowerCase() === pageContent1.borderText_1?.trim().toLowerCase() ||
                                                            pageContent1?.textColor_1?.trim().toLowerCase() === pageContent1.borderText_1?.trim().toLowerCase()
                                                            ? '#FF8500'
                                                            : 'inherit',
                                                    borderColor: '#6D6E71', // Apply border color based on borderText_1
                                                    borderWidth: '1px',
                                                }}
                                            >
                                                {pageContent1?.borderText_1}
                                            </span>
                                        )}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </h3>
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
                            <div className='bg-white rounded-[23px] box-shadow w-full h-full flex flex-col justify-between '>
                                <div className={`w-full   p-4 flex justify-center items-center rounded-t-[23px] z-10 h-[130px]`} style={{ backgroundColor: '#FF8500' }}>
                                    <h3 className={` sm:text-[40px] text-2xl font-medium text-center w-[70%] text-white  `} >Education Courses </h3>
                                </div>
                                <ul className='flex flex-col items-center  justify-between w-full px-2 p-3'>
                                    {
                                        courses?.slice(0, 5).map((item, index) => (
                                            <li key={index} className='flex items-center justify-between w-full hover:bg-stone-50 p-2 rounded-lg' >
                                                <Link href={`/educations/${item?._id}`} className=' sm:text-[24px] text-[16px] font-normal text-gray-500  cursor-pointer hover:text-blue-600 flex gap-2 items-center' >{item.heading}
                                                </Link>

                                                <Image className='w-8 h-8' width={40} height={40} src={"/Home/shareIcon.png"} alt="" />
                                            </li>

                                        ))
                                    }
                                </ul>
                                <div className='px-6 bg-gray-200 w-full text-center rounded-lg '>
                                    <div className='font-bold text-[#4C4C4D] sm:text-[28px] text-[20px] flex justify-between p-4'>
                                        <h4 className=''>
                                            View All Courses
                                        </h4>
                                        <Link href={`/educations`} className=' sm:text-[24px] text-[16px] font-normal text-gray-500 text-center cursor-pointer hover:text-blue-600 flex gap-2 items-center' >
                                            <Image className='w-8 h-8' width={40} height={40} src={"/Home/shareIcon.png"} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div> : null
                    }

                    {/* hackathon */}
                    {
                        hackathon && hackathon?.status && Object.keys(hackathon).length ?
                            <div className='bg-white rounded-[23px] box-shadow w-full h-full flex flex-col justify-between cursor-pointer ' onClick={() => window.location.href = "/hackathon"}>
                                <div className={`w-full   p-4 flex justify-center items-center rounded-t-[23px] z-10 h-[130px]`} style={{ backgroundColor: '#92D1FB' }}>
                                    <h3 className={` sm:text-[40px] text-2xl font-medium text-center w-[70%] text-white  `} >Hackathon</h3>
                                </div>
                                <div className='flex items-baseline justify-center w-full px-10'>
                                    s                                <h5 className=' sm:text-[30px] text-[16px] font-normal text-gray-500 text-center'>{language === "ar" ? hackathon?.ar_short_desc : hackathon?.short_desc}</h5>
                                </div>
                                <div className='flex  items-center justify-between w-full px-10 p-3'>
                                    {hackathon?.start_date ?
                                        <h4 className='font-bold text-[#4C4C4D] sm:text-[24px] text-[20px]'>
                                            <span className={`${moment() > moment(hackathon?.end_date) ? "text-[#B0ABAB]" : ''}`}>
                                                {moment() > moment(hackathon?.end_date) ? 'Applications are closed' :
                                                    `Applications are open from  ${moment(hackathon?.start_date).format(displayDateFormatShort)} to ${moment(hackathon?.end_date).format(displayDateFormatShort)}`
                                                }
                                            </span>
                                        </h4> :
                                        <h4 className='font-bold text-[#4C4C4D] sm:text-[28px] text-[20px]'>

                                            <span className={`${moment() > moment(hackathon?.end_date) ? "text-[#B0ABAB]" : ''}`}>
                                                {
                                                    moment() > moment(hackathon?.end_date) ?
                                                        'Applications are closed' :
                                                        `Applications are open until ${moment(hackathon?.end_date).format(displayDateFormatShort)}`
                                                }
                                            </span>
                                        </h4>
                                    }
                                    <Link href='/hackathon'>
                                        <Image width={40} height={40} className=' h-10 object-contain' src={"/Home/shareIcon.png"} alt="" />
                                    </Link>
                                </div>

                            </div> : null
                    }

                    {/* {Reverse Pitch} */}
                    {
                        reversePitch && reversePitch?.status && Object.keys(reversePitch).length ?
                            <div className='bg-white rounded-[23px] box-shadow w-full h-full flex flex-col justify-between cursor-pointer ' onClick={() => window.location.href = "/reverse-pitch"}>
                                <div className={`w-full   p-4 flex justify-center items-center rounded-t-[23px] z-10 h-[130px]`} style={{ backgroundColor: '#92D1FB' }}>
                                    <h3 className={` sm:text-[40px] text-2xl font-medium text-center w-[70%] text-white  `} >Reverse Pitch</h3>
                                </div>
                                <div className='flex items-baseline justify-center w-full px-10'>
                                    <h5 className=' sm:text-[30px] text-[16px] font-normal text-gray-500 text-center'>{language === "ar" ? reversePitch.ar_short_desc : reversePitch?.short_desc}</h5>
                                </div>
                                <div className='flex  items-center justify-between w-full px-10 p-3'>
                                    {reversePitch?.st_date ?
                                        <h4 className='font-bold text-[#4C4C4D] sm:text-[24px] text-[20px]'>
                                            <span className={`${moment() > moment(reversePitch?.end_date) ? "text-[#B0ABAB]" : ''}`}>
                                                {moment() > moment(reversePitch?.end_date) ? 'Applications are closed' :
                                                    `Applications are open from  ${moment(reversePitch?.st_date).format(displayDateFormatShort)} to ${moment(reversePitch?.end_date).format(displayDateFormatShort)}`
                                                }
                                            </span>
                                        </h4> :
                                        <h4 className='font-bold text-[#4C4C4D] sm:text-[28px] text-[20px]'>

                                            <span className={`${moment() > moment(reversePitch.end_date) ? "text-[#B0ABAB]" : ''}`}>
                                                {
                                                    moment() > moment(reversePitch?.end_date) ?
                                                        'Applications are closed' :
                                                        `Applications are open until ${moment(reversePitch?.end_date).format(displayDateFormatShort)}`
                                                }
                                            </span>
                                        </h4>
                                    }
                                    <Link href='/reverse-pitch'>
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