import BlueGradient from '@/app/shared/components/BlueGradient';
import OrangeGradient from '@/app/shared/components/OrangeGradient';
import Image from 'next/image';


const Hero =  ({hero}) => {

  return (
    <div className='relative flex flex-col w-full my-10 lg:flex-row md:gap-4 font-Sans mb-28 md:p-3 font-sans '>
      <div className='lg:w-[50%] h-full '>
        <Image src={hero?.image} alt='Image' className='w-full h-full rounded-[23px] hidden md:block object-cover' width={200} height={200} />
      </div>
      <div className='relative z-40  flex lg:w-[50%] '>
        <div className='flex flex-col w-full rounded-[23px] justify-center md:items-center xl:py-8   box-shadow  bg-white' >
          <Image src={hero?.image} alt='Image' className='w-full h-full rounded-[23px] md:hidden block ' width={200} height={200} />

          <div className='flex flex-col   xl:w-[80%] xl:gap-10 w-[90%] gap-5 md:p-4 p-4 py-3' >
            <h2 className='xl:text-[50px] lg:text-[38px] text-[30px]  text-[#656565] font-medium xl:leading-[58px] uppercase '>{hero?.text}</h2>
            <p className='text-[#4C4C4D] xl:text-[26px] lg:text-[20px]  text-[23px] leading-[30px] '>{hero?.text_1}</p></div>
        </div>
      </div>
      <div className='absolute bottom-[-16%] w-[100%] h-[50%]  md:hidden block z-[-1] '><OrangeGradient /></div>
      <div className='absolute right-[44%] top-[56%] lg:w-[200px] h-[200px] z-100'><OrangeGradient /></div>


      <div className='absolute right-0 top-[-14%] lg:w-[250px] h-[350px] '><BlueGradient /></div>


    </div>
  )
}

export default Hero
