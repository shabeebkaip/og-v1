
import BlueGradient from "@/app/shared/components/BlueGradient";
import OrangeGradient from "@/app/shared/components/OrangeGradient";
// import MobdataSlider from "@/app/shared/components/MobdataSlider";

import { fadeIn } from "../../constant/motion";
import Image from "next/image";
import axios from "axios";
const dataCarrier = async ({ data }) => {

  return (
    <div className='flex w-full gap-4 font-Sans '>
      <div className='flex lg:w-[55%] w-full flex-col bg-white box-shadow rounded-[23px] justify-center  gap-10 relative md:mt-0 mt-3 ' >
        {/* <MobdataSlider item={array} /> */}
        <div className='lg:w-[35%] h-[30%] absolute top-0'>
          <OrangeGradient />
        </div>
        <div className='w-full h-[30%] absolute bottom-[-16%] z-[-1] md:hidden block'>
          <OrangeGradient />
        </div>
        <div className='lg:w-[35%] h-[30%] absolute right-0  bottom-5'>
          <BlueGradient />
        </div>
        <div className='flex items-center justify-center w-full '>

          <div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            className="w-[70%] pb-[15%] md:mt-0 mt-4">
            <h3 className="flex flex-col items-center xl:text-[70px] lg:text-[50px] text-center md:text-[37px] text-[24px] text-[#656565] font-normal  ">
              {data?.text?.split(data?.borderText)
                .map((text, index) => (
                  <div key={index}>
                    {index > 0 && (
                      <span className=" border-2 border-[#656565] rounded-[53px] px-5">
                        {data?.borderText}
                      </span>
                    )}
                    {text}
                  </div>
                ))}
            </h3>
          </div>

        </div>


      </div>
      <div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        className='w-[45%] lg:flex flex-col gap-4 hidden '>
        <Image width={1000} height={200} src={data?.image} alt='Image' className='w-full md:h-[60%] h:full rounded-[23px] ' />

        <Image width={1000} height={200} src={data?.image_1} alt='Image' className='w-full md:h-[40%] h-full rounded-[23px]' />

      </div>
    </div>

  );
};

export default dataCarrier;
