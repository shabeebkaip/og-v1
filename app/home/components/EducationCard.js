import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const EducationCard = ({courses}) => {
  return (
    <div className='bg-white rounded-[23px] box-shadow w-full h-full flex flex-col justify-between hover:scale-105 duration-300 '>
      <div className={`w-full   p-4 flex justify-center items-center rounded-t-[23px] z-10 h-[130px]`} style={{ backgroundColor: '#FF8500' }}>
        <h3 className={` sm:text-[40px] text-2xl font-medium text-center w-[70%] text-white  `} >Education Courses </h3>
      </div>
      <ul className='flex flex-col items-center  justify-between w-full px-2 p-3'>
        {
          courses?.slice(0, 5).map((item, index) => (
            <li key={index} className='flex items-center justify-between w-full hover:bg-stone-50 p-2 rounded-lg cursor-pointer' onClick={() => window.location.href = `/educations/${item?._id}`} >
              <div className=' sm:text-[24px] text-[16px] font-normal text-gray-500  cursor-pointer hover:text-blue-600 flex gap-2 items-center' >{item.heading}</div>
              <Image className='w-8 h-8' width={40} height={40} src={"/Home/shareIcon.png"} alt="" />
            </li>

          ))
        }
      </ul>
      <div className=' bg-gray-200 w-full text-center rounded-lg '>
        <div className='font-bold text-[#4C4C4D] sm:text-[28px] text-[20px] flex justify-between p-4 cursor-pointer' onClick={() => window.location.href = "/educations"}>
          <h4 className=''>
            View All Courses
          </h4>
          <div  className=' sm:text-[24px] text-[16px] font-normal text-gray-500 text-center cursor-pointer hover:text-blue-600 flex gap-2 items-center' >
            <Image className='w-8 h-8' width={40} height={40} src={"/Home/shareIcon.png"} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationCard