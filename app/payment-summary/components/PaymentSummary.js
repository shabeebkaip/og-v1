"use client"
import Image from 'next/image'
import React, { Suspense, useEffect } from 'react'
import axios from 'axios';
import { useSearchParams } from 'next/navigation'

const PaymentSummary = () => {
  const params = useSearchParams()
  const trackid = params.get('trackid')
  const result = params.get('result')
  const refid = params.get('refid')
  const Hash = params.get('Hash')
  const [paymentData, setPaymentData] = React.useState({})

  useEffect(() => {
    let data = {
      trackid: parseInt(trackid),
      result: result,
      refid: refid,
      hash: Hash
    }

    axios.post('https://api-one-global.code-ox.com/api/check-tampered', data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }
    )
      .then(res => {
        setPaymentData(res.data.data)
      })
      .catch(err => {
        window.location.href = '/packages'
        console.log(err)
      })
  }, [trackid, result, refid, Hash])
  return (
    <div className='' >
      <div className='bg-white box-shadow rounded-3xl w-full  p-10 text-[#4C4C4D] '>
        <p className=' md:text-[40px]  font-medium text-[30px]'>Payment Summary</p>
        <div className='w-full md:grid grid-cols-3 gap-10 mt-16'>
          <div className='flex flex-col gap-2'>
              <h4 className='font-semibold'>Status :</h4>
              <p className='font-normal'>{paymentData?.status}</p>
          </div>
          <div className='flex flex-col gap-2 pt-5 md:pt-0'>
              <h4 className='font-semibold '>Reference No : </h4>
              <p className='font-normal'>{paymentData?.referenceID}</p>
          </div>
          <div className='flex flex-col gap-2 pt-5 md:pt-0'>
              <h4 className='font-semibold '>Price :</h4>
              <p className='font-normal'> KWD {paymentData?.selected?.amount}</p>
          </div>
          <div className='flex flex-col gap-2 pt-5 md:pt-0'>
              <h4 className='font-semibold'>Name :</h4>
              <p className='font-normal'>{paymentData?.username}</p>
          </div>
          <div className='flex flex-col gap-2 pt-5 md:pt-0'>
              <h4 className='font-semibold'>Email : </h4>
              <p className='font-normal break-words'>{paymentData?.email}</p>
          </div>
          <div className='flex flex-col gap-2 pt-5 md:pt-0'>
              <h4 className='font-semibold'>Selected Package : </h4>
              <p className='font-normal'>{paymentData?.selected?.package_name}</p>
          </div>
          <div className='flex flex-col gap-2 pt-5 md:pt-0'>
              <h4 className='font-semibold'>Program :</h4>
              <p className='font-normal capitalize'>{paymentData?.selected?.program_name}</p>
          </div>
          <div className=' flex gap-6 py-10 '>
              <div>
                <Image width={200} height={200} alt="" src="/og_logo.png" ></Image></div>
              <div className='flex items-center text-[16px] font-medium'>
                <p className='text-[16px]'>Managed by One Global Hub</p></div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default PaymentSummary
