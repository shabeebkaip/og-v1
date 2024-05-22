import OrangeGradient from '../../../shared/components/OrangeGradient'
import BlueGradient from '../../../shared/components/BlueGradient'
import { getGlobalCookie } from '@/app/utils'
import moment from 'moment'
import { baseURL, displayDateFormatShort } from '@/app/constant'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'

const ProgramList = async () => {
    const language = getGlobalCookie('language')
    const programResponse = await axios.get(`${baseURL}/programs`)
    const programList = programResponse.data
    const hackathonResponse = await axios.get(`${baseURL}/hackathon`)
    const hackathon = hackathonResponse.data
    const courseResponse = await axios.get(`${baseURL}/education/courses`)
    const courseList = courseResponse.data
    return (
        <>
            <div className='w-full mt-16 font-Sans md:mt-28'>
                <div className='relative flex flex-col items-center w-full '>

                    <div className='absolute  left-[2%] w-[20%] h-[90%] hidden md:block'><BlueGradient /></div>
                    <div className='absolute  w-[20%] h-[90%] right-[2%] hidden md:block'><OrangeGradient /></div>


                    <h3 className=' text-[#FF8500] font-medium md:text-[50px] sm:text-[40px] text-[26px] border rounded-[60px] px-3 border-gray-500'>Experience the Best</h3>
                    <h3 className=' font-medium md:text-[50px] sm:text-[40px] text-[26px] text-gray-500 text-center'>of Ongoing Programs with One Global Hub</h3>
                </div>
                <div className='grid w-full h-full grid-cols-1 gap-5 mt-20 lg:grid-cols-3'>
                    {
                        programList?.map((item, index) => (
                            <div key={index} className='bg-white rounded-[23px] box-shadow w-full h-full flex flex-col justify-between '>
                                <div className={`w-full   p-4 flex justify-center items-center rounded-t-[23px] z-10 h-[130px]`} style={{ backgroundColor: moment() > moment(item.end_date) ? '#efefef' : index % 2 === 0 ? '#FF8500' : '#92D1FB' }}>
                                    <h3 className={` sm:text-[40px] text-3xl font-medium text-center w-[70%] ${moment() > moment(item.end_date) ? 'text-[#B0ABAB]' : 'text-white'}  `} >{language === "ar" ? item.ar_programName : item.programName}</h3>
                                </div>
                                <div className='flex items-baseline justify-center w-full px-10'>
                                    <h5 className=' sm:text-[30px] text-[26px] font-normal text-gray-500 text-center'>{language === "ar" ? item.ar_shortDescription : item.shortDescription}</h5>
                                </div>
                                <div className='mt-[15%] flex justify-between pb-8 items-end px-3'>
                                    <div className='pl-10 '>
                                        <h3 className=' text-[#4C4C4D]  font-bold text-[28px]'>{item.dateDesc}</h3>
                                        {item?.start_date ?
                                            <h4 className='font-bold text-[#4C4C4D] text-[24px]'>
                                                <span className={`${moment() > moment(item.end_date) ? "text-[#B0ABAB]" : ''}`}>
                                                    {moment() > moment(item.end_date) ? 'Applications are closed' :
                                                        `Applications are open from  ${moment(item.start_date).format(displayDateFormatShort)} to ${moment(item.end_date).format(displayDateFormatShort)}`
                                                    }
                                                </span>
                                            </h4> :
                                            <h4 className='font-bold text-[#4C4C4D] text-[28px]'>
                                                <span className=''>
                                                    Applications are open until {moment(item.end_date).format(displayDateFormatShort)}
                                                </span>
                                            </h4>
                                        }


                                    </div>
                                    {item.disabled ? (
                                        <Image className=' h-10' width={40} height={40} src={"/Home/shareIcon.png"} alt="" />
                                    ) : (
                                        <Link href='/programs/details'>
                                            <Image width={40} height={40} className=' h-10 object-contain' src={"/Home/shareIcon.png"} alt="" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))
                    }

                    {
                        courseList?.length ?
                            <div className='bg-white rounded-[23px] box-shadow w-full h-full flex flex-col justify-between '>
                                <div className={`w-full   p-4 flex justify-center items-center rounded-t-[23px] z-10 h-[130px]`} style={{ backgroundColor: '#FF8500' }}>
                                    <h3 className={` sm:text-[40px] text-3xl font-medium text-center w-[70%] text-white  `} >Education Courses</h3>
                                </div>
                                <div className='flex flex-col items-center justify-center w-full px-10 p-3'>
                                    {
                                        courseList?.map((item, index) => (
                                            <Link href={`/education/${item._id}`} className=' sm:text-[24px] text-[26px] font-normal text-gray-500 text-center cursor-pointer hover:text-blue-600 flex gap-2 items-center' key={index}>{item.heading}
                                                <Image className='w-5 h-5' width={40} height={40} src={"/Home/shareIcon.png"} alt="" />
                                            </Link>

                                        ))
                                    }
                                </div>

                            </div> : null
                    }
                    {
                        hackathon && Object.keys(hackathon).length ?
                            <div className='bg-white rounded-[23px] box-shadow w-full h-full flex flex-col justify-between '>
                                <div className={`w-full   p-4 flex justify-center items-center rounded-t-[23px] z-10 h-[130px]`} style={{ backgroundColor: '#92D1FB' }}>
                                    <h3 className={` sm:text-[40px] text-3xl font-medium text-center w-[70%] text-white  `} >Hackathon</h3>
                                </div>
                                <div className='flex items-baseline justify-center w-full px-10'>
                                    <h5 className=' sm:text-[30px] text-[26px] font-normal text-gray-500 text-center'>{language === "ar" ? hackathon.ar_short_desc : hackathon?.short_desc}</h5>
                                </div>
                                <div className='flex flex-col items-center justify-center w-full px-10 p-3'>
                                    {hackathon?.start_date ?
                                        <h4 className='font-bold text-[#4C4C4D] text-[24px]'>
                                            <span className={`${moment() > moment(hackathon?.end_date) ? "text-[#B0ABAB]" : ''}`}>
                                                {moment() > moment(hackathon?.end_date) ? 'Applications are closed' :
                                                    `Applications are open from  ${moment(hackathon?.start_date).format(displayDateFormatShort)} to ${moment(hackathon?.end_date).format(displayDateFormatShort)}`
                                                }
                                            </span>
                                        </h4> :
                                        <h4 className='font-bold text-[#4C4C4D] text-[28px]'>

                                            <span className={`${moment() > moment(hackathon.end_date) ? "text-[#B0ABAB]" : ''}`}>
                                                {
                                                    moment() > moment(hackathon?.end_date) ?
                                                        'Applications are closed' :
                                                        `Applications are open until ${moment(hackathon?.end_date).format(displayDateFormatShort)}`
                                                }
                                            </span>
                                        </h4>
                                    }
                                </div>

                            </div> : null
                    }
                </div>

            </div>
        </>
    )
}

export default ProgramList