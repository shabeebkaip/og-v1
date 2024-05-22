"use client"

import Image from "next/image";
import { useReducer } from "react";

const FooterTop = () => {
  const location = useReducer();


  const getDynamicTextAndStyle = () => {
    const { pathname } = location;
    let buttonText = '';
    let buttonClassName = '';
    let footertop = '';

    if (pathname === '/hackathon') {
      buttonText = 'Email Hackathon Manager';
      buttonClassName = 'text-2xl bg-white';
    } else if (pathname === '/profile') {
      footertop = 'hidden'
    }
    else {
      buttonText = 'Get in touch!';
      buttonClassName = 'bg-white text-gray-600';
    }

    return { buttonText, buttonClassName, footertop };
  };

  const { buttonText, buttonClassName, footertop } = getDynamicTextAndStyle();

  return (
    <div className={` h-[60vh] mt-4 pb-10 sm-min-h-screen flex justify-center px-4 md:px-0 items-center container  mx-auto  ${footertop}`}>
      <div className="relative  w-full h-full px-3">
        <Image
          width={1000} height={500}
          src="/banner.jpg"
          alt="Banner Background"
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <button className={`rounded-full   md:w-96 px-4 w-72 md:h-20 h-16 font-medium  ${buttonClassName}`}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;