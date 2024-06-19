"use client"
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { displayDateFormatShort } from "@/app/constant";
import { getGlobalCookie } from '@/app/utils'



const ProgramCard = ({ item, index }) => {
  const language = getGlobalCookie('language')
  return (
    <div className='bg-white rounded-[23px] box-shadow w-full h-full flex flex-col justify-between cursor-pointer ' onClick={() => window.location.href = `/programs/${item._id}`} >
      <div className={`w-full  p-4 flex justify-center items-center rounded-t-[23px] z-10 h-[130px]`} style={{ backgroundColor: moment() > moment(item?.reg_end_date) ? '#efefef' : index % 2 === 0 ? '#FF8500' : '#92D1FB' }}>
        <h3 className={` sm:text-[40px] text-2xl font-medium text-center break-words  ${moment() > moment(item?.reg_end_date) ? 'text-[#B0ABAB]' : 'text-white'}  `} >{language === "ar" ? item.ar_programName : item.programName}</h3>
      </div>
      <div className='flex items-baseline justify-center w-full px-10'>
        <h5 className=' sm:text-[30px] text-[18px] font-normal text-gray-500 text-center'>{language === "ar" ? item.ar_shortDescription : item.shortDescription}</h5>
      </div>
      <div className='mt-[15%] flex justify-between pb-8 items-end px-3'>
        <div className='pl-10 '>
          <h3 className=' text-[#4C4C4D]  font-bold sm:text-[28px] text-[19px]'>{item.dateDesc}</h3>
          {item?.reg_st_date ?
            <h4 className='font-bold text-[#4C4C4D] sm:text-[24px] text-[16px]'>
              <span className={`${moment() > moment(item?.reg_end_date) ? "text-[#B0ABAB]" : ''}`}>
                {moment() > moment(item?.reg_end_date) ? 'Applications are closed' :
                  `Applications are open from  ${moment(item?.reg_st_date).format(displayDateFormatShort)} to ${moment(item?.reg_end_date).format(displayDateFormatShort)}`
                }
              </span>
            </h4> :
            <h4 className='font-bold text-[#4C4C4D] sm:text-[28px] text-[20px]'>
              <span className=''>
                Applications are open until{moment(item?.reg_end_date).format(displayDateFormatShort)}
              </span>
            </h4>
          }
        </div>
        {item.disabled ? (
          <Image className=' h-10' width={40} height={40} src={"/Home/shareIcon.png"} alt="" />
        ) : (
          <div onClick={() => window.location.href = `/programs/${item._id}`} >
            <Image width={40} height={40} className=' h-10 object-contain' src={"/Home/shareIcon.png"} alt="" />
          </div>
        )}
      </div>
    </div>
  )
}

export default ProgramCard