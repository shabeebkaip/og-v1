

"use client";
import { useState, useEffect } from "react";
import { globalGetService } from "@/app/utils/apiServices";
import moment from "moment";
import { displayDateFormatShort } from "@/app/constant";
import Link from "next/link";
import { SlReload } from "react-icons/sl";
import { Box, Skeleton } from "@mui/material";
import { rejects } from "assert";

function Animations() {
  return (
    <>
      {Array.from(new Array(4)).map((_, index) => (
        <Box key={index} >
          <Skeleton height={300} />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      ))}
    </>
  );
}



const BlogsList = ({ blogs, categories, removeBlogId }) => {
  const [newsList, setNewsList] = useState([]);
  const [newsCategory, setNewsCategory] = useState(categories || []);
  const [pagination, setPagination] = useState({})
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [noNewsFound, setNoNewsFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadMoreLoader, setLoadMoreLoader] = useState(false)

  useEffect(() => {
    getBlogsListAPI({ page: 1 }, "skeleton")
  }, [blogs]);

  useEffect(() => {
    if (removeBlogId) {
      setNewsList(blogs.filter(item => item._id !== removeBlogId))
    }
  }, [removeBlogId, blogs])

  const handleCategory = (id) => {

    setSelectedCategoryId(id);
    if (id === null) {
      // 'All' category
      setNewsList(blogs);
      setNoNewsFound(false);
      getBlogsListAPI({ page: 1 }, "skeleton")
    } else {
      getBlogsListAPI({ category: id, page: 1 }, "skeleton")
    }
  };

  const loadMore = () => {
    if (selectedCategoryId) {
      getBlogsListAPI({ page: pagination.nextPage, category: selectedCategoryId }, "loadMore")
    } else {
      getBlogsListAPI({ page: pagination.nextPage }, "loadMore")

    }
  };

  const getBlogsListAPI = (query, loaderType) => {
    loaderType === "skeleton" ? setLoading(true) : setLoadMoreLoader(true)
    globalGetService("news", query)
      .then(response => {
        loaderType === "skeleton" ? setLoading(false) : setLoadMoreLoader(false)
        if (response.success) {
          query.page == 1 ? setNewsList(response.data) : setNewsList([...newsList, ...response.data])
          setPagination(response.pagination)
          setNoNewsFound(false)
        } else {
          loaderType === "skeleton" ? setLoading(false) : setLoadMoreLoader(false)
          setNewsList([])
          setNoNewsFound(true);

        }
      })
      .catch(err => {
        loaderType === "skeleton" ? setLoading(false) : setLoadMoreLoader(false)
        setNewsList([])
        setNoNewsFound(true)
      })
  }
  return (
    <div className="container mx-auto pb-8">
      <div className="relative flex flex-row justify-center gap-4 px-10 md:justify-end capitalize">
        <p
          className={`text-base font-medium cursor-pointer ${selectedCategoryId === null &&
            "bg-[#FF8500] text-white px-3 rounded-xl"
            }`}
          onClick={() => handleCategory(null)}
        >
          all
        </p>
        {newsCategory?.map((item, index) => (
          <button
            className={`text-black px-3 rounded-xl ${selectedCategoryId === item._id ? "bg-[#FF8500] text-white" : ""
              }`}
            key={index}
            onClick={() => handleCategory(item._id)}
          >
            {item.name}
          </button>
        ))}
      </div>
      {loading ? (
        <div className="grid grid-cols-4 gap-5">
          <Animations />
        </div>
      ) : (
        <div className="flex flex-col">

          <div className="">
            {noNewsFound ? (
              <p className="mt-8 flex justify-around text-red-500 text-[20px]">
                No News Found!
              </p>
            ) : (
              <div className="flex-col p-2 md:grid md:grid-cols-4 2xl:gap-2 lg:gap-3 lg:p-5 md:p-2 md:gap-2">
                {newsList?.map((item, index) => (
                  <div
                    key={index}
                    className="w-full p-1 mt-4 flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className="w-full h-60 bg-cover bg-top bg-no-repeat rounded-md"
                        style={{ backgroundImage: `url(${item?.image?.[0]})` }}
                      ></div>
                      <h3 className="text-[16px] 2xl:text-[16px] md:text-[12px] lg:text-[14px] leading-[18.77px] 2xl:leading-[18.77px] font-normal mt-9">
                        {item?.createdAt ? moment(item?.createdAt).format(displayDateFormatShort) : ""}
                      </h3>
                      <h2 className="uppercase font-medium sm:text-[30px] text-[25px] lg:text-[25px] 2xl:text-[30px] sm:leading-[35.19px] text-[#4C4C4D] md:text-[20px] md:leading-tight leading-7 sm:mt-0 mt-2 ">
                        {item?.title}
                      </h2>
                      <p className="sm:text-[22px] text-[16px] font-light leading-[25.81px] lg:text-[19px] lg:leading-tight 2xl:text-[22px] md:text-[15px] md:leading-tight sm:mt-0 mt-2 ">
                        {item?.shortDescription}
                      </p>
                    </div>
                    <Link href={`/blogs/${item._id}`} prefetch={true}>
                      <button className="mt-6 md:mb-1 mb-14 rounded-full border border-[#FF8500] w-[165px] h-[39px] md:w-[100px] md:text-[10px] md:h-[28px] lg:w-[165px] lg:h-[39px] lg:text-[12px]">
                        <span>Read more&rarr;</span>
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
          {!noNewsFound && (
            <div className="flex flex-row items-center justify-center pt-8">
              {pagination.currentPage === pagination.totalPages ? null : (
                <button
                  onClick={loadMore}
                  className="text-[26px] font-light leading-[30.44px] flex gap-5 lg:text-[25px] 2xl:text-[30px] md:text-[20px]"
                >
                  {loadMoreLoader ? 'Loading...' : "Load More "}

                  <span className="text-[#FF8500] w-[27.22px] h-[30.01px] md:mt-1">
                    <SlReload />
                  </span>
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogsList;
