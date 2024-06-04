import React from 'react'
import BlueGradient from '@/app/shared/components/BlueGradient'
import BlueGradientRight from '@/app/shared/components/BlueGradientRight'
import OrangeGradient from '@/app/shared/components/OrangeGradient'
import OrangeGradientLeft from '@/app/shared/components/OrangeGradientLeft'

const Privacy_Hero = () => {
  return (
    <div>
    <div className=" bg-[#EFEFEF] relative  lg:rounded-none rounded-3xl md:p-14 lg:m-0 sm:m-4 m-3 drop-shadow-xl lg:drop-shadow-nonemd:mt-0 mt-6 ">
      <div className="container mx-auto  ">
        <div className="flex flex-col gap-6 justify-center h-[550px] lg:text-4xl font-medium text-3xl text-center items-center ">
          <div className="flex text-[#6D6E71] px-0  lg:px-24 lg:leading-[58px]   ">
            <div className="absolute md:top-[4%] top-0  lg:w-[300px] w-[200px] lg:h-[300px] h-[200px] lg:right-[10%] right-0 hidden sm:block">
              <OrangeGradient className="" />
            </div>
            <div className="absolute lg:w-[300px] w-[200px] lg:h-[300px] h-[200px] lg:left-[15%] left-0  lg:top-[40%] bottom-0 hidden sm:block ">
              <BlueGradient />
            </div>
            <div className="absolute top-[470px] lg:w-[300px] w-[200px] lg:h-[300px] h-[200px] xl:left-[600px] lg:left-[380px] md:left-[200px] left-[280px] hidden lg:block   ">
              <BlueGradient className="" />
            </div>
            <div className="absolute  w-[200px]  h-[250px] left-0 bottom-0 sm:hidden  ">
              <BlueGradientRight className="" />
            </div>
            <div className="absolute   w-[200px]  h-[250px] right-0 top-0 sm:hidden  ">
              <OrangeGradientLeft className="" />
            </div>
            <div className="flex flex-col justify-center items-center p-6 h-full font-normal tracking-wide bg-[#fffff]  rounded-3xl text-3xl text-[#6D6E71] leading-32 ">
           
               <h1 className="text-[#FF8500] md:text-[70px] text-[50px]  font-semibold  leading-[45px] sm:leading-[60px] p-2 md:p-0">Privacy Policy</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-[#FF8500] text-4xl relative text-center md:mt-24 mt-16 md:mb-24 mb-12 font-medium">
      <div className="absolute lg:w-[300px] w-[200px] lg:h-[300px] h-[200px] right-8 top-[-30px] hidden lg:block   ">
        <OrangeGradient className="" />
      </div>
      <div className="absolute lg:w-[300px] w-[200px] lg:h-[300px] h-[200px] left-8 top-[-30px] hidden lg:block">
        <BlueGradient />
      </div>
      <div className="absolute w-[200px] h-[200px] sm:top-[570px] top-[400px] right-0 lg:hidden">
        <OrangeGradientLeft />
      </div>
    </div>
  </div>
  )
}

export default Privacy_Hero