"use client"
import { useEffect, useState } from "react"
import { SlReload } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";
import FormSubmission from '@/app/shared/components/FormSubmission'
import { SnackbarProvider } from 'notistack'






const LoadMore = ({ courseList }) => {
    const [visible, setVisible] = useState(4);
    const [courseName, setCourseName] = useState(null)
    const [formId,setFormId] = useState(null)
    //for popup modal
    const [popup, setPopup] = useState(false);

    const hideHandler = () => {
        setPopup(false)
    }

    const loadmore = () => {
        setVisible(prev => prev + 4);
    }





    return (
        <SnackbarProvider>
            <div className="container mx-auto">
                <div className="md:grid flex flex-col p-2  md:grid-cols-4 2xl:gap-2 lg:gap-3 lg:p-5 md:p-2 md:gap-2">
                    {courseList?.slice(0, courseList?.length).map((item) => (
                        <div key={item?.mode} className="p-1  flex flex-col justify-between ">
                            <div className="mt-6 ">
                                <Image src={item?.image} className="w-full h-[200px] 2xl:h-[300px] rounded-[23px] object-cover" alt="" width={100} height={100} />
                                <h3 className="text-[16px] 2xl:text-[16px] md:text-[12px] lg:text-[14px] leading-[18.77px] 2xl:leading-[18.77px] font-normal mt-6 " style={{ color: item?.mode === 'Online' ? '#92D1FB' : item?.mode === 'Hybrid' ? '#FF8500' : 'none' }}>{item?.mode}</h3>
                                <h2 className="uppercase font-medium text-[30px] lg:text-[25px] 2xl:text-[30px]  leading-[35.19px] text-[#4C4C4D] md:text-[20px] md:leading-tight">{item?.heading}</h2>
                                <p className="text-[16px] font-light leading-[25.81px] lg:text-[19px] lg:leading-tight 2xl:text-[22px] md:text-[15px] md:leading-tight">{item?.description}</p>
                            </div>
                            <div>
    {item?.btn_link && item?.btn_link.trim() !== "" ? (
        <a href={item?.btn_link} target='_blank'>
            <button 
                
                className="mt-6 rounded-full w-[165px] h-[39px] md:w-[100px] md:text-[10px] md:h-[28px] lg:w-[165px] lg:h-[39px] lg:text-[12px]" 
                style={{ 
                    backgroundColor: item?.mode === 'Online' ? '#92D1FB' : item?.mode === 'Hybrid' ? '#FF8500' : item?.mode === 'Offline' ? 'white' : 'none', 
                    border: item?.mode === 'Offline' ? '1px solid orange' : 'none', 
                    color: item?.mode === 'Offline' ? '#4C4C4D' : 'white' 
                }}
            >
                Apply Now<span className="ml-3">&rarr;</span>
            </button>
        </a>
    ) : (
        <button 
            onClick={() => {
                setPopup(true)
                setFormId(item?.form_id);
                setCourseName({ program_name: item?.heading, program_id: item?._id })
            }} 
            className="mt-6 rounded-full w-[165px] h-[39px] md:w-[100px] md:text-[10px] md:h-[28px] lg:w-[165px] lg:h-[39px] lg:text-[12px]" 
            style={{ 
                backgroundColor: item?.mode === 'Online' ? '#92D1FB' : item?.mode === 'Hybrid' ? '#FF8500' : item?.mode === 'Offline' ? 'white' : 'none', 
                border: item?.mode === 'Offline' ? '1px solid orange' : 'none', 
                color: item?.mode === 'Offline' ? '#4C4C4D' : 'white' 
            }}
        >
            Apply Now<span className="ml-3">&rarr;</span>
        </button>
    )}
    <Link href={`/educations/${item._id}`}>
        <button className="px-2 text-orange-500 underline">View</button>
    </Link>
</div>

                        </div>
                    ))}
                </div>
                <div className="flex flex-row items-center justify-center mt-8">
                    {visible < courseList?.length && (
                        <button onClick={loadmore} className="text-[26px] font-light leading-[30.44px] flex gap-5 lg:text-[25px] 2xl:text-[30px] md:text-[20px]">Load More <span className="text-[#FF8500] w-[27.22px] h-[30.01px] md:mt-1"><SlReload /> </span> </button>
                    )}
                </div>
                {popup && <FormSubmission name={courseName} orderHideHandler={hideHandler} id={formId} />}

            </div>
        </SnackbarProvider>

    )
}

export default LoadMore

