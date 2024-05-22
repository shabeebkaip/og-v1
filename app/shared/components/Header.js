"use client"
import Link from 'next/link.js';
import { setGlobalCookie, getGlobalCookie } from '../../utils/'
import { useEffect, useState } from "react";
import Image from 'next/image.js';
import { authenticateUser, getUserApi } from '../api'
import {  useSearchParams } from 'next/navigation';
import axios from 'axios';

const Header = () => {
    const params = useSearchParams();
    const code = params.get('code');
    const [activeLink, setActiveLink] = useState('/');
    const [userData, setUserData] = useState(null)
    const handleClick = (path) => {
        setActiveLink(path);
    };
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [showDropdown, setShowDropdown] = useState(false);
    const languages = [
        {
            name: 'English',
            code: 'en'
        },
        {
            name: 'عربي',
            code: 'ar'
        }
    ];
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const getSelectedLanguage = () => {
        let language = getGlobalCookie('language');
        if (language === "ar") {
            setSelectedLanguage('عربي');
        } else {
            setSelectedLanguage('English');
        }
    };
    const changeLanguage = (language) => {
        setSelectedLanguage(language.name);
        setGlobalCookie('language', JSON.stringify(language.code));
        setTimeout(() => { window.location.reload(false); }, 500);
    };
    useEffect(() => {
        setActiveLink(window.location.pathname);
    }, []);
    const authenticateUserFn = () => {
        authenticateUser();
    };
    const fetchUser = async () => {
        try {
            const currentUrl = new URL(window.location.href);
            const params = new URLSearchParams(currentUrl.search);
            params.delete('code');
            let redirectUri = `${currentUrl.origin}${currentUrl.pathname}`;
            if (redirectUri.endsWith('/')) {
                redirectUri = redirectUri.slice(0, -1);
            }
            const response = await axios.post("https://api-one-global.code-ox.com/api/userInfo", {
                code: code,
                redirect_uri: redirectUri
            });
            if (response.data.success) {
                setUserData(response.data.data);
                const saveResponse = await axios.post("https://api-one-global.code-ox.com/api/saveUser", {
                    user: response.data.data
                });
                if (saveResponse.data.status) {
                    document.cookie = `token=${saveResponse.data.token}; path=/; max-age=259200`;
                        const userProfileResponse = await axios.get("https://api-one-global.code-ox.com/api/getUserProfile", {
                        headers: {
                            Authorization: `Bearer ${saveResponse.data.token}`
                        }
                    });
                    setUserData(userProfileResponse.data);
                }
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };
    const getTokenFromCookies = () => {
        const cookies = document.cookie.split('; ');
        const tokenCookie = cookies.find(row => row.startsWith('token='));
        return tokenCookie ? tokenCookie.split('=')[1] : null;
    };
    const token = getTokenFromCookies();
    useEffect(() => {
        if (token) {
            getUserApi(token).then(res => setUserData(res.data));
        }
        if (code) {
            fetchUser();
        }
    }, [token,code]);
    


    // useEffect(() => {
    //     getSelectedLanguage();
    //     setCurrentPath(window.location.pathname);
    // }, []);

    // const router = useRouter();

    // useEffect(() => {
    //     setCurrentPath(router.pathname);
    // }, [router.pathname]);

    return (
        <div className='container flex items-center justify-between h-40 mx-auto'>
            <div>
                <Link href='/'><Image  className='w-[90%] lg:w-full' src="/og_logo.png" alt="Post Image" onClick={() => handleClick('/')} width={1000} height={500} /></Link>
            </div>
            <div className='relative flex items-center justify-center gap-3 px-5 py-3 bg-white lg:gap-5 lg:px-10 xl:gap-20 box-shadow rounded-3xl'>
                <Link href='/'>
                    {/* <h3 className={`font-normal cursor-pointer lg:text-lg ${activeLink === '/' ? 'text-orange-500' : 'text-gray-700'}`} onClick={() => handleClick('/')}>
                        Home
                    </h3> */}
                    <h3 className={`font-normal cursor-pointer lg:text-lg ${activeLink === '/' ? 'text-orange-500' : 'text-gray-700'}`} onClick={() => handleClick('/')}>
                        Home
                    </h3>

                </Link>
                <Link href='/programs'><h3 className={`font-normal cursor-pointer lg:text-lg ${activeLink.includes('/programs')  ? 'text-orange-500' : 'text-gray-700'}`} onClick={() => handleClick('/programs')}>
                    Programs
                </h3>
                </Link>
                <Link href='/careers'>  <h3 className={`font-normal text-gray-700 cursor-pointer lg:text-lg ${activeLink === '/careers' ? 'text-orange-500' : 'text-gray-700'}`} onClick={() => handleClick('/careers')} >
                    Careers
                </h3></Link>
                <Link href='/news'> <h3 className={`font-normal text-gray-700 cursor-pointer lg:text-lg ${activeLink.includes('/news')  ? 'text-orange-500' : 'text-gray-700'}`} onClick={() => handleClick('/news')}>
                    News
                </h3>
                </Link>

            </div>
            {userData ? (
                <Link href="/profile">
                    <div className='flex items-center justify-center gap-3 px-3 py-3 bg-white box-shadow rounded-3xl lg:px-7 cursor-pointer' >
                        <Image width={1000} height={500} className='w-6 h-6 ' src="/profile.jpeg" alt="profile" />
                        <h3 className='font-normal lg:text-lg'>{userData?.user?.given_name}</h3>
                    </div>
                </Link>
            ) : (
                <div className='flex items-center justify-center gap-3 px-3 py-3 bg-white box-shadow rounded-3xl lg:px-7 cursor-pointer' onClick={authenticateUserFn}>
                    <Image width={1000} height={500} className='w-6 h-6 ' src="/profile.jpeg" alt="profile" />
                    <h3 className='font-normal lg:text-lg'>Log In</h3>
                </div>

            )}



            {/* <div className='relative flex items-center justify-center gap-3'>
                <Image width={1000} height={500} className='w-6 h-6 cursor-pointer lg:w-9 lg:h-9' src="/globe.png" alt="globe" onClick={toggleDropdown} />
                <h3 className='cursor-pointer' onClick={toggleDropdown}>{selectedLanguage}</h3>
                {showDropdown && (
                    <div className='absolute right-0 w-24 bg-white rounded-lg shadow-lg top-10'>
                        <ul>
                            {
                                language.map((item, index) => (
                                    <li className='px-3 py-1 cursor-pointer' onClick={() => changeLanguage(item)} key={index}>{item.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                )}
                <Image width={1000} height={500} className='w-5 h-5 lg:h-7 lg:w-7' src="/arrow.png" alt="arrow" onClick={toggleDropdown} />
            </div> */}
            <div className=' z-[100] relative'>
                <Link href='/contact-us'>
                    <button className='px-3 py-3 text-white bg-blue-300 lg:px-5 rounded-3xl ' onClick={() => handleClick('/contact-us')}>CONTACT US</button>
                </Link>
            </div>
        </div>
    );
}

export default Header;