"use client"
import OrangeGradient from '@/app/shared/components/OrangeGradient';
import BlueGradient from '@/app/shared/components/BlueGradient';
import { getGlobalCookie } from '@/app/utils';
import MotionDiv from '@/app/shared/components/MotionDiv';
import Image from 'next/image';
import { useEffect, useState } from 'react';


const ApplicationProcess = ({ programDetail }) => {
  const language = getGlobalCookie('language')
  const [chunkedCourses, setChunkedCourses] = useState([]);


  useEffect(() => {
    const chunkArray = (array, chunkSize) => {
      const chunks = [];
      for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
      }
      return chunks;
    };

    const chunks = chunkArray(programDetail?.steps, 2);
    setChunkedCourses(chunks);
  }, [programDetail]);

  console.log(chunkedCourses);

  return (
    <div className='container relative px-6 py-32 mx-auto md:px-0 '>
      <div className='md:w-[22%] absolute h-[35%] top-[20%] left-[10%]'><BlueGradient /></div>
      <div className='flex flex-col items-center justify-center gap-16 xl:gap-28 font-Sans'>
        <h3 className='text-[#4C4C4D] xl:text-[50px] font-medium md:text-[40px] text-[34px] text-center'>
          <span className='text-[#FF8500] border-2 border-solid rounded-[45px] px-4' style={{ borderColor: '#4C4C4D' }}>APPLICATION</span> PROCESS
        </h3>
        <MotionDiv
          styles='xl:text-[50px] text-center md:leading-[75px] leading-[44px] text-[#4C4C4D] font-medium md:text-[40px] text-[34px]'>
          <p>To Apply For <p className='text-[#FF8500] px-5 font-bold'>{"THE OG HUB'S"} {programDetail?.programName},</p></p>
          <p><span className='text-[#FF8500] font-bold'></span> please complete</p>
          <p>the following <span className='border-2 border-solid rounded-[45px] px-4' style={{ borderColor: '#4C4C4D' }}>steps:</span></p>

          <div className='md:w-[20%] w-[69%] absolute lg:h-[24%] h-[16%] md:right-[5%] md:top-[10%] top-[20%]  '><OrangeGradient /></div>
          <div className=' w-[100%] h-[50%] absolute  bottom-0 left-0 md:hidden block'><OrangeGradient /></div>
        </MotionDiv>
      </div>

      <MotionDiv
        styles='flex flex-col gap-8  mt-16'>
        {chunkedCourses.map((item, index) => (
          <div className={`grid gap-8 ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`} key={index}>
            {index % 2 === 0 ? (
              <>
                {item[0] ? (
                  <div className="rounded-[23px] box-shadow w-full backdrop-blur-sm flex-col flex justify-center items-center" style={{ backgroundImage: `url(${item[0]?.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='w-[85%] text-[#4C4C4D] h-full lg:py-14 flex justify-center flex-col lg:gap-8 gap-4 py-10'>
                      <h3 className='lg:text-[44px] text-[36px] font-semibold lg:leading-[56px]'>{(index*2) + 1 }.</h3>
                      <p className='font-normal lg:text-[26px] text-[20px] lg:leading-[35px]'>{language === "ar" ? item[0]?.ar_text : item[0]?.text}</p>
                    </div>
                  </div>
                ) : null}
                {item[1] ? (
                  <div className="rounded-[23px] box-shadow w-full backdrop-blur-sm flex-col flex justify-center items-center" style={{ backgroundImage: `url(${item[1]?.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='w-[85%] text-[#4C4C4D] h-full lg:py-14 flex justify-center flex-col lg:gap-8 gap-4 py-10'>
                      <h3 className='lg:text-[44px] text-[36px] font-semibold lg:leading-[56px]'>{(index*2)+ 2 }.</h3>
                      <p className='font-normal lg:text-[26px] text-[20px] lg:leading-[35px]'>{language === "ar" ? item[1]?.ar_text : item[1]?.text}</p>
                    </div>
                  </div>
                ) : null}
              </>
            ) : (
              <>
                <div>
                  <Image src="/orange.png" className='w-full rounded-2xl' alt='' width={300} height={100} />
                </div>
                {item[0] ? (
                  <div className="rounded-[23px] box-shadow w-full backdrop-blur-sm flex-col flex justify-center items-center" style={{ backgroundImage: `url(${item[0]?.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='w-[85%] text-[#4C4C4D] h-full lg:py-14 flex justify-center flex-col lg:gap-8 gap-4 py-10'>
                      <h3 className='lg:text-[44px] text-[36px] font-semibold lg:leading-[56px]'>{(index*2) + 1 }</h3>
                      <p className='font-normal lg:text-[26px] text-[20px] lg:leading-[35px]'>{language === "ar" ? item[0]?.ar_text : item[0]?.text}</p>
                    </div>
                  </div>
                ) : null}
                {item[1] ? (
                  <div className="rounded-[23px] box-shadow w-full backdrop-blur-sm flex-col flex justify-center items-center" style={{ backgroundImage: `url(${item[1]?.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='w-[85%] text-[#4C4C4D] h-full lg:py-14 flex justify-center flex-col lg:gap-8 gap-4 py-10'>
                      <h3 className='lg:text-[44px] text-[36px] font-semibold lg:leading-[56px]'>{(index*2) + 2}.</h3>
                      <p className='font-normal lg:text-[26px] text-[20px] lg:leading-[35px]'>{language === "ar" ? item[1]?.ar_text : item[1]?.text}</p>
                    </div>
                  </div>
                ) : null}
              </>
            )}
          </div>
        ))}
      </MotionDiv>
    </div>
  );
};

export default ApplicationProcess;
