import Image from 'next/image';
const UpgradePlan = () => {
  return (
    <div className=" ">
      <div className="  lg:grid lg:grid-cols-6 flex flex-col lg:h-[280px] lg:gap-0 gap-6 p-6 justify-center items-center  rounded-3xl   w-full" style={{ backgroundImage: `url(${'/profile/profile_bg.png'})` }}>
        <div className=" flex justify-center items-center col-span-1"><Image src='/profile/profile_clock.png' width={0} height={0} layout="responsive" alt="" /></div>
        <div className="col-span-3">
            <p className="lg:text-4xl sm:text-3xl text-2xl font-bold  lg:text-start text-center  md:px-7">Upgrade your plan now!</p>
            <p className="lg:text-3xl sm:text-2xl text-xl font-semibold lg:text-start text-center md:px-7 xl:w-[80%]">Explore enhanced features by upgrading from Basic to unlock more possibilities.</p>
        </div>
        <div className=" w-full col-span-2 mx-auto flex justify-center"> <button className="w-[60%] font-medium sm:text-3xl text-xl  h-[55px] bg-white rounded-[45px] hover:border-black text-gray-600 col-span-2 ">Upgrade</button></div>
      </div>
    </div>
  )
}

export default UpgradePlan
