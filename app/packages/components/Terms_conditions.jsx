"use client"
import { useEffect, useState } from 'react'
import OrangeGradient from '@/app/shared/components/OrangeGradient'
import BlueGradient from '@/app/shared/components/BlueGradient'
import { globalGetService } from '@/app/utils/apiServices'
import { getGlobalCookie } from '@/app/utils'


const Terms_conditions = () => {
    const [checked, setChecked] = useState(false)
    const [terms, setTerms] = useState([])
    useEffect(() => {
        globalGetService('terms')
            .then(response => {
                setTerms(response.data)
            })
    }, [])

    const handleCheck = (e) => {
        setChecked(e.target.checked)
        localStorage.setItem('checked', e.target.checked)
    }

    const language = getGlobalCookie('language')
    
    return (
        <>
            <div className='relative sm:px-3 mt-7'>
                <div className='justify-center hidden my-32 md:flex'>
                    <p className=' xl:text-[50px] md:text-[40px] text-[24px] font-medium text-[#FF8500] border-2 rounded-[45px] border-[#4C4C4D] px-4 uppercase '>
                        Terms & Conditions
                    </p>
                </div>
                <div className='grid md:grid-cols-2 gap-10 box-shadow rounded-[23px] lg:p-16 p-10 flex-col md:flex-row z-10 bg-white'>
                    {terms.map((item, index) => (
                        <div key={index} className=''>
                            <p className='lg:text-[24px] text-[18px] text-[#4C4C4D] text-left font-normal leading-[30px] '>
                                {language === "ar" ? item.ar_question : item.question}
                            </p>
                            <p className='lg:text-[24px] text-[18px] text-[#4C4C4D] text-left font-light leading-[30px] '>{language === "ar" ? item.ar_answer : item.answer}</p>
                        </div>
                    ))}

                    <div className='pt-10'>
                        <input type="checkbox" className="border-[#FF8500] border h-6 w-6 " value={checked} onChange={(e) => handleCheck(e)} />
                        <label className=" lg:text-[24px] text-[18px] text-[#4C4C4D] pl-6">Agree to Terms & Conditions</label>
                    </div>

                </div>

                <div className="absolute top-[-4%] right-0 md:w-[200px] h-[200px]  w-[300px] md:block hidden"><OrangeGradient /></div>
                <div className="absolute top-0 left-0 w-[200px] h-[200px] md:block hidden "><BlueGradient /></div>
                <div className="absolute  h-[426px] top-[90px] left-[-112px] w-[290px] z-[-10] block md:hidden"><OrangeGradient /></div>
                <div className="absolute bottom-0 right-[-84px] w-[290px] h-[426px] block md:hidden z-[-10] "><BlueGradient /></div>
                <div className="absolute top-[50%] right-[-84px] w-[290px] h-[426px] block md:hidden z-[-10] "><OrangeGradient /></div>

            </div>
        </>
    )
}

export default Terms_conditions
