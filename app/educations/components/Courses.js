"use client"
import { useEffect, useState } from "react";
import BlueGradient from "@/app/shared/components/BlueGradient";
import OrangeGradient from "@/app/shared/components/OrangeGradient";
import { CiSearch } from "react-icons/ci";
import { globalGetService } from "@/app/utils/apiServices";
import LoadMore from "./LoadMore";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function Animations() {
    return (
        <>
            {Array.from(new Array(4)).map((_, index) => (
                <Box key={index} sx={{ width: 300 }}>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                </Box>
            ))}
        </>
    );
}

function Courses({ courseLists }) {
    const [courseList, setCourseList] = useState(courseLists);
    const [query, setQuery] = useState('');
    const [mode, setMode] = useState('');
    const [loading, setLoading] = useState(false);

    const debouncedQuery = useDebounce(query, 300); // Debounce the query for 300ms

    useEffect(() => {
        if (debouncedQuery) {
            fetchCourses(debouncedQuery);
        }
    }, [debouncedQuery]);

    const fetchCourses = (query = '') => {
        setLoading(true);
        globalGetService('course-list', { q: query })
            .then(response => {
                setCourseList(response.data);
                setLoading(false);
                console.log("Courses fetched: ", response.data); // Debug log
            })
            .catch(error => {
                setLoading(false);
                console.error("Error fetching courses: ", error); // Debug log
            });
    };

    const filterCourse = (mode = '') => {
        setLoading(true);
        const params = {};
        if (mode) {
            params.mode = mode;
        }
        globalGetService('course-list', params)
            .then(response => {
                setCourseList(response.data);
                setLoading(false);
                console.log("Filtered courses: ", response.data);
            })
            .catch(error => {
                setLoading(false);
                console.error("Error filtering courses: ", error);
            });
    };

    const handleClick = (mode) => {
        filterCourse(mode);
        setMode(mode);
    };

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        if (e.key === 'Enter') {
            fetchCourses(query);
}
};


    return (
        <div className="container mx-auto font-Sans font-medium">
            <div className="lg:p-8 flex flex-row justify-center items-center mt-8 md:p-2 p-2 relative">
                <div className='absolute right-9 lg:-mt-64 h-[300px] w-[300px] md:block hidden'>
                    <OrangeGradient />
                </div>
                <div className="flex flex-col container mx-auto justify-center items-center">
                    <div className="uppercase font-normal text-[30px] md:text-[50px] text-[#4C4C4D] text-center leading-[44px] lg:leading-[70px] md:leading-[50px]">
                        <p>Online, offline, and hybrid</p>
                        <p><button className="uppercase border rounded-full px-5 text-[#FF8500] border-[#4C4C4D]">courses</button> available.</p>
                    </div>
                    <div className="font-normal md:text-[50px] text-[#4C4C4D] text-center mt-10 md:leading-[50px] lg:leading-[75px] hidden md:block">
                        <p><button className="uppercase md:border rounded-full px-5 text-[#FF8500] border-[#4C4C4D]">A variety of programs </button> Tailored</p>
                        <p>For Tech Enthusiasts.</p>
                    </div>
                    <div className="font-normal text-[#4C4C4D] text-center mt-10 block md:hidden text-[34px] leading-[44px]">
                        <p><button className="uppercase md:border rounded-full px-5 text-[#FF8500] border-[#4C4C4D]">A variety of programs </button></p>
                        <p className="">Tailored For Tech Enthusiasts.</p>
                    </div>
                    <div className="lg:text-[22px] text-[16px] text-center max-w-[800px] mt-8 leading-[25.81px] md:leading-[30px]">
                        <p className="text-[#4C4C4D] font-light">Access to top lecturers, professors, and our own expert founders who have contributed to our success stories.</p>
                    </div>
                    <div className="flex md:flex-row flex-col text-[16px] lg:text-[16px] md:text-[12px] leading-[18.77px] gap-4 mt-11 justify-center items-center">
                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                            <p className="cursor-pointer" onClick={() => handleClick('')}>All courses</p>
                            <button className="bg-[#92D1FB] rounded-full px-4 h-[35px] w-[119px] cursor-pointer" onClick={() => handleClick('Online')}>online</button>
                            <button className="rounded-full px-4 h-[35px] border border-[#4C4C4D] w-[119px] cursor-pointer" onClick={() => handleClick('Offline')}>offline</button>
                            <button className="rounded-full px-4 h-[35px] bg-[#FF8500] w-[119px] cursor-pointer" onClick={() => handleClick('Hybrid')}>hybrid</button>
                        </div>
                        <div className="flex flex-row gap-4 justify-center items-center">
                            <div className="border border-[#4C4C4D] rounded-full h-[35px] md:w-[249px] w-[200px] flex flex-row">
                                <CiSearch className="h-[30px] ml-2" />
                                <input
                                    type="text"
                                    value={query}
                                    onChange={handleSearchChange}
                                    onKeyDown={handleSearchSubmit}
                                    className="border-none outline-none py-1 md:w-[210px] lg:w-[210px] w-[160px] h-[20px] mt-2 ml-1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute left-0 h-[300px] w-[300px] hidden md:flex'>
                    <BlueGradient className='w-full' />
                </div>
            </div>
            {loading ? (
                <div className="grid grid-cols-4 gap-5">
                    <Animations />
                </div>

            ) : (
                <LoadMore courseList={courseList} />
            )}
        </div>
    );
}

export default Courses;