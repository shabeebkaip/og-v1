import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import SharedLoader from "@/app/shared/components/sharedLoader"



const PaymentNew = ({ paymentData, referenceId }) => {
    const [loading, setLoading] = useState(false);
    const paymentActionButton = () => {
     
        setLoading(true);

        let payload = {
            amount: paymentData?.selected?.amount,
            callbackURL: window.location.origin + "/payment-summary",
            currency: "KWD",
            userReference: 0,
            referenceID: parseInt(referenceId),
            sourceCurrency: "conditional",
            billingDetails: {
                name: paymentData?.username,
                email: paymentData?.email,
            },
            pc: "KWKNETDC"
        }
        axios.post('https://api-one-global.code-ox.com/api/payment', payload, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
                "Access-Control-Allow-Credentials": true
            }
        })
            .then(response => {
                window.location.href = response.data.data.redirectURL
            })
            .finally(() => {
            
            });
    }
    return (
        <div className="">
            {loading ? <SharedLoader/>: null}
            <div className="text-[#4C4C4D] bg-white box-shadow rounded-3xl md:p-10 p-5">
                <p className='xl:text-4xl text-[30px] font-medium xl:w-40%'>Select Payment Method</p>
                <div className="lg:flex">
                    <div className="lg:w-1/2 justify-between flex flex-col pt-4 gap-5">
                        <div className="flex flex-col gap-5 mt-4">

                            <div className="">
                                <label className="flex items-center gap-3">
                                    <input type="radio" className="w-6 h-6 border-[#FF8500] checked:bg-[#FF8500] border text-[#4C4C4D] text-[26px] " checked />
                                    <Image width={1000} height={500} alt="" src={"https://travelmate.net/tmintl/images/paymentmode/KNET.jpg"} className="w-[60px] h-[50px]"></Image>
                                    <span className="text-[20px] font-normal">Pay pal</span>
                                </label>
                            </div>
                        </div>
                        <div className="py-6 pt-10">
                        <button
                                className='border-2 border-[#FF8500] rounded-[45px] lg:px-16 px-10 py-2 md:text-[28px] text-[20px]'
                                onClick={paymentActionButton}
                                // disabled={loading}
                            >
                            Pay Now
                            </button>
                           
                        </div>
                    </div>



                    <div className='lg:w-1/2 flex flex-col gap-10'>
                        <div className='md:flex flex-col md:flex-row xl:gap-20 gap-5 hidden'>
                            <div>
                                <p className='md:text-[26px] text-xl font-medium'>Payment Summary</p>
                                <p className='text-lg font-normal md:pt-6 pt-2'>Package Name :</p>
                                <p className='text-lg pt-2'>Program :</p>
                                <p className='text-lg pt-2'>Name :</p>
                                <p className='text-lg pt-2'>Email :</p>
                                <p className='text-lg pt-2'>Payment Method:</p>
                                <p className='text-lg pt-2'>Payment Status:</p>
                                <p className='text-lg pt-2'>Payment Reference:</p>
                                <p className='text-lg font-semibold pt-2'>Total</p>
                            </div>
                            <div className="md:pt-0 pt-2">
                                <CiCreditCard1 className="w-[32px] text-gray-400 h-[32px]" />
                                <p className='text-lg capitalize md:pt-6 pt-2'>{paymentData?.selected?.package_name}</p>
                                <p className='text-lg capitalize pt-2'>{paymentData?.selected?.program_name}</p>
                                <p className='text-lg capitalize pt-2'>{paymentData?.username ? paymentData?.username : ''}</p>
                                <p className='text-lg capitalize break-words pt-2'>{paymentData?.email}</p>
                                <p className='text-lg capitalize pt-2'>KNET</p>
                                <p className='text-lg capitalize pt-2'>{paymentData?.status}</p>
                                <p className='text-lg pt-2'>{referenceId}</p>
                                <p className='text-lg font-semibold capitalize pt-2'>KWD {paymentData?.selected?.amount}</p>
                            </div>
                        </div>
                        <div className=' flex-col md:flex-row xl:gap-20 gap-5 md:hidden'>
                            <div>
                                <p className='md:text-[26px] text-xl font-medium'>Payment Summary <span> <CiCreditCard1 className="w-[32px] text-gray-400 h-[32px]" /></span></p>
                                <p className='text-lg font-normal md:pt-6 pt-2'>Package Name : <span className="font-bold"> {paymentData?.selected?.package_name}</span></p>
                                <p className='text-lg pt-2'>Program : <span className="font-bold">{paymentData?.selected?.program_name}</span></p>
                                <p className='text-lg pt-2'>Name : <span className="font-bold">{paymentData?.username ? paymentData?.username : ''}</span></p>
                                <p className='text-lg pt-2'>Email : <span className='text-lg capitalize break-words pt-2 font-bold'>{paymentData?.email}</span></p>
                                <p className='text-lg pt-2'>Payment Method:<span className="font-bold">KNET</span></p>
                                <p className='text-lg pt-2'>Payment Status:<span className="font-bold">{paymentData?.status}</span></p>
                                <p className='text-lg pt-2'>Payment Reference: <span className="font-bold">{referenceId}</span></p>
                                <p className='text-lg font-semibold pt-2'>Total :<span className="font-bold">KWD {paymentData?.selected?.amount}</span></p>
                            </div>
                          
                        </div>

                        <div className=' flex gap-6 py-10 '>
                            <div>
                                <Image width={200} height={200} alt="" src="/og_logo.png" ></Image></div>
                            <div className='flex items-center text-[16px] font-medium'>
                                <p>Managed by One Global Hub</p></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PaymentNew;
