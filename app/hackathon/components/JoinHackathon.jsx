"use client"
import { useEffect, useState } from 'react'
import MobHeroSlider from '@/app/shared/components/MobHeroSlider'
import Image from 'next/image'
import FormSubmission from '@/app/shared/components/FormSubmission'
import { SnackbarProvider } from 'notistack'
import { authenticateUser, getUserApi } from '@/app/shared/api'
import { globalGetService } from '@/app/utils/apiServices'


const JoinHackathon = ({ hackathonData, pageContent }) => {
  const [popup, setPopup] = useState(false);
  const [userData, setUserData] = useState(null);
  const [orderHistory, setOrderHistory] = useState(null);
  const email = userData?.data?.email
  const token = localStorage.getItem('token');
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
  const enrollCheck = orderHistory?.find((order) => order === hackathonData?._id)



  const hideHandler = () => {
    setPopup(false)
  }
  const array = [
    pageContent?.image,
    pageContent?.image_1,
    pageContent?.image_2
  ]

  const Datas = {
    program_name: hackathonData.name,
    program_id: hackathonData._id,
  };
  const authenticateUserFn = () => {
    authenticateUser();
  };
  return (
    <SnackbarProvider>
      <div className='md:px-3 px-6'>
        <div className='flex items-center justify-center my-20 '>

          {
            token ? enrollCheck ? null :
              hackathonData?.btnLink && hackathonData?.btnLink.trim() !== "" ? (
                <a href={hackathonData?.btnLink} target='_blank'>
                  <button className='border rounded-[40px] border-[#FF8500] text-[20px] text-[#1C2126] px-6 py-2'>Join hackathon</button>
                </a>
              ) : (
                <button onClick={() => {
                  setPopup(true);
                }} className='border rounded-[40px] border-[#FF8500] text-[20px] text-[#1C2126] px-6 py-2'>
                  Join hackathon <span className='pl-4'>&rarr;</span>
                </button>
              ) :
              <button
                onClick={authenticateUserFn}
                className='border rounded-[40px] border-[#FF8500] text-[20px] text-[#1C2126] px-6 py-2'>
                Join hackathon <span className='pl-4'>&rarr;</span>
              </button>
          }

        </div>

        <div className='flex flex-col gap-8 pt-20 xl:gap-16 lg:flex-row'>
          <div className='hidden gap-5 lg:flex lg:w-1/2 '>

            <div className='flex flex-col items-center justify-center gap-[20px] '>
              <Image src={pageContent?.image} className='rounded-[23px] w-full h-[50%] object-cover' width={1000} height={1000} alt=''></Image>
              <Image src={pageContent?.image_1} className='rounded-[23px] w-full h-[50%] object-cover' width={1000} height={1000} alt=''></Image>
            </div>
            <div className='flex items-center justify-center'>
              <Image src={pageContent?.image_2} className='rounded-[23px]  lg:h-full w-full  h-[50%] object-cover ' width={1000} height={1000} alt=''></Image>
            </div>


          </div>
          <MobHeroSlider item={array} />

          <div className='flex flex-col items-center justify-center lg:w-1/2'>
            <h1 className='uppercase text-[#FF8500] 2xl:text-[40px]  xl:text-[30px] lg:text-[34px] text-[30px]   font-normal '>{pageContent?.text}</h1>
            <p className='2xl:text-[26px] xl:text-[18px] sm:text-[24px] text-[16px] text-[#4C4C4D] font-light pt-4'>{pageContent?.text_1}</p>
            <p className='2xl:text-[26px] xl:text-[18px] sm:text-[24px] text-[16px] text-[#4C4C4D] font-light pt-4'>{pageContent?.text_2}</p>
          </div>
        </div>
        {popup && <FormSubmission name={Datas} orderHideHandler={hideHandler} id={hackathonData?.form_id} />}

      </div>
    </SnackbarProvider>

  )
}

export default JoinHackathon
