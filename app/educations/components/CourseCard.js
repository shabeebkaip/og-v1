"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getUserApi } from '@/app/shared/api'
import { globalGetService } from '@/app/utils/apiServices'

const CourseCard = ({ setPopup, setFormId, setCourseName, item, authenticateUserFn, id }) => {
  const token = localStorage.getItem('token');
  const [userData, setUserData] = useState(null);
  const [orderHistory, setOrderHistory] = useState(null);
  const email = userData?.data?.email
  useEffect(() => {
    if (token) {
      getUserApi(token).then(res => setUserData(res.data.user));
    }
  }, [token])
  useEffect(() => {
    if (email) {
      globalGetService('get-payment-history', { email: email, status: true, })
        .then(response => {
          setOrderHistory(response.data?.map(item => item?.selected?.program_id));
        });
    }
  }, [email]);
  const enrollCheck = orderHistory?.find((order) => order === id)
  return (
    <div className="p-2 flex flex-col justify-between hover:shadow-sm hover:rounded-lg">
      <div className="mt-6">
        <Image
          src={item?.image}
          className="w-full h-[200px] 2xl:h-[300px] rounded-[23px] object-cover"
          alt=""
          width={100}
          height={100}
        />
        <h3
          className="text-[16px] 2xl:text-[16px] md:text-[12px] lg:text-[14px] leading-[18.77px] 2xl:leading-[18.77px] font-normal mt-6"
          style={{ color: item?.mode === 'Online' ? '#92D1FB' : item?.mode === 'Hybrid' ? '#FF8500' : 'none' }}
        >
          {item?.mode}
        </h3>
        <h2 className="uppercase font-medium text-[30px] lg:text-[25px] 2xl:text-[30px] leading-[35.19px] text-[#4C4C4D] md:text-[20px] md:leading-tight">
          {item?.heading}
        </h2>
        <p className="text-[16px] font-light leading-[25.81px] lg:text-[19px] lg:leading-tight 2xl:text-[22px] md:text-[15px] md:leading-tight">
          {item?.description}
        </p>
      </div>
      <div className='mt-4'>
        {
          token ? enrollCheck ? null :
            item?.btnLink && item?.btnLink.trim() !== "" ? (
              <a href={item?.btnLink} target='_blank' rel="noopener noreferrer">
                <button
                  className="mt-6 rounded-full w-[165px] h-[39px] md:w-[100px] md:text-[10px] md:h-[28px] lg:w-[165px] lg:h-[39px] lg:text-[12px]"
                  style={{
                    backgroundColor: item?.mode === 'Online' ? '#92D1FB' : item?.mode === 'Hybrid' ? '#FF8500' : item?.mode === 'Offline' ? 'white' : 'none',
                    border: item?.mode === 'Offline' ? '1px solid orange' : 'none',
                    color: item?.mode === 'Offline' ? '#4C4C4D' : 'white'
                  }}
                >
                  Apply Now<span className="ml-3">&rarr;</span>
                </button>
              </a>
            ) : (
              <button
                onClick={() => {
                  setPopup(true);
                  setFormId(item?.form_id);
                  setCourseName({ program_name: item?.heading, program_id: item?._id });
                }}
                className="mt-6 rounded-full w-[165px] h-[39px] md:w-[100px] md:text-[10px] md:h-[28px] lg:w-[165px] lg:h-[39px] lg:text-[12px]"
                style={{
                  backgroundColor: item?.mode === 'Online' ? '#92D1FB' : item?.mode === 'Hybrid' ? '#FF8500' : item?.mode === 'Offline' ? 'white' : 'none',
                  border: item?.mode === 'Offline' ? '1px solid orange' : 'none',
                  color: item?.mode === 'Offline' ? '#4C4C4D' : 'white'
                }}
              >
                Apply Now<span className="ml-3">&rarr;</span>
              </button>
            ) :
            <button
              onClick={authenticateUserFn}
              className="mt-6 rounded-full w-[165px] h-[39px] md:w-[100px] md:text-[10px] md:h-[28px] lg:w-[165px] lg:h-[39px] lg:text-[12px]"
              style={{
                backgroundColor: item?.mode === 'Online' ? '#92D1FB' : item?.mode === 'Hybrid' ? '#FF8500' : item?.mode === 'Offline' ? 'white' : 'none',
                border: item?.mode === 'Offline' ? '1px solid orange' : 'none',
                color: item?.mode === 'Offline' ? '#4C4C4D' : 'white'
              }}
            >
              Apply Now<span className="ml-3">&rarr;</span>
            </button>
        }
        <Link href={`/educations/${item._id}`}>
          <button className="px-2 text-orange-500 underline">View</button>
        </Link>
      </div>
    </div>
  )
}

export default CourseCard