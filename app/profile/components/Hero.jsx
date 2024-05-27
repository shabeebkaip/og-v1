import { CgProfile } from "react-icons/cg";
import Image from "next/image";


const Hero = ({user}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1   relative">
        <div className=" flex flex-col lg:gap7 px-2 pb-8 gap-10 lg:m-10 text-[#4C4C4D] font-sans sm:text-[26px] justify-center text-xl ">

          <div className=" font-medium text-5xl font-"> <p>Hi {user?.given_name},</p> </div>
          <div className="">
            <p>Welcome to Og Hub dashboard! </p>
          </div>
          <div>
            <p>
              {" We're thrilled to have you here. Explore your personalized space to view your order history, manage your plans, and discover more about our offerings. If you have any questions or need assistance, feel free to reach out."}
              {" "}
            </p>
          </div>
          <div>
            <p>Happy navigating!</p>
          </div>
        </div>
        <div className="">
          <div className="mb-16 mt-3 flex flex-col gap-8 lg:p-10 md:p-7 py-6 px-4 text-[#4C4C4D] box-shadow relative  bg-white rounded-3xl">

            <div className="flex flex-row gap-6 ">

              <p className="font-medium text-2xl"> Personal Details</p>{" "}
              <CgProfile className="w-[32px] text-gray-400 h-[32px] " />{" "}
            </div>
            <div className="grid md:grid-cols-3 grid-cols-5 gap-2">
              <div className="sm:text-base text-xs font-semibold grid gap-2 md:col-span-1 col-span-2">
                <p>First name :</p>
                <p>User Name :</p>
                <p>Email :</p>
                <p>Family Name :</p>
                
              </div>
              <div className="md:col-span-2 col-span-3  font-normal sm:text-base text-xs grid gap-2 ">
                <p>{user?.given_name}</p>
                <p>{user?.username}</p>
                <p>{user?.email}</p>
                <p>{user?.family_name}</p>
              </div>
            </div>
            
            <div className="flex flex-row  items-center">
              <Image className="w-[20%]"  src='/profile/og_logo.png' alt="" width={1000} height={1000}/>{" "}
              <p className="sm:text-base text-xs font-medium font-Sans">
                Managed by One Global Hub
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
