import OrangeGradient from '../../../shared/components/OrangeGradient'
import BlueGradient from '../../../shared/components/BlueGradient'
import Image from 'next/image'

const Requirements = ({requirements}) => {
  return (
    <div className='relative md:px-3 px-6'>
    <div className='flex justify-center my-32 '>
      <p className='uppercase xl:text-[50px] text-[40px] font-medium text-[#FF8500] border-2 rounded-[45px] border-[#4C4C4D] px-4'>REQUIREMENTS</p>
    </div>
    <div className='flex flex-col gap-5 box-shadow rounded-[23px]'>
      <div className='grid-cols-8 md:grid '>
        <div className='col-span-2'>
          <Image src={requirements[0]?.image_1} className='rounded-[23px] h-full w-full object-cover' alt="" width={200} height={200} />
        </div>
        <div className='flex flex-col justify-center col-span-4 py-6 md:px-14 px-7 md:py-0'>
          <h3 className='text-[#FF8500] xl:text-[40px] lg:text-[40px] text-[30px]  font-normal'>{requirements[0]?.text}</h3>
          <ul className='xl:text-[24px] lg:text-[20px] md:text-[15px] text-[24px] text-[#000000] font-light list-disc  flex flex-col gap-3'>
            {
              requirements[0]?.description?.map((item, index) => (
                <li key={index}>{item.text} </li>
              ))
            }
          </ul>

        </div>
        <div className='col-span-2'>
          <Image src={requirements[0]?.image_2} className='rounded-[23px] h-full w-full object-cover' alt="" width={200} height={200}  />
        </div>
      </div>
      <div className='grid-cols-10 md:grid '>
        <div className='flex col-span-5 gap-4'>

          <div className='col-span-2'>
            <Image src={requirements[1]?.image_1} className='rounded-[23px] h-full w-full md:block hidden object-cover' alt="" width={200} height={200}  />
          </div>
          <div className='col-span-3'>
            <Image src={requirements[1]?.image_2} className='rounded-[23px] h-full w-full md:block hidden object-cover' alt="" width={200} height={200}  />

          </div>
        </div>
        <div className='col-span-5'>
          <div className='flex flex-col justify-center col-span-5 py-6 md:py-0 md:px-14 px-7 '>
            <h3 className='text-[#FF8500] xl:text-[40px] lg:text-[40px] md:text-[30px] text-[30px] font-normal'>{requirements[1]?.text}</h3>
            <ul className='xl:text-[24px] lg:text-[20px] md:text-[15px] text-[24px] text-[#000000]  list-disc flex flex-col gap-3 pb-10 font-light '>
              {
                requirements[1]?.description?.map((item, index) => (
                  <li key={index}>{item.text} </li>
                ))}
            </ul>
          </div>
          <Image src={requirements[1]?.image_2} className='rounded-[23px] h-full w-full block md:hidden ' alt="" width={200} height={200}  />
        </div>
      </div>
    </div>
    <div className="absolute top-[-16%] right-0 w-[20%] h-[36%] md:block hidden"><OrangeGradient /></div>
    <div className="absolute top-[-16%] left-0 w-[20%] h-[36%] md:block hidden"><BlueGradient /></div>



  </div>
  )
}

export default Requirements
