"use client"
import OrangeGradient from '@/app/shared/components/OrangeGradient';
import BlueGradient from '@/app/shared/components/BlueGradient';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/constant/motion'
import Image from 'next/image';

const ProgramHero = ({ data }) => {
  return (
    <>
      <div className='relative  flex flex-col w-full gap-4 font-Sans lg:flex-row lg:justify-between lg:gap-2' >
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          className='flex lg:basis-1/2'>


          <div className='p-4 rounded-[23px] flex justify-center items-center ' style={{ boxShadow: '0px 4px 20px 0px #00000026' }}>
            <p className='text-[#656565] xl:text-[70px] xl:px-16 px-8 font-medium xl:leading-[84px] text-[50px]'>{data?.text}</p>
          </div>
        </motion.div>
        
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          className='flex basis-1/2 '>

          <Image  src={data?.image} alt='Image' className='w-full h-auto rounded-[23px]' width={1000} height={500} />
        </motion.div>
        <div className='absolute top-0 w-[17%] h-[40%] left-[30%]  '><BlueGradient /></div>
        <div className='absolute bottom-0 w-72 h-72'><OrangeGradient /></div>

      </div>
    </>
  );
}

export default ProgramHero;
