import OrangeGradient from '@/app/shared/components/OrangeGradient'
import BlueGradient from '@/app/shared/components/BlueGradient'
import Image from 'next/image'

const Requirements = ({ requirements }) => {
  return (
    <div className='relative md:px-3 px-6'>
      <div className='flex justify-center my-32 '>
        <p className='uppercase xl:text-[50px] lg:text-[40px] text-[30px] font-medium text-[#FF8500] border-2 rounded-[45px] border-[#4C4C4D] px-4'>REQUIREMENTS</p>
      </div>
      <div className='flex flex-col gap-5 box-shadow rounded-[23px]'>
        {
          requirements?.slice(0, 1).map((item, index) => (
            <div className='grid-cols-8 md:grid ' key={index}>
              <div className='col-span-2'>
                <Image src={item?.image_1} className='rounded-[23px] h-full w-full object-cover' alt="" width={200} height={200} />
              </div>
              <div className='flex flex-col justify-center col-span-4 py-6 md:px-14 px-7 md:py-0'>
                <h3 className='text-[#FF8500] xl:text-[40px] lg:text-[40px] text-[30px]  font-normal'>{item?.text}</h3>
                <ul className='xl:text-[24px] lg:text-[20px]  sm:text-[20px] text-[16px] text-[#000000] font-light list-disc  flex flex-col gap-3'>
                  {
                    item?.description?.map((text, ind) => (
                      <li key={ind}>{text.text} </li>
                    ))
                  }
                </ul>
              </div>
              <div className='col-span-2'>
                <Image src={item?.image_2} className='rounded-[23px] h-full w-full object-cover' alt="" width={200} height={200} />
              </div>
            </div>
          ))
        }
        {
          requirements?.slice(1, 2).map((item, index) => (
            <div className='grid-cols-10 md:grid ' key={index}>
              <div className='flex col-span-5 gap-4'>

                <div className='col-span-2'>
                  <Image src={item?.image_1} className='rounded-[23px] h-full w-full md:block hidden object-cover' alt="" width={200} height={200} />
                </div>
                <div className='col-span-3'>
                  <Image src={item?.image_2} className='rounded-[23px] h-full w-full md:block hidden object-cover' alt="" width={200} height={200} />

                </div>
              </div>
              <div className='col-span-5'>
                <div className='flex flex-col justify-center col-span-5 py-6 md:py-0 md:px-14 px-7 '>
                  <h3 className='text-[#FF8500] xl:text-[40px] lg:text-[40px]  text-[30px] font-normal'>{item?.text}</h3>
                  <ul className='xl:text-[24px] lg:text-[20px] sm:text-[20px] text-[16px] text-[#000000]  list-disc flex flex-col gap-3 pb-10 font-light '>
                    {
                      item?.description?.map((text, ind) => (
                        <li key={ind}>{text?.text} </li>
                      ))}
                  </ul>
                </div>
                <Image src={item?.image_2} className='rounded-[23px] h-full w-full block md:hidden ' alt="" width={200} height={200} />
              </div>
            </div>
          ))
        }

      </div>
      <div className="absolute top-[-16%] right-0 w-[20%] h-[36%] md:block hidden"><OrangeGradient /></div>
      <div className="absolute top-[-16%] left-0 w-[20%] h-[36%] md:block hidden"><BlueGradient /></div>



    </div>
  )
}

export default Requirements
