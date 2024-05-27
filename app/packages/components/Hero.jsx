
import BlueGradient from "@/app/shared/components/BlueGradient";
import OrangeGradient from "@/app/shared/components/OrangeGradient";
import Image from "next/image";
import axios from "axios";
import { baseURL } from "@/app/constant";

const Hero = ({ hero }) => {

    return (
        <div className='relative flex w-full gap-4 p-3 font-Sans'>

            <div className='flex lg:w-[50%] w-full flex-col  bg-white box-shadow rounded-[23px] justify-center  gap-10 relative  md:py-5 z-10 ' >

                <Image src={hero?.image} alt='Image' className='w-full md:h-[60%] h:full rounded-[23px] md:hidden block ' width={200} height={200} />

                <div className='lg:w-[300px] lg:h-[280px] absolute top-0 md:block hidden w-[200px] h-[150px]'>
                    <OrangeGradient />
                </div>
                <div className='lg:w-[300px] lg:h-[280px] absolute right-0  bottom-5 md:block hidden w-[200px] h-[150px]'>
                    <BlueGradient />
                </div>

                <div className='flex flex-col items-center justify-center w-full'>
                    <div className="xl:w-[80%] w-[85%] py-6 md:py-0  ">
                        <h3 className="xl:text-[70px] lg:text-[50px] sm:text-[40px] text-[30px] text-[#656565] uppercase font-normal xl:leading-[70px] ">{hero?.text}</h3>
                        <p className="xl:text-[26px] lg:text-[20px] text-[16px] font-light lg:mt-10  xl:leading-[30px] mt-5">{hero?.text_1}</p>
                    </div>
                </div>


            </div>
            <div className='lg:w-[345px] md:w-[200px] lg:h-[358px] h-[200px] absolute  md:right-0 md:bottom-[-29%]  bottom-[-11%] w-full'>
                <OrangeGradient />
            </div>

            <div className='w-[50%] md:flex gap-2 lg:gap-4 hidden '>
                <div className="flex flex-col gap-2 lg:gap-4 w-2/3">
                    <Image src={hero?.image} alt='Image' className='w-full md:h-[60%] h:full rounded-[23px] object-cover ' width={200} height={200} />

                    <Image src={hero?.image_1} alt='Image' className='w-full md:h-[40%] h-full rounded-[23px] object-cover' width={200} height={200} />
                </div>
                <div className="items-center justify-center hidden lg:flex w-1/3 ">
                    <Image src={hero?.image_2} alt="" className="rounded-[23px] h-full w-full object-cover" width={200} height={200} />
                </div>


            </div>


        </div>


    );
}

export default Hero