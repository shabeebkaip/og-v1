"use client"
import { useEffect, useState } from "react"
import { SlReload } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";
import FormSubmission from '@/app/shared/components/FormSubmission'
import { SnackbarProvider } from 'notistack'
import { authenticateUser } from '@/app/shared/api'
import CourseCard from "./CourseCard";







const LoadMore = ({ courseList, mode }) => {
    const [visible, setVisible] = useState(4);
    const [courseName, setCourseName] = useState(null)
    const [formId, setFormId] = useState(null)
    const [popup, setPopup] = useState(false);

    const hideHandler = () => {
        setPopup(false)
    }

    const loadmore = () => {
        setVisible(prev => prev + 4);
    }

    if (!Array.isArray(courseList) || courseList.length === 0) {
        return <div className="flex items-center justify-center text-5xl  text-orange-500 h-40">No {mode} Courses Found</div>;
    }


    const authenticateUserFn = () => {
        authenticateUser();
    };
    return (
        <SnackbarProvider>
            <div className="container mx-auto">
                <div className="md:grid flex flex-col p-2  md:grid-cols-4 2xl:gap-2 lg:gap-3 lg:p-5 md:p-2 md:gap-2">
                    {courseList.filter(item => item.status).map((item, index) => (
                        <CourseCard key={index} setPopup={setPopup} setFormId={setFormId} setCourseName={setCourseName} item={item} id={item._id} authenticateUserFn={authenticateUserFn} />
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