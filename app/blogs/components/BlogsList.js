'use client';
import {  useState } from "react"
import { globalGetService } from "@/app/utils/apiServices";
import moment from "moment"
import { displayDateFormatShort } from "@/app/constant"
import Link from "next/link";

const BlogsList = ({ blogs, categories }) => {
  const [newsList, setNewsList] = useState(blogs)
  const [newsCategory, setNewsCategory] = useState(categories ? categories : [])
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const handleCategory = (id) => {
    if (id === null || id === undefined) {
      setSelectedCategoryId(null)
      globalGetService('news').then(res => setNewsList(res.data))
    } else {
      setSelectedCategoryId(id)
      globalGetService('news', { category: id }).then(res => setNewsList(res.data))
    }
  }

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
                  <h2 className="uppercase font-medium sm:text-[30px] text-[25px] lg:text-[25px] 2xl:text-[30px]  sm:leading-[35.19px] text-[#4C4C4D] md:text-[20px] md:leading-tight leading-7 sm:mt-0 mt-2 ">{item?.title}</h2>
                  <p className="sm:text-[22px] text-[16px] font-light leading-[25.81px] lg:text-[19px] lg:leading-tight 2xl:text-[22px] md:text-[15px] md:leading-tight sm:mt-0 mt-2 ">{item?.shortDescription}</p>
                </div>
                <Link href={`/blogs/${item._id}`} prefetch={true} >
                  <button
                    className="mt-6  md:mb-1 mb-14 rounded-full border border-[#FF8500] w-[165px] h-[39px] md:w-[100px] md:text-[10px] md:h-[28px] lg:w-[165px] lg:h-[39px] lg:text-[12px]" ><span>Read more&rarr;</span>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogsList