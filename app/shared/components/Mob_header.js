"use client"
import { useState, useEffect } from 'react';
import { FaBars, FaFacebookSquare, FaInstagram, FaLinkedin, FaTimes, FaTwitterSquare, FaYoutubeSquare, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { getGlobalCookie, setGlobalCookie } from '../../utils/index';
import Link from 'next/link';
import Image from 'next/image';

const Mob_Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [showDropdown, setShowDropdown] = useState(false);


  const language = [
    {
      name: 'English',
      code: 'en'
    },
    {
      name: 'عربي',
      code: 'ar'
    }
  ]

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isNavOpen]);

  const handleHomeClick = () => {
    setIsNavOpen(false);
    // navigate(`/`);
  };


  const handleProgramsClick = () => {
    setIsNavOpen(false);
    // navigate(`/programs`);
  };
  const handleCarriersClick = () => {
    setIsNavOpen(false);
    // navigate(`/careers`);
  };
  const handleNewsClick = () => {
    setIsNavOpen(false);
    // navigate(`/news`);
  };
  const handleContactClick = () => {
    setIsNavOpen(false);
    // navigate(`/contact-us`);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
};


  const getSelectedLanguage = () => {
    let language = getGlobalCookie('language')
    if (language === "ar") {
      setSelectedLanguage('عربي')
    }
    else {
      setSelectedLanguage('English')
    }

  }

  const changeLanguage = (language) => {
    setSelectedLanguage(language.name);
    setGlobalCookie('language', JSON.stringify(language.code))
    setTimeout(() => { window.location.reload(false) }, 500)

  };
  useEffect(() => {
    getSelectedLanguage();
    
}, []);



  return (
    <div className="flex items-center justify-between px-6 py-4 bg-transparent">
      <div className='flex items-center '>
       <Link href='/'><Image width={1000} height={500} onClick={handleHomeClick} src='/oglogonew.png' alt="logo" className='w-[40%] ' /></Link>
      </div>
      <nav>
        <section className="flex MOBILE-MENU lg:hidden">
          <div
            className="space-y-2 HAMBURGER-ICON"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-6 animate-pulse " style={{ backgroundColor: '#FF8500' }}></span>
            <span className="block h-0.5 w-6 animate-pulse " style={{ backgroundColor: '#FF8500' }}></span>
            <span className="block h-0.5 w-6 animate-pulse " style={{ backgroundColor: '#FF8500' }}></span>
          </div>


          <div className={isNavOpen ? "showMenuNav  " : "hideMenuNav"}>
            <div className='flex items-center justify-between px-6 py-4'>
              <div> <Image width={1000} height={500} onClick={handleHomeClick} src='/oglogonew.png' alt="logo" className=' w-[40%]' /></div>
              <div
                className=" CROSS-ICON"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="w-8 h-8 text-#1b1bd6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF8500"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>

              </div>


            </div>
            <div className='flex justify-center gap-10 md:pt-0 pb-[8%] items-center'>
              <div className='flex items-center gap-3 px-4 py-1 '>
                <Image width={1000} height={500} className='w-9 h-9 ' src='/login-logo.png' alt="" />
                <h3 className='text-lg font-normal text-[#4C4C4D]'>Log In</h3>
              </div>
              <div className='flex items-center gap-3 relative ' >
                <Image width={1000} height={500} className='w-9 h-9' src='/globe.png' alt="" />
                <h3 className='text-[#4C4C4D]' onClick={toggleDropdown} >{selectedLanguage}</h3>
                {showDropdown && (
                  <div className='absolute right-0 w-24 bg-white rounded-lg shadow-lg top-10'>
                    <ul>
                      {
                        language?.map((item, index) => (
                          <li className='px-3 py-1 cursor-pointer text-black' onClick={() => changeLanguage(item)} key={index}>{item.name}</li>
                        ))
                      }
                    </ul>
                  </div>
                )}
                <Image width={1000} height={500} className='h-7 w-7' src='/arrow.png' alt="" />
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between  h-[40vh] text-[24px] text-[#4C4C4D] font-medium font-Sans">
              <Link href='/'><li className="" onClick={handleHomeClick}>
                  Home
                </li></Link>
                <Link href='/programs'><li className="" onClick={handleProgramsClick}>
                  Programs
                </li></Link>
                <Link href='/careers'> <li className="" onClick={handleCarriersClick} >
                  Careers
                </li></Link>
                <Link href='/blogs'><li className="" onClick={handleNewsClick}>
                  News
                </li></Link>
                <Link href='/contact-us'><li className="" onClick={handleContactClick}>
                  Contact us
                </li></Link>
              </ul>

              <div className="flex flex-col items-center justify-center gap-3 space-x-4">
                <h3 className='text-[#6D6E71] text-[24px] font-medium font-Sans'>Social media links:</h3>
                <div className='flex gap-2'>
                  <a href="https://example.com/twitter" target="_blank" rel="noopener noreferrer"><FaXTwitter className="text-2xl text-[#4C4C4D]" /></a>
                  <a href="https://example.com/youtube" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-2xl text-[#4C4C4D]" /></a>
                  <a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">< FaFacebookF className="text-2xl text-[#4C4C4D]" /></a>
                  <a href="https://example.com/linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="text-2xl text-[#4C4C4D]" /></a>
                  <a href="https://example.com/youtube" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-2xl text-[#4C4C4D]" /></a>
                </div>

              </div>
            </div>

          </div>
        </section>
      </nav>

    </div>
  );
}

export default Mob_Header;
