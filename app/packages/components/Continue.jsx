"use client"
import { globalGetService } from '@/app/utils/apiServices'
import BlueGradient from '@/app/shared/components/BlueGradient'
import OrangeGradient from '@/app/shared/components/OrangeGradient'
import { useEffect, useState } from 'react'
import axios from "axios"
import { authenticateUser, getUserApi } from '@/app/shared/api';
import { useSearchParams } from 'next/navigation'


const Continue = ({ packages }) => {

    const params = useSearchParams();
    const code = params.get('code');
    const [activeLink, setActiveLink] = useState('/packages');


    const [checked, setChecked] = useState(false)
    const checkedConditions = JSON.parse(localStorage.getItem('checked'))
    const selectedPackage = JSON.parse(localStorage.getItem('selectedPackage'))
    const [pageContent, setPageContent] = useState([])
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            getUserApi(token).then(res => setUserData(res.data));

        }
        else {
            authenticateUser()
        }
    }, [token]);



    useEffect(() => {
        globalGetService('page_content', { key: "package" })
            .then(response => {
                setPageContent(response.data[0]);
            });
    }, []);

    // Update checked state based on local storage when component mounts
    useEffect(() => {
        const checkedConditions = JSON.parse(localStorage.getItem('checked'));
        setChecked(checkedConditions);
    }, []);

    const text = pageContent?.pageContent?.[0]?.text;

    const handleInitiatePayment = () => {
        if (checked) { // Use checked directly
            let data = {
                username: userData?.user?.given_name,
                email: userData?.user?.email,
                selected: {
                    package_id: selectedPackage?._id,
                    package_name: selectedPackage?.name,
                    amount: selectedPackage?.price,
                    program_id: packages[0]?.program?.program_id,
                    program_name: packages[0]?.program?.name
                }
            };
            axios.post('https://api-one-global.code-ox.com/api/save-order', data, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
                    "Access-Control-Allow-Credentials": true
                }
            })
            .then(response => {
                const referenceID = response.data.data.referenceID;
                const id = response.data.data._id;
                window.location.href = `/payment-method?ref=${referenceID}&id=${id}`;
            });
        } else {
            alert('Please agree to terms and conditions');
        }
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
                localStorage.setItem('token_id', response.data.token_id);

                const saveResponse = await axios.post("https://api-one-global.code-ox.com/api/saveUser", {
                    user: response.data.data
                });

                if (saveResponse.data.status) {
                    localStorage.setItem('token', saveResponse.data.token);

                    const userProfileResponse = await axios.get("https://api-one-global.code-ox.com/api/getUserProfile", {
                        headers: {
                            Authorization: `Bearer ${saveResponse.data.token}`
                        }
                    });

                    setUserData(userProfileResponse.data);

                    const url = `${currentUrl.origin}${currentUrl.pathname}`;
                    window.location.href = url;
                }
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    useEffect(() => {
        setActiveLink(window.location.pathname);
        if (code) {
            fetchUser();
        }
    }, [code]);

    return (
        <div className='relative pb-8'>
            <div className='flex items-center justify-center my-20 cursor-pointer' onClick={handleInitiatePayment}>
                <p className={`border rounded-[40px] ${checked ? 'hover:bg-[#FF8500] text-[#FF8500]' : 'text-gray-500'} border-[#FF8500] hover:text-white text-[20px] px-16 py-2`}>
                    Continue
                </p>
            </div>
            <div>
                <div className='flex justify-center w-full mt-16 '>
                    <div className='md:w-[78%]'>
                        <h3 className='2xl:text-[50px] flex flex-col items-center xl:text-[40px] md:text-[30px] text-center text-[25px] font-medium text-gray-500 bg-white lg:p-5 '>
                            {text?.split(pageContent?.borderText).map((splitText, index) => (
                                <div key={index} style={{ display: 'inline' }}>
                                    {index > 0 && (
                                        <span
                                            className="py-2 px-5 border-2 border-gray-500 rounded-[53px]"
                                            style={{
                                                color: pageContent?.textColor?.trim().toLowerCase() === pageContent?.borderText?.trim().toLowerCase()
                                                    ? '#FF8500'
                                                    : 'inherit',
                                            }}
                                        >
                                            {pageContent?.borderText}
                                        </span>
                                    )}
                                    {splitText?.split(' ').map((word, innerIndex) => (
                                        <span
                                            key={innerIndex}
                                            style={{
                                                color: pageContent?.textColor?.trim().toLowerCase() === word.trim().toLowerCase()
                                                    ? '#FF8500'
                                                    : 'inherit',
                                                border: pageContent?.borderText?.trim().toLowerCase() === word.trim().toLowerCase()
                                                    ? '2px solid '
                                                    : 'none',
                                            }}
                                        >
                                            {word}
                                            {innerIndex < splitText?.split(' ').length - 1 && ' '}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </h3>
                    </div>
                    <div className='md:w-[200px] absolute h-[250px] top-[40%] left-[10%] md:block hidden'><BlueGradient /></div>
                    <div className='md:w-[200px] absolute h-[240px] right-[5%] top-[10%] md:block hidden'><OrangeGradient /></div>
                </div>
            </div>
        </div>
    )
}

export default Continue
