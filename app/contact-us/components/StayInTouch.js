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

    useEffect(() => {
        globalGetService('whatAreYouLookingFor')
            .then(response => {
                setDropDown(response.data)
                if (response.data.length > 0) {
                    setData(prevData => ({ ...prevData, whatAreYouLookingFor: response.data[0].contact_list }))
                }
            })
    }, [])

    const [data, setData] = useState({
        name: "",
        email: "",
        number: "",
        whatAreYouLookingFor: "",
        message: "",
        country: ""

    });

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setData({ ...data, whatAreYouLookingFor: selectedValue });
    }

    const handleSave = () => {
        const jsonData = {
            name: data.name,
            email: data.email,
            number: data.number,
            whatAreYouLookingFor: data.whatAreYouLookingFor || dropDown[0]?.contact_list,
            message: data.message,
            country: data.country
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
                    enqueueSnackbar('Request successful!', { variant: 'success', anchorOrigin: { vertical: "top", horizontal: "right" } });
                    setData({
                        name: "",
                        email: "",
                        number: "",
                        whatAreYouLookingFor: dropDown[0]?.contact_list || "",
                        message: ""
                    });
                } else {
                    enqueueSnackbar('Request failed. Please try again.', { variant: 'error', anchorOrigin: { vertical: "top", horizontal: "right" } });
                }
            })
            .catch(error => {
                enqueueSnackbar('An error occurred. Please try again.', { variant: 'error', anchorOrigin: { vertical: "top", horizontal: "right" } });
            });
    }

    return (
        <div className='flex relative z-20 flex-col sm:flex-row lg:mt-20 pb-10 p-2 overflow-hidden container mx-auto '>
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
                    <input type="text" placeholder='Your name*'
                        className='w-full lg:w-[50%] sm:h-16 h-10 border rounded-full border-[#242222] pl-7 font-medium text-[#4C4C4D] mb-4'
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder='Your email*'
                        className='w-full lg:w-[50%]  sm:h-16 h-10 border rounded-full border-[#242222] pl-7 font-medium text-[#4C4C4D] mb-4'
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                    />

                    <div className="flex w-full lg:w-[50%]  sm:h-16 h-10 gap-2  ">
                        <select
                            className="w-[20%] sm:h-16 h-10 border rounded-full border-[#242222] pl-2 pr-7 font-medium text-[#4C4C4D] mb-4 custom-select text-[18px] "
                            value={data.country}
                            onChange={(e) => setData({ ...data, country: e.target.value })}
                           
                        >
                            {countryCode.map((item, index) => (
                                <option className ='' key={index} value={item.value}  style={{ backgroundColor: '#f0f0f0', border: '1px solid #ccc' }}>{item.dial_code} </option>
                            ))}



                        </select>
                        <input
                            type="text"
                            placeholder='Your phone*'
                            className='w-[80%]   sm:h-16 h-10 border rounded-full border-[#242222] pl-7 font-medium text-[#4C4C4D] mb-4'
                            value={data.number}
                            onChange={(e) => setData({ ...data, number: e.target.value })}
                        />
                    </div>

                    
                    {/* <div className="flex w-full lg:w-[50%]  sm:h-16 h-10">
                        <FormControl className="w-[20%] sm:h-16 h-10 border rounded-l-full border-[#242222] pl-2 pr-7 font-medium text-[#4C4C4D] mb-4 custom-select ">
                            <InputLabel id="country-label"></InputLabel>
                            <Select
                                labelId="country-label"
                                value={data.country}
                                onChange={(e) => setData({ ...data, country: e.target.value })}
                            >
                                {countryCode.map((item, index) => (
                                    <MenuItem key={index} value={item.value}>{item.dial_code} </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            type="text"
                            placeholder="Your phone*"
                            className='w-[80%]   sm:h-16 h-10 border rounded-r-full border-[#242222] pl-7 font-medium text-[#4C4C4D] mb-4'
                            value={data.number}
                            onChange={(e) => setData({ ...data, number: e.target.value })}
                        />
                    </div> */}





                    <div className='w-full lg:w-[50%] mt-4  sm:h-16 h-10 border rounded-full border-[#242222] pl-1 lg:pl-2 lg:pr-2 md:pr-1 pr-1 font-medium text-[#4C4C4D] flex md:justify-start justify-center items-center text-[19px] mb-4 sm:text-base'>
                        <select
                            name="search"
                            id="search"
                            className='border-none outline-none w-full lg:h-auto text-sm sm:text-base sm:p-1 sm:h-6'
                            value={data.whatAreYouLookingFor} // Use data.whatAreYouLookingFor here
                            onChange={handleSelectChange} // Use the custom handler for onChange
                        >
                            {
                                dropDown?.map((item, index) => (
                                    <option key={index} value={item.contact_list}>{item.contact_list}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='flex flex-col mb-4 lg:w-[50%] w-full'>
                        <label htmlFor="subject" className='text-[16px] lg:mt-4'>Subject</label>
                        <textarea name="subject" id="subject" placeholder='' className='border-b border-solid border-b-[#242222] mt-2 w-full'
                            value={data.message}
                            onChange={(e) => setData({ ...data, message: e.target.value })}
                        />
                    </div>
                    <div className='flex justify-center items-center mt-7 lg:w-full'>
                        <button className='border px-9 lg:px-13 py-2 lg:py-1 lg:text-[25px] rounded-full border-orange-500 text-[20px] md:text-[30px] text-[#4C4C4D] font-medium lg:w-[30%]' onClick={handleSave}  >
                            Your message
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
