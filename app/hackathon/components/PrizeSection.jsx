"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const Prize = ({ hackathonData }) => {
  const [prizes, setPrizes] = useState()

  useEffect(() => {
    const chunkArray = (array, chunkSize) => {
      const chunks = [];
      for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
      }
      return chunks;
    };

    const chunks = chunkArray(hackathonData?.prizes, 3);
    setPrizes(chunks);
  }, [hackathonData]);

  console.log(prizes);
  return (
    <div className='font-Sans px-3 '>
      <div className='text-[50px] font-medium flex flex-col justify-center items-center gap-4'>
        <h3 className='text-[#FF8500] border-2  rounded-[45px] border-[#4C4C4D] px-4'>PRIZES</h3>
        <h3 className='uppercase text-[#4C4C4D] '>{hackathonData?.prize} in prizes </h3>
      </div>
      <div className='flex flex-col gap-5 pt-[10%]'>
        {
          prizes?.map((item, index) => (
            <div className=" grid grid-cols-11 gap-5" key={index}>
              {
                index % 2 === 0 ? (
                  <>
                    {
                      item[0] ? (
                        <div key={index} className={`col-span-3 p-6 pl-10 box-shadow`} style={{ backgroundImage: `url(${item[0]?.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '28px' }}>
                          <div className='xl:w-[80%] w-[60%]'>
                            <ul className='list-disc xl:text-[26px] text-[18px]'>
                              {
                                item[0]?.List?.map((prize, key) => (
                                  <li key={key}><span className="font-bold">{item.category} {prize.heading}</span>
                                    {
                                      prize.prices?.map((reward, ind) => (
                                        <span key={ind} className='text-[#4C4C4D]'>
                                          <div>
                                            {reward}
                                          </div>
                                        </span>
                                      ))
                                    }
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>
                      )
                        :
                        <div className=' col-span-3 h-full'>
                          <Image src="/orange.png" className='w-full rounded-2xl h-full' alt='' width={300} height={100} />
                        </div>
                    }
                    {
                      item[1] ? (
                        <div key={index} className={`col-span-4 p-6 pl-10 box-shadow`} style={{ backgroundImage: `url(${item[1]?.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '28px' }}>
                          <div className='xl:w-[80%] w-[60%]'>
                            <ul className='list-disc xl:text-[26px] text-[18px]'>
                              {
                                item[1]?.List?.map((prize, key) => (
                                  <li key={key}><span className="font-bold">{item.category} {prize.heading}</span>
                                    {
                                      prize.prices?.map((reward, ind) => (
                                        <span key={ind} className='text-[#4C4C4D]'>
                                          <div>
                                            {reward}
                                          </div>
                                        </span>
                                      ))
                                    }
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>
                      )
                        :
                        <div className=' col-span-4 h-full'>
                          <Image src="/orange.png" className='w-full rounded-2xl h-full' alt='' width={300} height={100} />
                        </div>
                    }
                    {
                      item[2] ? (
                        <div key={index} className={`col-span-4 p-6 pl-10 box-shadow`} style={{ backgroundImage: `url(${item[2]?.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '28px' }}>
                          <div className='xl:w-[80%] w-[60%]'>
                            <ul className='list-disc xl:text-[26px] text-[18px]'>
                              {
                                item[2]?.List?.map((prize, key) => (
                                  <li key={key}><span className="font-bold">{item.category} {prize.heading}</span>
                                    {
                                      prize.prices?.map((reward, ind) => (
                                        <span key={ind} className='text-[#4C4C4D]'>
                                          <div>
                                            {reward}
                                          </div>
                                        </span>
                                      ))
                                    }
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>
                      )
                        :
                        <div className=' col-span-4 h-full'>
                          <Image src="/orange.png" className='w-full rounded-2xl h-full' alt='' width={300} height={100} />
                        </div>
                    }
                  </>
                ) :
                  <>
                    {
                      item[0] ? (
                        <div key={index} className={`col-span-4 p-6 pl-10 box-shadow`} style={{ backgroundImage: `url(${item[0]?.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '28px' }}>
                          <div className='xl:w-[80%] w-[60%]'>
                            <ul className='list-disc xl:text-[26px] text-[18px]'>
                              {
                                item[0]?.List?.map((prize, key) => (
                                  <li key={key}><span className="font-bold">{item.category} {prize.heading}</span>
                                    {
                                      prize.prices?.map((reward, ind) => (
                                        <span key={ind} className='text-[#4C4C4D]'>
                                          <div>
                                            {reward}
                                          </div>
                                        </span>
                                      ))
                                    }
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>
                      )
                        : <div className=' col-span-4 h-full'>
                          <Image src="/orange.png" className='w-full rounded-2xl h-full' alt='' width={300} height={100} />
                        </div>}
                    {
                      item[1] ? (
                        <div key={index} className={`col-span-4 p-6 pl-10 box-shadow`} style={{ backgroundImage: `url(${item[1]?.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '28px' }}>
                          <div className='xl:w-[80%] w-[60%]'>
                            <ul className='list-disc xl:text-[26px] text-[18px]'>
                              {
                                item[1]?.List?.map((prize, key) => (
                                  <li key={key}><span className="font-bold">{item.category} {prize.heading}</span>
                                    {
                                      prize.prices?.map((reward, ind) => (
                                        <span key={ind} className='text-[#4C4C4D]'>
                                          <div>
                                            {reward}
                                          </div>
                                        </span>
                                      ))
                                    }
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>
                      )
                        : <div className=' col-span-4 h-full'>
                          <Image src="/orange.png" className='w-full rounded-2xl h-full' alt='' width={300} height={100} />
                        </div>}
                    {
                      item[2] ? (
                        <div key={index} className={`col-span-3 p-6 pl-10 box-shadow`} style={{ backgroundImage: `url(${item[2]?.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '28px' }}>
                          <div className='xl:w-[80%] w-[60%]'>
                            <ul className='list-disc xl:text-[26px] text-[18px]'>
                              {
                                item[2]?.List?.map((prize, key) => (
                                  <li key={key}><span className="font-bold">{item.category} {prize.heading}</span>
                                    {
                                      prize.prices?.map((reward, ind) => (
                                        <span key={ind} className='text-[#4C4C4D]'>
                                          <div>
                                            {reward}
                                          </div>
                                        </span>
                                      ))
                                    }
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>
                      )
                        : <div className=' col-span-3 h-full'>
                          <Image src="/orange.png" className='w-full rounded-2xl h-full' alt='' width={300} height={100} />
                        </div>}
                  </>
              }

            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Prize
