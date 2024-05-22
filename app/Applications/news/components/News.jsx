'use client';
import { useEffect, useState } from "react"
import { SlReload } from "react-icons/sl";
import { globalGetService } from "@/app/utils/apiServices";
import moment from "moment"
import { displayDateFormatShort } from "../../../constant/index"
import Link from "next/link";
import { getNewsListApi } from "../api";

const News = () => {
    const [newsList, setNewsList] = useState([])
    const [newsPagination, setNewsPagination] = useState({})
    const [newsCategory, setNewsCategory] = useState([])
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    useEffect(() => {
        globalGetService('category', { key: 'news' })
            .then(response => {
                setNewsCategory(response.data)
            })
        globalGetService('news')
            .then(response => {
                setNewsList(response.data)
                setNewsPagination(response.pagination)
            })    
    }, [])
    const loadmore = () => {
        getNewsListApi({ page: newsPagination?.page + 1 }).then(res => {
            setNewsList([...newsList, ...res.data])
            setNewsPagination(res.pagination)
        })
    }
    const handleCategory = (id) => {
        setSelectedCategoryId(id)
        if (id === null) {
            getNewsListApi().then(res => setNewsList(res.data))
        } else {
            getNewsListApi({ category: id }).then(res => setNewsList(res.data))
        }
    }
    console.log(newsList, 'ssss')
    return (
        <div className="container mx-auto pb-8">
            <div className="flex flex-col ">
                <div className="relative flex flex-row justify-center gap-4 px-10 md:justify-end capitalize">
                    <p className={`text-base font-medium cursor-pointer  ${selectedCategoryId === null && 'bg-[#FF8500]  text-white px-3 rounded-xl'}`} onClick={() => handleCategory()}>
                        all
                    </p>
                    {
                        newsCategory?.map((item, index) => (
                            <button className={`text-black px-3 rounded-xl ${selectedCategoryId === item._id ? 'bg-[#FF8500] text-white' : ''}`}
                                key={index} onClick={() => handleCategory(item._id)}>
                                {item.name}
                            </button>
                        ))
                    }
                </div>
                <div className="">
                    <div className="flex-col p-2 md:grid md:grid-cols-4 2xl:gap-2 lg:gap-3 lg:p-5 md:p-2 md:gap-2">
                        {newsList?.map((item, index) => (
                            <div key={index} className="w-full p-1 mt-4 flex flex-col justify-between">
                                <div>
                                    <div className="w-full   h-60 bg-cover bg-top bg-no-repeat rounded-md " style={{ backgroundImage: `url(${item?.image?.[0]})` }} >
                                    </div>
                                    <h3 className="text-[16px] 2xl:text-[16px] md:text-[12px] lg:text-[14px] leading-[18.77px] 2xl:leading-[18.77px] font-normal mt-9 " >{item?.createdAt ? moment(item?.createdAt).format(displayDateFormatShort) : ""}</h3>
                                    <h2 className="uppercase font-medium text-[30px] lg:text-[25px] 2xl:text-[30px]  leading-[35.19px] text-[#4C4C4D] md:text-[20px] md:leading-tight">{item?.title}</h2>
                                    <p className="text-[22px] font-light leading-[25.81px] lg:text-[19px] lg:leading-tight 2xl:text-[22px] md:text-[15px] md:leading-tight">{item?.shortDescription}</p>
                                </div>
                                <Link href={`/news/${item._id}`} prefetch={true} >
                                    <button
                                        className="mt-6  md:mb-1 mb-14 rounded-full border border-[#FF8500] w-[165px] h-[39px] md:w-[100px] md:text-[10px] md:h-[28px] lg:w-[165px] lg:h-[39px] lg:text-[12px]" ><span>Read more&rarr;</span>
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center pt-8">
                    {newsList?.length < newsPagination?.totalCount && (
                        <button
                            onClick={loadmore}
                            className="text-[26px] font-light leading-[30.44px] flex gap-5 lg:text-[25px] 2xl:text-[30px] md:text-[20px]">Load More <span className="text-[#FF8500] w-[27.22px] h-[30.01px] md:mt-1"><SlReload /> </span> </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default News