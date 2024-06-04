
import BlueGradient from './BlueGradient'
import OrangeGradientLeft from "./OrangeGradientLeft";
import BlueGradientRight from "./BlueGradientRight";
import OrangeGradient from "./OrangeGradient";
import Link from "next/link";
import Image from "next/image";
import axios from 'axios';
import { find } from '@/lib/utils';

const fetchSocialMediaLinks = async () => {
    try {
        const response = await find('footers');
        return response;
    }catch(error){
        console.log(error);
    }
}

const Footer = async () => {
    const getCurrentYear = () => new Date().getFullYear();
    const footer = await fetchSocialMediaLinks();
    return (
        <div className="relative w-full p-4 md:p-8">
            <div className="container relative z-20 flex flex-col px-3 py-3 mx-auto bg-white box-shadow md:py-2 md:items-center md:px-3 rounded-3xl ">
                <div className="grid md:grid-cols-10 w-[50%]  md:w-[88%] xl:w-full md:p-8 lg:p-12  xl:p-16 ">
                    <div className="flex items-center w-full md:col-span-3 ">
                        <Image width={200} height={200} src='/og_logo.png' alt="logo" className="h-auto max-w-full " />
                    </div>
                    <div className="flex flex-col justify-center md:col-span-7 md:flex-row md:justify-around md:items-baseline ">

                        <div className="text-[#4C4C4D] md:text-lg text-lg xl:text-2xl font-normal font-Sans mb-4 md:mb-0">
                            <ul>
                                <Link href='/'><li className="cursor-pointer font-normal hover:text-[#FF8500]">Home</li></Link>
                                <Link href='/programs'><li className="cursor-pointer font-normal hover:text-[#FF8500]">Programs</li></Link>
                                <Link href='/careers'><li className="cursor-pointer font-normal hover:text-[#FF8500]" >Careers</li></Link>
                            </ul>
                        </div>
                        <div className="text-[#4C4C4D] md:text-lg text-lg xl:text-2xl md:semi-bold font-bold font-Sans mb-4 md:mb-0 ">
                            <ul>
                                <Link href='/blogs'><li className="cursor-pointer font-normal hover:text-[#FF8500]" >News</li></Link>
                                <Link href='/contact-us'><li className="cursor-pointer font-normal hover:text-[#FF8500]" >Contact Us</li></Link>

                            </ul>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-3 ">
                            <h3 className="text-[#4C4C4D] md:text-lg text-lg xl:text-2xl md:semi-bold font-normal font-Sans mb-2">
                                Social media links:
                            </h3>
                            <div className="flex gap-5">
                                {footer?.map((item, index) => (
                                    <div key={index} className="flex gap-2">
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image width={1000} height={500} className="w-5 h-5 rounded-md  text-[#4C4C4D] hover:scale-110 duration-200 ease-in-out" src={item.icon} alt="" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-[85%]  lg:w-[87%]  xl:w-[90%] h-[2px] bg-gray-500 my-4 md:mx-8"></div>
                <div className="flex flex-col items-baseline w-full p-4 md:flex-row md:p-12 ">
                    <div className="w-full md:w-[50%] py-3 lg:py-5 lg:pb-12 xl:pb-14">
                        <p className="text-left md:text-left text-[#4C4C4D]  md:text-base lg:text-xl xl:text-2xl font-normal  font-Sans  ">Copyright ©{getCurrentYear()} One Global Hub</p>


                    </div>
                    <div className="w-full md:w-[50%] flex flex-col md:flex-row py-3 md:py-5 ">
                        <Link href='/terms-and-condition'>
                        <p className="text-left md:text-left text-[#4C4C4D] text-lg md:text-base lg:text-xl xl:text-2xl font-normal  font-Sans mb-3 md:mb-0 hover:text-blue-600">General Terms Of Use</p>
                        </Link>
                        
                        <Link href="/privacy-policy">
                        <p className="text-left md:text-left text-[#4C4C4D] text-lg md:text-base lg:text-xl xl:text-2xl font-normal  font-Sans ml:0 md:ml-10 hover:text-blue-600 ">Privacy Policy</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute md:w-[200px] w-[150px] md:h-[350px] h-[200px]  md:top-[-30%] top-[-10%] right-0 md:hidden">
                <OrangeGradientLeft />
            </div>
            <div className="absolute md:w-[200px] w-[150px] md:h-[350px] h-[200px]   md:bottom-[-20%] bottom-[-10%] left-0 md:hidden ">
                <BlueGradientRight />
            </div>
            <div className="absolute xl:w-[300px] md:w-[200px] xl:h-[300px] md:h-[200px] right-8 top-[-15%]   hidden md:block   ">
                <OrangeGradient className="" />
            </div>
            <div className="absolute xl:w-[300px] md:w-[200px] xl:h-[300px] md:h-[200px] left-8 top-[-15%] hidden md:block">
                <BlueGradient />
            </div>
        </div>

    );
}

export default Footer;