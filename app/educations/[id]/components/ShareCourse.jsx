import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const ShareCourse = () => {
  return (
    <div className="md:py-28 py-12">
            <div className='flex justify-center'>
                <p className=' uppercase text-[37px] text-[#4C4C4D] font-medium text-center'>Share this  <span className='text-[#FF8500] border rounded-[23px] px-2 border-black'>course</span></p></div>
            <div className="container mx-auto">
                <div className="flex items-center justify-center gap-2 p-4 mt-9" >
                    <a
                        href="https://example.com/twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaXTwitter className="text-2xl text-[#4C4C4D] lg:w-10 lg:h-10" />
                    </a>
                    <a
                        href="https://example.com/youtube"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram className="text-2xl text-[#4C4C4D]  lg:w-10 lg:h-10" />
                    </a>
                    <a
                        href="https://example.com/facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF className="text-2xl text-[#4C4C4D]  lg:w-10 lg:h-10" />
                    </a>
                    <a
                        href="https://example.com/linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn className="text-2xl text-[#4C4C4D]  lg:w-10 lg:h-10" />
                    </a>
                    <a
                        href="https://example.com/youtube"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube className="text-2xl text-[#4C4C4D]  lg:w-10 lg:h-10" />
                    </a>
                </div>

            </div>

        </div>
  )
}

export default ShareCourse
