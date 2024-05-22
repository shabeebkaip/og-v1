import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {
  FaBars, FaFacebookSquare, FaInstagram, FaLinkedin,
  FaTimes, FaTwitterSquare, FaYoutubeSquare, FaFacebookF
} from 'react-icons/fa';
import BlueGradient from "./BlueGradient";
import OrangeGradient from "./OrangeGradient";
import Link from "next/link";
import { globalGetService } from "@/app/utils/apiServices";
import Image from "next/image";

const Mobilefooter = async() => {
  const response = await globalGetService('footer')
    const footer = response.data
  return (
    <div className="relative w-full p-4 mb-24 mt-14 ">
      <div className="container flex flex-col px-5 py-4 mx-auto mb-8 bg-white box-shadow rounded-3xl z-[100]">
        <div className="flex items-center w-full">
          <Image width={1000} height={500} src='/oglogonew.png' alt="logo" className="w-[220px]" />
        </div>

        <div className="flex   text-[#4C4C4D] text-xl font-bold   py-6 pr-1  font-Sans justify-between px-4">
          <ul>
            <Link href='/'><li >Home</li></Link>
            <Link href='/Applications/programs'><li className="cursor-pointer">Programs</li></Link>
            <Link href='/Applications/careers'><li className="cursor-pointer" >Careers</li></Link>
          </ul>

          <ul>
            <Link href='/Applications/news'><li className="cursor-pointer" >News</li></Link>
            <Link href='/Applications/contactUs'><li className="cursor-pointer" >Contact Us</li></Link>
          </ul>
        </div>


        <div className="flex justify-center text-[#4C4C4D] text-xl font-bold mb-4  font-Sans flex-col px-4">
          <h3 className="flex items-start justify-start mb-4 ">Social media links:</h3>
          <div className="flex justify-start gap-2 mb-4">
          {footer.map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <a
                      href={item.link}
                      target="_blank"  
                      rel="noopener noreferrer"
                    >
                      <Image width={1000} height={500}  className="w-10 text-[#4C4C4D]" src={item.icon} alt="" />
                    </a>
                  </div>
                ))}
          </div>
        </div>

        <div className="border border-gray-300 mb-8 px-5"></div>


        <div className="flex flex-col justify-center text-[#4C4C4D] text-xl font-bold  font-Sans mb-8 px-4">
          <p className="">General Terms Of Use</p>
          <p className="">Privacy Policy</p>
        </div>

        <div className="border border-gray-300 mb-8"></div>

        <div className="flex justify-start text-[#4C4C4D] text-xl font-bold  font-Sans mb-8 px-4">
          <p className="">Copyright © 2024 <br /> One Global Hub.</p>

        </div>
      </div>
      <div className="absolute w-[300px]   h-[200px] left-[-56px]  bottom-[-56px] z-[-1]">
        <BlueGradient />
      </div>
      <div className="absolute w-[250px]   h-[200px] right-0  top-[-12%] z-[-1]">
        <OrangeGradient />
      </div>
    </div>


  );
};

export default Mobilefooter;
