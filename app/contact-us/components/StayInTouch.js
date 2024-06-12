"use client"
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import BlueGradient from "@/app/shared/components/BlueGradient";
import OrangeGradient from '@/app/shared/components/OrangeGradient'
import { useEffect, useState } from 'react'
import { globalGetService, globalPostService } from '@/app/utils/apiServices'
import axios from "axios"
import { SnackbarProvider, useSnackbar } from 'notistack'





const StayInTouch = ({ countryCode }) => {
    const [dropDown, setDropDown] = useState([])
    const { enqueueSnackbar } = useSnackbar();
    const [emailError, setEmailError] = useState('');
    const [error, setError] = useState('')

    const [data, setData] = useState({
        name: "",
        email: "",
        number: "",
        whatAreYouLookingFor: "",
        message: "",
        code: "+965"
    });

    useEffect(() => {
        globalGetService('whatAreYouLookingFor')
            .then(response => {
                setDropDown(response.data)
                if (response.data.length > 0) {
                    setData(prevData => ({ ...prevData, whatAreYouLookingFor: response.data[0].contact_list }))
                }
            })
    }, [])




    const handleNumberChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) || value === "") {
            setData({ ...data, number: value });
        } else {
            // Display an error message or perform any other desired action
            enqueueSnackbar('Phone number should contain only digits', { variant: 'error', anchorOrigin: { vertical: "top", horizontal: "right" } });
        }
    };

    const nameRegex = /^[a-zA-Z\s]+$/;


    const handleNameChange = (e) => {
        const value = e.target.value;
        if (nameRegex.test(value) || value === "") {
            setData({ ...data, name: value });
        } else {
            // Display an error message or perform any other desired action
            enqueueSnackbar('Name should contain only letters and spaces', { variant: 'error', anchorOrigin: { vertical: "top", horizontal: "right" } });
        }
    };
    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setData({ ...data, whatAreYouLookingFor: selectedValue });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const handleSave = () => {
        let validateInput = {
            name: data.name ? '' : 'Please enter your name',
            email: data.email ? emailRegex.test(data.email) ? "" : "Please enter a valid email" : 'Please enter your email',
            number: data.number ? data.number.length >= 7 && data.number.length <= 15 ? "" : "Please enter a valid mobile number" : 'Please enter your phone number',
        }
        if (Object.values(validateInput).every((value) => value === "")) {
            const jsonData = {
                name: data.name,
                email: data.email,
                number: data.number,
                whatAreYouLookingFor: data.whatAreYouLookingFor || dropDown[0]?.contact_list,
                message: data.message,
                code: data.code
            };
            axios.post("https://api-one-global.code-ox.com/api/queries", jsonData, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
                    "Access-Control-Allow-Credentials": true
                }
            })
                .then(response => {
                    if (response.data.success) {
                        enqueueSnackbar('Request successfull', { variant: 'success', anchorOrigin: { vertical: "top", horizontal: "right" } });
                        setData({
                            name: "",
                            email: "",
                            number: "",
                            whatAreYouLookingFor: dropDown[0]?.contact_list || "",
                            message: "",
                            code: "+965"
                        });
                    } else {
                        enqueueSnackbar('Please fill in all required fields.', { variant: 'error', anchorOrigin: { vertical: "top", horizontal: "right" } });
                    }
                })
                .catch(error => {
                    enqueueSnackbar('Please fill in all required fields.', { variant: 'error', anchorOrigin: { vertical: "top", horizontal: "right" } });
                });
        } else {
        }

        const isEmailValid = emailRegex.test(data.email);
        setEmailError(isEmailValid ? '' : 'Please enter a valid email address');

        if (!isEmailValid) {
            setError(validateInput)
        }

    }

    return (
        <div className='flex relative z-20 flex-col sm:flex-row lg:mt-20 pb-10 p-2 overflow-hidden container mx-auto ' id="stay-in-touch">
            <div className='absolute left-0 h-[300px] w-[300px] hidden md:flex'>
                <BlueGradient />
            </div>
            <div className='absolute right-10 h-[310px] w-[300px] flex md:hidden -top-28 -z-10'>
                <BlueGradient className='w-[40] h-full' />
            </div>
            <div className='container mx-auto flex justify-center items-center flex-col rounded-[23px] box-shadow max-w-[95%] sm:max-w-none sm:w-full mt-8 sm:p-4 p-2 bg-white'>
                <div>
                    <button className='border px-9 lg:px-13 py-2 lg:py-1 lg:text-[25px] rounded-full border-orange-500 text-[20px] md:text-[30px] text-[#4C4C4D] font-medium uppercase lg:mt-28'>
                        Stay in touch
                    </button>
                </div>

                <div className='flex flex-col mt-10 lg:p-6 w-full items-center'>
                    <div className='w-full flex flex-col items-center justify-start'>
                        <input
                            type="text"
                            placeholder={error.name ? error.name : 'Your name*'}
                            className={`w-full lg:w-[50%] sm:h-16 h-10 border rounded-full ${error.name ? "border-red-500" : "border-[#242222]"}  pl-7 font-medium text-[#4C4C4D] mb-4 ${error.name && 'placeholder:text-red-500'} placeholder:font-bold  placeholder:text-[#4C4C4D] placeholder:text-[16px]`}
                            value={data.name}
                            onChange={handleNameChange}
                            onFocus={() => setError({ ...error, name: '' })}
                        />
                    </div>
                    <input
                        type="email"
                        placeholder={error.email ? error.email : 'Your email*'}
                        className={`w-full lg:w-[50%] sm:h-16 h-10 border rounded-full ${error.email ? "border-red-500" : "border-[#242222]"} pl-7 font-medium text-[#4C4C4D] mb-4 ${error.email && 'placeholder:text-red-500'} placeholder:font-bold  placeholder:text-[#4C4C4D] placeholder:text-[16px]` }
                        value={error.email ? "" : data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        onFocus={() => setError({ ...error, email: '' })}
                    />

                    <div className="flex w-full lg:w-[50%]  sm:h-16 h-10 sm:gap-2 sm:flex-row flex-col   ">

                        <select
                            className="sm:w-[30%] sm:h-16 h-10 border rounded-full border-[#242222] pl-2 pr-7 font-medium text-[#4C4C4D] mb-4 custom-select text-[18px] p-2 sm:p-0  " style={{ paddingLeft: '8px', paddingRight: '8px' }}
                            value={data.code}
                            onChange={(e) => setData({ ...data, code: e.target.value })}

                        >
                            {countryCode.map((item, index) => (
                                <option className='' key={index} value={item.value} style={{ backgroundColor: '#f0f0f0', border: '1px solid #ccc' }}>{item.dial_code} </option>
                            ))}



                        </select>

                        <input
                            type="text"
                            placeholder={error.number ? error.number : 'Your phone*'}
                            className={`sm:w-[70%] sm:h-16 h-10 border rounded-full ${error.number ? "border-red-500" : "border-[#242222]"} pl-7 font-medium text-[#4C4C4D] mb-4 p-4 sm:p-2 ${error.number && 'placeholder:text-red-500'} placeholder:font-bold  placeholder:text-[#4C4C4D] placeholder:text-[16px]`}
                            value={error.number ? "" : data.number}
                            onChange={handleNumberChange}
                            onFocus={() => setError({ ...error, number: '' })}
                        />
                    </div>

                    <div className='w-full lg:w-[50%] sm:mt-4 mt-[68px] sm:h-16 h-10 border rounded-full border-[#242222] pl-1 lg:pl-2 lg:pr-2 md:pr-1 pr-1 font-medium text-[#4C4C4D] flex md:justify-start justify-center items-center text-[19px] mb-4 sm:text-base'>
                        <select
                            name="search"
                            id="search"
                            className='border-none outline-none w-full lg:h-auto text-sm sm:text-base sm:p-1 sm:h-6 text-[#4C4C4D] font-bold capitalize'
                            value={data.whatAreYouLookingFor} // Use data.whatAreYouLookingFor here
                            onChange={handleSelectChange} // Use the custom handler for onChange
                        >
                            {
                                dropDown?.map((item, index) => (
                                    <option key={index} value={item.contact_list}className='font-bold text-[#4C4C4D] ' >{item.contact_list}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='flex flex-col mb-4 lg:w-[50%] w-full'>
                        <label htmlFor="subject" className='text-[16px] lg:mt-4 font-bold text-[#4C4C4D]'>Message</label>
                        <textarea name="subject" id="subject" placeholder='' className='border-b  test-[20px] border-b-[#242222] mt-2 w-full focus:outline-none'
                            value={data.message}
                            onChange={(e) => setData({ ...data, message: e.target.value })}
                        />
                    </div>
                    <div className='flex justify-center items-center mt-7 lg:w-full'>
                        <button className='border px-9 lg:px-13 py-2 lg:py-1 lg:text-[25px] rounded-full border-orange-500 text-[20px] md:text-[30px] text-[#4C4C4D] font-medium lg:w-[30%]' onClick={handleSave}  >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <div className='absolute -left-16 h-[310px] w-[390px] flex md:hidden -bottom-20 -z-10'>
                <OrangeGradient className='w-full h-full' />
            </div>
            <div className='right-0 h-[300px] w-[300px] absolute hidden md:flex'>
                <OrangeGradient />
            </div>
        </div>
    )
}

const StayInTouchContainer = ({ countryCode }) => {
    return (
        <SnackbarProvider maxSnack={3}>
            <StayInTouch countryCode={countryCode} />
        </SnackbarProvider>
    )
}

export default StayInTouchContainer
