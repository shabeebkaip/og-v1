
"use client"
import { globalGetService } from '@/app/utils/apiServices'
import BlueGradient from '@/app/shared/components/BlueGradient'
import OrangeGradient from '@/app/shared/components/OrangeGradient'
import { useEffect, useState } from 'react'
import axios from "axios"
const Continue = () => {
    const [checked, setChecked] = useState(false)
    const checkedConditions = JSON.parse(localStorage.getItem('checked'))
    const selectedPackage = JSON.parse(localStorage.getItem('selectedPackage'))
    const [pageContent, setPageContent] = useState([])
    useEffect(() => {
        globalGetService('page_content', { key: "package" })
            .then(response => {
                setPageContent(response.data[0])
            })
    }, [])

    useEffect(() => {
        setChecked(checkedConditions)
    }, [checkedConditions])

    const text = pageContent?.pageContent?.[0]?.text

    const handleInitiatePayment = () => {
        if (checkedConditions) {
            let data = {
                username: 'oghubtest',
                email: "oghubtest@oginnovation.com",
                selected: {
                    package_id: selectedPackage?._id,
                    package_name: selectedPackage?.name,
                    amount: selectedPackage?.price,
                    program_id: "66333f8afc756a2132f8ae52",
                    program_name: "idea stage program"
                }
            }
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
                    const referenceID = response.data.data.referenceID
                    const id = response.data.data._id
                    window.location.href = `/payment-method?ref=${referenceID}&id=${id}`
                })
        } else {
            console.log('Please agree to terms and conditions')
        }
    }

    return (
        <div className='relative pb-8'>
            <div className='flex items-center justify-center my-20 cursor-pointer' onClick={handleInitiatePayment}>
                <p className={`border  rounded-[40px]  'hover:bg-[#FF8500]' border-[#FF8500]  hover:text-white ${checked} text-[20px] text-[#FF8500] px-16 py-2`}>
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
                                                // If ar_borderText and ar_textColor are the same, apply both border and text color
                                                color:
                                                    pageContent1?.textColor?.trim().toLowerCase() ===
                                                        pageContent1?.borderText?.trim().toLowerCase()
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
                                                color:
                                                    pageContent?.textColor?.trim().toLowerCase() === word.trim().toLowerCase()
                                                        ? '#FF8500'
                                                        : 'inherit',
                                                border:
                                                    pageContent?.borderText?.trim().toLowerCase() === word.trim().toLowerCase()
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
